import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Helper to get Gemini client lazily
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    throw new Error("GEMINI_API_KEY is not configured. Please add it to your Secrets in the Settings menu.");
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
}

// Clean and parse JSON returned from LLM safely, addressing potential syntax errors
function cleanAndParseJSON(rawText: string): any {
  let cleaned = rawText.trim();
  
  // Remove markdown codeblock wrapper if present
  if (cleaned.startsWith("```")) {
    // Remove starting ```json or ```
    cleaned = cleaned.replace(/^```(?:json)?\s*/i, "");
    // Remove ending ```
    cleaned = cleaned.replace(/\s*```$/, "");
  }
  
  cleaned = cleaned.trim();
  
  try {
    return JSON.parse(cleaned);
  } catch (err: any) {
    console.warn("Standard JSON parse failed, trying advanced parsing and cleanup...", err.message);
    
    // Attempt to find the outermost curly braces or square brackets
    const firstBrace = cleaned.indexOf("{");
    const lastBrace = cleaned.lastIndexOf("}");
    const firstBracket = cleaned.indexOf("[");
    const lastBracket = cleaned.lastIndexOf("]");
    
    let jsonCandidate = "";
    if (firstBrace !== -1 && lastBrace !== -1 && (firstBracket === -1 || firstBrace < firstBracket)) {
      jsonCandidate = cleaned.slice(firstBrace, lastBrace + 1);
    } else if (firstBracket !== -1 && lastBracket !== -1) {
      jsonCandidate = cleaned.slice(firstBracket, lastBracket + 1);
    }
    
    if (jsonCandidate) {
      try {
        return JSON.parse(jsonCandidate);
      } catch (innerErr: any) {
        console.warn("Advanced extraction failed, attempting trailing comma cleanup...", innerErr.message);
        // Attempt to fix trailing commas before } or ]
        let fixedCandidate = jsonCandidate
          .replace(/,\s*([}\]])/g, "$1") // remove trailing commas before } or ]
          .replace(/([{,]\s*)([a-zA-Z0-9_]+)\s*:/g, '$1"$2":'); // wrap unquoted keys in quotes if any
        try {
          return JSON.parse(fixedCandidate);
        } catch (e) {
          throw new Error(`JSON parsing failed even after extensive sanitization. Raw: ${rawText.substring(0, 200)}...`);
        }
      }
    }
    throw err;
  }
}

// Robust fallback wrapper for Gemini content generation
async function generateContentWithFallback(prompt: string, config?: any) {
  // Use recommended active models from the gemini-api skill
  const models = ["gemini-3.5-flash", "gemini-3.1-flash-lite", "gemini-flash-latest"];
  let lastError: any = null;

  for (const model of models) {
    const maxAttempts = 2;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        const ai = getGeminiClient();
        console.log(`Attempting content generation with model: ${model} (attempt ${attempt}/${maxAttempts})`);
        const response = await ai.models.generateContent({
          model,
          contents: prompt,
          config,
        });
        console.log(`Successfully generated content using model: ${model}`);
        return response;
      } catch (e: any) {
        lastError = e;
        const errMessage = String(e.message || e);
        console.warn(`Model ${model} failed on attempt ${attempt}/${maxAttempts}. Error:`, errMessage);
        
        // If it's a transient error (e.g. 503 UNAVAILABLE, 429 RATE_LIMIT, etc.), wait and retry
        const isTransient = errMessage.includes("503") || 
                            errMessage.includes("UNAVAILABLE") || 
                            errMessage.includes("429") || 
                            errMessage.includes("ResourceExhausted") ||
                            errMessage.includes("overload") ||
                            errMessage.includes("demand") ||
                            errMessage.includes("temporary");
                            
        if (isTransient && attempt < maxAttempts) {
          const delay = attempt * 500;
          console.log(`Transient error detected. Retrying model ${model} in ${delay}ms...`);
          await new Promise((resolve) => setTimeout(resolve, delay));
        } else {
          // If not transient, or we reached max attempts, break out of retry loop to switch model
          break;
        }
      }
    }
    // Wait slightly before trying the next model to avoid hitting temporary spikes instantly
    await new Promise((resolve) => setTimeout(resolve, 300));
  }

  throw new Error(`All Gemini models failed. Last error: ${lastError?.message || lastError}`);
}

// ==========================================
// FREE OFFLINE LOCAL AI PLANNING ENGINE FALLBACK
// ==========================================

const DEFAULT_HOTELS_AR = [
  { name: "فندق ريجنسي بلازا داون تاون", area: "وسط المدينة المركزي", priceRange: "متوسط مريح", whyChoose: "موقع استثنائي بجانب المترو ومحطة الحافلات والمعالم السياحية الرئيسية." },
  { name: "شقق روف العائلية الذكية", area: "الحي السياحي والتسوق", priceRange: "اقتصادي ممتاز", whyChoose: "غرف فسيحة ومجهزة للمجموعات والعائلات بأسعار مدروسة جداً." },
  { name: "منتجع بالاس رويال آند سبا", area: "المنطقة الساحلية الفخمة", priceRange: "VIP فاخر", whyChoose: "شاطئ خاص ومسابح لامتناهية وخدمات ضيافة وتدليك استثنائية." }
];

const DEFAULT_HOTELS_EN = [
  { name: "Regency Plaza Downtown", area: "Downtown Central", priceRange: "$$ Moderate", whyChoose: "Excellent central location close to transit hubs and iconic sights." },
  { name: "Rove Smart Family Suites", area: "Tourist & Shopping District", priceRange: "$ Budget-Friendly", whyChoose: "Spacious rooms highly rated for families and groups at unbeatable rates." },
  { name: "The Royal Palace Resort & Spa", area: "Luxury Waterfront Elite", priceRange: "$$$$ Luxury VIP", whyChoose: "Private beach access, infinity pools, and world-class culinary dining." }
];

const DEFAULT_TIPS_AR = [
  "احرص على شراء بطاقة مواصلات عامة مجمعة لتوفير أكثر من 40% من تكلفة التنقلات اليومية.",
  "حمل معك دائماً زجاجة ماء قابلة لإعادة التعبئة لتجنب الأسعار المرتفعة في المناطق السياحية المزدحمة.",
  "المساومة في الأسواق التقليدية والشعبية مقبولة جداً بل ومستحسنة للحصول على أفضل سعر.",
  "احرص على حجز تذاكر المعالم الرئيسية عبر الإنترنت مسبقاً لتجنب طوابير الانتظار الطويلة.",
  "جرب المطاعم الجانبية في الحارات القديمة؛ فهي تقدم الأكل الأصيل بنصف السعر مقارنة بالمطاعم المطلة مباشرة."
];

const DEFAULT_TIPS_EN = [
  "Purchase a bundled tourist transit pass to save over 40% on daily travel expenses.",
  "Keep a reusable water bottle handy to stay hydrated and avoid tourist trap pricing.",
  "Bargaining is expected and highly encouraged in traditional open-air markets and souks.",
  "Book entry tickets for major museums and towers online in advance to bypass long wait lines.",
  "Dine at side-street local taverns; they offer authentic local recipes at half the tourist-strip prices."
];

// Local Knowledge Base for popular destinations
const TRAVEL_KNOWLEDGE_BASE: Record<string, any> = {
  "dubai": {
    nameAr: "دبي، الإمارات العربية المتحدة",
    nameEn: "Dubai, United Arab Emirates",
    hotelsAr: [
      { name: "فندق العنوان داون تاون", area: "وسط مدينة دبي", priceRange: "VIP فاخر", whyChoose: "إطلالة مباشرة خلابة على برج خليفة ونافورة دبي الراقصة" },
      { name: "روڤ مارينا", area: "مرسى دبي", priceRange: "متوسط مريح", whyChoose: "موقع شبابي حيوي على ممشى المارينا وبأسعار منافسة جداً" },
      { name: "أوريس بلازا دبي", area: "البرشاء", priceRange: "اقتصادي متميز", whyChoose: "قريب من مول الإمارات ومحطة المترو مباشرة" }
    ],
    hotelsEn: [
      { name: "Address Downtown", area: "Downtown Dubai", priceRange: "$$$$ Luxury VIP", whyChoose: "Breathtaking views of Burj Khalifa and the Fountain show" },
      { name: "Rove Marina", area: "Dubai Marina", priceRange: "$$ Moderate", whyChoose: "Trendy, youthful vibe directly on the Marina walk at reasonable rates" },
      { name: "Auris Plaza", area: "Al Barsha", priceRange: "$ Budget-Friendly", whyChoose: "Steps away from Mall of the Emirates and Metro station" }
    ],
    daysAr: [
      { theme: "سحر ناطحات السحاب ووسط المدينة", activities: [
        { time: "صباحاً", title: "قمة برج خليفة ودبي مول", desc: "الصعود لأعلى منصة مشاهدة في العالم بالبرج ثم التسوق ورؤية الأكواريوم الضخم.", cost: "200 AED" },
        { time: "بعد الظهر", title: "عروض نافورة دبي الراقصة", desc: "الاستمتاع بعروض النافورة المائية الموسيقية المذهلة بوسط المدينة مجاناً.", cost: "مجاني" },
        { time: "مساءً", title: "بوليفارد الشيخ محمد بن راشد", desc: "مشي هادئ وجلسة مقهى في أحد أكثر شوارع العالم حيوية وفخامة.", cost: "50 AED" }
      ]},
      { theme: "عبق التراث وخور دبي التاريخي", activities: [
        { time: "صباحاً", title: "حي الفهيدي التاريخي (البستكية)", desc: "تجول بين البيوت الطينية القديمة وزيارة المتاحف التراثية الفنية.", cost: "مجاني" },
        { time: "بعد الظهر", title: "عبرة خور دبي وأسواق ديرة", desc: "ركوب القارب الخشبي التقليدي لشراء التوابل والذهب والزعفران بسعر رائع.", cost: "10 AED" },
        { time: "مساءً", title: "عشاء بحري في منطقة السيف", desc: "تناول وجبة إماراتية تراثية تطل على مياه الخور الهادئة.", cost: "90 AED" }
      ]},
      { theme: "مغامرة الكثبان الرملية الذهبية", activities: [
        { time: "صباحاً", title: "الاسترخاء وشراء الهدايا", desc: "وقت حر للاسترخاء في الفندق وتجول خفيف في مولات المدينة.", cost: "مجاني" },
        { time: "بعد الظهر", title: "سفاري دبي الصحراوي بالدفع الرباعي", desc: "انطلاق للبر، قيادة مثيرة على الكثبان، وركوب الجمال مع تصوير الغروب.", cost: "150 AED" },
        { time: "مساءً", title: "مخيم بدوي تقليدي وعروض حية", desc: "عشاء مشويات بوفيه مفتوح تحت النجوم مع عروض الفنون التراثية الحية.", cost: "مشمول مع السفاري" }
      ]}
    ],
    daysEn: [
      { theme: "Skyscrapers & Downtown Magic", activities: [
        { time: "Morning", title: "Burj Khalifa Top & Dubai Mall", desc: "Ascend to the high-altitude observation deck of Burj Khalifa and visit the aquarium.", cost: "200 AED" },
        { time: "Afternoon", title: "Dubai Fountain Show", desc: "Watch the spectacular musical water fountain displays at the waterfront for free.", cost: "Free" },
        { time: "Evening", title: "Sheikh Mohammed Blvd", desc: "Relaxing walk and cafe session along Dubai's most vibrant palm-lined boulevard.", cost: "50 AED" }
      ]},
      { theme: "Heritage & Historic Dubai Creek", activities: [
        { time: "Morning", title: "Al Fahidi Historical Neighborhood", desc: "Walk through wind-tower mud houses and discover ancient heritage museums.", cost: "Free" },
        { time: "Afternoon", title: "Abra Boat Ride & Deira Souks", desc: "Cross the historic creek on a traditional wooden boat to shop for gold and spices.", cost: "10 AED" },
        { time: "Evening", title: "Al Seef Waterfront Dinner", desc: "Traditional Emirati food with views of the old trade dhows on the water.", cost: "90 AED" }
      ]}
    ]
  },
  "london": {
    nameAr: "لندن، المملكة المتحدة",
    nameEn: "London, United Kingdom",
    hotelsAr: [
      { name: "The Savoy", area: "كوفنت غاردن", priceRange: "VIP فاخر", whyChoose: "الرفاهية البريطانية العريقة وإطلالة مذهلة على نهر التايمز" },
      { name: "CitizenM Tower of London", area: "برج لندن", priceRange: "متوسط حديث", whyChoose: "غرف ذكية مريحة وتطل مباشرة على جسر البرج والتاريخ" },
      { name: "Point A Hotel Kings Cross", area: "كينغز كروس", priceRange: "اقتصادي ذكي", whyChoose: "موقع مواصلات ممتاز يربطك بكافة قطارات ومناطق لندن بسهولة" }
    ],
    hotelsEn: [
      { name: "The Savoy", area: "Covent Garden", priceRange: "$$$$ Luxury VIP", whyChoose: "Quintessential British luxury and world-class heritage service." },
      { name: "CitizenM Tower of London", area: "Tower Hill", priceRange: "$$ Moderate", whyChoose: "Ultra-modern smart rooms right next to the historic Tower Bridge." },
      { name: "Point A Kings Cross", area: "Kings Cross", priceRange: "$ Budget-Friendly", whyChoose: "Excellent transit hub connecting you seamlessly to all of London." }
    ],
    daysAr: [
      { theme: "معالم العاصمة والرموز الملكية", activities: [
        { time: "صباحاً", title: "ساعة بيغ بن وبرلمان لندن", desc: "جولة تصوير بجانب ساعة لندن الخالدة، وجسر ويستمنستر القديم.", cost: "مجاني" },
        { time: "بعد الظهر", title: "قصر باكنغهام وحديقة سانت جيمس", desc: "مشاهدة تبديل الحرس الملكي والتنزه بين بجع البحيرة الهادئة.", cost: "مجاني" },
        { time: "مساءً", title: "غروب الشمس على عجلة لندن آي", desc: "مشاهدة بانورامية مذهلة للندن والتايمز من ارتفاع 135 متراً.", cost: "40 GBP" }
      ]},
      { theme: "عبق التاريخ ومتاجر ويست إند", activities: [
        { time: "صباحاً", title: "المتحف البريطاني العظيم", desc: "رؤية الكنوز العالمية وحجر رشيد التاريخي النادر.", cost: "مجاني" },
        { time: "بعد الظهر", title: "التسوق في شارع ريجنت وأكسفورد", desc: "تجربة تسوق في أرقى شوارع لندن وزيارة متجر ألعاب هاملز الشهير.", cost: "مجاني" },
        { time: "مساءً", title: "عشاء هادئ في كوفنت غاردن", desc: "وجبة لذيذة وسط العروض الموسيقية الحية والساحات القديمة المضاءة.", cost: "35 GBP" }
      ]}
    ],
    daysEn: [
      { theme: "Royal Icons & Big Ben Westminster", activities: [
        { time: "Morning", title: "Big Ben & Westminster Abbey", desc: "Marvel at London's iconic clock tower and take photographs on Westminster Bridge.", cost: "Free" },
        { time: "Afternoon", title: "Buckingham Palace & St. James's Park", desc: "Watch the Changing of the Guard and enjoy a stroll feeding the royal swans.", cost: "Free" },
        { time: "Evening", title: "Sunset Flight on London Eye", desc: "Enjoy majestic 360-degree twilight views of London's skyline from 135 meters high.", cost: "40 GBP" }
      ]},
      { theme: "World treasures & West End shopping", activities: [
        { time: "Morning", title: "The British Museum", desc: "Explore ancient global treasures and see the world-famous Rosetta Stone.", cost: "Free" },
        { time: "Afternoon", title: "Oxford & Regent Street Shopping", desc: "Stroll the beautiful curved streets and visit iconic stores like Hamleys.", cost: "Free" }
      ]}
    ]
  },
  "istanbul": {
    nameAr: "اسطنبول، تركيا",
    nameEn: "Istanbul, Turkey",
    hotelsAr: [
      { name: "Four Seasons Sultanahmet", area: "السلطان أحمد", priceRange: "VIP فاخر", whyChoose: "مبنى تاريخي ساحر بجوار آيا صوفيا والمسجد الأزرق" },
      { name: "Hotel Amira Istanbul", area: "السلطان أحمد", priceRange: "متوسط مميز", whyChoose: "خدمة دافئة وودودة للغاية وشرفة تطل على بحر مرمرة" },
      { name: "Vatan Suites", area: "الفاتح", priceRange: "اقتصادي عائلي", whyChoose: "شقق واسعة ملائمة للعائلات وقريبة من المترو والأسواق" }
    ],
    hotelsEn: [
      { name: "Four Seasons Sultanahmet", area: "Sultanahmet", priceRange: "$$$$ Luxury VIP", whyChoose: "Breathtaking heritage lodging steps away from Hagia Sophia." },
      { name: "Hotel Amira", area: "Sultanahmet", priceRange: "$$ Moderate", whyChoose: "Highly rated hospitality with a stunning rooftop facing Sea of Marmara." },
      { name: "Vatan Suites", area: "Fatih", priceRange: "$ Budget-Friendly", whyChoose: "Spacious family suites close to the metro and shopping bazaars." }
    ],
    daysAr: [
      { theme: "التاريخ العثماني وآيا صوفيا", activities: [
        { time: "صباحاً", title: "مسجد آيا صوفيا والمسجد الأزرق", desc: "تأمل العمارة البيزنطية والعثمانية المذهلة والتصميم الإسلامي الرائع.", cost: "مجاني" },
        { time: "بعد الظهر", title: "قصر توبكابي (الباب العالي)", desc: "مشاهدة كنوز السلاطين، وغرفة الأمانات المقدسة العريقة.", cost: "1500 TRY" },
        { time: "مساءً", title: "مشي دافئ بساحة السلطان أحمد", desc: "تجربة الذرة المشوية والكستناء التركية مع العشاء في مطعم مطل.", cost: "400 TRY" }
      ]},
      { theme: "روائع البوسفور وغروب غلاطة", activities: [
        { time: "صباحاً", title: "رحلة بحرية في مضيق البوسفور", desc: "إبحار يربط قارتي آسيا وأوروبا ورؤية القصور والجسور من البحر.", cost: "150 TRY" },
        { time: "بعد الظهر", title: "برج غلاطة وشوارع تقسيم", desc: "صعود البرج لرؤية القرن الذهبي، والمشي في شارع الاستقلال الشهير.", cost: "650 TRY" },
        { time: "مساءً", title: "عشاء شطيرة سمك في إمينونو", desc: "الوجبة الشعبية الأكثر شهرة بجوار جسر غلاطة التاريخي الحيوي.", cost: "150 TRY" }
      ]}
    ],
    daysEn: [
      { theme: "Byzantine & Ottoman Heritage", activities: [
        { time: "Morning", title: "Hagia Sophia & Blue Mosque", desc: "Marvel at the architectural splendor, massive domes, and exquisite blue tiles.", cost: "Free" },
        { time: "Afternoon", title: "Topkapi Palace Exploration", desc: "Walk through imperial courtyards and see incredible historic treasures of the Sultans.", cost: "1500 TRY" },
        { time: "Evening", title: "Sultanahmet Square Sunset", desc: "Try local roasted chestnuts and dine at an open-air rooftop overlooking the monument.", cost: "400 TRY" }
      ]},
      { theme: "Bosphorus Cruises & Galata Sunset", activities: [
        { time: "Morning", title: "Bosphorus Ferry Cruise", desc: "Sail between Asia and Europe, enjoying views of grand waterfront palaces.", cost: "150 TRY" },
        { time: "Afternoon", title: "Galata Tower & Istiklal Avenue", desc: "Get panoramic views from the stone tower, then ride the historic red tram.", cost: "650 TRY" }
      ]}
    ]
  },
  "tokyo": {
    nameAr: "طوكيو، اليابان",
    nameEn: "Tokyo, Japan",
    hotelsAr: [
      { name: "Park Hyatt Tokyo", area: "شينجوكو", priceRange: "VIP فاخر", whyChoose: "إطلالات لا تضاهى على جبل فوجي وخدمة أسطورية خمس نجوم." },
      { name: "Shibuya Stream Excel Hotel Tokyu", area: "شيبويا", priceRange: "متوسط مميز", whyChoose: "موقع شبابي رائع ونشط فوق محطة قطارات شيبويا مباشرة." },
      { name: "Hotel Gracery Shinjuku", area: "شينجوكو كابوتشيو", priceRange: "اقتصادي متميز", whyChoose: "يشتهر بمجسم رأس غودزيلا العملاق وقربه الشديد من المطاعم والقطارات." }
    ],
    hotelsEn: [
      { name: "Park Hyatt Tokyo", area: "Shinjuku", priceRange: "$$$$ Luxury VIP", whyChoose: "Iconic luxury hotel offering breathtaking views of Mt. Fuji and legendary service." },
      { name: "Shibuya Stream Excel Hotel", area: "Shibuya", priceRange: "$$ Moderate", whyChoose: "Vibrant, trendy hotel located directly above Shibuya station." },
      { name: "Hotel Gracery Shinjuku", area: "Kabukicho Shinjuku", priceRange: "$ Budget-Friendly", whyChoose: "Famous for the massive Godzilla head and proximity to restaurants & trains." }
    ],
    daysAr: [
      { theme: "أضواء شيبويا الحديثة وثقافة هاراجوكو", activities: [
        { time: "صباحاً", title: "مزار ميجي وضريح شنتو", desc: "المشي عبر الغابات الكثيفة المؤدية للضريح الأثري الهادئ في قلب الصخب الحركي.", cost: "مجاني" },
        { time: "بعد الظهر", title: "تقاطع شيبويا وشارع تاكيشيتا هاراجوكو", desc: "تجربة عبور التقاطع الأكثر ازدحاماً في العالم وتناول حلوى الكريب الشهيرة في شارع هاراجوكو الملون.", cost: "500 JPY" },
        { time: "مساءً", title: "منصة مشاهدة شيبويا سكاي", desc: "الاستمتاع بإطلالة بانورامية بزاوية 360 درجة مذهلة لغروب شمس طوكيو من السطح.", cost: "2200 JPY" }
      ]},
      { theme: "عبق أصالة الماضي في أساكوسا وثقافة الأنيمي", activities: [
        { time: "صباحاً", title: "معبد سينسو-جي القديم", desc: "زيارة أقدم معابد طوكيو البوذية والتجول في شارع ناكاميسي لبيع الهدايا التقليدية والحلويات.", cost: "مجاني" },
        { time: "بعد الظهر", title: "بلدة أكيهابارا الكهربائية للأنيمي والتقنية", desc: "تجول بين أكبر متاجر ألعاب الفيديو، المانجا، ومراكز الألعاب الإلكترونية الضخمة.", cost: "1000 JPY" },
        { time: "مساءً", title: "وجبة طعام محلي في زقاق الروباتاياكي", desc: "عشاء مشويات ساخنة على الفحم في أحد الأزقة الضيقة التاريخية بطوكيو.", cost: "3500 JPY" }
      ]}
    ],
    daysEn: [
      { theme: "Shibuya Crossing Magic & Harajuku Trends", activities: [
        { time: "Morning", title: "Meiji Jingu Shrine", desc: "Take a tranquil walk through thousands of towering trees to the grand Shinto shrine.", cost: "Free" },
        { time: "Afternoon", title: "Shibuya Crossing & Takeshita Street", desc: "Experience the world's busiest crosswalk and try giant cotton candy or crepes in colorful Harajuku.", cost: "500 JPY" },
        { time: "Evening", title: "Shibuya Sky Observatory Flight", desc: "Breathtaking 360-degree open-air rooftop views of Tokyo and Mt. Fuji at sunset.", cost: "2200 JPY" }
      ]},
      { theme: "Old Tokyo Asakusa & Akihabara Otaku Culture", activities: [
        { time: "Morning", title: "Senso-ji Temple & Nakamise", desc: "Explore Tokyo's oldest temple and buy red bean sweets from traditional wooden stalls.", cost: "Free" },
        { time: "Afternoon", title: "Akihabara Electric Town", desc: "Visit massive multi-story retro video game and anime merchandise stores.", cost: "1000 JPY" }
      ]}
    ]
  },
  "paris": {
    nameAr: "باريس، فرنسا",
    nameEn: "Paris, France",
    hotelsAr: [
      { name: "The Ritz Paris", area: "ساحة فاندوم", priceRange: "VIP فاخر", whyChoose: "فخامة فرنسية تاريخية لا مثيل لها وتاريخ غني وموقع مركزي." },
      { name: "Pullman Paris Tour Eiffel", area: "الدائرة الـ 15", priceRange: "متوسط مميز", whyChoose: "إطلالة مباشرة خلابة ومتقاربة جداً من برج إيفل ومحطة المترو." },
      { name: "Hotel ibis Paris Tour Eiffel", area: "كامبرون", priceRange: "اقتصادي عالي الجودة", whyChoose: "قريب من المترو ومنطقة البرج بأسعار معقولة للغاية وخدمة مريحة." }
    ],
    hotelsEn: [
      { name: "The Ritz Paris", area: "Place Vendôme", priceRange: "$$$$ Luxury VIP", whyChoose: "Legendary palace of French elegance and historic grandeur." },
      { name: "Pullman Paris Tour Eiffel", area: "15th Arr.", priceRange: "$$ Moderate", whyChoose: "Incredible direct views of the Eiffel Tower from your room balcon." },
      { name: "Hotel ibis Paris Tour Eiffel", area: "Cambronne", priceRange: "$ Budget-Friendly", whyChoose: "Highly convenient budget stay steps away from the metro and Champ de Mars." }
    ],
    daysAr: [
      { theme: "برج إيفل وأجواء نهر السين الرومانسية", activities: [
        { time: "صباحاً", title: "برج إيفل وساحة تروكاديرو", desc: "التقاط صور استثنائية من ساحة تروكاديرو، ثم صعود الطوابق لبرج إيفل.", cost: "28 EUR" },
        { time: "بعد الظهر", title: "رحلة نهر السين وقصر التويلري", desc: "ركوب العبارة الزجاجية بنهر السين والاستمتاع بمشاهدة معالم المدينة الشهيرة.", cost: "17 EUR" },
        { time: "مساءً", title: "شارع الشانزلزيه وقوس النصر", desc: "جولة تسوق وعشاء فاخر في أرقى شوارع باريس مع صعود قوس النصر.", cost: "13 EUR" }
      ]},
      { theme: "فنون متحف اللوفر وجاذبية مونمارتر", activities: [
        { time: "صباحاً", title: "متحف اللوفر العظيم", desc: "رؤية لوحة الموناليزا والمنحوتات والآثار الفرعونية المذهلة.", cost: "22 EUR" },
        { time: "بعد الظهر", title: "حي مونمارتر وكنيسة الساكري كور", desc: "المشي في حي الرسامين وصعود التلة لرؤية باريس من الأعلى من الكنيسة البيضاء الشهيرة.", cost: "مجاني" },
        { time: "مساءً", title: "جلسة قهوة فرنسية كلاسيكية وعشاء", desc: "تناول العشاء والكرواسون الساخن في مقهى دافئ في حي سان جيرمان.", cost: "30 EUR" }
      ]}
    ],
    daysEn: [
      { theme: "Eiffel Tower & Seine River Cruise Magic", activities: [
        { time: "Morning", title: "Eiffel Tower & Trocadéro Square", desc: "Capture postcards from the terrace and ascend the tower for an aerial Parisian panorama.", cost: "28 EUR" },
        { time: "Afternoon", title: "Seine River Cruise & Tuileries Garden", desc: "Relaxing glass boat tour followed by a walk through the royal gardens.", cost: "17 EUR" },
        { time: "Evening", title: "Champs-Élysées & Arc de Triomphe", desc: "Walk the historic avenue and view Paris's star-patterned streets from the monument top.", cost: "13 EUR" }
      ]},
      { theme: "Louvre Museum Art Treasures & Montmartre", activities: [
        { time: "Morning", title: "The Louvre Museum", desc: "Behold the Mona Lisa and Winged Victory inside the world's grandest art palace.", cost: "22 EUR" },
        { time: "Afternoon", title: "Montmartre Artists Quarter & Sacré-Cœur", desc: "Wander cobblestone lanes of painters and climb the hill to the white basilica.", cost: "Free" }
      ]}
    ]
  },
  "cairo": {
    nameAr: "القاهرة، مصر",
    nameEn: "Cairo, Egypt",
    hotelsAr: [
      { name: "The Ritz-Carlton Nile Cairo", area: "وسط البلد", priceRange: "VIP فاخر", whyChoose: "موقع رائع على ضفاف نهر النيل العظيم وقرب المتحف المصري والتحرير." },
      { name: "Steigenberger Pyramids Cairo", area: "الجيزة", priceRange: "متوسط مميز", whyChoose: "إطلالة ساحرة ومباشرة على الأهرامات العريقة من المسبح وغرف النزلاء." },
      { name: "فندق بارك بلازا التجمع", area: "القاهرة الجديدة", priceRange: "اقتصادي عائلي", whyChoose: "أجنحة فسيحة هادئة وقريبة من المولات والمطاعم الحديثة." }
    ],
    hotelsEn: [
      { name: "The Ritz-Carlton Nile Cairo", area: "Downtown Nile", priceRange: "$$$$ Luxury VIP", whyChoose: "World-class luxury with unparalleled views of the Nile and proximity to museums." },
      { name: "Steigenberger Pyramids", area: "Giza", priceRange: "$$ Moderate", whyChoose: "Fabulous pool and rooms overlooking the ancient Pyramids." },
      { name: "Park Plaza Hotel", area: "New Cairo", priceRange: "$ Budget-Friendly", whyChoose: "Spacious quiet suites, highly recommended for families close to shopping hubs." }
    ],
    daysAr: [
      { theme: "عظمة الفراعنة وأهرامات الجيزة الخالدة", activities: [
        { time: "صباحاً", title: "أهرامات الجيزة وتمثال أبو الهول", desc: "الوقوف بجانب الأهرامات الثلاثة العظيمة، ركوب الخيل، والتقاط صور مذهلة من الهضبة البانورامية.", cost: "240 EGP" },
        { time: "بعد الظهر", title: "المتحف المصري الكبير (أو التحرير)", desc: "مشاهدة التوابيت والكنوز الفرعونية وقناع توت عنخ آمون الذهبي النادر.", cost: "200 EGP" },
        { time: "مساءً", title: "جولة بالفلوكة في النيل وقت الغروب", desc: "ركوب القارب الشراعي التقليدي في مياه النيل الهادئة مع تناول العشاء الشرقي اللذيذ.", cost: "150 EGP" }
      ]},
      { theme: "عبق القاهرة التاريخية وتسوق خان الخليلي", activities: [
        { time: "صباحاً", title: "قلعة صلاح الدين الأيوبي ومسجد محمد علي", desc: "استكشاف القلعة الحربية الشامخة وتأمل العمارة العثمانية الرائعة للمسجد.", cost: "180 EGP" },
        { time: "بعد الظهر", title: "شارع المعز ودرب الجماميز وخان الخليلي", desc: "التجول في أكبر متحف إسلامي مفتوح وشراء الهدايا الفضية، العطور، والتحف التذكارية.", cost: "مجاني" },
        { time: "مساءً", title: "مقهى الفيشاوي التاريخي وعشاء كشري", desc: "جلسة شاي بالنعناع في المقهى الذي يرتاده الأدباء، تليها وجبة الكشري المصري الشهيرة.", cost: "100 EGP" }
      ]}
    ],
    daysEn: [
      { theme: "Grand Giza Pyramids & Sphinx Wonders", activities: [
        { time: "Morning", title: "Great Pyramids of Giza & Sphinx", desc: "Stand in awe of the ancient structures, ride a camel, and take panoramic desert pictures.", cost: "240 EGP" },
        { time: "Afternoon", title: "The Egyptian Museum", desc: "Discover thousands of gold treasures, mummies, and the legendary King Tut mask.", cost: "200 EGP" },
        { time: "Evening", title: "Nile River Felucca Sunset Ride", desc: "Sail on a traditional sailboat on the Nile, enjoying the skyline breeze and local dinner.", cost: "150 EGP" }
      ]},
      { theme: "Historic Islamic Cairo & Khan El-Khalili Bazaar", activities: [
        { time: "Morning", title: "Citadel of Saladin & Alabaster Mosque", desc: "Visit the massive medieval fortress and get sweeping city views from the terrace.", cost: "180 EGP" },
        { time: "Afternoon", title: "Al-Muizz Street & Khan El-Khalili", desc: "Walk through the historic spice markets and choose souvenir brass, rugs, and perfume oils.", cost: "Free" }
      ]}
    ]
  },
  "riyadh": {
    nameAr: "الرياض، المملكة العربية السعودية",
    nameEn: "Riyadh, Saudi Arabia",
    hotelsAr: [
      { name: "Four Seasons Riyadh", area: "برج المملكة", priceRange: "VIP فاخر", whyChoose: "يقع في برج المملكة الأيقوني مع إطلالات شاهقة وجسور معلقة." },
      { name: "Radisson Blu Hotel, Riyadh", area: "الملز", priceRange: "متوسط مميز", whyChoose: "ضيافة ممتازة للعائلات ورجال الأعمال وقريب من المواقع الترفيهية." },
      { name: "Centro Waha by Rotana", area: "طريق الملك فهد", priceRange: "اقتصادي ذكي", whyChoose: "غرف عصرية مريحة جداً وهادئة وبأسعار منافسة في المركز التجاري." }
    ],
    hotelsEn: [
      { name: "Four Seasons Hotel Riyadh", area: "Kingdom Centre", priceRange: "$$$$ Luxury VIP", whyChoose: "High-rise luxury in Riyadh's iconic skyscraper with unparalleled vistas." },
      { name: "Radisson Blu Riyadh", area: "Al Malaz", priceRange: "$$ Moderate", whyChoose: "Great services for families and groups, highly secure and close to parks." },
      { name: "Centro Waha by Rotana", area: "King Fahd Rd", priceRange: "$ Budget-Friendly", whyChoose: "Sleek, tech-savvy smart rooms in the commercial corridor at great rates." }
    ],
    daysAr: [
      { theme: "تاريخ الدرعية العريق وتطور الرياض الحديث", activities: [
        { time: "صباحاً", title: "حي الطريف التاريخي بالدرعية", desc: "زيارة مهد الدولة السعودية والقصور الطينية الأثرية في وادي حنيفة.", cost: "50 SAR" },
        { time: "بعد الظهر", title: "جسر المشاهدة المعلق ببرج المملكة", desc: "الصعود لارتفاع 300 متر لرؤية الرياض بأكملها من الأعلى تحت حماية الزجاج.", cost: "69 SAR" },
        { time: "مساءً", title: "بوليفارد سيتي الفاخر", desc: "الاستمتاع بأحدث الوجهات الترفيهية والمطاعم والنافورة الراقصة الكبيرة.", cost: "مجاني" }
      ]},
      { theme: "عبق الماضي التراثي بوسط الرياض والبوليفارد", activities: [
        { time: "صباحاً", title: "قصر المصمك التاريخي وسوق الزل", desc: "رؤية حصن الطين الأثري والتسوق لشراء العطور الشرقية، السجاد، والمشالح الفاخرة.", cost: "مجاني" },
        { time: "بعد الظهر", title: "المتحف الوطني السعودي", desc: "تأمل قصة الخلق والجزيرة العربية والآثار النفيسة في قاعات مذهلة وصديقة للمكفوفين.", cost: "10 SAR" },
        { time: "مساءً", title: "بوليفارد وورلد وعشاء نجدية", desc: "زيارة مناطق العالم الترفيهية المتعددة وتناول وجبة الكبسة أو المرقوق النجدية الأصيلة.", cost: "100 SAR" }
      ]}
    ],
    daysEn: [
      { theme: "Diriyah Heritage & Riyadh High Vistas", activities: [
        { time: "Morning", title: "At-Turaif District Diriyah", desc: "Walk through the mud palace complex, a UNESCO World Heritage site of Saudi origins.", cost: "50 SAR" },
        { time: "Afternoon", title: "Kingdom Centre Sky Bridge Flight", desc: "Ride the high-speed lift to the 99th floor for spectacular Riyadh skyline photos.", cost: "69 SAR" },
        { time: "Evening", title: "Boulevard City Entertainment", desc: "Experience theatrical zones, cinema squares, and world-class culinary brands.", cost: "Free" }
      ]},
      { theme: "Old Souqs Masmak & Boulevard World", activities: [
        { time: "Morning", title: "Masmak Fortress & Souq Al-Zal", desc: "Discover Riyadh's clay fortress of 1865 and stroll the traditional incense and carpet marketplace.", cost: "Free" },
        { time: "Afternoon", title: "National Museum of Saudi Arabia", desc: "Immersive galleries detailing geology, history, and ancient Islamic manuscripts.", cost: "10 SAR" }
      ]}
    ]
  },
  "rome": {
    nameAr: "روما، إيطاليا",
    nameEn: "Rome, Italy",
    hotelsAr: [
      { name: "Hotel de Russie", area: "بيازا ديل بوبولو", priceRange: "VIP فاخر", whyChoose: "حديقة فناء داخلية تاريخية مذهلة وقريب من السلالم الإسبانية." },
      { name: "Singer Palace Hotel", area: "وسط روما القديمة", priceRange: "متوسط مميز", whyChoose: "بجوار نافورة تريفي والبانثيون مباشرة ويسهل التنقل منه مشياً." },
      { name: "Hotel IQ Roma", area: "ساحة الجمهورية", priceRange: "اقتصادي ذكي", whyChoose: "تقييمات مذهلة ومفهوم خدمة ذاتية حديث وتقني وقريب من المترو." }
    ],
    hotelsEn: [
      { name: "Hotel de Russie", area: "Piazza del Popolo", priceRange: "$$$$ Luxury VIP", whyChoose: "Stunning private gardens, premium luxury, and steps from the Spanish Steps." },
      { name: "Singer Palace Hotel", area: "Rome Center", priceRange: "$$ Moderate", whyChoose: "Boutique luxury walking distance to Trevi Fountain and the Pantheon." },
      { name: "Hotel IQ Roma", area: "Repubblica", priceRange: "$ Budget-Friendly", whyChoose: "Innovative self-service concept with stellar reviews, close to central transit." }
    ],
    daysAr: [
      { theme: "عجائب روما الإمبراطورية والساحات الشهيرة", activities: [
        { time: "صباحاً", title: "مدرج الكولوسيوم والمنتدى الروماني", desc: "الوقوف في أكبر مسرح روماني تاريخي واستكشاف الساحة السياسية القديمة لروما.", cost: "18 EUR" },
        { time: "بعد الظهر", title: "نافورة تريفي والبانثيون", desc: "إلقاء عملة معدنية في النافورة الشهيرة وتأمل القبة الخرسانية التاريخية المفتوحة للبانثيون.", cost: "5 EUR" },
        { time: "مساءً", title: "السلالم الإسبانية وبيازا نافونا", desc: "جلسة دافئة على المدرجات الحجرية، وتناول وجبة باستا إيطالية أصيلة ومثلجات الجيلاتو الشهيرة.", cost: "25 EUR" }
      ]},
      { theme: "دولة الفاتيكان والفنون الخالدة لميكيلانجيلو", activities: [
        { time: "صباحاً", title: "متاحف الفاتيكان وكنيسة سيستينا", desc: "رؤية روائع مايكل أنجلو والمنحوتات والخرائط البابوية العريقة.", cost: "22 EUR" },
        { time: "بعد الظهر", title: "كاتدرائية القديس بطرس وساحة الفاتيكان", desc: "صعود قبة الكاتدرائية للحصول على أجمل إطلالة لروما والتقاط الصور الخلابة.", cost: "8 EUR" },
        { time: "مساءً", title: "عشاء في حي تراستيفيري الإيطالي العريق", desc: "أزقة مضاءة دافئة، مطاعم عائلية تقليدية، وتجربة بيتزا النابولي الساخنة اللذيذة.", cost: "30 EUR" }
      ]}
    ],
    daysEn: [
      { theme: "Imperial Rome Colosseum & Trevi Fountain", activities: [
        { time: "Morning", title: "The Colosseum & Roman Forum", desc: "Stand in the monumental amphitheater of gladiators and tour ancient temples.", cost: "18 EUR" },
        { time: "Afternoon", title: "Trevi Fountain & Pantheon Dome", desc: "Toss a coin into the historic fountain and marvel at the Pantheon's massive open skylight dome.", cost: "5 EUR" },
        { time: "Evening", title: "Spanish Steps & Piazza Navona", desc: "Climb the steps and relax over authentic Roman carbonara pasta and creamy gelato.", cost: "25 EUR" }
      ]},
      { theme: "Vatican Museum Treasures & Trastevere Alleys", activities: [
        { time: "Morning", title: "Vatican Museums & Sistine Chapel", desc: "Witness Michelangelo's ceiling frescoes and Renaissance masterpiece tapestries.", cost: "22 EUR" },
        { time: "Afternoon", title: "St. Peter's Basilica & Cupola Climb", desc: "Worship inside the world's largest cathedral and climb to the top for panoramic views.", cost: "8 EUR" },
        { time: "Evening", title: "Dinner in Trastevere", desc: "Delight in cozy glowing alleys, traditional family restaurants, and fresh Roman pizza.", cost: "30 EUR" }
      ]}
    ]
  },
  "bali": {
    nameAr: "بالي، إندونيسيا",
    nameEn: "Bali, Indonesia",
    hotelsAr: [
      { name: "Mandapa, Ritz-Carlton Reserve", area: "أوبود الغابات", priceRange: "VIP فاخر", whyChoose: "فلل خاصة مذهلة مع مسابح خاصة محاطة بحقول الأرز المورقة والنهر." },
      { name: "The Haven Bali Seminyak", area: "سمينياك الشاطئية", priceRange: "متوسط مميز", whyChoose: "على مسافة مشي قصيرة من الشاطئ والمطاعم والمقاهي العصرية الفاخرة." },
      { name: "Grand Mas Hotel Legian", area: "ليغيان", priceRange: "اقتصادي رائع", whyChoose: "مسبح رائع جداً، خدمات تدليك، وأسعار استثنائية توفر ميزانيتك." }
    ],
    hotelsEn: [
      { name: "Mandapa, Ritz-Carlton Reserve", area: "Ubud Rainforest", priceRange: "$$$$ Luxury VIP", whyChoose: "Incredible boutique villas with private pools flanked by active rice terraces." },
      { name: "The Haven Bali Seminyak", area: "Seminyak Beach", priceRange: "$$ Moderate", whyChoose: "Sophisticated resort close to trendy sunset beach clubs and dining boutiques." },
      { name: "Grand Mas Hotel Legian", area: "Legian Center", priceRange: "$ Budget-Friendly", whyChoose: "Excellent outdoor pool, wellness spa facilities, and unbeatable rates." }
    ],
    daysAr: [
      { theme: "سحر أوبود والغابات الاستوائية ومزارع الأرز الخضراء", activities: [
        { time: "صباحاً", title: "مزارع أرز تيجالالانج والجوائز المعلقة", desc: "تجول بين مدرجات الأرز الخضراء وتجربة أرجوحة بالي الشهيرة وسط الطبيعة الخلابة.", cost: "100000 IDR" },
        { time: "بعد الظهر", title: "محمية غابة القردة المقدسة", desc: "التفاعل والتقاط الصور مع القردة في بيئتهم الطبيعية والغابات المطيرة الكثيفة.", cost: "80000 IDR" },
        { time: "مساءً", title: "سوق أوبود التقليدي وعشاء بطعم بالي", desc: "شراء الهدايا الخشبية والمنسوجات وتناول وجبة البط المقلي المشهورة بأوبود.", cost: "150000 IDR" }
      ]},
      { theme: "شواطئ بالي وغروب معبد أولواتو الساحر", activities: [
        { time: "صباحاً", title: "معبد أولواتو فوق الصخرة الشاهقة", desc: "زيارة المعبد الأثري المطل على المحيط الهندي والتقاط أجمل صور الأمواج المتلاطمة.", cost: "50000 IDR" },
        { time: "بعد الظهر", title: "الاسترخاء في شاطئ بادانغ بادانغ", desc: "السباحة في المياه الفيروزية الدافئة والاستلقاء على الرمال الناعمة.", cost: "15000 IDR" },
        { time: "مساءً", title: "عشاء بحري رومانسي على شاطئ جيمباران", desc: "تناول المأكولات البحرية المشوية الطازجة على الرمل مباشرة وقت غروب الشمس الخلاب.", cost: "250000 IDR" }
      ]}
    ],
    daysEn: [
      { theme: "Ubud Sacred Rice Terraces & Monkey Forest", activities: [
        { time: "Morning", title: "Tegallalang Rice Terraces & Bali Swing", desc: "Wander the step-cut emerald valley terraces and swing over the tropical canopy.", cost: "100000 IDR" },
        { time: "Afternoon", title: "Sacred Monkey Forest Sanctuary", desc: "Walk through mossy jungle temples hosting hundreds of friendly grey macaques.", cost: "80000 IDR" },
        { time: "Evening", title: "Ubud Traditional Craft Market & Crispy Duck Dinner", desc: "Shop unique hand-woven bags and dine on slow-cooked Balinese duck dishes.", cost: "150000 IDR" }
      ]},
      { theme: "Uluwatu Sea Temple & Beachside Jimbaran Seafood", activities: [
        { time: "Morning", title: "Uluwatu Cliff Temple", desc: "Visit the stunning ocean-view temple built on an 80-meter tall sea cliff.", cost: "50000 IDR" },
        { time: "Afternoon", title: "Padang Padang Beach Surf Cove", desc: "Swim in a hidden cove framed by limestone rocks, popular for surfers.", cost: "15000 IDR" },
        { time: "Evening", title: "Jimbaran Bay Romantic Beach Seafood", desc: "Enjoy fresh grilled lobster and seafood directly on the sand during sunset.", cost: "250000 IDR" }
      ]}
    ]
  }
};

const USD_TO_LOCAL_RATES: Record<string, number> = {
  USD: 1.0,
  KWD: 0.31,
  BHD: 0.38,
  OMR: 0.39,
  EUR: 0.92,
  GBP: 0.79,
  AED: 3.67,
  SAR: 3.75,
  QAR: 3.64,
  TRY: 33.0,
  EGP: 48.0,
  JPY: 158.0,
  IDR: 16000.0
};

function getProceduralItinerary(dest: string, days: number, currency: string, budget: string, isAr: boolean) {
  const hash = dest.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  let currencyCode = "USD";
  if (currency.includes("AED")) currencyCode = "AED";
  else if (currency.includes("GBP")) currencyCode = "GBP";
  else if (currency.includes("TRY")) currencyCode = "TRY";
  else if (currency.includes("EUR")) currencyCode = "EUR";
  else if (currency.includes("EGP")) currencyCode = "EGP";
  else if (currency.includes("SAR")) currencyCode = "SAR";
  else if (currency.includes("KWD")) currencyCode = "KWD";
  else if (currency.includes("BHD")) currencyCode = "BHD";
  else if (currency.includes("OMR")) currencyCode = "OMR";
  else if (currency.includes("QAR")) currencyCode = "QAR";
  else {
    const codeMatch = currency.match(/[A-Z]{3}/);
    if (codeMatch) currencyCode = codeMatch[0];
  }

  let budgetScale = 1.0;
  if (budget.includes("Luxury") || budget.includes("فاخرة") || budget.toLowerCase().includes("vip")) {
    budgetScale = 3.5;
  } else if (budget.includes("Moderate") || budget.includes("متوسطة") || budget.toLowerCase().includes("moderate")) {
    budgetScale = 1.2;
  } else {
    budgetScale = 0.6;
  }

  const rate = USD_TO_LOCAL_RATES[currencyCode] || 1.0;

  const formatCost = (usdBase: number) => {
    if (usdBase === 0) return isAr ? "مجاني" : "Free";
    const rawLocal = usdBase * rate * budgetScale;
    if (currencyCode === "KWD" || currencyCode === "BHD" || currencyCode === "OMR") {
      return `${rawLocal.toFixed(2)} ${currencyCode}`;
    } else {
      return `${Math.round(rawLocal)} ${currencyCode}`;
    }
  };

  const poolAr = [
    {
      theme: "استكشاف معالم العاصمة والبلدة القديمة العتيقة",
      activities: [
        { time: "صباحاً", title: `زيارة المعلم التاريخي الرئيسي بـ ${dest}`, desc: `جولة مشي استكشافية برفقة مرشد محلي للتعرف على أسرار تأسيس القصر وتاريخ ${dest} العريق والتقاط الصور الخلابة.`, cost: `20 ${currency}` },
        { time: "بعد الظهر", title: `تذوق الغداء الشعبي التقليدي لـ ${dest}`, desc: `زيارة أفضل المطاعم العائلية في الزقاق الأثري لتناول الوجبة الوطنية الأكثر شهرة في هذه المنطقة والتي تطهى على الحطب.`, cost: `15 ${currency}` },
        { time: "مساءً", title: `ممشى الغروب البانورامي ومقهى الإطلالة الشاهقة`, desc: `الاستمتاع بفيضان الضوء الذهبي أثناء الغروب من أعلى قمة أو منصة مراقبة، تليها جلسة شاي دافئة بمقهى كلاسيكي.`, cost: `10 ${currency}` }
      ]
    },
    {
      theme: "عجائب الطبيعة والشلالات والغابات الاستوائية",
      activities: [
        { time: "صباحاً", title: `محمية ${dest} الطبيعية والممرات الخضراء`, desc: `جولة مشي صباحية بين أحضان الجبال أو الغابات المطيرة لرؤية تدفق الشلالات الصافية والاستمتاع بنقاء الجو والهواء العليل.`, cost: `15 ${currency}` },
        { time: "بعد الظهر", title: `رحلة قارب تقليدي بحيرة ${dest}`, desc: `إبحار هادئ بقارب خشبي بين القرى الريفية والوديان الخضراء المحيطة مع وجبة غداء خفيفة على متن القارب.`, cost: `25 ${currency}` },
        { time: "مساءً", title: `العشاء الريفي الفاخر ومراقبة النجوم`, desc: `تناول العشاء من المكونات العضوية الطازجة التي تشتهر بها مزارع ${dest}، وجلسة تأمل للنجوم في هدوء الطبيعة.`, cost: `30 ${currency}` }
      ]
    },
    {
      theme: "يوم التسوق الفاخر والأزياء والمقاهي الحضرية الحديثة",
      activities: [
        { time: "صباحاً", title: `بوليفارد ${dest} والشارع التجاري الفخم`, desc: `التجول بين بوتيكات المصممين المحليين والماركات العالمية الفخمة لاقتناء أرقى الهدايا التذكارية من ${dest}.`, cost: "مجاني" },
        { time: "بعد الظهر", title: `تجربة حلوى ${dest} التقليدية الشهيرة والقهوة المختصة`, desc: `الاستراحة بمقهى عريق اشتهر بتقديم صنف حلوى فريد تتوارث الأجيال سر صناعته في هذه المدينة.`, cost: `12 ${currency}` },
        { time: "مساءً", title: `عشاء رومانسي في حي الفنون والإبداع`, desc: `وجبة مبتكرة من الأكل الحديث الممزوج بالبهارات التقليدية في مطعم شهير وسط صالات الفنون المضاءة.`, cost: `35 ${currency}` }
      ]
    },
    {
      theme: "سحر السواحل البحرية ومغامرات الشاطئ والأنشطة المائية",
      activities: [
        { time: "صباحاً", title: `شاطئ ${dest} الفيروزي وجولة الغوص`, desc: `الاستمتاع بالرمال البيضاء الناعمة والسباحة مع تجربة الغوص السطحي لاستكشاف المرجان والأسماك الملونة الخلابة.`, cost: `30 ${currency}` },
        { time: "بعد الظهر", title: `غداء مأكولات بحرية طازجة مشوية على الفحم`, desc: `الاستمتاع بتناول وجبة سمك طازج يتم صيده صباحاً وإعداده بتتبيلة الساحل السرية الخاصة بأهل ${dest}.`, cost: `25 ${currency}` },
        { time: "مساءً", title: `ممشى اليخوت البحري والواجهة المائية للغروب`, desc: `نزهة لطيفة تطل على البحر واليخوت للاستمتاع بنسمات المحيط الباردة وأضواء المساء الساحرة بجوار الرصيف البحري.`, cost: `8 ${currency}` }
      ]
    },
    {
      theme: "مغامرة الطرق الوعرة والكهوف والقرية الجبلية الأثرية",
      activities: [
        { time: "صباحاً", title: `رحلة السفاري وسيارات الدفع الرباعي بتلال ${dest}`, desc: `انطلاق مغامرة مثيرة وموجهة عبر الأخاديد الصخرية والكهوف الجيرية الغامضة خارج حدود المدينة.`, cost: `45 ${currency}` },
        { time: "بعد الظهر", title: `زيارة بيت ريفي جبلي تقليدي والتعرف على كرمهم`, desc: `التعرف عن قرب على عادات وتقاليد أهل الأرياف بـ ${dest}، وتجربة طهي وجبة منزلية مع عائلة محلية ودودة.`, cost: `15 ${currency}` },
        { time: "مساءً", title: `عشاء المشويات حول الموقد وجلسة السمر`, desc: `جلسة دافئة حول الموقد العتيق تحت سماء خالية من التلوث، وعشاء مطهو على الحطب تحت النجوم البراقة.`, cost: `20 ${currency}` }
      ]
    }
  ];

  const poolEn = [
    {
      theme: "Exploring the Ancient Quarters & Historic Monuments",
      activities: [
        { time: "Morning", title: `Grand Historic Palace in ${dest}`, desc: `A walking tour led by a local guide to unveil the history, architecture, and secret stories of ${dest}.`, cost: `20 ${currency}` },
        { time: "Afternoon", title: `Lunch at ${dest} Historic Alleys`, desc: `Dine at a highly recommended family eatery serving the ultimate traditional recipes of this region cooked on woodfire.`, cost: `15 ${currency}` },
        { time: "Evening", title: `Sunset View Deck & Classic Tea Session`, desc: `Marvel at the golden hour from a high observation deck, followed by hot tea or coffee at an atmospheric cafe.`, cost: `10 ${currency}` }
      ]
    },
    {
      theme: "Mighty Waterfalls, Deep Forests & Eco-Nature Wonders",
      activities: [
        { time: "Morning", title: `${dest} Forest Trails & Waterfalls`, desc: `A peaceful morning walk alongside rushing rivers and mountain streams to breathe fresh pure air.`, cost: `15 ${currency}` },
        { time: "Afternoon", title: `Scenic Wooden Boat Cruise on Lake ${dest}`, desc: `Sail past quiet rural valleys and ancient villages on a traditional boat with complimentary drinks.`, cost: `25 ${currency}` },
        { time: "Evening", title: `Organic Farm-to-Table Dinner with Scenic Views`, desc: `Indulge in fresh organic dishes sourced directly from the fertile farms of ${dest} over soft local music.`, cost: `30 ${currency}` }
      ]
    },
    {
      theme: "Fashion Boulevards, High Streets & Modern Lifestyle Walk",
      activities: [
        { time: "Morning", title: `High Street Shopping & Artisan Craft Galleries`, desc: `Wander through elegant districts and select boutique-made authentic gifts and souvenirs.`, cost: "Free" },
        { time: "Afternoon", title: `Coffee & Landmark Traditional Pastry Tasting`, desc: `Relax at a historical coffee house famous for preparing a signature dessert whose secret recipe is decades old.`, cost: `12 ${currency}` },
        { time: "Evening", title: `Art Quarter Stroll & Modern Fusion Dinner`, desc: `Dine on spectacular modern cuisine infused with local spices, exploring glowing, art-filled alleys afterward.`, cost: `35 ${currency}` }
      ]
    },
    {
      theme: "Emerald Lagoons, Water Sports & Golden Hour Coastline",
      activities: [
        { time: "Morning", title: `${dest} Sandy Beaches & Coral Snorkeling`, desc: `Relax on powder-soft beaches and swim among beautiful tropical fish and coral formations.`, cost: `30 ${currency}` },
        { time: "Afternoon", title: `Grilled Catch-of-the-Day Waterfront Feast`, desc: `Feast on local seafood caught fresh this morning, grilled with local herbs right on the beachfront.`, cost: `25 ${currency}` },
        { time: "Evening", title: `Yacht Marina Harbor Walk & Sunset Drinks`, desc: `Watch luxurious yachts dock under the twilight sky while feeling the cool sea breeze.`, cost: `8 ${currency}` }
      ]
    },
    {
      theme: "Explorer Off-Road Safari, Caves & Starlit Campfire",
      activities: [
        { time: "Morning", title: `4x4 Off-Road Canyon Adventure in ${dest}`, desc: `An adventure across limestone canyons, cave formations, and off-road trails with spectacular points.`, cost: `45 ${currency}` },
        { time: "Afternoon", title: `Mountain Hamlet Visit & Warm Family Hospitality`, desc: `Connect with local farmers in ${dest}'s highlands inside their stone house and learn local baking techniques.`, cost: `15 ${currency}` },
        { time: "Evening", title: `Stargazing & Backcountry Open-Fire Barbecue`, desc: `Dine on slow-cooked skewers and view constellations under unpolluted dark night skies.`, cost: `20 ${currency}` }
      ]
    }
  ];

  const finalDays = [];
  for (let i = 0; i < days; i++) {
    const idx = (hash + i) % poolAr.length;
    const rawDay = isAr ? poolAr[idx] : poolEn[idx];
    const dayNum = i + 1;
    finalDays.push({
      dayNumber: dayNum,
      theme: rawDay.theme,
      activities: rawDay.activities.map(act => {
        let estimatedCost = act.cost;
        const lowerCost = act.cost.toLowerCase();
        if (!lowerCost.includes("free") && !lowerCost.includes("مجاني") && !lowerCost.includes("مشمول")) {
          const numMatch = act.cost.match(/\d+(\.\d+)?/);
          if (numMatch) {
            const baseUsd = parseFloat(numMatch[0]);
            estimatedCost = formatCost(baseUsd);
          }
        }
        return {
          timeOfDay: act.time,
          title: act.title,
          description: act.desc,
          estimatedCost,
          googleMapsSearchQuery: `${dest} ${act.title}`
        };
      })
    });
  }
  return finalDays;
}

function generateLocalPlan(destination: string, days: number, budget: string, travelStyle: string, travelersType: string, language: string) {
  const isAr = language === "ar";
  const destClean = destination.trim();
  
  // Decide currency
  let currency = isAr ? "دولار أمريكي ($)" : "USD ($)";
  const destLower = destClean.toLowerCase();
  if (destLower.includes("دبي") || destLower.includes("dubai") || destLower.includes("امارات") || destLower.includes("uae")) {
    currency = isAr ? "درهم إماراتي (AED)" : "AED";
  } else if (destLower.includes("لندن") || destLower.includes("london") || destLower.includes("uk") || destLower.includes("بريطانيا")) {
    currency = isAr ? "جنيه إسترليني (£)" : "GBP (£)";
  } else if (destLower.includes("تركيا") || destLower.includes("اسطنبول") || destLower.includes("turkey") || destLower.includes("istanbul")) {
    currency = isAr ? "ليرة تركية (TRY)" : "TRY";
  } else if (destLower.includes("أوروبا") || destLower.includes("باريس") || destLower.includes("paris") || destLower.includes("europe") || destLower.includes("روما") || destLower.includes("ايطاليا")) {
    currency = isAr ? "يورو (€)" : "EUR (€)";
  } else if (destLower.includes("مصر") || destLower.includes("egypt") || destLower.includes("cairo") || destLower.includes("القاهرة")) {
    currency = isAr ? "جنيه مصري (EGP)" : "EGP";
  } else if (destLower.includes("السعودية") || destLower.includes("الرياض") || destLower.includes("riyadh") || destLower.includes("saudi") || destLower.includes("جدة")) {
    currency = isAr ? "ريال سعودي (SAR)" : "SAR";
  } else if (destLower.includes("الكويت") || destLower.includes("kuwait")) {
    currency = isAr ? "دينار كويتي (KWD)" : "KWD";
  }

  let key = "generic";
  if (destLower.includes("dubai") || destLower.includes("دبي")) key = "dubai";
  else if (destLower.includes("london") || destLower.includes("لندن")) key = "london";
  else if (destLower.includes("istanbul") || destLower.includes("اسطنبول") || destLower.includes("turkey")) key = "istanbul";
  else if (destLower.includes("tokyo") || destLower.includes("طوكيو") || destLower.includes("japan") || destLower.includes("اليابان")) key = "tokyo";
  else if (destLower.includes("paris") || destLower.includes("باريس") || destLower.includes("france") || destLower.includes("فرنسا")) key = "paris";
  else if (destLower.includes("cairo") || destLower.includes("القاهرة") || destLower.includes("egypt") || destLower.includes("مصر")) key = "cairo";
  else if (destLower.includes("riyadh") || destLower.includes("الرياض") || destLower.includes("saudi") || destLower.includes("السعودية")) key = "riyadh";
  else if (destLower.includes("rome") || destLower.includes("روما") || destLower.includes("italy") || destLower.includes("ايطاليا")) key = "rome";
  else if (destLower.includes("bali") || destLower.includes("بالي")) key = "bali";

  let finalName = destClean;
  let finalHotels = isAr ? DEFAULT_HOTELS_AR : DEFAULT_HOTELS_EN;
  let finalTips = isAr ? DEFAULT_TIPS_AR : DEFAULT_TIPS_EN;
  let rawDays = [];
  const finalItinerary = [];

  let budgetScale = 1.0;
  if (budget.includes("Luxury") || budget.includes("فاخرة") || budget.toLowerCase().includes("vip")) {
    budgetScale = 3.5;
  } else if (budget.includes("Moderate") || budget.includes("متوسطة") || budget.toLowerCase().includes("moderate")) {
    budgetScale = 1.2;
  } else {
    budgetScale = 0.6;
  }

  let currencyCode = "USD";
  const curPrefix = currency.split(" ")[0];
  if (curPrefix.includes("AED")) currencyCode = "AED";
  else if (curPrefix.includes("GBP")) currencyCode = "GBP";
  else if (curPrefix.includes("TRY")) currencyCode = "TRY";
  else if (curPrefix.includes("EUR")) currencyCode = "EUR";
  else if (curPrefix.includes("EGP")) currencyCode = "EGP";
  else if (curPrefix.includes("SAR")) currencyCode = "SAR";
  else if (curPrefix.includes("KWD")) currencyCode = "KWD";
  else if (curPrefix.includes("BHD")) currencyCode = "BHD";
  else if (curPrefix.includes("OMR")) currencyCode = "OMR";
  else if (curPrefix.includes("QAR")) currencyCode = "QAR";
  else {
    const codeMatch = curPrefix.match(/[A-Z]{3}/);
    if (codeMatch) currencyCode = codeMatch[0];
  }
  const rate = USD_TO_LOCAL_RATES[currencyCode] || 1.0;

  if (key !== "generic" && TRAVEL_KNOWLEDGE_BASE[key]) {
    const entry = TRAVEL_KNOWLEDGE_BASE[key];
    finalName = isAr ? entry.nameAr : entry.nameEn;
    finalHotels = isAr ? entry.hotelsAr : entry.hotelsEn;
    rawDays = isAr ? entry.daysAr : entry.daysEn;
    
    for (let i = 0; i < days; i++) {
      const rawDay = rawDays[i % rawDays.length];
      const dayNum = i + 1;
      finalItinerary.push({
        dayNumber: dayNum,
        theme: isAr ? rawDay.theme.replace(/اليوم \d+/, `اليوم ${dayNum}`) : rawDay.theme.replace(/Day \d+/, `Day ${dayNum}`),
        activities: rawDay.activities.map((act: any) => {
          let estimatedCost = act.cost;
          const lowerCost = act.cost.toLowerCase();
          if (!lowerCost.includes("free") && !lowerCost.includes("مجاني") && !lowerCost.includes("مشمول")) {
            const numMatch = act.cost.match(/\d+(\.\d+)?/);
            if (numMatch) {
              const baseVal = parseFloat(numMatch[0]);
              
              // Detect original currency
              let origCurrency = "USD";
              if (lowerCost.includes("idr")) origCurrency = "IDR";
              else if (lowerCost.includes("eur")) origCurrency = "EUR";
              else if (lowerCost.includes("gbp")) origCurrency = "GBP";
              else if (lowerCost.includes("aed")) origCurrency = "AED";
              else if (lowerCost.includes("sar")) origCurrency = "SAR";
              else if (lowerCost.includes("try")) origCurrency = "TRY";
              else if (lowerCost.includes("egp")) origCurrency = "EGP";
              else if (lowerCost.includes("jpy")) origCurrency = "JPY";
              else if (lowerCost.includes("kwd")) origCurrency = "KWD";
              else if (lowerCost.includes("bhd")) origCurrency = "BHD";
              else if (lowerCost.includes("omr")) origCurrency = "OMR";
              else if (lowerCost.includes("qar")) origCurrency = "QAR";
              else if (lowerCost.includes("usd") || lowerCost.includes("$")) origCurrency = "USD";
              
              // Scale by budget tier in its local currency
              const scaledVal = baseVal * budgetScale;
              
              // Convert from original currency to target currencyCode
              const origRate = USD_TO_LOCAL_RATES[origCurrency] || 1.0;
              const valInUSD = scaledVal / origRate;
              const targetRate = USD_TO_LOCAL_RATES[currencyCode] || 1.0;
              const convertedVal = valInUSD * targetRate;
              
              if (currencyCode === "KWD" || currencyCode === "BHD" || currencyCode === "OMR") {
                estimatedCost = `${convertedVal.toFixed(2)} ${currencyCode}`;
              } else {
                estimatedCost = `${Math.round(convertedVal)} ${currencyCode}`;
              }
            }
          }
          return {
            timeOfDay: act.time,
            title: act.title,
            description: act.desc,
            estimatedCost,
            googleMapsSearchQuery: `${destClean} ${act.title}`
          };
        })
      });
    }
  } else {
    // Generate dynamically for any generic destination in the world using our smart procedural itinerary generator
    const proceduralDays = getProceduralItinerary(destClean, days, currency.split(" ")[0], budget, isAr);
    finalItinerary.push(...proceduralDays);
  }

  // Cost estimates based on budget and days
  let basePerDay = 150;
  if (budget.includes("Luxury") || budget.includes("فاخرة") || budget.toLowerCase().includes("vip")) {
    basePerDay = 1100;
  } else if (budget.includes("Moderate") || budget.includes("متوسطة") || budget.toLowerCase().includes("moderate")) {
    basePerDay = 450;
  } else {
    basePerDay = 150;
  }
  
  const rawTotal = basePerDay * days * rate;
  let estimatedTotal = "";
  if (currencyCode === "KWD" || currencyCode === "BHD" || currencyCode === "OMR") {
    estimatedTotal = `${rawTotal.toFixed(2)} ${currencyCode}`;
  } else {
    estimatedTotal = `${Math.round(rawTotal)} ${currencyCode}`;
  }

  // Set highlights properties dynamically
  let climate = isAr 
    ? "يختلف حسب الموسم؛ صيف معتدل، أمطار متوسطة، وشتاء لطيف بارد." 
    : "Varies by season. Warm summers, moderate rainfall, and cool winters.";
  let recommendedDates = isAr 
    ? "الربيع والخريف (أشهر الفترات الانتقالية توفر أفضل طقس)" 
    : "Spring and Autumn (the shoulder seasons offer pleasant weather)";
  let primaryLanguage = isAr 
    ? "اللغة المحلية للوجهة المحددة" 
    : "Local Language of the Destination";

  if (key === "dubai") {
    climate = isAr 
      ? "مناخ صحراوي جاف، حار جداً صيفاً ومعتدل دافئ شتاءً." 
      : "Arid desert climate with extremely hot summers and mild, pleasant winters.";
    recommendedDates = isAr 
      ? "من نوفمبر إلى مارس (أشهر الشتاء اللطيفة)" 
      : "November to March (cool winter months)";
    primaryLanguage = isAr 
      ? "العربية (الإنجليزية مستخدمة على نطاق واسع)" 
      : "Arabic (English is widely spoken)";
  } else if (key === "london") {
    climate = isAr 
      ? "مناخ بحري معتدل وممطر مع زخات خفيفة متكررة طوال العام." 
      : "Temperate maritime climate with frequent light showers throughout the year.";
    recommendedDates = isAr 
      ? "أواخر الربيع (مايو) إلى أوائل الخريف (سبتمبر)" 
      : "Late Spring (May) to Early Autumn (September)";
    primaryLanguage = isAr 
      ? "الإنجليزية" 
      : "English";
  } else if (key === "istanbul") {
    climate = isAr 
      ? "مناخ انتقالي، حار صيفاً وبارد رطب مع تساقط ثلوج أحياناً في الشتاء." 
      : "Transitional climate with warm summers and cool, wet, sometimes snowy winters.";
    recommendedDates = isAr 
      ? "من أبريل إلى مايو (الربيع) أو من سبتمبر إلى نوفمبر (الخريف)" 
      : "April to May (Spring) or September to November (Autumn)";
    primaryLanguage = isAr 
      ? "التركية" 
      : "Turkish";
  } else if (key === "tokyo") {
    climate = isAr 
      ? "معتدل ممطر رطب؛ صيف حار رطب، خريف رائع وشتاء بارد جاف." 
      : "Temperate, humid climate. Hot, humid summers, beautiful autumns, and cool, dry winters.";
    recommendedDates = isAr 
      ? "الربيع (مارس-مايو) لموسم الكرز، أو الخريف (سبتمبر-نوفمبر) لمشاهدة أوراق الشجر الحمراء." 
      : "Spring (March-May) for cherry blossoms, or Autumn (Sept-Nov) for foliage.";
    primaryLanguage = isAr ? "اليابانية" : "Japanese";
  } else if (key === "paris") {
    climate = isAr 
      ? "بحرية معتدلة؛ صيف دافئ لطيف، خريف ممطر، وشتاء بارد غير قارس." 
      : "Temperate maritime climate. Mild summers, rainy autumns, and cool winters.";
    recommendedDates = isAr 
      ? "من مايو إلى سبتمبر (الفترة الدافئة المشمسة)" 
      : "May to September (the warm, sunny period)";
    primaryLanguage = isAr ? "الفرنسية" : "French";
  } else if (key === "cairo") {
    climate = isAr 
      ? "صحراوي جاف؛ صيف حار جداً، ربيع دافئ، وشتاء لطيف معتدل مائل للبرودة ليلاً." 
      : "Hot desert climate. Extremely hot summers, warm spring, and mild, pleasant winters.";
    recommendedDates = isAr 
      ? "من أكتوبر إلى أبريل (أشهر الطقس البارد الرائع)" 
      : "October to April (cool, pleasant travel weather)";
    primaryLanguage = isAr ? "العربية" : "Arabic";
  } else if (key === "riyadh") {
    climate = isAr 
      ? "صحراوي جاف جداً وقاري؛ صيف شديد الحرارة نهاراً، شتاء معتدل البرودة وجميل ليلاً." 
      : "Very dry desert climate. Extremely hot summers, and cool, beautiful winters.";
    recommendedDates = isAr 
      ? "من نوفمبر إلى مارس (مواسم الرياض والطقس الشتوي الرائع)" 
      : "November to March (Riyadh seasons & cool winter temperatures)";
    primaryLanguage = isAr ? "العربية" : "Arabic";
  } else if (key === "rome") {
    climate = isAr 
      ? "بحر متوسط؛ صيف دافئ جاف، وشتاء لطيف رطب مع أمطار متوسطة." 
      : "Mediterranean climate. Warm, dry summers and mild, wet winters.";
    recommendedDates = isAr 
      ? "الربيع (أبريل-يونيو) أو الخريف (سبتمبر-أكتوبر) لطقس معتدل." 
      : "Spring (April-June) or Autumn (September-October) for pleasant weather.";
    primaryLanguage = isAr ? "الإيطالية" : "Italian";
  } else if (key === "bali") {
    climate = isAr 
      ? "استوائي دافئ ورطب طوال العام؛ ينقسم لموسم جاف وموسم ممطر." 
      : "Tropical, warm, and humid year-round with distinct dry and wet seasons.";
    recommendedDates = isAr 
      ? "من أبريل إلى أكتوبر (الموسم الجاف المثالي للسباحة والأنشطة)" 
      : "April to October (the dry season, perfect for beach & outdoors)";
    primaryLanguage = isAr ? "الإندونيسية (والبالية)" : "Indonesian (Bahasa Bali)";
  }

  return {
    destination: finalName,
    duration: days,
    currency: currency,
    totalEstimatedCost: estimatedTotal,
    travelTips: finalTips,
    recommendedHotels: finalHotels,
    itinerary: finalItinerary,
    climate,
    recommendedDates,
    primaryLanguage,
    isFreeFallback: true
  };
}

function sanitizeTravelPlanCosts(plan: any, budget: string, isAr: boolean) {
  if (!plan) return plan;

  const destClean = (plan.destination || "").trim();
  const destLower = destClean.toLowerCase();
  
  let localCurrency = "USD";
  if (destLower.includes("dubai") || destLower.includes("دبي") || destLower.includes("uae") || destLower.includes("امارات")) {
    localCurrency = "AED";
  } else if (destLower.includes("london") || destLower.includes("لندن") || destLower.includes("uk") || destLower.includes("بريطانيا")) {
    localCurrency = "GBP";
  } else if (destLower.includes("istanbul") || destLower.includes("اسطنبول") || destLower.includes("turkey") || destLower.includes("تركيا")) {
    localCurrency = "TRY";
  } else if (destLower.includes("tokyo") || destLower.includes("طوكيو") || destLower.includes("japan") || destLower.includes("اليابان")) {
    localCurrency = "JPY";
  } else if (destLower.includes("paris") || destLower.includes("باريس") || destLower.includes("france") || destLower.includes("فرنسا") || destLower.includes("rome") || destLower.includes("روما") || destLower.includes("italy") || destLower.includes("ايطاليا")) {
    localCurrency = "EUR";
  } else if (destLower.includes("cairo") || destLower.includes("القاهرة") || destLower.includes("egypt") || destLower.includes("مصر")) {
    localCurrency = "EGP";
  } else if (destLower.includes("riyadh") || destLower.includes("الرياض") || destLower.includes("saudi") || destLower.includes("السعودية")) {
    localCurrency = "SAR";
  } else if (destLower.includes("bali") || destLower.includes("بالي") || destLower.includes("indonesia") || destLower.includes("إندونيسيا")) {
    localCurrency = "IDR";
  }

  let targetCurrencyCode = "USD";
  const planCurrency = (plan.currency || "").toUpperCase();
  if (planCurrency.includes("AED") || planCurrency.includes("إماراتي")) targetCurrencyCode = "AED";
  else if (planCurrency.includes("GBP") || planCurrency.includes("إسترليني")) targetCurrencyCode = "GBP";
  else if (planCurrency.includes("TRY") || planCurrency.includes("ليرة")) targetCurrencyCode = "TRY";
  else if (planCurrency.includes("EUR") || planCurrency.includes("يورو")) targetCurrencyCode = "EUR";
  else if (planCurrency.includes("EGP") || planCurrency.includes("مصري")) targetCurrencyCode = "EGP";
  else if (planCurrency.includes("SAR") || planCurrency.includes("سعودي")) targetCurrencyCode = "SAR";
  else if (planCurrency.includes("KWD") || planCurrency.includes("كويتي") || planCurrency.includes("د.ك")) targetCurrencyCode = "KWD";
  else if (planCurrency.includes("BHD") || planCurrency.includes("بحريني") || planCurrency.includes("د.ب")) targetCurrencyCode = "BHD";
  else if (planCurrency.includes("OMR") || planCurrency.includes("عماني") || planCurrency.includes("ر.ع")) targetCurrencyCode = "OMR";
  else if (planCurrency.includes("QAR") || planCurrency.includes("قطري") || planCurrency.includes("ر.ق")) targetCurrencyCode = "QAR";
  else if (planCurrency.includes("JPY") || planCurrency.includes("ين")) targetCurrencyCode = "JPY";
  else if (planCurrency.includes("IDR") || planCurrency.includes("روبية")) targetCurrencyCode = "IDR";

  const sanitizeCostString = (costStr: string, isTotal: boolean = false) => {
    if (!costStr) return costStr;
    const lowerCost = costStr.toLowerCase();
    if (lowerCost.includes("free") || lowerCost.includes("مجاني") || lowerCost.includes("مشمول") || lowerCost.includes("نعم")) {
      return costStr;
    }

    const numMatch = costStr.replace(/,/g, "").match(/\d+(\.\d+)?/);
    if (!numMatch) return costStr;

    let val = parseFloat(numMatch[0]);

    const isExcessive = 
      (["USD", "EUR", "GBP", "KWD", "BHD", "OMR"].includes(targetCurrencyCode) && (isTotal ? val > 15000 : val > 1500)) ||
      (["SAR", "AED", "QAR"].includes(targetCurrencyCode) && (isTotal ? val > 60000 : val > 6000));

    if (isExcessive && localCurrency !== "USD" && targetCurrencyCode !== localCurrency) {
      const localRate = USD_TO_LOCAL_RATES[localCurrency] || 1.0;
      const valInUSD = val / localRate;
      const targetRate = USD_TO_LOCAL_RATES[targetCurrencyCode] || 1.0;
      val = valInUSD * targetRate;

      if (targetCurrencyCode === "KWD" || targetCurrencyCode === "BHD" || targetCurrencyCode === "OMR") {
        return `${val.toFixed(2)} ${plan.currency || (isAr ? "دولار أمريكي" : "USD")}`;
      } else {
        return `${Math.round(val)} ${plan.currency || (isAr ? "دولار أمريكي" : "USD")}`;
      }
    }

    return costStr;
  };

  if (plan.totalEstimatedCost) {
    plan.totalEstimatedCost = sanitizeCostString(plan.totalEstimatedCost, true);
  }

  if (Array.isArray(plan.itinerary)) {
    plan.itinerary.forEach((day: any) => {
      if (Array.isArray(day.activities)) {
        day.activities.forEach((act: any) => {
          if (act.estimatedCost) {
            act.estimatedCost = sanitizeCostString(act.estimatedCost, false);
          }
        });
      }
    });
  }

  return plan;
}

function generateFreeAssistant(action: string, input: string, language: string) {
  const isAr = language === "ar";
  if (action === "budget-calculator") {
    const breakdown = [
      { category: isAr ? "رحلات الطيران والنقل الداخلي" : "Flights & Internal Transit", cost: isAr ? "35% من الإجمالي" : "35% of total", percentage: 35, tips: isAr ? "احجز رحلتك قبل 6 أسابيع على الأقل لتأمين السعر الأفضل." : "Book at least 6 weeks early for optimal flight rates." },
      { category: isAr ? "الفنادق وأماكن الإقامة السكنية" : "Hotels & Stays", cost: isAr ? "30% من الإجمالي" : "30% of total", percentage: 30, tips: isAr ? "قارن بين الفنادق والشقق السكنية في أطراف الأحياء لتوفير هائل." : "Consider well-reviewed modern guesthouses slightly off center." },
      { category: isAr ? "الطعام والوجبات والمقاهي" : "Food, Dining & Cafes", cost: isAr ? "15% من الإجمالي" : "15% of total", percentage: 15, tips: isAr ? "وجبة الإفطار بالفندق والغداء في مطعم محلي توفر الكثير." : "Hotel breakfast + local street-food lunch saves a fortune." },
      { category: isAr ? "الأنشطة والتذاكر الترفيهية" : "Activities & Sightseeing", cost: isAr ? "12% من الإجمالي" : "12% of total", percentage: 12, tips: isAr ? "استخدم بطاقة المدينة الشاملة لتوفير الرسوم والانتظار." : "Check for free museum hours and city-bundled tourist cards." },
      { category: isAr ? "طوارئ ونثريات وهدايا" : "Emergency & Souvenirs", cost: isAr ? "8% من الإجمالي" : "8% of total", percentage: 8, tips: isAr ? "وفر دائماً قسماً للطوارئ الطبية أو لسيارات الأجرة." : "Always hold a buffer for local cabs or medical insurance." }
    ];
    return {
      summary: isAr 
        ? `دراسة مالية تقديرية ذكية مبنية على تحليل أبعاد الرحلة لـ "${input}" بهدف التوفير الأقصى.`
        : `Smart budget estimation sheet mapped specifically to maximize savings on your trip: "${input}".`,
      totalEstimatedCost: isAr ? "تخصيص كامل حسب تفضيلاتك" : "Customized to your preferences",
      breakdown,
      smartSavingsAdvice: isAr ? [
        "سافر خارج أوقات العطلات الرسمية والمواسم الكبرى لتحصل على وفورات تصل لـ 50%.",
        "استخدم بطاقات الدفع الإلكتروني الصديقة للسفر لتجنب رسوم تبديل العملات العالية في المطارات."
      ] : [
        "Travel during the shoulder season to cut major flight and hotel prices in half.",
        "Utilize local fee-free ATMs and specialized travel cards to avoid terrible exchange booth rates."
      ],
      isFreeFallback: true
    };
  } else if (action === "photo-spots") {
    const destLower = input.toLowerCase();
    let spots = [];

    if (destLower.includes("bali") || destLower.includes("بالي")) {
      spots = [
        {
          name: isAr ? "مدرجات أرز تيجالالانج" : "Tegallalang Rice Terraces",
          bestTime: isAr ? "الصباح الباكر عند الشروق" : "Early Morning Sunrise",
          compositionTip: isAr ? "التقط الصورة من زاوية علوية مائلة مع ممر مدرجات الأرز للحصول على عمق مذهل وتسلل أشعة الشمس عبر أشجار النخيل." : "Frame using the diagonal leading lines of the rice steps, capturing sunbeams breaking through palm trees.",
          description: isAr ? "الضباب الصباحي الخفيف واللون الأخضر الفيروزي للمدرجات مع الضوء الخافت يمنحك لقطة أسطورية ساحرة." : "The gentle morning mist and vivid green terraces under golden light create a mystical, dreamlike aesthetic.",
          exactLocationHint: isAr ? "بالقرب من نقطة المشاهدة الرئيسية بجوار الأرجوحة الخشبية الكبيرة." : "Near the main viewpoint ridge next to the giant wooden swing."
        },
        {
          name: isAr ? "بوابة معبد ليمبويانغ (بوابة الجنة)" : "Lempuyang Temple (Gate of Heaven)",
          bestTime: isAr ? "الصباح الباكر أو وقت الغروب" : "Early Morning or Sunset",
          compositionTip: isAr ? "استخدم مرآة عاكسة صغيرة أسفل عدسة الهاتف لمحاكاة انعكاس الماء المذهل تحت البوابة الحجرية الشاهقة." : "Place a small reflective glass below the lens to create a perfect mirror-reflection of the towering stone split gate.",
          description: isAr ? "البوابة الحجرية التقليدية تبرز جبل أغونغ البركاني الشاهق في الخلفية كلوحة مرسومة باليد." : "The traditional volcanic stone split-gate frames the mighty Mount Agung volcano perfectly in the background.",
          exactLocationHint: isAr ? "المنصة الرئيسية أمام البوابة في الساحة العلوية للمعبد." : "The central photo platform directly facing the gate in the upper courtyard."
        }
      ];
    } else if (destLower.includes("dubai") || destLower.includes("دبي")) {
      spots = [
        {
          name: isAr ? "ممشى بحيرة برج خليفة" : "Burj Khalifa Lake Waterfront",
          bestTime: isAr ? "مساءً أثناء عروض النوافير الراقصة" : "Evening during the dancing fountain shows",
          compositionTip: isAr ? "استخدم العدسة واسعة الزاوية من الأسفل لالتقاط قمة برج خليفة الشاهقة كاملة وانعكاس أضواء النافورة الملونة." : "Use an ultra-wide angle lens from a low position to capture the entire towering Burj Khalifa and fountain reflections.",
          description: isAr ? "تداخل الأضواء الحديثة والمياه المتراقصة مع أطول ناطحة سحاب في العالم يعطي لقطة حضرية فائقة الروعة." : "The vibrant play of dancing water jets and futuristic city lights against the world's tallest building is breathtaking.",
          exactLocationHint: isAr ? "على جسر سوق البحار الخشبي المطل مباشرة على البرج." : "On the Souk Al Bahar pedestrian bridge facing the Burj Khalifa."
        },
        {
          name: isAr ? "كثبان صحراء القدرة الذهبية" : "Al Qudra Golden Desert Dunes",
          bestTime: isAr ? "قبل الغروب بـ 30 دقيقة (الساعة الذهبية)" : "Golden Hour (30 minutes before sunset)",
          compositionTip: isAr ? "التقط تموجات الرمال الناعمة في الثلث السفلي من الكادر مع وضع الشمس المنخفضة في المركز لخلق ظلال درامية ممتدة." : "Highlight the soft wind-swept sand ripples in the lower frame, positioning the low sun centrally to cast long dramatic shadows.",
          description: isAr ? "الرمال الذهبية اللامعة تحت السماء البرتقالية الدافئة تعكس سحر وهدوء الصحراء العربية الأصيل." : "Glistening gold dunes under warm orange skies reflect the true, serene majesty of the Arabian desert.",
          exactLocationHint: isAr ? "فوق قمة أعلى كثيب رملي بعيداً عن آثار أقدام الزوار." : "Atop the highest dune ridge clean of footprints, past the lakes area."
        }
      ];
    } else if (destLower.includes("london") || destLower.includes("لندن")) {
      spots = [
        {
          name: isAr ? "جسر ويستمنستر ومبنى ساعة بيغ بن" : "Westminster Bridge facing Big Ben",
          bestTime: isAr ? "وقت الغروب أو عند إضاءة الساعة ليلًا" : "Sunset or twilight when the clock tower illuminates",
          compositionTip: isAr ? "التقط الصورة من ممر المشاة على الجسر مع إدخال باص لندن الأحمر التقليدي أثناء حركته باستخدام تعريض طويل." : "Position yourself on the bridge pathway, waiting to frame a red double-decker bus in motion using a slight long-exposure.",
          description: isAr ? "أيقونة لندن التاريخية وساعة بيغ بن الشامخة تطل على نهر التيمز الشهير بجاذبية كلاسيكية دافئة." : "London's most historic icon, Big Ben, stands proudly over the River Thames with timeless British charm.",
          exactLocationHint: isAr ? "من الركن الشرقي لجسر ويستمنستر بالقرب من الدرج المؤدي للممشى السفلي للنهر." : "On the east side of Westminster Bridge near the stairs leading to the lower embankment."
        },
        {
          name: isAr ? "أزقة حي نوتينغ هيل الملونة" : "Notting Hill Colorful Mews Alleys",
          bestTime: isAr ? "الضحى المتأخر قبل الظهيرة" : "Late morning with soft indirect daylight",
          compositionTip: isAr ? "اجعل واجهة المنازل الفيكتورية ذات الألوان الزاهية (الوردي، الأزرق الفاتح) تملأ الكادر مع وضع هدفك في المنتصف." : "Fill your frame with the brightly painted Victorian home facades, keeping the subject centered on the classic steps.",
          description: isAr ? "شارع ضيق هادئ مرصوف بالحصى تحيط به نباتات معلقة ومنازل ملونة كأنها جزء من فيلم سينمائي رومانسي." : "A quiet cobblestone mews lined with pastel pinks, baby blues, and hanging flower baskets straight out of a classic movie.",
          exactLocationHint: isAr ? "شارع سانت لوك مديوز الشهير المتفرع من الطرق الرئيسية." : "The famous St. Luke's Mews street, just a short walk from Ladbroke Grove."
        }
      ];
    } else if (destLower.includes("paris") || destLower.includes("باريس")) {
      spots = [
        {
          name: isAr ? "ساحة تروكاديرو المطلة على برج إيفل" : "Trocadéro Plaza facing Eiffel Tower",
          bestTime: isAr ? "عند الشروق لتفادي الحشود" : "Sunrise to avoid crowds",
          compositionTip: isAr ? "قف في منتصف السلالم الحجرية العريضة لتروكاديرو واجعل البرج متمركزاً تماماً في الخلفية مع الاستفادة من الإضاءة الصباحية الناعمة." : "Stand in the middle of the wide stone steps, centering the Eiffel Tower in the background while utilizing soft morning rays.",
          description: isAr ? "الإطلالة البانورامية الكاملة لبرج إيفل مع الحدائق الشاسعة والنوافير الممتدة بالأسفل." : "The ultimate, unobstructed view of the Eiffel Tower rising above the manicured gardens below.",
          exactLocationHint: isAr ? "فوق الشرفة العلوية لساحة تروكاديرو." : "On the main upper viewing terrace at Place du Trocadéro."
        },
        {
          name: isAr ? "شارع كيرمي المتعرج ذو الإطلالة الأنيقة" : "Rue de l'Université Photo Alley",
          bestTime: isAr ? "بعد الظهر أو الغسق" : "Afternoon or Twilight",
          compositionTip: isAr ? "التقط الصورة من زاوية منخفضة جداً لإبراز ضخامة برج إيفل الذي يلوح شامخاً بين المباني السكنية الباريسية القديمة." : "Shoot from a very low angle to emphasize the massive iron structure towering over classic Parisian residential buildings.",
          description: isAr ? "شارع مسدود يتمتع بهدوء ساحر وإطار في غاية الكلاسيكية والجاذبية الفرنسية العريقة." : "A picturesque cobblestone cul-de-sac framed beautifully by historic stone buildings and the Eiffel Tower.",
          exactLocationHint: isAr ? "نهاية شارع Rue de l'Université المتفرع من ساحة البرج." : "At the very end of Rue de l'Université near Champ de Mars."
        }
      ];
    } else if (destLower.includes("tokyo") || destLower.includes("طوكيو")) {
      spots = [
        {
          name: isAr ? "تقاطع شيبويا الشهير" : "Shibuya Crossing",
          bestTime: isAr ? "وقت الغروب أو عند حلول الظلام وإضاءة لوحات النيون" : "Sunset or night when giant neon screens light up",
          compositionTip: isAr ? "التقط حركية مرور المشاة الكثيفة في التقاطعات الخمسة باستخدام سرعة غالق بطيئة لإظهار ضبابية الحركة والحيوية الحضرية." : "Capture the massive flow of pedestrian traffic using a slightly slower shutter speed to create a vibrant motion-blur effect.",
          description: isAr ? "التقاط قلب طوكيو النابض بالحياة، الأضواء المستقبلية، والشاشات الرقمية الضخمة." : "The pulsing heart of modern Tokyo, surrounded by skyscraper-sized digital billboards and electric energy.",
          exactLocationHint: isAr ? "من نافذة المقهى بالطابق الثاني لمبنى ستارباكس المطل مباشرة على التقاطع." : "From the second-floor windows of the Starbucks building overlooking the intersection."
        },
        {
          name: isAr ? "معبد سينسوجي الأثري في أساكوسا" : "Senso-ji Temple in Asakusa",
          bestTime: isAr ? "الصباح الباكر أو بعد السابعة مساءً" : "Early morning or after 7 PM",
          compositionTip: isAr ? "التقط الفانوس الأحمر الضخم المعلق تحت بوابة الرعد (Kaminarimon) مع وضع هدفك تحته لتسليط الضوء على المعلم الديني." : "Frame the massive hanging red paper lantern of Kaminarimon Gate with your subject stood underneath for scale.",
          description: isAr ? "أقدم وأجمل معبد بوذي في طوكيو، يعكس التناغم الفخم بين التقاليد اليابانية القديمة والأضواء الهادئة." : "Tokyo's oldest and most majestic Buddhist temple, showcasing brilliant vermilion architecture and tranquil gardens.",
          exactLocationHint: isAr ? "أمام الفانوس الرئيسي لبوابة كاميناريمون." : "Directly underneath the giant lantern of the Kaminarimon Gate."
        }
      ];
    } else if (destLower.includes("istanbul") || destLower.includes("اسطنبول") || destLower.includes("إسطنبول") || destLower.includes("تركيا") || destLower.includes("turkey")) {
      spots = [
        {
          name: isAr ? "جامع أورتاكوي وجسر البوسفور" : "Ortaköy Mosque & Bosphorus Bridge",
          bestTime: isAr ? "الصباح الباكر أو وقت الغروب" : "Sunrise or Sunset",
          compositionTip: isAr ? "ضع تفاصيل المسجد الباروكية الرائعة في مقدمة الكادر مع امتداد جسر البوسفور المعلق الحديث في الخلفية لدمج الماضي والحاضر." : "Incorporate the baroque details of the mosque in the foreground with the suspension bridge sweeping behind.",
          description: isAr ? "إطلالة استثنائية تجمع جمال العمارة العثمانية مع مضيق البوسفور اللامع تحت السماء المتغيرة الألوان." : "A stunning waterfront scene combining classical Ottoman architecture and the modern transcontinental bridge.",
          exactLocationHint: isAr ? "على الرصيف البحري لساحة أورتاكوي بجوار الشاطئ." : "On the Ortaköy pier directly adjacent to the water's edge."
        },
        {
          name: isAr ? "تراس برج غالاتا" : "Galata Tower Vantage Point",
          bestTime: isAr ? "قبل الغروب (الساعة الذهبية)" : "Golden Hour",
          compositionTip: isAr ? "التقط الشوارع الضيقة المرصوفة بالحصى المؤدية إلى البرج من الأسفل، أو من الشرفات المجاورة مع طيور النورس المحلقة." : "Shoot from the steep cobbled streets looking up at the stone tower, or from nearby cafe terraces during seagull flights.",
          description: isAr ? "البرج الحجري التاريخي المهيب يرتفع فوق أسطح مباني القرن التاسع عشر في حي غالاتا العريق." : "The medieval stone tower rises high above the terracotta rooftops of Galata with amazing historical texture.",
          exactLocationHint: isAr ? "من زقاق Büyük Hendek Caddesi الشهير لالتقاط البرج كاملاً." : "From the Great Hendek Street alleyway looking upwards."
        }
      ];
    } else if (destLower.includes("cairo") || destLower.includes("القاهرة") || destLower.includes("مصر") || destLower.includes("egypt")) {
      spots = [
        {
          name: isAr ? "أهرامات الجيزة العظيمة" : "The Great Pyramids of Giza Panorama",
          bestTime: isAr ? "الصباح الباكر أو قبل الغروب" : "Early morning or late afternoon",
          compositionTip: isAr ? "اذهب إلى نقطة البانوراما لالتقاط الأهرامات الثلاثة في لقطة واحدة متدرجة، مع وضع الجمال أو الخيول لإبراز الروح الشرقية." : "Shoot from the high panorama dune to capture all three pyramids in one layered shot, incorporating camels for scale.",
          description: isAr ? "أعجوبة العالم القديم الوحيدة المتبقية شامخة وسط الرمال الذهبية اللامعة تحت شمس مصر الدافئة." : "The ancient world's last remaining wonder standing magnificent amidst glowing golden desert sands.",
          exactLocationHint: isAr ? "هضبة البانوراما الرئيسية داخل منطقة الأهرامات الأثرية." : "The Giza Plateau Panoramic viewpoint area."
        },
        {
          name: isAr ? "شارع المعز لدين الله الفاطمي" : "Al-Muizz Historic Street",
          bestTime: isAr ? "مساءً عند إضاءة المساجد والمباني" : "Evening after sunset when heritage lighting activates",
          compositionTip: isAr ? "التقط التفاصيل الهندسية لمسجد ومدرسة السلطان برقوق والسبيل الأثري مع حركة الناس وظلال المصابيح النحاسية الدافئة." : "Focus on the intricate Islamic archways of Qalawun and Sultan Barquq, illuminated by warm copper lanterns.",
          description: isAr ? "أكبر متحف مفتوح للآثار الإسلامية في العالم، ينبض بعبق التاريخ وتفاصيل العمارة المملوكية والفاطمية الساحرة." : "The world's greatest open-air museum of Islamic architecture, glowing with medieval street life and copper lamps.",
          exactLocationHint: isAr ? "بين مجمع قلاوون ومسجد السلطان برقوق." : "In front of the historic Sultan Barquq complex."
        }
      ];
    } else if (destLower.includes("riyadh") || destLower.includes("الرياض") || destLower.includes("السعودية") || destLower.includes("saudi")) {
      spots = [
        {
          name: isAr ? "حافة العالم الشاهقة" : "The Edge of the World (Jebel Fihrayn)",
          bestTime: isAr ? "قبل الغروب بساعة" : "One hour before sunset",
          compositionTip: isAr ? "اجعل الشخص يقف بحذر على حافة الجبل الصخري الشاهق مع تصوير واسع يظهر امتداد الأفق والوادي السحيق في الأسفل." : "Have your subject stand carefully on the rocky cliff outcrop, shooting a panoramic wide-angle to capture the endless dry ocean basin.",
          description: isAr ? "منحدرات صخرية مهيبة تبدو كأنها نهاية العالم، حيث تلتقي السماء بالأرض في مشهد طبيعي مهيب يخطف الأنفاس." : "Spectacular vertical cliffs rising from an ancient sea bed, offering some of the most database views in Arabia.",
          exactLocationHint: isAr ? "المطل الصخري الرئيسي المطل على الوديان المفتوحة." : "The main scenic cliff promontory overlooking the desert basin."
        },
        {
          name: isAr ? "حي الطريف التاريخي في الدرعية" : "At-Turaif District in Diriyah",
          bestTime: isAr ? "مساءً تحت الأضواء التراثية الدافئة" : "Evening under warm heritage spotlights",
          compositionTip: isAr ? "التقط الصورة مبرزاً العمارة النجدية الطينية الفريدة مع الأقواس المثلثية والزوايا الدائرية للقصر الحجري المضاء." : "Emphasize the unique mud-brick Najdi architecture with its triangular crenellations and glowing pathways.",
          description: isAr ? "مهد الدولة السعودية الأولى وموقع تراث عالمي لليونسكو، يتألق بجدرانه الطينية وقصوره التاريخية العريقة." : "A UNESCO World Heritage site showcasing glorious mud-brick palaces, glowing pathways, and Saudi heritage.",
          exactLocationHint: isAr ? "الممر الرئيسي المؤدي لقصر سلوى الأثري." : "The main pedestrian bridge or pathway facing Salwa Palace."
        }
      ];
    } else if (destLower.includes("rome") || destLower.includes("روما") || destLower.includes("إيطاليا") || destLower.includes("italy")) {
      spots = [
        {
          name: isAr ? "مدرج الكولوسيوم التاريخي" : "The Colosseum Viewpoint",
          bestTime: isAr ? "الصباح الباكر أو عند غروب الشمس" : "Early morning or golden hour sunset",
          compositionTip: isAr ? "التقط الكولوسيوم من السور الحجري المرتفع بالقرب من محطة المترو، واجعل نبات اللبلاب الأخضر يؤطر الصورة بشكل طبيعي." : "Shoot from the elevated stone ledge near the metro station, framing the monument with green ivy hanging naturally.",
          description: isAr ? "أعظم مدرج روماني تاريخي، يقف شاهداً على عظمة الإمبراطورية وتاريخها المليء بالأسرار والبطولات." : "The world's grandest ancient amphitheater, standing as a legendary testament to imperial Roman history.",
          exactLocationHint: isAr ? "السور الحجري المرتفع في شارع Via Nicola Salvi المطل على المدرج." : "On the elevated stone ledge on Via Nicola Salvi directly above the monument."
        },
        {
          name: isAr ? "نافورة تريفي الشهيرة" : "Trevi Fountain",
          bestTime: isAr ? "الصباح الباكر جداً (قبل الساعة السابعة صباحاً) لتفادي السياح" : "Very early morning (before 7 AM) to beat the crowds",
          compositionTip: isAr ? "التقط الصورة من حافة الحوض الرخامي من زاوية منخفضة لتضمين تماثيل الترايتون الهائلة واندفاع المياه الفيروزية الصافية." : "Shoot from the edge of the marble basin at a low angle to capture the massive marble Neptune statues and turquoise water.",
          description: isAr ? "تحفة فنية باروكية في غاية الفخامة والجمال، وتعد أشهر وأكبر نافورة مياه تاريخية في العالم." : "A breathtaking baroque masterpiece of marble sculptures and cascading clear waters, famous for coin tosses.",
          exactLocationHint: isAr ? "الدرج الرخامي الأيمن المؤدي مباشرة لحوض النافورة." : "The right-side marble steps leading down to the water edge."
        }
      ];
    } else {
      // Dynamic fallback for any generic destination in the world
      spots = [
        {
          name: isAr ? `مطل الغروب البانورامي الرئيسي بـ ${input}` : `Panoramic Sunset View of ${input}`,
          bestTime: isAr ? "قبل الغروب بـ 30 دقيقة (الساعة الذهبية)" : "30 mins before sunset (Golden Hour)",
          compositionTip: isAr ? "ضع المعلم التاريخي أو الأفق المعماري في الثلث الأيمن من الكادر لالتقاط انعكاس الشمس الدافئ." : "Position the skyline in the lower third of the frame using leading lines.",
          description: isAr ? `تظهر ${input} كاملة ببيوتها ومعالمها تحت الضوء الذهبي الدافئ المناسب للهواتف والكاميرات.` : `Captures the entire glowing scenery of ${input} draped in beautiful warm twilight.`,
          exactLocationHint: isAr ? "فوق منصة جسر الممشى أو التلة المطلة على المدينة." : "Stand directly on the pedestrian bridge or the central hill viewing point."
        },
        {
          name: isAr ? "البوابة الأثرية العتيقة المضاءة ليلًا" : "Grand Heritage Archway at Night",
          bestTime: isAr ? "مساءً بعد الساعة التاسعة" : "Late evening after 9 PM",
          compositionTip: isAr ? "استخدم الوضع الليلي بالهاتف مع التقاط من زاوية منخفضة لتكبير المعلم وإبراز جمال الأضواء." : "Shoot from a low angle with night-mode active to capture the brilliant spotlights.",
          description: isAr ? `الأنوار الفخمة تحيط بالجدران المزخرفة وتعطيك طابع قصص ألف ليلة وليلة والغموض الساحر لـ ${input}.` : `The architectural highlights of ${input} stand out magnificently against the ink-black night sky.`,
          exactLocationHint: isAr ? "الساحة المقابلة للمدخل الرئيسي بـ 25 متراً." : "Exactly 25 meters back from the main entrance archway."
        }
      ];
    }

    return {
      destination: input,
      spots,
      isFreeFallback: true
    };
  } else {
    return {
      response: isAr 
        ? `أهلاً بك! إليك الإجابة الذكية لـ "${input}": يُنصح دائماً بالالتزام بجداول الصباح الباكر وتجنب الأوقات المزدحمة مع الاحتفاظ بنسخة رقمية من جواز سفرك على هاتفك دائماً.`
        : `Greetings! Here is the response for "${input}": We highly recommend planning your visits in the early mornings, carrying digital copies of travel documents, and trying neighborhood eateries for real authentic culture.`,
      isFreeFallback: true
    };
  }
}

// GET APP CONFIG (Exposing only public non-sensitive variables like PAYPAL_CLIENT_ID)
app.get("/api/config", (req, res) => {
  res.json({
    paypalClientId: process.env.PAYPAL_CLIENT_ID || "sb" // Defaults to PayPal's "sb" (Sandbox) if not specified
  });
});

// 1. AI Trip Generator Endpoint
app.post("/api/generate-plan", async (req, res) => {
  const { destination, days, budget, travelStyle, travelersType, language = "ar", engine = "free" } = req.body;
  
  if (!destination || !days) {
    return res.status(400).json({ error: "Destination and days are required." });
  }

  // If user selected Free Engine OR if API Key is missing, do offline fallback instantly!
  if (engine === "free" || !process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "MY_GEMINI_API_KEY") {
    console.log(`Using Free Programmatic AI Engine for destination: ${destination}`);
    const localPlan = generateLocalPlan(destination, parseInt(days) || 5, budget, travelStyle, travelersType, language);
    return res.json(localPlan);
  }

  try {
    const ai = getGeminiClient();
    
    const prompt = `Create a highly-curated, realistic travel itinerary for:
Destination: ${destination}
Duration: ${days} days
Budget level / description: ${budget}
Travel Style: ${travelStyle || "General Sightseeing"}
Companion type: ${travelersType || "Solo / Family"}
Language of output: ${language === "ar" ? "Arabic" : "English"}

Please return the response as a JSON object matching this TypeScript interface exactly. Do not include markdown code block formatting except the JSON.
interface TravelPlan {
  destination: string;
  duration: number;
  currency: string;
  totalEstimatedCost: string;
  travelTips: string[];
  recommendedHotels: Array<{ name: string; area: string; priceRange: string; whyChoose: string }>;
  itinerary: Array<{
    dayNumber: number;
    theme: string;
    activities: Array<{
      timeOfDay: "صباحاً" | "بعد الظهر" | "مساءً" | "Morning" | "Afternoon" | "Evening";
      title: string;
      description: string;
      estimatedCost: string;
      googleMapsSearchQuery: string;
    }>;
  }>;
  climate: string;
  recommendedDates: string;
  primaryLanguage: string;
}

CRITICAL REQUIREMENT - 100% TOURIST INFORMATION ACCURACY AND FACTUALITY:
1. ABSOLUTELY NO HALLUCINATIONS: All suggested landmarks, tourist attractions, museums, streets, markets, parks, transit lines, and neighborhoods MUST be real, currently existing, and highly accurate for the specified destination.
2. GEOGRAPHICAL INTEGRITY: Group daily activities logically by physical proximity. Do not suggest impossible travel distances within the same day or same time-period. Recommended routes and locations must be realistic and physically accessible.
3. REALISTIC ESTIMATED COSTS: All pricing estimates for tickets, meals, transportation, and hotels must align accurately with current, up-to-date real-world averages for the destination and match the specified budget tier ("${budget}") perfectly. For instance, the Dubai Fountain (نافورة دبي) is completely free to watch, so its cost must always be 'Free' (or 'مجاني'), while the Burj Khalifa observation deck is a premium paid attraction (usually 180-250+ AED). Ensure all landmark prices represent their actual status (free vs. paid) correctly.
4. METEOROLOGICAL ACCURACY: The climate description and recommended dates/seasons must be 100% accurate, representing true historical weather patterns and local seasonal tourism highlights for that specific target city/country.
5. REAL HOTELS: Recommended hotels must be actual, real hotels existing in the described areas.
6. GOOGLE MAPS COMPATIBILITY: Every googleMapsSearchQuery must contain the exact, correct real-world search-friendly name of the attraction/place so that it resolves 100% correctly on live Google Maps.

CRITICAL FOR SPEED: Keep all generated texts and descriptions extremely short and concise to ensure lightning-fast output generation. Every activity description MUST be 1-2 very short sentences (maximum 12 words) containing only the most vital details. Include exactly 3 brief travelTips and exactly 3 recommendedHotels. Keep the itinerary theme under 5 words. Compact size is required for fast delivery!`;

    const response = await generateContentWithFallback(prompt, {
      responseMimeType: "application/json",
    });

    const text = response.text || "{}";
    let travelPlan = cleanAndParseJSON(text);
    travelPlan = sanitizeTravelPlanCosts(travelPlan, budget, language === "ar");
    res.json(travelPlan);
  } catch (error: any) {
    console.error("Gemini failed, falling back to local free engine:", error);
    const localPlan = generateLocalPlan(destination, parseInt(days) || 5, budget, travelStyle, travelersType, language);
    res.json(localPlan);
  }
});

// 2. Interactive AI Travel Tool (Specific Tools - e.g. Packing List, Prompt Generator, Budget Estimator)
app.post("/api/travel-assistant", async (req, res) => {
  const { action, input, language = "ar", engine = "free" } = req.body;

  if (engine === "free" || !process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === "MY_GEMINI_API_KEY") {
    console.log(`Using Free Programmatic Assistant for action: ${action}, input: ${input}`);
    const localAssistant = generateFreeAssistant(action, input, language);
    return res.json(localAssistant);
  }

  try {
    const ai = getGeminiClient();
    
    let prompt = "";
    if (action === "budget-calculator") {
      prompt = `Act as an expert travel accountant and cost estimator.
Analyze this trip concept: "${input}"
Provide an itemized budget calculation in ${language === "ar" ? "Arabic" : "English"}.
Return a JSON object:
{
  "summary": "Short professional summary",
  "totalEstimatedCost": "Estimated total",
  "breakdown": [
    { "category": "Flights / Transport", "cost": "Amount", "percentage": 30, "tips": "Tips to save" },
    { "category": "Accommodation", "cost": "Amount", "percentage": 35, "tips": "Tips to save" },
    { "category": "Food & Dining", "cost": "Amount", "percentage": 15, "tips": "Tips to save" },
    { "category": "Activities & Entry Tickets", "cost": "Amount", "percentage": 12, "tips": "Tips to save" },
    { "category": "Emergency / Miscellaneous", "cost": "Amount", "percentage": 8, "tips": "Tips to save" }
  ],
  "smartSavingsAdvice": ["saving tip 1", "saving tip 2"]
}`;
    } else if (action === "photo-spots") {
      prompt = `Act as a professional travel photographer.
Suggest the top 6 most stunning, scenic, or "Instagrammable" photo spots/hidden gems for: "${input}"
Provide the output in ${language === "ar" ? "Arabic" : "English"}.
Return a JSON object:
{
  "destination": "Name of destination",
  "spots": [
    { "name": "Spot Name", "bestTime": "Golden Hour / Sunrise / etc", "compositionTip": "How to frame the shot", "description": "Why it's scenic", "exactLocationHint": "Where to stand" }
  ]
}`;
    } else {
      prompt = `Answer this travel planning query with rich, insightful tips: "${input}" in ${language === "ar" ? "Arabic" : "English"}. Keep it concise and extremely helpful.`;
    }

    const response = await generateContentWithFallback(prompt, {
      responseMimeType: "application/json",
    });

    const text = response.text || "{}";
    res.json(cleanAndParseJSON(text));
  } catch (error: any) {
    console.error("Gemini failed, falling back to local free engine:", error);
    const localAssistant = generateFreeAssistant(action, input, language);
    res.json(localAssistant);
  }
});

// Configure Vite or Static Assets serving
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    // Development Mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    
    // Fallback index.html for SPA routing
    app.use("*", async (req, res, next) => {
      const url = req.originalUrl;
      try {
        let template = await vite.transformIndexHtml(url, `<!DOCTYPE html><html><body><div id="root"></div></body></html>`);
        // Note: index.html is in root
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    // Production Mode
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Tripza AI Server] Running at http://localhost:${PORT}`);
  });
}

setupServer();
