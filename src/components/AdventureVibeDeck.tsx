import React, { useState } from "react";
import { 
  Sparkles, 
  Compass, 
  Dices, 
  Download, 
  MapPin, 
  User, 
  Plane, 
  RotateCw, 
  Flame
} from "lucide-react";

// Secret Travel Challenge Cards definition
interface SecretChallenge {
  id: string;
  category: "adventure" | "history" | "cozy" | "culinary" | "mystery";
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  hintEn: string;
  hintAr: string;
  vibeTagEn: string;
  vibeTagAr: string;
  difficulty: "Easy" | "Medium" | "Hard" | "Legendary";
  difficultyAr: "سهل" | "متوسط" | "صعب" | "أسطوري";
  destinationEn: string;
  destinationAr: string;
}

const SECRET_CHALLENGES: SecretChallenge[] = [
  {
    id: "tokyo-ramen",
    category: "mystery",
    titleEn: "Shinjuku Vending Hunt",
    titleAr: "مطاردة آلات رامين شينجوكو",
    descEn: "Track down a legendary hidden 4-seat ramen vending shop tucked deep inside Shinjuku's neon alleyways at 2 AM.",
    descAr: "ابحث عن متجر رامين غامض يحتوي على 4 مقاعد فقط وآلة بيع آلية مخفي في عمق أزقة شينجوكو الضيقة والمضيئة بالنيون عند الساعة 2 صباحاً.",
    hintEn: "Look for the red glowing lantern with a small wooden cat figure above the doorway.",
    hintAr: "ابحث عن الفانوس الأحمر المتوهج الذي تعلوه دمية قطة خشبية صغيرة فوق المدخل.",
    vibeTagEn: "Midnight Neon Glow",
    vibeTagAr: "توهج النيون الليلي",
    difficulty: "Hard",
    difficultyAr: "صعب",
    destinationEn: "Tokyo, Japan",
    destinationAr: "طوكيو، اليابان"
  },
  {
    id: "paris-sunrise",
    category: "cozy",
    titleEn: "The Montmartre Rooftop Sunrise",
    titleAr: "شروق شمس مونمارتر السري",
    descEn: "Access a secret panoramic terrace near the Sacré-Cœur Basilica exactly 20 minutes before dawn with fresh hot croissants.",
    descAr: "اصعد لشرفة بانورامية مخفية بجوار كنيسة القلب المقدس قبل 20 دقيقة تماماً من شروق الشمس، برفقة كرواسون ساخن وطازج.",
    hintEn: "Behind the small artist square, follow the cobblestone steps with ivy climbing the walls.",
    hintAr: "خلف ساحة الفنانين الصغيرة، اتبع الدرج الحجري المبلط المتسلق عليه اللبلاب.",
    vibeTagEn: "Golden French Dawn",
    vibeTagAr: "فجر فرنسي ذهبي",
    difficulty: "Medium",
    difficultyAr: "متوسط",
    destinationEn: "Paris, France",
    destinationAr: "باريس، فرنسا"
  },
  {
    id: "petra-stars",
    category: "adventure",
    titleEn: "The Bedouin Treasure Star-Watch",
    titleAr: "تأمل نجوم الخزنة البدوية",
    descEn: "Lay flat on a hand-woven Bedouin rug directly in front of Petra's Treasury under a pitch-black sky illuminated by millions of stars.",
    descAr: "استلقِ على سجادة بدوية تقليدية منسوجة يدوياً مباشرة أمام مبنى الخزنة الشهير في البتراء تحت سماء حالكة السواد تملؤها ملايين النجوم المتلألئة.",
    hintEn: "Wait until the night tour crowds depart, and listen for the soft Bedouin flute in the distance.",
    hintAr: "انتظر حتى يغادر زوار الجولة الليلية، واستمع إلى صوت الناي البدوي العذب في الأفق.",
    vibeTagEn: "Ancient Desert Whispers",
    vibeTagAr: "همس الصحراء القديمة",
    difficulty: "Legendary",
    difficultyAr: "أسطوري",
    destinationEn: "Petra, Jordan",
    destinationAr: "البتراء، الأردن"
  },
  {
    id: "kyoto-bamboo",
    category: "cozy",
    titleEn: "The Arashiyama Dawn Path",
    titleAr: "مسار خيزران أراشيياما الصامت",
    descEn: "Walk through the giant Arashiyama bamboo grove at exactly 5:30 AM, completely alone, listening to the hollow stalks creaking in the morning wind.",
    descAr: "تجوّل عبر ممر أشجار الخيزران الشاهقة في أراشيياما في تمام الساعة 5:30 صباحاً بمفردك تماماً، واستمع إلى صرير الأعواد الخشبية المجوفة مع نسيم الصباح.",
    hintEn: "Take the side dirt path to avoid early joggers; the sound of the wind is loudest near the center loop.",
    hintAr: "اسلك الطريق الترابي الجانبي لتفادي الرياضيين؛ صوت الرياح يكون في أوجه عند الحلقة المركزية الغامضة.",
    vibeTagEn: "Zen Harmony",
    vibeTagAr: "تناغم الزن والسلام الداخلي",
    difficulty: "Easy",
    difficultyAr: "سهل",
    destinationEn: "Kyoto, Japan",
    destinationAr: "كيوتو، اليابان"
  },
  {
    id: "swiss-train",
    category: "adventure",
    titleEn: "Glacier Express High Coffee",
    titleAr: "قهوة ممر الجليد السويسري",
    descEn: "Sip espresso on the slowest express train in the world while traversing 291 breathtaking bridges over snowy Swiss mountain passes.",
    descAr: "ارتشف قهوة الإسبريسو على متن أبطأ قطار سريع في العالم أثناء عبور 291 جسراً مذهلاً فوق ممرات جبال الألب السويسرية الشاهقة والمليئة بالثلوج.",
    hintEn: "Book the panoramic window car and set your camera to time-lapse when crossing the Landwasser Viaduct.",
    hintAr: "احجز عربة النوافذ البانورامية واضبط كاميرتك على تصوير التايم لابس عند عبور جسر لاندواسر الشهير.",
    vibeTagEn: "Alpine Glacier Luxury",
    vibeTagAr: "فخامة جبال الألب الجليدية",
    difficulty: "Medium",
    difficultyAr: "متوسط",
    destinationEn: "Zermatt to St. Moritz, Switzerland",
    destinationAr: "زيرمات إلى سانت موريتز، سويسرا"
  },
  {
    id: "iceland-aurora",
    category: "mystery",
    titleEn: "Volcanic Hot Springs Soak",
    titleAr: "استرخاء الينابيع الساخنة البركانية",
    descEn: "Bathe in a natural, uncommercial geothermal stream in a volcanic valley while green aurora borealis dance overhead.",
    descAr: "استرخِ في ينبوع ساخن بركاني طبيعي ناءٍ وسط وادٍ مائي دافئ تماماً بينما ترقص أضواء الشفق القطبي الأخضر الساحرة في السماء فوقك.",
    hintEn: "Bring a headlamp and keep a warm wool beanie close to your head; steam makes the trail slippery.",
    hintAr: "أحضر مصباحاً رأسياً واحتفظ بقبعة صوفية دافئة قريبة منك؛ يتسبب البخار في جعل الطريق المحيط زلقاً.",
    vibeTagEn: "Cosmic Geothermal Aurora",
    vibeTagAr: "الشفق القطبي الكوني الدافئ",
    difficulty: "Legendary",
    difficultyAr: "أسطوري",
    destinationEn: "Reykjanes Peninsula, Iceland",
    destinationAr: "شبه جزيرة ريكجانس، آيسلندا"
  }
];

export function AdventureVibeDeck({ lang }: { lang: "en" | "ar" }) {
  // Travel Roulette Wheel State
  const [selectedChallenge, setSelectedChallenge] = useState<SecretChallenge | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinCategory, setSpinCategory] = useState<string>("all");

  // Custom Boarding Pass state
  const [ticketName, setTicketName] = useState("");
  const [ticketDestination, setTicketDestination] = useState("");
  const [ticketClass, setTicketClass] = useState("explorer");
  const [boardingPassGenerated, setBoardingPassGenerated] = useState(false);
  const [ticketSeat, setTicketSeat] = useState("12A");
  const [ticketGate, setTicketGate] = useState("B7");

  const handleSpinRoulette = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setSelectedChallenge(null);

    // Audio cue
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const actx = new AudioContextClass();
      const osc = actx.createOscillator();
      const gain = actx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(200, actx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, actx.currentTime + 1.2);
      gain.gain.setValueAtTime(0.08, actx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + 1.2);
      osc.connect(gain);
      gain.connect(actx.destination);
      osc.start();
      osc.stop(actx.currentTime + 1.2);
    } catch (e) {}

    // Spin animation delay
    setTimeout(() => {
      const filtered = spinCategory === "all" 
        ? SECRET_CHALLENGES 
        : SECRET_CHALLENGES.filter(c => c.category === spinCategory);
      
      const randomIndex = Math.floor(Math.random() * filtered.length);
      setSelectedChallenge(filtered[randomIndex]);
      setIsSpinning(false);
    }, 1800);
  };

  const handleGenerateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketName.trim() || !ticketDestination.trim()) return;

    // Random seat & gate selection
    const seatRow = Math.floor(Math.random() * 30) + 1;
    const seatLetter = ["A", "C", "D", "F"][Math.floor(Math.random() * 4)];
    setTicketSeat(`${seatRow}${seatLetter}`);
    
    const gateLetter = ["A", "B", "C", "D"][Math.floor(Math.random() * 4)];
    const gateNumber = Math.floor(Math.random() * 15) + 1;
    setTicketGate(`${gateLetter}${gateNumber}`);

    setBoardingPassGenerated(true);
  };

  const handleDownloadTicketHTML = () => {
    const isAr = lang === "ar";
    const title = isAr ? "بطاقة صعود الطائرة التذكارية" : "Souvenir Boarding Pass";
    const headerTitle = "TRIPZA.STORE INTERSTELLAR";
    const cabinClass = ticketClass === "explorer" ? (isAr ? "كابتن مستكشف" : "EXPLORER VIP") : (isAr ? "جناح ذهبي" : "GOLD CLASS");
    
    const htmlContent = `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <title>Tripza.store - ${title}</title>
  <style>
    body {
      background-color: #030406;
      color: #e2e8f0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      padding: 20px;
    }
    .ticket-card {
      background: linear-gradient(135deg, #0f1117, #07080a);
      border: 2px dashed #f59e0b;
      border-radius: 20px;
      padding: 30px;
      max-width: 650px;
      width: 100%;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      position: relative;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #1e293b;
      padding-bottom: 15px;
      margin-bottom: 20px;
    }
    .brand {
      color: #f59e0b;
      font-weight: 900;
      letter-spacing: 2px;
      font-size: 18px;
    }
    .class-badge {
      background-color: #f59e0b;
      color: #000;
      padding: 4px 10px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 900;
      text-transform: uppercase;
    }
    .details {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 25px;
    }
    .label {
      font-size: 10px;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 4px;
    }
    .value {
      font-size: 16px;
      font-weight: 900;
      color: #f1f5f9;
    }
    .grid-info {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      border-top: 1px solid #1e293b;
      padding-top: 15px;
      text-align: center;
    }
    .grid-item {
      display: flex;
      flex-direction: column;
    }
    .barcode-container {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px dashed #1e293b;
      text-align: center;
    }
    .barcode {
      display: inline-flex;
      gap: 2px;
      height: 40px;
      background-color: #94a3b8;
      padding: 5px 15px;
      border-radius: 5px;
    }
    .barcode-line {
      background-color: #0f172a;
      height: 100%;
    }
    .barcode-num {
      font-size: 9px;
      color: #475569;
      margin-top: 5px;
      letter-spacing: 2px;
    }
    .watermark {
      position: absolute;
      bottom: 10px;
      right: 20px;
      font-size: 10px;
      color: #334155;
      font-weight: bold;
    }
    .btn-print {
      margin-top: 25px;
      background-color: #f59e0b;
      color: #000;
      border: none;
      padding: 12px 20px;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      display: block;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    @media print {
      .btn-print { display: none; }
      body { background-color: #fff; color: #000; }
      .ticket-card { border: 2px dashed #000; background: #fff; color: #000; box-shadow: none; }
      .value { color: #000; }
      .brand { color: #000; }
    }
  </style>
</head>
<body>
  <div class="ticket-card" style="direction: ${lang === "ar" ? "rtl" : "ltr"}">
    <div class="header">
      <div class="brand">${headerTitle}</div>
      <div class="class-badge">${cabinClass}</div>
    </div>
    <div class="details">
      <div>
        <div class="label">${isAr ? "الاسم الكامل" : "PASSENGER NAME"}</div>
        <div class="value">${ticketName}</div>
      </div>
      <div>
        <div class="label">${isAr ? "الوجهة" : "DESTINATION"}</div>
        <div class="value" style="color: #f59e0b;">${ticketDestination}</div>
      </div>
    </div>
    <div class="grid-info">
      <div class="grid-item">
        <span class="label">${isAr ? "البوابة" : "GATE"}</span>
        <span class="value">${ticketGate}</span>
      </div>
      <div class="grid-item">
        <span class="label">${isAr ? "المقعد" : "SEAT"}</span>
        <span class="value">${ticketSeat}</span>
      </div>
      <div class="grid-item">
        <span class="label">${isAr ? "التوقيت" : "TIME"}</span>
        <span class="value">08:45 AM</span>
      </div>
      <div class="grid-item">
        <span class="label">${isAr ? "الرمز" : "FLIGHT"}</span>
        <span class="value" style="color: #f59e0b;">RM-2026</span>
      </div>
    </div>
    <div class="barcode-container">
      <div class="barcode">
        ${[1,4,2,3,1,2,4,1,3,2,1,4,2,3,1,2,3].map(w => `<div class="barcode-line" style="width: ${w}px;"></div>`).join("")}
      </div>
      <div class="barcode-num">0091228492026</div>
    </div>
    <div class="watermark">Tripza.store © 2026</div>
    <button class="btn-print" onclick="window.print()">${isAr ? "طباعة التذكرة" : "Print Ticket"}</button>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Tripza.store_BoardingPass_${ticketName.replace(/\s+/g, "_")}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gradient-to-br from-[#10121a] to-[#0a0b0e] p-6 md:p-8 rounded-3xl border border-amber-500/15 shadow-2xl space-y-10 overflow-hidden" id="adventure-vibe-deck-root">
      
      {/* Feature Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 text-amber-400 rounded-lg text-[10px] font-black uppercase tracking-widest border border-amber-500/20 mb-2">
            <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            {lang === "ar" ? "ميزة حصرية ومبتكرة خارج الصندوق" : "EXCLUSIVE OUT-OF-THE-BOX FEATURE"}
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white font-display tracking-tight flex items-center gap-2">
            <Compass className="w-7 h-7 text-amber-400 animate-spin-slow" />
            {lang === "ar" ? "لوحة استكشاف السفر الفائقة والمؤثرات الغامرة" : "The Ultimate Adventure Vibe Deck"}
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
            {lang === "ar" 
              ? "مجموعة متكاملة ومبتكرة مصممة خصيصاً لتفجير رغبة السفر لديك ومحاكاة الأجواء والمشاعر الساحرة مباشرة عبر Tripza.store."
              : "An interactive travel environment designed to spark your wanderlust and simulate rich physical journey sensations instantly on Tripza.store."}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: SPIN THE WHEEL / ROULETTE (6 Cols) */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          
          {/* Section: Challenge Roulette */}
          <div className="bg-black/40 p-5 md:p-6 rounded-2xl border border-white/5 space-y-5 flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Dices className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-black text-white uppercase tracking-wider">
                    {lang === "ar" ? "روليت السفر والمهمات السرية" : "Secret Adventure Roulette"}
                  </span>
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/5">
                  {[
                    { id: "all", labelEn: "All", labelAr: "الكل" },
                    { id: "adventure", labelEn: "Action", labelAr: "مغامرة" },
                    { id: "cozy", labelEn: "Cozy", labelAr: "هدوء" },
                    { id: "mystery", labelEn: "Mystery", labelAr: "غموض" }
                  ].map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSpinCategory(cat.id)}
                      className={`px-2 py-1 rounded text-[10px] font-black transition-all cursor-pointer ${spinCategory === cat.id ? "bg-amber-500 text-black" : "text-slate-400 hover:text-white"}`}
                    >
                      {lang === "ar" ? cat.labelAr : cat.labelEn}
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed">
                {lang === "ar"
                  ? "هل مللت من تخطيط السفر التقليدي والممل؟ جرب تدوير عجلة حظ المغامرات الفريدة لتكشف لك عن مزار غامض، نشاط فريد، أو تجربة حسية وثقافية استثنائية."
                  : "Tired of regular itinerary planning? Give the roulette a spin to uncover highly specialized travel activities and thrilling local cultural sensory rituals."}
              </p>
            </div>

            {/* Spinner Container */}
            <div className="flex flex-col items-center justify-center py-6 mt-4 relative bg-slate-900/40 rounded-xl border border-white/5 overflow-hidden flex-1 min-h-[250px]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/2 rounded-full blur-xl pointer-events-none"></div>
              
              {!selectedChallenge && !isSpinning && (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500/10 to-amber-600/20 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto text-amber-400">
                    <Compass className="w-8 h-8 animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-black text-white uppercase tracking-wider">
                      {lang === "ar" ? "اضغط على زر التدوير بالأسفل" : "Ready for Departure?"}
                    </h4>
                    <p className="text-[10px] text-slate-500">
                      {lang === "ar" ? "احصل على مهمة سفر استثنائية فوراً" : "Unlock a mystical high-fidelity travel ritual"}
                    </p>
                  </div>
                </div>
              )}

              {isSpinning && (
                <div className="text-center py-8 space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full animate-spin flex items-center justify-center mx-auto shadow-lg shadow-amber-500/20">
                      <RotateCw className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-black text-amber-400 uppercase tracking-widest block animate-pulse">
                      {lang === "ar" ? "جاري تدوير العجلة..." : "SPINNING THE COMPASS..."}
                    </span>
                    <span className="text-[10px] text-slate-500">
                      {lang === "ar" ? "نبحث عن أكثر التجارب تميزاً وإبهاراً" : "Calibrating cultural longitude and latitude..."}
                    </span>
                  </div>
                </div>
              )}

              {selectedChallenge && !isSpinning && (
                <div className="w-full px-5 text-left animate-fade-in space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-md text-[9px] font-black uppercase">
                        {lang === "ar" ? selectedChallenge.vibeTagAr : selectedChallenge.vibeTagEn}
                      </span>
                      <span className="px-2 py-0.5 bg-white/5 border border-white/10 text-slate-300 rounded-md text-[9px] font-bold">
                        {lang === "ar" ? selectedChallenge.difficultyAr : selectedChallenge.difficulty}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-amber-500 flex items-center gap-1 font-bold">
                      <MapPin className="w-3 h-3" />
                      {lang === "ar" ? selectedChallenge.destinationAr : selectedChallenge.destinationEn}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-black text-white leading-snug">
                      ✨ {lang === "ar" ? selectedChallenge.titleAr : selectedChallenge.titleEn}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed bg-white/5 p-3 rounded-lg border border-white/5">
                      {lang === "ar" ? selectedChallenge.descAr : selectedChallenge.descEn}
                    </p>
                  </div>

                  <div className="bg-amber-500/5 p-3 rounded-xl border border-amber-500/10">
                    <span className="text-[9px] font-black text-amber-400 uppercase block mb-1 tracking-wider">
                      💡 {lang === "ar" ? "طريقة التنفيذ السرية والاحترافية:" : "PRO EXECUTION HINT:"}
                    </span>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      {lang === "ar" ? selectedChallenge.hintAr : selectedChallenge.hintEn}
                    </p>
                  </div>
                </div>
              )}

              <button
                onClick={handleSpinRoulette}
                disabled={isSpinning}
                className="mt-5 px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-50 text-black text-xs font-black rounded-xl transition-all shadow-lg shadow-amber-500/10 flex items-center gap-2 cursor-pointer transform hover:scale-105 active:scale-95 animate-pulse"
              >
                <RotateCw className={`w-3.5 h-3.5 ${isSpinning ? "animate-spin" : ""}`} />
                <span>
                  {lang === "ar" ? "تـدوير عـجلة الـحظ" : "SPIN FOR ADVENTURE"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: CUSTOM BOARDING PASS GENERATOR (6 Cols) */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          <div className="bg-black/40 p-5 md:p-6 rounded-2xl border border-white/5 space-y-4 flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Plane className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-black text-white uppercase tracking-wider">
                  {lang === "ar" ? "مُصمم بطاقات صعود الطائرة التذكارية" : "Interactive Travel Pass Designer"}
                </span>
              </div>
              
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {lang === "ar"
                  ? "صمم تذكرة صعود طائرة مخصصة وخيالية لرحلة أحلامك، يمكنك تخصيص الاسم والدرجة والوجهة وتحميلها مباشرة كملف HTML أنيق وقابل للطباعة كتذكار رائع."
                  : "Generate a gorgeous, high-fidelity custom digital boarding pass for your future bucket-list trip on Tripza.store. Downloadable as a printable file."}
              </p>
            </div>

            {!boardingPassGenerated ? (
              <form onSubmit={handleGenerateTicket} className="space-y-4 pt-2">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">
                    {lang === "ar" ? "اسم المسافر" : "Passenger Name"}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder={lang === "ar" ? "مثال: محمد بن علي" : "e.g. Liam Smith"}
                      value={ticketName}
                      onChange={(e) => setTicketName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-9 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">
                    {lang === "ar" ? "وجهة الأحلام" : "Dream Destination"}
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder={lang === "ar" ? "مثال: موريشيوس" : "e.g. Mauritius"}
                      value={ticketDestination}
                      onChange={(e) => setTicketDestination(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-9 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 rounded-xl text-xs font-black uppercase transition-all shadow-md cursor-pointer text-center"
                >
                  {lang === "ar" ? "إنشاء التذكرة" : "Generate Pass"}
                </button>
              </form>
            ) : (
              <div className="space-y-4 animate-fade-in">
                {/* Boarding Pass Visual Deck */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-950 border-2 border-dashed border-amber-500/30 rounded-2xl p-4 relative overflow-hidden flex flex-col sm:flex-row gap-4 justify-between items-stretch">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl"></div>
                  
                  {/* Main Ticket Side */}
                  <div className="flex-1 space-y-4 flex flex-col justify-between text-left">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Plane className="w-5 h-5 text-amber-500 rotate-45" />
                        <span className="font-mono text-[10px] sm:text-xs font-extrabold text-white tracking-widest">
                          TRIPZA.STORE INTERSTELLAR
                        </span>
                      </div>
                      <span className="px-2 py-0.5 bg-amber-500 text-black text-[9px] font-black rounded uppercase">
                        {ticketClass === "explorer" ? (lang === "ar" ? "كابتن مستكشف" : "EXPLORER VIP") : (lang === "ar" ? "جناح ذهبي" : "GOLD CLASS")}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-[9px] text-slate-500 uppercase block">{lang === "ar" ? "الاسم الكامل" : "PASSENGER"}</span>
                        <span className="text-xs sm:text-sm font-black text-slate-100 uppercase font-mono">{ticketName}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-500 uppercase block">{lang === "ar" ? "الوجهة" : "DESTINATION"}</span>
                        <span className="text-xs sm:text-sm font-black text-amber-400 uppercase font-mono">{ticketDestination}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-2 border-t border-white/5 pt-3 font-mono text-center">
                      <div>
                        <span className="text-[8px] text-slate-500 block uppercase">{lang === "ar" ? "البوابة" : "GATE"}</span>
                        <span className="text-xs font-bold text-white">{ticketGate}</span>
                      </div>
                      <div>
                        <span className="text-[8px] text-slate-500 block uppercase">{lang === "ar" ? "المقعد" : "SEAT"}</span>
                        <span className="text-xs font-bold text-white">{ticketSeat}</span>
                      </div>
                      <div>
                        <span className="text-[8px] text-slate-500 block uppercase">{lang === "ar" ? "التوقيت" : "TIME"}</span>
                        <span className="text-xs font-bold text-white">08:45 AM</span>
                      </div>
                      <div>
                        <span className="text-[8px] text-slate-500 block uppercase">{lang === "ar" ? "الرمز" : "FLIGHT"}</span>
                        <span className="text-xs font-bold text-amber-500">RM-2026</span>
                      </div>
                    </div>
                  </div>

                  {/* Cut-off Stub Separator Line */}
                  <div className="hidden sm:flex flex-col justify-between items-center py-1">
                    <div className="w-3 h-3 bg-[#0a0b0e] rounded-full -mt-2.5"></div>
                    <div className="w-0.5 flex-1 bg-dashed bg-slate-800 my-2 border-l border-dashed border-slate-700"></div>
                    <div className="w-3 h-3 bg-[#0a0b0e] rounded-full -mb-2.5"></div>
                  </div>

                  {/* Stub Side */}
                  <div className="sm:w-1/3 bg-white/2 p-3 rounded-xl border border-white/5 flex flex-col justify-between items-center font-mono text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-12 h-12 bg-amber-500/5 rounded-full blur-lg"></div>
                    <div className="w-full">
                      <span className="text-[8px] text-slate-500 block uppercase">{lang === "ar" ? "تذكرة رقم" : "BOARDING STUB"}</span>
                      <span className="text-[10px] font-black text-amber-400">#RM-9901A</span>
                    </div>

                    {/* Faux Barcode pattern */}
                    <div className="my-2 space-y-1">
                      <div className="flex gap-0.5 justify-center">
                        {[1,4,2,3,1,2,4,1,3,2,1,4,2,3,1,2,3].map((w, idx) => (
                          <div 
                            key={idx} 
                            style={{ width: `${w}px` }} 
                            className="h-6 bg-slate-400"
                          />
                        ))}
                      </div>
                      <span className="text-[7px] text-slate-600 block">0091228492026</span>
                    </div>

                    <span className="text-[9px] text-slate-400 uppercase font-bold tracking-tight">
                      {lang === "ar" ? "تفاصيل مسجلة" : "CONFIRMED"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between text-xs pt-1">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setBoardingPassGenerated(false)}
                      className="text-slate-400 hover:text-white transition-colors cursor-pointer font-bold"
                    >
                      {lang === "ar" ? "← تعديل البيانات" : "← Edit Ticket Info"}
                    </button>
                    <span className="text-slate-700">|</span>
                    <button
                      type="button"
                      onClick={() => setTicketClass(prev => prev === "explorer" ? "gold" : "explorer")}
                      className="text-amber-500 hover:text-amber-400 transition-colors font-black uppercase tracking-wider text-[10px] cursor-pointer"
                    >
                      {lang === "ar" ? "تبديل فئة الدرجة" : "Change Cabin Class"}
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleDownloadTicketHTML}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors font-black cursor-pointer text-[11px] bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-amber-500/20"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-500" />
                    {lang === "ar" ? "تحميل بطاقة الصعود" : "Download Boarding Pass"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
