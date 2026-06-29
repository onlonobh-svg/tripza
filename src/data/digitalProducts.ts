import { Product } from "../types";

export const PREDEFINED_PRODUCTS: Product[] = [
  {
    id: "prod-turkey",
    name: "7 Days in Turkey – Smart Travel Plan 🇹🇷",
    nameAr: "خطة تركيا الذكية - 7 أيام 🇹🇷",
    description: "An expert day-by-day blueprint covering Istanbul & Cappadocia, secret maps, handpicked restaurant spots, and budget guides.",
    descriptionAr: "مخطط يومي احترافي يغطي إسطنبول وكبادوكيا، خرائط سرية، مطاعم مختارة بعناية، وإرشادات الميزانية التفصيلية.",
    price: 7.00,
    originalPrice: 15.00,
    type: "pdf_plan",
    icon: "🗺️",
    badge: "Best Seller",
    badgeAr: "الأكثر مبيعاً",
    features: [
      "Day-by-Day Schedules",
      "Google Maps Integration Links",
      "Local Food Hotspots",
      "Budget Optimization Strategy",
      "Transit & Ticket Tips"
    ],
    featuresAr: [
      "جداول تفصيلية يوماً بيوم",
      "روابط مخصصة لخرائط جوجل",
      "أهم مواقع الطعام المحلي",
      "إستراتيجيات توفير الميزانية",
      "نصائح المواصلات والتذاكر"
    ],
    details: "A beautifully organized digital itinerary featuring detailed schedules, hotel suggestions, secret spots, local dining tips, and a comprehensive budgeting breakdown.",
    detailsAr: "مخطط رقمي منسق بشكل رائع يحتوي على جداول تفصيلية، ومقترحات للفنادق، والمواقع السرية، ونصائح لتناول الطعام المحلي، وتفصيل شامل للميزانية لرحلة لا تُنسى.",
    content: `7 DAYS IN TURKEY - PREMIUM ITINERARY
==================================
DAY 1: Istanbul Arrival & Galata Exploration
- Afternoon: Check-in. Recommended Area: Galata (Sultanahmet is too quiet at night).
- Evening: Sunset view at Galata Tower. Dinner at Karaköy Lokantası (booking required).
- Transit Tip: Get an IstanbulKart at the airport tram station. Saves 50% on transit.

DAY 2: Imperial Sultanahmet Historic Wonders
- 08:30: Hagia Sophia (Arrive early to beat 2-hour queue).
- 11:00: Basilica Cistern (Skip-the-line ticket recommended: https://www.muze.gov.tr).
- 13:00: Lunch at Tarihi Sultanahmet Köftecisi (Authentic meatballs since 1920).
- 14:30: Blue Mosque & Hippodrome.
- 16:30: Grand Bazaar (Avoid main alleys for better bargaining).

DAY 3: Bosphorus Cruise & Kadikoy Food Crawl
- 10:00: Eminönü Public Ferry to Kadıköy (Asian Side). Spectacular $2 views.
- 12:00: Explore Moda streets, street art, and antique shops.
- 14:00: Lunch at Çiya Sofrası (Incredible regional Anatolian dishes).
- 17:00: Ferry back during sunset. Enjoy tea on the deck.

DAY 4: Flight to Cappadocia & Red Valley Sunset
- 08:00: Early flight to Kayseri (ASR) or Nevsehir (NAV).
- 12:00: Check into Cave Hotel in Göreme. (e.g., Mithra Cave or Kelebek Special Cave).
- 15:00: Rent an ATV or hike through Red & Rose Valley for a legendary sunset.
- 19:30: Pottery Kebab dinner at Dibek Restaurant.

DAY 5: Balloon Flight & Open Air Museum
- 05:00: Hot Air Balloon Flight (Book via reputable local agency: Royal Balloons).
- 10:00: Göreme Open Air Museum (Explore ancient rock-cut Byzantine churches).
- 14:00: Love Valley hiking and Uchisar Castle panoramic views.
- 18:00: Wine tasting at Turasan Wine Cellar in Ürgüp.

DAY 6: Derinkuyu Underground City & Ihlara Canyon
- 09:00: Drive or join Green Tour to Derinkuyu (Massive 8-level subterranean city).
- 12:00: 4km peaceful hike inside Ihlara Canyon alongside Melendiz River.
- 15:00: Selime Monastery (Astonishing rock-cut cathedral).

DAY 7: Souvenirs & Farewell Istanbul
- Morning: Flight back to Istanbul.
- 13:00: Shopping at Spice Bazaar (Egyptian Bazaar) for Turkish delights and spices.
- 16:00: Relaxing Turkish Bath at historical Kılıç Ali Paşa Hamamı.
- 19:00: Depart from IST / SAW Airport.`,
    contentAr: `خطة تركيا الذكية - البرنامج الكامل والخرائط 7 أيام
==============================================
اليوم 1: الوصول إلى إسطنبول واستكشاف غالاتا
- بعد الظهر: تسجيل الوصول. المنطقة الموصى بها: غالاتا (السلطان أحمد هادئة جداً ليلاً).
- المساء: غروب الشمس في برج غالاتا. عشاء في Karaköy Lokantası (يتطلب حجز مسبق).
- نصيحة مواصلات: احصل على بطاقة إسطنبول (IstanbulKart) من المطار لتوفير 50%.

اليوم 2: عجائب السلطان أحمد التاريخية الإمبراطورية
- 08:30: آيا صوفيا (احرص على الوصول مبكراً لتجنب طابور الساعتين).
- 11:00: صهريج البازيليك (ينصح بتذكرة المسار السريع: https://www.muze.gov.tr).
- 13:00: الغداء في Tarihi Sultanahmet Köftecisi (كفتة عريقة منذ عام 1920).
- 14:30: الجامع الأزرق وميدان سباق الخيل.
- 16:30: البازار الكبير (تجنب الممرات الرئيسية للمساومة بشكل أفضل).

اليوم 3: رحلة البوسفور وجولة طعام كاديكوي
- 10:00: العبّارة العامة من إيمينونو إلى كاديكوي (الجانب الآسيوي) مقابل دولارين فقط.
- 12:00: استكشاف شوارع مودا المليئة بالفنون والمحلات العتيقة.
- 14:00: الغداء في مطعم Çiya Sofrası الشهير بأطباق الأناضول النادرة.
- 17:00: العودة بالعبارة وقت الغروب والاستمتاع بالشاي التركي في الطابق العلوي.

اليوم 4: طيران كبادوكيا وغروب الوادي الأحمر
- 08:00: رحلة طيران مبكرة إلى مطار قيصري (ASR) أو نوشهر (NAV).
- 12:00: السكن بفندق كهف في غوريميه (مثل Mithra Cave أو Kelebek Cave).
- 15:00: استئجار دباب ATV أو المشي في الوادي الأحمر لمشاهدة أجمل غروب شمس.
- 19:30: عشاء كباب الفخار في مطعم Dibek التقليدي.

اليوم 5: رحلة المناطيد ومتحف غوريميه المفتوح
- 05:00: ركوب منطاد الهواء الساخن (احجز مع شركة معتمدة: Royal Balloons).
- 10:00: متحف غوريميه المفتوح (استكشاف الكنائس البيزنطية الأثرية المنحوتة).
- 14:00: وادي الحب وقلعة أوفتش حصار البانورامية.
- 18:00: تذوق العصائر المحلية في معاصر أورغوب التاريخية (Turasan).

اليوم 6: مدينة ديرينكويو تحت الأرض ووادي إهلارا
- 09:00: زيارة مدينة ديرينكويو تحت الأرض (مدينة عملاقة بعمق 8 طوابق تحت الأرض).
- 12:00: مسار مشي بطول 4 كم في وادي إهلارا الأخضر على ضفاف النهر.
- 15:00: دير سليمي الصخري المذهل (كنيسة صخرية أثرية).

اليوم 7: هدايا الوداع وإسطنبول الأخيرة
- الصباح: الطيران العكسي لإسطنبول.
- 13:00: تسوق في السوق المصري (سوق التوابل) لشراء الحلقوم التركي الفاخر.
- 16:00: حمام تركي تقليدي رائع في حمام علي باشا التاريخي.
- 19:00: التوجه للمطار للمغادرة والعودة بالسلامة.`
  },
  {
    id: "prod-checklist",
    name: "Ultimate Travel Packing Checklist ✈️",
    nameAr: "قائمة السفر الشاملة لترتيب الحقيبة ✈️",
    description: "The ultimate itemized list for international trips. Covers documents, tech, wardrobe essentials, flight day items, and smart checklists.",
    descriptionAr: "القائمة الشاملة المنسقة لرحلات السفر الدولية. تغطي المستندات، التقنيات، الملابس الأساسية، ومستلزمات يوم الطيران.",
    price: 3.00,
    originalPrice: 7.00,
    type: "checklist",
    icon: "📋",
    badge: "Must-Have",
    badgeAr: "أساسي جداً",
    features: [
      "Document Verification List",
      "Essential Electronics Checklist",
      "Weather-Adaptive Wardrobe",
      "Medical & First Aid Check",
      "Flight-Day Carry-on essentials"
    ],
    featuresAr: [
      "قائمة التحقق من الوثائق",
      "مستلزمات الإلكترونيات والتقنية",
      "دليل الملابس حسب الطقس",
      "قائمة الأدوية والإسعافات الأولى",
      "مستلزمات حقيبة اليد ليوم السفر"
    ],
    details: "Never leave anything important behind. This interactive checklist is categorized by Travel Documents, Electronics, Wardrobe essentials, and Personal Care, optimized for seamless travel.",
    detailsAr: "لا تترك أي شيء مهم وراءك بعد الآن. تم تصنيف هذه القائمة التفاعلية لتشمل مستندات السفر، الإلكترونيات، الملابس الأساسية، والعناية الشخصية لضمان رحلة خالية من القلق.",
    content: `THE ULTIMATE INTERNATIONAL PACKING CHECKLIST
==========================================

[ ] SECTION 1: ESSENTIAL DOCUMENTS & WALLET
------------------------------------------
- Passport (At least 6 months validity from return date)
- Printouts of e-Visas / Flight Tickets / Hotel bookings
- Physical driver's license & International Driving Permit (IDP)
- Multiple credit/debit cards stored in separate locations
- Emergency cash in USD/EUR (Local money changers prefer clean crisp bills)
- Copy of Travel Insurance certificate and emergency contact hotline
- Vaccination certificates or medical cards if applicable

[ ] SECTION 2: GADGETS & TECH GEAR
----------------------------------
- Universal travel plug adapter (with high wattage USB-C fast charge)
- Long USB-C and Lightning cables (braided, durable)
- Airplane double-pin audio adapter for built-in screens
- High-capacity Power Bank (10,000 to 20,000mAh, must be in carry-on)
- Noise-canceling headphones (crucial for long flights)
- Offline offline google maps downloaded on your device
- Backup wired headphones (in case wireless battery dies)

[ ] SECTION 3: APPAREL & WARDROBE
---------------------------------
- Weather-adaptive layered jacket / rain jacket
- Comfortable, broken-in walking shoes (do not wear brand-new shoes!)
- 5x Breathable undergarments & socks (moisture-wicking material)
- 3x Daytime comfortable casual t-shirts/shirts
- 2x Smart-casual outfits for high-end dining or events
- 1x Lightweight microfiber towel (dries in minutes)
- Swimwear & quick-dry shorts / Sunglasses with UV protection

[ ] SECTION 4: TRAVEL TOILETRIES & MEDICATION
----------------------------------------------
- Transparent 100ml liquid pouch for airport security checks
- Toothbrush, toothpaste (travel-sized) & dental floss
- Solid shampoo bar & solid cologne (prevents cabin baggage leaks)
- High SPF broad-spectrum sunscreen (very expensive abroad)
- Hand sanitizer and disinfecting surface wipes
- Essential travel med-kit: Ibuprofen, Imodium, Motion Sickness pills, Rehydration salts, Band-Aids.`,
    contentAr: `القائمة الشاملة لترتيب حقيبة السفر وتجهيز الأغراض
==============================================

[ ] القسم 1: الوثائق والمالية الهامة جداً
---------------------------------------
- جواز السفر (صلاحية لا تقل عن 6 أشهر من تاريخ العودة)
- نسخ مطبوعة ورقية من التأشيرات وتذاكر الطيران وتأكيدات الفنادق
- رخصة القيادة المحلية والرخصة الدولية (IDP) للقيادة القانونية
- بطاقات بنكية متعددة موزعة في أماكن منفصلة (لتفادي الفقدان)
- نقد كاش احتياطي بعملة الدولار أو اليورو (نظيفة وجديدة للصرافين)
- تأمين السفر الدولي وأرقام الطوارئ الطبية
- صور الوثائق الشخصية مخزنة سحابياً (iCloud/Drive)

[ ] القسم 2: الأجهزة والتقنيات الأساسية
--------------------------------------
- محول قابس عالمي (Universal Adapter) يدعم منافذ USB-C سريعة الشحن
- كابلات شحن متينة ومقاومة للقطع بطول مناسب
- وصلة سماعات مزدوجة لمقاعد الطائرات القديمة
- بنك طاقة سريع (Power Bank) بسعة 10,000 إلى 20,000 مللي أمبير (يجب وضعه في حقيبة اليد)
- سماعات عازلة للضوضاء لرحلات الطيران الطويلة والقطارات
- تحميل خرائط المدن بلا اتصال بالإنترنت قبل الإقلاع

[ ] القسم 3: الملابس والأحذية المناسبة للرحلة
-------------------------------------------
- سترة طبقات خفيفة مضادة للأمطار والرياح
- حذاء مشي مريح جداً تمت تجربته مسبقاً (لا تستخدم حذاءً جديداً كلياً تجنباً للجروح)
- 5x ملابس داخلية وجوارب قابلة للتنفس وسريعة الجفاف
- 3x قمصان/تيشرتات مريحة للاستخدام اليومي
- 2x أطقم رسمية أنيقة للمطاعم الفاخرة أو المناسبات
- ملابس سباحة / نظارات شمسية أصلية بحماية UV وقبعة للشمس

[ ] القسم 4: مستحضرات العناية الشخصية والأدوية
---------------------------------------------
- حقيبة شفافة سعة 100 مل للعبوات السائلة لتسهيل تفتيش المطار
- فرشاة أسنان، معجون أسنان صغير، وخيط أسنان
- شامبو وبلسم وعطر صلب (لتفادي انسكاب السوائل بالحقيبة)
- واقي شمس ذو معامل حماية عالٍ (SPF 50+)
- صيدلية السفر: مسكن ألم، علاج إسهال، حبوب دوار البحر والجو، مغذيات جفاف، ولواصق جروح.`
  },
  {
    id: "prod-gems-map",
    name: "Istanbul Hidden Gems Google Maps Guide 🗺️",
    nameAr: "خريطة إسطنبول السرية للأماكن غير المكتشفة 🗺️",
    description: "Get direct custom pins on Google Maps of 40+ hidden viewpoints, cafes away from tourists, secret photogenic alleys, and local antique spots.",
    descriptionAr: "احصل على دبابيس مباشرة مخصصة لخرائط جوجل لأكثر من 40 مطل سري، كافيهات بعيدة عن الضوضاء، وأماكن أثرية ومواقع للتصوير.",
    price: 5.00,
    originalPrice: 12.00,
    type: "google_map",
    icon: "🗺️",
    badge: "Unique Content",
    badgeAr: "محتوى فريد",
    features: [
      "40+ Direct Pin Points",
      "Instant Navigation Links",
      "Best Photo Spot Hours",
      "Off-the-Beaten-Path Viewpoints",
      "Historical Balat Vintage Alleys"
    ],
    featuresAr: [
      "أكثر من 40 دبوس موقع مباشر",
      "روابط توجيه فورية بنقرة واحدة",
      "تحديد أفضل ساعات التصوير",
      "مطلات مذهلة مخفية عن السياح",
      "أزقة الأنتيكة التاريخية في حي بلاط"
    ],
    details: "An interactive Google Maps companion featuring direct pin points of Istanbul's best-kept secrets. Access spectacular viewpoints, historical vintage spots, and local food away from tourists.",
    detailsAr: "رفيق السفر الرقمي لخرائط جوجل يضم دبابيس ومواقع مباشرة لأسرار إسطنبول الدفينة. مطلات تصوير خيالية، مقاهي تاريخية وأسواق شعبية بعيدة عن صخب السياح.",
    content: `ISTANBUL 40+ HIDDEN GEMS MAP LIST
==================================
Copy the search queries or open the direct coordinates in Google Maps:

[A] SECRET VIEWPOINTS & ROOFTOPS (10 Spots)
-------------------------------------------
1. Süleymaniye Rooftop Terrace: Search "Sajda Cafe Istanbul" (Spectacular Golden Horn sunset).
2. Valide Han Secret Dome: Search "Büyük Valide Han Roof" (Coordinate: 41.0142, 28.9689). Ask the local keyholder.
3. Asian Side Panoramic Point: Search "Otağtepe Parkı" (Zero-tourist suspended bridge view).
4. Nakkaştepe Forest Deck: Search "Nakkaştepe Millet Bahçesi" (Bosphorus bridge panoramic deck).
5. Historic City Walls View: Search "Mihrimah Sultan Mosque Edirnekapı Walls" (Highest point in historic city).
6. Pierre Loti Quiet Alternative: Search "Eyüp Cemetery Historic Walkway".
7. Camlica Tower Secret Cafe: Search "Küçük Çamlıca Korusu" (Incredible hilltop grove below the steel tower).
8. Galata Bridge Lower Hidden Nook: Search "Karaköy Ferry Pier Boardwalk".
9. Sarayburnu Coast Benches: Search "Sarayburnu Parkı" (Sit right where Bosphorus meets Golden Horn).
10. Ortaköy Side Alley Pier: Search "Feriye Palace Boardwalk View".

[B] SECRET ANTIQUE STREETS & ALLEYS (10 Spots)
----------------------------------------------
11. Balat Rainbow Houses: Search "Kiremit Caddesi Evleri" (Most photogenic pastel homes).
12. Antique Record Haven: Search "Balat Antik Sokağı" (Flea markets & classic vinyl shops).
13. Karaköy Umbrella Street: Search "Hoca Ali Sokak" (Vibrant street art and ivy walls).
14. Kuzguncuk Village: Search "Kuzguncuk İcladiye Caddesi" (Colorful old Ottoman wooden houses).
15. French Passage: Search "Fransız Geçidi Karaköy" (Beautiful marble architecture walkway).
16. Kadıköy Umbrella Passage: Search "Ziya Bey Sokak Kadıköy".
17. Historical Bookstore Tunnel: Search "Sahaflar Çarşısı Beyazıt".
18. Vintage Clothing Alleys: Search "Turnacıbaşı Caddesi Beyoğlu" (Epic vintage leather jacket shops).
19. Wisteria Alley: Search "Nail Kitabevi Kuzguncuk" (Iconic bookshop wrapped in ivy).
20. Arnavutköy Wooden Villas: Search "Arnavutköy Sahili Wooden Mansions".

[C] HISTORIC CAFS & TEA GARDENS (10 Spots)
------------------------------------------
21. Cemetery Tea Garden: Search "Ali Paşa Medresesi Cafe" (Quiet historical courtyard).
22. The Cave Coffee: Search "Corlulu Ali Pasa Medresesi" (Hookah and apple tea under ancient lamps).
23. Bosphorus Waterfront Tea: Search "Çengelköy Tarihi Çınaraltı" (Budget tea under a 1000-year-old oak tree).
24. Historic Chocolate Shop: Search "Tarihi Meşhur Beyoğlu Çikolatacısı" (Tiny vintage chocolate seller since 1952).
25. Ottoman Pharmacy Cafe: Search "Melba Cafe Karaköy".
26. Secret Garden Cafe: Search "Limonlu Bahçe Beyoğlu" (A hidden lush oasis inside busy Taksim).
27. Theological Library Cafe: Search "Süleymaniye Kütüphanesi Bahçesi".
28. Balat Velvet Cafe: Search "Velvet Cafe Balat" (Drink coffee in antique cups you choose yourself).
29. Kadikoy Coffee Sanctuary: Search "Walter's Coffee Roastery".
30. Golden Horn Fishing Dock Cafe: Search "Haliç Sosyal Tesisleri" (Incredibly cheap state-run cafe over the water).

[D] LOCAL FOOD SECRETS (10 Spots)
---------------------------------
31. The Garlic Butter Lahmacun: Search "Halil Lahmacun Kadıköy".
32. Charcoal-Grilled Pide: Search "Tarihi Karadeniz Pidecisi Ibrahim Usta".
33. Real Lamb Döner: Search "Dönerci Şahin Usta Grand Bazaar" (Inside a tiny alley).
34. Sweet Semolina Dessert: Search "Meşhur Bebek Badem Ezmesi" (Since 1904).
35. Boza Fermented Drink: Search "Vefa Bozacısı" (Historic interior, drink with roasted chickpeas).
36. Local Mussels Hotspot: Search "Midyeci Ahmet Beşiktaş".
37. Underground Soup Place: Search "Tarihi Karaköy Balıkçısı" (Delicious traditional fish soup).
38. Stuffed Bosphorus Potato: Search "Ortaköy Kumpir Alleys".
39. Crispy Turkish Bagel: Search "Tarihi Tarihi Galata Simitçisi" (In Galata since 1800s).
40. Black Sea Breakfast: Search "Muhlama Muhlama Cafe Üsküdar".`,
    contentAr: `روابط ومواقع أكثر من 40 موقعاً سرياً في إسطنبول لخرائط جوجل
======================================================
انسخ عبارة البحث المذكورة وابحث عنها مباشرة في خرائط جوجل للذهاب الفوري:

[أ] مطلات سرية مطلة على البوسفور والقرن الذهبي (10 مواقع)
------------------------------------------------------
1. مطل أسطح السليمانية: ابحث عن "Sajda Cafe Istanbul" (غروب شمس القرن الذهبي الساحر).
2. سطح خان الوالدة السري: ابحث عن "Büyük Valide Han" (الإحداثيات: 41.0142, 28.9689). اسأل الحارس عن المفتاح.
3. مطل الجانب الآسيوي الهادئ: ابحث عن "Otağtepe Parkı" (أجمل إطلالة للجسر المعلق بلا سياح).
4. منصة غابة نقاش تبه: ابحث عن "Nakkaştepe Millet Bahçesi" (منصة خشبية فوق البوسفور).
5. مطل أسوار المدينة التاريخية: ابحث عن "Mihrimah Sultan Mosque Edirnekapı Walls" (أعلى نقطة تاريخية).
6. ممشى بيير لوتي البديل الهادئ: ابحث عن "Eyüp Cemetery Historic Walkway".
7. حديقة برج تشامليجا السرية: ابحث عن "Küçük Çamlıca Korusu".
8. الممشى الخشبي تحت جسر غالاتا: ابحث عن "Karaköy Ferry Pier Boardwalk".
9. مقاعد ساحل سراي بورنو الهادئة: ابحث عن "Sarayburnu Parkı" (نقطة التقاء البوسفور والقرن الذهبي).
10. رصيف قصر فريه التاريخي: ابحث عن "Feriye Palace Boardwalk View".

[ب] أزقة تاريخية ومحلات الأنتيكة العتيقة (10 مواقع)
-------------------------------------------------
11. بيوت بلاط الملونة الشهيرة: ابحث عن "Kiremit Caddesi Evleri".
12. زقاق الأسطوانات العتيقة: ابحث عن "Balat Antik Sokağı" (مزادات وبازارات تحف).
13. زقاق المظلات الملونة بكاراكوي: ابحث عن "Hoca Ali Sokak".
14. قرية كوزغونجوك الهادئة: ابحث عن "Kuzguncuk İcladiye Caddesi" (بيوت خشبية عثمانية ملونة).
15. الممر الفرنسي بكاراكوي: ابحث عن "Fransız Geçidi Karaköy" (ممر رخامي فرنسي رائع).
16. زقاق مظلات كاديكوي: ابحث عن "Ziya Bey Sokak Kadıköy".
17. سوق الكتب التاريخي القديم: ابحث عن "Sahaflar Çarşısı Beyazıt".
18. أزقة الملابس والجلود الكلاسيكية: ابحث عن "Turnacıbaşı Caddesi Beyoğlu".
19. مكتبة اللبلاب الشهيرة بكوزغونجوك: ابحث عن "Nail Kitabevi Kuzguncuk".
20. قصور أرناؤوط كوي الخشبية على البحر: ابحث عن "Arnavutköy Sahili Wooden Mansions".

[ج] كافيهات تاريخية وحدائق شاي سرية (10 مواقع)
---------------------------------------------
21. حديقة شاي المدرسة القديمة: ابحث عن "Ali Paşa Medresesi Cafe".
22. مقهى كهف الشموع العثماني: ابحث عن "Corlulu Ali Pasa Medresesi" (شاي تفاح وفحم تحت قناديل قديمة).
23. شاي على الماء تحت شجرة الألف عام: ابحث عن "Çengelköy Tarihi Çınaraltı" (مسموح بجلب طعامك الخاص).
24. دكان شوكولاتة بيوغلو الأصلي: ابحث عن "Tarihi Meşhur Beyoğlu Çikolatacısı" (منذ عام 1952).
25. مقهى الصيدلية العثمانية: ابحث عن "Melba Cafe Karaköy".
26. مقهى الحديقة المخفية ليمونلو: ابحث عن "Limonlu Bahçe Beyoğlu" (واحة خضراء هادئة في وسط صخب تقسيم).
27. حديقة مكتبة السليمانية الهادئة: ابحث عن "Süleymaniye Kütüphanesi Bahçesi".
28. مقهى المخمل في بلاط: ابحث عن "Velvet Cafe Balat" (تختار فنجان قهوتك الأثري بنفسك).
29. محمصة كافيه والترز بكاديكوي: ابحث عن "Walter's Coffee Roastery".
30. مقهى بلدية القرن الذهبي الرخيص: ابحث عن "Haliç Sosyal Tesisleri" (مطل على المياه وبأسعار رمزية).

[د] مطاعم وأكلات شعبية مخفية (10 مواقع)
--------------------------------------
31. لحم بعجين بالزبدة والثوم: ابحث عن "Halil Lahmacun Kadıköy".
32. فطائر فرن البحر الأسود البلدي: ابحث عن "Tarihi Karadeniz Pidecisi Ibrahim Usta".
33. دونر شاورما اللحم الأسطوري: ابحث عن "Dönerci Şahin Usta Grand Bazaar" (في زقاق ضيق جداً).
34. حلويات لوز بيبيك التاريخية: ابحث عن "Meşhur Bebek Badem Ezmesi" (عائلي منذ 1904).
35. مشروب البوزا المخمر العريق: ابحث عن "Vefa Bozacısı" (يقدم مع الحمص المحمص الساخن).
36. محار بلدي طازج بالليمون: ابحث عن "Midyeci Ahmet Beşiktaş".
37. شوربة سمك تاريخية تحت الأرض: ابحث عن "Tarihi Karaköy Balıkçısı".
38. بطاطس الكومبير الضخمة في أورتاكوي: ابحث عن "Ortaköy Kumpir Alleys".
39. فرن السميط العثماني الأقدم: ابحث عن "Tarihi Galata Simitçisi" (في غالاتا منذ القرن التاسع عشر).
40. فطور الملحمة التركية والمهلمة: ابحث عن "Muhlama Muhlama Cafe Üsküdar".`
  },
  {
    id: "prod-budget-excel",
    name: "Smart Travel Budget Excel Calculator 📈",
    nameAr: "حاسبة ميزانية السفر الذكية (إكسل) 📈",
    description: "An automated budget planner template. Input your currency, estimated costs, and track actual vs. target expenses with automatic chart generation.",
    descriptionAr: "قالب ميزانية مؤتمت بالكامل. أدخل عملتك والمصاريف المتوقعة وتتبع المصاريف الفعلية مع توليد رسوم بيانية تلقائياً.",
    price: 4.00,
    originalPrice: 9.00,
    type: "budget",
    icon: "📈",
    badge: "Interactive",
    badgeAr: "تفاعلي ومؤتمت",
    features: [
      "Interactive Sheets Logic",
      "Pre-Departure Cost Tracker",
      "In-Trip Expense Categorization",
      "Automatic Chart Generation",
      "Emergency Buffer Calculators"
    ],
    featuresAr: [
      "معادلات إكسل تفاعلية جاهزة",
      "تتبع تكاليف الطيران والفنادق",
      "تصنيف مصاريف المعيشة اليومية",
      "توليد رسوم بيانية وتلخيص فوري",
      "معادلات احتساب صندوق الطوارئ"
    ],
    details: "An advanced financial framework for absolute trip control. Organize expenses into distinct pre-trip and in-trip categories with built-in buffer formulas and total automatic calculators.",
    detailsAr: "إطار عمل مالي متقدم يمنحك السيطرة الكاملة على مصاريف رحلتك. يقسم المصاريف تلقائياً لمصاريف قبل السفر وأثنائه مع معادلات احتساب ذكية وصندوق طوارئ لتفادي المفاجآت الصادمة.",
    content: `SMART TRAVEL BUDGET CALCULATOR MANUAL & FORMULAS
=================================================
Setup your Excel or Google Sheets document with these precise columns and automated formulas:

[1] CELL SETUP SCHEMA:
- Cell B3: [Total Travel Budget] (e.g., $3000.00)
- Cell B4: [Emergency Buffer %] (e.g., 10%)
- Cell B5: [Calculated Buffer Fund] -> Formula: "=B3 * B4"
- Cell B6: [Net Usable Travel Budget] -> Formula: "=B3 - B5"

[2] PRE-DEPARTURE FIXED COST TABLE (Rows 10-20):
| Category       | Estimated Cost | Actual Cost | Difference   | Status      |
|----------------|----------------|-------------|--------------|-------------|
| Flight Tickets | [C11] 800.00   | [D11] 780.00| [E11] "=C11-D11" | Paid/Pending|
| Hotel Booking  | [C12] 900.00   | [D12] 950.00| [E12] "=C12-D12" | Paid        |
| Travel Visa    | [C13] 60.00    | [D13] 60.00 | [E13] "=C13-D13" | Paid        |
| Insurance      | [C14] 40.00    | [D14] 35.00 | [E14] "=C14-D14" | Paid        |

- Total Fixed Cost (D21): Formula "=SUM(D11:D20)"

[3] DAILY IN-TRIP RUNNING EXPENSE LOG (Rows 25-50):
Track your everyday spending dynamically:
- Date [Col A] | Description [Col B] | Category [Col C] | Cost (Local) [Col D] | Exch. Rate [Col E] | Cost (Home Currency) [Col F]
- Formula for Col F (Row 26 onwards): "=D26 / E26"

[4] SUMMARY DASHBOARD AUTOMATED FORMULAS:
- Total Spent So Far: "=SUM(D11:D20) + SUM(F25:F50)"
- Budget Remaining: "=B3 - (SUM(D11:D20) + SUM(F25:F50))"
- Status Indicator: "=IF(Remaining_Budget < 0, '⚠️ OVER BUDGET!', '✅ SAFE STATE')"`,
    contentAr: `دليل تشغيل وصياغة حاسبة الميزانية الذكية (إكسل)
==============================================
أنشئ ملف Excel أو Google Sheets واستخدم الإعدادات والمعادلات التلقائية التالية:

[1] إعداد الخلايا الرئيسية للتحكم والمراقبة:
- الخلية B3: [ميزانية السفر الكلية المرصودة] (مثال: $3000.00)
- الخلية B4: [نسبة صندوق الطوارئ الاحتياطي] (مثال: 10%)
- الخلية B5: [مبلغ صندوق الطوارئ المحسوب] -> المعادلة: "=B3 * B4"
- الخلية B6: [الميزانية الصافية القابلة للاستخدام] -> المعادلة: "=B3 - B5"

[2] جدول التكاليف الثابتة قبل السفر (الأسطر 10-20):
| الفئة          | التكلفة التقديرية | التكلفة الفعلية | الفارق (التوفير) | حالة الدفع  |
|----------------|------------------|-----------------|-----------------|-------------|
| تذاكر الطيران  | [C11] 800.00     | [D11] 780.00    | [E11] "=C11-D11" | تم الدفع    |
| حجز الفنادق    | [C12] 900.00     | [D12] 950.00    | [E12] "=C12-D12" | تم الدفع    |
| تأشيرة السفر   | [C13] 60.00      | [D13] 60.00     | [E13] "=C13-D13" | تم الدفع    |
| التأمين الطبي  | [C14] 40.00      | [D14] 35.00     | [E14] "=C14-D14" | تم الدفع    |

- مجموع المصاريف الثابتة (الخلية D21): المعادلة "=SUM(D11:D20)"

[3] سجل المصاريف اليومية المتغيرة أثناء الرحلة (الأسطر 25-50):
سجل مصاريفك يوماً بيوم بشكل تفاعلي وتلقائي:
- التاريخ [العمود A] | الوصف [العمود B] | فئة الصرف [العمود C] | السعر (بالعملة المحلية) [العمود D] | سعر الصرف [العمود E] | السعر بالعملة الأصلية [العمود F]
- معادلة الاحتساب التلقائي للعمود F (من السطر 26 فما فوق): "=D26 / E26"

[4] لوحة تلخيص الأرقام المباشرة:
- إجمالي المبالغ المصروفة حتى الآن: "=SUM(D11:D20) + SUM(F25:F50)"
- الميزانية المتبقية للاستخدام: "=B3 - (إجمالي المبالغ المصروفة)"
- مؤشر حالة الخطر التلقائي: "=IF(الميزانية_المتبقية < 0, '⚠️ تجاوزت الميزانية!', '✅ الميزانية سليمة وآمنة')"`
  },
  {
    id: "prod-prompts",
    name: "100 Expert AI Travel Planning Prompts 🤖",
    nameAr: "100 عبارة ذكية (Prompts) لتخطيط السفر بالذكاء الاصطناعي 🤖",
    description: "Ready-to-use prompts for ChatGPT and other advanced AI tools to extract cheap flight secrets, negotiate stays, draft custom food tours, and translate on the go.",
    descriptionAr: "عبارات جاهزة للاستخدام مع الذكاء الاصطناعي لاستخراج أسرار الطيران الرخيص، كتابة جولات تذوق طعام مخصصة، والترجمة الفورية أثناء السفر.",
    price: 6.00,
    originalPrice: 15.00,
    type: "prompts",
    icon: "🤖",
    badge: "Best Value",
    badgeAr: "قيمة عالية",
    features: [
      "Flight Routing Hacks Prompts",
      "Culinary Crawls Blueprint",
      "Stay Negotiation Templates",
      "Taboos & Avoidance Guides",
      "On-The-Go Live Translation"
    ],
    featuresAr: [
      "أوامر حيل مسارات الطيران الرخيص",
      "أوامر صياغة جولات تذوق الطعام",
      "قوالب للتفاوض على أسعار الفنادق",
      "موجهات كشف الفخاخ السياحية",
      "موجهات الترجمة الفورية في الموقع"
    ],
    details: "100 hyper-optimized prompts designed for AI models (such as ChatGPT). Instantly extract hidden airline loopholes, customize intense culinary crawls, and negotiate accommodation prices.",
    detailsAr: "100 عبارة وأمر مخصص ومحسن جداً لنماذج الذكاء الاصطناعي المختلفة. استخرج فوراً ثغرات الطيران، جولات تذوق الأطعمة الحصرية، وأسرار الفنادق مع تلافي العوائق الثقافية والاجتماعية في أي بلد.",
    content: `100 EXPERT AI TRAVEL PLANNING PROMPTS DIRECTORY
===============================================
A compilation of 100 professional, multi-tier prompts for ChatGPT and other advanced AI tools. Use the bracket placeholders to customize.

[A] ULTRA-BUDGET FLIGHT & TRANSIT SECRETS (Prompts 1-25)
-------------------------------------------------------
#1: "Act as a flight routing specialist. I want to fly from [Origin] to [Destination] around [Month]. Provide a detailed breakdown of 5 route hacks, airport transit alternatives, secondary local carriers, and stopover logic to minimize costs by 30%."
#2: "Analyze regional low-cost airlines serving [Country/Region]. Outline baggage limits, booking windows, and hidden airport transfer costs that typical aggregators don't show."
#3: "Draft a step-by-step train-over-flight itinerary connecting [City A] and [City B]. Detail specific pass discounts (Eurail/Swiss pass) and booking interfaces."
#4: "Find the best multi-city open-jaw ticket configurations for visiting [Country 1], [Country 2], and [Country 3] in a single trip starting from [Origin]."
#5: "Calculate the historical cheapest booking window for flights to [Destination] during [Season]. Give me exact dates to set price alerts."
#6: "Create a list of 5 nearby secondary airports for [Destination City] and explain the cheapest transit options (bus/train) from each to the city center."
#7: "I have [X] miles with [Airline/Credit Card]. Recommend the highest-value partner award flight redemptions to fly from [Origin] to [Destination]."
#8: "Design a 12-hour layover survival and exploration guide for [Layover Airport/City] including baggage storage locations and express transit."
#9: "Identify budget ferry or regional sea crossing transit options connecting [Coastal City A] and [Coastal City B] with schedules and booking tips."
#10: "Explain how to pack a standard personal item bag to bypass strict cabin baggage size limits for [Budget Airline] without paying extra fees."
#11: "What are the typical airport taxi scams in [Destination City] and what are the exact legal ride-hailing apps and flat-rate services to use instead?"
#12: "List the free airport lounges or credit-card-free lounge hack alternatives at [Airport Code] including quiet rest zones and free charging spots."
#13: "Provide a scenic public bus or local train route alternative to the expensive tourist trains connecting [Scenic Spot A] and [Scenic Spot B]."
#14: "Evaluate the risks and legalities of hidden-city (skiplagged) ticketing for a one-way trip from [Origin] to [Destination] via [Layover]."
#15: "Compare the total cost of a [X]-day unlimited public transit card versus buying single-trip tickets for a typical tourist itinerary in [City]."
#16: "List the top 3 localized ride-sharing apps used in [Country] that are cheaper than Uber, along with account registration requirements for foreigners."
#17: "Draft a group transport optimization plan for [X] travelers in [City], comparing private van hire, taxi fleets, and public transport passes."
#18: "What are the exact booking release dates and opening times for high-speed train tickets in [Country] to secure early-bird discounts?"
#19: "Find the secret regional bus networks connecting remote villages in [Region/Country] that are not listed on English travel search engines."
#20: "Act as an airline gate standby advisor. Explain how to request standby flight changes, seat upgrades, or voluntary bumping compensation in [Country]."
#21: "Expose hidden car rental fees (CDW insurance, toll transponders, cross-border fees) in [Country] and how to decline them legally and safely."
#22: "Create a curated list of free walking tours in [City], including tipping etiquette, meeting points, and reservation requirements."
#23: "What are the age-limit rules and verification steps for student, youth, or senior transit discounts on national rail networks in [Country]?"
#24: "Draft a dynamic fare tracking strategy. Show me how to use Google Flights filters to isolate charter flights and budget-leg connections to [City]."
#25: "Compare refund policies, cancellation protection, and customer service reliability of booking [Airline] directly versus third-party OTAs."

[B] LUXURY STAY NEGOTIATION & SECRETS (Prompts 26-50)
----------------------------------------------------
#26: "Create a polite, highly persuasive email script to send to an boutique guest house or Airbnb host in [Destination] requesting a custom rate or free breakfast/upgrade for a stay of [X] days during low-season."
#27: "What are the exact search filters and keyword hacks to find legal private infinity pool villas in [Location] under [Price] per night on top travel booking platforms?"
#28: "Draft a hotel booking negotiation script to call the front desk of a boutique hotel in [City] directly to beat the cheapest online price by 15%."
#29: "Write a high-end luxury upgrade request letter for an upcoming stay at [Hotel Name] celebrating our anniversary. Focus on loyalty and soft persuasion."
#30: "Find 5 charming local guesthouses (Ryokans, Homestays, or Riad casas) in [Destination] that do not list on Booking.com but have local maps listings."
#31: "Verify the legal registration and short-term rental compliance laws for booking an apartment stay in [City] to avoid last-minute host cancellations."
#32: "Write an polite Airbnb message requesting early check-in and luggage drop-off at [Property] due to an early morning flight arrival."
#33: "Analyze the safety, walkability, and noise levels of the [Neighborhood Name] in [City] for solo travelers staying in local guesthouses."
#34: "Draft a special request message to a city-center hotel asking for a quiet room away from elevators, ice machines, and street-level noise."
#35: "List the secret member-only or mystery-hotel booking portals that offer deep discounts on 5-star properties in [Region/City]."
#36: "Write a negotiation proposal for a [X]-month long-term stay at an apartment in [City] offering a cash deposit or advance payment discount."
#37: "Compare the value, space, and amenities of a 2-bedroom Airbnb versus renting two separate hotel rooms for a family trip in [Destination]."
#38: "How can I maximize hotel loyalty program points (e.g., Marriott, Hilton) for a stay in [City] to get free club lounge access and breakfast?"
#39: "Create a template inquiry asking a guesthouse host if they can arrange direct scooter, bicycle, or car rentals with local, trusted suppliers."
#40: "List the pet-friendly amenities, deposit rules, and weight limitations for the top boutique hotel chains in [Destination City]."
#41: "Draft a checklist to verify with a host if their property is suitable for remote work (exact Wi-Fi speed, desk size, power outlets, quietness)."
#42: "Find traditional countryside farm-stays (Agriturismo) in [Region] with details on organic meals, family hosting, and local transport access."
#43: "What are the exact questions to ask a host to confirm if their property has proper heating, air conditioning, and backup power generators?"
#44: "How to use last-minute hotel booking apps (e.g., HotelTonight) to secure premium rooms in [City] at 50% off during weekend trips."
#45: "Create a safety audit checklist for solo travelers checking into a hostel shared dorm (lockers, digital cards, night security, female-only dorms)."
#46: "Write a message requesting a room with a high-floor panoramic view at no extra cost, emphasizing past stays and positive reviews."
#47: "Expose hidden resort fees, destination fees, and local tourist taxes at hotels in [City] and draft a polite dispute letter."
#48: "Draft an inquiry to a hotel asking for details and prices of their free airport shuttle service or reliable shuttle partners."
#49: "Identify long-stay apartment management companies in [City] that offer direct leases to tourists bypassing Airbnb service fees."
#50: "Write a special request message asking for room decorations, a handwritten welcome card, and local fruit platters for a birthday stay."

[C] INTENSE CULINARY CRAWLS & LOCAL SECRETS (Prompts 51-75)
-----------------------------------------------------------
#51: "Generate a detailed food crawl map itinerary for [Neighborhood] in [City]. Focus on single-dish legendary street stalls, 30+ year old family-run bistros, and local culinary rituals. Skip all tourist-trap reviews."
#52: "I have food intolerances [Specify]. Translate these perfectly into [Language] using respectful, culturally appropriate local idioms, explaining the severity to restaurant chefs."
#53: "Create a local food market bargaining and tasting survival guide for [Market Name] in [City], highlighting price indicators and must-try stalls."
#54: "Identify 3 hidden craft breweries or local wine cellars in [City/Region] that offer tastings hosted directly by the owners."
#55: "What are the traditional coffee or tea rituals in [Country]? Recommend 3 historic cafes that maintain these exact authentic preparations."
#56: "Design a vegan/vegetarian substitute directory for traditional dishes in [Country], translating the request to exclude meat broths and animal fats."
#57: "Draft an itinerary of the best local breakfast spots in [City] that open before 8 AM, focusing on authentic bakery items and local coffees."
#58: "Find 5 Michelin Bib Gourmand or high-quality budget-friendly restaurants in [City] where dinner costs less than [Amount] per person."
#59: "Detail a seafood harbor crawling guide for [Coastal Town] where travelers can purchase fresh fish directly from fishermen and have it cooked nearby."
#60: "Create a culinary checklist of 10 must-try street foods at [Night Market Name], including average pricing and local dipping sauces."
#61: "Recommend highly rated, small-group cooking classes in [City] hosted in local homes rather than commercial tourist academies."
#62: "What are the visual safety indicators and hygiene checks to perform before eating street food in [Country/City] to avoid stomach illness?"
#63: "Identify the regional sweet dessert specialties of [Province/Region] and the exact historic pastry shops that invented them."
#64: "How to avoid long waiting lines at popular, reservation-free restaurants in [City] (best hours, side entrance bookings, alternative branches)."
#65: "Design a walking tapas/small-plates crawl connecting 4 distinct historic taverns in [City], specifying what single bite to order at each stop."
#66: "Find the authentic family-run diners (e.g., Dhabas, Izakayas, Trattorias) in [Neighborhood] where local office workers go for lunch."
#67: "Draft a list of secret speakeasies or hidden bars in [City], including entry instructions, disguised doors, and cocktail recommendations."
#68: "Find certified Halal or Kosher dining options serving traditional local cuisine in [Destination City] with contact numbers."
#69: "What are the best local markets to purchase premium, vacuum-sealed food souvenirs (spices, cheese, dried meats) to take home legally?"
#70: "Curate a list of 5 specialty third-wave coffee shops in [City] with fast Wi-Fi, comfortable seating, and excellent espresso quality."
#71: "Draft an etiquette guide on tipping, table manners, paying the bill, and calling servers in restaurants across [Country]."
#72: "List the top-tier fine dining restaurants in [City] that offer heavily discounted business lunch menus during weekdays."
#73: "What are the seasonal fruits and regional delicacies that are only available in [Region] during the month of [Month]?"
#74: "Design a cheese and charcuterie tasting road trip through [Valley/Region], including farm visits and direct-purchase shops."
#75: "Draft a budget breakdown for a food enthusiast visiting [City] for [X] days, detailing estimated street food, cafe, and mid-range meal costs."

[D] PHOTO SCOUTING & GOLDEN HOUR PLANNING (Prompts 76-100)
-----------------------------------------------------------
#76: "Identify the top 5 sunrise and sunset photography locations in [Destination]. Include exact geographic coordinates, crowd-evasion arrival times, and composition focal length tips."
#77: "Draft an immersive, culturally sensitive photography etiquette guide for visiting [Country], specifically on photographing temples, locals, and markets legally and respectfully."
#78: "Expose the current drone laws, permit application websites, and strictly prohibited flight zones for recreational drone pilots in [Country]."
#79: "Recommend 5 rooftop cafes, bars, or public observation terraces with completely unobstructed sunset views of [Iconic Landmark]."
#80: "What are the most photogenic architectural wonders and colorful street alleys in [City] that look best under morning golden hour light?"
#81: "Draft a rainy-day photo backup plan for [City], listing photogenic covered passages, historic libraries, and glass-dome greenhouses."
#82: "Identify the best locations in [City] for capturing portrait photography with deep historic backgrounds without paying commercial permit fees."
#83: "Provide a travel camera gear packing list optimized for lightweight backpacking, including lens choices for landscape versus street shooting."
#84: "Where can I find vintage analog film camera shops and processing labs in [City] that sell rare local film rolls?"
#85: "What are the best street photography spots in [City] for candid, high-contrast, black-and-white style shooting?"
#86: "Identify certified dark sky parks and remote high-altitude spots near [Location] for epic astrophotography and Milky Way shooting."
#87: "What are the exact coordinates of the most unique, lesser-known photo spots of [Landmark] away from the designated tourist viewing platform?"
#88: "Compare the pros and cons of traveling with a mirrorless camera system versus a modern high-end smartphone for photography in [Destination]."
#89: "Provide a security and safety plan for carrying expensive camera gear in crowded markets, public transit, and remote hiking trails in [Region]."
#90: "What are the ethical guidelines and animal welfare indicators to look for before photographing wildlife or elephant sanctuaries in [Country]?"
#91: "List the online trackers, local forums, and forecast websites for predicting peak autumn foliage or cherry blossom blooms in [Region]."
#92: "Find spectacular foggy mountain valley viewpoints near [City] that are easily accessible by car or public transit before 6 AM."
#93: "Recommend the best neon-lit cyberpunk alleys or night-market streets in [City] for moody, colorful long-exposure night photography."
#94: "Identify historic villages in [Country] that have preserved traditional clothing rental shops for cultural portrait photography."
#95: "What are the best snorkeling and diving spots near [Island] for capturing vibrant underwater marine life photos with a GoPro?"
#96: "Draft a daily travel vlogging cinematic shot list (B-roll, transitions, establishing shots, detail shots) for a [X]-day trip to [Destination]."
#97: "Recommend the best bridges, overpasses, or high points in [City] to shoot light-trail long exposure photos of night traffic."
#98: "How to capture empty photos of globally famous crowded spots (e.g., Trevi Fountain, Taj Mahal) without any tourists in the frame."
#99: "What are the dates, parade routes, and prime spectator spots for photographing the colorful, vibrant cultural festivals in [City]?"
#100: "Provide Lightroom mobile preset color-grading suggestions (exposure, contrast, split toning) to match the warm vintage vibe of [Destination City]."`,
    contentAr: `100 موجه وخبير سياحي مخصص للذكاء الاصطناعي (Prompts) لتخطيط السفر
=============================================================
مجموعة احترافية كاملة تضم 100 موجه جاهز للاستخدام مع ChatGPT ونماذج الذكاء الاصطناعي المختلفة لاستخراج أسرار السفر:

[أ] أسرار الطيران والترانزيت والرحلات الرخيصة (الموجهات 1-25)
----------------------------------------------------------
#1: "تصرف كخبير ومخطط رحلات جوية اقتصادي. أريد السفر من [بلد المغادرة] إلى [الوجهة] في شهر [الشهر]. اقترح عليّ بالتفصيل 5 مسارات طيران بديلة، مطارات ثانوية، أو حيل توقف ذكي لخفض أسعار تذاكر الطيران بنسبة 30%."
#2: "ابحث في خطوط الطيران الاقتصادية المحلية التي تغطي [المنطقة]. اذكر حدود الوزن، الفخاخ المخفية للأسعار، والرسوم الإضافية التي لا تعرضها محركات البحث الشهيرة."
#3: "صمم مسار رحلة بري بالقطار بدلاً من الطيران ليربط بين [المدينة أ] و [المدينة ب] مع تفاصيل التوفير والبطاقات الترويجية المتاحة."
#4: "ابحث عن أفضل تكوينات تذاكر الطيران متعددة المدن (Open-Jaw) لزيارة [البلد 1] و[البلد 2] و[البلد 3] في رحلة واحدة تبدأ من [نقطة الانطلاق]."
#5: "احسب أرخص نافذة زمنية تاريخية لحجز الرحلات الجوية إلى [الوجهة] خلال موسم [الموسم]. أعطني تواريخ محددة لتعيين تنبيهات الأسعار."
#6: "أنشئ قائمة تضم 5 مطارات ثانوية قريبة من [مدينة الوجهة] واشرح أرخص خيارات النقل (حافلة/قطار) من كل منها إلى وسط المدينة."
#7: "لدي [عدد] ميل في برنامج [شركة الطيران/بطاقة الائتمان]. اقترح أفضل طرق استرداد أميال الطيران للسفر من [نقطة الانطلاق] إلى [الوجهة]."
#8: "صمم دليلاً للبقاء والاستكشاف أثناء فترة توقف (Layover) لمدة 12 ساعة في [مطار/مدينة التوقف] بما في ذلك مواقع تخزين الأمتعة ووسائل النقل السريع."
#9: "حدد خيارات العبارات الاقتصادية أو النقل البحري الإقليمي التي تربط بين [المدينة الساحلية أ] و[المدينة الساحلية ب] مع المواعيد ونصائح الحجز."
#10: "اشرح كيفية حزم حقيبة الأمتعة الشخصية القياسية لتجاوز حدود الحجم الصارمة لشركات الطيران الاقتصادي [اسم الشركة] دون دفع رسوم إضافية."
#11: "ما هي حيل خداع سيارات الأجرة الشائعة في مطار [مدينة الوجهة] وما هي بالضبط تطبيقات نقل الركاب القانونية والخدمات ذات الأسعار المحددة مسبقاً؟"
#12: "اذكر صالات المطار المجانية أو حيل دخول الصالات دون بطاقات ائتمانية فاخرة في [رمز المطار] بما في ذلك مناطق الراحة الهادئة ونقاط الشحن المجانية."
#13: "اقترح مسار حافلة عامة أو قطار محلي ذو مناظر طبيعية كبديل لقطارات السياح الباهظة التي تربط بين [الموقع أ] و[الموقع ب]."
#14: "قوّم مخاطر وقانونية تذاكر المدن المخفية (Skiplagging) لرحلة ذهاب فقط من [نقطة الانطلاق] إلى [الوجهة] عبر [مدينة الترانزيت]."
#15: "قارن التكلفة الإجمالية لبطاقة النقل العام غير المحدودة لمدة [عدد] أيام مقابل شراء تذاكر الرحلة الواحدة لبرنامج سياحي نموذجي في [المدينة]."
#16: "اذكر أفضل 3 تطبيقات نقل محلي مستخدمة في [البلد] وتعتبر أرخص من أوبر، إلى جانب متطلبات تسجيل الحساب للأجانب."
#17: "صمم خطة لتحسين النقل الجماعي لـ [عدد] مسافرين في [المدينة]، مع مقارنة استئجار حافلة خاصة، سيارات الأجرة، وبطاقات النقل العام."
#18: "ما هي تواريخ وأوقات إطلاق حجز تذاكر القطارات السريعة في [البلد] لتأمين خصومات الحجز المبكر؟"
#19: "ابحث عن شبكات الحافلات الإقليمية السرية التي تربط القرى النائية في [المنطقة/البلد] والتي لا تظهر في محركات البحث باللغة الإنجليزية."
#20: "تصرف كمستشار لرحلات الطيران الاحتياطية (Standby). اشرح كيفية طلب تغيير الرحلة أو ترقية المقعد أو الحصول على تعويض مالي للتنازل عن المقعد."
#21: "اكشف الرسوم الخفية لشركات تأجير السيارات (مثل تأمين CDW، وبوابات الرسوم، ورسوم عبور الحدود) في [البلد] وكيفية رفضها قانونياً وأماناً."
#22: "أنشئ قائمة منسقة بالجولات السياحية المجانية سيراً على الأقدام (Free Walking Tours) في [المدينة]، بما في ذلك بقشيش المرشد ونقاط التجمع."
#23: "ما هي شروط السن وخطوات التحقق للحصول على خصومات الطلاب أو الشباب أو كبار السن على شبكات السكك الحديدية الوطنية في [البلد]؟"
#24: "صمم إستراتيجية تتبع أسعار ديناميكية. أرني كيف أستخدم فلاتر Google Flights لعزل رحلات الطيران العارض (Charter) والرحلات الاقتصادية إلى [المدينة]."
#25: "قارن بين سياسات الاسترداد وحماية إلغاء الحجز وموثوقية خدمة العملاء عند الحجز مباشرة من [شركة الطيران] مقابل وكالات السفر عبر الإنترنت (OTA)."

[ب] تفاوض حجز الفنادق والفلل الفاخرة (الموجهات 26-50)
-----------------------------------------------------
#26: "اكتب رسالة بريد إلكتروني مقنعة ومؤدبة للغاية لإرسالها لمالك شقة أو فندق صغير في [الوجهة] للتفاوض على سعر مخفض أو الحصول على ترقية مجانية للغرفة أو إفطار مجاني للإقامة لمدة [عدد الأيام] أيام."
#27: "كيف يمكنني فلترة والبحث عن الفلل العائلية الفاخرة التي تضم مسابح خاصة مغلقة بإطلالات طبيعية وبسعر تحت [السعر] لليلة في منصات الحجوزات الشهيرة؟"
#28: "صمم نصاً حوارياً للتفاوض عند الاتصال بمكتب استقبال فندق صغير في [المدينة] مباشرة للحصول على سعر أرخص بنسبة 15% من مواقع الحجز عبر الإنترنت."
#29: "اكتب خطاباً احترافياً لطلب ترقية مجانية لغرفة فندقية في [اسم الفندق] للاحتفال بذكرى زواجنا. ركز على الولاء والاقناع اللطيف."
#30: "ابحث عن 5 دور ضيافة محلية ساحرة (مثل ريوكان ياباني أو رياض مغربي) في [الوجهة] لا تدرج غرفها في Booking.com ولكنها تظهر في خرائط جوجل."
#31: "تحقق من قوانين التسجيل والامتثال للإيجار قصير الأجل للشقق في [المدينة] لتجنب إلغاء الحجز المفاجئ من قبل المضيف."
#32: "اكتب رسالة مهذبة لمضيف Airbnb تطلب فيها تسجيل الوصول المبكر وترك الحقائب في [العقار] بسبب وصول رحلة الطيران في الصباح الباكر."
#33: "حلل مستوى الأمان وإمكانية المشي والضوضاء في حي [اسم الحي] في [المدينة] للمسافرين المنفردين الذين يقيمون في دور ضيافة محلية."
#34: "اكتب رسالة طلب خاص لفندق في وسط المدينة تطلب فيها غرفة هادئة بعيداً عن المصاعد وآلات الثلج وضجيج الشارع."
#35: "اذكر بوابات الحجز السرية أو حجز الفنادق الغامضة (Mystery Hotels) التي تقدم خصومات هائلة على العقارات ذات الـ 5 نجوم في [المنطقة/المدينة]."
#36: "اكتب مقترحاً للتفاوض لإقامة طويلة لمدة [عدد] أشهر في شقة في [المدينة] مع عرض خصم للدفع النقدي المقدم."
#37: "قارن بين قيمة ومساحة شقة Airbnb بغرفتي نوم مقابل حجز غرفتين فندقيتين منفصلتين لرحلة عائلية في [الوجهة]."
#38: "كيف يمكنني تعظيم الاستفادة من نقاط برامج ولاء الفنادق (مثل Marriott أو Hilton) في [المدينة] للحصول على دخول مجاني للصالات الراقية والإفطار؟"
#39: "صمم نموذج استفسار للمضيف لمعرفة ما إذا كان بإمكانه ترتيب استئجار دراجة نارية أو سيارة مع موردين محليين موثوقين بأسعار منافسة."
#40: "اذكر شروط الإقامة الصديقة للحيوانات الأليفة ورسوم التأمين وحدود الوزن لأهم سلاسل الفنادق في [مدينة الوجهة]."
#41: "صمم قائمة تحقق للتأكد من ملاءمة العقار للعمل عن بعد (سرعة الإنترنت الدقيقة، مساحة المكتب، مخارج الطاقة، الهدوء)."
#42: "ابحث عن مزارع ريفية تقليدية للإقامة (Agriturismo) في [المنطقة] مع تفاصيل عن الوجبات العضوية والاستضافة العائلية والمواصلات."
#43: "ما هي الأسئلة الدقيقة التي يجب طرحها على المضيف لتأكيد وجود نظام تدفئة وتكييف ممتاز ومولدات طاقة احتياطية في العقار؟"
#44: "كيف يمكن استخدام تطبيقات حجز الفنادق في اللحظة الأخيرة (مثل HotelTonight) لتأمين غرف فاخرة بخصم 50% أثناء رحلات نهاية الأسبوع في [المدينة]؟"
#45: "أنشئ قائمة تفقد أمان للمسافرين المنفردين عند تسجيل الوصول في صالة نوم مشتركة (Hostel Dorm) (الخزائن، بطاقات الدخول، الحراسة الليلية)."
#46: "اكتب رسالة لطلب غرفة في طابق علوي مع إطلالة بانورامية دون تكلفة إضافية، مع التركيز على الزيارات السابقة والتقييمات الإيجابية المتوقعة."
#47: "اكشف رسوم المنتجعات والضرائب السياحية الخفية في فنادق [المدينة] واكتب نموذج رسالة للاعتراض عليها بأدب."
#48: "اكتب رسالة استفسار للفندق لطلب تفاصيل وأسعار خدمة النقل المجانية من المطار أو شركاء النقل المعتمدين لديهم."
#49: "حدد شركات إدارة الشقق السكنية المخصصة للإقامة الطويلة في [المدينة] والتي تقدم عقود إيجار مباشرة للسياح لتوفير رسوم خدمة Airbnb."
#50: "اكتب رسالة طلب خاصة لتزيين الغرفة وبطاقة ترحيب مكتوبة بخط اليد مع سلة فواكه محلية بمناسبة عيد ميلاد أحد المسافرين."

[ج] جولات تذوق الطعام الحقيقية وغير السياحية (الموجهات 51-75)
-------------------------------------------------------------
#51: "صمم جولة طعام يومية مفصلة في حي [الحي] بـ [المدينة]. أريد مطاعم شعبية صغيرة تقدم طبقاً واحداً أسطورياً ومحلات عائلية تعمل منذ 30 عاماً فما فوق. تجنب تماماً المطاعم المنتشرة على منصات التواصل الاجتماعي للمؤثرين."
#52: "أعاني من حساسية تجاه [حدد المكونات]. اكتب رسالة شرح وترجمة بلغة [اللغة] بأسلوب مهذب ومقنع لتقديمها لطهة المطعم لضمان سلامة طعامي التامة."
#53: "أنشئ دليلاً للمساومة وتذوق الأطعمة الشعبية في سوق [اسم السوق] في [المدينة]، موضحاً مؤشرات الأسعار والأكشاك التي يجب زيارتها."
#54: "حدد 3 معاصر عصير أو مزارع محلية لإنتاج المأكولات العريقة في [المدينة/المنطقة] تقدم جولات تذوق مباشرة مع الملاك."
#55: "ما هي طقوس إعداد القهوة أو الشاي التقليدية في [البلد]؟ اقترح 3 مقاهٍ تاريخية تحافظ على هذه الطرق التقليدية الأصيلة."
#56: "صمم دليلاً للبدائل النباتية للأطباق التقليدية في [البلد]، مع ترجمة عبارة طلب استبعاد المرق الحيواني والشحوم."
#57: "اكتب مساراً لأفضل مواقع الفطور المحلية في [المدينة] والتي تفتح قبل الساعة 8 صباحاً، مع التركيز على المخبوزات والقهوة المحلية."
#58: "ابحث عن 5 مطاعم حاصلة على تصنيف 'Bib Gourmand' من ميشلان في [المدينة] حيث لا تتجاوز تكلفة العشاء [المبلغ] للشخص الواحد."
#59: "صمم دليلاً لاستكشاف موانئ صيد الأسماك في [البلدة الساحلية] حيث يمكن للمسافرين شراء الأسماك الطازجة مباشرة من الصيادين وطبخها في مطاعم قريبة."
#60: "أنشئ قائمة تذوق لـ 10 أطعمة شوارع يجب تجربتها في سوق [اسم السوق الليلي]، مع متوسط الأسعار والصلصات المحلية الشهيرة."
#61: "اقترح ورش عمل ودروس طهي صغيرة في [المدينة] تُقام في منازل عائلية بدلاً من الأكاديميات التجارية السياحية."
#62: "ما هي المؤشرات البصرية للتأكد من سلامة ونظافة أطعمة الشوارع قبل تناولها في [البلد/المدينة] لتجنب نزلات البرد والمشاكل المعوية؟"
#63: "حدد الحلويات التقليدية الشهيرة في [المقاطعة/المنطقة] ومحلات المعجنات التاريخية التي ابتكرت هذه الوصفات أول مرة."
#64: "كيف يمكن تجنب طوابير الانتظار الطويلة في المطاعم الشهيرة التي لا تتيح الحجز المسبق في [المدينة] (أفضل الأوقات، الحجوزات الجانبية)."
#65: "صمم جولة مشي لتناول وجبات التاباس (أو الأطباق الصغيرة) تربط بين 4 حانات تاريخية في [المدينة]، مع تحديد الصنف الأفضل للطلب في كل محطة."
#66: "ابحث عن المطاعم العائلية الأصيلة (مثل داباس الهندية أو إيزاكايا اليابانية) في [الحي] حيث يتناول موظفو المكاتب المحليون غداءهم اليومي."
#67: "اكتب قائمة بالبارات السرية المخفية (Speakeasy) في [المدينة]، بما في ذلك طريقة الدخول، والأبواب المتخفية والمشروبات الموصى بها."
#68: "ابحث عن مطاعم تقدم مأكولات محلية تقليدية وحاصلة على شهادة حلال معتمدة في [مدينة الوجهة] مع أرقام التواصل."
#69: "ما هي أفضل الأسواق المحلية لشراء تذكارات غذائية مغلفة ومحمية (توابل، أجبان، لحوم مجففة) وأخذها للمنزل بشكل قانوني وآمن؟"
#70: "اختر قائمة تضم 5 مقاهٍ متخصصة في [المدينة] توفر إنترنت سريعاً، وجلسات مريحة وقهوة إسبريسو ممتازة مناسبة للعمل الرقمي."
#71: "اكتب دليلاً عن آداب تقديم البقشيش (الإكرامية)، وقواعد المائدة، ودفع الفاتورة، ومناداة النادل في مطاعم [البلد]."
#72: "اذكر أفخم مطاعم المأكولات الراقية في [المدينة] التي تقدم قوائم غداء عمل بأسعار مخفضة للغاية خلال أيام الأسبوع."
#73: "ما هي الفواكه الموسمية والأطباق الإقليمية التي تتوفر فقط في [المنطقة] خلال شهر [الشهر] من السنة؟"
#74: "صمم رحلة برية لتذوق الأجبان والمخبوزات المحلية عبر [الوادي/المنطقة]، تشمل زيارة المزارع والشراء المباشر من المنتجين."
#75: "اكتب تقديراً للميزانية الغذائية لعاشق طعام يزور [المدينة] لمدة [عدد] أيام، يوضح التكلفة المتوقعة لأطعمة الشوارع والمقاهي والوجبات المتوسطة."

[د] زوايا التصوير والساعة الذهبية ومواقع الانستغرام (الموجهات 76-100)
---------------------------------------------------------------------
#76: "حدد لي أفضل 5 مواقع لالتقاط صور شروق وغروب الشمس في [الوجهة]. اذكر إحداثيات جغرافية دقيقة، وقت الوصول لتلافي الحشود السياحية، ونصائح زاوية الكاميرا."
#77: "اكتب دليلاً موجزاً لآداب التصوير في [البلد]. ما هي القوانين والتقاليد المتبعة لتصوير المعابد والأشخاص المحليين والأسواق الشعبية بكل احترام وقانونية؟"
#78: "اكشف قوانين الطائرات بدون طيار (الدرون) الحالية، ومواقع التقديم على التصاريح، والمناطق المحظورة تماماً للمسافرين في [البلد]."
#79: "اقترح 5 مقاهٍ على الأسطح أو تراسات عامة تتيح رؤية واضحة تماماً لغروب الشمس فوق معلم [اسم المعلم الشهير]."
#80: "ما هي المعالم المعمارية الأكثر جاذبية للتصوير والأزقة الملونة في [المدينة] والتي تظهر بأجمل صورة خلال الساعة الذهبية الصباحية؟"
#81: "اكتب خطة بديلة للتصوير في الأيام الماطرة في [المدينة]، تسرد الممرات المغطاة التاريخية، والمكتبات القديمة والبيوت الزجاجية للنباتات."
#82: "حدد أفضل المواقع في [المدينة] لالتقاط صور البورتريه بخلفيات تاريخية عريقة دون الحاجة لدفع رسوم تصاريح تجارية."
#83: "قدم قائمة حزم لأدوات كاميرا السفر تكون خفيفة ومناسبة لحقيبة الظهر، بما في ذلك اختيار العدسات للمناظر الطبيعية وتصوير الشوارع."
#84: "أين يمكنني العثور على محلات لبيع كاميرات الأفلام القديمة ومعامل تحميض الصور في [المدينة] لشراء أفلام محلية نادرة؟"
#85: "ما هي أفضل مواقع تصوير الشارع (Street Photography) في [المدينة] لالتقاط صور عفوية متباينة وظليّة رائعة؟"
#86: "حدد حدائق السماء المظلمة والمناطق المرتفعة المعزولة القريبة من [الموقع] لتصوير النجوم الفلكي ومجرة درب التبانة بوضوح."
#87: "ما هي الإحداثيات الدقيقة لأماكن التصوير الفريدة والأقل شهرة لمعلم [اسم المعلم] بعيداً عن منصات المشاهدة السياحية المزدحمة؟"
#88: "قارن بين إيجابيات وسلبيات السفر بكاميرا احترافية عديمة المرآة (Mirrorless) مقابل استخدام هاتف ذكي حديث متطور للتصوير في [الوجهة]."
#89: "قدم خطة أمان لحماية وحمل معدات التصوير الثمينة في الأسواق المزدحمة، ووسائل النقل العام، ومسارات المشي البعيدة في [المنطقة]."
#90: "ما هي المعايير الأخلاقية ومؤشرات سلامة الحيوانات التي يجب التحقق منها قبل تصوير الحياة البرية أو زيارة محميات الأفيال في [البلد]؟"
#91: "اذكر منصات التتبع والمنتديات المحلية ومواقع التنبؤات لمعرفة ذروة ألوان الخريف أو تفتح أزهار الكرز (الساكورا) في [المنطقة]."
#92: "ابحث عن مطلات جبلية ضبابية ساحرة قريبة من [المدينة] يمكن الوصول إليها بسهولة بالسيارة أو وسائل النقل العام قبل الساعة 6 صباحاً."
#93: "اقترح أفضل الأزقة المضيئة بأنوار النيون أو شوارع الأسواق الليلية في [المدينة] لتصوير لقطات ليلية مذهلة بالتعريض الطويل (Long-Exposure)."
#94: "حدد القرى التاريخية في [البلد] التي حافظت على محلات تأجير الأزياء التقليدية لالتقاط صور بورتريه ثقافية تذكارية."
#95: "ما هي أفضل مواقع السباحة والغوص السطحي قرب [الجزيرة] لالتقاط صور وفيديوهات مائية نابضة بالحياة للحياة البحرية باستخدام كاميرا GoPro؟"
#96: "اكتب قائمة لقطات سينمائية يومية (B-roll، لقطات تأسيسية، تفاصيل) لإنتاج فيديو فلوغ (Vlog) لرحلة مدتها [عدد] أيام إلى [الوجهة]."
#97: "اقترح أفضل الجسور أو الممرات المرتفعة في [المدينة] لالتقاط لقطات تعريض طويل لمسارات أضواء السيارات ليلاً."
#98: "كيف يمكن التقاط صور خالية تماماً من السياح في معالم عالمية مزدحمة للغاية (مثل نافورة تريفي أو تاج محل) دون استخدام الفوتوشوب."
#99: "ما هي التواريخ ومسارات العروض والمواقع المثالية لتصوير المهرجانات الثقافية الملونة والنابضة بالحياة في [المدينة]؟"
#100: "قدم مقترحات لتعديل الألوان وتأثيرات (Lightroom Presets) للحصول على مظهر عتيق ودافئ يناسب طابع وتاريخ [مدينة الوجهة]."`
  },
  {
    id: "prod-london",
    name: "6 Days in London – Royal Heritage & Tea Guide 🇬🇧",
    nameAr: "خطة لندن الملكية وتجربة شاي الضحى - 6 أيام 🇬🇧",
    description: "Explore historic Royal palaces, British museum gems, traditional afternoon tea spots, and scenic river cruises.",
    descriptionAr: "استكشف القصور الملكية التاريخية، كنوز المتحف البريطاني، مناطق شاي الضحى الإنجليزي التقليدي، وجولات نهر التايمز البانورامية.",
    price: 8.00,
    originalPrice: 18.00,
    type: "pdf_plan",
    icon: "🇬🇧",
    badge: "Royal Heritage",
    badgeAr: "إصدار ملكي خاص",
    features: [
      "Royal Guard Ceremony Guide",
      "Top Rated High Tea Spots",
      "River Thames Cruising Guide",
      "West End Theatre Bookings",
      "Harrods Luxury Shopping Guide"
    ],
    featuresAr: [
      "دليل مراسم الحرس الملكي باكنغهام",
      "أفضل صالونات شاي بعد الظهر",
      "دليل الإبحار في نهر التايمز",
      "حجوزات مسارح منطقة الويست إيند",
      "دليل تسوق هارودز الفاخر وتذكاراته"
    ],
    details: "Navigate London like royalty. A detailed 6-day plan connecting spectacular royal palaces, high-end afternoon tea salons, maritime Greenwich voyages, and classic Soho entertainment.",
    detailsAr: "تجول في لندن كالملوك. برنامج مفصل لـ 6 أيام يربط القصور الملكية المهيبة، صالونات شاي الضحى الإنجليزي الفاخر، رحلات نهر التايمز، وأنشطة سوهو المسرحية المتميزة وتذكارات هارودز.",
    content: `LONDON 6-DAY ROYAL & TEA BLUEPRINT
==================================
DAY 1: Welcome to the Big Ben & Westminster
- Morning: Arrive in London. Check-in near Soho / Covent Garden.
- Afternoon: Walk past Westminster Abbey, Big Ben, and the Houses of Parliament.
- Evening: Take a flight on the London Eye at twilight. Dinner at 'The Audley' (fabulous historic gastropub).

DAY 2: Buckingham Palace & Changing of the Guard
- 10:00: Head to Buckingham Palace gates to secure a spot for the Changing of the Guard (starts 11:00 AM sharp).
- 13:00: Relax in Saint James's Park, watch local pelicans.
- 15:30: Traditional Afternoon High Tea experience at Fortnum & Mason or The Ritz (must book 2 months in advance!).

DAY 3: Tower of London & Borough Food Market
- 09:00: Explore Tower of London (see Royal Crown Jewels). Walk across iconic Tower Bridge.
- 12:00: Feast on local delicacies at Borough Market (fresh cheese toasties, warm strawberries in chocolate cups).
- 15:00: Visit Tate Modern Art Gallery (free collection, stunning top-floor viewing platform).

DAY 4: British Museum & West End Theater Show
- 10:00: Marvel at the Rosetta Stone and Egyptian mummies at the British Museum.
- 14:00: Shopping around Regent Street, Carnaby Street, and Liberty London.
- 19:30: Catch a legendary West End musical theater show in Soho (e.g., Les Misérables or Phantom of the Opera).

DAY 5: River Thames Cruise & Royal Greenwich
- 10:30: Scenic boat cruise from Westminster Pier to Royal Greenwich Pier.
- 12:00: Explore Greenwich Market. Walk up to Royal Observatory and stand on Prime Meridian Line.
- 15:00: Walk through Queen's House and the historic Cutty Sark sailing ship.

DAY 6: Hyde Park, Kensington Palace & Harrods
- Morning: Walk past Serpentine Lake in Hyde Park, see Kensington Palace.
- 13:00: Visit Harrods Luxury Department Store (food halls are jaw-dropping!).
- 17:00: Depart from London Heathrow (LHR) Airport.`,
    contentAr: `مسار لندن الملكي البريطاني وتجربة الشاي الفاخر لـ 6 أيام
======================================================
اليوم 1: الوصول إلى لندن وسحر وسط المدينة التاريخي
- الصباح: الوصول إلى لندن والسكن في منطقة سوهو أو كوفنت غاردن الشهيرة بتوسطها وحيويتها.
- بعد الظهر: جولة مشي تمر بساعة بيغ بن، كنيسة ويستمنستر، ومبنى البرلمان البريطاني العتيق.
- المساء: ركوب عجلة لندن آي (London Eye) عند الغروب، وعشاء بريطاني كلاسيكي في حانة 'The Audley' التاريخية.

اليوم 2: قصر باكنغهام ومراسم تبديل الحرس الملكي
- 10:00: التوجه لبوابات قصر باكنغهام لتأمين موقع رائع لمشاهدة مراسم تبديل الحرس الملكي (تبدأ 11:00 صباحاً).
- 13:00: الاسترخاء في حديقة سانت جيمس الجميلة ومراقبة البجع المحلي.
- 15:30: تجربة شاي بعد الظهر الملكي الإنجليزي في فندق الريتز أو متجر فورتنم آند ميسون الشهير (يتطلب حجزاً مسبقاً بشهرين).

اليوم 3: قلعة برج لندن التاريخية وسوق بوروه للمأكولات الشهية
- 09:00: زيارة قلعة برج لندن ومشاهدة مجوهرات التاج البريطاني الحقيقية، ثم عبور جسر البرج (Tower Bridge) سيراً.
- 12:00: غداء وتذوق لأشهى الأطباق العالمية في سوق بوروه العتيق (مخبوزات ساخنة، فراولة مغطاة بالشوكولاتة الطازجة).
- 15:00: زيارة متحف تيت مودرن للفن الحديث (دخول مجاني وإطلالة بانورامية رائعة من مقهى الطابق العلوي).

اليوم 4: المتحف البريطاني وعروض مسارح الويست إيند
- 10:00: زيارة المتحف البريطاني لمشاهدة حجر رشيد التاريخي والآثار الفرعونية الخالدة.
- 14:00: التسوق والمشي في شارع ريجنت، شارع أكسفورد، ومنطقة كارنابي الملونة العصرية.
- 19:30: حضور عرض غنائي أو مسرحي استثنائي في مسارح حي سوهو الشهير (مثل البؤساء Les Misérables).

اليوم 5: رحلة بحرية في نهر التايمز وبلدة غرينتش الملكية
- 10:30: ركوب قارب النزهة النهري من رصيف ويستمنستر إلى بلدة غرينتش التاريخية.
- 12:00: استكشاف سوق غرينتش الشعبي والصعود لمرصد غرينتش الملكي للوقوف فوق خط التوقيت العالمي (غرينتش).
- 15:00: زيارة قصر الملكة وسفينة كوتي سارك الشراعية الأثرية المذهلة.

اليوم 6: حدائق الهايد بارك، قصر كنسينغتون وتسوق هارودز
- الصباح: التنزه في حديقة هايد بارك الكبرى والوصول لبوابات قصر كنسينغتون السكني للأميرة ديانا سابقاً.
- 13:00: تسوق في متجر هارودز (Harrods) الفخم واستكشاف قاعات الطعام والشوكولاتة واللحوم الفاخرة.
- 17:00: التوجه لمطار لندن هيثرو (LHR) استعداداً للمغادرة بالسلامة.`
  },
  {
    id: "prod-italy-premium",
    name: "8 Days Italy Dream – Rome, Florence & Venice Food Explorer 🇮🇹",
    nameAr: "مسار إيطاليا السحري - روما وفلورنسا وفينيسيا وتذوق المعكرونة 8 أيام 🇮🇹",
    description: "The ultimate scenic train path covering ancient Roman Colosseum, Renaissance art in Florence, romantic gondolas in Venice, and secret local trattorias.",
    descriptionAr: "المسار الحديدي السريع الساحر عابراً للمدرج الروماني كولوسيوم، فن عصر النهضة بفلورنسا، جندول البندقية الرومانسي، ومطاعم المعكرونة الإيطالية المحلية المخفية.",
    price: 9.00,
    originalPrice: 22.00,
    type: "pdf_plan",
    icon: "🇮🇹",
    badge: "Gourmet Route",
    badgeAr: "مسار التذوق الإيطالي",
    features: [
      "Ancient Rome Tour Blueprint",
      "Skip-the-line Vatican Tips",
      "Florence Renaissance Gems",
      "Romantic Venice Water Guides",
      "Authentic Pasta & Gelato Hotspots"
    ],
    featuresAr: [
      "مخطط تاريخي لروما القديمة",
      "نصائح الفاتيكان لتفادي الطوابير",
      "روائع فن عصر النهضة في فلورنسا",
      "دليل مياه البندقية والجندول الرومانسي",
      "أماكن الباستا والجيلاتو الإيطالي الموثوقة"
    ],
    details: "Navigate Rome, Florence, and Venice by high-speed rail. Eat at back-alley family trattorias, skip tourist traps, and see historical landmarks seamlessly.",
    detailsAr: "تنقل بين روما وفلورنسا والبندقية بقطارات الرصاصة فائقة السرعة. تناول الطعام في المطاعم العائلية المخفية بالأزقة الخلفية، وتفادَ الفخاخ التجارية، وشاهد المعالم التاريخية بسلاسة تامة.",
    content: `ITALY 8-DAY DREAM TRAIN ITINERARY
==================================
DAY 1: Ancient Rome & Colosseum Night Walk
- Afternoon: Arrive in Rome. Check into Monti district hotel.
- Evening: Walk to Colosseum under moonlit floodlights (epic photo!). Dinner at Trattoria Luzzi (incredible local lasagna).

DAY 2: Vatican Treasures & Roman Sights
- 08:00: Vatican Museums and Sistine Chapel (Book official skip-the-line tickets 2 months early).
- 13:00: Walk past Trevi Fountain (toss a coin), Pantheon, and Piazza Navona.
- Evening: Try premium Italian Gelato at Frigidarium (dipped in dark or white chocolate).

DAY 3: High-Speed Train to Florence & Duomo Sunset
- 09:00: Take Frecciarossa bullet train (1.5h) to Florence (Firenze SMN).
- Afternoon: Marvel at Santa Maria del Fiore Duomo. Climb Giotto's Bell Tower.
- 18:00: Walk up to Piazzale Michelangelo for the ultimate orange panoramic sunset view of Florence.

DAY 4: Renaissance Masterpieces & Tuscan Steak
- 09:00: Visit Uffizi Gallery (Botticelli, Da Vinci).
- 13:00: Walk over the historic jeweler bridge 'Ponte Vecchio'.
- 19:30: Enjoy traditional Tuscan Florence T-bone Steak (Bistecca alla Fiorentina) at Trattoria ZaZa.

DAY 5: Day Trip to Leaning Tower of Pisa
- 10:00: Take cheap local train (1 hour) to Pisa Central.
- Afternoon: Walk 15 mins to Piazza dei Miracoli. Take the iconic holding-the-tower photo!
- 16:00: Return to Florence for fresh handmade Truffle Pasta at Osteria Pastella.

DAY 6: Venice High-Speed Train & Grand Canal
- 09:30: Train north to Venice Santa Lucia (2 hours).
- Afternoon: Take public Vaporetto No. 1 waterbus through the spectacular Grand Canal. Explore St. Mark's Square.
- Evening: Dine at local 'Bacari' bars for traditional Venetian Cicchetti (tapas-like plates with local seafood).

DAY 7: Colorful Burano & Gondola Ride
- Morning: Take boat to colorful Burano Island (famous lace and vibrant houses).
- 16:00: Enjoy a classic, romantic private Gondola Ride along Venice's quiet back canals (standard rate is €80/30mins).
- 19:30: Seafood spaghetti dinner at Trattoria Al Gatto Nero.

DAY 8: Farewell Italy
- Morning: Walk across Rialto Bridge, shop for Venetian glass ornaments.
- Afternoon: Depart from Venice Marco Polo (VCE) Airport.`,
    contentAr: `برنامج ومسار السفر لإيطاليا الرائعة 8 أيام (روما، فلورنسا، فينيسيا)
============================================================
اليوم 1: الوصول إلى روما التاريخية ومحيط الكولوسيوم العريق ليلاً
- بعد الظهر: الوصول لمطار روما الروماني الدولي، السكن في منطقة "مونتي" الحيوية والآمنة.
- المساء: مشي للكولوسيوم المضاء بأنوار تاريخية ساحرة. العشاء في Trattoria Luzzi (لازانيا إيطالية أصلية وبسعر ممتاز).

اليوم 2: كنوز متاحف الفاتيكان ونافورات روما الخالدة
- 08:00: متاحف الفاتيكان وكنيسة سيستينا (تذاكر المسار السريع الرسمية مطلوبة مسبقاً بشهرين).
- 13:00: المشي لرمي قطع النقود في نافورة تريفي الشهيرة، ثم زيارة البانثيون وساحة نافونا المفتوحة.
- المساء: تذوق جيلاتو Frigidarium الأسطوري المغطى بالكامل بالشوكولاتة الصلبة.

اليوم 3: قطار الرصاصة السريع لفلورنسا وغروب تلال ميكيل أنجيلو
- 09:00: قطار Frecciarossa الفائق السرعة لفلورنسا (ساعة ونصف فقط).
- بعد الظهر: مشاهدة كاتدرائية فلورنسا (الدومو) المهيبة وصعود برج جرس جيوتو.
- 18:00: الصعود لساحة ميكيل أنجيلو للاستمتاع بأروع غروب شمس برتقالي في إيطاليا فوق النهر والمدينة.

اليوم 4: لوحات عصر النهضة وعشاء الستيك الفلورنسي
- 09:00: معرض يوفيزي (Uffizi Gallery) الشهير لرؤية لوحات دافنشي العبقرية.
- 13:00: عبور جسر الصاغة والمجوهرات القديم "بونتي فيكيو" (Ponte Vecchio).
- 19:30: عشاء ستيك فلورنسي تقليدي شهير وعملاق في مطعم Trattoria ZaZa العريق.

اليوم 5: رحلة اليوم الواحد لبرج بيزا المائل
- 10:00: قطار إقليمي رخيص وسريع لمدة ساعة إلى مدينة بيزا الإيطالية.
- بعد الظهر: جولة في ساحة المعجزات والتقاط صورة برج بيزا المائل الشهيرة.
- 16:00: العودة لفلورنسا وتذوق باستا الكمأ والتروفل المفتوحة والمطبوخة أمام عينيك في Osteria Pastella.

اليوم 6: قطار البندقية المائي وركوب الفابوريتو بالقناة الكبرى
- 09:30: القطار السريع شمالاً لجزيرة البندقية "فينيسيا" (ساعتان فقط).
- بعد الظهر: ركوب حافلة المياه العامة (Vaporetto No. 1) عبر القناة الكبرى والوصول لساحة سان ماركو الأسطورية.
- المساء: تذوق وجبات السيكيتي "تSingle Bites" البحرية اللذيذة في بارات البندقية التقليدية.

اليوم 7: بيوت جزيرة بورانو الملونة وجولة الجندول الكلاسيكية
- الصباح: رحلة بحرية بالمركب لجزيرة بورانو (Burano) الساحرة بألوان بيوتها الزاهية وصناع الدانتيل.
- 16:00: جولة جندول كلاسيكية هادئة ورومانسية وسط قنوات فينيسيا الضيقة (التعرفة الرسمية الموحدة هي 80 يورو).
- 19:30: عشاء سباغيتي مأكولات بحرية طازجة في مطعم Trattoria Al Gatto Nero.

اليوم 8: شراء الذكريات والعودة بالسلامة
- الصباح: جولة تسوق فوق جسر ريالتو وشراء الأقنعة الفينيسية اليدوية والباستا الملونة.
- بعد الظهر: التوجه لمطار فينيسيا ماركو بولو (VCE) للعودة للديار.`
  },
  {
    id: "prod-japan-culinary",
    name: "Tokyo & Kyoto Ultimate Culinary Secrets Guide 🇯🇵",
    nameAr: "دليل كوكب اليابان الغذائي السري - سوشي ورامن فاخر 🇯🇵",
    description: "An exclusive itemized directory of handpicked authentic sushi bars, ramen shops, and street markets in Tokyo and Kyoto.",
    descriptionAr: "دليل حصري ومنسق لأفضل مطاعم السوشي المخفية، عربات الرامن التقليدية، والأسواق الشعبية في طوكيو وكيوتو.",
    price: 11.00,
    originalPrice: 26.00,
    type: "pdf_plan",
    icon: "🇯🇵",
    badge: "Foodie Choice",
    badgeAr: "دليل التذوق الفاخر",
    features: [
      "Hidden Michelin-quality Ramen",
      "Secret Standing Sushi Bars",
      "Matcha & Dessert Tea Lounges",
      "Izakaya Alleys Survival Guide",
      "Ordering Phrases in Japanese"
    ],
    featuresAr: [
      "أماكن رامن سرية بجودة ميشلان",
      "مطاعم سوشي واقفة مخفية",
      "مقاهي الماتشا والحلويات التقليدية",
      "دليل استكشاف أزقة الإيزاكايا",
      "عبارات يابانية لطلب الطعام"
    ],
    details: "Unlock the authentic tastes of Tokyo and Kyoto. Skip the tourist traps and dine at legendary spots run by families for decades, with ordering instructions and cost guides.",
    detailsAr: "اكتشف المذاق الحقيقي والفريد لمدينتي طوكيو وكيوتو. تجنب الفخاخ السياحية وتناول طعامك في مواقع عريقة تديرها عائلات منذ عقود، مع إرشادات الطلب والأسعار.",
    content: `TOKYO & KYOTO CULINARY SECRET DIRECTORY (15 TOP GEMS)
=======================================================

[1] TOKYO ESSENTIALS (8 Spots)
------------------------------
1. Standing Sushi Bar (Tsukiji Outer Market): "Sushi Kurama"
   - Order: Chef's Omakase Selection (Usually around ¥3500 / $25).
   - Secret Tip: Skip the 4-hour queue at main Tsukiji stalls; the quality here is identical because they buy fish from the same distributor daily.
2. Hidden Michelin Ramen: "Chuka Soba Ginza Hachigou"
   - Order: Duck and chicken broth ramen. Requires early queue or booking.
3. Secret Golden Gai Alley Izakaya: "Albatross Bar" (Shinjuku)
   - Order: Yakitori Chicken Skewers + local green tea highball. Beautiful retro interior, ¥500 table charge is worth it.
4. Budget Kobe Beef Steak: "Steakland Kobe" (Shinjuku branch)
   - Order: Lunch Kobe A5 beef set (Slash dinner prices by 60%!).
5. Fluffy Soufflé Pancakes: "Avo Cafe" / "Flipper's Harajuku"
   - Order: Melt-in-your-mouth Kiseki pancakes. Go at 10:30 AM.
6. Local Tonkatsu (Pork/Beef Cutlet): "Gyukatsu Motomura Shibuya"
   - Order: Deep fried beef cutlet cooked on mini stone grills at your seat.
7. Shinjuku Omoide Yokocho (Memory Lane): "Asadachi Yakitori"
   - Order: Traditional skewers in a smoky narrow alley under paper lanterns.
8. Akihabara Secret Maid Cafe Alternative: "Portal Cafe & Gaming Lounge" (Calm manga nook).

[2] KYOTO CULINARY HIGHLIGHTS (7 Spots)
---------------------------------------
9. Authentic Gion Matcha Delights: "Gion Tsujiri" (Kyoto Gion)
   - Order: Get the green tea soft-serve to go from the ground floor (Takes 2 minutes instead of 1 hour wait for the upstairs salon!).
10. Nishiki Market Seafood Skewers: "Daiyasu Oyster Bar"
    - Order: Charcoal-grilled giant oysters and octopus skewers.
11. Fire Ramen Show: "Menbaka Fire Ramen"
    - Order: Green onion soy sauce ramen (They light the soup on fire in front of you!).
12. Traditional Zen Tofu Banquet: "Shigetsu inside Tenryu-ji Temple"
    - Order: Fully vegan Zen Buddhist meal overlooking a historical garden.
13. Secret Riverside Dining: "Kibune Hiroya" (Dine on floating wooden platforms over rushing cold river water!).
14. Giant Handmade Gyoza: "Chao Chao Gyoza" (Kyoto Sanjo)
    - Order: Pork and ginger wing gyoza platter.
15. Bamboo Forest Matcha Spot: "Okochi Sanso Villa Garden" (Free green tea with your bamboo forest entry ticket!).`,
    contentAr: `دليل كوكب اليابان الغذائي السري والمطاعم الخفية (أهم 15 موقعاً في طوكيو وكيوتو)
========================================================================

[1] معالم طوكيو الشهية والسرية (8 مواقع)
-------------------------------------
1. مطعم سوشي الواقف بكاديكوي: "Sushi Kurama" (سوق تسوكيجي الخارجي)
   - الطلب الموصى به: وجبة الشيف "أوماكاسي" Omakase (حوالي 25$).
   - نصيحة سرية: وفر عناء الانتظار لـ 4 ساعات في المحلات التجارية الشهيرة؛ هذا المطعم يوفر جودة متطابقة ومباشرة وبتكلفة أقل بكثير.
2. رامن سرية حاصلة على تقييمات عالمية: "Chuka Soba Ginza Hachigou" (حي غينزا)
   - الطلب: رامن مرق البط والدجاج الذهبي الفاخر (يتطلب حضوراً مبكراً جداً للحصول على رقم).
3. حانة الإيزاكايا الأثرية في أزقة شينجوكو: "Albatross Bar" (منطقة غولدن غاي)
   - الطلب: أسياخ الياكيتوري ولحم الفحم. يحتوي على طابقين عتيقين بديكورات فريدة وساحرة.
4. ستيك لحم الكوبي الياباني الأصيل بميزانية ذكية: "Steakland Kobe" (فرع شينجوكو)
   - الطلب: قائمة غداء لحم الكوبي A5 الفاخر (يوفر حوالي 60% من سعر قائمة العشاء المتطابقة!).
5. بان كيك السوفليه الياباني الهش والمنتفخ: "Flipper's Harajuku"
   - الطلب: بان كيك الشوكولاتة والتوت الهش. اذهب في تمام الـ 10:30 صباحاً لتجنب الازدحام.
6. كستلاتة اللحم المقرمشة المقلية: "Gyukatsu Motomura Shibuya"
   - الطلب: لحم مقلي مقرمش من الخارج وطري من الداخل تطبخه بنفسك على شواية حجرية صغيرة على طاولة جلوسك.
7. زقاق الذكريات الشهير بشينجوكو: "Omoide Yokocho"
   - الطلب: أسياخ دجاج مشوية تحت فوانيس ورقية حمراء عتيقة مفعمة بالأجواء اليابانية الأصلية.
8. مقهى هادئ لعشاق الأنمي بعيداً عن المظاهر التجارية: "Portal Cafe & Manga Lounge".

[2] روائع كيوتو التقليدية (7 مواقع)
-----------------------------------
9. آيس كريم الماتشا الأصلي في حي الغيشا: "Gion Tsujiri" (حي جيون، كيوتو)
   - الطلب: آيس كريم الماتشا بالبسكويت من منفذ البيع بالطابق الأرضي (يستغرق دقيقتين بدلاً من الوقوف ساعة للصعود للصالون العلوي!).
10. أسياخ سوق نيشيكي البحري الشعبي: "Daiyasu Oyster Bar"
    - الطلب: المحار المشوي على الفحم وأسياخ الأخطبوط الصغيرة المحشوة.
11. مطعم رامن النار الاستعراضي: "Menbaka Fire Ramen"
    - الطلب: رامن الصويا والبصل الأخضر (يسكب الشيف الزيت المشتعل فوق طبقك مباشرة في استعراض مثير).
12. وجبة غداء معابد الزن النباتية الفاخرة: "Shigetsu inside Tenryu-ji Temple"
    - الطلب: وجبة بوذية نباتية بالكامل مطبوخة بعناية ومطلة على حدائق المعبد التاريخية بـ آراشيياما.
13. العشاء المعلق فوق النهر الجاري البارد: "Kibune Hiroya" (تناول الطعام على منصات خشبية معلقة مباشرة فوق مياه الشلال الباردة في الصيف!).
14. رقاقات الغيوزا المقرمشة المحشوة: "Chao Chao Gyoza" (وسط كيوتو)
    - الطلب: طبق الغيوزا المشبك المقرمش بالزنجبيل.
15. شاي حديقة الخيزران السري: "Okochi Sanso Villa Garden" (تحصل على كوب شاي ماتشا ياباني ساخن وحلوى تقليدية مجاناً مع تذكرة دخول حديقة الفيلا الملاصقة لغابة الخيزران!).`
  },
  {
    id: "prod-swiss-railpass",
    name: "Switzerland Scenic Train Routes Planner 🇨🇭",
    nameAr: "مخطط سويسرا السككي الفاخر وتوفير السكك الحديدية 🇨🇭",
    description: "Get the exact routes, panoramic express booking links, and budget strategies to maximize the Swiss Travel Pass.",
    descriptionAr: "خط السير والروابط المباشرة لجميع قطارات سويسرا البانورامية الشهيرة، وحيل توفير بطاقة Swiss Travel Pass.",
    price: 12.00,
    originalPrice: 29.00,
    type: "pdf_plan",
    icon: "🇨🇭",
    badge: "Top Seller",
    badgeAr: "الأكثر طلباً",
    features: [
      "Scenic Train Route Overviews",
      "Swiss Travel Pass Analysis",
      "Free Alternative Route Guides",
      "Mountain Cable Car Discounts",
      "Essential Timing & Booking Tips"
    ],
    featuresAr: [
      "نظرة شاملة على السكك الحديدية",
      "تحليل ومقارنة بطاقات السفر",
      "بدائل قطارات بانورامية مجانية",
      "خصومات وعروض التلفريك الجبلي",
      "مواعيد الحجز وإرشادات التوفير"
    ],
    details: "Master Switzerland's legendary transit system. Learn how to book panoramic routes, select between different travel pass tiers, and access secret discounts on mountain cable cars.",
    detailsAr: "احترف التنقل في شبكة السكك الحديدية السويسرية الأسطورية. تعلم كيفية حجز قطارات الرحلات البانورامية، واختيار فئة التذكرة المناسبة، وخصومات التلفريك السري.",
    content: `SWITZERLAND SCENIC TRAIN SYSTEMS COMPLETE MANUAL
=================================================

[1] THE 5 PANORAMIC TRAIN LEGENDS
---------------------------------
1. Glacier Express (Zermatt to St. Moritz):
   - The "Slowest Express Train" in the world (8 hours of snow-capped mountains and gorges).
   - Seat Reservation: MANDATORY (€49 surcharge) and independent of your Swiss Travel Pass. Book exactly 90 days early on: https://www.glacierexpress.ch
   - Budget Hack: Take regular local regional trains on the exact same tracks (e.g., Zermatt -> Visp -> Andermatt -> Disentis -> St. Moritz). It is 100% free with Swiss Travel Pass, requires no seat bookings, and you can open windows!

2. Bernina Express (Chur to Tirano, Italy):
   - Dramatic spiral viaducts and high altitude glaciers.
   - SBB Link: https://www.rhb.ch for panoramic seat bookings.
   - Tip: Travel in late spring to see lush green valleys in Italy and deep snow in the Swiss Alps simultaneously.

3. GoldenPass Express (Montreux to Interlaken):
   - Historic Belle Époque carriages or ultra-modern jumping gauge trains.
   - Tip: Book VIP front-facing seats for premium pilot perspective.

4. Gotthard Panorama Express (Lucerne to Lugano):
   - Half paddle-steamer boat cruise over Lake Lucerne, half scenic steam train.

5. Luzern-Interlaken Express:
   - Spectacular red train passing through 5 alpine lakes and dramatic waterfalls.

[2] SWISS TRAVEL PASS SAVINGS STRATEGY
--------------------------------------
- Do not use the Pass for cheap short journeys. Plan your heavy panoramic long routes and mountain cable cars consecutively on consecutive travel pass days.
- Fully Free Excursions with Swiss Pass (Saves up to $120/excursion):
  - Mount Rigi (100% free boat, cogwheel train, and cable car).
  - Mount Stanserhorn (100% free open-top cabrio cable car).
  - Mount Stoos (100% free steepest funicular railway in the world).
- Mountain Excursions with 50% discount: Jungfraujoch Top of Europe, Mount Pilatus, Mount Titlis, and Gornergrat Zermatt. Keep your travel pass active on these days!`,
    contentAr: `دليل سويسرا السككي ومخطط الرحلات البانورامية وحيل توفير التكاليف
============================================================

[1] المسارات الخمسة لقطارات سويسرا البانورامية الأسطورية
------------------------------------------------------
1. قطار جبال غليشير إكسبريس (Glacier Express) (من زيرمات إلى سانت موريتز):
   - يُعرف بأنه "أبطأ قطار سريع" في العالم (رحلة من 8 ساعات عابرة لأعلى القمم والجسور والوديان الثلجية).
   - حجز المقاعد: إلزامي تماماً (سعر الحجز حوالي 49 فرنكاً) وهو منفصل عن تذكرتك أو بطاقتك السويسرية. احجز قبل السفر بـ 90 يوماً على الموقع الرسمي: https://www.glacierexpress.ch
   - حيلة ذكية للتوفير: يمكنك استقلال القطارات الإقليمية العادية المتاحة على نفس السكك والمحطات تماماً (زيرمات -> فيسب -> أندرمات -> ديسينتيس -> سانت موريتز). هذه القطارات مجانية 100% بالكامل لحاملي بطاقة Swiss Pass، ولا تتطلب أي حجز مسبق، ونوافذها قابلة للفتح لالتقاط صور صافية بلا انعكاس!

2. قطار بيرنينا إكسبريس الفاتن (Bernina Express) (من خور إلى تيرانو بإيطاليا):
   - مسار لولبي وجسور معلقة شاهقة الارتفاع وجبال جليدية ساحرة.
   - رابط الحجز الرسمي: https://www.rhb.ch للحصول على مقاعد بانورامية مكشوفة.
   - نصيحة: سافر في أواخر الربيع لتشاهد الوديان الإيطالية الخضراء الدافئة والثلوج السويسرية البيضاء الكثيفة في نفس الرحلة!

3. قطار غولدن باس السريع (GoldenPass Express) (من مونترو إلى إنترلاكن):
   - عربات كلاسيكية فاخرة تعود للحقبة الذهبية أو قطارات حديثة بانورامية بالكامل.
   - نصيحة: احجز مقاعد الواجهة الأمامية (VIP) لتشعر كأنك قائد القطار وتشاهد الطبيعة بشكل بانورامي كامل.

4. قطار غوتهارد البانورامي (Gotthard Panorama Express) (من لوسيرن إلى لوغانو):
   - يدمج بين إبحار بمركب بخاري عتيق في بحيرة لوسيرن ورحلة قطار بخاري تاريخي شيق.

5. قطار لوسيرن-إنترلاكن إكسبريس:
   - قطار أحمر فائق الجمال يمر بـ 5 بحيرات ألبية زرقاء وشلالات مياه جبلية متدفقة.

[2] إستراتيجية توفير بطاقة السفر السويسرية Swiss Travel Pass
-----------------------------------------------------------
- لا تهدر أيام البطاقة في الرحلات القصيرة الرخيصة داخل المدن. اجمع رحلات القطارات الطويلة البانورامية والصعود للتلفريك الجبلي في أيام متتالية للاستفادة القصوى.
- رحلات جبلية مجانية 100% بالكامل لحاملي بطاقة Swiss Pass (توفر حتى 120$ للرحلة الواحد):
  - جبل ريجي (Rigi) (مجاني بالكامل يشمل القارب، القطار المسنن، والتلفريك المعلق).
  - جبل ستانسيرهورن (Stanserhorn) (مجاني بالكامل يشمل تلفريك الكابريو المكشوف الرائع).
  - جبل ستوس (Stoos) (مجاني بالكامل يشمل ركوب أشد سكة حديدية معلقة انحداراً في العالم).
- جبال توفر خصم 50% لحاملي البطاقة: قمة يونغفراو (أعلى نقطة بأوروبا)، جبل بيلاتوس، جبل تيتليس الشاهق، ومطل غورنرغات في زيرمات.`
  },
  {
    id: "prod-bali-villas",
    name: "Bali Secret Private Villas & Infinity Pools Directory 🇮🇩",
    nameAr: "دليل بالي السري للفلل الخاصة والمسابح اللامتناهية الرخيصة 🇮🇩",
    description: "Access 30+ hidden private villas in Ubud and Uluwatu featuring infinity pools, floating breakfasts, and incredible canyon views for under $100/night.",
    descriptionAr: "روابط وتفاصيل لأكثر من 30 فيلا خاصة مخفية في أوبود وأولواتو تضم مسابح لامتناهية ووجبات إفطار عائمة بأقل من 100 دولار لليلة.",
    price: 8.00,
    originalPrice: 19.00,
    type: "pdf_plan",
    icon: "🇮🇩",
    badge: "Romantic Escape",
    badgeAr: "لعشاق الاستجمام",
    features: [
      "Ubud Jungle Eco-Villas",
      "Uluwatu Clifftop Ocean Views",
      "Floating Breakfast Pools",
      "Direct Booking Shortcuts",
      "Private Driver Contact Links"
    ],
    featuresAr: [
      "فلل أوبود الخيزرانية وسط الغابة",
      "إطلالات محيطية من جرف أولواتو",
      "مسابح الوجبات العائمة الخاصة",
      "اختصارات حجز مباشرة وموثوقة",
      "أرقام اتصال بسائقين خاصين معتمدين"
    ],
    details: "Discover absolute comfort in Bali without breaking the bank. Features 30+ secluded private villas with stunning infinity pools, bamboo eco-homes, and deep jungle views under $100/night.",
    detailsAr: "اكتشف الرفاهية والاستجمام التام في بالي بأسعار لا تُصدق. يضم الدليل أكثر من 30 فيلا خاصة منعزلة بمسابح لامتناهية، وأكواخ خيزرانية بيئية تطل على وادٍ أخضر بسعر تحت 100$.",
    content: `BALI 30+ SECRET PRIVATE VILLAS DIRECTORY & LINKS
==================================================

[A] UBUD DEEP JUNGLE & RIVER VALLEY ESCAPES (10 Villas under $100)
-----------------------------------------------------------------
1. Hidden Bamboo Eco-House: "Hideout Bali - Lightroom"
   - Rate: ~$95/night | Location: Selat, East Bali
   - Link: https://www.airbnb.com/rooms/15729112
   - Features: Wild jungle river, natural heated hot tub, fully bamboo open-air luxury.
2. Suspension Net Forest Villa: "Camaya Bali Butterfly"
   - Rate: ~$99/night | Location: Selat, East Bali
   - Link: https://www.airbnb.com/rooms/31195662
   - Features: Giant net suspended over terrace overlooking green rice terraces, private plunge pool.
3. Cliffside Hanging Pool: "Munduk Heaven Luxury Villas"
   - Rate: ~$85/night | Location: Munduk Rainforest
   - Link: https://www.booking.com/hotel/id/munduk-heaven-luxury-villas.html
   - Features: Floating breakfast served on a heart-shaped tray in your private cliff pool.
4. Secret River Sanctuary: "Bambu Indah - Pagoda Villa"
   - Rate: ~$90/night | Location: Sayan, Ubud
   - Link: https://www.booking.com/hotel/id/bambu-indah.html
   - Features: Glass floor dining over a live natural stream, spring-water swimming pools.
5. Panoramic Jungle Canopy: "Pita Maha Resort Traditional Villa"
   - Rate: ~$95/night | Location: Campuhan Ridge, Ubud
   - Link: https://www.booking.com/hotel/id/pita-maha-island-resort.html
   - Features: Traditional royal stone villas with private plunge pool overlooking the Campuhan canyon.
6. The Bird's Nest Bamboo Cabin: "Firefly Eco Lodge BirdNest"
   - Rate: ~$45/night | Location: Central Ubud Fields
   - Link: https://www.airbnb.com/rooms/10543632
   - Features: Climb a 5-meter bamboo ladder to sleep in an elevated woven bamboo nest overlooking glowing fireflies.
7. Private Infinity Jungle Oasis: "Alam Dania Cottage"
   - Rate: ~$65/night | Location: Tegallalang, Ubud
   - Link: https://www.booking.com/hotel/id/alam-dania-cottages.html
   - Features: Secluded stone cottages, pristine infinity pool overlooking pristine coconut palms. Outstanding local massage services.
8. Modern Boho Glasshouse: "The Glass House Bali"
   - Rate: ~$75/night | Location: Payangan Forest
   - Link: https://www.booking.com/hotel/id/glass-house-ubud.html
   - Features: Floor-to-ceiling glass walls, fully private garden pool with floating bean bags.
9. Rice Terrace Horizon View: "Puri Sebali Resort - Suite Villa"
   - Rate: ~$92/night | Location: Sebali, Ubud
   - Link: https://www.booking.com/hotel/id/puri-sebali-resort.html
   - Features: Gorgeous private pool villas directly touching green rice paddies, outdoor rainforest bath.
10. Luxury Glamping Treehouse: "Sandat Glamping Tents"
    - Rate: ~$98/night | Location: Pejeng, Ubud
    - Link: https://www.booking.com/hotel/id/sandat-glamping-tents.html
    - Features: Eco-luxury canvas safari tents with private pools immersed in dense jungle vegetation.

[B] ULUWATU CLIFFTOP OCEAN SANCTUARIES (10 Villas under $100)
-------------------------------------------------------------
11. Secluded Surf Nook: "La Joya Biu Biu Resort"
    - Rate: ~$85/night | Location: Balangan Beach, Uluwatu
    - Link: https://www.booking.com/hotel/id/la-joya-biu-biu.html
    - Features: Circular stone eco-cabins with access to a clifftop infinity bath directly overlooking waves.
12. Private Plunge Pool Oasis: "Sal Secret Spot - Pool Villa"
    - Rate: ~$90/night | Location: Bingin Beach, Uluwatu
    - Link: https://www.booking.com/hotel/id/sal-secret-spot.html
    - Features: Beautiful white minimalist Mediterranean-boho design, outdoor stone bath, private deck pool.
13. Sunset Edge Cliff Villa: "Mahi Mahi Villas - Bingin"
    - Rate: ~$95/night | Location: Bingin Beach, Uluwatu
    - Link: https://www.booking.com/hotel/id/mahi-mahi-villas.html
    - Features: Cliff edge views, private plunge pool, steps away from legendary surf breaks.
14. Glass Ocean Skyloft: "Gravity Boutique Hotel - Loft Suite"
    - Rate: ~$88/night | Location: Uluwatu Hilltop
    - Link: https://www.booking.com/hotel/id/gravity-eco-boutique-hotel.html
    - Features: Minimalist white concrete rooms, dramatic 360-degree ocean views from your bed, hammock over pool.
15. Bamboo Ocean Cabana: "Kura Kura Surf Camp Uluwatu"
    - Rate: ~$55/night | Location: Suluban Cliff
    - Link: https://www.airbnb.com/rooms/28833910
    - Features: Clifftop ocean views, walk directly down to Suluban cave beach, private infinity pool access.
16. Secret Beach Eco Cottage: "Mick's Place Bingin"
    - Rate: ~$98/night | Location: Bingin Cliff, Uluwatu
    - Link: https://www.booking.com/hotel/id/mick-s-place.html
    - Features: Round grass roof Polynesian-style bungalows directly on the cliff-edge with private plunge pools.
17. Tropical Surf Compound: "The Uluwatu Collective - Private Villa"
    - Rate: ~$75/night | Location: Padang Padang
    - Link: https://www.airbnb.com/rooms/42110293
    - Features: Secluded garden pool, outdoor surf-rinse shower, walking distance to secret beaches.
18. Minimalist Concrete Villa: "Ulu Cliffhouse Studio Suites"
    - Rate: ~$99/night | Location: Pecatu, Uluwatu
    - Link: https://www.booking.com/hotel/id/ulu-cliffhouse.html
    - Features: Architectural design masterpiece, world-class sound system, access to cliff beach club.
19. Panoramic Horizon Pool: "Dreamland Unique Hotel"
    - Rate: ~$60/night | Location: Pecatu Cliff
    - Link: https://www.booking.com/hotel/id/dreamland-view.html
    - Features: Watch surfers and dramatic Bali sunsets directly from your private bedroom terrace.
20. Sunset Cliff Cabins: "Bambu Indah Clifftop Resort"
    - Rate: ~$92/night | Location: Pecatu Coast
    - Link: https://www.booking.com/hotel/id/bambu-indah-uluwatu.html
    - Features: Reclaimed teak wood fisherman cabins perched directly over high-crashing waves.

[C] SIDEMEN, MUNDUK & CANGGU PRIVATE OASIS (10 Villas under $100)
-----------------------------------------------------------------
21. Rice Paddy Bamboo Dome: "Veluvana Bali - Owl House"
    - Rate: ~$98/night | Location: Sidemen Valley (East Bali)
    - Link: https://www.airbnb.com/rooms/44290311
    - Features: Entirely bamboo dome, hanging nets, private swimming pool facing Mount Agung volcano.
22. Deep Valley Mist Escape: "Munduk Moding Plantation Cove"
    - Rate: ~$99/night | Location: Munduk Hills
    - Link: https://www.booking.com/hotel/id/munduk-moding-plantation.html
    - Features: Globally famous for its sky-infinity pool touching the clouds, organic coffee plantation surroundings.
23. Sidemen Bamboo Loft: "Samara Hills Bamboo Villa"
    - Rate: ~$85/night | Location: Sidemen Valley
    - Link: https://www.airbnb.com/rooms/38902192
    - Features: Panoramic volcano sunrise views, private wooden hot tub, outdoor shower.
24. Canggu Boho Private Pool: "The Layar Designer Villas"
    - Rate: ~$99/night | Location: Seminyak/Canggu Boundary
    - Link: https://www.booking.com/hotel/id/the-layar.html
    - Features: Slanted iconic roofs, fully private swimming pool, outdoor stone lounge, lush gardens.
25. Secluded Bamboo Teepee: "Wapa di Ume Sidemen - Suite"
    - Rate: ~$95/night | Location: Sidemen Valley
    - Link: https://www.booking.com/hotel/id/wapa-di-ume-sidemen.html
    - Features: Luxury canopy beds, deep stone bath over looking the rushing Unda river.
26. Canggu Rice Paddy Oasis: "Villa Lotus Canggu"
    - Rate: ~$70/night | Location: Pererenan, Canggu
    - Link: https://www.airbnb.com/rooms/18392102
    - Features: Sunken living room, private chlorine-free saltwater pool, quiet rice paddy surroundings.
27. Uluwatu Hideout Bungalow: "Suliac Castle Uluwatu"
    - Rate: ~$65/night | Location: Pecatu
    - Link: https://www.booking.com/hotel/id/suliac-castle.html
    - Features: Bohemian design, private salt pool, open-air stone bathroom with tropical plants.
28. Sidemen Jungle Bubble: "Magic Hills Bali - Green View"
    - Rate: ~$99/night | Location: Sidemen Mountains
    - Link: https://www.airbnb.com/rooms/48192039
    - Features: Luxurious bamboo bubble overlooking waterfalls and deep mountain valleys.
29. Munduk Mountain Treehouse: "Ekommunity Eco Lodge"
    - Rate: ~$50/night | Location: Munduk Valley
    - Link: https://www.booking.com/hotel/id/ekommunity.html
    - Features: Secluded high-canopy wooden treehouses, natural river plunge pool, organic vegan cafe on-site.
30. Seminyak Hidden Oasis: "Villa Seminyak Estate & Spa"
    - Rate: ~$80/night | Location: Seminyak Center
    - Link: https://www.booking.com/hotel/id/seminyak-estate-spa.html
    - Features: Lagoon-style villas with direct swim-up private pool access from your bedroom door.

[D] BALI VIP PRIVATE DRIVERS LIST (Contact WhatsApp numbers)
-----------------------------------------------------------
1. Wayan Sudarta: +62 812-3456-7890 (Ubud & Temple tours expert).
2. Ketut Suarta: +62 813-9876-5432 (Uluwatu & beach club routing).
3. Made Artawa: +62 819-1122-3344 (Mount Batur sunrise jeep expert).`,
    contentAr: `دليل وعناوين أكثر من 30 فيلا خاصة مخفية بمسابح لامتناهية في بالي بأقل من 100$
========================================================================

[أ] فلل غابات أوبود والوديان النهرية العميقة (10 فلل رائعة تحت 100$)
------------------------------------------------------------------
1. كوخ الخيزران السري المطل على النهر: "Hideout Bali - Lightroom"
   - السعر الحالي: حوالي 95$ لليلة | الموقع: شرق أوبود (منطقة سيلات الخضراء)
   - رابط الحجز المباشر: https://www.airbnb.com/rooms/15729112
   - المزايا: نهر غابة جاري، حوض استحمام طبيعي ساخن، خصوصية كاملة وعزلة وسط الطبيعة.
2. فيلا الشباك المعلقة المعلقة فوق حقول الأرز: "Camaya Bali Butterfly"
   - السعر الحالي: حوالي 99$ لليلة | الموقع: شرق أوبود (سيلات)
   - رابط الحجز المباشر: https://www.airbnb.com/rooms/31195662
   - المزايا: شباك عملاقة معلقة في الهواء فوق حقول الأرز الخضراء لالتقاط صور خيالية، مسبح خاص.
3. مسبح الجرف المعلق وسط الضباب: "Munduk Heaven Luxury Villas"
   - السعر الحالي: حوالي 85$ لليلة | الموقع: غابات موندوك الجبلية الباردة
   - رابط الحجز المباشر: https://www.booking.com/hotel/id/munduk-heaven-luxury-villas.html
   - المزايا: يقدمون فطوراً عائماً مميزاً على صينية خشبية في مسبحك الخاص المطل على الوديان الاستوائية.
4. محمصة ومياه الينابيع الطبيعية العذبة: "Bambu Indah - Pagoda Villa"
   - السعر الحالي: حوالي 90$ لليلة | الموقع: سايان، أوبود
   - رابط الحجز المباشر: https://www.booking.com/hotel/id/bambu-indah.html
   - المزايا: أرضية زجاجية بالكامل تتناول فوقها الطعام والأسماك تسبح أسفلك في المجرى الطبيعي الجاري.
5. فيلا مسبح وادي كامبوهان الملكي: "Pita Maha Resort Traditional Villa"
   - السعر الحالي: حوالي 95$ لليلة | الموقع: ممر كامبوهان الشهير، أوبود
   - رابط الحجز المباشر: https://www.booking.com/hotel/id/pita-maha-island-resort.html
   - المزايا: فيلا حجرية ملكية بتصميم بالي الأصيل ومسبح خاص معلق يطل على وادٍ عميق مكسو بالخضار.
6. كوخ عش الطير الخيزراني المرتفع: "Firefly Eco Lodge BirdNest"
   - السعر الحالي: حوالي 45$ لليلة | الموقع: وسط حقول أوبود الهادئة
   - رابط الحجز المباشر: https://www.airbnb.com/rooms/10543632
   - المزايا: تصعد سلماً خيزرانياً بارتفاع 5 أمتار للنوم في عش مغزول يدوياً يطل على حقول مضيئة باليراعات ليلاً.
7. واحة مسبح Tegallalang الهادئة: "Alam Dania Cottage"
   - السعر الحالي: حوالي 65$ لليلة | الموقع: أوبود الشمالية
   - رابط الحجز المباشر: https://www.booking.com/hotel/id/alam-dania-cottages.html
   - المزايا: مسبح لامتناهي فائق الجمال ممتد أمام أشجار جوز الهند والوديان الخضراء، وخدمات مساج مميزة.
8. بيت الزجاج البوهيمي المعاصر: "The Glass House Bali"
   - السعر الحالي: حوالي 75$ لليلة | الموقع: غابات بايانغان أوبود
   - رابط الحجز المباشر: https://www.booking.com/hotel/id/glass-house-ubud.html
   - المزايا: جدران زجاجية بالكامل من الأرض إلى السقف، مسبح حديقة خاص بالكامل مزود بأسرة هوائية مائية عائمة.
9. مسبح حواف حقول الأرز المفتوح: "Puri Sebali Resort - Suite Villa"
   - السعر الحالي: حوالي 92$ لليلة | الموقع: سيبالي، أوبود
   - رابط الحجز المباشر: https://www.booking.com/hotel/id/puri-sebali-resort.html
   - المزايا: تلامس الفيلا حقول الأرز الخضراء مباشرة، وتضم حوض استحمام صخري خارجي فاخر.
10. خيام السافاري الفاخرة بين الأشجار: "Sandat Glamping Tents"
    - السعر الحالي: حوالي 98$ لليلة | الموقع: بيجينغ، أوبود
    - رابط الحجز المباشر: https://www.booking.com/hotel/id/sandat-glamping-tents.html
    - المزايا: خيام سفاري ملكية فاخرة ومقاومة للحرارة مع مسبح خاص منغمس بالكامل في غابات بالي العذراء.

[ب] فلل جروف أولواتو المطلة على المحيط الأزرق (10 فلل تحت 100$)
--------------------------------------------------------------
11. كوخ جرف بالانغان الدائري المذهل: "La Joya Biu Biu Resort"
    - السعر الحالي: حوالي 85$ لليلة | الموقع: شاطئ بالانغان، أولواتو
    - رابط الحجز المباشر: https://www.booking.com/hotel/id/la-joya-biu-biu.html
    - المزايا: أكواخ حجرية دائرية مع إمكانية استخدام جاكوزي حافة الجرف المطل مباشرة على أمواج المحيط الزرقاء.
12. واحة البساطة البيضاء البوهيمية: "Sal Secret Spot - Pool Villa"
    - السعر الحالي: حوالي 90$ لليلة | الموقع: شاطئ بينغين، أولواتو
    - رابط الحجز المباشر: https://www.booking.com/hotel/id/sal-secret-spot.html
    - المزايا: تصميم أبيض بسيط مستوحى من جزر اليونان وبوهيميا بالي، وحوض استحمام حجري خارجي ومسبح خاص.
13. فيلا حافة غروب بينغين الرائعة: "Mahi Mahi Villas - Bingin"
    - السعر الحالي: حوالي 95$ لليلة | الموقع: شاطئ بينغين، أولواتو
    - رابط الحجز المباشر: https://www.booking.com/hotel/id/mahi-mahi-villas.html
    - المزايا: إطلالة كاملة للغروب من مسبحك الخاص الصغير المعلق على الجرف، وعلى بعد خطوات من رمال الشاطئ الرائعة.
14. جناح العرش الزجاجي الشاهق: "Gravity Boutique Hotel - Loft Suite"
    - السعر الحالي: حوالي 88$ لليلة | الموقع: تلال Pecatu، أولواتو
    - رابط الحجز المباشر: https://www.booking.com/hotel/id/gravity-eco-boutique-hotel.html
    - المزايا: تصميم إسمنتي أبيض عصري، وإطلالة 360 درجة على المحيط من سريرك المرتفع، وأرجوحة معلقة فوق مياه المسبح.
15. كوخ Suluban لراكبي الأمواج: "Kura Kura Surf Camp Uluwatu"
    - السعر الحالي: حوالي 55$ لليلة | الموقع: جرف سولوبان، أولواتو
    - رابط الحجز المباشر: https://www.airbnb.com/rooms/28833910
    - المزايا: إطلالات ساحرة على مدخل كهف سولوبان المائي، ومسبح لامتناهي مشترك رائع.
16. أكواخ بوهيمية دائرية ملكية: "Mick's Place Bingin"
    - السعر الحالي: حوالي 98$ لليلة | الموقع: جرف بينغين، أولواتو
    - رابط الحجز المباشر: https://www.booking.com/hotel/id/mick-s-place.html
    - المزايا: غرف دائرية مسقوفة بالقش الأفريقي على حافة الجرف الشاهق تمنحك إحساساً كأنك في جزر المالديف.
17. مجمع الفلل الاستوائية المعزولة: "The Uluwatu Collective - Private Villa"
    - السعر الحالي: حوالي 75$ لليلة | الموقع: بادانغ بادانغ، أولواتو
    - رابط الحجز المباشر: https://www.airbnb.com/rooms/42110293
    - المزايا: مسبح حديقة خاص بالكامل، شاور خارجي لغسل معدات السباحة، قريب جداً من الشواطئ السرية سيراً.
18. أجنحة الفخامة الحديثة الصخرية: "Ulu Cliffhouse Studio Suites"
    - السعر الحالي: حوالي 99$ لليلة | الموقع: أولواتو Pecatu
    - رابط الحجز المباشر: https://www.booking.com/hotel/id/ulu-cliffhouse.html
    - المزايا: تحفة معمارية بالخرسانة الصلبة، نظام صوتي عالي النقاء، دخول مجاني لنادي الجرف الشاطئي الفاخر.
19. تراس الأفق والغروب البانورامي: "Dreamland Unique Hotel"
    - السعر الحالي: حوالي 60$ لليلة | الموقع: جرف دريم لاند، أولواتو
    - رابط الحجز المباشر: https://www.booking.com/hotel/id/dreamland-view.html
    - المزايا: راقب حركة راكبي الأمواج وغروب شمس بالي المهيب مباشرة من سرير غرفتك ذي الواجهة الزجاجية.
20. أكواخ خشب الساج فوق البحر الثائر: "Bambu Indah Clifftop Resort"
    - السعر الحالي: حوالي 92$ لليلة | الموقع: ساحل أولواتو الغربي
    - رابط الحجز المباشر: https://www.booking.com/hotel/id/bambu-indah-uluwatu.html
    - المزايا: أكواخ صيادين أثرية معاد بناؤها بخشب الساج الفاخر معلقة فوق الجرف لمشاهدة اصطدام الأمواج بالصخور العاتية.

[ج] فلل وادي سيديمين وموندوك وتلال مزارع القهوة الباردة (10 فلل تحت 100$)
------------------------------------------------------------------------
21. قبة الخيزران المطلة على بركان أغونغ: "Veluvana Bali - Owl House"
    - السعر الحالي: حوالي 98$ لليلة | الموقع: وادي سيديمين الساحر (شرق بالي الهادئ)
    - رابط الحجز المباشر: https://www.airbnb.com/rooms/44290311
    - المزايا: قبة مبنية بالكامل بالخيزران الطائر، شباك معلقة، مسبح خاص يواجه جبل بركان أغونغ الخالد.
22. مسبح الأفق اللامتناهي فوق السحاب: "Munduk Moding Plantation Cove"
    - السعر الحالي: حوالي 99$ لليلة | الموقع: تلال موندوك الجبلية الباردة
    - رابط الحجز المباشر: https://www.booking.com/hotel/id/munduk-moding-plantation.html
    - المزايا: حائز على جوائز عالمية لكون مسبحه يمتد ليعبر فوق السحاب مباشرة، محاط بمزارع قهوة عضوية عريقة.
23. كوخ جبل سيديمين المعلق: "Samara Hills Bamboo Villa"
    - السعر الحالي: حوالي 85$ لليلة | الموقع: وادي سيديمين
    - رابط الحجز المباشر: https://www.airbnb.com/rooms/38902192
    - المزايا: إطلالات شروق شمس بركانية خلابة، جاكوزي خشبي ساخن خارجي، شاور مكشوف تحت النجوم.
24. فلل كانجو المصممة بمسبح مستقل: "The Layar Designer Villas"
    - السعر الحالي: حوالي 99$ لليلة | الموقع: سيمينياك / كانجو
    - رابط الحجز المباشر: https://www.booking.com/hotel/id/the-layar.html
    - المزايا: أسقف مائلة رائعة، مسبح سباحة خاص بالكامل، حديقة منسقة وصالون خارجي فخم ومفتوح.
25. جناح الخيمة الفخمة على النهر الجاري: "Wapa di Ume Sidemen - Suite"
    - السعر الحالي: حوالي 95$ لليلة | الموقع: وادي سيديمين الهادئ
    - رابط الحجز المباشر: https://www.booking.com/hotel/id/wapa-di-ume-sidemen.html
    - المزايا: أسرة بأعمدة ملكية مغطاة، حوض استحمام حجري عميق معلق فوق نهر "أوندا" المتدفق والبارد.
26. واحة حقول أرز كانجو المريحة: "Villa Lotus Canggu"
    - السعر الحالي: حوالي 70$ لليلة | الموقع: منطقة بريرينان، كانجو الهادئة
    - رابط الحجز المباشر: https://www.airbnb.com/rooms/18392102
    - المزايا: صالون منخفض (Sunken Living Room) مدمج، مسبح خاص بمياه مالحة خالية من الكلور، وحقول أرز ملاصقة.
27. قلعة أولواتو البوهيمية المخفية: "Suliac Castle Uluwatu"
    - السعر الحالي: حوالي 65$ لليلة | الموقع: Pecatu
    - رابط الحجز المباشر: https://www.booking.com/hotel/id/suliac-castle.html
    - المزايا: تصميم بوهيمي هادئ، مسبح خاص بمياه الينابيع الفلترة، حمام خارجي صخري بنباتات استوائية.
28. فقاعة الجبل السحرية الفاخرة: "Magic Hills Bali - Green View"
    - السعر الحالي: حوالي 99$ لليلة | الموقع: جبال وادي سيديمين
    - رابط الحجز المباشر: https://www.airbnb.com/rooms/48192039
    - المزايا: فقاعة شفافة فاخرة للنوم تحت النجوم مباشرة مع مسبح خاص يطل على الشلالات والوديان الخضراء.
29. بيوت الأشجار الخشبية في أعالي موندوك: "Ekommunity Eco Lodge"
    - السعر الحالي: حوالي 50$ لليلة | الموقع: وادي موندوك الغابوي
    - رابط الحجز المباشر: https://www.booking.com/hotel/id/ekommunity.html
    - المزايا: أكواخ خشبية دافئة معلقة فوق الأشجار العالية، مسبح مياه جبلية باردة، ومطعم نباتي عضوي هادئ بالأسفل.
30. واحة مسبح سيمينياك المتصل بالسرير: "Villa Seminyak Estate & Spa"
    - السعر الحالي: حوالي 80$ لليلة | الموقع: قلب سيمينياك النابض
    - رابط الحجز المباشر: https://www.booking.com/hotel/id/seminyak-estate-spa.html
    - المزايا: فيلا على طراز البحيرة (Lagoon Style) تفتح باب غرفتك مباشرة لتنزل في مسبح مائي دافئ يلتف حول الفلل.

[د] قائمة السائقين الخاصين المعتمدين في بالي (تواصل عبر أرقام واتساب مباشرة)
-------------------------------------------------------------------------
1. السائق "وايان" (Wayan Sudarta): هاتف +62 812-3456-7890 (خبير أوبود والمعابد التاريخية).
2. السائق "كيتوت" (Ketut Suarta): هاتف +62 813-9876-5432 (خبير شواطئ أولواتو وأندية جرف Pecatu).
3. السائق "مادي" (Made Artawa): هاتف +62 819-1122-3344 (خبير جولات جيب جبل باتور والبراكين وقت الشروق).`
  },
  {
    id: "prod-paris-cafes",
    name: "Paris Art, Secret Cafes & Aesthetic Spots 🇫🇷",
    nameAr: "دليل باريس للفن المقاهي السرية وأماكن التصوير الجمالية 🇫🇷",
    description: "Navigate Paris like a local artist. Day-by-day guides to hidden Montmartre cafes, secret views of the Seine, and Louvre time hacks.",
    descriptionAr: "تجول في باريس كفنان محلي. جداول يومية للمقاهي المخفية في مونمارتر، مطلات سرية على نهر السين، وحيل زيارة متحف اللوفر.",
    price: 6.00,
    originalPrice: 14.00,
    type: "pdf_plan",
    icon: "🥐",
    badge: "Romantic Guide",
    badgeAr: "دليل بوهيمي رومانسى",
    features: [
      "Montmartre Hidden Courtyards",
      "Louvre Empty-Hours Hacks",
      "Seine Sunset Viewpoints",
      "Traditional Left-Bank Bakeries",
      "Vintage Bookstore Crawls"
    ],
    featuresAr: [
      "أفنية مونمارتر السرية المخفية",
      "أوقات زيارة اللوفر بلا طوابير",
      "مطلات غروب الشمس الفاتنة على نهر السين",
      "المخابز التقليدية العتيقة في الضفة اليسرى",
      "جولة في مكتبات الكتب القديمة والمقتنيات"
    ],
    details: "Discover Paris beyond tourist traps. A comprehensive guide mapping the most photogenic streets, cozy historical libraries, secret bakeries, and panoramic sunset picnic sites.",
    detailsAr: "اكتشف باريس بعيداً عن صخب السياح. دليل شامل يضم خرائط لأكثر الشوارع جمالاً، مقاهي فنية تاريخية دافئة، ومواقع نزهات الغروب الرومانسية المطلة على برج إيفل.",
    content: `PARIS SECRETS & AESTHETIC SPOTS MANIFESTO
=========================================

[1] COZY COFFEE & BREAD SECRETS
-------------------------------
- Cafe de Flore Alternative: Avoid the 1-hour wait. Go to "Le Recamier" or "Carette" in Place des Vosges for legendary hot chocolate.
- Secret Wisteria Cafe: "Au Vieux Paris d'Arcole" (Located on Ile de la Cite, wrapped in purple flowers in spring).
- Local Bakery Champion: "Du Pain et des Idees" (Order the pistachio-chocolate escargot pastry).

[2] BEATING THE CROWDS AT MONUMENTS
-----------------------------------
- Louvre Secret Entrance: Never use the main glass pyramid. Enter via the underground "Porte des Lions" (temporarily closed sometimes) or the "Carrousel du Louvre" mall entrance.
- Musee d'Orsay Hack: Book the Thursday night ticket (open until 21:45). The museum is completely empty, and the lighting is spectacular.
- Best Free Eiffel View: Skip Trocadero. Walk to "Avenue de Camoens" (A quiet dead-end street with stunning balcony-framed views of the tower).`,
    contentAr: `دليل باريس السري للمقاهي التاريخية الفنية وأماكن التصوير
======================================================

[1] المقاهي والمخابز الباريسية العتيقة والسرية
---------------------------------------------
- بديل كافيه دو فلور المزدحم: تجنب الانتظار لساعة كاملة. اذهب إلى "Le Recamier" أو "Carette" في ساحة فوسج (Place des Vosges) للحصول على أفضل شوكولاتة ساخنة كثيفة في حياتك.
- مقهى الزهور البنفسجية السري: "Au Vieux Paris d'Arcole" (يقع بجوار كاتدرائية نوتردام، مغطى بالزهور الخلابة في الربيع).
- مخبز الأحلام المحلي: "Du Pain et des Idees" (اطلب فطيرة الشوكولاتة والفستق الأسطورية).

[2] حيل التغلب على الطوابير الطويلة والتقاط الصور المثالية
---------------------------------------------------------
- مدخل اللوفر السري: لا تستخدم أبداً طابور الهرم الزجاجي الرئيسي. ادخل من مدخل المركز التجاري السفلي "Carrousel du Louvre" لتخطي الطابور في دقائق معدودة.
- متحف أورساي الهادئ: احجز تذكرة ليلة الخميس (يفتح حتى 9:45 مساءً). ستجد المتحف فارغاً تماماً والأنوار هادئة وجميلة للتمتع باللوحات الانطباعية.
- أفضل إطلالة سرية لبرج إيفل: تجنب ساحة التروكاديرو المزدحمة. اذهب إلى شارع "Avenue de Camoens" (شارع فرعي هادئ ومقوس يمنحك لقطة مثالية مبروزة بالمباني الباريسية الكلاسيكية).`
  },
  {
    id: "prod-nyc-rooftops",
    name: "NYC Secret Rooftops & Skyline Google Maps Guide 🇺🇸",
    nameAr: "خريطة نيويورك السرية للأسطح المطلة والناطحات 🇺🇸",
    description: "Get direct custom pins on Google Maps of 35+ secret viewpoints, rooftop bars with no entry cover charges, and photography alleys.",
    descriptionAr: "احصل على دبابيس مباشرة مخصصة لخرائط جوجل لأكثر من 35 مطل سري، كافيهات أسطح وناطحات سحاب مجانية بدون رسوم دخول.",
    price: 5.00,
    originalPrice: 13.00,
    type: "google_map",
    icon: "🗽",
    badge: "Modern City",
    badgeAr: "مواقع حية ومباشرة",
    features: [
      "35+ Skyline Direct Pins",
      "No-Cover Rooftop Bars",
      "DUMBO Photography Spots",
      "Central Park Picnic Nooks",
      "Free Ferry Transit Alternatives"
    ],
    featuresAr: [
      "أكثر من 35 دبوس موقع مباشر على الخريطة",
      "أماكن أسطح مجانية بدون رسوم دخول",
      "مواقع تصوير حي دامبو وجسر بروكلين",
      "مخابئ وزوايا النزهات في سنترال بارك",
      "بدائل العبارات المائية المجانية لرصد مانهاتن"
    ],
    details: "Explore the Big Apple from high above. This interactive digital map list reveals secret rooftop gardens, cheap skyline photo spots, and beautiful neighborhoods known only to native New Yorkers.",
    detailsAr: "استكشف مدينة نيويورك الساحرة من الأعلى. تمنحك هذه الخريطة التفاعلية وصولاً مباشراً إلى حدائق الأسطح المخفية، مواقع تصوير ناطحات السحاب الرخيصة، وأسرار بروكلين ومانهاتن.",
    content: `NEW YORK CITY 35+ SKYLINE & ROOFTOP PINS
=========================================

[1] FREE VIEWPOINTS & HIGH-UP PARKS (10 Spots)
-----------------------------------------------
1. Elevated Acre: Search "55 Water St, New York" (A secret park hidden on top of an office building next to the East River).
2. Hunter's Point South Park: Spectacular skyline view of midtown Manhattan across the river. Perfect at dusk.
3. Staten Island Ferry: Hop on for 100% free Breathtaking views of the Statue of Liberty and Downtown Manhattan.

[2] EXCLUSIVE ROOFTOPS WITH NO COVER FEES (10 Spots)
-----------------------------------------------------
4. 230 Fifth Rooftop Bar: Incredible open-air views directly facing the Empire State Building.
5. The Skylark: Indoor/outdoor lounge with a direct perpendicular view of Times Square and Midtown skyscrapers.
6. Westlight (Brooklyn): The ultimate panoramic glass bar in Williamsburg showing all of Manhattan's skyline over the water.`,
    contentAr: `خريطة دبابيس ومواقع أكثر من 35 مطل سطح سري في نيويورك
======================================================

[1] حدائق ومطلات مرتفعة مجانية 100% (10 مواقع)
----------------------------------------------
1. الحديقة المعلقة الخفية: ابحث عن "Elevated Acre" (حديقة معشبة سرية فوق مبنى تجاري بجوار نهر الشرق).
2. منتزه هانترز بوينت الجنوبي: أجمل مطل لخط ناطحات مانهاتن وقت الغروب بعيداً عن الازدحام.
3. عبّارة ستاتن آيلاند المجانية: اركبها لمشاهدة تمثال الحرية وناطحات سحاب مانهاتن بشكل رائع ومجاني تماماً.

[2] كافيهات وأسطح ذات إطلالة أسطورية بدون رسوم دخول (10 مواقع)
------------------------------------------------------------
4. مقهى 230 Fifth: إطلالة مفتوحة ومباشرة أمام مبنى إمباير ستيت العظيم.
5. صالة The Skylark: إطلالة خلابة متقاطعة مع مباني تايمز سكوير الصاخبة من الأعلى.
6. ويست لايت (بروكلين): بار زجاجي بانورامي في ويليامزبرغ يعرض مانهاتن كلوحة فنية على الماء.`
  },
  {
    id: "prod-nomad-visa",
    name: "Ultimate Digital Nomad Visa Step-by-Step Roadmap 🌍",
    nameAr: "الدليل الشامل خطوة بخطوة للحصول على تأشيرات العمل الرقمي 🌍",
    description: "The complete fast-track application guide for over 15 digital nomad visa territories. Covers paperwork templates and income optimization.",
    descriptionAr: "الدليل الكامل لتسريع تقديم طلبات تأشيرات العمل عن بعد لأكثر من 15 دولة. يضم قوالب المعاملات وطرق إثبات الدخل المالي.",
    price: 14.00,
    originalPrice: 35.00,
    type: "pdf_plan",
    icon: "💻",
    badge: "Remote Work",
    badgeAr: "موصى به للمستقلين",
    features: [
      "15+ Countries Application Steps",
      "Income Verification Templates",
      "Tax Avoidance Legal Matrix",
      "Co-Working Hotspot Guides",
      "Direct Government Portal Links"
    ],
    featuresAr: [
      "خطوات التقديم لأكثر من 15 دولة",
      "قوالب إثبات ومخاطبة الدخل للمستقلين",
      "إستراتيجيات التخطيط الضريبي القانوني",
      "قوائم بأفضل مدن السكن والعمل عن بعد",
      "روابط حكومية رسمية مباشرة للتقديم"
    ],
    details: "Work from paradise legally. This roadmap outlines the exact financial requirements, paper preparation, translation steps, and housing strategies for nomads looking to reside in Portugal, Spain, Greece, and Bali.",
    detailsAr: "اعمل من أي شاطئ أو مدينة في العالم بشكل قانوني. يوضح هذا الدليل بالتفصيل متطلبات الدخل المالي، الأوراق المطلوبة، خطوات الترجمة، وتأمين السكن في البرتغال وإسبانيا واليونان واليابان وبالي.",
    content: `DIGITAL NOMAD VISA ACCELERATOR BLUEPRINT
========================================

[1] TOP TERRITORIES FINANCIAL OVERVIEWS
---------------------------------------
- PORTUGAL (D8 Digital Nomad Visa): Requires €3,280/month income. Can apply from home country or directly inside Portugal.
- SPAIN (Nomad Visa): Requires ~€2,600/month. Great tax benefits under the Beckman Law (reduced flat tax of 15%).
- GREECE (Nomad Visa): Requires €3,500/month. Fast processing, 2-year duration.

[2] THE INCOME PROOF TEMPLATE FORMULA
-------------------------------------
When demonstrating remote contract work, your client contract must explicitly declare:
1. "The worker is permitted to perform all duties 100% remotely from any geographical location."
2. "The contract is ongoing/long-term."
3. Proof of regular bank transfers matching or exceeding the official country minimum.`,
    contentAr: `مخطط إطلاق وتسريع تأشيرات العمل عن بعد في العالم
=================================================

[1] متطلبات أشهر دول العالم لتأشيرات العمل عن بعد
-------------------------------------------------
- البرتغال (تأشيرة D8): تتطلب دخلاً شهرياً لا يقل عن 3280 يورو. يمكنك التقديم من سفارة بلدك أو أثناء وجودك بالبرتغال.
- إسبانيا (تأشيرة العمل الرقمي): تتطلب حوالي 2600 يورو شهرياً، وتوفر حوافز ضريبية مذهلة (تخفيض الضريبة إلى 15%).
- اليونان (تأشيرة العمل الرقمي): تتطلب 3500 يورو شهرياً، معالجة سريعة للطلب، وإقامة صالحة لعامين قابلة للتمديد.

[2] قالب إثبات العمل والتعاقد عن بعد
-----------------------------------
عند تقديم عقد عملك الحر أو عن بعد، يجب أن يتضمن العقد هذه العبارة قانونياً:
1. "يُسمح للمتعاقد/الموظف بأداء جميع مهامه الوظيفية عن بعد بنسبة 100% من أي موقع جغرافي يختاره في العالم."
2. "هذا التعاقد مستمر وطويل الأمد وغير محدد بمكتب جغرافي معين."
3. تقديم كشوفات بنكية تطابق أو تتجاوز الحد الأدنى المطلوب للبلد لآخر 3-6 أشهر.`
  },
  {
    id: "prod-iceland-ring",
    name: "Iceland Ring Road 10-Day Road Trip Planner 🇮🇸",
    nameAr: "مخطط الطريق الدائري في آيسلندا - 10 أيام من المغامرة 🇮🇸",
    description: "The absolute masterclass self-drive guide around Iceland's famous Ring Road. Secret hot springs, cheap food spots, and aurora tracking.",
    descriptionAr: "الدليل الشامل للقيادة الذاتية والمغامرة حول الطريق الدائري في آيسلندا. ينابيع مياه ساخنة سرية، مناطق تسوق رخيصة، ورصد الشفق القطبي.",
    price: 11.00,
    originalPrice: 25.00,
    type: "pdf_plan",
    icon: "🌋",
    badge: "Bucket List",
    badgeAr: "مغامرة لا تتكرر",
    features: [
      "Day-by-Day Road Itinerary",
      "Secret Wild Hot Spring Pins",
      "Aurora Borealis Tracking Tricks",
      "Campervan Rental Hacks",
      "Iceland Budget Food Secrets"
    ],
    featuresAr: [
      "برنامج تفصيلي للطريق الدائري يوماً بيوم",
      "مواقع ينابيع مياه ساخنة طبيعية مجانية",
      "حيل تتبع وتنبؤ الشفق القطبي (Aurora)",
      "نصائح حجز سيارات الكارافان والمبيت فيها",
      "طرق توفير الطعام والطهي بأسعار رخيصة"
    ],
    details: "Embark on the ultimate Nordic road trip. Avoid exorbitant prices with smart campervan routes, cook-at-home shopping checklists, and discover majestic hidden waterfalls away from tour buses.",
    detailsAr: "انطلق في رحلة العمر عبر الطبيعة الآيسلندية المذهلة. تجنب الأسعار المرتفعة مع حيل استئجار سيارات الكارافان، التسوق الذكي، واستكشاف الشلالات السرية الضخمة بعيداً عن حافلات السياح.",
    content: `ICELAND 10-DAY ROAD TRIP MASTERCLASS
====================================

[1] THE RING ROAD ROUTING ESSENTIALS
------------------------------------
- Distance: ~1,332 km. Optimal duration: 8 to 10 Days.
- Fuel Strategy: Always refuel your tank when passing a gas station in the North/East. Stations can be 100km apart!
- Best Grocery Store: "Kronan" or "Bonus" (The pink pig logo). Avoid "10-11" which is up to 3 times more expensive!

[2] SECRET WILD HOT SPRINGS (No Entrance Fee)
---------------------------------------------
1. Seljavallalaug Outdoor Pool: Built in 1923, tucked in a narrow mountain valley. (41-minute walk from Seljavellir parking).
2. Hrunalaug Hot Spring: Beautiful historic stone thermal pool in the Golden Circle area. (Small honor-system box payment).
3. Reykjadalur Hot River: A natural warm steam river inside a green geothermal valley. (Requires a scenic 3km uphill hike).`,
    contentAr: `دليل ومخطط القيادة والمغامرة في آيسلندا - 10 أيام
===================================================

[1] أساسيات القيادة على الطريق الدائري (Ring Road)
--------------------------------------------------
- المسافة الكلية: حوالي 1332 كم. المدة المثالية: من 8 إلى 10 أيام.
- إستراتيجية الوقود: عبيء خزان الوقود دائماً عند مرورك بمحطة وقود في الشمال أو الشرق. قد تفصل بين المحطات مسافة تزيد عن 100 كم!
- أفضل سوبرماركت للتوفير: "Bonus" (ذو شعار الخنزير الوردي) أو "Kronan". تجنب "10-11" فهو أغلى بثلاثة ألاف مرة!

[2] ينابيع المياه الساخنة البرية والسرية (مفتوحة ومجانية)
-------------------------------------------------------
1. مسبح Seljavallalaug الجبلي: أقدم مسبح حجري تم بناؤه عام 1923، يقع في وادي جبلي ضيق خيالي الجمال.
2. نبع Hrunalaug الساخن: نبع دافئ دافئ محاط بالصخور الأثرية في منطقة الدائرة الذهبية.
3. نهر Reykjadalur الساخن والجاري: وادٍ بركاني مائي يجري فيه نهر دافئ ساخن وسط الطبيعة الجبلية الرائعة (يتطلب مسار مشي 3 كم).`
  },
  {
    id: "prod-safety-handbook",
    name: "Solo Female Travel Safety Blueprint & Checklist 🛡️",
    nameAr: "دليل الأمان المتكامل للمسافرة بمفردها وقائمة التحقق 🛡️",
    description: "Empowering travel guides, pre-trip safety checks, dynamic scam alerts, and high-security hotel booking instructions for solo travelers.",
    descriptionAr: "دليل تمكين متكامل، قوائم أمان وتدابير وقائية، كيفية كشف الفخاخ السياحية، واختيار السكن الفندقي الآمن للمسافرات بمفردهن.",
    price: 4.00,
    originalPrice: 9.00,
    type: "checklist",
    icon: "🛡️",
    badge: "Peace of Mind",
    badgeAr: "مستند الحماية الذاتية",
    features: [
      "Pre-Trip Safety Checklists",
      "Night Transit Best Practices",
      "Scam Detection Matrices",
      "Emergency Contact Templates",
      "Safe Lodging Audit Forms"
    ],
    featuresAr: [
      "قوائم التحقق والتحضير قبل السفر للأمان",
      "تدائير وإستراتيجيات التنقلات الليلية الآمنة",
      "مصفوفة رصد وكشف محاولات الاحتيال والنصب",
      "قالب لتدوين أرقام الطوارئ والاتصال السريع",
      "استمارة فحص واختيار الفنادق عالية الأمان"
    ],
    details: "Travel the world confidently and independently. This blueprint contains real-world protocols for safe navigation, night commutes, dealing with local street scams, and maintaining global mobile connectivity.",
    detailsAr: "سافري حول العالم بكل ثقة واستقلالية. يضم هذا الدليل التدابير والبروتوكولات العملية المعتمدة للأمان الشخصي، اختيار الفنادق والمواصلات الآمنة، والتعامل مع المضايقات والفخاخ السياحية بذكاء.",
    content: `SOLO TRAVEL SAFETY OPERATIONAL PROTOCOLS
========================================

[1] SECURE HOTEL BOOKING CHECKLIST
----------------------------------
- Front Desk Access: Book properties with 24/7 staffed front desks. Never book apartments with dark alley entrances.
- Floor Choice: Request rooms between the 2nd and 5th floors. Ground floor is prone to break-ins; higher floors are harder for fire ladder rescues.
- Double-Lock Rule: Always carry a lightweight portable door-wedge lock or rubber stopper. Place it inside your door at night.

[2] ON-THE-ROAD COMMUNICATION PROTOCOLS
----------------------------------------
- Virtual Presence: Never mention to strangers or taxi drivers that you are traveling alone. Always say: "I am meeting my husband/family at the museum/hotel."
- Real-time Location Sharing: Set up continuous location sharing on Google Maps or Apple Find My with at least two family members back home.
- Backup Phone: Carry an older, cheaper unlocked backup smartphone with an active SIM card hidden in your backpack.`,
    contentAr: `البروتوكولات الوقائية المعتمدة للأمان الشخصي للمسافرات بمفردهن
=============================================================

[1] قائمة اختيار وفحص السكن الآمن والفندق
---------------------------------------
- موظفو الاستقبال: احجزي دائماً في فنادق ذات مكتب استقبال يعمل على مدار الساعة. تجنبي الشقق البعيدة في الأزقة المظلمة.
- الطابق المثالي: اطلبي غرفاً بين الطابق الثاني والخامس. الطابق الأرضي سهل السرقة، والطوابق المرتفعة جداً يصعب وصول سلالم الإنقاذ إليها.
- قفل الباب الإضافي: احملي معك دائماً قفل إسفين الباب المحمول (Rubber Door Wedge). ضعيه تحت الباب من الداخل ليلاً لمنع أي فتح طارئ حتى بالمفتاح الرئيسي.

[2] إستراتيجيات التواصل والتنقل الآمن في الشارع
---------------------------------------------
- التواجد الافتراضي: لا تذكري أبداً للغرباء أو سائقي التاكسي أنك تسافرين بمفردك. قولي دائماً: "سألتقي بزوجي / عائلتي عند المتحف أو الفندق الآن."
- مشاركة الموقع المباشر: فعّلي خاصية مشاركة الموقع في الوقت الفعلي (Live Location) لخرائط جوجل مع شخصين من العائلة في بلدك طوال فترة الرحلة.
- هاتف احتياطي سري: احتفظي بهاتف قديم ورخيص ومشحون في مكان خفي بالحقيبة للضرورة القصوى في حال فقدان الهاتف الأساسي.`
  },
  {
    id: "prod-photo-presets",
    name: "Ultimate Travel Photography & Editing Bundle 📸",
    nameAr: "الباقة الاحترافية الشاملة لتصوير السفر وفلاتر لايت روم 📸",
    description: "Transform your smartphone travel photos. Includes 10 Mobile Lightroom presets (.DNG), golden hour positioning tips, and camera gear guides.",
    descriptionAr: "حوّل صور هاتفك المحمول إلى لقطات احترافية خيالية. تضم 10 فلاتر لايت روم (.DNG)، توقيت الغروب والشروق، ومعدات التصوير الأساسية.",
    price: 9.00,
    originalPrice: 22.00,
    type: "bundle",
    icon: "📸",
    badge: "Creative Hub",
    badgeAr: "مجموعة المصورين المحترفين",
    features: [
      "10 Mobile Lightroom Presets",
      "Golden Hour Position Tricks",
      "Drone Law Safety Templates",
      "Dynamic Camera Gear List",
      "Visual Framing Templates"
    ],
    featuresAr: [
      "10 فلاتر لايت روم للموبايل (ملفات DNG)",
      "حيل تتبع اتجاه أشعة الشمس الذهبية",
      "قوالب التحقق من قوانين الطيران بالدرون",
      "قائمة معدات التصوير الخفيفة للمسافرين",
      "قوالب تقسيم إطارات الكاميرا للتكوين المثالي"
    ],
    details: "The ultimate kit for visual storytellers. Get instant access to professional Lightroom filters that elevate travel skin tones, ocean blues, and warm sunsets, combined with compositional cheat sheets.",
    detailsAr: "الباقة المتكاملة لصناع المحتوى البصري والمسافرين. احصل على فلاتر لايت روم احترافية جاهزة بنقرة واحدة لتحسين ألوان البشرة، زرقة البحر، والغروب الذهبي، مع أدلة تنسيق الزوايا.",
    content: `TRAVEL PHOTOGRAPHY & MOBILE EDITING DIRECTORY
============================================

[1] MOBILE LIGHTROOM PRESET SETUP GUIDE
--------------------------------------
Your purchase unlocks the download configuration for 10 custom DNG preset files:
- Preset 1: "Tropical Blues" (Enhances turquoise sea and palm trees).
- Preset 2: "Cappadocia Warmth" (Brings out warm sandstone and sunset balloons).
- Preset 3: "Nordic Minimalist" (Cool, crisp clean tones for glaciers and cold regions).

How to Install:
1. Download the unlocked .DNG files to your mobile camera roll.
2. Open the free Adobe Lightroom Mobile App.
3. Import the .DNG image, tap the three dots at the top right, and select "Create Preset". Name it, and apply to any of your travel photos!`,
    contentAr: `دليل تصوير السفر وتثبيت فلاتر لايت روم الاحترافية للموبايل
==========================================================

[1] فلاتر لايت روم للموبايل (دليل التحميل والتهيئة)
-------------------------------------------------
تضم هذه الباقة فلاتر مخصصة ومحسنة جداً للهاتف المحمول:
- الفلتر 1: "البحار الاستوائية" (يبرز زرقة مياه شواطئ المالديف وبالي وخضار النخيل).
- الفلتر 2: "دفء كبادوكيا" (يبرز الألوان الرملية والغروب الدافئ والمناطيد الطائرة).
- الفلتر 3: "الغموض الشمالي" (ألوان باردة وحادة مخصصة للثلوج، المرتفعات، والمباني الأثرية).

طريقة التثبيت السريعة:
1. قم بتحميل ملفات الـ .DNG المرفقة في استوديو هاتفك.
2. افتح تطبيق لايت روم للموبايل المجاني (Adobe Lightroom CC).
3. استورد الصورة ذات صيغة الـ DNG، ثم انقر على النقاط الثلاث العلوية واختر "Create Preset". أطلق عليها اسماً، وأصبحت جاهزة للتطبيق على أي من صور سفرك بنقرة واحدة!`
  },
  {
    id: "prod-dubai-budget",
    name: "Dubai Ultra-Luxury on a Budget Insider Secrets 🇦🇪",
    nameAr: "أسرار دبي الفاخرة بميزانية اقتصادية ذكية 🇦🇪",
    description: "Live the 5-star lifestyle in Dubai for cheap. Access list of free fountain views, shared luxury yacht charters, and 5-star hotel beach pass hacks.",
    descriptionAr: "عش أسلوب الحياة الفخم ذو الـ 5 نجوم في دبي بأسعار ذكية. دليل لنوادي الشواطئ الرخيصة، اليخوت الفخمة المشتركة، وأكلات دبي الشعبية الفاخرة.",
    price: 8.00,
    originalPrice: 19.00,
    type: "pdf_plan",
    icon: "🏙️",
    badge: "Elite Secrets",
    badgeAr: "مطلوب ومميز",
    features: [
      "5-Star Hotel Pool Pass Hacks",
      "Shared Yacht Charter Booking Tips",
      "Traditional Old Dubai Food Walk",
      "Free Fountain Views Dining Alleys",
      "Discount App Verification Guide"
    ],
    featuresAr: [
      "حيل دخول مسابح الفنادق 5 نجوم مجاناً أو بخصم مالي",
      "كيفية حجز اليخوت الفاخرة بنظام المشاركة بأسعار زهيدة",
      "مسار تذوق طعام رائع في دبي القديمة والتاريخية",
      "مطاعم بأسعار معقولة تطل مباشرة على نافورة دبي",
      "أفضل تطبيقات كوبونات وخصومات دبي الموثوقة"
    ],
    details: "Experience glitz and glamour without paying full price. This insider guide unveils how to access luxury beaches, dine at high-end spots, and book desert safaris at native wholesale rates.",
    detailsAr: "استمتع ببريق دبي وفخامتها الفائقة دون استنزاف محفظتك. يعرض لك هذا الدليل السري كيفية دخول الشواطئ والمسابح الفاخرة، تناول طعام راقٍ بأسعار محلية، وحجز رحلات السفاري بأسعار الجملة.",
    content: `DUBAI ELITE LUXURY ON A BUDGET BLUEPRINT
========================================

[1] THE 5-STAR HOTEL POOL & BEACH HACKS
---------------------------------------
- Redeemable Pool Passes: Never book expensive nights at luxury resorts just for the pool. Use "Redeemed Passes" via platforms like "Privilee" or hotels offering "Fully Redeemable Pool Passes" where your $30 entrance fee is returned as free food and beverage credit!
- Ladies Day Perks: If traveling with female companions, utilize "Ladies Day" schedules. Almost all 5-star beachfront resorts offer free pool access, sunbeds, and unlimited free drinks to women on specific weekdays.

[2] THE SHARED YACHT CHARTER SECRETS
------------------------------------
- Do not hire a private luxury yacht for $300/hour. Go to Dubai Marina Harbor and book "Shared Yacht Cruises" via Viator or local operator "Xclusive Yachts". You get to sail on the exact same 100ft luxury vessel with a BBQ lunch included for only $30 per person!`,
    contentAr: `دليل توفير التكاليف وعيش حياة الـ 5 نجوم في دبي
==============================================

[1] حيل الاستمتاع بمسابح وشواطئ فنادق دبي الـ 5 نجوم
---------------------------------------------------
- الدخول المسترد للقيمة (Redeemable Passes): لا تدفع مبالغ طائلة للمبيت في المنتجعات الفاخرة فقط لأجل المسبح. تقدم فنادق مثل "Rixos" أو "Jumeirah" تذاكر دخول للمسبح تبلغ قيمتها 150 درهماً، وتكون "مستردة بالكامل" كائتمان مجاني لشراء الطعام والمشروبات على المسبح!
- عروض أيام السيدات (Ladies Days): إذا كنتِ تسافرين بمفردك أو مع رفيقات، استفيدي من أيام السيدات. تقدم أفخم منتجعات شاطئ الجميرا دخولاً مجانياً للمسبح والشاطئ مع مشروبات مجانية مخصصة في أيام محددة من الأسبوع.

[2] أسرار جولات اليخوت الفاخرة والمشاركة الذكية
----------------------------------------------
- لا تقم أبداً باستئجار يخت خاص بمبلغ 1000 درهم في الساعة. اذهب إلى مرسى دبي (Dubai Marina) واحجز جولة يخت مشتركة (Shared Yacht Tour) عبر مشغلين محليين مثل "Xclusive Yachts". ستبحر على نفس اليخت الفاخر بطول 100 قدم مع وجبة شواء فاخرة وشاي ومشروبات باردة مقابل 120 درهماً فقط للشخص الواحد!`
  },
  {
    id: "prod-japan-phrases",
    name: "Japanese Language & Culture Survival Handbook 🇯🇵",
    nameAr: "دليل اللغة اليابانية للنجاة وفهم الثقافة المحمولة 🇯🇵",
    description: "The ultimate cultural cheat-sheet for Japan travelers. Over 50 critical dining and transport phrases, bullet train etiquette, and onsen protocols.",
    descriptionAr: "بطاقة الجيب الشاملة للمسافرين لليابان. تضم أكثر من 50 عبارة لنفس النطق، آداب ركوب قطارات الرصاصة، وقواعد دخول الينابيع الساخنة (Onsen).",
    price: 3.00,
    originalPrice: 8.00,
    type: "checklist",
    icon: "🏮",
    badge: "Essential",
    badgeAr: "مهم وضروري جداً",
    features: [
      "50+ Pocket Dining Phrases",
      "Shinkansen Ticket Manners",
      "Authentic Onsen Rules Guide",
      "Izakaya Table Etiquette",
      "Emergency Medical Phrases"
    ],
    featuresAr: [
      "أكثر من 50 عبارة طعام ومواصلات ونطقها السهل",
      "آداب ومقاعد قطار الشنكانسن فائق السرعة",
      "قواعد دخول الحمامات والينابيع الساخنة اليابانية (الأنونسا)",
      "قوانين وآداب تناول الطعام والدفع في حانات الإيزاكايا",
      "عبارات الطوارئ والصيدليات الطبية الهامة"
    ],
    details: "Avoid embarrassing culture clashes. Learn how to address staff, order custom food, respect bullet train dining zones, and navigate the complex Tokyo subway network with local linguistic hacks.",
    detailsAr: "تجنب المواقف المحرجة عند زيارة كوكب اليابان. تعلم كيفية مخاطبة النادل، حجز مقاعد القطارات فائقة السرعة، وآداب خلع الأحذية وقواعد السلامة في المعبد والشارع.",
    content: `JAPAN TRAVELLER SURVIVAL CHEAT SHEET
====================================

[1] CRITICAL dining PHRASES (Copy and speak)
--------------------------------------------
- "Sumimasen" (Soo-mee-mah-sen) -> "Excuse me" (Crucial for getting server attention).
- "Kore o kudasai" (Koh-reh oh koo-dah-sigh) -> "This one, please" (Point to menu item).
- "O-kaikei o onegashimasu" (Oh-kai-kei oh oh-neh-guy-she-mass) -> "The bill, please."
- "Arigato gozaimasu" (Ah-ree-gah-toh go-zye-mass) -> "Thank you very much."

[2] THE ONSEN (BATHHOUSE) RULES PROTOCOL
----------------------------------------
1. Scrub completely clean with soap at the sitting showers BEFORE entering the hot bath.
2. No swimsuits are allowed in the water. Naked only.
3. Keep your small privacy towel on top of your head; never let it touch the pool water.
4. Cover tattoos if possible with skin-colored waterproof tape (some onsens are strictly tattoo-free).`,
    contentAr: `بطاقة الجيب السريعة لمفردات وآداب السفر في اليابان
==================================================

[1] أهم العبارات والمفردات للتواصل في المطعم والشارع
-------------------------------------------------
- "سوميماسين" (Sumimasen): تعني "عذراً" أو "لو سمحت" (أهم كلمة على الإطلاق لمناداة النادل بتهذيب).
- "كوري أو كوداساي" (Kore o kudasai): تعني "هذا من فضلك" (أشر بإصبعك على الوجبة في القائمة وقلها).
- "أوكايكي أو أونيغاي شيماس" (O-kaikei o onegashimasu): تعني "الفاتورة والحساب من فضلك."
- "أريغاتو غوزايماس" (Arigato gozaimasu): تعني "شكراً جزيلاً لك."

[2] قواعد دخول وحمام الينابيع الحارة والباردة (Onsen)
----------------------------------------------------
1. يجب الاستحمام وغسل الجسم بالكامل بالصابون والماء الدافئ وأنت جالس قبل النزول للينابيع.
2. يُمنع تماماً ارتداء ملابس السباحة داخل الحوض المائي الساخن.
3. ضع المنشفة الصغيرة المبللة فوق رأسك أثناء الاستحمام، ولا تدعها تلمس مياه النبع أبداً.
4. يفضل تغطية الأوشام بلواصق طبية بلون الجلد (بعض حمامات الأونسا تمنع الأوشام تماماً).`
  },
  {
    id: "prod-savings-planner",
    name: "Dream Trip Automated Savings Planner & Excel 💰",
    nameAr: "حاسبة التخطيط المالي وتوفير أموال السفر (إكسل) 💰",
    description: "An interactive budgeting file to map out your dream trip target. Calculates micro-savings goals, flight trackers, and compound savings forecasts.",
    descriptionAr: "ملف إكسل تفاعلي ومؤتمت بالكامل لتحديد هدف ميزانية سفرك وتوزيع الادخار الأسبوعي وتتبع العروض لضمان تحقيق هدفك.",
    price: 5.00,
    originalPrice: 12.00,
    type: "budget",
    icon: "💰",
    badge: "Financial Freedom",
    badgeAr: "مساعد التوفير المالي",
    features: [
      "Auto-Calculating Saving Target Goals",
      "Weekly Micro-Savings Dashboard",
      "Daily Coffee vs. Ticket Price Ratio",
      "Dynamic Milestone Progression Charts",
      "Pre-Trip Budget Estimation Forms"
    ],
    featuresAr: [
      "تحديد هدف الادخار المالي واحتساب التكاليف",
      "سجل توفير أسبوعي وشهري مؤتمت وتفاعلي",
      "حاسبة المقارنة الذكية لتوفير الكماليات (كالكافيهات)",
      "رسوم بيانية تفاعلية تعرض مدى اقترابك من هدفك",
      "نماذج حسابية لتكلفة المعيشة في وجهتك مسبقاً"
    ],
    details: "Reach your travel goals faster. This powerful automated calculator helps you isolate unnecessary spending, allocate daily saving amounts, and predict the exact date you can purchase your dream flights.",
    detailsAr: "حقق حلم سفرك بأسرع وقت وبطريقة مالية صحيحة. يساعدك هذا الملف المؤتمت على كشف مصاريفك غير الضرورية، وتوزيع ادخارك، واحتساب التاريخ المتوقع لحجز تذاكر طيران رحلتك.",
    content: `DREAM TRIP SAVINGS PLANNER MATH SHEET
=====================================

[1] MASTER CALCULATOR EQUATIONS:
- Input Target Trip Cost (Cell C4): [e.g., $2400.00]
- Input Travel Date Deadline (Cell C5): [e.g., 6 Months away]
- Calculated Monthly Saving Required (Cell C6): Formula "=C4 / C5" -> [$400/Month]
- Calculated Daily Saving Needed (Cell C7): Formula "=C6 / 30" -> [$13.33/Day]

[2] SAVINGS CATEGORY SUBTRACTIONS
---------------------------------
Track how giving up small habits adds directly to your trip fund:
- Skip 1 Premium Coffee: Add $6.00 to C4
- Skip 1 Dinner Out: Add $35.00 to C4
- Cancel 1 Unused Subscription: Add $15.00/Month to C4`,
    contentAr: `صياغة ومعادلات حاسبة توفير وتأمين ميزانية السفر
=============================================

[1] معادلات حساب الأهداف المالية الرئيسية:
- تكلفة الرحلة الإجمالية المستهدفة (الخلية C4): [مثال: $2400.00]
- المهلة المتبقية للسفر بالأشهر (الخلية C5): [مثال: 6 أشهر]
- الادخار الشهري المطلوب تلقائياً (الخلية C6): المعادلة "=C4 / C5" -> [توفير 400$ شهرياً]
- الادخار اليومي المطلوب تلقائياً (الخلية C7): المعادلة "=C6 / 30" -> [توفير 13.33$ يومياً]

[2] سجل تحويل الكماليات لتذاكر طيران حقيقية
-----------------------------------------
تتبع أثر الاستغناء عن المصاريف الصغيرة غير الضرورية في تسريع سفرك:
- شرب قهوة منزلية بديلة: وفر 5$ وأضفها لحصالة الرحلة في الخلية C4.
- تناول عشاء منزلي بدلاً من مطعم: وفر 25$ للرحلة.
- إلغاء اشتراك شهري غير مستخدم: وفر 15$ شهرياً تضاف فوراً لحساب السفر.`
  },
  {
    id: "prod-paris-map-new",
    name: "Paris Secret Google Map - Cafes & Viewpoints 🇫🇷",
    nameAr: "خريطة باريس السرية - مقاهي ومطلات 🇫🇷",
    description: "Navigate Paris like a local artist. Get direct custom pins on Google Maps of 40+ hidden cafes, romantic viewpoints, and aesthetic corners.",
    descriptionAr: "تجول في باريس كفنان محلي. احصل على دبابيس مباشرة مخصصة لخرائط جوجل لأكثر من 40 مقهى سري ومطل رومانسي وزوايا تصوير خلابة.",
    price: 5.00,
    originalPrice: 12.00,
    type: "google_map",
    icon: "📍",
    badge: "Trending",
    badgeAr: "رائج الآن",
    features: [
      "40+ Curated Secret Pin Points",
      "Hidden Eiffel Tower Viewpoints",
      "Cozy Left-Bank Coffee Spots",
      "Direct Google Map Instant Access"
    ],
    featuresAr: [
      "أكثر من 40 موقع باريسي سري منسق",
      "زوايا سرية لتصوير إيفل بدون ازدحام",
      "مقاهي دافئة يفضلها الباريسيون الأصليون",
      "تفعيل مباشر للروابط على جوجل مابس"
    ],
    details: "Gain instant lifetime access to our privately curated Google Map featuring 40+ off-the-beaten-path locations in Paris. Includes exact coordinates, photography tips, and cozy neighborhood guides.",
    detailsAr: "احصل على وصول فوري لمدى الحياة لخريطتنا الخاصة على جوجل مابس والتي تضم أكثر من 40 موقعاً سرياً في باريس. تشمل المواقع إحداثيات دقيقة ومقاهي فنية وتفاصيل فريدة.",
    content: "PARIS SECRET MAP GUIDE\n======================\nUse this VIP link to open the map directly on your phone: https://maps.google.com/?q=Paris+Secret+Spots\nIncluded locations:\n1. Rue de l'Abreuvoir - Most photogenic street in Montmartre.\n2. Square Rapp - Incredible framed view of the Eiffel Tower.\n3. Cafe Cassette - Beautiful floral facade decoration and amazing brunch.",
    contentAr: "دليل خريطة باريس السرية\n======================\nافتح الرابط التالي لتنشيط الدبابيس على تطبيق خرائط جوجل لديك فوراً: https://maps.google.com/?q=Paris+Secret+Spots\nالمواقع الحصرية المشمولة:\n1. شارع لابرينوار - أكثر شوارع مونمارتر جمالاً وجاذبية للتصوير.\n2. ساحة راب - إطلالة معمارية تاريخية مذهلة تؤطر برج إيفل في الخلفية.\n3. كافيه كاسيت - واجهة مغطاة بالزهور الباريسية وأفضل كرواسون دافئ."
  },
  {
    id: "prod-bali-map-new",
    name: "Bali Hidden Gems Google Map - Villas & Waterfalls 🇮🇩",
    nameAr: "خريطة بالي - فلل وشلالات مخفية 🇮🇩",
    description: "Unlock secret Bali. Direct pins on Google Maps for 50+ majestic waterfalls, cheap luxury pool villas, and cozy cliff clubs.",
    descriptionAr: "اكتشف بالي الحقيقية. دبابيس مباشرة على خرائط جوجل لأكثر من 50 شلالاً خلاباً، فلل فاخرة ورخيصة، وأندية منحدرات هادئة.",
    price: 5.00,
    originalPrice: 15.00,
    type: "google_map",
    icon: "📍",
    badge: "Must-Have",
    badgeAr: "موصى به بشدة",
    features: [
      "50+ Hidden Bali Coordinates",
      "Secret Waterfalls with zero tourists",
      "Affordable Luxury Pool Villas",
      "Sunset Cliff Clubs & Swings"
    ],
    featuresAr: [
      "أكثر من 50 إحداثية سرية لجزيرة بالي",
      "شلالات بكر خالية من سياح المكاتب",
      "فلل بمسبح خاص بأسعار لا تصدق",
      "أندية جرف ومراجيح غروب ساحرة"
    ],
    details: "Ditch the crowded beaches. Explore Bali's lush interior, secret coastal spots, and budget luxury villas with our direct Google Maps coordinates.",
    detailsAr: "ابتعد عن الشواطئ المزدحمة. استكشف قلب بالي الخصب والقرى الأثرية والفلل الفاخرة بأسعار اقتصادية عبر خريطتنا التفاعلية الشاملة.",
    content: "BALI SECRET MAP BLUEPRINT\n=======================\nVIP Access Link: https://maps.google.com/?q=Bali+Secret+Gems\nFeatured Pins:\n1. Leke Leke Waterfall - Nestled in a lush jungle cave.\n2. Munduk Valley Coffee plantation swings.\n3. Sidemen Eco-Bamboo Luxury Cabin listings under $80.",
    contentAr: "مخطط خريطة بالي السرية\n=======================\nرابط الوصول الفوري والمباشر: https://maps.google.com/?q=Bali+Secret+Gems\nأبرز الدبابيس:\n1. شلال ليكي ليكي - الجوهرة المختبئة في حضن الغابة الخصبة.\n2. مراجيح مزارع القهوة الباردة في وادي موندوك الخلاب.\n3. كبائن بامبو صديقة للبيئة في سيديمين بأقل من 80$ لليلة."
  },
  {
    id: "prod-tokyo-map-new",
    name: "Tokyo Secret Map - Hidden Cafes & Local Eateries 🇯🇵",
    nameAr: "خريطة طوكيو - مطاعم ومقاهي سرية 🇯🇵",
    description: "Savor the best local cuisine. Exact coordinates for 45+ authentic ramen shops, secret themed bars, and cozy tea alleys.",
    descriptionAr: "تذوق طعام كوكب اليابان الحقيقي. دبابيس تفصيلية لأكثر من 45 مطعم رامن محلي، حانات سرية ذات طابع خاص، وأزقة الشاي الدافئة.",
    price: 6.00,
    originalPrice: 14.00,
    type: "google_map",
    icon: "📍",
    badge: "Foodie Choice",
    badgeAr: "عشاق الطعام",
    features: [
      "45+ Hand-Selected Eatery Pins",
      "Vending Machine Secret Gems",
      "Old-School Yakitori Alleys",
      "Minimalist Coffee Roasters"
    ],
    featuresAr: [
      "أكثر من 45 دبوس طعام منتقى بعناية",
      "مطاعم مكائن الدفع الذاتي المخفية",
      "أزقة الياكيتوري وشواء الفحم القديمة",
      "محامص القهوة البسيطة الهادئة"
    ],
    details: "Never experience bad tourist-trap meals in Tokyo. We mapped out our absolute favorite hidden ramen shops, visual cafes, and local alleyways.",
    detailsAr: "تجنب تماماً فخاخ السياح ومطاعمهم المزدحمة في طوكيو. خريطتنا السرية تجمع مطاعم الرامن الفائزة، كافيهات جمالية، وممرات الطعام الشعبية.",
    content: "TOKYO FOODIE GOOGLE MAPS\n========================\nAccess Link: https://maps.google.com/?q=Tokyo+Hidden+Eats\nPins include:\n1. Nakiryu - Legendary Michelin-Starred Ramen with zero hassle.\n2. Golden Gai Secret upper level Vinyl Bar.\n3. Yanaka Ginza - Beautiful historical cat alleyway street food.",
    contentAr: "خريطة دبابيس طعام طوكيو الحصرية\n=================================\nرابط الوصول السريع: https://maps.google.com/?q=Tokyo+Hidden+Eats\nالدبابيس المتاحة:\n1. مطعم ناكيريو - رامن حاصل على نجمة ميشلان بلا زحام قاتل.\n2. حانة الموسيقى الكلاسيكية العتيقة في الطوابق العليا بحي غولدن غاي.\n3. ياناكا غينزا - شارع القطط الأثري المليء بأطواق الطعام الشعبي الشهي."
  },
  {
    id: "prod-dubai-map-new",
    name: "Dubai Budget Google Map - Free Beaches & Public Spots 🇦🇪",
    nameAr: "خريطة دبي - شواطئ ومناطق مجانية 🇦🇪",
    description: "Enjoy luxury for free. Save hundreds of dollars mapping public views, free high-end beach access, and historical photo points.",
    descriptionAr: "استمتع بالفخامة مجاناً في دبي. وفر مئات الدولارات بخرائط للمطلات العامة المجانية، شواطئ مفتوحة راقية، ومواقع تصوير تراثية.",
    price: 5.00,
    originalPrice: 12.00,
    type: "google_map",
    icon: "📍",
    badge: "Big Savings",
    badgeAr: "موفّر للغاية",
    features: [
      "35+ Free Attraction Pins",
      "Secret Public Skyline Viewpoints",
      "Free Beautiful Beach Access",
      "Local Cheap Souk Crawl Spots"
    ],
    featuresAr: [
      "أكثر من 35 موقعاً مجانياً ترفيهياً",
      "مطلات سرية على برج خليفة والأبراج",
      "دخول مجاني لأجمل شواطئ دبي النظيفة",
      "ممرات الأسواق الشعبية الرخيصة والآمنة"
    ],
    details: "Dubai doesn't have to be expensive. Use our custom map to discover completely free views, public boardwalks, pristine free beaches, and budget-friendly food hubs.",
    detailsAr: "دبي ليست للأثرياء فقط. استخدم خريطتنا واكتشف المماشي البحرية والمطلات العامة وشواطئ السباحة المفتوحة ومطاعم الوجبات الشعبية اللذيذة والرخيصة.",
    content: "DUBAI BUDGET SAVINGS MAP\n========================\nAccess Link: https://maps.google.com/?q=Dubai+Free+Spots\nKey Points:\n1. Secret Boardwalk behind Dubai Creek Harbour - Stunning skyline views.\n2. Al Sufouh Black Palace Beach - Pristine, quiet, and completely free.\n3. Al Seef historical quarters and cheap traditional boat crossing.",
    contentAr: "خريطة دبي المجانية والاقتصادية\n================================\nرابط الوصول الحصري: https://maps.google.com/?q=Dubai+Free+Spots\nأهم المواقع:\n1. الممشى السري خلف خور دبي - إطلالة خيالية للمدينة وقت الغروب.\n2. شواطئ القصر الأسود بالصفوح - مياه فيروزية هادئة ومفتوحة مجاناً.\n3. أروقة حي السيف التراثي وركوب قوارب العبرة الخشبية بدرهم واحد."
  },
  {
    id: "prod-hotel-checklist-new",
    name: "Smart Hotel Booking Checklist - Questions to Ask 🏨",
    nameAr: "قائمة حجز الفنادق الذكي - أسئلة حاسمة قبل الدفع 🏨",
    description: "Never get scammed. 35 critical checklist questions and verification templates to run before making hotel deposits or non-refundable bookings.",
    descriptionAr: "لا تقع ضحية الصور الخادعة وفخاخ الحجوزات. 35 سؤالاً حاسماً وقالب تحقق لتطبيقها قبل حجز أي فندق أو دفع غير مسترد.",
    price: 3.00,
    originalPrice: 7.00,
    type: "checklist",
    icon: "📋",
    badge: "Anti-Scam",
    badgeAr: "حماية المسافر",
    features: [
      "35 Crucial Booking Questions",
      "Hidden Resort Fee Verifications",
      "Noise & AC Quality Checklist",
      "Refund Negotiation Script Templates"
    ],
    featuresAr: [
      "35 سؤالاً جوهرياً لتدقيق الحجز",
      "كشف رسوم المنتجعات والضرائب المخفية",
      "قائمة التأكد من جودة التكييف والهدوء",
      "نصوص جاهزة للتفاوض وتغيير الغرف"
    ],
    details: "Avoid noisy rooms, non-functioning ACs, and fake TripAdvisor reviews. This checklist ensures you book high-quality accommodation with maximum security.",
    detailsAr: "ودّع الغرف المطلة على الجدران، التكييف المعطل والريفيوهات الوهمية. هذه القائمة التفاعلية تمنحك الثقة الكاملة لحجز فنادق مريحة وبضمانات حقيقية.",
    content: "SMART HOTEL VERIFICATION MANUAL\n================================\n[ ] Check 1: Ask if the resort fee or tourist tax is included in the prepayment.\n[ ] Check 2: Verify room location - request to stay away from the elevator and ice machines (prevents noise).\n[ ] Check 3: Check early check-in and luggage storage policies in writing.",
    contentAr: "دليل التحقق وحجز الفنادق الذكي\n================================\n[ ] تدقيق 1: هل السعر المعروض يشمل الضرائب المحلية ورسوم الخدمة أم تدفع نقداً عند الوصول؟\n[ ] تدقيق 2: تأكيد موقع الغرفة - اطلب دائماً غرف بعيدة عن المصعد وأجهزة التبريد المركزية لتجنب الضوضاء.\n[ ] تدقيق 3: تحقق من سياسة تسجيل الوصول المبكر وحفظ الأمتعة مجاناً في حال الوصول صباحاً."
  },
  {
    id: "prod-insurance-checklist-new",
    name: "Ultimate Travel Insurance Checklist & Guide 🛡️",
    nameAr: "قائمة التأمين السفر الشامل والمقارنة الذكية 🛡️",
    description: "Protect your health and wallet. Step-by-step verification checklist for international travel insurance coverage, exclusions, and claim scripts.",
    descriptionAr: "احمِ صحتك وأموالك. دليل وقائمة تدقيق خطوة بخطوة للتحقق من تغطية تأمين السفر الدولي، الشروط المستثناة، وطريقة المطالبة بالتعويض.",
    price: 3.00,
    originalPrice: 7.00,
    type: "checklist",
    icon: "📋",
    badge: "Risk Control",
    badgeAr: "إدارة المخاطر",
    features: [
      "Full Policy Exclusivity Checklist",
      "Emergency Evacuation Guidelines",
      "Luggage Loss Claim Templates",
      "Flight Delay Compensation Script"
    ],
    featuresAr: [
      "قائمة فحص شروط وتغطيات بوليصة التأمين",
      "إرشادات الطوارئ الطبية والنقل الجوي",
      "نماذج المطالبة بالتعويض عن فقدان الأمتعة",
      "نصوص مطالبة بتعويض تأخير الرحلات الجوية"
    ],
    details: "Most travel insurance policies have massive loopholes. This checklist walks you through what you actually need to look for so you never get denied a claim.",
    detailsAr: "معظم بوالص التأمين تحتوي على ثغرات تمنع التعويض. هذه القائمة توضح لك البنود المطلوبة وتنقذك من خسائر الآلاف في الحالات الطارئة والطارئة الطبية.",
    content: "TRAVEL INSURANCE COMPLIANCE CHECKLIST\n=====================================\n[ ] Exclusions Check: Ensure active extreme sports are covered if you plan on ATV riding or scuba diving.\n[ ] Medical limit: Minimum $100,000 emergency evacuation coverage.\n[ ] Deductibles: Verify the exact out-of-pocket payment before insurance kicks in.",
    contentAr: "قائمة التحقق من تأمين السفر والتعويضات\n=====================================\n[ ] فحص الاستثناءات: تأكد من تغطية الأنشطة والمغامرات (كالدرجات النارية أو الغوص) إذا كنت تخطط لها.\n[ ] الحد الطبي: يجب ألا تقل تغطية الإخلاء الطبي الطارئ عن 100,000$ دولار.\n[ ] مبالغ التحمل: تأكد من قيمة المبلغ الذي تدفعه من جيبك قبل أن تبدأ الشركة بالتغطية الفعالة لـ الفاتورة."
  },
  {
    id: "prod-business-class-checklist-new",
    name: "Business Class Flying Hacks & Lowest Price Checklist ✈️",
    nameAr: "قائمة المسافر بالطائرة Business Class بأقل سعر ✈️",
    description: "Fly in absolute comfort. Step-by-step guide to booking business class tickets using air miles, upgrades, error fares, and bid strategies.",
    descriptionAr: "سافر في راحة مطلقة وفخامة كاملة. قائمة تدقيق وأسرار لحجز مقاعد درجة رجال الأعمال باستخدام النقاط، الترقيات، وتكتيكات المزايدة السحرية.",
    price: 4.00,
    originalPrice: 10.00,
    type: "checklist",
    icon: "📋",
    badge: "Luxury Hack",
    badgeAr: "حيل السفر الفاخر",
    features: [
      "Error-Fare Detection Methods",
      "Bid-Upgrade Auction Strategy",
      "Points Optimization Cheat Sheet",
      "Best Lounge Access Directory"
    ],
    featuresAr: [
      "طرق رصد تذاكر الأسعار الخاطئة (Error Fares)",
      "إستراتيجيات المزايدة لترقية درجة السفر",
      "دليل تجميع واستبدال أميال الطيران بكفاءة",
      "دليل الدخول المجاني لصالات رجال الأعمال بالمطارات"
    ],
    details: "You don't need to pay $4000 to fly Business Class. Discover our step-by-step blueprint on bidding, miles transfer, and off-peak scheduling hacks.",
    detailsAr: "لا تحتاج لدفع 4000$ لتجربة درجة رجال الأعمال الفاخرة. دليلنا يكشف طرق المزايدة الذكية وترحيل النقاط وأوقات الطيران الهادئة لترقية مقعدك.",
    content: "BUSINESS CLASS HACK SHEET\n=========================\n1. Bid Upgrade Auction: Bid exactly 10% above the minimum bid amount for the highest success probability.\n2. Seat Map Inspection: Use seatguru.com to avoid business seats near the galley or lavatory noise.\n3. Credit card points multi-partner transfer strategy.",
    contentAr: "أسرار السفر الفاخر على درجة الأعمال\n=====================================\n1. المزايدات الإلكترونية: قم بتقديم مزايدة تفوق الحد الأدنى بـ 10% فقط لضمان أعلى فرصة قبول وبأقل كلفة.\n2. فحص مقاعد الطائرة: استخدم موقع SeatGuru لمعرفة المقاعد التي تفتقر للخصوصية أو تقع بجوار المطبخ لضمان الهدوء.\n3. حيل تحويل نقاط البطاقات إلى تحالفات الطيران العالمية لترقيات فورية."
  },
  {
    id: "prod-family-kids-checklist-new",
    name: "Ultimate Family & Kids Travel Packing & Survival Checklist 👨‍👩‍👧‍👦",
    nameAr: "قائمة رحلات العائلة مع الأطفال لرحلة خالية من القلق 👨‍👩‍👧‍👦",
    description: "Stress-free family trips. Complete checklists for kid essentials, flight entertainment, travel medical lists, and on-the-road survival tips.",
    descriptionAr: "رحلات عائلية هادئة ومنظمة. قوائم تفصيلية لحقائب الأطفال، ترفيه الطائرة الطويل، أدوية الأطفال الأساسية، وحيل السيطرة على التعب والملل.",
    price: 4.00,
    originalPrice: 9.00,
    type: "checklist",
    icon: "📋",
    badge: "Family Savior",
    badgeAr: "منقذ العائلات",
    features: [
      "Kid-Specific Packing Blueprint",
      "Long-Flight Survival Checklist",
      "Child-Safe Medicine Kit Needs",
      "Airport Navigation Family Hacks"
    ],
    featuresAr: [
      "قائمة ترتيب حقيبة الأطفال المتكاملة",
      "قائمة مستلزمات طائرة الرحلات الطويلة للأطفال",
      "صيدلية الأطفال وأدوية الطوارئ المصرحة",
      "حيل تخطي طوابير المطارات العائلية مجاناً"
    ],
    details: "Travelling with children can be chaotic. This comprehensive interactive checklist ensures you have everything from travel strollers to entertainment packs fully prepared.",
    detailsAr: "السفر مع الأطفال قد يتحول للفوضى بدون تخطيط مسبق. هذه القائمة التفاعلية تضمن تغطية كل احتياجات الترفيه وعربات السفر والأدوية الضرورية يوماً بيوم.",
    content: "FAMILY TRAVEL SURVIVAL CHECKLIST\n================================\n[ ] Hand Baggage: Pack 3 changes of clothing for toddlers and wet wipes in your carry-on.\n[ ] Entertainment: Pre-download educational offline video content to prevent cabin internet meltdowns.\n[ ] Travel-sized medical thermometer and baby ibuprofen.",
    contentAr: "قائمة السيطرة والنجاة للعائلات مع الأطفال\n===========================================\n[ ] حقيبة الطائرة اليدوية: ملابس بديلة للأطفال الصغار ومناديل مبللة مخصصة وبودرة تعقيم.\n[ ] الترفيه المضمون: تحميل أفلام الأطفال التثقيفية والقصص بلا إنترنت على تابلت الطفل مسبقاً لتفادي البكاء.\n[ ] طقم طبي مصغر: خافض حرارة مخصص للرضع، ميزان حرارة، ولواصق جروح كرتونية."
  },
  {
    id: "prod-morocco-pdf-new",
    name: "Magical Morocco - Marrakech & Chefchaouen 7-Day Plan 🇲🇦",
    nameAr: "المغرب السحري - مراكش وشفشاون 7 أيام 🇲🇦",
    description: "Vibrant alleys and majestic palaces. Day-by-day blueprint detailing local ryads, secret sunset roofs, souk bargaining, and transit tips.",
    descriptionAr: "الأزقة الملونة والقصور الأثرية. مخطط يومي يفصل السكن في الرياض الأندلسية، شرفات الغروب السرية، مهارات المساومة بالأسواق ونصائح الانتقال.",
    price: 8.00,
    originalPrice: 18.00,
    type: "pdf_plan",
    icon: "🗺️",
    badge: "Cultural Gem",
    badgeAr: "دليل ثقافي ساحر",
    features: [
      "Ryad Handpicked Recommendations",
      "Marrakech Medina Walking Map",
      "Chefchaouen Photography Spots",
      "Desert Glamping Secrets Guide"
    ],
    featuresAr: [
      "ترشيحات لدور الرياض التاريخية الراقية",
      "خريطة مشي وتجول في أسواق مراكش العتيقة",
      "أفضل زوايا تصوير شفشاون الزرقاء",
      "دليل التخييم الفاخر في صحراء مرزوكة"
    ],
    details: "Immerse yourself in Moroccan charm. Experience magnificent Medina streets, sensory spice markets, historical Bahia palaces, and the stunning blue walls of Chefchaouen without tourist trap headaches.",
    detailsAr: "انغمس في سحر الضيافة المغربية. جرب شوارع مراكش القديمة المليئة بالتاريخ، أسواق التوابل العطرية، قصر الباهية الساحر، وجدران شفشاون الزرقاء الرائعة.",
    content: "MOROCCO 7-DAY ITINERARY OUTLINE\n===============================\nDay 1-3: Marrakech. Explore Medina, Bahia Palace, Jardin Majorelle, and sunset over Jemaa el-Fnaa.\nDay 4-5: Fes & Chefchaouen. Walk through the blue maze streets and historic tannery viewpoints.\nDay 6-7: Casablanca coastal sights and monumental Hassan II Mosque.",
    contentAr: "برنامج المغرب السحري الشامل 7 أيام\n===================================\nاليوم 1-3: مراكش. استكشاف أسواق المدينة القديمة، قصر الباهية الأثري، حديقة ماجوريل، وغروب ساحة جامع الفنا.\nاليوم 4-5: فاس وشفشاون. تجول داخل المتاهة الزرقاء لمدينة شفشاون الساحرة والتقط صوراً مبهرة.\nاليوم 6-7: الدار البيضاء ومسجد الحسن الثاني التاريخي على شاطئ الأطلسي المهيب."
  },
  {
    id: "prod-georgia-pdf-new",
    name: "Georgia Discovery - Tbilisi & Kazbegi 6-Day Plan 🇬🇪",
    nameAr: "جورجيا الساحرة - تبليسي وكازبيغي 6 أيام 🇬🇪",
    description: "Breath-taking Caucasus views. Hand-curated mountain paths, sulfur bath booking hacks, local bakery targets, and affordable private driver contacts.",
    descriptionAr: "مرتفعات القوقاز الخلابة. مسارات جبلية مذهلة، حيل حجز الحمامات الكبريتية التاريخية، مخابز الخاتشابوري الموصى بها، وأرقام سائقين بأسعار رخيصة.",
    price: 8.00,
    originalPrice: 18.00,
    type: "pdf_plan",
    icon: "🗺️",
    badge: "Mountain Escape",
    badgeAr: "عشاق الطبيعة",
    features: [
      "Kazbegi Ridge-View Mountain Trails",
      "Tbilisi Sulphur Bath Reservation Hacks",
      "Best Khachapuri & Khinkali Eateries",
      "Verified English-Speaking Private Drivers"
    ],
    featuresAr: [
      "مسارات جبال كازبيغي المطلة على القوقاز",
      "طريقة وحجز حمامات كبريت أباناتوبني العتيقة",
      "أفضل مطاعم الفطائر والزلابية الجورجية الأصيلة",
      "قائمة وسجلات سائقين محليين ثقة يتحدثون العربية/الإنجليزية"
    ],
    details: "Discover why Georgia is the ultimate budget European getaway. Enjoy cobblestone old towns, soaring mountain-view monasteries, and delicious culinary traditions with ease.",
    detailsAr: "اكتشف لماذا تُعد جورجيا الوجهة الطبيعية المفضلة حالياً للمسافرين. استمتع بالبلدة القديمة المرصوفة بالحصى، الأديرة الأثرية على قمم الجبال، وألذ الوجبات.",
    content: "GEORGIA 6-DAY PLAN OUTLINE\n==========================\nDay 1-2: Tbilisi Old Town, Cable car to Narikala fortress, Sulfur Baths, Shardeni cafes.\nDay 3-4: Kazbegi Mountain Escape via Military Highway. Visit Gergeti Trinity Church on peak.\nDay 5-6: Sighnaghi Love City and wine-tasting orchards.",
    contentAr: "مخطط رحلة جورجيا الخلابة 6 أيام\n===============================\nاليوم 1-2: استكشاف تبليسي القديمة، ركوب تلفريك قلعة ناريكالا، حمامات الكبريت الساخنة ومقاهي شارديني.\nاليوم 3-4: الانطلاق نحو جبال كازبيغي الثلجية عبر الطريق العسكري التاريخي وزيارة كنيسة غيرغيتي على قمة الجبل.\nاليوم 5-6: زيارة مدينة الحب سيغناغي ومزارع ووديان كاخيتي الخضراء الفاتنة."
  },
  {
    id: "prod-thailand-pdf-new",
    name: "Thailand Tropical Tour - Bangkok, Phuket & Chiang Mai 10-Day Plan 🇹🇭",
    nameAr: "تايلاند الاستوائية - بانكوك وبوكيت وتشيانغ ماي 10 أيام 🇹🇭",
    description: "Ultimate tropical adventure. Day-by-day planner detailing cheap island-hopping routes, elephant sanctuaries, sky bar locations, and food night markets.",
    descriptionAr: "المغامرة الاستوائية المتكاملة. جداول تفصيلية للتنقل بين الجزر الرخيصة، محميات الفيلة الأخلاقية، مطلات أسطح بانكوك الفخمة وأفضل الأسواق الليلية.",
    price: 10.00,
    originalPrice: 24.00,
    type: "pdf_plan",
    icon: "🗺️",
    badge: "Tropical Paradise",
    badgeAr: "الاستوائي الأكثر مبيعاً",
    features: [
      "Island-Hopping Speedboat Shortcuts",
      "Ethical Elephant Sanctuary Directory",
      "Bangkok Rooftop Low-Cost Hacks",
      "Best Street Food Night Market Guides"
    ],
    featuresAr: [
      "دليل تنقل القوارب السريعة بين الجزر بذكاء",
      "سجل محميات الفيلة الأخلاقية الحقيقية (لا تستغل الحيوانات)",
      "أسرار الصعود لروفتوبات بانكوك الشاهقة بأقل كلفة",
      "قائمة أفضل الأسواق الليلية وجولات طعام الشارع اللذيذ"
    ],
    details: "Unleash the ultimate Southeast Asian getaway. Balance the high-energy streets of Bangkok, the lush jungles of Chiang Mai, and the legendary pristine beaches of Phuket perfectly.",
    detailsAr: "استعد لرحلة استوائية خارقة التنوع في تايلاند. وازن بين ناطحات سحاب ومطاعم بانكوك، غابات ومحميات تشيانغ ماي، وشواطئ ورمال بوكيت ومحيطاتها الفيروزية.",
    content: "THAILAND 10-DAY ROADMAP\n=======================\nDay 1-3: Bangkok cultural palaces, Michelin street food, and Chao Phraya boat canal tours.\nDay 4-6: Chiang Mai green hills, ancient golden temples, and local night bazzars.\nDay 7-10: Phuket pristine islands, Phi Phi Speedboat tour, and cliffside dinners.",
    contentAr: "البرنامج الاستوائي لتايلاند 10 أيام\n=====================================\nاليوم 1-3: بانكوك وقصورها البوذية الأثرية، جولات طعام الشارع الأسطوري، ومقاهي نهر تشاو فرايا.\nاليوم 4-6: تشيانغ ماي وتلالها الطبيعية الخضراء، ومحميات إنقاذ ورعاية الفيلة.\nاليوم 7-10: بوكيت والرحلات البحرية لجزر في في (Phi Phi) الخيالية وتأمل غروب المحيط الهادئ."
  },
  {
    id: "prod-europe-train-pdf-new",
    name: "Europe by Train - 5 Countries in 14 Days Rail Guide 🇪🇺",
    nameAr: "أوروبا بالقطار - 5 دول في 14 يوماً الدليل الشامل 🇪🇺",
    description: "Multi-country epic route. Complete itinerary for Paris, Brussels, Amsterdam, Cologne, and Zurich. Includes Eurail seat reservation hacks and hotel spots near hubs.",
    descriptionAr: "الرحلة الأوروبية الملحمية المتكاملة بالقطارات السريعة. جداول لزيارة باريس، بروكسل، أمستردام، كولونيا، وزيورخ. مع أسرار حجز تذاكر Eurail وفنادق بجانب المحطات.",
    price: 14.00,
    originalPrice: 35.00,
    type: "pdf_plan",
    icon: "🗺️",
    badge: "Interrail Expert",
    badgeAr: "مغامرات القطارات",
    features: [
      "5-Country High Speed Rail Itinerary",
      "Eurail/Interrail Seat Reservation Secrets",
      "Station-Adjacent Safe Budget Hotels",
      "Multi-Language Survival Phrase Cards"
    ],
    featuresAr: [
      "مسار قطار فائق السرعة يربط 5 دول أوروبية",
      "حيل توفير مئات اليوروهات في حجوزات مقاعد قطار يوريل",
      "ترشيح فنادق آمنة ورخيصة ملاصقة للمحطات لتفادي التكاسي",
      "بطاقات طوارئ لغوية مبسطة لخمس لغات للتحدث مع الموظفين"
    ],
    details: "Experience the magic of borderless Europe. Sip coffee in Paris for breakfast, eat Belgian waffles in Brussels for lunch, and enjoy the canals of Amsterdam by dinner.",
    detailsAr: "استمتع بسحر أوروبا بلا حدود وبأرقى وأروع وسيلة مواصلات وهي القطارات السريعة. تناول الكرواسون في باريس، والوافل في بروكسل، والتقط صور قنوات أمستردام المائية.",
    content: "EUROPE RAILWAY ITINERARY BLUEPRINT\n==================================\nCountries covered: France, Belgium, Netherlands, Germany, Switzerland.\nStations utilized: Gare du Nord, Brussel-Zuid, Amsterdam Centraal, Köln Hbf, Zürich HB.\nIncludes daily train timing optimization to maximize daylight hours.",
    contentAr: "دليل أوروبا بالقطارات يوماً بيوم\n===============================\nالدول المشمولة: فرنسا، بلجيكا، هولندا، ألمانيا، سويسرا.\nمحطات العبور الأساسية: غار دو نور (باريس)، بروكسل الجنوب، أمستردام المركزية، كولونيا الرئيسية، زيورخ المركزية.\nيشمل مواعيد الرحلات الموصى بها لاستغلال فترات النهار الطويلة."
  },
  {
    id: "prod-srilanka-pdf-new",
    name: "Forgotten Sri Lanka - Tropical Beaches & Tea Hills 8-Day Plan 🇱🇰",
    nameAr: "سريلانكا المنسية - شواطئ ومزارع الشاي 8 أيام 🇱🇰",
    description: "Untouched tropical beauty. Complete day-by-day schedules for Ella Train route, tea estate luxury stays, wild safari camps, and coastal surf spots.",
    descriptionAr: "جمال الطبيعة الاستوائية البكر. جداول يومية تفصيلية لمسار قطار 'إيلا' الأزرق الخيالي، السكن في مزارع الشاي، سفاري الفيلة البرية وشواطئ السباحة.",
    price: 9.00,
    originalPrice: 19.00,
    type: "pdf_plan",
    icon: "🗺️",
    badge: "Hidden Pearl",
    badgeAr: "لؤلؤة المحيط الهندي",
    features: [
      "Scenic Ella Blue Train Seat Booking Hacks",
      "Tea Estate Boutique Hotel Directory",
      "Yala National Park Safari Coordinates",
      "Mirissa Blue Whale Cruise Information"
    ],
    featuresAr: [
      "أسرار حجز تذاكر قطار إيلا الأزرق الشهير عالمياً",
      "أفضل فنادق الأكواخ الفاخرة المطلة على مزارع الشاي والضباب",
      "دليل حجز رحلات جيب سفاري الحيوانات البرية في يالا",
      "إرشادات رحلات مشاهدة الحيتان الزرقاء والدلافين في ميريسا"
    ],
    details: "Escape the mainstream Asian resorts. Journey through Sri Lanka's emerald hills, ancient cultural triangles, and soft sandy southern beaches.",
    detailsAr: "ابتعد عن المنتجعات المزدحمة والتقليدية في آسيا. سافر عبر تلال سريلانكا الزمردية المليئة بالضباب الخلاب، ومعابدها البوذية التاريخية، وشواطئ الجنوب الذهبية.",
    content: "SRI LANKA 8-DAY DISCOVERY OUTLINE\n=================================\nDay 1-2: Colombo Arrival & Sigiriya Fortress Hiking (The Eighth Wonder).\nDay 3-5: Kandy & Ella Train Route. Incredible mountains, waterfalls, and tea estate walks.\nDay 6-8: Mirissa & Galle colonial beachside town. Sunset surf sessions and seafood feasts.",
    contentAr: "مخطط رحلة سريلانكا المنسية يوماً بيوم\n=======================================\nاليوم 1-2: الوصول لكولومبو، الصعود لقلعة صخرة سيغيريا الأثرية الشاهقة (ثامن عجائب الدنيا).\nاليوم 3-5: كاندي وقطار إيلا الجبلي الأسطوري عبر الجسور القديمة ومزارع الشاي الأخضر.\nاليوم 6-8: شواطئ ميريسا الدافئة وبلدة غال (Galle) الاستعمارية التاريخية وغروب المحيط الرائع."
  },
  {
    id: "prod-korea-pdf-new",
    name: "South Korea Odyssey - Seoul & Busan 7-Day Plan 🇰🇷",
    nameAr: "كوريا الجنوبية - سيول وبوسان 7 أيام 🇰🇷",
    description: "Neon nights and ancient dynastic palaces. Guide to K-Pop culture zones, high-speed bullet trains, hanok villages, and the best night food markets.",
    descriptionAr: "أضواء النيون الساطعة والقصور الكورية الأثرية. دليل مناطق الـ K-Pop والدراما، قطارات الرصاصة لبوسان الساحلية، قرى الهانوك، وأفضل أسواق الأكل الشعبي.",
    price: 9.00,
    originalPrice: 20.00,
    type: "pdf_plan",
    icon: "🗺️",
    badge: "Tech & Heritage",
    badgeAr: "عشاق كوريا والدراما",
    features: [
      "Seoul Ancient Palace Photo Hacks",
      "KTX Bullet Train Reservation Guide",
      "Hanok Traditional Village Hidden Alleyways",
      "Myeongdong Street Food Culinary Must-Eats"
    ],
    featuresAr: [
      "أفضل زوايا تصوير قصر غيونغ بوك في سيول",
      "دليل حجز تذاكر قطار KTX السريع إلى بوسان بخصومات",
      "أزقة قرية بوكتشون هانوك التراثية الهادئة والمخفية",
      "دليل وجبات وأكشاك طعام الشارع اللذيذ في ميونغ دونغ"
    ],
    details: "Balance tomorrow's technology with yesterday's dynasties. Discover stunning neon skyscraper districts, high-tech subway networks, and serene ancient temples.",
    detailsAr: "اكتشف المزيج الرائع بين تكنولوجيا المستقبل وعراقة الماضي الإمبراطوري. دليل يغطي سيول المضيئة بالنيون وبوسان الساحلية الدافئة وجبل نامسان الشهير.",
    content: "SOUTH KOREA 7-DAY ITINERARY OUTLINE\n====================================\nDay 1-4: Seoul highlights. Gyeongbokgung Palace, Bukchon Hanok, Myeongdong shopping, and Namsan Tower.\nDay 5-6: Busan coastal city. Haeundae beach, Gamcheon Culture Village, and seaside cliff temples.\nDay 7: Return bullet train to Seoul and final shopping.",
    contentAr: "خطة كوريا الجنوبية الذكية 7 أيام\n===================================\nاليوم 1-4: روائع سيول. قصر غيونغ بوك غونغ الأثري بزي الهانبوك، قرية بوكتشون التراثية، وأسواق ميونغ دونغ.\nاليوم 5-6: بوسان الساحلية الجميلة. شاطئ هايونداي الرائع، قرية غامتشون الثقافية الملونة، ومعابد المنحدرات البحرية.\nاليوم 7: العودة بالقطار فائق السرعة لسيول لشراء مستحضرات التجميل الكورية الشهيرة."
  },
  {
    id: "prod-photo-ai-prompts-new",
    name: "50 Premium Prompts for Pro AI Travel Photography 📸",
    nameAr: "50 Prompt لتصوير السفر الاحترافي بالذكاء الاصطناعي 📸",
    description: "Generate breathtaking, realistic travel and landscape images. Professional prompts for Midjourney and DALL-E to simulate cameras, lenses, and lighting.",
    descriptionAr: "ولّد صور سفر ومناظر طبيعية ساحرة شديدة الواقعية بالذكاء الاصطناعي. 50 موجّهاً لمحركات Midjourney و DALL-E لمحاكاة الكاميرات الحقيقية والإضاءة.",
    price: 6.00,
    originalPrice: 15.00,
    type: "prompts",
    icon: "🤖",
    badge: "AI Powered",
    badgeAr: "عصر الذكاء الاصطناعي",
    features: [
      "50 Highly Specific Camera Prompts",
      "Midjourney v6 Photorealistic Parameters",
      "Golden Hour and Cinematic Lighting Codes",
      "Drone and Aerial Simulation Prompting"
    ],
    featuresAr: [
      "50 موجّهاً فائق الدقة لوصف اللقطات السفرية",
      "معاملات محاكاة الواقعية Midjourney v6 لعدسات حقيقية",
      "رموز الإضاءة السينمائية وساعات الغروب والشروق الذهبية",
      "صيغ توليد لقطات الطيران والدرون وزوايا الارتفاع العالي"
    ],
    details: "Unleash world-class visuals for your blogs or presentations. Learn how to prompt the exact camera bodies (Leica, Canon), focal lengths (35mm, 85mm), and atmospheric conditions for stunning results.",
    detailsAr: "احصل على صور سفر لا يمكن تفرقتها عن الواقع لمدوناتك أو تصاميمك. تعلم طريقة كتابة إعدادات الكاميرات الفاخرة، بعد بؤري للعدسات، والطقس الضبابي والخيالي.",
    content: "MASTER AI PHOTOGRAPHY PROMPTS\n==============================\nPrompt 1 (Cinematic Street Portrait): 'A photorealistic travel portrait of a local street vendor in Tokyo, captured on Leica M11, 50mm f/1.4 lens, warm cinematic golden hour light, high detail textures, volumetric smoke, award-winning photography --v 6.0 --style raw'\nPrompt 2 (Drone Landscape): 'Stunning drone aerial perspective of Positano cliff village in Italy, turquoise ocean below, morning soft sunlight, shot on Hasselblad, incredibly detailed, realistic water reflection --v 6.0'",
    contentAr: "أهم موجهات تصوير السفر بالذكاء الاصطناعي\n=========================================\nالموجّه 1 (بورتريه شارع سينمائي): 'A photorealistic travel portrait of a local street vendor in Tokyo, captured on Leica M11, 50mm f/1.4 lens, warm cinematic golden hour light, high detail textures, volumetric smoke, award-winning photography --v 6.0 --style raw'\nالموجّه 2 (منظر جوي بدرون): 'Stunning drone aerial perspective of Positano cliff village in Italy, turquoise ocean below, morning soft sunlight, shot on Hasselblad, incredibly detailed, realistic water reflection --v 6.0'"
  },
  {
    id: "prod-instagram-prompts-new",
    name: "AI Travel Instagrammer Pack - Captions & Content Prompts 📱",
    nameAr: "Prompt Pack لكتابة محتوى سفر لإنستغرام بالذكاء الاصطناعي 📱",
    description: "Write viral travel content. Advanced ChatGPT prompts to craft high-engagement Instagram reels scripts, captions, and travel stories.",
    descriptionAr: "اكتب محتوى سفر فيروسي واسع الانتشار. موجهات متقدمة لـ ChatGPT ونماذج الذكاء الاصطناعي لصياغة نصوص فيديوهات الريلز، الكابتشنات القصيرة والقصص المشوقة.",
    price: 6.00,
    originalPrice: 15.00,
    type: "prompts",
    icon: "🤖",
    badge: "Creator Essential",
    badgeAr: "لصناع المحتوى",
    features: [
      "Viral Hook Script Prompting Formula",
      "Engagement-Driving Question Formats",
      "Minimalist and Aesthetic Caption Styles",
      "Complete Travel Reel Script Blueprints"
    ],
    featuresAr: [
      "صيغة كتابة خطافات (Hooks) الفيديو الفيروسية الجذابة",
      "صياغة أسئلة تفاعلية تضاعف التعليقات والمشاركات",
      "أساليب كابتشنات قصيرة وجميلة تناسب الصور الراقية",
      "مخطط كتابة نصوص ريلز سفر كاملة بأسلوب سرد القصص الممتع"
    ],
    details: "Grow your travel channel overnight. Stop struggling with dry captions. Let our battle-tested prompts generate catchy descriptions and hooks that keep users watching.",
    detailsAr: "ضاعف متابعيك وتفاعلك في إنستغرام وتيك توك. توقف عن الحيرة في كتابة كابشن جاف، ودع موجهاتنا الذكية تصيغ لك عبارات مذهلة وخطافات مرئية تحبس الأنفاس.",
    content: "AI INSTAGRAM CREATOR BLUEPRINT\n==============================\nPrompt (Reel Hook Generator): 'Act as a professional viral travel content creator. Write 5 high-energy hook options for an Instagram Reel about \"How to travel Rome on $50 a day\". Ensure the hooks are under 8 seconds long and cause curiosity.'\nPrompt (Cozy Travel Caption Generator): 'Write 3 aesthetic, quiet, short Instagram captions for a cozy rainy morning in London, with a focus on visual and atmospheric details, and minimal emojis.'",
    contentAr: "موجهات صناعة محتوى السفر لإنستغرام\n=====================================\nموجه (مولد خطافات ريلز فيروسية): 'Act as a professional viral travel content creator. Write 5 high-energy hook options for an Instagram Reel about \"How to travel Rome on $50 a day\". Ensure the hooks are under 8 seconds long and cause curiosity.'\nموجه (مولد كابشن باريسي دافئ): 'Write 3 aesthetic, quiet, short Instagram captions for a cozy rainy morning in London, with a focus on visual and atmospheric details, and minimal emojis.'"
  },
  {
    id: "prod-travel-captions-new",
    name: "200 Ready-to-Use Catchy Travel Captions ✍️",
    nameAr: "مولّد كابشنات سفر جاهزة - 200 جملة لإنستغرام وتيك توك ✍️",
    description: "Never run out of ideas. 200 copy-and-paste aesthetic, humorous, short, and inspirational captions for travelers and photographers.",
    descriptionAr: "لا تفكر كثيراً بعد اليوم. 200 كابشن سفر جاهز للنسخ واللصق فوراً؛ تتنوع بين العبارات الجمالية الهادئة، الساخرة المضحكة، والملهمة المناسبة لكل صورة وفيديو.",
    price: 5.00,
    originalPrice: 12.00,
    type: "prompts",
    icon: "🤖",
    badge: "Instant Copy",
    badgeAr: "نسخ ولصق سريع",
    features: [
      "200 Pre-written Aesthetic Captions",
      "Categorized by Destination and Vibes",
      "Funny & Short Travel Punchlines",
      "High-Engagement Hashtag Strategies"
    ],
    featuresAr: [
      "200 كابشن مكتوب باحترافية جاهز للاستخدام",
      "مصنفة حسب نوع الوجهات والأجواء النفسية",
      "عبارات مضحكة وقصيرة تزيد من حفظ ومشاركة البوست",
      "إستراتيجيات واختيار هاشتاغات السفر لزيادة نسبة الظهور"
    ],
    details: "Copy, paste, and post in under 10 seconds. Keep your travel feed pristine, engaging, and elegant with carefully drafted lines of prose.",
    detailsAr: "انسخ، الصق، وانشر في أقل من 10 ثوانٍ. حافظ على رونق حسابك ونقائه البصري بعبارات معبرة وعميقة ومصممة بعناية لتناسب مشاعر المغامرة والترحال.",
    content: "200 MASTER TRAVEL CAPTIONS CHEET SHEET\n======================================\nAesthetic Category:\n- 'Quiet streets and old stories. ☕️'\n- 'Found my heart in a city I have never lived in.'\n- 'Chasing moments that don't need a filter.'\nHumorous Category:\n- 'My bank account during travel is just a random collection of numbers.'\n- 'Out of office, out of reach, out of money.'",
    contentAr: "كتيب 200 كابشن سفر جاهز للنسخ الفوري\n=========================================\nقسم الكابشنات الجمالية الهادئة:\n- 'شوارع هادئة وحكايا قديمة عتيقة. ☕️'\n- 'وجدت قلبي في أزقة مدينة لم أعش فيها يوماً.'\n- 'نطارد لحظات حقيقية لا تحتاج لأي فلاتر.'\nقسم الكابشنات الكوميدية والساخرة:\n- 'حسابي البنكي أثناء السفر هو مجرد أرقام عشوائية لا نفوذ لها.'\n- 'خارج المكتب، خارج الخدمة، وقريباً خارج ميزانيتي الباقية.'"
  },
  {
    id: "prod-flight-calculator-new",
    name: "Smart Flight Price Comparison Sheet & Savings Calculator 📊",
    nameAr: "حاسبة مقارنة أسعار الطيران والادخار الذكية (Excel) 📊",
    description: "Find the absolute best flights. Interactive Excel file to compare routes, baggage fees, layovers, and calculate cost-per-mile efficiency.",
    descriptionAr: "اعثر على تذكرة الطيران المثالية والأرخص. ملف إكسل تفاعلي ذكي لمقارنة الخطوط، تكاليف الأمتعة، ساعات الترانزيت، واحتساب كفاءة الكلفة للميل.",
    price: 5.00,
    originalPrice: 12.00,
    type: "budget",
    icon: "📊",
    badge: "Smart Booking",
    badgeAr: "موفّر الطيران",
    features: [
      "Route & Layover Cost-Benefit Tracker",
      "Baggage Fee Hidden Price Calculator",
      "Flight Mileage Optimization Sheet",
      "Refund & Cancellation Policy Scorer"
    ],
    featuresAr: [
      "مقارن الفوائد والتكلفة بين الرحلات المباشرة والترانزيت",
      "حاسبة رسوم الأمتعة والوزن الزائد المخفية للشركات الاقتصادية",
      "قالب احتساب أميال الطيران وترحيل النقاط",
      "تقييم مالي لسياسات إلغاء واسترداد قيمة التذاكر"
    ],
    details: "Low-cost airlines hide massive fees in baggage and seat selection. This Excel spreadsheet scores your flights based on total final costs and comfort variables.",
    detailsAr: "شركات الطيران الاقتصادية تخفي رسوماً ضخمة خلف مقاسات الأمتعة ومقاعد الجلوس. ملف إكسل تفاعلي يكشف السعر الحقيقي النهائي لرحلتك لتتخذ القرار الصحيح.",
    content: "FLIGHT COMPARISON FORMULAS SHEET\n===============================\nColumn A: Airline Name | Column B: Base Ticket Cost | Column C: Baggage Cost\nColumn D: Seat selection cost | Column E: Transit Time in Hours\nMaster comfort formula: '=B+C+D + (E * 15)' (Where transit time is valued at $15/hour of lost travel time). Compare the scores to find the optimal flight.",
    contentAr: "صيغ ومعادلات حاسبة أسعار الطيران التفاعلية\n===========================================\nالعمود أ: اسم شركة الطيران | العمود ب: سعر التذكرة الأساسي | العمود ج: رسوم الحقائب المشحونة\nالعمود د: رسوم اختيار مقعد الجلوس | العمود هـ: ساعات انتظار الترانزيت\nمعادلة التكلفة والراحة: '=ب + ج + د + (هـ * 15)' (حيث تحتسب ساعة الترانزيت بخسارة 15$ من وقتك) قارن لتعرف التذكرة الرابحة فعلياً."
  },
  {
    id: "prod-cashback-guide-new",
    name: "Ultimate Travel Credit & Cashback Card Guide 💳",
    nameAr: "دليل بطاقات الكاش باك والائتمان الذكية للمسافرين 💳",
    description: "Earn thousands while traveling. A full breakdown of travel cards with high cashback, airport lounge accesses, zero foreign transaction fees, and free insurance.",
    descriptionAr: "اكسب المال والفوائد أثناء سفرك. تفصيل كامل للبطاقات البنكية والائتمانية التي توفر أعلى كاش باك، دخول مجاني للصالات، وتأمين سفر وخصومات مجانية.",
    price: 7.00,
    originalPrice: 19.00,
    type: "budget",
    icon: "💳",
    badge: "Financial Hack",
    badgeAr: "أسرار البطاقات",
    features: [
      "Cashback Optimization Strategies",
      "Zero-FX-Fee Cards Directory",
      "Instant Lounge Access Hacks",
      "Travel Insurance Inclusion Checklists"
    ],
    featuresAr: [
      "إستراتيجيات تعظيم الاسترداد المالي (Cashback) للسفر",
      "سجل البطاقات البنكية الخالية من رسوم فرق العملة الأجنبية",
      "حيل تفعيل الدخول المجاني لصالات المطارات الفاخرة",
      "قائمة التأكد من تفعيل تأمين السفر المجاني من الفيزا/الماستركارد"
    ],
    details: "Using the wrong credit card abroad can cost you an extra 3-5% on every transaction. This guide breaks down the absolute best cashback and air miles cards with zero foreign transaction fees.",
    detailsAr: "استخدام بطاقة بنكية خاطئة أثناء السفر يضيع عليك 3% إلى 5% كرسوم فرق عملة على كل عملية دفع. هذا الدليل يكشف أفضل بطاقات الكاش باك والعملات للمسافرين.",
    content: "MASTER TRAVEL CREDIT CARD STRATEGY\n==================================\n- Foreign Transaction Fees: Always use cards labeled '0% Foreign Transaction Fee'. Saves $30-$50 for every $1000 spent.\n- Airport Lounges: Utilize DragonPass or LoungeKey apps linked to your Visa Signature card for free buffet and showers.\n- Priority claims processing for premium metal cards.",
    contentAr: "إستراتيجيات البطاقات البنكية والعملات الذكية\n===========================================\n- رسوم فرق العملة: استخدم بطاقات عملات مخصصة توفر سعر صرف ثابت ومقارب لأسواق الفوركس العالمية. توفر 50$ لكل 1000$ دفع.\n- صالات المطارات: قم بتنزيل وتنشيط تطبيقات LoungeKey أو DragonPass المرتبطة ببطاقتك الائتمانية لتناول الطعام مجاناً والاستراحة.\n- حيل الدفع بالعملة المحلية للبلد (وليس بعملة بلدك الأصلية) لتفادي أسعار الصرف الخادعة لأجهزة الدفع."
  },
  {
    id: "prod-financial-independence-new",
    name: "Digital Nomad Financial Independence Blueprint 💰",
    nameAr: "خطة الاستقلال المالي للمسافر والرحّالة الرقمي 💰",
    description: "Live and work anywhere. A complete blueprint to earning remote income, managing low-tax residency, and budgeting to sustain continuous global travel.",
    descriptionAr: "عش واعمل في أي بقعة من العالم. دليل متكامل لتأمين دخل مالي عن بُعد، إدارة الضرائب والإقامة القانونية، وتوزيع الميزانية للترحال الأبدي السعيد.",
    price: 12.00,
    originalPrice: 29.00,
    type: "budget",
    icon: "💰",
    badge: "Nomad Life",
    badgeAr: "حياة الترحال",
    features: [
      "Remote Income Generation Playbook",
      "Low-Tax Nomad Residency Guides",
      "Geographical Arbitrage Calculator",
      "Global Nomad Insurance Options"
    ],
    featuresAr: [
      "كتيب ومسارات تأمين الدخل والعمل عن بعد",
      "دليل الإقامات القانونية المخصصة للمسافر الرقمي بتكلفة رخيصة",
      "حاسبة استغلال الفوارق الجغرافية وفرق الأسعار (Geo Arbitrage)",
      "قائمة خيارات التأمين الصحي والاجتماعي العالمي للرحالة"
    ],
    details: "Escape the 9-to-5 desk. Learn the financial math of geographical arbitrage—how to earn USD/EUR and live comfortably in low-cost paradises like Bali, Thailand, or Lisbon.",
    detailsAr: "تحرر من عبودية المكاتب من 9 لـ 5. تعلم الحسابات المالية لفوارق الأسعار الجغرافية - كيف تكسب بالدولار واليورو وتعيش حياة الملوك في بالي وتايلاند وجورجيا بكلفة ضئيلة.",
    content: "DIGITAL NOMAD FINANCIAL BLUEPRINT\n=================================\n1. Geographical Arbitrage: Earn in strong currency (USD), spend in low cost of living index countries (Thailand, Colombia). Reduces monthly burn rate by 65%.\n2. Remote Client Sourcing: Utilize specialized freelance portals beyond Upwork.\n3. Tax-efficient virtual business setups.",
    contentAr: "مخطط الاستقلال المالي والترحال الرقمي\n=====================================\n1. فوارق المعيشة الجغرافية: اكسب عملة قوية بالعملات الأجنبية، وعش في دول بمؤشرات معيشية منخفضة وخلابة (تايلاند، بالي، جورجيا) مما يوفر 70% من مصاريفك.\n2. جلب عقود العمل عن بعد: استخدام منصات متخصصة بديلة ومخفية عن الجموع للحصول على عقود برواتب دولية.\n3. تأسيس الشركات القانونية الافتراضية والمسجلة في دول توفر إعفاءات ضريبية كاملة للرحالة."
  },
  {
    id: "prod-asia-bundle-new",
    name: "Ultimate Asia Discovery Bundle - 4 Countries Included! 🌏",
    nameAr: "حزمة آسيا الاستوائية الكاملة - اليابان وتايلاند وكوريا وبالي 🌏",
    description: "Save 50% on Asia. Get immediate access to Japan, Thailand, South Korea, and Bali comprehensive guides and secret maps.",
    descriptionAr: "وفر نصف الكلفة لرحلة العمر لآسيا. احصل فوراً على أدلة اليابان، تايلاند، كوريا الجنوبية، وبالي الشاملة والخرائط السرية في حزمة واحدة تفاعلية.",
    price: 25.00,
    originalPrice: 55.00,
    type: "bundle",
    icon: "🌏",
    badge: "Half Price",
    badgeAr: "نصف السعر ووفر 50%",
    features: [
      "Japan, Thailand, Korea, Bali Guides Unlocked",
      "All Secret Google Maps Pinpoints",
      "Local Transportation Survival Sheets",
      "Offline Translation Audio Resources"
    ],
    featuresAr: [
      "تفعيل أدلة اليابان، تايلاند، كوريا الجنوبية، وبالي مجتمعة",
      "جميع الخرائط السرية المنسقة لجوجل مابس لهذه الدول",
      "أدلة التنقل والقطارات السريعة وتوفير التذاكر يوماً بيوم",
      "كتيبات النجاة اللغوية المصورة للتواصل مع الشعوب الآسيوية"
    ],
    details: "The definitive guide package for exploring Asia. Map out neon Tokyo, beaches in Bali, culture in Seoul, and lush temples of Thailand seamlessly.",
    detailsAr: "المكتبة الرقمية الفاخرة للترحال في قارة آسيا. انسق وخطط لرحلات طوكيو المضيئة، بحار بالي، معالم وثقافة سيول، وغابات ومأكولات تايلاند الرائعة.",
    content: "ASIA ULTIMATE BUNDLE ACCESS SHEET\n=================================\nYour bundle purchase unlocks:\n- ID: prod-japan-culinary (Japan Guide)\n- ID: prod-bali-villas (Bali Villas Map & Guide)\n- ID: prod-thailand-pdf-new (Thailand Travel Plan)\n- ID: prod-korea-pdf-new (Korea Odyssey Plan)",
    contentAr: "وثيقة وصول حزمة آسيا الكاملة الفاخرة\n====================================\nشراء هذه الحزمة يفعل لك فورا وبشكل أبدي المنتجات التالية:\n- دليل اليابان لتذوق الطعام والتقاط الصور (prod-japan-culinary)\n- دليل ومعجم شلالات وفلل بالي المخفية (prod-bali-villas)\n- مخطط رحلة تايلاند الاستوائية 10 أيام (prod-thailand-pdf-new)\n- دليل كوريا سيول وبوسان المتكامل 7 أيام (prod-korea-pdf-new)"
  },
  {
    id: "prod-europe-bundle-new",
    name: "Ultimate Europe Grand Traveler Bundle 🇪🇺",
    nameAr: "حزمة أوروبا الكبرى - فرنسا وإيطاليا وسويسرا والقطارات 🇪🇺",
    description: "The complete European masterpiece. Bundle including London, Italy, Switzerland Railpass guide, Paris Secret Cafes, and Europe by Train PDF.",
    descriptionAr: "التحفة الأوروبية الشاملة. حزمة تضم أدلة لندن وإيطاليا، حيل ركوب قطارات سويسرا والسكك الحديدية الأوروبية، ومقاهي باريس السرية.",
    price: 22.00,
    originalPrice: 48.00,
    type: "bundle",
    icon: "🇪🇺",
    badge: "Best Value",
    badgeAr: "قيمة مذهلة",
    features: [
      "Europe by Train 14-Day Guide Unlocked",
      "Paris Secret Cafes & Views Map",
      "Italy & London Premium Guides Unlocked",
      "Switzerland Scenic Pass Optimization Guide"
    ],
    featuresAr: [
      "دليل أوروبا بالقطار 14 يوماً مفعل بالكامل",
      "خريطة باريس السرية للمقاهي والمطلات الجمالية",
      "أدلة لندن التاريخية وإيطاليا الساحرة",
      "دليل توفير بطاقات القطار السويسري السياحي الخيالي"
    ],
    details: "Explore Europe like seasoned nobility. Maximize your Eurail passes, locate quiet scenic properties in Switzerland, and conquer Paris and Rome without queues.",
    detailsAr: "تجول في القارة العجوز بخبرة الرحالة المخضرمين. وفر مئات اليوروهات في سويسرا وإيطاليا وفرنسا، واعثر على أفضل مواقع السكن الآمن والفاخر.",
    content: "EUROPE GRAND TRAVELER ACCESS SHEET\n==================================\nThis bundle unlocks:\n- ID: prod-europe-train-pdf-new (Europe by Train Plan)\n- ID: prod-paris-cafes (Paris Art & Secret Cafes Guide)\n- ID: prod-italy-premium (Italy Classic Plan)\n- ID: prod-swiss-railpass (Swiss Pass Hacks)",
    contentAr: "وثيقة تفعيل وصول حزمة أوروبا الكبرى\n====================================\nبشرائك هذه الحزمة، تحصل فوراً على تفعيل كامل للملفات التالية:\n- دليل أوروبا بالقطارات الشامل 14 يوماً (prod-europe-train-pdf-new)\n- دليل باريس والمقاهي السرية وأفنية مونمارتر (prod-paris-cafes)\n- مخطط إيطاليا والقرى المعلقة لروما وفلورنسا (prod-italy-premium)\n- دليل أسرار توفير بطاقات قطارات سويسرا الخلابة (prod-swiss-railpass)"
  },
  {
    id: "prod-digital-nomad-bundle-new",
    name: "Ultimate Independent Digital Nomad Bundle 🎒",
    nameAr: "حزمة المسافر الرقمي والمستقل - الحياة والعمل حول العالم 🎒",
    description: "Achieve location freedom. Combines Nomad Visa Guide, Financial Independence Blueprint, Automated Savings Planner, and Packing Checklist.",
    descriptionAr: "حقق حرية المكان وتخلص من التواجد المكتبي. حزمة تجمع دليل تأشيرات الرحالة، خطة الاستقلال المالي، إكسل ميزانيات السفر وقائمة الحقيبة الشاملة.",
    price: 18.00,
    originalPrice: 38.00,
    type: "bundle",
    icon: "🎒",
    badge: "Freedom Pack",
    badgeAr: "باقة الحرية",
    features: [
      "Financial Independence Blueprint Unlocked",
      "Global Nomad Visa Country Directory",
      "Dream Trip Automated Saving Excel Sheet",
      "Ultimate Packing Checklist Included"
    ],
    featuresAr: [
      "خطة الاستقلال المالي والعمل عن بعد مفعلة بالكامل",
      "دليل تأشيرات الإقامة للرحالة الرقميين حول العالم",
      "حاسبة إكسل التفاعلية لادخار السفر وتخفيف المصاريف",
      "قائمة الحقيبة والتحقق الشاملة للسفر الدولي"
    ],
    details: "The ultimate survival and startup kit for aspiring remote workers, freelancers, and global backpackers who want to travel the world indefinitely.",
    detailsAr: "الحزمة الذهبية والتعليمية المتكاملة لكل من يطمح للعمل المستقل عن بُعد، السفر الأبدي، ريادة الأعمال الرقمية واستكشاف الشواطئ بأقل المصاريف.",
    content: "DIGITAL NOMAD MASTER ACCESS SHEET\n=================================\nUnlocked products in this package:\n- ID: prod-financial-independence-new (Nomad Financial Blueprint)\n- ID: prod-nomad-visa (Nomad Visa Country Guides)\n- ID: prod-savings-planner (Savings Excel Sheet)\n- ID: prod-checklist (Ultimate Packing Checklist)",
    contentAr: "وثيقة تفعيل حزمة المسافر الرقمي المستقل\n=======================================\nبشرائك الحزمة، يتم تفعيل الملفات الرقمية التالية فوراً وبلا حدود:\n- دليل الاستقلال المالي وتأمين الدخل عن بعد (prod-financial-independence-new)\n- دليل تأشيرات الإقامة للرحالة الرقميين والشروط (prod-nomad-visa)\n- ملف حاسبة إكسل الذكي لتوفير وتأمين ميزانيات الرحلات (prod-savings-planner)\n- قائمة الحقيبة الشاملة والوثائق ليوم الطيران (prod-checklist)"
  },
  {
    id: "prod-ultimate-bundle",
    name: "Tripza Infinite Explorer Bundle - All 43 Guides & Products Included! 🌟",
    nameAr: "الحزمة اللانهائية الكبرى - جميع الأدلة والملفات الرقمية الـ 43+ 🌟",
    description: "Get immediate lifelong access to all 43 of our premium digital travel products. Save over 80% on schedules, secret maps, prompts, and templates.",
    descriptionAr: "احصل فوراً على وصول أبدي لجميع الملفات والخرائط الرقمية الـ 43+ المتوفرة في المتجر بخصم يفوق 80% شاملة التحديثات المجانية.",
    price: 59.99,
    originalPrice: 165.00,
    type: "bundle",
    icon: "🌟",
    badge: "100% Complete",
    badgeAr: "العرض الأقوى ووفر 80%",
    features: [
      "All 43 Digital Guides & Maps Unlocked",
      "All Interactive Maps Included",
      "All Excel Financial Sheets Unlocked",
      "Life-time Free Future Upgrades",
      "Private Tripza VIP Discord Invitation"
    ],
    featuresAr: [
      "فتح وتفعيل جميع الأدلة والخرائط الـ 43+ فوراً",
      "جميع خرائط دبابيس جوجل التفاعلية شاملة",
      "جميع قوالب إكسل وحاسبات الميزانية الذكية",
      "تحديثات مجانية مدى الحياة لجميع المحتويات",
      "دعوة حصرية لمجتمع أعضاء السفر الفاخر VIP"
    ],
    details: "The ultimate companion library for the modern global traveler. Get every country schedule, hidden map pins list, safety and packing blueprints, AI travel prompts, and financial sheets in a single click.",
    detailsAr: "المكتبة الرقمية اللانهائية للمسافر المعاصر. احصل بنقرة واحدة على جميع خطط السفر، خرائط دبابيس الأماكن السرية، أدلة التوفير المالي وإكسل الميزانيات، موجهات الذكاء الاصطناعي، وأدلة الأمان الشخصي.",
    content: `TRIPZA INFINITE EXPLORER ALL-ACCESS DOCUMENT
==============================================

Welcome to the absolute Elite of Tripza. This master purchase immediately unlocks access codes for all other individual files in our store:
- Direct Link to Turkey Smart Plan
- Direct Link to Packing Checklist
- Direct Link to Istanbul Hidden Map Pins
- Direct Link to Smart Budget Calculator
- Direct Link to 100 AI Travel Prompts
- Direct Link to London, Italy, Japan, Swiss, Bali, Paris, and NYC guides.
- Direct access to all newly added maps, checklists, country plans, and bundles!
- VIP Member Access Key: TRP-VIP-9988-X`,
    contentAr: `وثيقة تفعيل وصول الحزمة اللانهائية الكبرى Tripza
==================================================

أهلاً بك في النادي الفاخر والنخبة لعملاء Tripza. هذه الحزمة تمنحك مفتاح تفعيل فوري لجميع منتجات وملفات المتجر الرقمية الـ 43+ بدون استثناء:
- روابط جميع خطط الدول وخرائط دبابيس الأماكن السرية.
- روابط جميع حاسبات إكسل وقوائم السفر وترتيب الحقائب.
- وصول مباشر لجميع المنتجات المضافة حديثاً والتحديثات مدى الحياة!
- رمز العضوية الفاخرة المعتمد: TRP-VIP-9988-X`
  }
];
