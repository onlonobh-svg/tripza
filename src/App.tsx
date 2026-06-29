/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Compass, 
  Home,
  Sparkles, 
  ShoppingBag, 
  BookOpen, 
  FileText, 
  CheckSquare, 
  MapPin, 
  DollarSign, 
  Gift, 
  ArrowRight, 
  Globe, 
  Check, 
  Copy, 
  Crown, 
  Search, 
  Download, 
  Camera, 
  Coins, 
  Loader2, 
  RefreshCw,
  ArrowLeftRight,
  Star, 
  Trash,
  Map, 
  CreditCard, 
  ChevronRight, 
  ExternalLink,
  Percent,
  Calendar,
  Layers,
  Heart,
  Share2,
  Lock,
  Unlock,
  AlertCircle,
  Info,
  Wifi,
  Car,
  Sun,
  Moon,
  ClipboardList,
  Users,
  User,
  HelpCircle
} from "lucide-react";
import { TravelPlan, Product, PredefinedGuide, BudgetCalculatorResult, PhotoSpotResult, RatedPlan } from "./types";
import { TripHighlights } from "./components/TripHighlights";
import { BudgetTracker } from "./components/BudgetTracker";
import { SmartChecklist } from "./components/SmartChecklist";
import { TravelBookingServices, EsimSimulator, CarRentalSimulator } from "./components/TravelBookingServices";

import { PREDEFINED_PRODUCTS } from "./data/digitalProducts";
import { BLOG_ARTICLES } from "./data/blogArticles";

// Predefined offline guides (section 2)
const PREDEFINED_GUIDES: PredefinedGuide[] = [
  {
    id: "g1",
    title: "5 Days in Dubai - The Complete Experience",
    titleAr: "برنامج 5 أيام متكامل في دبي الساحرة",
    destination: "Dubai, UAE",
    destinationAr: "دبي، الإمارات العربية المتحدة",
    days: 5,
    budget: "$600 - Moderate",
    budgetAr: "600$ - ميزانية متوسطة",
    coverImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    shortDescription: "A glorious blend of futuristic skyscrapers, traditional gold souks, and epic desert adventures curated for families and solo travelers.",
    shortDescriptionAr: "مزيج رائع بين ناطحات السحاب المستقبلية، أسواق الذهب التقليدية، ومغامرات الصحراء الملحمية المنظمة للعوائل والأفراد.",
    content: `DUBAI 5-DAY PREMIUM GUIDE
==========================
Day 1 - Modern Downtown & Burj Khalifa
- Morning: Walk around the Dubai Mall, view the massive Dubai Aquarium.
- Afternoon: Go up to the 124th floor of Burj Khalifa. Spectacular skyline views!
- Evening: Watch the mesmerizing Fountain Show, dinner at Souk Al Bahar.

Day 2 - Old Dubai Heritage
- Morning: Visit Al Fahidi Historical Neighborhood. Wander past wind towers.
- Afternoon: Take a traditional Abra boat (only 1 AED) across Dubai Creek to the Gold & Spice Souks.
- Evening: Delicious Arabic local dinner at the Arabian Tea House.

Day 3 - Desert Safari & BBQ
- Morning: Relax at Jumeirah Beach with views of Burj Al Arab.
- Afternoon: 4x4 desert dune bashing safari, sandboarding, and sunset photo stops.
- Evening: Camel riding and traditional buffet dinner with Tanoura dance at a Bedouin desert camp.

Day 4 - Palm Jumeirah & Marina Sunset
- Morning: Ride the Palm Monorail to Atlantis.
- Afternoon: Visit The Pointe or enjoy waterparks.
- Evening: Sunset walk along Dubai Marina Walk. Dinner overlooking premium yachts.

Day 5 - Future Museum & Shopping
- Morning: Visit the famous Museum of the Future (book tickets weeks in advance!).
- Afternoon: Final premium shopping spree at Mall of the Emirates (visit Ski Dubai).
- Evening: Head to the airport for departure.`,
    contentAr: `دليل دبي الشامل لـ 5 أيام
=========================
اليوم 1 - وسط المدينة الحديث وبرج خليفة
- الصباح: جولة في دبي مول ومشاهدة الأكواريوم الضخم.
- بعد الظهر: الصعود إلى الطابق 124 في برج خليفة وإطلالة خيالية.
- المساء: مشاهدة عرض نافورة دبي الراقصة والعشاء في سوق البحار.

اليوم 2 - تراث دبي القديمة والتاريخ
- الصباح: زيارة حي الفهيدي التاريخي واستكشاف البيوت القديمة والمتاحف.
- بعد الظهر: ركوب قارب "العبرة" التقليدي (درهم واحد فقط) عبر خور دبي للوصول لأسواق الذهب والتوابل.
- المساء: عشاء إماراتي محلي لذيذ في "بيت الشاي العربي" (Arabian Tea House).

اليوم 3 - سفاري الصحراء الشيق والعشاء البدوي
- الصباح: الاسترخاء على شاطئ جميرا والتقاط صور تذكارية مع فندق برج العرب الشهير.
- بعد الظهر: مغامرة الدفع الرباعي في كثبان الرمل الذهبية والتزلج على الرمال وتصوير الغروب.
- المساء: ركوب الجمال وعشاء بوفيه شواء تقليدي مع عروض تراثية في مخيم بدوي أصيل.

اليوم 4 - نخلة جميرا وغروب مرسى دبي (المارينا)
- الصباح: ركوب مونوريل النخلة المتوجه نحو فندق أتلانتس الأسطوري.
- بعد الظهر: زيارة حديقة الألعاب المائية أو الاستجمام في النخلة.
- المساء: ممشى مارينا دبي الساحر وتناول العشاء مع إطلالة اليخوت الفخمة.

اليوم 5 - متحف المستقبل والتسوق الأخير
- الصباح: زيارة متحف المستقبل الشهير (احجز تذكرتك قبل السفر بأسابيع!).
- بعد الظهر: تسوق أخير في مول الإمارات (ومشاهدة سكي دبي لطيور البطريق والثلج).
- المساء: التوجه للمطار للمغادرة.`
  },
  {
    id: "g2",
    title: "Europe on a Budget - 7 Days Best Route",
    titleAr: "أرخص جدول سياحي في أوروبا - 7 أيام اقتصادية",
    destination: "Prague, Vienna & Budapest",
    destinationAr: "براغ، فيينا وبودابست",
    days: 7,
    budget: "$450 - Economy",
    budgetAr: "450$ - ميزانية اقتصادية جداً",
    coverImage: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80",
    shortDescription: "An ultra-optimized train itinerary connecting Central Europe's three most affordable and beautiful imperial capital cities.",
    shortDescriptionAr: "مسار قطار مريح واقتصادي يربط بين ثلاث من أجمل العواصم التاريخية في وسط أوروبا بأقل التكاليف الممكنة.",
    content: `CENTRAL EUROPE BUDGET 7-DAY GUIDE
===================================
Day 1-2: Prague, Czech Republic
- Walk across Charles Bridge at 7:30 AM to enjoy it completely crowd-free.
- Explore the massive Prague Castle complex (grounds are free, inside requires ticket).
- Eat 'Trdelník' (warm chimney cake roll) from street vendors for $3.
- Use regional RegioJet train to Vienna ($15 - $20).

Day 3-4: Vienna, Austria
- Walk around Ringstrasse to see gorgeous palaces (Parliament, Opera House).
- Visit Schönbrunn Palace gardens (free entry to park, stunning view from Gloriette).
- Have coffee & original Sachertorte at a traditional coffeehouse.
- Train to Budapest ($12).

Day 5-6: Budapest, Hungary
- Relax at Széchenyi Thermal Baths (outdoor steam pools, booking online saves $5).
- Hike up Gellért Hill for the best views of the Danube River and Parliament.
- Evening: Visit the iconic "Ruin Bars" (Szimpla Kert) for cheap and unique atmosphere.
- Cruise the Danube River on public ferry lines for extremely low cost.

Day 7: Souvenirs & Departure
- Shop at the Central Market Hall (buy Hungarian paprika and chocolates).
- Fly out from Budapest Ferenc Liszt Airport.`,
    contentAr: `أرخص مسار في وسط أوروبا - 7 أيام
==================================
اليوم 1-2: براغ، جمهورية التشيك
- المشي على جسر تشارلز الشهير الساعة 7:30 صباحاً لتجنب الزحام والتقاط صور أسطورية.
- استكشاف مجمع قلعة براغ التاريخي (الدخول للساحات مجاني تماماً).
- تناول حلوى التريدلنيك اللذيذة من بائعي الشارع مقابل 3 دولارات فقط.
- الانتقال إلى فيينا بواسطة قطار RegioJet الاقتصادي (من 15$ إلى 20$).

اليوم 3-4: فيينا، النمسا
- جولة حول شارع الرينغ لمشاهدة القصور الإمبراطورية الفخمة ومبنى البرلمان ودار الأوبرا.
- زيارة حدائق قصر شونبرون الفاتنة (الدخول للحديقة مجاني، وإطلالة مبنى الغلوريت ساحرة).
- تذوق كعكة "زاخر" الأصلية والقهوة النمساوية الشهيرة في مقهى عريق.
- استقلال قطار سريع ومتجه إلى بودابست (12$ فقط).

اليوم 5-6: بودابست، المجر
- الاستجمام في حمامات سيتشيني الحرارية الساخنة (الحجز عبر الإنترنت يوفر المال).
- صعود تلة غيليرت للاستمتاع بأفضل إطلالة لنهر الدانوب ومبنى البرلمان المجري المهيب.
- المساء: زيارة مقاهي الخرائب الشهيرة (Ruin Bars) ذات التصميم الفني الغريب والأسعار الرخيصة جداً.
- رحلة بحرية في نهر الدانوب بالعبّارة العامة رخيصة التكلفة.

اليوم 7: الهدايا التذكارية والمغادرة
- تسوق في السوق المركزي الكبير (شراء الشوكولاتة والتوابل المجرية المميزة).
- الاستعداد والتوجه إلى مطار بودابست للمغادرة.`
  },
  {
    id: "g3",
    title: "6 Days in Malaysia - Kuala Lumpur & Langkawi Magic",
    titleAr: "برنامج 6 أيام في ماليزيا - سحر كوالالمبور ولنكاوي",
    destination: "Malaysia",
    destinationAr: "ماليزيا",
    days: 6,
    budget: "$400 - Affordable",
    budgetAr: "400$ - اقتصادي ومناسب",
    coverImage: "https://images.unsplash.com/photo-1596422846543-75c6fc18a523?auto=format&fit=crop&w=600&q=80",
    shortDescription: "Explore the bustling streets of Kuala Lumpur, historical landmarks, and escape to the tropical paradise beaches of Langkawi Island.",
    shortDescriptionAr: "استكشف ناطحات السحاب الصاخبة في كوالالمبور، المعالم الأثرية التاريخية، ثم استرخ في شواطئ جزيرة لنكاوي الاستوائية الفاتنة.",
    content: `MALAYSIA 6-DAY TROPICAL GUIDE
=============================
Day 1: Arrival & Kuala Lumpur Modern Pulse
- Morning: Touchdown in KLIA. Check into your hotel near Bukit Bintang.
- Afternoon: Visit the world-famous Petronas Twin Towers (KLCC). Perfect view from KLCC Park.
- Evening: Head to Jalan Alor Street Food Market. Try grilled chicken wings and coconut ice cream!

Day 2: Culture & Giant Caves
- Morning: Climb the 272 colorful steps of Batu Caves. Watch out for friendly monkeys!
- Afternoon: Visit the historic Merdeka Square and Sultan Abdul Samad Building.
- Evening: Sunset drinks at Helipad Lounge Bar with stunning 360-degree skyline views.

Day 3: Flight to Langkawi Island
- Morning: Quick 1-hour flight to Langkawi. Rent a budget scooter/car at airport.
- Afternoon: Check in near Pantai Cenang beach. Relax under coconut palm trees.
- Evening: Seafront dining and duty-free shopping (Langkawi is entirely tax-free!).

Day 4: Island Hopping Tour
- Morning: Shared boat tour to Pregnant Maiden Island and wet-rice island (only $10).
- Afternoon: Watch wild eagles feeding in the mangroves. Swim at white-sand secret sandbars.
- Evening: Fresh seafood dinner at Orkid Ria restaurant.

Day 5: Langkawi Sky Bridge & Cable Car
- Morning: Ride the world's steepest Cable Car (SkyCab) up Machinchang mountain.
- Afternoon: Walk on the suspended SkyBridge. Incredible jungle and ocean vistas.
- Evening: Quiet sunset beach walk at Tanjung Rhu Beach.

Day 6: Langkawi to Home
- Morning: Souvenir shopping, pack suitcases.
- Afternoon: Return flight via Kuala Lumpur.`,
    contentAr: `برنامج ماليزيا الاستوائي لـ 6 أيام
==============================
اليوم 1: الوصول ونبض كوالالمبور الحديث
- الصباح: الوصول لمطار كوالالمبور الدولي. تسجيل الدخول بالفندق قرب بوكيت بينتانج (شارع العرب).
- بعد الظهر: زيارة برجي بتروناس التوأم الشهيرين (KLCC) والمشي في الحديقة المجاورة.
- المساء: جولة تذوق طعام الشارع في شارع "جالان آلور" الشهير بتشكيلة الأكلات الاستوائية والآيس كريم.

اليوم 2: الثقافة والكهوف الأسطورية
- الصباح: صعود الـ 272 درجة الملونة لكهوف باتو (Batu Caves) الأثرية ومشاهدة القرود الودودة.
- بعد الظهر: زيارة ساحة ميرديكا التاريخية ومبنى السلطان عبد الصمد الفخم.
- المساء: إطلالة بانورامية ساحرة على غروب شمس كوالالمبور من أحد المقاهي المرتفعة.

اليوم 3: الطيران لجزيرة لنكاوي الساحرة
- الصباح: رحلة طيران داخلية قصيرة (ساعة واحدة) إلى لنكاوي. استئجار سيارة اقتصادية بالمطار.
- بعد الظهر: النزول في فندق بجوار شاطئ شينانغ والاسترخاء تحت أشجار جوز الهند.
- المساء: عشاء رومانسي أمام الشاطئ والتسوق في المتاجر المعفاة من الضرائب.

اليوم 4: رحلة القارب والربط بين الجزر (Island Hopping)
- الصباح: جولة قارب سريعة لزيارة جزيرة العذراء الحامل والبحيرة العذبة الاستثنائية.
- بعد الظهر: الاستمتاع بمشاهدة تغذية الصقور الحرة في الغابات الاستوائية والسباحة في الجزر البكر.
- المساء: وجبة عشاء بحرية طازجة وفخمة في مطعم "أوركيد ريا" الشهير.

اليوم 5: جسر لنكاوي المعلق والتلفريك (Sky Bridge)
- الصباح: ركوب أعلى تلفريك في العالم ذي الإطلالة العمودية الشاهقة لقمة الجبل.
- بعد الظهر: عبور الجسر المعلق المهيب فوق غابات المطر الكثيفة.
- المساء: نزهة هادئة عند غروب الشمس على شاطئ تانجونغ رو المذهل بنقاوة رماله.

اليوم 6: التجهيز والعودة للديار
- الصباح: شراء الهدايا وتجهيز الحقائب والتوجه للمطار للمغادرة.`
  },
  {
    id: "g4",
    title: "10 Days Alpine Dream - Switzerland Explorer",
    titleAr: "مسار خيالي 10 أيام في سويسرا جبال الألب",
    destination: "Switzerland",
    destinationAr: "سويسرا",
    days: 10,
    budget: "$1200 - Premium",
    budgetAr: "1200$ - ميزانية متميزة ورائعة",
    coverImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80",
    shortDescription: "A breathtaking scenic train route connecting Zurich, Lucerne, Interlaken, Lauterbrunnen, and Geneva with spectacular mountain views.",
    shortDescriptionAr: "رحلة لا تُنسى عبر مسارات قطارات سويسرية مذهلة تربط بين زيورخ، لوسيرن، إنترلاكن، وادي الـ 72 شلالاً (لاوتربرونين)، وجنيف.",
    content: `SWITZERLAND 10-DAY ALPINE ROUTE
================================
Day 1: Zurich Arrival & Lake Promenade
- Check in and explore Zurich Old Town (Altstadt). Walk along Lake Zurich.

Day 2: Lucerne & Mt. Pilatus Golden Roundtrip
- Train to Lucerne. Walk the historic Chapel Bridge. Take a boat and cogwheel railway up Mount Pilatus.

Day 3: Train to Interlaken via Brunig Pass
- Ultra-scenic train journey. Check in and stroll around Hohematte park watching paragliders.

Day 4: Lauterbrunnen Valley (72 Waterfalls)
- Visit the fairy-tale valley of Lauterbrunnen. See Staubbach Falls dropping 300 meters from a cliff!

Day 5: Grindelwald First Adventure
- Take the gondola to Grindelwald First. Walk the thrilling Cliff Walk. Try the mountain cart or glider.

Day 6: Top of Europe - Jungfraujoch
- Board the cogwheel train up to Jungfraujoch, Europe's highest railway station (3,454m). Play in permanent snow!

Day 7: Scenic GoldenPass Line to Montreux
- Ride the panoramic GoldenPass express train across dramatic Swiss vineyards. Arrive at Lake Geneva.

Day 8: Chillon Castle & Montreux Riviera
- Visit Chateau de Chillon, a magical medieval castle directly over the lake.

Day 9: Cosmopolitan Geneva
- Quick train to Geneva. View the Jet d'Eau fountain shooting 140 meters high, visit UN headquarters.

Day 10: Departure
- Final Swiss chocolate shopping, depart from Geneva International Airport.`,
    contentAr: `جدول جبال الألب السويسرية لـ 10 أيام
==================================
اليوم 1: الوصول إلى زيورخ ونزهة البحيرة
- تسجيل الدخول بالفندق وجولة في بلدة زيورخ القديمة والمشي على طول ضفاف البحيرة النقية.

اليوم 2: لوسيرن وجبل بيلاتوس الأسطوري
- استقلال القطار للوسيرن، عبور جسر كابيلا الخشبي التاريخي، وصعود قمة جبل بيلاتوس بواسطة أقدم قطار مسنن بالعالم.

اليوم 3: القطار البانورامي المتوجه إلى إنترلاكن
- رحلة قطار ريفية فائقة الجمال عابرة للممرات الجبلية والبحيرات الفيروزية. التنزه في حديقة هوهمات ومشاهدة هواة القفز بالمظلات.

اليوم 4: وادي لاوتربرونين (وادي الـ 72 شلالاً)
- زيارة الوادي السحري المليء بالمناظر الطبيعية الخلابة وشلال شتاوباخ المنحدر من ارتفاع 300 متر.

اليوم 5: مغامرة غريندلفالد فيرست (Grindelwald First)
- الصعود بالتلفريك لقمة فيرست، تجربة الممشى المعلق بجانب الجرف الصخري الشاهق وتجربة الزحليقة الجبلية.

اليوم 6: قمة أوروبا وجبل يونغفراو (Jungfraujoch)
- ركوب القطار الجبلي للوصول لأعلى محطة قطار في أوروبا على ارتفاع 3,454 متراً واللعب بالثلوج الدائمة طوال العام.

اليوم 7: قطار غولدن باس (GoldenPass) السحري إلى مونترو
- الاستمتاع بمسار القطار البانورامي العابر لحقول العنب السويسرية والقرى الريفية الفاتنة المطلة على بحيرة جنيف.

اليوم 8: قلعة شيلون وريفييرا مونترو
- زيارة قلعة شيلون القرطوسية الساحرة القائمة مباشرة وسط بحيرة جنيف والتقاط صور تاريخية.

اليوم 9: جنيف الكوزموبوليتانية العصرية
- قطار سريع إلى جنيف ومتابعة نافورة جنيف الشهيرة المنطلقة لارتفاع 140 متراً وزيارة مقار المنظمات الدولية.

اليوم 10: تذوق الشوكولاتة والمغادرة
- شراء أفخر أنواع الشوكولاتة السويسرية من صانعيها المحليين والتوجه للمطار للعودة للأوطان.`
  },
  {
    id: "g5",
    title: "5 Days Bosnia Explorer - Sarajevo & Mostar",
    titleAr: "برنامج 5 أيام في البوسنة والهرسك - سراييفو وموستار الكلاسيكية",
    destination: "Bosnia & Herzegovina",
    destinationAr: "البوسنة والهرسك",
    days: 5,
    budget: "$350 - Budget Friendly",
    budgetAr: "350$ - اقتصادي ومناسب جداً",
    coverImage: "https://images.unsplash.com/photo-1552650272-b8a34e21bc4b?auto=format&fit=crop&w=600&q=80",
    shortDescription: "Discover beautiful Ottoman-era old towns, pristine river springs, stunning mountain landscapes, and the historic bridge of Mostar.",
    shortDescriptionAr: "اكتشف روعة البلدة القديمة العثمانية، نبع نهر بوسنة الفاتن، شلالات كرافيتسا، والجسر التاريخي الساحر في موستار.",
    content: `BOSNIA 5-DAY DETAILED GUIDE
=============================
Day 1: Arrival in Sarajevo & Old Town Baščaršija
- Morning: Land in Sarajevo. Check in. Walk through Baščaršija bazaar.
- Afternoon: See the famous Sebilj fountain, visit Gazi Husrev-beg Mosque.
- Evening: Try authentic Bosnian Cevapi (grilled minced meat sausages) at Ćevabdžinica Željo.

Day 2: Springs of Bosna River & Tunnel of Hope
- Morning: Ride a traditional horse-drawn carriage down the Velika Aleja to Vrelo Bosne (gorgeous park with river springs).
- Afternoon: Visit Sarajevo War Tunnel Museum (Tunnel of Hope) to understand Bosnia's modern history.
- Evening: Sunset view of the city from the Yellow Bastion (Žuta Tabija).

Day 3: Scenic Drive to Mostar via Konjic & Jablanica
- Morning: Drive or take train to Mostar. Stop in Konjic to see the Old Stone Bridge.
- Afternoon: Stop in Jablanica for lunch (famous for traditional spit-roast lamb).
- Evening: Check into Mostar hotel. Walk across the world-famous Old Bridge (Stari Most) at sunset.

Day 4: Blagaj Tekke, Počitelj & Kravica Waterfalls
- Morning: Visit Blagaj Dervish Tekke built next to a massive pristine river cave spring.
- Afternoon: Hike the medieval stone town of Počitelj, then swim at Kravica Waterfalls (mini Niagara Falls!).
- Evening: Return to Mostar for local Bosnian coffee and riverside dinner.

Day 5: Sarajevo Shopping & Departure
- Morning: Return to Sarajevo. Purchase traditional handmade copper coffee sets in Kazandžiluk street.
- Afternoon: Depart from Sarajevo International Airport.`,
    contentAr: `جدول البوسنة والهرسك الممتع لـ 5 أيام
==================================
اليوم 1: الوصول إلى سراييفو واستكشاف المدينة القديمة (الباشجارشيا)
- الصباح: الهبوط بمطار سراييفو، نقل وتسجيل دخول بالفندق. جولة في سوق الباشجارشيا العثماني.
- بعد الظهر: مشاهدة سبيل الماء التاريخي "سبيل سراييفو" وزيارة جامع غازي خسرو بك الفخم.
- المساء: تذوق الكباب البوسني التقليدي "سيفابي" اللذيذ في مطعم Ćevabdžinica Željo الشهير.

اليوم 2: نبع نهر بوسنة (Vrelo Bosne) ونفق الأمل التاريخي
- الصباح: ركوب الحنطور التقليدي عبر ممشى الأشجار الطويل "فيليكا ألييا" للوصول لحديقة نبع نهر بوسنة البكر وشلالاته الهادئة.
- بعد الظهر: زيارة متحف نفق الأمل العسكري لفهم تاريخ سراييفو المعاصر وصمودها.
- المساء: إطلالة بانورامية رائعة لغروب الشمس من القلعة الصفراء (Žuta Tabija) فوق المدينة.

اليوم 3: الطريق البانورامي إلى موستار مروراً بكونييتش ويابلانيتسا
- الصباح: الانطلاق بالسيارة أو القطار نحو موستار. التوقف في كونييتش لمشاهدة جسرها الحجري القديم.
- بعد الظهر: التوقف في يابلانيتسا لتناول وجبة غداء فاخرة (اللحم المشوي البوسني الشهير على الحطب).
- المساء: الوصول لموستار وتذوق سحر جسر موستار القديم (Stari Most) المدرج في اليونسكو عند الغروب.

اليوم 4: تكية بلاغاي، قرية بوتشيتلي وشلالات كرافيتسا
- الصباح: زيارة تكية بلاغاي الشهيرة المبنية بجوار جرف صخري ضخم ينبع منه نهر بونا بقوة ونقاء.
- بعد الظهر: صعود قرية بوتشيتلي الحجرية من العصور الوسطى، ثم الاستجمام والسباحة في شلالات كرافيتسا (شلالات نياجرا المصغرة).
- المساء: العودة لموستار لتناول القهوة البوسنية والاستمتاع بعشاء بجانب النهر الجاري.

اليوم 5: تسوق سراييفو والمغادرة
- الصباح: العودة لسراييفو، شراء الهدايا التذكارية والنحاسيات المصنوعة يدوياً في شارع النحاسين (Kazandžiluk).
- بعد الظهر: التجهيز للمغادرة والتوجه إلى مطار سراييفو الدولي للعودة.`
  },
  {
    id: "g6",
    title: "7 Days Golden Route Japan - Tokyo & Kyoto Classic",
    titleAr: "برنامج اليابان الكلاسيكي الذهبي - 7 أيام في طوكيو وكيوتو",
    destination: "Japan",
    destinationAr: "اليابان",
    days: 7,
    budget: "$950 - Moderate Premium",
    budgetAr: "950$ - ميزانية متوسطة ممتازة",
    coverImage: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
    shortDescription: "A high-speed Bullet Train trip blending futuristic Tokyo neon districts, ancient temples in Kyoto, and scenic views of Mount Fuji.",
    shortDescriptionAr: "رحلة قطار الرصاصة السريع تجمع بين ناطحات سحاب طوكيو المستقبلية، المعابد التاريخية العتيقة في كيوتو، وإطلالة جبل فجي.",
    content: `JAPAN 7-DAY GOLDEN ROUTE
==========================
Day 1: Welcome to Tokyo Neon & Shibuya
- Afternoon: Arrive at Tokyo Narita/Haneda. Check in at Shibuya.
- Evening: Walk the legendary Shibuya Crossing, visit Hachiko Statue. Dinner at a local conveyor-belt sushi spot.

Day 2: Historical Asakusa & Futuristic Akihabara
- Morning: Explore Senso-ji, Tokyo's oldest temple in Asakusa. Walk down Nakamise shopping street.
- Afternoon: Head to Akihabara (Electric Town) to experience anime, gaming culture, and multi-story electronics shops.
- Evening: Admire city skyline views from the free Tokyo Metropolitan Government Building in Shinjuku.

Day 3: Mount Fuji Day Trip (Hakone)
- Morning: Take the Romancecar train to Hakone.
- Afternoon: Cruise Lake Ashi with views of Mount Fuji, ride the Hakone ropeway cable car.
- Evening: Try a traditional hot spring bath (Onsen) and head back to Tokyo.

Day 4: Bullet Train (Shinkansen) to Kyoto
- Morning: Board the high-speed Shinkansen (Shinkansen Hikari) to Kyoto (2.5 hours).
- Afternoon: Visit Fushimi Inari Shrine. Hike through the spectacular pathway of thousands of vermilion torii gates.
- Evening: Stroll through Gion district. You might spot a real Geisha walking to her evening appointment!

Day 5: Bamboo Forest & Golden Pavilion
- Morning: Arrive early at Arashiyama Bamboo Grove for tranquil, crowd-free photos.
- Afternoon: Visit Kinkaku-ji (The iconic Golden Pavilion reflecting in a mirror pond).
- Evening: Enjoy a traditional multi-course Kaiseki dinner or delicious Kyoto style ramen.

Day 6: Nara Deer Park Day Trip
- Morning: 45-minute train ride to Nara.
- Afternoon: Feed the friendly bowing deer in Nara Park. Visit Todai-ji Temple housing one of Japan's largest bronze Buddhas.
- Evening: Return to Kyoto, shopping for matcha sweets around Kyoto Station.

Day 7: Farewell Japan
- Morning: Take the Haruka express train to Kansai International Airport (Osaka) for departure.`,
    contentAr: `برنامج اليابان الذهبي الشامل لـ 7 أيام
===================================
اليوم 1: مرحبًا بك في طوكيو وأضواء شيبويا
- بعد الظهر: الوصول لمطار ناريتا/هانيدا في طوكيو. النزول في شيبويا.
- المساء: عبور تقاطع شيبويا الأسطوري (الأكثر ازدحاماً بالعالم) ومشاهدة تمثال الوفاء هاتشيكو. عشاء سوزي رائع وممتع.

اليوم 2: أصالة أساكوسا ومستقبل أكيهابارا (مدينة الإلكترونيات)
- الصباح: زيارة معبد "سينسوجي" الأقدم في أساكوسا وتجربة التسوق في شارع ناكاميسي التقليدي.
- بعد الظهر: الانتقال لأكيهابارا (مدينة الأنمي والألعاب والتقنية) ومتاجر الإلكترونيات المكونة من طوابق ضخمة.
- المساء: الاستمتاع بإطلالة طوكيو المجانية من مبنى حكومة طوكيو في شينجوكو الصاخبة.

اليوم 3: رحلة يومية إلى جبل فجي الساحر (هاكوني)
- الصباح: ركوب قطار "رومانس كار" المتوجه لبلدة هاكوني ريفية الطابع والمطلة على الجبل.
- بعد الظهر: جولة بحرية في بحيرة آشي، وصعود تلفريك هاكوني لالتقاط صور خلابة لجبل فجي المغطى بالثلوج.
- المساء: تجربة الينابيع الساخنة الطبيعية "أونيسن" والعودة لطوكيو.

اليوم 4: قطار الرصاصة السريع (Shinkansen) إلى عاصمة التراث كيوتو
- الصباح: ركوب قطار شينكانسن الفائق السرعة لكيوتو (ساعتان ونصف فقط).
- بعد الظهر: زيارة ضريح "فوشيمي إناري" الشهير والمشي بين آلاف البوابات البرتقالية الخشبية المتتالية.
- المساء: جولة تاريخية هادئة في حي "جيون" القديم (قد تشاهد غيشا حقيقية تمر بجانبك!).

اليوم 5: غابة خيزران أراشيياما والسرادق الذهبي (Kinkaku-ji)
- الصباح: الذهاب مبكراً لغابة الخيزران الساحرة في أراشيياما للتصوير والهدوء التام.
- بعد الظهر: زيارة معبد كينكاكوجي الذهبي المذهل المنعكس على بركة المياه المحيطة به.
- المساء: عشاء ياباني فاخر وتذوق رامن كيوتو الفريد.

اليوم 6: رحلة اليوم الواحد لمدينة نارا والتمتع بالغيلان الودودة
- الصباح: استقلال قطار سريع لمدة 45 دقيقة إلى نارا التاريخية.
- بعد الظهر: إطعام غزلان نارا الودودة التي تنحني شكراً في حديقة نارا وزيارة معبد تودايجي الحاضن لأكبر تمثال بوذا برونزي.
- المساء: العودة لكيوتو وشراء الحلويات المصنوعة من الماتشا الأصلية.

اليوم 7: وداع كوكب اليابان
- الصباح: ركوب قطار هاروكا السريع مباشرة لمطار كانساي الدولي بأوساكا للعودة للأوطان.`
  },
  {
    id: "g7",
    title: "5 Days Romantic Maldives Escape - Luxury & Water Villas",
    titleAr: "برنامج 5 أيام شهر عسل رومانسي في جزر المالديف الساحرة",
    destination: "Maldives",
    destinationAr: "جزر المالديف",
    days: 5,
    budget: "$3000 - Ultra Luxury",
    budgetAr: "3000$ - رفاهية وفخامة فائقة",
    coverImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80",
    shortDescription: "Indulge in absolute paradise with private overwater villas, romantic sunset cruises, floating breakfasts, and coral reef snorkeling.",
    shortDescriptionAr: "استمتع بالجنة الاستوائية في فيلا مائية خاصة مع مسبح شخصي، عشاء رومانسي على الشاطئ، رحلة الغروب لرؤية الدلافين، وفطور عائم.",
    content: `MALDIVES 5-DAY LUXURY ESCAPE
==============================
Day 1: Arrival & Seaplane to Paradise
- Morning: Land at Male International Airport. Transfer via a scenic 45-minute Seaplane ride to your premium private resort island.
- Afternoon: Check in to your Overwater Villa with a private pool and direct ocean steps.
- Evening: Sunset beach walk followed by a complimentary welcome candlelit dinner.

Day 2: Floating Breakfast & Coral Reef Snorkeling
- Morning: Enjoy a private luxury floating breakfast in your villa's pool.
- Afternoon: Guided snorkeling tour in the resort's house reef. Swim alongside sea turtles and colorful coral fish.
- Evening: Sunset Dolphin Cruise with traditional Boduberu music and drinks.

Day 3: Private Island Picnic & Spa Indulgence
- Morning: Take a speed boat to a completely private, uninhabited sandbank island for a secluded gourmet lunch.
- Afternoon: Couples massage treatment in an overwater spa pavilion with glass floors.
- Evening: Beachside Teppanyaki dinner prepared by a private chef.

Day 4: Water Sports & Starlight Cinema
- Morning: Try stand-up paddleboarding or jet-skiing in the crystal-clear lagoon.
- Afternoon: Kayak around the island or relax on the white powdery beaches.
- Evening: Under-the-stars cinema experience with beanbags on the beach, watching a classic movie.

Day 5: Seaplane Departure
- Morning: Sunrise yoga on the beach, final swim in the warm turquoise water.
- Afternoon: Seaplane transfer back to Male Airport for departure.`,
    contentAr: `برنامج جزر المالديف الرومانسي لـ 5 أيام
======================================
اليوم 1: الوصول والطائرة المائية إلى الجنة الاستوائية
- الصباح: الهبوط في مطار مالي الدولي. الانتقال بواسطة الطائرة المائية البانورامية (45 دقيقة) إلى منتجعك الخاص الفاخر.
- بعد الظهر: تسجيل الوصول في الفيلا المائية فوق الماء (Overwater Villa) مع مسبح خاص وسلم مباشر للمحيط.
- المساء: عشاء رومانسي على أضواء الشموع وصوت الأمواج أمام الشاطئ الرملي الأبيض.

اليوم 2: الإفطار العائم الساحر والغوص بين السلاحف
- الصباح: تناول وجبة الفطور العائم الفاخر (Floating Breakfast) في مسبح فيلتك الخاص.
- بعد الظهر: جولة غوص موجهة (Snorkeling) في الحي المرجاني الخاص بالمنتجع للسباحة بجوار السلاحف البحرية والأسماك الملونة.
- المساء: رحلة بحرية لمشاهدة الدلافين عند غروب الشمس مع العروض التراثية الحية للجزيرة.

اليوم 3: نزهة الجزيرة الخاصة وجلسة السبا الفاخرة
- الصباح: الانطلاق بقارب سريع إلى جزيرة رملية بكر خالية تماماً من السكان (Sandbank) للاستجمام وتناول غداء فاخر خاص جداً.
- بعد الظهر: جلسة تدليك وعناية صحية لشخصين في مركز السبا المبني فوق الماء بأرضيات زجاجية تكشف الأسماك بالأسفل.
- المساء: تناول وجبة عشاء استعراضية لذيذة من طباخ ياباني خاص بالمنتجع (Teppanyaki).

اليوم 4: الألعاب المائية وسينما الهواء الطلق تحت النجوم
- الصباح: تجربة التجديف بالوقوف (Paddleboarding) أو ركوب الدراجات المائية في مياه البحيرة الهادئة والنقية.
- بعد الظهر: جولة قوارب الكاياك الشفافة حول الجزيرة والتقاط صور تذكارية خيالية.
- المساء: تجربة سينما الشاطئ الفاخرة تحت النجوم مع الفشار والمشروبات الطازجة أمام البحر.

اليوم 5: توديع المالديف بالطائرة المائية
- الصباح: ممارسة رياضة اليوجا عند شروق الشمس والسباحة الأخيرة في المياه الفيروزية الدافئة.
- بعد الظهر: ركوب الطائرة المائية للعودة إلى مطار مالي والاستعداد للعودة للوطن.`
  },
  {
    id: "g8",
    title: "6 Days Paris & French Riviera Scenic Splendor",
    titleAr: "مسار فرنسا الرومانسي - 6 أيام بين أضواء باريس وشواطئ الريفييرا",
    destination: "France",
    destinationAr: "فرنسا",
    days: 6,
    budget: "$1100 - Premium Travel",
    budgetAr: "1100$ - ميزانية متميزة وراقية",
    coverImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
    shortDescription: "A glorious escape connecting romantic Parisian monuments, world-class Louvre art, high-speed TGV to Nice, and golden beach walks in Monaco.",
    shortDescriptionAr: "مسار رومانسي يربط معالم باريس التاريخية واللوفر الفني بقطار الرصاصة السريع TGV وصولاً لشواطئ نيس الفرنسية وإمارة موناكو الفخمة.",
    content: `PARIS & FRENCH RIVIERA 6-DAY PLAN
==================================
Day 1: Paris Arrival & Eiffel Tower Sparkle
- Afternoon: Land in Paris CDG. Check in near Latin Quarter.
- Evening: Walk along the Seine River, view Eiffel Tower sparkling on the hour at night. Dinner at a classic bistro.

Day 2: Louvre Treasures & Montmartre Artists
- Morning: Skip-the-line tour of the Louvre Museum (see Mona Lisa).
- Afternoon: Walk down Champs-Elysees to the Arc de Triomphe.
- Evening: Climb Montmartre hill to Sacre-Coeur Basilica for panoramic city views. Dinner in the artist's square.

Day 3: Palace of Versailles & TGV Train to Nice
- Morning: Half-day tour to Palace of Versailles.
- Afternoon: Board the high-speed TGV train to Nice on the French Riviera (5.5 hours, scenic views!).
- Evening: Check into your Nice hotel near Promenade des Anglais.

Day 4: Nice Old Town & Castle Hill Sunset
- Morning: Explore the colorful Cours Saleya flower market in Nice Old Town.
- Afternoon: Walk up Castle Hill (Colline du Chateau) for iconic views of the blue Bay of Angels.
- Evening: Dinner at a sea-facing French-Italian restaurant.

Day 5: Day Trip to Monaco & Eze Village
- Morning: Take a 20-minute train to the clifftop medieval village of Eze (stunning ocean views).
- Afternoon: Continue by train to Monaco. See the Prince's Palace, Monte Carlo Casino, and walk the F1 race track.
- Evening: Return to Nice for a relaxing evening walk.

Day 6: Nice Promenade & Departure
- Morning: Final shopping for French lavender soaps and pastries.
- Afternoon: Depart via Nice Cote d'Azur Airport.`,
    contentAr: `برنامج باريس والريفييرا الفرنسية لـ 6 أيام
========================================
اليوم 1: الوصول لباريس وتلألؤ برج إيفل
- بعد الظهر: الهبوط بمطار باريس شارل ديغول، النزول بالفندق في الحي اللاتيني العريق.
- المساء: جولة مشي رومانسية على ضفاف نهر السين، ومشاهدة تلألؤ أنوار برج إيفل الشاهق عند رأس كل ساعة ليلاً وتناول العشاء الباريسي الكلاسيكي.

اليوم 2: كنوز متحف اللوفر ومونمارتر عاصمة الفنون
- الصباح: زيارة متحف اللوفر العريق بدون انتظار (مشاهدة لوحة الموناليزا التاريخية).
- بعد الظهر: جولة مشي في جادة الشانزليزيه الشهيرة وصولاً لقوس النصر المهيب.
- المساء: صعود تلة مونمارتر وكنيسة الساكري كور لمشاهدة إطلالة باريس البانورامية الساحرة وتناول العشاء في ساحة الرسامين.

اليوم 3: قصر فرساي الأسطوري وقطار الرصاصة TGV إلى نيس
- الصباح: جولة في قصر فرساي الذهبي وحدائقه الملكية الواسعة.
- بعد الظهر: ركوب قطار TGV فائق السرعة متجهاً جنوباً لريفييرا نيس الفرنسية (5 ساعات ونصف من المناظر الطبيعية الفاتنة).
- المساء: النزول في الفندق بمدينة نيس المطلة على ممشى الإنجليز الشهير.

اليوم 4: بلدة نيس القديمة وتلة القلعة الساحرة
- الصباح: استكشاف سوق الزهور الملون كورس ساليا (Cours Saleya) ببلدة نيس القديمة وتذوق فطيرة السوكا المحلية.
- بعد الظهر: صعود تلة القلعة لمشاهدة إطلالة خليج الملائكة والمياه الزرقاء التي تأخذ الألباب.
- المساء: عشاء فرنسي بحري شهي أمام شاطئ البحر الأبيض المتوسط.

اليوم 5: رحلة موناكو الفاخرة وقرية إيز القرطوسية الشاهقة
- الصباح: رحلة قطار قصيرة لقرية إيز (Eze) المبنية فوق منحدر صخري شاهق مع إطلالة بانورامية على البحر.
- بعد الظهر: إكمال الطريق بالقطار لإمارة موناكو الفخمة، استكشاف قصر الأمير، وممشى حلبة سباق الفورمولا 1 ومحيط كازينو مونت كارلو الشهير.
- المساء: العودة لنيس للاسترخاء والراحة.

اليوم 6: رصيف نيس والمغادرة
- الصباح: جولة أخيرة لشراء عطور اللافندر والحلويات الفرنسية الفاخرة.
- بعد الظهر: التوجه لمطار نيس كوت دازور للاستعداد للمغادرة.`
  },
  {
    id: "g9",
    title: "6 Days in Bali - Tropical Island Paradise",
    titleAr: "برنامج 6 أيام في بالي - الجنة الاستوائية الساحرة",
    destination: "Bali, Indonesia",
    destinationAr: "بالي، إندونيسيا",
    days: 6,
    budget: "$380 - Budget Friendly",
    budgetAr: "380$ - اقتصادي ومناسب",
    coverImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
    shortDescription: "Immerse in spiritual temples, verdant terraced rice fields of Ubud, stunning white-sand beaches, and spectacular ocean sunset views.",
    shortDescriptionAr: "استمتع بجمال حقول الأرز الخضراء في أوبود، الشواطئ الرملية البيضاء الفاتنة، غروب الشمس المذهل فوق المحيط والمنتجعات الاستوائية.",
    content: `BALI 6-DAY TROPICAL ITINERARY
=============================
Day 1: Arrival & Ubud Green Escape
- Morning: Land in Denpasar Airport. Direct private transfer to Ubud, the cultural heart of Bali.
- Afternoon: Check into your tropical jungle resort. Walk through Ubud Monkey Forest (meet the friendly macaques!).
- Evening: Dinner at a traditional organic café overlooking lush green valleys.

Day 2: Tegallalang Rice Terraces & Sacred Water Temple
- Morning: Early visit to Tegallalang Rice Terraces. Swing over the green fields for epic photos!
- Afternoon: Visit Tirta Empul Sacred Water Temple. Learn local bathing rituals.
- Evening: Witness a traditional Kecak Fire Dance performance at Ubud Palace.

Day 3: Ubud Waterfalls & Sunset in Seminyak
- Morning: Visit Tegenungan or Kanto Lampo Waterfalls for a refreshing swim.
- Afternoon: Drive down to Seminyak. Check in to your beach resort.
- Evening: Relax at La Plancha beach club. Enjoy colorful bean bags and watch a majestic Indian Ocean sunset.

Day 4: Nusa Penida Island Day Tour
- Morning: Take a 45-minute speedboat from Sanur to Nusa Penida island.
- Afternoon: Visit Kelingking Beach (famous T-Rex shaped cliff) and swim at Crystal Bay.
- Evening: Take speedboat back to main island, dinner at Jimbaran beach (famous fresh grilled seafood).

Day 5: Mount Batur Sunrise Hike (Optional) or Spa Indulgence
- Morning: 2:00 AM wake up for a sunrise hike up Mount Batur volcano. Breathtaking views at 6:00 AM! (Or sleep in and enjoy a 2-hour Balinese floral massage spa).
- Afternoon: Visit Ulun Danu Beratan Temple, the beautiful iconic temple floating on Lake Beratan.
- Evening: Final shopping at Seminyak flea markets.

Day 6: Beach Relaxation & Departure
- Morning: Chill by the pool or enjoy surf lessons at Kuta/Canggu Beach.
- Afternoon: Buy local Balinese vanilla, coffee, and wooden handicrafts. Transfer to airport.`,
    contentAr: `برنامج بالي الاستوائي الشامل لـ 6 أيام
==================================
اليوم 1: الوصول والانتقال لـ أوبود الهادئة
- الصباح: الهبوط في مطار دنباسار ببالي. الانتقال بسيارة خاصة مباشرة لأوبود، القلب الثقافي النابض للجزيرة.
- بعد الظهر: تسجيل الوصول بمنتجعك الاستوائي الفاخر المطل على الغابة. جولة في غابة القرود (Monkey Forest).
- المساء: عشاء شهي في مقهى عضوي وسط حقول الأرز.

اليوم 2: حقول الأرز في تيجالالانج ومعبد المياه المقدس
- الصباح: زيارة حقول الأرز المدرجة الفاتنة في تيجالالانج وتجربة الأرجوحة الطائرة لالتقاط صور خيالية.
- بعد الظهر: زيارة معبد "تيرتا إمبول" الشهير بمياهه العذبة والتعرف على عادات الباليين العريقة.
- المساء: حضور عرض رقصة "الكيتشاك" النارية التراثية الفلكلورية في قصر أوبود.

اليوم 3: شلالات أوبود وغروب سيمينياك الفخم
- الصباح: السباحة في شلال تيجينونجان أو شلال كانتو لامبو الرائع ذي التدرجات الصخرية.
- بعد الظهر: الانتقال لمدينة سيمينياك الساحلية الساحرة وتسجيل الدخول بالفندق المطل على البحر.
- المساء: الاسترخاء في أحد مقاهي الشاطئ الملونة ومشاهدة منظر غروب الشمس الأسطوري فوق المحيط الهندي.

اليوم 4: رحلة يوم كامل لجزيرة نوسا بينيدا (Nusa Penida)
- الصباح: ركوب القارب السريع لمدة 45 دقيقة من مرفأ سانور إلى جزيرة نوسا بينيدا البكر.
- بعد الظهر: زيارة شاطئ كيلينكينج الشهير (الجرف الصخري الذي يشبه ديناصور تي-ريكس) والسباحة في كريستال باي.
- المساء: العودة بالقارب وجلسة عشاء مأكولات بحرية طازجة ومشوية على شاطئ جيمباران الرملي.

اليوم 5: شروق بركان باتور أو سبا المساج البالي
- الصباح: (اختياري) الاستيقاظ باكراً في الـ 2 صباحاً لتسلق بركان جبل باتور والوصول للقمة وقت الشروق (أو النوم والحصول على جلسة مساج بالي عطري مريح لمدة ساعتين).
- بعد الظهر: زيارة معبد أولون دانو براتان الأيقوني العائم فوق مياه بحيرة براتان الهادئة والضبابية.
- المساء: تسوق الهدايا والملابس الصيفية في أسواق سيمينياك الشعبية والجميلة.

اليوم 6: الاسترخاء على الشاطئ وتوديع الجزيرة
- الصباح: السباحة في مسبح الفندق أو تجربة ركوب الأمواج (الركمجة) في شاطئ كوتا أو تشانغو.
- بعد الظهر: شراء البن البالي الشهير، الفانيليا الطبيعية والصناعات الخشبية اليدوية، والتوجه للمطار للمغادرة.`
  },
  {
    id: "g10",
    title: "5 Days London Royal & Historical Adventure",
    titleAr: "برنامج 5 أيام في لندن - عبق التاريخ والمعالم الملكية",
    destination: "London, UK",
    destinationAr: "لندن، المملكة المتحدة",
    days: 5,
    budget: "$800 - Moderate Premium",
    budgetAr: "800$ - ميزانية متوسطة ممتازة",
    coverImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
    shortDescription: "Walk through royal palaces, the iconic Big Ben, historic tower bridges, world-class museums, and beautiful classic English gardens.",
    shortDescriptionAr: "استمتع بزيارة القصور الملكية العتيقة، ساعة بيغ بن الشهيرة، جسر البرج التاريخي، المتاحف العالمية العريقة والحدائق الإنجليزية الفاتنة.",
    content: `LONDON 5-DAY ROYAL ITINERARY
=============================
Day 1: Iconic Westminster & London Eye
- Morning: Arrive in London. Check into hotel. Take underground (Tube) to Westminster.
- Afternoon: Admire Big Ben, Westminster Abbey, and the Houses of Parliament. Walk across Westminster Bridge.
- Evening: Ride the London Eye at sunset for breathtaking 360-degree views of the Thames. Enjoy dinner in South Bank.

Day 2: Royal Palaces & Hyde Park Walk
- Morning: Watch the famous Changing of the Guard ceremony outside Buckingham Palace (starts 11:00 AM).
- Afternoon: Walk through beautiful St. James's Park to Trafalgar Square, then explore the magnificent National Gallery (free entry!).
- Evening: Stroll through Hyde Park, see Kensington Palace. Dinner at a classic English pub in Kensington.

Day 3: Tower Bridge & British Museum
- Morning: Visit the historic Tower of London (see the Crown Jewels!). Walk across the stunning Tower Bridge.
- Afternoon: Take the Tube to Holborn. Spend a few hours exploring ancient world treasures at the British Museum (free entry!).
- Evening: Watch a world-famous musical show in London's West End (Soho/Covent Garden). Dinner nearby.

Day 4: Shopping, Greenwich & River Cruise
- Morning: Go shopping on Oxford Street, Regent Street, and visit the historical Liberty London department store.
- Afternoon: Take a scenic Uber Boat/ferry down the River Thames to historic Greenwich. Stand on the Prime Meridian Line!
- Evening: Enjoy local British pies and craft drinks at Greenwich Market.

Day 5: Museums & Royal Albert Hall
- Morning: Visit the Natural History Museum and Victoria and Albert (V&A) Museum in South Kensington.
- Afternoon: Take photos of the Royal Albert Hall, enjoy luxury Afternoon Tea with scones and clotted cream at Harrods.
- Evening: Pack bags and transfer to Heathrow/Gatwick Airport for flight home.`,
    contentAr: `برنامج لندن الملكي الشامل لـ 5 أيام
==================================
اليوم 1: معالم ويستمينستر وساعة بيغ بن وعين لندن
- الصباح: الوصول إلى لندن. الاستقرار بالفندق. ركوب قطار الأنفاق (Underground) لـ ويستمينستر.
- بعد الظهر: الاستمتاع برؤية ساعة بيغ بن التاريخية، دير ويستمينستر العريق ومبنى البرلمان البريطاني. عبور جسر ويستمينستر مشياً.
- المساء: ركوب عين لندن (London Eye) وقت الغروب لمشاهدة إطلالة بانورامية رائعة لنهر التايمز، وعشاء في الضفة الجنوبية.

اليوم 2: القصور الملكية وحديقة هايد بارك
- الصباح: مشاهدة مراسم تبديل حرس الملك المهيبة خارج قصر باكنغهام (تبدأ الساعة 11:00 صباحاً).
- بعد الظهر: المشي عبر حديقة سانت جيمس الساحرة للوصول لميدان ترافالغار (التحرير) وزيارة المتحف الوطني (دخول مجاني!).
- المساء: نزهة ممتعة في حديقة هايد بارك الفسيحة ومتابعة قصر كنسينغتون. عشاء في حي كنسينغتون الراقي.

اليوم 3: جسر البرج والمتحف البريطاني وعروض الويست إيند
- الصباح: زيارة قلعة برج لندن التاريخية (ومشاهدة مجوهرات التاج الملكي البراقة). المشي عبر جسر البرج (Tower Bridge) الأيقوني والتقاط صور مذهلة.
- بعد الظهر: الانتقال لزيارة المتحف البريطاني (British Museum) الأكبر عالمياً لرؤية حجر رشيد وآثار العالم القديم (دخول مجاني!).
- المساء: حضور عرض مسرحي موسيقي (Musical) عالمي في حي الويست إيند المسرحي (سوهو / كوفنت غاردن).

اليوم 4: التسوق في أكسفورد ورحلة نهر التايمز لغرينتش
- الصباح: جولة تسوق فخمة في شارعي أكسفورد وريجنت وزيارة متجر هارودز أو متجر ليبرتي العريق.
- بعد الظهر: ركوب العبارة النهرية في نهر التايمز والذهاب لبلدة غرينتش التاريخية والوقوف على خط الطول العالمي صفر!
- المساء: عشاء وتذوق فطائر اللحم والبطاطا البريطانية الكلاسيكية في سوق غرينتش الدافئ.

اليوم 5: متاحف جنوب كنسينغتون وشاي بعد الظهر
- الصباح: زيارة متحف التاريخ الطبيعي ومتحف فكتوريا وألبرت المذهل للفنون والتصميم (دخول مجاني تماماً!).
- بعد الظهر: التقاط صور لقاعة ألبرت الملكية، وتجربة شاي بعد الظهر الإنجليزي الفاخر (Afternoon Tea) مع حلوى السكونز والكريمة الغنية.
- المساء: التجهيز للمغادرة والتوجه إلى مطار هيثرو الدولي للعودة.`
  },
  {
    id: "g11",
    title: "5 Days Istanbul Magic - East Meets West",
    titleAr: "برنامج 5 أيام في إسطنبول - ملتقى الشرق والغرب",
    destination: "Istanbul, Turkey",
    destinationAr: "إسطنبول، تركيا",
    days: 5,
    budget: "$320 - Affordable",
    budgetAr: "320$ - اقتصادي ومناسب جداً",
    coverImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80",
    shortDescription: "Marvel at ancient Byzantine churches, stunning Ottoman mosques, cruise the Bosphorus strait, and haggle in the historic Grand Bazaar.",
    shortDescriptionAr: "تأمل عظمة المساجد العثمانية التاريخية، تجول عبر مضيق البوسفور بالعبارة، وتسوق في البازار الكبير العريق ذي الممرات الساحرة.",
    content: `ISTANBUL 5-DAY DETAILED ITINERARY
==================================
Day 1: Historic Sultanahmet Wonders
- Morning: Land in Istanbul Airport. Check into your hotel. Head straight to Sultanahmet square.
- Afternoon: Visit Hagia Sophia Grand Mosque and the nearby Blue Mosque. Beat the queues by visiting around 2:00 PM.
- Evening: Wander around the ancient Hippodrome and enjoy traditional Turkish meatballs (Kofte) for dinner.

Day 2: Grand Bazaar & Underground Cistern
- Morning: Explore the Basilica Cistern, an ancient underground water reservoir with magnificent pillars.
- Afternoon: Get lost inside the Grand Bazaar (over 4,000 shops!). Remember to negotiate prices.
- Evening: Take a peaceful sunset walk around Gulhane Park. Try Turkish tea at the tea garden with Bosphorus views.

Day 3: Topkapi Palace & Bosphorus Cruise
- Morning: Visit Topkapi Palace, the grand home of Ottoman Sultans overlooking the sea.
- Afternoon: Walk down to Eminonu pier. Board a 2-hour public Bosphorus Cruise for only $3. Enjoy the sea breeze.
- Evening: Visit the fragrant Egyptian Spice Bazaar. Try delicious Turkish Delights (Lokum).

Day 4: Galata Tower, Istiklal Street & Taksim
- Morning: Cross the Galata Bridge on foot, watching local fishermen. Climb the historic Galata Tower for perfect 360-degree city views.
- Afternoon: Walk up the lively Istiklal Street, see the historic red tram, and visit Taksim Square.
- Evening: Dinner at Karakoy neighborhood (famous for San Sebastian cheesecake and Turkish coffee).

Day 5: Asian Side Kadikoy Exploration
- Morning: Take a local public ferry to Kadikoy on the Asian Side.
- Afternoon: Explore the local fish market, boutique coffee shops, and Moda seaside park.
- Evening: Ferry back to European side during sunset. Head to airport for departure.`,
    contentAr: `برنامج إسطنبول الساحر لـ 5 أيام
==============================
اليوم 1: الوصول وعجائب السلطان أحمد التاريخية
- الصباح: الهبوط في مطار إسطنبول الدولي، نقل وتسجيل دخول بالفندق. التوجه لساحة السلطان أحمد التاريخية.
- بعد الظهر: زيارة جامع آيا صوفيا الكبير والجامع الأزرق (جامع السلطان أحمد). ينصح بالزيارة حوالي الـ 2 ظهراً لتجنب الطوابير الطويلة.
- المساء: التجول في ميدان سباق الخيل البيزنطي القديم وتناول الكفتة التركية التقليدية اللذيذة.

اليوم 2: البازار الكبير وصهريج البازيليك الأرضي
- الصباح: النزول لاستكشاف صهريج البازيليك (Basilica Cistern) وهو خزان مياه أثري تحت الأرض بأعمدة تاريخية رائعة.
- بعد الظهر: جولة تسوق غامرة في البازار الكبير (أكثر من 4,000 دكان!). لا تتردد في المساومة للحصول على أفضل سعر.
- المساء: نزهة هادئة في حديقة غولهانه الفاتنة وتناول الشاي التركي في المقهى المطل على مضيق البوسفور.

اليوم 3: قصر توبكابي (الباب العالي) ورحلة البوسفور البحرية
- الصباح: زيارة قصر توبكابي التاريخي، مقر سلاطين الدولة العثمانية بإطلالته الرائعة على بحر مرمرة ومضيق البوسفور.
- بعد الظهر: النزول لمرفأ إيمينونو وركوب عبّارة البوسفور العامة (رحلة ساعتين بمبلغ 3 دولارات فقط) للاستمتاع بنسيم البحر.
- المساء: زيارة سوق التوابل المصري العريق وشراء راحة الحلقوم التركية الشهيرة (Lokum).

اليوم 4: برج غالاتا وشارع الاستقلال وميدان تقسيم
- الصباح: عبور جسر غالاتا مشياً على الأقدام ومراقبة الصيادين. صعود برج غالاتا التاريخي لرؤية إسطنبول بـ 360 درجة.
- بعد الظهر: المشي في شارع الاستقلال النابض بالحياة، مشاهدة الترام الأحمر التاريخي والوصول لميدان تقسيم الشهير.
- المساء: عشاء في حي كاراكوي العصري وتناول حلوى سان سيباستيان الشهيرة والقهوة التركية على الرمل.

اليوم 5: كاديكوي في الجانب الآسيوي والعودة للوطن
- الصباح: ركوب العبّارة البحرية العامة المتجهة لحي كاديكوي الجميل في الجانب الآسيوي.
- بعد الظهر: استكشاف أسواق كاديكوي، المقاهي الدافئة وممشى مودا البحري الهادئ.
- المساء: العودة بالعبارة للجانب الأوروبي في وقت الغروب المذهل، والتوجه للمطار للمغادرة.`
  },
  {
    id: "g12",
    title: "The Classic European Route (France, Switzerland, & Germany)",
    titleAr: "المسار الكلاسيكي (فرنسا، سويسرا، وألمانيا) 🇨🇭 🇩🇪 🇫🇷",
    destination: "France, Switzerland, & Germany",
    destinationAr: "فرنسا، سويسرا، وألمانيا",
    days: 14,
    budget: "€1250 - Moderate",
    budgetAr: "1250€ - ميزانية متوسطة",
    coverImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
    shortDescription: "A perfect family-friendly itinerary through beautiful Alpine valleys, theme parks, and stunning lake views.",
    shortDescriptionAr: "مسار مثالي للعائلات ومحبي الطبيعة ومدن الملاهي، يضمن لك رحلة متنوعة ورائعة بين الجبال والبحيرات والغابات.",
    content: `CLASSIC SWISS-FRENCH-GERMAN 14-DAY ROAD TRIP
==========================================
Day 1: Arrival in Geneva
- Arrive at Geneva Airport, pick up rental car or board scenic train.
- Walk around Lake Geneva, view Jet d'Eau, and explore the historic Old Town.

Day 2-4: Annecy, France ("Venice of the Alps")
- Travel to Annecy (35 mins from Geneva).
- Walk past colorful houses, flower-decked canals, and the iconic Palais de l'Île.
- Day 3: Rent a bicycle to ride around Lake Annecy. Have a traditional Savoyard Fondue dinner.
- Day 4: Day trip to Chamonix-Mont-Blanc. Ride the cable car to Aiguille du Midi for breathtaking high-altitude panoramas.

Day 5-9: Interlaken, Switzerland (Alpine Paradise)
- Drive or take train to Interlaken, nestled between Lake Thun and Lake Brienz.
- Day 6: Explore Lauterbrunnen Valley (valley of 72 waterfalls) and the car-free mountain village of Wengen.
- Day 7: Take the historic cogwheel train to Jungfraujoch - "Top of Europe" high-altitude snow wonderland.
- Day 8: Excursion to Grindelwald First. Walk the Cliff Walk, try the First Glider or First Flyer zip-lines.
- Day 9: Relaxing boat cruise on Lake Brienz. Visit Iseltwald village.

Day 10-12: Freiburg & Black Forest, Germany (Europa-Park)
- Drive across the border to Freiburg im Breisgau, Germany's sunniest city.
- Day 11: Spend a full epic day at Europa-Park in Rust, Germany's largest and highest-rated theme park.
- Day 12: Drive through the scenic Black Forest (Schwarzwald), visit Lake Titisee, and see traditional Cuckoo clock workshops.

Day 13-14: Montreux & Return
- Travel back to Switzerland. Stay in beautiful lakeside Montreux.
- Visit the legendary Chillon Castle (Château de Chillon) on Lake Geneva.
- Day 14: Final shopping in Geneva before departure from Geneva Airport.`,
    contentAr: `المسار الكلاسيكي (فرنسا، سويسرا، وألمانيا) 🇨🇭 🇩🇪 🇫🇷
=============================================
مسار مثالي للعائلات ومحبي الطبيعة ومدن الملاهي، يضمن لك رحلة متنوعة.

المدة: 13 - 15 يومًا (متوسط 14 يوماً)

المسار بالتفصيل:

اليوم 1: الوصول إلى جنيف (سويسرا)
- الهبوط في مطار جنيف واستلام السيارة أو ركوب القطار السريع.
- جولة على ضفاف بحيرة جنيف الشهيرة، واستكشاف المدينة القديمة التاريخية ومشاهدة النافورة الضخمة.

اليوم 2 - 4: آنسي (فرنسا: 3 ليالي) - بندقية جبال الألب
- الانتقال إلى مدينة آنسي الفرنسية الساحرة القريبة جداً من جنيف.
- استكشاف القنوات المائية المليئة بالزهور، والبيوت القديمة الملونة، وقلعة آنسي القديمة.
- اليوم 3: استئجار دراجة هوائية والقيام بجولة حول بحيرة آنسي الفيروزية الرائعة. تذوق عشاء الفوندو التقليدي.
- اليوم 4: رحلة يومية إلى شامونيه مون بلان، وركوب التلفريك الشاهق إلى قمة إيجوي دو ميدي للاستمتاع بالثلج والقمم البيضاء.

اليوم 5 - 9: إنترلاكن (سويسرا: 5 ليالي) - قلب الألب النابض
- التوجه إلى إنترلاكن، العاصمة السياحية المتربعة بين بحيرتي تون وبرينز.
- اليوم 6: زيارة وادي لوتربرونين الساحر (وادي الـ 72 شلالاً) والصعود لقرية فينغن الجبلية الهادئة والخالية من السيارات.
- اليوم 7: ركوب قطار الأسنان التاريخي الشهير المتوجه لأعلى محطة قطار في أوروبا "جونغفراويوخ" (قمة أوروبا) للاستمتاع بالثلوج الدائمة.
- اليوم 8: مغامرة في قمة "غريندلفالد فيرست" (Grindelwald First)، والمشي على الممشى المعلق وتجربة الزحليقة الصيفية والألعاب المثيرة.
- اليوم 9: رحلة بحرية هادئة في بحيرة برينز، وزيارة قرية إيسيلتفالد الجميلة (موقع تصوير المسلسلات الشهير).

اليوم 10 - 12: فرايبورغ والغابة السوداء (ألمانيا: 3 ليالي) - يوروبا بارك
- عبور الحدود والوصول لمدينة فرايبورغ التاريخية، بوابة الغابة السوداء الألمانية.
- اليوم 11: قضاء يوم كامل من الإثارة والمغامرة في ملاهي "يوروبا بارك" (Europa-Park) في راست، وهي أكبر ملاهي في ألمانيا وأوروبا.
- اليوم 12: جولة في أحضان الغابة السوداء (Schwarzwald)، وزيارة بحيرة تيتيزي الخلابة وتذوق كعكة الغابة السوداء الأصلية ورؤية مصانع ساعات الكوكو.

اليوم 13 - 14: مونترو (سويسرا: ليلتان) والعودة
- العودة لسويسرا والاستقرار في مدينة مونترو الهادئة على ضفاف البحيرة.
- زيارة قلعة شيلون التاريخية (Château de Chillon) والتقاط الصور الخلابة.
- اليوم 14: التوجه إلى مطار جنيف لتسليم السيارة والعودة للوطن بالسلامة.`
  },
  {
    id: "g13",
    title: "Alps and Lakes Escapade (Austria & Northern Italy)",
    titleAr: "مسار جبال الألب والبحيرات (النمسا والشمال الإيطالي) 🇦🇹 🇮🇹",
    destination: "Austria & Northern Italy",
    destinationAr: "النمسا والشمال الإيطالي",
    days: 12,
    budget: "€1000 - Moderate",
    budgetAr: "1000€ - ميزانية متوسطة",
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    shortDescription: "A breathtaking journey for nature lovers, combining Austria's pristine lakes with Italy's majestic Dolomites.",
    shortDescriptionAr: "لعشاق الريف الساحر، والبحيرات الفيروزية، والإطلالات البانورامية لجبال الألب والدولوميت الخيالية.",
    content: `ALPS & GLORIOUS LAKES 12-DAY BLUEPRINT
========================================
Day 1: Arrival in Munich
- Arrive at Munich Airport (Germany). Pick up vehicle and explore Marienplatz.

Day 2-5: Zell am See, Austria (4 Nights)
- Drive to Zell am See, Austria. Walk along Lake Zell and admire the snow-capped Schmittenhöhe.
- Day 3: Visit the High Alpine Reservoirs in Kaprun (incredible turquoise water dams).
- Day 4: Take a scenic drive on the Grossglockner High Alpine Road (Austria's highest mountain pass road).
- Day 5: Spend the day exploring Hallstatt, the world-famous lakeside fairytale village.

Day 6-7: Innsbruck, Austria (2 Nights)
- Travel to Innsbruck. View the famous Golden Roof (Goldenes Dachl) and walk past the colorful Inn River houses.
- Day 7: Visit Swarovski Crystal Worlds in nearby Wattens, or ride the Nordkette cable car straight from the city center up to 2,000m.

Day 8-10: Dolomites, Italy (3 Nights)
- Drive south across the Brenner Pass into South Tyrol / Dolomites region in Italy.
- Day 9: Hike around Lake Braies (Lago di Braies) - the most photogenic alpine lake in Italy. Enjoy a wooden boat row.
- Day 10: See the famous peaks of Tre Cime di Lavaredo or ride the cable car to Seceda ridge for unbelievable jagged views.

Day 11-12: Venice & Departure
- Head to Venice, Italy's floating city. Take a classic Gondola ride.
- Day 12: Fly out of Venice Marco Polo Airport (VCE) or return to Munich for your flight home.`,
    contentAr: `مسار جبال الألب والبحيرات (النمسا والشمال الإيطالي) 🇦🇹 🇮🇹
==================================================
لعشاق الريف الساحر، والبحيرات الفيروزية، والإطلالات البانورامية لجبال الألب.

المدة: 10 - 12 يومًا (متوسط 12 يوماً)

المسار بالتفصيل:

اليوم 1: الوصول إلى ميونخ (ألمانيا)
- الوصول لمطار ميونخ، استلام السيارة والتنزه في ساحة مارين بلاتز وتناول الغداء قبل التوجه جنوباً للنمسا.

اليوم 2 - 5: زيلامسي (النمسا: 4 ليالي) - عروس البحيرات النمساوية
- الوصول لزيلامسي. استمتع بالمشي على بحيرة زيل الرائعة وجولات المدينة الهادئة.
- اليوم 3: زيارة السدود المائية المرتفعة في كابرون (Kaprun High Alpine Reservoirs) والتمتع بالطبيعة والمياه الفيروزية.
- اليوم 4: مغامرة القيادة عبر طريق جروسجلوكنر البانورامي (أعلى ممر جبلي في النمسا ذو إطلالات جبلية مهيبة).
- اليوم 5: رحلة نهارية لزيارة بلدة "هالستات" التاريخية الساحرة، والملقبة بقرية كرتون الخيال الخلابة والتقاط صور لا تُنسى.

اليوم 6 - 7: إنسبروك (النمسا: ليلتان) - عاصمة جبال الألب النمساوية
- التوجه لمدينة إنسبروك التاريخية. جولة في البلدة القديمة لمشاهدة "السقف الذهبي" والبيوت الملونة على ضفة نهر "إن".
- اليوم 7: زيارة عالم كريستال سواروفسكي الخيالي في بلدة فاتنز المجاورة، أو ركوب قطار نورد كيت المعلق لقمة الجبل خلال دقائق من قلب المدينة.

اليوم 8 - 10: دولوميت (إيطاليا: 3 ليالي) - جبال الشمال الإيطالي الأسطورية
- القيادة جنوباً وعبور ممر برينر الجبلي للدخول لإقليم جنوب تيرول وجبال الدولوميت الخارقة للجمال في إيطاليا.
- اليوم 9: جولة حول بحيرة برايس (Lago di Braies) - أكثر بحيرات جبال الألب شهرة وتصويراً في إيطاليا، واستئجار قارب خشبي تقليدي.
- اليوم 10: زيارة قمة سيسيدا الشهيرة بالانكسار الجبلي الخرافي أو التنزه حول قمم تري تشيمي دي لافاريدو الثلاث.

اليوم 11 - 12: البندقية (فينيسيا) والمغادرة
- الانتقال إلى البندقية، مدينة القنوات المائية الرومانسية. جولة بالقارب التقليدي "الجندول" وزيارة ساحة سان ماركو.
- اليوم 12: الاستعداد للمغادرة والتوجه إلى مطار البندقية الدولي (أو العودة لمطار ميونخ حسب حجز الطيران).`
  },
  {
    id: "g14",
    title: "Central Europe Budget Trail (Czech, Slovakia, Austria, & Hungary)",
    titleAr: "مسار وسط أوروبا الاقتصادي 🇨🇿 🇸🇰 🇦🇹 🇭🇺",
    destination: "Czech Republic, Slovakia, Austria, & Hungary",
    destinationAr: "جمهورية التشيك، سلوفاكيا، النمسا، والمجر",
    days: 13,
    budget: "€800 - Economy",
    budgetAr: "800€ - ميزانية اقتصادية",
    coverImage: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80",
    shortDescription: "A culture-rich, budget-friendly imperial route connecting four of Central Europe's grandest capitals.",
    shortDescriptionAr: "خيار ممتاز للميزانيات المحدودة ولعشاق التاريخ والثقافة العريقة والهندسة المعمارية الملكية الفاتنة.",
    content: `CENTRAL EUROPE BUDGET 13-DAY IMPERIAL BLUEPRINT
=============================================
Day 1-3: Prague, Czech Republic (3 Nights)
- Day 1: Arrive in Prague. Walk around Old Town Square and watch the Astronomical Clock show.
- Day 2: Walk across Charles Bridge early, then hike up to Prague Castle complex and St. Vitus Cathedral.
- Day 3: Visit Letna Park for the best bridge-view photographs, and enjoy traditional local trdelnik pastries.

Day 4-6: Vienna, Austria (3 Nights)
- Take a budget RegioJet train ($15) from Prague to Vienna.
- Day 5: Visit the gorgeous gardens of Schönbrunn Palace and Hofburg Palace.
- Day 6: Explore the historic center, visit St. Stephen's Cathedral, and try Viennese coffee & sachertorte.

Day 7: Bratislava, Slovakia (1 Night)
- Board a 1-hour scenic train or Danube boat to Bratislava, Slovakia's charming compact capital.
- Visit Bratislava Castle overlooking the Danube and find the playful bronze statues in the Old Town.

Day 8-10: Budapest, Hungary (3 Nights)
- Train to Budapest. Stay near Jewish Quarter.
- Day 9: Soak in the thermal hot water at Széchenyi Baths.
- Day 10: Visit Fisherman's Bastion, Buda Castle, and walk across the Chain Bridge. Have a sunset Danube River cruise.

Day 11-13: Gems & Departure
- Shop for Hungarian souvenirs at Central Market Hall.
- Day 13: Depart from Budapest Ferenc Liszt Airport.`,
    contentAr: `مسار وسط أوروبا الاقتصادي 🇨🇿 🇸🇰 🇦🇹 🇭🇺
==================================================
خيار ممتاز للميزانيات المحدودة ولعشاق التاريخ والثقافة العريقة.

المدة: 12 - 14 يومًا (متوسط 13 يوماً)

المسار بالتفصيل:

اليوم 1 - 3: الوصول إلى براغ (التشيك: 3 ليالي) - مدينة الألف برج
- اليوم 1: الوصول والنزول بالفندق. جولة في ساحة المدينة القديمة التاريخية ومشاهدة عرض الساعة الفلكية القديمة.
- اليوم 2: المشي عبر جسر تشارلز الشهير، وصعود التلة لقلعة براغ التاريخية وكاتدرائية سانت فيتوس المهيبة.
- اليوم 3: زيارة حديقة ليتنا للاستمتاع بإإعادة الجسور المتعددة الرائعة وتذوق حلوى التريدلنيك اللذيذة.

اليوم 4 - 6: فيينا (النمسا: 3 ليالي) - عاصمة الموسيقى الكلاسيكية
- ركوب قطار RegioJet الاقتصادي السريع من براغ إلى فيينا (تكلفة التذكرة بحدود 15-20$).
- اليوم 5: استكشاف قصر شونبرون الإمبراطوري والتجول في حدائقه الشاسعة وقصر الهوفبورغ الملكي.
- اليوم 6: زيارة كاتدرائية سانت ستيفن الشهيرة بوسط البلد، وحضور حفل كلاسيكي بسيط أو الاسترخاء في أحد المقاهي النمساوية التاريخية.

اليوم 7: براتيسلافا (سلوفاكيا: ليلة واحدة) - العاصمة اللطيفة
- ركوب قطار قصير (ساعة واحدة) أو رحلة بحرية بالعبّارة في نهر الدانوب للوصول لعاصمة سلوفاكيا الهادئة براتيسلافا.
- زيارة قلعة براتيسلافا البيضاء الشاهقة المطلة على النهر والتقاط الصور مع التماثيل النحاسية الطريفة في أزقة البلدة القديمة.

اليوم 8 - 11: بودابست (المجر: 3 ليالي) - لؤلؤة نهر الدانوب
- التوجه بالقطار إلى بودابست. النزول بالفندق بالقرب من وسط المدينة المليء بالحيوية.
- اليوم 9: الاستجمام وقضاء بضع ساعات في حمامات سيتشيني الحرارية الساخنة الشهيرة في الهواء الطلق.
- اليوم 10: زيارة حصن الصيادين (Fisherman's Bastion) الخيالي، وقلعة بودا الأثرية، والمشي عبر جسر السلسلة المعلق. قضاء المساء في رحلة بحرية ساحرة في نهر الدانوب مع إضاءة المباني الأسطورية.

اليوم 12 - 13: تسوق وهدايا والمغادرة
- تسوق في السوق المركزي الكبير وشراء التوابل والمصنوعات المجرية الجميلة.
- اليوم 13: التوجه لمطار بودابست الدولي للمغادرة والاستعداد للعودة للوطن.`
  },
  {
    id: "g15",
    title: "Amalfi Coast & Rome Splendor (Italy)",
    titleAr: "مسار ساحل أمالفي وروما (إيطاليا) 🇮🇹",
    destination: "Amalfi Coast & Rome, Italy",
    destinationAr: "روما وساحل أمالفي، إيطاليا",
    days: 11,
    budget: "€1100 - Moderate",
    budgetAr: "1100€ - ميزانية متوسطة",
    coverImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80",
    shortDescription: "A romantic Italian itinerary blending the ancient history of Rome with the dramatic cliffs of Amalfi.",
    shortDescriptionAr: "رحلة رومانسية بامتياز تجمع بين عبق التاريخ وسحر الشواطئ المتوسطية المنحدرة والبلدات الملونة في إيطاليا.",
    content: `AMALFI COAST & ROME 11-DAY LUXURY ROUTE
========================================
Day 1-3: Rome, The Eternal City (3 Nights)
- Day 1: Arrive in Rome. Visit the iconic Colosseum and Roman Forum.
- Day 2: Walk to Trevi Fountain (throw a coin!), Pantheon, and Spanish Steps.
- Day 3: Visit the Vatican Museums, Sistine Chapel, and St. Peter's Basilica.

Day 4-7: Naples & Amalfi Coast (4 Nights)
- Take the high-speed Frecciarossa train from Rome to Naples (1h 10m). Have original Neapolitan Margherita pizza!
- Day 5: Visit the ancient preserved ruins of Pompeii, then head to Sorrento or Positano.
- Day 6: Explore beautiful, colorful Positano. Rent a sunbed on the beach and enjoy fresh lemon granita.
- Day 7: Take a day boat to Capri Island. Visit the famous Blue Grotto.

Day 8-10: Florence & Tuscany (3 Nights)
- Train to Florence, the cradle of the Renaissance.
- Day 9: View Michelangelo's David at Accademia Gallery, and see the giant Duomo (Santa Maria del Fiore).
- Day 10: Day trip to Pisa to take funny photos with the Leaning Tower, or tour Tuscan vineyards.

Day 11: Return from Milan / Rome
- Depart from Milan Malpensa or Rome Fiumicino Airport.`,
    contentAr: `مسار ساحل أمالفي وروما (إيطاليا) 🇮🇹
==================================================
رحلة رومانسية بامتياز تجمع بين عبق التاريخ وسحر الشواطئ المتوسطية.

المدة: 10 - 12 يومًا (متوسط 11 يوماً)

المسار بالتفصيل:

اليوم 1 - 3: روما (3 ليالي) - المدينة الأبدية وعراقة التاريخ
- اليوم 1: الوصول إلى العاصمة روما، التوجه للفندق ثم زيارة الكولوسيوم المدرج التاريخي الشهير والمنتدى الروماني القديم.
- اليوم 2: جولة مشي مميزة تشمل رمي القطعة النقدية في نافورة تريفي الرائعة، زيارة البانثيون التاريخي، وصعود السلالم الإسبانية الشهيرة بوسط البلد.
- اليوم 3: زيارة متاحف الفاتيكان الفخمة، كنيسة سيستينا لرؤية روائع مايكل أنجلو، وصعود قبة كاتدرائية القديس بطرس لإطلالة كاملة للمدينة.

اليوم 4 - 7: نابولي وساحل أمالفي (4 ليالي) - البحر الأزرق والمنحدرات الملونة
- ركوب القطار السريع من روما إلى نابولي (ساعة و10 دقائق). استمتع بوجبة بيتزا مارغريتا الإيطالية الأصلية في نابولي.
- اليوم 5: زيارة مدينة بومبي الأثرية المحفوظة تاريخياً، ثم الاستقرار في سورينتو أو بوزيتانو على ساحل أمالفي.
- اليوم 6: استكشاف بلدة بوزيتانو (Positano) الجبلية الملونة الشاهقة فوق البحر. جولة على الشاطئ والاستمتاع بمشروب الليمون الطبيعي الطازج.
- اليوم 7: جولة بحرية ممتعة بالقارب لجزيرة كابري (Capri) الفارهة وزيارة المغارة الزرقاء الشهيرة والتقاط صور ساحرة.

اليوم 8 - 10: فلورنسا وتوسكانا (3 ليالي) - مهد الفن والجمال
- التوجه بالقطار إلى فلورنسا التاريخية الملقبة بمدينة الفن والنهضة الإيطالية.
- اليوم 9: زيارة كاتدرائية فلورنسا الضخمة ذات القبة الحمراء، واستكشاف جسر بونتي فيكيو الشهير وجاليري الأوفيزي.
- اليوم 10: رحلة يومية ممتعة لمدينة بيزا لالتقاط الصورة التقليدية الطريفة مع برج بيزا المائل الشهير، أو جولة في ريف إقليم توسكانا الأخضر الفاتن.

اليوم 11: العودة والوطن
- التوجه إلى ميلانو أو روما لاستقلال رحلة الطيران والمغادرة للوطن بالسلامة.`
  },
  {
    id: "g16",
    title: "Iberian Magic (Spain & Portugal Highlight)",
    titleAr: "سحر شبه الجزيرة الإيبيرية (إسبانيا والبرتغال) 🇪🇸 🇵🇹",
    destination: "Spain & Portugal",
    destinationAr: "إسبانيا والبرتغال",
    days: 11,
    budget: "€950 - Moderate",
    budgetAr: "950€ - ميزانية متوسطة",
    coverImage: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80",
    shortDescription: "Explore the fiery Flamenco, Moorish castles, beautiful Lisbon coastlines, and incredible Catalan architecture.",
    shortDescriptionAr: "مسار متكامل يجمع رقصات الفلامنكو الحيوية، القصور الأندلسية العريقة، شواطئ لشبونة الدافئة، وجمال هندسة برشلونة.",
    content: `SPAIN & PORTUGAL 11-DAY GRAND ROUTE
===================================
Day 1-3: Madrid, Spain (3 Nights)
- Day 1: Arrive in Madrid. Explore the Royal Palace (Palacio Real) and enjoy tapas at Mercado de San Miguel.
- Day 2: Visit the world-class Prado Museum and stroll around the beautiful Retiro Park.
- Day 3: Day trip to Toledo, Spain's medieval ancient capital built high on a river gorge.

Day 4-6: Lisbon, Portugal (3 Nights)
- Fly or take a direct train to Lisbon. Check into a hotel in Baixa or Alfama district.
- Day 5: Ride the famous yellow Tram 28 through narrow historic hills. Climb to São Jorge Castle.
- Day 6: Visit Belém Tower and taste the delicious warm "Pastéis de Belém" custard tarts. Explore Sintra's fairytale Pena Palace.

Day 7-8: Seville & Andalusia, Spain (2 Nights)
- Travel to Seville, Spain's passionate southern capital.
- Day 8: Visit the Seville Cathedral (largest Gothic cathedral) and the majestic Royal Alcázar (palace with Moorish gardens). Watch a live passionate Flamenco show.

Day 9-11: Barcelona, Spain (3 Nights)
- Catch a high-speed train or short flight to Barcelona.
- Day 10: See Antoni Gaudí's masterpieces: the iconic Sagrada Família, Park Güell, and stroll along the lively La Rambla street.
- Day 11: Enjoy Barceloneta beach and shop for local souvenirs before your flight home.`,
    contentAr: `مسار سحر إسبانيا والبرتغال 🇪🇸 🇵🇹
==================================================
رحلة مذهلة تجمع بين القصور الأثرية، الشواطئ الخلابة، وألذ المأكولات الإيبيرية التقليدية.

المدة: 10 - 12 يومًا (متوسط 11 يوماً)

المسار بالتفصيل:

اليوم 1 - 3: مدريد (إسبانيا: 3 ليالي) - نبض العاصمة الإسبانية
- اليوم 1: الوصول إلى مدريد العاصمة، التوجه للفندق وزيارة القصر الملكي الفخم وتناول العشاء في سوق "سان ميغيل" الشهير بالمأكولات الإسبانية الخفيفة (تاداس).
- اليوم 2: زيارة متحف برادو للفنون الشهير عالمياً، والتنزه الهادئ في حديقة ريتيرو (El Retiro) الساحرة والركوب في قوارب البحيرة الكريستالية.
- اليوم 3: رحلة يومية قصيرة إلى بلدة "طليطلة" (Toledo) التاريخية، عاصمة الثقافات الثلاث المعلقة فوق النهر والمليئة بالقصور والمباني الحجرية.

اليوم 4 - 6: لشبونة (البرتغال: 3 ليالي) - مدينة التلال الملونة والمحيط
- السفر بالطائرة أو بالقطار السريع إلى لشبونة عاصمة البرتغال.
- اليوم 5: ركوب الترام الأصفر التاريخي رقم 28 عبر الأحياء العتيقة الصاعدة والهابطة، وصعود قلعة جورج لإطلالة خلابة على المحيط ونهر تاجة.
- اليوم 6: زيارة برج بيليم التاريخي وتناول حلوى "باستيل دي ناتا" الدافئة واللذيذة. رحلة إلى بلدة "سينترا" الجبلية وزيارة قصر بينا الملون المستوحى من القصص الخيالية.

اليوم 7 - 8: إشبيلية وإقليم الأندلس (إسبانيا: ليلتان) - روح الفلامنكو والتاريخ العربي
- التوجه إلى إشبيلية، عاصمة الأندلس الدافئة النابضة بالحياة.
- اليوم 8: زيارة قصر المورق (الديوان الملكي) الفخم ذي النقوش الإسلامية الأندلسية الفاتنة وحدائقه المليئة بزهور البرتقال، وحضور عرض رقص "الفلامنكو" الحي والمثير.

اليوم 9 - 11: برشلونة (إسبانيا: 3 ليالي) - روائع غاودي وساحل البحر
- استقلال الطائرة أو القطار السريع لمدينة برشلونة الساحلية.
- اليوم 10: جولة لاستكشاف روائع المصمم المعماري الشهير "أنطوني غاودي" وتشمل كاتدرائية ساغرادا فاميليا (العائلة المقدسة) الإعجازية، وحديقة غويل البانورامية والمشي بشارع لارامبلا الشهير.
- اليوم 11: قضاء وقت ممتع على شاطئ برشلونيتا وتناول وجبة الباييلا الإسبانية الفاخرة بالمأكولات البحرية قبل المغادرة والعودة للوطن بالسلامة.`
  }
];

// Currency Converter Config & Helper
export interface CurrencyInfo {
  code: string;
  symbol: string;
  nameAr: string;
  nameEn: string;
  flag: string;
  isGcc?: boolean;
}

export const CURRENCY_LIST: CurrencyInfo[] = [
  // GCC Currencies first
  { code: "KWD", symbol: "د.ك", nameAr: "دينار كويتي", nameEn: "Kuwaiti Dinar", flag: "🇰🇼", isGcc: true },
  { code: "SAR", symbol: "ر.س", nameAr: "ريال سعودي", nameEn: "Saudi Riyal", flag: "🇸🇦", isGcc: true },
  { code: "AED", symbol: "د.إ", nameAr: "درهم إماراتي", nameEn: "UAE Dirham", flag: "🇦🇪", isGcc: true },
  { code: "QAR", symbol: "ر.ق", nameAr: "ريال قطري", nameEn: "Qatari Riyal", flag: "🇶🇦", isGcc: true },
  { code: "BHD", symbol: "د.ب", nameAr: "دينار بحريني", nameEn: "Bahraini Dinar", flag: "🇧🇭", isGcc: true },
  { code: "OMR", symbol: "ر.ع", nameAr: "ريال عماني", nameEn: "Omani Rial", flag: "🇴🇲", isGcc: true },
  // Major World Currencies
  { code: "USD", symbol: "$", nameAr: "دولار أمريكي", nameEn: "US Dollar", flag: "🇺🇸" },
  { code: "EUR", symbol: "€", nameAr: "يورو", nameEn: "Euro", flag: "🇪🇺" },
  { code: "GBP", symbol: "£", nameAr: "جنيه إسترليني", nameEn: "British Pound", flag: "🇬🇧" },
  { code: "TRY", symbol: "₺", nameAr: "ليرة تركية", nameEn: "Turkish Lira", flag: "🇹🇷" },
  { code: "EGP", symbol: "ج.م", nameAr: "جنيه مصري", nameEn: "Egyptian Pound", flag: "🇪🇬" },
  { code: "INR", symbol: "₹", nameAr: "روبية هندية", nameEn: "Indian Rupee", flag: "🇮🇳" },
  { code: "JPY", symbol: "¥", nameAr: "ين ياباني", nameEn: "Japanese Yen", flag: "🇯🇵" },
  { code: "IDR", symbol: "Rp", nameAr: "روبية إندونيسية", nameEn: "Indonesian Rupiah", flag: "🇮🇩" },
  { code: "CHF", symbol: "CHF", nameAr: "فرنك سويسري", nameEn: "Swiss Franc", flag: "🇨🇭" },
  { code: "CAD", symbol: "C$", nameAr: "دولار كندي", nameEn: "Canadian Dollar", flag: "🇨🇦" },
  { code: "AUD", symbol: "A$", nameAr: "دولار أسترالي", nameEn: "Australian Dollar", flag: "🇦🇺" },
  { code: "CNY", symbol: "¥", nameAr: "يوان صيني", nameEn: "Chinese Yuan", flag: "🇨🇳" },
  { code: "RUB", symbol: "₽", nameAr: "روبل روسي", nameEn: "Russian Ruble", flag: "🇷🇺" },
  { code: "MYR", symbol: "RM", nameAr: "رينغيت ماليزي", nameEn: "Malaysian Ringgit", flag: "🇲🇾" },
  { code: "BAM", symbol: "KM", nameAr: "مارك بوسني", nameEn: "Bosnian Mark", flag: "🇧🇦" },
  { code: "MVR", symbol: "Rf", nameAr: "روفيه مالديفية", nameEn: "Maldivian Rufiyaa", flag: "🇲🇻" },
  { code: "CZK", symbol: "Kč", nameAr: "كورونا تشيكية", nameEn: "Czech Koruna", flag: "🇨🇿" },
  { code: "HUF", symbol: "Ft", nameAr: "فورنت مجري", nameEn: "Hungarian Forint", flag: "🇭🇺" },
];

export const DEFAULT_RATES: Record<string, number> = {
  USD: 1.0,
  EUR: 0.92,
  GBP: 0.79,
  TRY: 32.80,
  EGP: 48.10,
  INR: 83.50,
  JPY: 159.50,
  IDR: 16000.0,
  CHF: 0.89,
  CAD: 1.37,
  AUD: 1.50,
  CNY: 7.25,
  RUB: 88.50,
  KWD: 0.306,
  SAR: 3.75,
  AED: 3.67,
  QAR: 3.64,
  BHD: 0.376,
  OMR: 0.385,
  MYR: 4.70,
  BAM: 1.80,
  MVR: 15.42,
  CZK: 23.10,
  HUF: 365.00,
};

export function getLocalCurrencyForDestination(destination: string): string {
  if (!destination) return "USD";
  const upper = destination.toUpperCase();
  if (upper.includes("SWITZERLAND") || upper.includes("سويسرا") || upper.includes("GENEVA") || upper.includes("جنيف") || upper.includes("INTERLAKEN") || upper.includes("إنترلاكن")) return "CHF";
  if (upper.includes("UK") || upper.includes("LONDON") || upper.includes("لندن") || upper.includes("المملكة المتحدة") || upper.includes("BRITAIN") || upper.includes("بريطانيا") || upper.includes("إنجلترا")) return "GBP";
  if (upper.includes("JAPAN") || upper.includes("TOKYO") || upper.includes("KYOTO") || upper.includes("اليابان") || upper.includes("طوكيو") || upper.includes("كيوتو")) return "JPY";
  if (upper.includes("TURKEY") || upper.includes("ISTANBUL") || upper.includes("تركيا") || upper.includes("إسطنبول")) return "TRY";
  if (upper.includes("EGYPT") || upper.includes("CAIRO") || upper.includes("مصر") || upper.includes("القاهرة")) return "EGP";
  if (upper.includes("INDONESIA") || upper.includes("BALI") || upper.includes("إندونيسيا") || upper.includes("اندونيسيا") || upper.includes("بالي")) return "IDR";
  if (upper.includes("MALAYSIA") || upper.includes("KUALA") || upper.includes("LANGKAWI") || upper.includes("ماليزيا") || upper.includes("كوالالمبور") || upper.includes("لنكاوي")) return "MYR";
  if (upper.includes("BOSNIA") || upper.includes("SARAJEVO") || upper.includes("MOSTAR") || upper.includes("البوسنة") || upper.includes("سراييفو") || upper.includes("موستار")) return "BAM";
  if (upper.includes("MALDIVES") || upper.includes("MALE") || upper.includes("المالديف") || upper.includes("مالديف")) return "MVR";
  if (upper.includes("QATAR") || upper.includes("DOHA") || upper.includes("قطر") || upper.includes("الدوحة")) return "QAR";
  if (upper.includes("UAE") || upper.includes("DUBAI") || upper.includes("ABU DHABI") || upper.includes("الإمارات") || upper.includes("دبي") || upper.includes("أبوظبي")) return "AED";
  if (upper.includes("SAUDI") || upper.includes("RIYADH") || upper.includes("JEDDAH") || upper.includes("السعودية") || upper.includes("الرياض") || upper.includes("جدة")) return "SAR";
  if (upper.includes("KUWAIT") || upper.includes("الكويت")) return "KWD";
  if (upper.includes("BAHRAIN") || upper.includes("البحرين")) return "BHD";
  if (upper.includes("OMAN") || upper.includes("عمان") || upper.includes("مسقط")) return "OMR";
  
  if (
    upper.includes("FRANCE") || upper.includes("PARIS") || upper.includes("فرنسا") || upper.includes("باريس") || upper.includes("ANNECY") || upper.includes("آنسي") ||
    upper.includes("GERMANY") || upper.includes("FREIBURG") || upper.includes("ألمانيا") || upper.includes("فرايبورغ") ||
    upper.includes("AUSTRIA") || upper.includes("ZELL") || upper.includes("النمسا") || upper.includes("زيلامسي") ||
    upper.includes("ITALY") || upper.includes("ROME") || upper.includes("AMALFI") || upper.includes("إيطاليا") || upper.includes("روما") || upper.includes("أمالفي") ||
    upper.includes("SPAIN") || upper.includes("BARCELONA") || upper.includes("MADRID") || upper.includes("إسبانيا") || upper.includes("برشلونة") || upper.includes("مدريد") ||
    upper.includes("PORTUGAL") || upper.includes("LISBON") || upper.includes("البرتغال") || upper.includes("لشبونة") ||
    upper.includes("CZECH") || upper.includes("PRAGUE") || upper.includes("التشيك") || upper.includes("براغ") ||
    upper.includes("SLOVAKIA") || upper.includes("BRATISLAVA") || upper.includes("سلوفاكيا") || upper.includes("براتيسلافا") ||
    upper.includes("HUNGARY") || upper.includes("BUDAPEST") || upper.includes("المجر") || upper.includes("بودابست") ||
    upper.includes("EUROPE") || upper.includes("أوروبا") || upper.includes("اوروبا")
  ) {
    return "EUR";
  }

  return "USD";
}

export function convertCurrency(amount: number, from: string, to: string, customRates?: Record<string, number>): number {
  const rates = customRates || DEFAULT_RATES;
  const rateFrom = rates[from] || 1.0;
  const rateTo = rates[to] || 1.0;
  
  const amountInUSD = amount / rateFrom;
  return amountInUSD * rateTo;
}

export function formatCostWithLocalAndUSD(costStr: string, destination: string, customRates?: Record<string, number>): string {
  if (!costStr) return costStr;
  
  const parsed = parseCostAmount(costStr);
  const localCurrency = getLocalCurrencyForDestination(destination);
  
  if (isNaN(parsed.amount) || parsed.amount <= 0) {
    return costStr;
  }
  
  const rates = customRates || DEFAULT_RATES;
  
  const localAmount = convertCurrency(parsed.amount, parsed.detectedCurrency, localCurrency, rates);
  const usdAmount = convertCurrency(parsed.amount, parsed.detectedCurrency, "USD", rates);
  
  const localInfo = CURRENCY_LIST.find(c => c.code === localCurrency) || { code: localCurrency, symbol: localCurrency, nameAr: localCurrency, nameEn: localCurrency };
  
  const formattedLocal = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 }).format(localAmount);
  const formattedUsd = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(usdAmount);
  
  let suffix = "";
  // Safe replacement of currency symbols and codes using exact word boundaries or specific characters to avoid stripping individual letters of Arabic words
  const cleanCostStr = costStr.replace(/(USD|OMR|GBP|EUR|SAR|AED|QAR|BHD|KWD|TRY|EGP|JPY|IDR|[$,€,£,₺,¥]|Rp|د\.ك|ر\.س|د\.إ|ر\.ق|د\.ب|ر\.ع)/gi, "").trim();
  const matches = cleanCostStr.match(/\d+(\.\d+)?(.*)/);
  if (matches && matches[2] && matches[2].trim().length > 1) {
    suffix = " " + matches[2].trim();
    // Clean up currency-related words from the suffix to avoid duplicates in the formatted output
    suffix = suffix.replace(/(USD|OMR|GBP|EUR|SAR|AED|QAR|BHD|KWD|TRY|EGP|JPY|IDR|دولار|ريال|درهم|دينار|ليرة|يورو|جنيه|إسترليني|استرليني|أمريكي|عماني|سعودي|إماراتي|قطري|بحريني|كويتي|تركي|مصري|ياباني|اندونيسي|إندونيسيا)/gi, "").trim();
    if (suffix) {
      suffix = " " + suffix;
    }
  }
  
  if (localCurrency === "USD") {
    return `$${formattedUsd} USD${suffix}`;
  }
  
  return `${formattedLocal} ${localInfo.symbol} (${localInfo.code}) ≈ $${formattedUsd} USD${suffix}`;
}

export function parseCostAmount(costStr: string): { amount: number; detectedCurrency: string } {
  if (!costStr) return { amount: 100, detectedCurrency: "USD" };
  
  // Strip commas
  const sanitized = costStr.replace(/,/g, "");
  
  // Try to find numbers
  const numberMatch = sanitized.match(/\d+(\.\d+)?/);
  const amount = numberMatch ? parseFloat(numberMatch[0]) : 100;
  
  // Detect currency
  let detectedCurrency = "USD";
  const upper = costStr.toUpperCase();
  
  // Generic 3-letter currency matching
  const codeMatch = upper.match(/[A-Z]{3}/);
  if (codeMatch && ["USD", "AED", "SAR", "GBP", "EUR", "TRY", "EGP", "JPY", "IDR", "KWD", "BHD", "OMR", "QAR"].includes(codeMatch[0])) {
    detectedCurrency = codeMatch[0];
  } else if (upper.includes("KWD") || upper.includes("د.ك") || upper.includes("KWAIT") || upper.includes("كويت")) {
    detectedCurrency = "KWD";
  } else if (upper.includes("SAR") || upper.includes("ر.س") || upper.includes("سعودي")) {
    detectedCurrency = "SAR";
  } else if (upper.includes("AED") || upper.includes("د.إ") || upper.includes("إماراتي") || upper.includes("امارات")) {
    detectedCurrency = "AED";
  } else if (upper.includes("QAR") || upper.includes("ر.ق") || upper.includes("قطر")) {
    detectedCurrency = "QAR";
  } else if (upper.includes("BHD") || upper.includes("د.ب") || upper.includes("بحرين")) {
    detectedCurrency = "BHD";
  } else if (upper.includes("OMR") || upper.includes("ر.ع") || upper.includes("عمان")) {
    detectedCurrency = "OMR";
  } else if (upper.includes("EUR") || upper.includes("€") || upper.includes("يورو")) {
    detectedCurrency = "EUR";
  } else if (upper.includes("GBP") || upper.includes("£") || upper.includes("استرليني") || upper.includes("إسترليني")) {
    detectedCurrency = "GBP";
  } else if (upper.includes("TRY") || upper.includes("₺") || upper.includes("ليرة") || upper.includes("تركيا")) {
    detectedCurrency = "TRY";
  } else if (upper.includes("EGP") || upper.includes("ج.م") || upper.includes("مصر")) {
    detectedCurrency = "EGP";
  } else if (upper.includes("JPY") || upper.includes("¥") || upper.includes("ين") || upper.includes("ياباني")) {
    detectedCurrency = "JPY";
  } else if (upper.includes("IDR") || upper.includes("RP") || upper.includes("روبية") || upper.includes("اندونيسيا") || upper.includes("إندونيسيا")) {
    detectedCurrency = "IDR";
  }
  
  return { amount, detectedCurrency };
}

export default function App() {
  // Navigation & Language States
  const [lang, setLang] = useState<"en" | "ar">("ar"); // default to Arabic for GCC/Middle East focus
  const [activeTab, setActiveTab] = useState<"ai-tools" | "travel-guides" | "shop" | "affiliates" | "blog" | "about">("ai-tools");

  // AI Trip Generator form state
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("5");
  const [budgetType, setBudgetType] = useState("moderate");
  const [budget, setBudget] = useState("ميزانية متوسطة");
  const [travelStyle, setTravelStyle] = useState("استكشاف ومعالم / Sightseeing");
  const [travelStyleEn, setTravelStyleEn] = useState("Sightseeing");
  const [travelersType, setTravelersType] = useState("زوجين / شخصين");
  const [aiEngine, setAiEngine] = useState<"free" | "gemini">("gemini");
  
  // AI Trip Generator Result & Status
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<TravelPlan | null>(() => {
    try {
      const saved = localStorage.getItem("roamiq_last_generated_plan");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [errorPlan, setErrorPlan] = useState<string | null>(null);

  // Translate preset budget names on language or preset change
  useEffect(() => {
    if (budgetType === "economy") {
      setBudget(lang === "ar" ? "ميزانية اقتصادية" : "Economy Budget");
    } else if (budgetType === "moderate") {
      setBudget(lang === "ar" ? "ميزانية متوسطة" : "Moderate Budget");
    } else if (budgetType === "luxury") {
      setBudget(lang === "ar" ? "ميزانية فاخرة VIP" : "Luxury VIP Budget");
    }
  }, [lang, budgetType]);

  // Offline status tracking states
  const [isOnline, setIsOnline] = useState<boolean>(typeof navigator !== "undefined" ? navigator.onLine : true);
  const [isCachedForOffline, setIsCachedForOffline] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);
      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);
      return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }
  }, []);

  useEffect(() => {
    try {
      if (generatedPlan) {
        localStorage.setItem("roamiq_last_generated_plan", JSON.stringify(generatedPlan));
        setIsCachedForOffline(true);
      } else {
        localStorage.removeItem("roamiq_last_generated_plan");
        setIsCachedForOffline(false);
      }
    } catch (e) {
      console.error(e);
    }
  }, [generatedPlan]);

  // Rated Generated Plans state (persisted to localStorage)
  const [ratedPlans, setRatedPlans] = useState<RatedPlan[]>(() => {
    try {
      const saved = localStorage.getItem("roamiq_rated_plans");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const getPlanRating = (plan: TravelPlan | null): number => {
    if (!plan) return 0;
    const match = ratedPlans.find(
      (p) => p.plan.destination === plan.destination && p.plan.duration === plan.duration
    );
    return match ? match.rating : 0;
  };

  const handleRatePlan = (rating: number) => {
    if (!generatedPlan) return;
    
    setRatedPlans((prev) => {
      const existingIdx = prev.findIndex(
        (p) => p.plan.destination === generatedPlan.destination && p.plan.duration === generatedPlan.duration
      );
      
      let updated;
      if (existingIdx > -1) {
        updated = [...prev];
        updated[existingIdx] = {
          ...updated[existingIdx],
          rating,
          timestamp: Date.now()
        };
      } else {
        updated = [
          ...prev,
          {
            id: `plan-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
            plan: generatedPlan,
            rating,
            timestamp: Date.now()
          }
        ];
      }
      
      try {
        localStorage.setItem("roamiq_rated_plans", JSON.stringify(updated));
      } catch (err) {
        console.error("Failed to save rated plans to localStorage", err);
      }
      return updated;
    });
  };

  const handleLoadRatedPlan = (plan: TravelPlan) => {
    setGeneratedPlan(plan);
    setActiveTab("ai-tools"); // switch to the AI generator tab
    setActiveDayIndex(0); // reset active day view
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Active Day index for generated itinerary visualization
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [planViewTab, setPlanViewTab] = useState<"itinerary" | "budget" | "checklist">("itinerary");

  // Travel Assistant Tools States
  const [activeAssistantTool, setActiveAssistantTool] = useState<"budget-calculator" | "photo-spots" | "currency-converter">("budget-calculator");
  const [assistantInput, setAssistantInput] = useState("");
  const [isAssistantLoading, setIsAssistantLoading] = useState(false);
  const [budgetResult, setBudgetResult] = useState<BudgetCalculatorResult | null>(null);
  const [photoResult, setPhotoResult] = useState<PhotoSpotResult | null>(null);
  const [errorAssistant, setErrorAssistant] = useState<string | null>(null);

  // Currency Converter States
  const [convAmount, setConvAmount] = useState<number>(100);
  const [convFrom, setConvFrom] = useState<string>("USD");
  const [convTo, setConvTo] = useState<string>("SAR");
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>(DEFAULT_RATES);
  const [ratesLoading, setRatesLoading] = useState<boolean>(false);
  const [ratesLastUpdated, setRatesLastUpdated] = useState<string | null>(null);

  // Fetch live exchange rates
  useEffect(() => {
    let active = true;
    const fetchRates = async () => {
      setRatesLoading(true);
      try {
        const res = await fetch("https://open.er-api.com/v6/latest/USD");
        if (res.ok && active) {
          const data = await res.json();
          if (data && data.rates) {
            // merge with DEFAULT_RATES to preserve everything
            const merged = { ...DEFAULT_RATES, ...data.rates };
            setExchangeRates(merged);
            const now = new Date();
            setRatesLastUpdated(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
          }
        }
      } catch (err) {
        console.error("Failed to fetch live exchange rates, using offline defaults:", err);
      } finally {
        if (active) setRatesLoading(false);
      }
    };
    fetchRates();
    return () => { active = false; };
  }, []);

  // Pre-made guides reading modal / state
  const [selectedGuide, setSelectedGuide] = useState<PredefinedGuide | null>(null);
  const [readingProduct, setReadingProduct] = useState<Product | null>(null);
  const [unlockedGuideIds, setUnlockedGuideIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem("roamiq_unlocked_guides");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [purchasingGuide, setPurchasingGuide] = useState<PredefinedGuide | null>(null);
  const [isGuideCheckoutOpen, setIsGuideCheckoutOpen] = useState(false);

  // Digital Store: purchased items state
  const [unlockedProductIds, setUnlockedProductIds] = useState<string[]>([]);
  const [purchasingProduct, setPurchasingProduct] = useState<Product | null>(null);
  const [viewingProductDetail, setViewingProductDetail] = useState<Product | null>(null);
  const [isEsimModalOpen, setIsEsimModalOpen] = useState(false);
  const [isCarModalOpen, setIsCarModalOpen] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("paypal");
  const [subPaymentMethod, setSubPaymentMethod] = useState<"card" | "paypal">("paypal");
  const [paypalClientId, setPaypalClientId] = useState<string>("sb");
  const [paypalReady, setPaypalReady] = useState<boolean>(false);
  const [paypalSubMethod, setPaypalSubMethod] = useState<"account" | "guest-card">("account");
  const [paypalMode, setPaypalMode] = useState<"live" | "sandbox">("live");
  const [subPaypalMode, setSubPaypalMode] = useState<"live" | "sandbox">("live");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [paypalPassword, setPaypalPassword] = useState("");
  // Stripe modal simulation form
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [cardName, setCardName] = useState("");

  // Lifetime Premium subscription & Free trial states
  const [isPremium, setIsPremium] = useState<boolean>(() => {
    return localStorage.getItem("roamiq_is_premium") === "true";
  });
  const [remainingFreeUses, setRemainingFreeUses] = useState<number>(() => {
    const saved = localStorage.getItem("roamiq_free_uses_left");
    if (saved === null) return 3;
    return parseInt(saved) ?? 3;
  });
  const [remainingPlanUses, setRemainingPlanUses] = useState<number>(() => {
    const saved = localStorage.getItem("roamiq_plan_uses_left");
    if (saved === null) return 3;
    return parseInt(saved) ?? 3;
  });
  const [remainingBudgetUses, setRemainingBudgetUses] = useState<number>(() => {
    const saved = localStorage.getItem("roamiq_budget_uses_left");
    if (saved === null) return 3;
    return parseInt(saved) ?? 3;
  });
  const [remainingPhotoUses, setRemainingPhotoUses] = useState<number>(() => {
    const saved = localStorage.getItem("roamiq_photo_uses_left");
    if (saved === null) return 3;
    return parseInt(saved) ?? 3;
  });
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("roamiq_theme");
    return saved !== "light";
  });
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subCardNumber, setSubCardNumber] = useState("4242 •••• •••• 4242");
  const [subCardExpiry, setSubCardExpiry] = useState("12/28");
  const [subCardCvc, setSubCardCvc] = useState("448");
  const [subCardName, setSubCardName] = useState("MOHAMMAD AL-MUTAIRI");
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

  // Quick Copy notifications
  const [copiedTextId, setCopiedTextId] = useState<string | null>(null);

  // Simulated live counters
  const [liveUsers, setLiveUsers] = useState(12492);

  // === CONVERSION OPTIMIZATION (CRO) STATES ===
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [exitIntentShown, setExitIntentShown] = useState(true); // set to true to prevent triggering
  const [hasExitDiscount, setHasExitDiscount] = useState(false); // completely disabled
  const [exitDiscountTimer, setExitDiscountTimer] = useState<number>(600);

  const [specialOfferTimer, setSpecialOfferTimer] = useState<number>(() => {
    try {
      const saved = localStorage.getItem("roamiq_special_offer_timer");
      return saved ? parseInt(saved, 10) : 1800; // 30 minutes (1800 seconds)
    } catch {
      return 1800;
    }
  });

  // Bundle Upsell trigger
  const [upsellProduct, setUpsellProduct] = useState<Product | null>(null);

  // Social Proof recent purchase notification
  const [socialProofIndex, setSocialProofIndex] = useState(0);
  const [showSocialProof, setShowSocialProof] = useState(false);

  // Newsletter email
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Watermark details for secure PDF export
  const [watermarkName, setWatermarkName] = useState(() => {
    try {
      return localStorage.getItem("roamiq_watermark_name") || "";
    } catch {
      return "";
    }
  });

  const handleWatermarkNameChange = (val: string) => {
    setWatermarkName(val);
    try {
      localStorage.setItem("roamiq_watermark_name", val);
    } catch (e) {
      console.error(e);
    }
  };

  // Blog and FAQ tab helpers
  const [blogCategory, setBlogCategory] = useState<"all" | "hotels" | "budget" | "tips">("all");
  const [readingBlogArticle, setReadingBlogArticle] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Affiliates custom links
  const [customAffCode, setCustomAffCode] = useState("");
  const [affStats, setAffStats] = useState({
    clicks: 142,
    sales: 12,
    earnings: 215.90,
  });
  const [isCopiedAff, setIsCopiedAff] = useState(false);

  // === CRO TIMERS & TRIGGERS EFFECTS ===
  // 1. Exit Intent detector
  useEffect(() => {
    if (exitIntentShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse cursor leaves the browser window through the top (attempting to close/back out)
      if (e.clientY < 20) {
        setShowExitIntent(true);
        setExitIntentShown(true);
        try {
          localStorage.setItem("roamiq_exit_intent_shown", "true");
        } catch (err) {
          console.error(err);
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [exitIntentShown]);

  // 2. Exit Intent 10-Minute Discount timer ticking down
  useEffect(() => {
    if (!hasExitDiscount) return;

    const timer = setInterval(() => {
      setExitDiscountTimer(prev => {
        const next = prev > 0 ? prev - 1 : 0;
        try {
          localStorage.setItem("roamiq_exit_discount_timer", next.toString());
        } catch {}
        if (next === 0) {
          setHasExitDiscount(false);
          try {
            localStorage.removeItem("roamiq_exit_discount_applied");
          } catch {}
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hasExitDiscount]);

  // 3. Special Urgency 30-Minute Timer ticking down
  useEffect(() => {
    const timer = setInterval(() => {
      setSpecialOfferTimer(prev => {
        let next = prev > 0 ? prev - 1 : 1800; // Reset to 30 mins when it reaches 0 for perpetual high urgency!
        try {
          localStorage.setItem("roamiq_special_offer_timer", next.toString());
        } catch {}
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 4. Social Proof live notifications cycling loop
  useEffect(() => {
    // Show first toast after 4 seconds, then cycle every 18 seconds
    const initialTimeout = setTimeout(() => {
      setShowSocialProof(true);
    }, 4000);

    const interval = setInterval(() => {
      setShowSocialProof(false);
      // Change index to show a new buyer next time
      setTimeout(() => {
        setSocialProofIndex(prev => (prev + 1) % 6);
        setShowSocialProof(true);
      }, 800); // Small transition delay before opening next
    }, 18000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    // Simulate changing active users to make it feel extremely interactive and real
    const interval = setInterval(() => {
      setLiveUsers(prev => prev + Math.floor(Math.random() * 9) - 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Fetch PayPal Config and Load SDK Dynamically
  useEffect(() => {
    fetch("/api/config")
      .then(res => res.json())
      .then(data => {
        if (data.paypalClientId) {
          setPaypalClientId(data.paypalClientId);
        }
      })
      .catch(err => {
        console.error("Failed to fetch PayPal config:", err);
      });
  }, []);

  useEffect(() => {
    if (!paypalClientId) return;
    const existingScript = document.getElementById("paypal-sdk-script");
    if (existingScript) return;

    const script = document.createElement("script");
    script.id = "paypal-sdk-script";
    script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}&currency=USD&components=buttons`;
    script.async = true;
    script.onload = () => {
      setPaypalReady(true);
    };
    script.onerror = () => {
      console.error("PayPal SDK failed to load.");
    };
    document.body.appendChild(script);
  }, [paypalClientId]);

  // Render PayPal buttons for purchasing product
  useEffect(() => {
    if (paymentMethod === "paypal" && paypalReady && purchasingProduct && !paymentSuccess) {
      const container = document.getElementById("paypal-button-container");
      if (container) {
        container.innerHTML = "";
        const paypalWindow = window as any;
        if (paypalWindow.paypal) {
          paypalWindow.paypal.Buttons({
            style: {
              layout: 'vertical',
              color:  'gold',
              shape:  'rect',
              label:  'paypal'
            },
            createOrder: (data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: getProductPrice(purchasingProduct.price).toFixed(2)
                  },
                  description: purchasingProduct.name
                }]
              });
            },
            onApprove: (data: any, actions: any) => {
              return actions.order.capture().then((details: any) => {
                setPaymentSuccess(true);
                setUnlockedProductIds(prev => [...prev, purchasingProduct.id]);
                if (purchasingProduct.id === "prod-ultimate-bundle" || purchasingProduct.id === "bundle-starter") {
                  const allIds = PREDEFINED_PRODUCTS.map(p => p.id);
                  setUnlockedProductIds(prev => Array.from(new Set([...prev, "prod-ultimate-bundle", "bundle-starter", ...allIds])));
                }
              });
            },
            onError: (err: any) => {
              console.error("PayPal product checkout error:", err);
            }
          }).render("#paypal-button-container");
        }
      }
    }
  }, [paymentMethod, paypalReady, purchasingProduct, paymentSuccess]);

  // Render PayPal buttons for VIP Subscription
  useEffect(() => {
    if (subPaymentMethod === "paypal" && paypalReady && showSubscriptionModal && !subscriptionSuccess) {
      const container = document.getElementById("paypal-sub-button-container");
      if (container) {
        container.innerHTML = "";
        const paypalWindow = window as any;
        if (paypalWindow.paypal) {
          paypalWindow.paypal.Buttons({
            style: {
              layout: 'vertical',
              color:  'gold',
              shape:  'rect',
              label:  'paypal'
            },
            createOrder: (data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: "29.99"
                  },
                  description: lang === "ar" ? "اشتراك ذهبي مدى الحياة في Tripza AI" : "Tripza AI Lifetime VIP Gold Subscription"
                }]
              });
            },
            onApprove: (data: any, actions: any) => {
              return actions.order.capture().then((details: any) => {
                setSubscriptionSuccess(true);
                setIsPremium(true);
                localStorage.setItem("roamiq_is_premium", "true");
              });
            },
            onError: (err: any) => {
              console.error("PayPal VIP subscription checkout error:", err);
            }
          }).render("#paypal-sub-button-container");
        }
      }
    }
  }, [subPaymentMethod, paypalReady, showSubscriptionModal, subscriptionSuccess, lang]);

  // Render PayPal buttons for purchasing predefined guide
  useEffect(() => {
    if (paypalReady && purchasingGuide && isGuideCheckoutOpen) {
      const container = document.getElementById("paypal-guide-button-container");
      if (container) {
        container.innerHTML = "";
        const paypalWindow = window as any;
        if (paypalWindow.paypal) {
          paypalWindow.paypal.Buttons({
            style: {
              layout: 'vertical',
              color:  'gold',
              shape:  'rect',
              label:  'paypal'
            },
            createOrder: (data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: "4.99"
                  },
                  description: lang === "ar" ? `شراء الدليل السياحي: ${purchasingGuide.titleAr}` : `Purchase Travel Guide: ${purchasingGuide.title}`
                }]
              });
            },
            onApprove: (data: any, actions: any) => {
              return actions.order.capture().then((details: any) => {
                setUnlockedGuideIds((prev) => {
                  const updated = [...prev, purchasingGuide.id];
                  localStorage.setItem("roamiq_unlocked_guides", JSON.stringify(updated));
                  return updated;
                });
                setIsGuideCheckoutOpen(false);
                setPurchasingGuide(null);
              });
            },
            onError: (err: any) => {
              console.error("PayPal guide checkout error:", err);
            }
          }).render("#paypal-guide-button-container");
        }
      }
    }
  }, [paypalReady, purchasingGuide, isGuideCheckoutOpen, lang]);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTextId(id);
    setTimeout(() => setCopiedTextId(null), 2000);
  };

  const handleGoHome = () => {
    setActiveTab("ai-tools");
    setSelectedGuide(null);
    setReadingProduct(null);
    setViewingProductDetail(null);
    setReadingBlogArticle(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Launch pre-made searches on Google Maps directly in new tab!
  const handleGoogleMapsSearch = (query: string) => {
    const encoded = encodeURIComponent(query);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encoded}`, "_blank");
  };

  // Generate and download the travel plan as a beautifully styled, interactive HTML document with secure watermark licensing
  const handleDownloadPDF = () => {
    if (!generatedPlan) return;

    const isAr = lang === "ar";
    
    // Watermark Owner & Trip ID preparation
    const ownerName = watermarkName.trim() || (isAr ? "مستكشف بريميوم" : "Premium Explorer");
    let destSum = 0;
    const destStr = generatedPlan.destination || "";
    for (let i = 0; i < destStr.length; i++) {
      destSum += destStr.charCodeAt(i);
    }
    const hash = destSum + generatedPlan.duration;
    const tripId = `TRP-ITN-${hash.toString(36).toUpperCase()}-${Math.floor(Math.random() * 900 + 100)}`;
    const watermarkText = isAr 
      ? `Tripza.store بريميوم • مرخص لـ: ${ownerName} • معرف الرحلة: ${tripId}`
      : `Tripza.store Premium • Licensed to: ${ownerName} • Trip ID: ${tripId}`;

    // UTF-8 Base64 SVG Generator for repeating backgrounds
    const svgString = `<svg width="550" height="550" xmlns="http://www.w3.org/2000/svg">
      <text x="275" y="275" fill="rgba(15, 23, 42, 0.04)" font-size="12" font-weight="bold" font-family="Cairo, Inter, system-ui, sans-serif" text-anchor="middle" transform="rotate(-30, 275, 275)">
        ${watermarkText}
      </text>
    </svg>`;
    const svgBase64 = btoa(unescape(encodeURIComponent(svgString)));
    const watermarkBg = `data:image/svg+xml;base64,${svgBase64}`;

    // Build highly polished HTML document for offline keeping & easy printing
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="${isAr ? "ar" : "en"}" dir="${isAr ? "rtl" : "ltr"}">
      <head>
        <meta charset="UTF-8">
        <title>${generatedPlan.destination} - Travel Itinerary</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
        <style>
          @page {
            size: A4;
            margin: 20mm 15mm 20mm 15mm;
          }
          body {
            font-family: ${isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif"};
            color: #1e293b;
            background-color: #ffffff;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            position: relative;
          }
          /* Watermark background */
          body::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: -1;
            background-image: url("${watermarkBg}");
            background-repeat: repeat;
            pointer-events: none;
          }
          .utility-bar {
            background-color: #0f172a;
            color: #ffffff;
            padding: 14px 24px;
            font-family: ${isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif"};
            font-size: 13px;
            border-bottom: 3px solid #d97706;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          .utility-text {
            font-weight: 500;
          }
          .print-btn {
            background-color: #d97706;
            color: #ffffff;
            border: none;
            padding: 8px 18px;
            font-size: 12px;
            font-weight: 900;
            border-radius: 6px;
            cursor: pointer;
            font-family: inherit;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          .print-btn:hover {
            background-color: #b45309;
            transform: translateY(-1px);
          }
          .container {
            max-width: 900px;
            margin: 30px auto;
            padding: 0 20px;
          }
          .cover-card {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: #ffffff;
            padding: 35px;
            border-radius: 16px;
            margin-bottom: 30px;
            position: relative;
            border-bottom: 5px solid #d97706;
          }
          .cover-badge {
            display: inline-block;
            background-color: #d97706;
            color: #ffffff;
            font-size: 11px;
            font-weight: 900;
            text-transform: uppercase;
            padding: 4px 10px;
            border-radius: 6px;
            margin-bottom: 12px;
            letter-spacing: 1px;
          }
          .cover-title {
            font-family: ${isAr ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif"};
            font-size: 32px;
            font-weight: 900;
            margin: 0 0 10px 0;
            line-height: 1.2;
            letter-spacing: -0.5px;
          }
          .cover-meta {
            font-size: 14px;
            color: #94a3b8;
            margin: 0;
            display: flex;
            gap: 15px;
          }
          .cover-meta span {
            background-color: rgba(255, 255, 255, 0.08);
            padding: 3px 10px;
            border-radius: 6px;
          }
          .budget-box {
            position: absolute;
            top: 35px;
            ${isAr ? "left: 35px;" : "right: 35px;"}
            background-color: rgba(217, 119, 6, 0.15);
            border: 1px solid rgba(217, 119, 6, 0.3);
            padding: 12px 20px;
            border-radius: 12px;
            text-align: center;
          }
          .budget-label {
            font-size: 10px;
            color: #fbbf24;
            text-transform: uppercase;
            font-weight: bold;
            display: block;
            margin-bottom: 2px;
          }
          .budget-value {
            font-size: 18px;
            font-weight: 900;
            color: #ffffff;
          }
          .section-title {
            font-family: ${isAr ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif"};
            font-size: 18px;
            font-weight: 700;
            color: #0f172a;
            margin-top: 35px;
            margin-bottom: 15px;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 6px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .section-title span {
            color: #d97706;
          }
          .highlights-box {
            background-color: #f0fdf4;
            border: 1px solid #bbf7d0;
            padding: 16px 20px;
            border-radius: 8px;
            margin-bottom: 25px;
          }
          .highlights-title {
            font-weight: 700;
            color: #15803d;
            font-size: 14px;
            margin: 0 0 12px 0;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          .highlights-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
          }
          @media (min-width: 600px) {
            .highlights-grid {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
          .highlight-item {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            padding: 10px 14px;
            border-radius: 6px;
          }
          .highlight-label {
            font-size: 10px;
            font-weight: 800;
            color: #64748b;
            text-transform: uppercase;
            display: block;
            margin-bottom: 3px;
          }
          .highlight-value {
            font-size: 12px;
            font-weight: 600;
            color: #0f172a;
            margin: 0;
            line-height: 1.4;
          }
          .tips-list {
            background-color: #f8fafc;
            border-right: ${isAr ? "4px solid #d97706" : "none"};
            border-left: ${isAr ? "none" : "4px solid #d97706"};
            padding: 16px 20px;
            border-radius: 8px;
            margin-bottom: 25px;
          }
          .tips-list-title {
            font-weight: 700;
            color: #b45309;
            font-size: 14px;
            margin: 0 0 10px 0;
          }
          .tips-list ul {
            margin: 0;
            padding-left: ${isAr ? "0" : "20px"};
            padding-right: ${isAr ? "20px" : "0"};
            font-size: 13px;
            color: #334155;
          }
          .tips-list li {
            margin-bottom: 8px;
          }
          .hotels-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 30px;
          }
          .hotel-card {
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 15px;
            background-color: #ffffff;
            box-shadow: 0 1px 3px rgba(0,0,0,0.02);
          }
          .hotel-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 5px;
          }
          .hotel-name {
            font-weight: 700;
            font-size: 13px;
            color: #0f172a;
          }
          .hotel-price {
            font-size: 10px;
            background-color: #fef3c7;
            color: #b45309;
            font-weight: 700;
            padding: 2px 8px;
            border-radius: 4px;
          }
          .hotel-area {
            font-size: 11px;
            color: #64748b;
            margin-bottom: 8px;
          }
          .hotel-why {
            font-size: 11px;
            color: #475569;
            font-style: italic;
            margin: 0;
          }
          .day-container {
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            margin-bottom: 25px;
            overflow: hidden;
            page-break-inside: avoid;
            box-shadow: 0 2px 4px rgba(0,0,0,0.02);
          }
          .day-header {
            background-color: #0f172a;
            color: #ffffff;
            padding: 12px 20px;
            font-weight: 700;
            font-size: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .day-title {
            font-family: ${isAr ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif"};
          }
          .day-count {
            font-size: 11px;
            background-color: rgba(255, 255, 255, 0.15);
            padding: 2px 8px;
            border-radius: 4px;
          }
          .activities-list {
            background-color: #ffffff;
            padding: 10px 20px;
          }
          .activity-card {
            display: flex;
            gap: 20px;
            border-bottom: 1px solid #f1f5f9;
            padding: 15px 0;
          }
          .activity-card:last-child {
            border-bottom: none;
          }
          .activity-time-col {
            min-width: 80px;
            font-weight: 700;
            font-size: 12px;
            color: #d97706;
            text-transform: uppercase;
            padding-top: 2px;
          }
          .activity-main-col {
            flex: 1;
          }
          .activity-top-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 4px;
          }
          .activity-title {
            font-weight: 700;
            font-size: 13px;
            color: #0f172a;
          }
          .activity-cost {
            font-size: 11px;
            color: #475569;
            font-weight: 700;
            background-color: #f1f5f9;
            padding: 2px 6px;
            border-radius: 4px;
          }
          .activity-desc {
            font-size: 12px;
            color: #475569;
            margin: 0;
          }
          .footer {
            margin-top: 50px;
            border-top: 1px solid #e2e8f0;
            padding-top: 20px;
            text-align: center;
            font-size: 11px;
            color: #94a3b8;
          }
          @media print {
            .no-print {
              display: none !important;
            }
            body {
              padding: 0;
            }
            .container {
              max-width: 100%;
              margin: 0;
              padding: 0;
            }
            .cover-card {
              border-radius: 0;
              margin-bottom: 20px;
            }
            .day-container {
              page-break-inside: avoid;
            }
          }
        </style>
      </head>
      <body>
        <div class="no-print utility-bar">
          <span class="utility-text">
            ✨ <strong>Tripza.store AI Travel Hub</strong> — ${
              isAr
                ? "يمكنك حفظ هذا الملف كـ PDF أو طباعته مباشرة بلمسة واحدة."
                : "You can save this file as PDF or print it directly with one click."
            }
          </span>
          <button class="print-btn" onclick="window.print()">
            🖨️ ${isAr ? "طباعة / حفظ كـ PDF" : "Print / Save as PDF"}
          </button>
        </div>

        <div class="container">
          <!-- Cover Header Card -->
          <div class="cover-card">
            <span class="cover-badge">${isAr ? "خطة سياحية معتمدة وجاهزة" : "Certified Premium Itinerary"}</span>
            <h1 class="cover-title">${generatedPlan.destination}</h1>
            <div class="cover-meta">
              <span>⏱️ ${generatedPlan.duration} ${isAr ? "أيام كاملة" : "Full Days"}</span>
              <span>🌍 ${isAr ? "تخطيط ذكي مخصص" : "Tailored Smart Plan"}</span>
            </div>
            <div class="budget-box">
              <span class="budget-label">${isAr ? "إجمالي التكلفة التقديرية" : "Total Estimated Cost"}</span>
              <span class="budget-value">${formatCostWithLocalAndUSD(generatedPlan.totalEstimatedCost, generatedPlan.destination)}</span>
            </div>
            <div style="margin-top: 20px; font-size: 11px; color: #cbd5e1; border-top: 1px solid rgba(255,255,255,0.15); padding-top: 12px; display: flex; justify-content: space-between; align-items: center;">
              <span>🛡️ ${isAr ? `نسخة بريميوم مرخصة لـ: <strong>${ownerName}</strong>` : `Premium Copy licensed to: <strong>${ownerName}</strong>`}</span>
              <span style="font-family: monospace; background: rgba(255, 255, 255, 0.1); padding: 2px 8px; border-radius: 4px;">ID: ${tripId}</span>
            </div>
          </div>

          <!-- Trip Highlights Box -->
          <div class="highlights-box">
            <h4 class="highlights-title">✨ ${isAr ? "ملخص ومعالم الرحلة الأساسية" : "Trip Essentials & Highlights"}</h4>
            <div class="highlights-grid">
              <div class="highlight-item">
                <span class="highlight-label">🌦️ ${isAr ? "المناخ والطقس" : "Climate & Weather"}</span>
                <p class="highlight-value">${generatedPlan.climate || (isAr ? "يختلف حسب الموسم؛ صيف معتدل، أمطار متوسطة، وشتاء لطيف بارد." : "Varies by season. Warm summers, moderate rainfall, and cool winters.")}</p>
              </div>
              <div class="highlight-item">
                <span class="highlight-label">📅 ${isAr ? "أفضل وقت للزيارة" : "Best Time to Visit"}</span>
                <p class="highlight-value">${generatedPlan.recommendedDates || (isAr ? "الربيع والخريف" : "Spring and Autumn")}</p>
              </div>
              <div class="highlight-item">
                <span class="highlight-label">🗣️ ${isAr ? "اللغة الأساسية" : "Primary Language"}</span>
                <p class="highlight-value">${generatedPlan.primaryLanguage || (isAr ? "اللغة المحلية للوجهة المحددة" : "Local Language of the Destination")}</p>
              </div>
            </div>
          </div>

          <!-- Smart Tips Box -->
          <div class="tips-list">
            <h4 class="tips-list-title">💡 ${isAr ? "نصائح وإرشادات هامة لهذه الوجهة" : "Crucial Insights & Practical Tips"}</h4>
            <ul>
              ${generatedPlan.travelTips?.map((tip) => `<li>${tip}</li>`).join("") || ""}
            </ul>
          </div>

          <!-- Stays List -->
          ${
            generatedPlan.recommendedHotels && generatedPlan.recommendedHotels.length > 0
              ? `
            <div class="section-title">
              <span>🏨</span> ${isAr ? "أماكن الإقامة والفنادق الموصى بها" : "Recommended Accommodations & Hotels"}
            </div>
            <div class="hotels-grid">
              ${generatedPlan.recommendedHotels
                .map(
                  (hotel) => `
                <div class="hotel-card">
                   <div class="hotel-header">
                     <span class="hotel-name">${hotel.name}</span>
                     <span class="hotel-price">${hotel.priceRange}</span>
                   </div>
                   <div class="hotel-area">📍 ${hotel.area}</div>
                   <p class="hotel-why">${hotel.whyChoose}</p>
                </div>
              `
                )
                .join("")}
            </div>
          `
              : ""
          }

          <!-- Itinerary Days Breakdown -->
          <div class="section-title">
            <span>📅</span> ${isAr ? "برنامج الترحال اليومي المفصل" : "Detailed Day-by-Day Experience"}
          </div>

          ${
            generatedPlan.itinerary
              ?.map(
                (day) => `
            <div class="day-container">
              <div class="day-header">
                <span class="day-title">${isAr ? `اليوم ${day.dayNumber}` : `Day ${day.dayNumber}`} • ${day.theme}</span>
                <span class="day-count">${day.activities?.length || 0} ${isAr ? "فعاليات" : "Activities"}</span>
              </div>
              <div class="activities-list">
                ${
                  day.activities
                    ?.map(
                      (act) => `
                  <div class="activity-card">
                    <div class="activity-time-col">${act.timeOfDay}</div>
                    <div class="activity-main-col">
                      <div class="activity-top-row">
                        <span class="activity-title">${act.title}</span>
                        <span class="activity-cost">${formatCostWithLocalAndUSD(act.estimatedCost, generatedPlan.destination)}</span>
                      </div>
                      <p class="activity-desc">${act.description}</p>
                    </div>
                  </div>
                `
                    )
                    .join("") || ""
                }
              </div>
            </div>
          `
              )
              .join("") || ""
          }

          <!-- Custom Branding Footer -->
          <div class="footer">
            <div style="font-weight: bold; margin-bottom: 4px;">
              ${
                isAr
                  ? "تم توليد وتصميم هذا الدليل الفاخر تلقائياً بمساعدة الذكاء الاصطناعي السحابي • جميع الحقوق محفوظة لـ Tripza.store"
                  : "This luxury document was automatically generated and custom styled via Cloud AI services • All Rights Reserved to Tripza.store"
              }
            </div>
            <div style="font-size: 10px; color: #94a3b8;">
              🔒 ${isAr ? `توزيع أو نقل غير مصرح به محظور تماماً بموجب شروط الملكية الفكرية • مرخص لـ: ${ownerName} (${tripId})` : `UNAUTHORIZED DISTRIBUTION PROHIBITED • LICENSED SECURELY TO: ${ownerName} (${tripId})`}
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const cleanDestination = generatedPlan.destination.replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, "_");
    link.download = `Tripza-${cleanDestination}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Generate and download the digital product as a beautifully styled, interactive HTML document
  const handleDownloadProductPDF = (prod: Product) => {
    if (!prod) return;

    const isAr = lang === "ar";
    const title = isAr ? prod.nameAr : prod.name;
    const desc = isAr ? prod.descriptionAr : prod.description;
    const contentText = isAr ? prod.contentAr || prod.content! : prod.content!;

    const formattedLines = contentText.split("\n").map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return '<div class="h-2"></div>';
      if (trimmed.startsWith("===") || trimmed.startsWith("---")) {
        return '<hr class="my-4 border-amber-500/20" />';
      }
      if (trimmed.toUpperCase() === trimmed && trimmed.length > 5 && !trimmed.startsWith("-") && !trimmed.startsWith("[ ]") && !trimmed.startsWith("[")) {
        return `<h4 class="text-lg font-black text-amber-600 mt-6 mb-2 uppercase" style="font-family: 'Space Grotesk', sans-serif;">${line}</h4>`;
      }
      if (trimmed.startsWith("DAY") || trimmed.startsWith("Day") || trimmed.startsWith("اليوم")) {
        return `
          <div class="day-badge" style="background-color: #fef3c7; border: 1px solid #fde68a; padding: 8px 15px; border-radius: 8px; margin: 15px 0;">
            <span class="font-bold" style="color: #b45309;">${line}</span>
          </div>
        `;
      }
      if (trimmed.startsWith("-") || trimmed.startsWith("[ ]") || trimmed.startsWith("[x]")) {
        const contentVal = trimmed.replace(/^-\s*/, "").replace(/^\[\s*\]\s*/, "").replace(/^\[x\]\s*/, "");
        return `
          <div class="flex items-start gap-2 my-1" style="display: flex; align-items: flex-start; gap: 8px; margin-top: 4px; margin-bottom: 4px;">
            <span class="text-amber-600" style="color: #d97706;">•</span>
            <span class="text-slate-700 text-sm" style="color: #334155; font-size: 14px;">${contentVal}</span>
          </div>
        `;
      }
      if (trimmed.includes(":")) {
        const parts = line.split(":");
        const label = parts[0];
        const val = parts.slice(1).join(":");
        return `
          <div class="pl-2" style="padding-left: 8px; border-left: 2px solid #fbbf24; margin-top: 4px; margin-bottom: 4px; border-right: ${isAr ? "2px solid #fbbf24" : "none"}; border-left: ${isAr ? "none" : "2px solid #fbbf24"};">
            <span class="font-bold text-slate-800 text-sm" style="font-weight: 700; color: #1e293b; font-size: 14px;">${label}:</span>
            <span class="text-slate-600 text-sm" style="color: #475569; font-size: 14px;">${val}</span>
          </div>
        `;
      }
      return `<p class="text-slate-600 text-sm pl-2" style="color: #475569; font-size: 14px; margin: 4px 0; padding-left: 8px;">${line}</p>`;
    }).join("");

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="${isAr ? "ar" : "en"}" dir="${isAr ? "rtl" : "ltr"}">
      <head>
        <meta charset="UTF-8">
        <title>${title} - Premium Document</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
        <style>
          @page {
            size: A4;
            margin: 20mm 15mm 20mm 15mm;
          }
          body {
            font-family: ${isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif"};
            color: #1e293b;
            background-color: #ffffff;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .utility-bar {
            background-color: #0f172a;
            color: #ffffff;
            padding: 14px 24px;
            font-family: ${isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif"};
            font-size: 13px;
            border-bottom: 3px solid #d97706;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          .utility-text {
            font-weight: 500;
          }
          .print-btn {
            background-color: #d97706;
            color: #ffffff;
            border: none;
            padding: 8px 18px;
            font-size: 12px;
            font-weight: 900;
            border-radius: 6px;
            cursor: pointer;
            font-family: inherit;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          .print-btn:hover {
            background-color: #b45309;
            transform: translateY(-1px);
          }
          .container {
            max-width: 900px;
            margin: 30px auto;
            padding: 0 20px;
          }
          .cover-card {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: #ffffff;
            padding: 35px;
            border-radius: 16px;
            margin-bottom: 30px;
            position: relative;
            border-bottom: 5px solid #d97706;
          }
          .cover-badge {
            display: inline-block;
            background-color: #d97706;
            color: #ffffff;
            font-size: 11px;
            font-weight: 900;
            text-transform: uppercase;
            padding: 4px 10px;
            border-radius: 6px;
            margin-bottom: 12px;
            letter-spacing: 1px;
          }
          .cover-title {
            font-family: ${isAr ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif"};
            font-size: 28px;
            font-weight: 900;
            margin: 0 0 10px 0;
            line-height: 1.2;
          }
          .cover-desc {
            font-size: 13px;
            color: #cbd5e1;
            margin: 0;
            max-width: 80%;
          }
          .stamp-box {
            position: absolute;
            top: 35px;
            ${isAr ? "left: 35px;" : "right: 35px;"}
            border: 3px dashed rgba(217, 119, 6, 0.4);
            color: #d97706;
            padding: 8px 15px;
            border-radius: 8px;
            text-align: center;
            font-size: 11px;
            font-weight: 900;
            transform: rotate(-5deg);
          }
          .document-content {
            margin-top: 20px;
            background-color: #ffffff;
            padding: 10px 0;
          }
          .footer {
            margin-top: 50px;
            border-top: 1px solid #e2e8f0;
            padding-top: 20px;
            text-align: center;
            font-size: 11px;
            color: #94a3b8;
          }
          @media print {
            .no-print {
              display: none !important;
            }
            body {
              padding: 0;
            }
            .container {
              max-width: 100%;
              margin: 0;
              padding: 0;
            }
            .cover-card {
              border-radius: 0;
              margin-bottom: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="no-print utility-bar">
          <span class="utility-text">
            ✨ <strong>Tripza AI Premium Store</strong> — ${
              isAr
                ? "يمكنك حفظ هذا المستند كـ PDF أو طباعته مباشرة بلمسة واحدة."
                : "You can save this document as PDF or print it directly with one click."
            }
          </span>
          <button class="print-btn" onclick="window.print()">
            🖨️ ${isAr ? "طباعة / حفظ كـ PDF" : "Print / Save as PDF"}
          </button>
        </div>

        <div class="container">
          <div class="cover-card">
            <span class="cover-badge">${isAr ? "دليل رقمي فاخر معتمد" : "VIP CERTIFIED PREMIUM DOCUMENT"}</span>
            <h1 class="cover-title">${title}</h1>
            <p class="cover-desc">${desc}</p>
            <div class="stamp-box">
              <span>${isAr ? "مرخص للاستخدام الشخصي" : "LICENSED TO USER"}</span>
            </div>
          </div>

          <div class="document-content">
            ${formattedLines}
          </div>

          <div class="footer">
            ${
              isAr
                ? "تم توليد وتصميم هذا المستند الفاخر تلقائياً بمساعدة الذكاء الاصطناعي السحابي • جميع الحقوق محفوظة لـ Tripza AI Suite"
                : "This premium document was automatically generated and custom styled via Cloud AI services • All Rights Reserved to Tripza AI Suite"
            }
          </div>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Tripza-${prod.id}-${isAr ? "ar" : "en"}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Download raw digital product text / markdown file for offline keeping
  const handleDownloadProductText = (prod: Product) => {
    if (!prod) return;
    const isAr = lang === "ar";
    const title = isAr ? prod.nameAr : prod.name;
    const desc = isAr ? prod.descriptionAr : prod.description;
    const contentText = isAr ? prod.contentAr || prod.content! : prod.content!;

    const fileContent = `${title.toUpperCase()}
==================================================
Description: ${desc}
==================================================

${contentText}

--------------------------------------------------
Generated via Tripza AI Suite Premium Digital Store.
`;

    const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${prod.id}-${isAr ? "ar" : "en"}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Generate and download recommended guide as beautifully styled, print-ready HTML
  const handleDownloadGuideHTML = (guide: PredefinedGuide) => {
    if (!guide) return;
    const isAr = lang === "ar";
    const title = isAr ? guide.titleAr : guide.title;
    const dest = isAr ? guide.destinationAr : guide.destination;
    const contentText = isAr ? guide.contentAr : guide.content;
    const budgetText = isAr ? guide.budgetAr : guide.budget;

    const formattedLines = contentText.split("\n").map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return '<div class="h-2"></div>';
      if (trimmed.startsWith("===") || trimmed.startsWith("---")) {
        return '<hr class="my-4 border-amber-500/20" />';
      }
      if (trimmed.toUpperCase() === trimmed && trimmed.length > 5 && !trimmed.startsWith("-") && !trimmed.startsWith("[ ]") && !trimmed.startsWith("[")) {
        return `<h4 class="text-lg font-black text-amber-600 mt-6 mb-2 uppercase" style="font-family: 'Space Grotesk', sans-serif;">${line}</h4>`;
      }
      if (trimmed.startsWith("DAY") || trimmed.startsWith("Day") || trimmed.startsWith("اليوم")) {
        return `
          <div class="day-badge" style="background-color: #fef3c7; border: 1px solid #fde68a; padding: 8px 15px; border-radius: 8px; margin: 15px 0;">
            <span class="font-bold" style="color: #b45309;">${line}</span>
          </div>
        `;
      }
      if (trimmed.startsWith("-") || trimmed.startsWith("[ ]") || trimmed.startsWith("[x]")) {
        const contentVal = trimmed.replace(/^-\s*/, "").replace(/^\[\s*\]\s*/, "").replace(/^\[x\]\s*/, "");
        return `
          <div class="flex items-start gap-2 my-1" style="display: flex; align-items: flex-start; gap: 8px; margin-top: 4px; margin-bottom: 4px;">
            <span class="text-amber-600" style="color: #d97706;">•</span>
            <span class="text-slate-700 text-sm" style="color: #334155; font-size: 14px;">${contentVal}</span>
          </div>
        `;
      }
      if (trimmed.includes(":")) {
        const parts = line.split(":");
        const label = parts[0];
        const val = parts.slice(1).join(":");
        return `
          <div class="pl-2" style="padding-left: 8px; border-left: 2px solid #fbbf24; margin-top: 4px; margin-bottom: 4px; border-right: ${isAr ? "2px solid #fbbf24" : "none"}; border-left: ${isAr ? "none" : "2px solid #fbbf24"};">
            <span class="font-bold text-slate-800 text-sm" style="font-weight: 700; color: #1e293b; font-size: 14px;">${label}:</span>
            <span class="text-slate-600 text-sm" style="color: #475569; font-size: 14px;">${val}</span>
          </div>
        `;
      }
      return `<p class="text-slate-600 text-sm pl-2" style="color: #475569; font-size: 14px; margin: 4px 0; padding-left: 8px;">${line}</p>`;
    }).join("");

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="${isAr ? "ar" : "en"}" dir="${isAr ? "rtl" : "ltr"}">
      <head>
        <meta charset="UTF-8">
        <title>${title}</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
        <style>
          @page {
            size: A4;
            margin: 20mm 15mm 20mm 15mm;
          }
          body {
            font-family: ${isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif"};
            color: #1e293b;
            background-color: #ffffff;
            line-height: 1.6;
            margin: 0;
            padding: 40px;
          }
          .header {
            border-bottom: 3px solid #d97706;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .title {
            font-size: 28px;
            font-weight: 900;
            color: #0f172a;
            margin: 0 0 10px 0;
          }
          .meta {
            font-size: 14px;
            color: #475569;
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
          }
          .meta-item {
            background-color: #f1f5f9;
            padding: 4px 12px;
            border-radius: 6px;
            font-weight: bold;
          }
          .content {
            margin-top: 20px;
          }
          .footer {
            margin-top: 50px;
            border-top: 1px solid #e2e8f0;
            padding-top: 20px;
            font-size: 11px;
            color: #94a3b8;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="title">${title}</h1>
          <div class="meta">
            <span class="meta-item">📍 ${dest}</span>
            <span class="meta-item">⏱️ ${guide.days} ${isAr ? "أيام" : "Days"}</span>
            <span class="meta-item">💰 ${budgetText}</span>
          </div>
        </div>
        <div class="content">
          ${formattedLines}
        </div>
        <div class="footer">
          ${isAr ? "تم تصدير هذا الدليل الفاخر تلقائياً عبر Tripza AI Suite" : "This premium document was automatically generated and custom styled via Tripza AI Suite"}
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const cleanTitle = title.replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, "_");
    link.download = `Tripza-${cleanTitle}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Directly export recommended guide to PDF via native print preview
  const handleDownloadGuidePDF = (guide: PredefinedGuide) => {
    if (!guide) return;
    const isAr = lang === "ar";
    const title = isAr ? guide.titleAr : guide.title;
    const dest = isAr ? guide.destinationAr : guide.destination;
    const contentText = isAr ? guide.contentAr : guide.content;
    const budgetText = isAr ? guide.budgetAr : guide.budget;

    const formattedLines = contentText.split("\n").map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return '<div class="h-2"></div>';
      if (trimmed.startsWith("===") || trimmed.startsWith("---")) {
        return '<hr class="my-4 border-amber-500/20" />';
      }
      if (trimmed.toUpperCase() === trimmed && trimmed.length > 5 && !trimmed.startsWith("-") && !trimmed.startsWith("[ ]") && !trimmed.startsWith("[")) {
        return `<h4 class="text-lg font-black text-amber-600 mt-6 mb-2 uppercase" style="font-family: 'Space Grotesk', sans-serif;">${line}</h4>`;
      }
      if (trimmed.startsWith("DAY") || trimmed.startsWith("Day") || trimmed.startsWith("اليوم")) {
        return `
          <div class="day-badge" style="background-color: #fef3c7; border: 1px solid #fde68a; padding: 8px 15px; border-radius: 8px; margin: 15px 0;">
            <span class="font-bold" style="color: #b45309;">${line}</span>
          </div>
        `;
      }
      if (trimmed.startsWith("-") || trimmed.startsWith("[ ]") || trimmed.startsWith("[x]")) {
        const contentVal = trimmed.replace(/^-\s*/, "").replace(/^\[\s*\]\s*/, "").replace(/^\[x\]\s*/, "");
        return `
          <div class="flex items-start gap-2 my-1" style="display: flex; align-items: flex-start; gap: 8px; margin-top: 4px; margin-bottom: 4px;">
            <span class="text-amber-600" style="color: #d97706;">•</span>
            <span class="text-slate-700 text-sm" style="color: #334155; font-size: 14px;">${contentVal}</span>
          </div>
        `;
      }
      if (trimmed.includes(":")) {
        const parts = line.split(":");
        const label = parts[0];
        const val = parts.slice(1).join(":");
        return `
          <div class="pl-2" style="padding-left: 8px; border-left: 2px solid #fbbf24; margin-top: 4px; margin-bottom: 4px; border-right: ${isAr ? "2px solid #fbbf24" : "none"}; border-left: ${isAr ? "none" : "2px solid #fbbf24"};">
            <span class="font-bold text-slate-800 text-sm" style="font-weight: 700; color: #1e293b; font-size: 14px;">${label}:</span>
            <span class="text-slate-600 text-sm" style="color: #475569; font-size: 14px;">${val}</span>
          </div>
        `;
      }
      return `<p class="text-slate-600 text-sm pl-2" style="color: #475569; font-size: 14px; margin: 4px 0; padding-left: 8px;">${line}</p>`;
    }).join("");

    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert(isAr ? "يرجى السماح بالنوافذ المنبثقة لتصدير PDF" : "Please allow popups to export PDF");
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="${isAr ? "ar" : "en"}" dir="${isAr ? "rtl" : "ltr"}">
      <head>
        <meta charset="UTF-8">
        <title>${title}</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
        <style>
          @page {
            size: A4;
            margin: 20mm 15mm 20mm 15mm;
          }
          body {
            font-family: ${isAr ? "'Cairo', sans-serif" : "'Inter', sans-serif"};
            color: #1e293b;
            background-color: #ffffff;
            line-height: 1.6;
            margin: 0;
            padding: 40px;
          }
          .header {
            border-bottom: 3px solid #d97706;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .title {
            font-size: 28px;
            font-weight: 900;
            color: #0f172a;
            margin: 0 0 10px 0;
          }
          .meta {
            font-size: 14px;
            color: #475569;
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
          }
          .meta-item {
            background-color: #f1f5f9;
            padding: 4px 12px;
            border-radius: 6px;
            font-weight: bold;
          }
          .content {
            margin-top: 20px;
          }
          .footer {
            margin-top: 50px;
            border-top: 1px solid #e2e8f0;
            padding-top: 20px;
            font-size: 11px;
            color: #94a3b8;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="title">${title}</h1>
          <div class="meta">
            <span class="meta-item">📍 ${dest}</span>
            <span class="meta-item">⏱️ ${guide.days} ${isAr ? "أيام" : "Days"}</span>
            <span class="meta-item">💰 ${budgetText}</span>
          </div>
        </div>
        <div class="content">
          ${formattedLines}
        </div>
        <div class="footer">
          ${isAr ? "تم تصدير هذا الدليل الفاخر تلقائياً عبر Tripza AI Suite" : "This premium document was automatically generated and custom styled via Tripza AI Suite"}
        </div>
        <script>
          window.onload = function() {
            window.print();
            setTimeout(function() { window.close(); }, 1000);
          };
        </script>
      </body>
      </html>
    `);
    printWindow.document.close();
  };

  // 1. AI Trip Generator trigger
  const triggerGeneratePlan = async () => {
    if (!destination.trim()) {
      alert(lang === "ar" ? "الرجاء إدخال الوجهة السياحية أولاً!" : "Please enter a destination first!");
      return;
    }

    if (!isPremium && remainingPlanUses <= 0) {
      setShowSubscriptionModal(true);
      return;
    }

    setIsGenerating(true);
    setGeneratedPlan(null);
    setErrorPlan(null);

    try {
      const response = await fetch("/api/generate-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          destination,
          days: parseInt(days) || 5,
          budget,
          travelStyle,
          travelersType,
          language: lang,
          engine: aiEngine
        })
      });

      if (!response.ok) {
        throw new Error(lang === "ar" ? "فشل الاتصال بالخادم. يرجى التأكد من تشغيل الخادم والاتصال بالشبكة." : "Failed to connect to backend server. Please verify network or server status.");
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setGeneratedPlan(data);
      setActiveDayIndex(0);
      setPlanViewTab("itinerary");

      if (!isPremium) {
        const nextUses = Math.max(0, remainingPlanUses - 1);
        setRemainingPlanUses(nextUses);
        localStorage.setItem("roamiq_plan_uses_left", nextUses.toString());
      }
    } catch (err: any) {
      console.error(err);
      setErrorPlan(err.message || "Something went wrong.");
    } finally {
      setIsGenerating(false);
    }
  };

  // 2. AI Travel Assistant trigger (Budget or Photos)
  const triggerTravelAssistant = async () => {
    if (!assistantInput.trim()) {
      alert(lang === "ar" ? "الرجاء كتابة الفكرة أو السؤال!" : "Please write a query or concept first!");
      return;
    }

    if (activeAssistantTool === "budget-calculator") {
      if (!isPremium && remainingBudgetUses <= 0) {
        setShowSubscriptionModal(true);
        return;
      }
    } else if (activeAssistantTool === "photo-spots") {
      if (!isPremium && remainingPhotoUses <= 0) {
        setShowSubscriptionModal(true);
        return;
      }
    }

    setIsAssistantLoading(true);
    setBudgetResult(null);
    setPhotoResult(null);
    setErrorAssistant(null);

    try {
      const response = await fetch("/api/travel-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: activeAssistantTool,
          input: assistantInput,
          language: lang,
          engine: aiEngine
        })
      });

      if (!response.ok) {
        throw new Error(lang === "ar" ? "فشل الخادم في معالجة طلب المساعد الذكي." : "Server failed to process travel assistant request.");
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      if (activeAssistantTool === "budget-calculator") {
        setBudgetResult(data);
        if (!isPremium) {
          const nextUses = Math.max(0, remainingBudgetUses - 1);
          setRemainingBudgetUses(nextUses);
          localStorage.setItem("roamiq_budget_uses_left", nextUses.toString());
        }
      } else {
        setPhotoResult(data);
        if (!isPremium) {
          const nextUses = Math.max(0, remainingPhotoUses - 1);
          setRemainingPhotoUses(nextUses);
          localStorage.setItem("roamiq_photo_uses_left", nextUses.toString());
        }
      }
    } catch (err: any) {
      console.error(err);
      setErrorAssistant(err.message || "Request failed.");
    } finally {
      setIsAssistantLoading(false);
    }
  };

  // 3. Simulated Checkout
  const handleBuyNow = (product: Product) => {
    const ultimateBundleId = "prod-ultimate-bundle";
    const isUnlockedBundle = unlockedProductIds.includes(ultimateBundleId);
    
    // Check if we should prompt the user to upgrade to the Ultimate Bundle first
    if (product.id !== ultimateBundleId && !isUnlockedBundle) {
      setUpsellProduct(product);
      return;
    }

    setPurchasingProduct(product);
    setPaymentSuccess(false);
    setIsPaying(false);
    // Autofill credit card details for smooth user experience
    setCardNumber("4242 •••• •••• 4242");
    setCardExpiry("12/28");
    setCardCvc("323");
    setCardName("MOHAMMAD AL-MUTAIRI");
  };

  const executePayment = () => {
    setIsPaying(true);
    setTimeout(() => {
      setIsPaying(false);
      setPaymentSuccess(true);
      if (purchasingProduct) {
        setUnlockedProductIds(prev => [...prev, purchasingProduct.id]);
        // Also if it's the ultimate bundle or starter pack bundle, unlock all digital products in the store!
        if (purchasingProduct.id === "prod-ultimate-bundle" || purchasingProduct.id === "bundle-starter") {
          const allIds = PREDEFINED_PRODUCTS.map(p => p.id);
          setUnlockedProductIds(prev => Array.from(new Set([...prev, "prod-ultimate-bundle", "bundle-starter", ...allIds])));
        }
      }
    }, 2000);
  };

  const executeSubscription = () => {
    setIsSubscribing(true);
    setSubscriptionSuccess(false);
    setTimeout(() => {
      setIsSubscribing(false);
      setSubscriptionSuccess(true);
      setIsPremium(true);
      localStorage.setItem("roamiq_is_premium", "true");
    }, 2000);
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const getProductPrice = (price: number) => {
    if (hasExitDiscount) {
      return Number((price * 0.95).toFixed(2));
    }
    return price;
  };

  // Set preset prompt suggestions
  const handleQuickPreset = (presetText: string) => {
    setAssistantInput(presetText);
  };

  return (
    <div className={`w-full min-h-screen bg-[#0A0B0E] text-slate-200 font-sans flex flex-col ${lang === "ar" ? "rtl" : "ltr"} ${isDarkMode ? "dark-mode" : "light-mode"}`} id="app-container">
      
      {/* Top Premium Announcement Bar */}
      <div 
        onClick={() => setActiveTab("shop")}
        className="bg-gradient-to-r from-[#ea580c] via-[#d97706] to-[#b45309] text-white py-2 px-3 sm:px-4 text-center text-[10px] sm:text-xs font-black tracking-wide flex items-center justify-center gap-2 sm:gap-3 relative z-50 cursor-pointer shadow-lg border-b border-amber-500/20 hover:brightness-110 active:scale-[0.99] transition-all select-none"
        id="top-announcement-bar"
      >
        <span className="flex items-center gap-1.5 text-white font-black text-[11px] sm:text-xs">
          <span>🔥</span>
          {lang === "ar" ? "الحزمة الكاملة 43+ منتج بـ$59 — " : "The Full Bundle 43+ products for only $59 — "}
        </span>
        <button className="bg-white text-black px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider hover:bg-black hover:text-white transition-colors shrink-0">
          {lang === "ar" ? "اشتري الآن" : "Buy Now"}
        </button>
      </div>

      {/* Dynamic 5% Exit Discount Banner */}
      {hasExitDiscount && (
        <div className="bg-gradient-to-r from-red-600 to-rose-700 text-white py-2 px-4 text-center text-xs font-black tracking-wider flex items-center justify-center gap-2 relative z-50 shadow-md">
          <span className="flex items-center gap-1">
            <Percent className="w-3.5 h-3.5 animate-bounce shrink-0" />
            {lang === "ar" ? "⚠️ تفعيل خصم المغادرة الخاص 5% لجميع المنتجات! ينتهي خلال:" : "⚠️ Special 5% Exit Discount is active! Expires in:"}
          </span>
          <span className="bg-black/40 px-2 py-0.5 rounded font-mono font-bold text-yellow-300 text-sm tracking-tight">{formatTimer(exitDiscountTimer)}</span>
        </div>
      )}
      {/* 1. Header Bar */}
      <header className="sticky top-0 z-40 bg-[#0A0B0E]/90 backdrop-blur-lg border-b border-white/5 px-3 sm:px-4 md:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-2 shrink-0 select-none" id="header-section">
        <div 
          onClick={() => setActiveTab("ai-tools")}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] shrink-0 min-w-0"
        >
          <div className="w-8 h-8 sm:w-11 sm:h-11 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/25 border border-amber-400/20 group-hover:rotate-12 transition-transform duration-300 shrink-0">
            <Compass className="w-4 h-4 sm:w-6 sm:h-6 text-black" />
          </div>
          <div className="min-w-0">
            <span className="text-sm xs:text-base sm:text-xl md:text-2xl font-black tracking-tight text-white font-display flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
              Tripza <span className="text-amber-500 font-extrabold bg-amber-500/10 px-1 py-0.2 sm:px-2 sm:py-0.5 rounded sm:rounded-lg border border-amber-500/20 text-[9px] sm:text-xs md:text-sm">AI</span>
            </span>
            <span className="hidden sm:block text-[8px] md:text-[9px] uppercase tracking-widest text-amber-500/80 font-extrabold truncate max-w-[150px] sm:max-w-none">
              {lang === "ar" ? "دليل السفر الذكي والمنظم الفاخر" : "Smart Travel & Premium Hub"}
            </span>
          </div>
        </div>

        {/* Desktop Tabs Navigation */}
        <nav className="hidden lg:flex flex-1 max-w-4xl mx-6 items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 text-xs uppercase tracking-wider font-semibold font-display">
          <button 
            id="tab-ai"
            onClick={() => setActiveTab("ai-tools")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${activeTab === "ai-tools" ? "bg-amber-500 text-black font-bold" : "text-slate-300 hover:text-white hover:bg-white/5"}`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {lang === "ar" ? "أدوات الذكاء الاصطناعي" : "AI Tools"}
          </button>
          
          <button 
            id="tab-guides"
            onClick={() => setActiveTab("travel-guides")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${activeTab === "travel-guides" ? "bg-amber-500 text-black font-bold" : "text-slate-300 hover:text-white hover:bg-white/5"}`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            {lang === "ar" ? "خطط جاهزة" : "Travel Guides"}
          </button>

          <button 
            id="tab-shop"
            onClick={() => setActiveTab("shop")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-full transition-all duration-300 relative whitespace-nowrap ${activeTab === "shop" ? "bg-amber-500 text-black font-bold" : "text-slate-300 hover:text-white hover:bg-white/5"}`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {lang === "ar" ? "المنتجات الرقمية" : "Premium Store"}
            <span className="absolute -top-1 right-2 bg-rose-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full uppercase scale-90">SALE</span>
          </button>

          <button 
            id="tab-blog"
            onClick={() => setActiveTab("blog")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${activeTab === "blog" ? "bg-amber-500 text-black font-bold" : "text-slate-300 hover:text-white hover:bg-white/5"}`}
          >
            <FileText className="w-3.5 h-3.5" />
            {lang === "ar" ? "المدونة والوجهات" : "Blog & Hub"}
          </button>

          <button 
            id="tab-aff"
            onClick={() => setActiveTab("affiliates")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${activeTab === "affiliates" ? "bg-amber-500 text-black font-bold" : "text-slate-300 hover:text-white hover:bg-white/5"}`}
          >
            <Coins className="w-3.5 h-3.5" />
            {lang === "ar" ? "احجز الآن" : "Book Now"}
          </button>

          <button 
            id="tab-about"
            onClick={() => setActiveTab("about")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${activeTab === "about" ? "bg-amber-500 text-black font-bold" : "text-slate-300 hover:text-white hover:bg-white/5"}`}
          >
            <Users className="w-3.5 h-3.5" />
            {lang === "ar" ? "من نحن" : "About Us"}
          </button>
        </nav>

        {/* Global Controls: Language and PRO badge */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Connection Status Indicator */}
          <div 
            className="hidden sm:flex items-center gap-1.5 px-2 py-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-white/10 bg-white/5 text-[9px] sm:text-[10px] font-semibold text-slate-300 select-none transition-all duration-300"
            title={lang === "ar" ? (isOnline ? "المتصفح متصل بالإنترنت" : "المتصفح غير متصل - يعمل في وضع الأوفلاين") : (isOnline ? "Browser is online" : "Browser is offline - working from cache")}
          >
            <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isOnline ? "bg-emerald-500 animate-pulse" : "bg-rose-500 animate-ping"}`} />
            <span className="hidden md:inline text-slate-300">
              {isOnline ? (lang === "ar" ? "متصل" : "Online") : (lang === "ar" ? "غير متصل" : "Offline")}
            </span>
          </div>

          {/* Day/Night Theme Toggle */}
          <button 
            id="theme-toggle"
            onClick={() => {
              const nextVal = !isDarkMode;
              setIsDarkMode(nextVal);
              localStorage.setItem("roamiq_theme", nextVal ? "dark" : "light");
            }}
            className="p-1.5 sm:p-2 rounded-lg border border-white/10 bg-white/5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 hover:border-amber-500/40 flex items-center justify-center transition-all shrink-0"
            title={lang === "ar" ? "تبديل المظهر النهاري/الليلي" : "Toggle Day/Night Mode"}
          >
            {isDarkMode ? <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" /> : <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />}
          </button>

          {/* Language Toggle Button */}
          <button 
            id="lang-toggle"
            onClick={() => setLang(prev => prev === "ar" ? "en" : "ar")}
            className="px-2 py-1.5 sm:px-3 sm:py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 hover:border-amber-500/40 flex items-center gap-1 sm:gap-1.5 transition-all shrink-0"
            title="تغيير اللغة / Toggle Language"
          >
            <Globe className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="text-[10px] sm:text-xs">
              {lang === "ar" ? "English" : "العربية"}
            </span>
          </button>

          {/* Quick Stats Panel / Simulated Premium Action */}
          <button 
            onClick={() => {
              if (isPremium) {
                setActiveTab("shop");
              } else {
                setShowSubscriptionModal(true);
              }
            }}
            className={`px-2 py-1.5 sm:px-3 md:px-4 sm:py-2 text-black rounded-lg text-xs font-black font-display shadow-lg uppercase tracking-wider flex items-center justify-center gap-1 sm:gap-1.5 transition-all shrink-0 ${
              isPremium 
                ? "bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 shadow-amber-500/10 border border-yellow-400/20"
                : "bg-gradient-to-r from-amber-500 to-amber-600 hover:brightness-110 shadow-amber-500/20 animate-pulse"
            }`}
          >
            <Crown className="w-3.5 h-3.5 shrink-0 text-black" />
            <span className="hidden md:inline">
              {isPremium 
                ? (lang === "ar" ? "العضوية الذهبية مدى الحياة" : "Lifetime VIP Member")
                : (lang === "ar" ? "ترقية للحساب الذهبي" : "Upgrade to Golden VIP")}
            </span>
            <span className="hidden sm:inline md:hidden">
              {isPremium 
                ? (lang === "ar" ? "العضوية الذهبية" : "Lifetime VIP")
                : (lang === "ar" ? "ترقية الحساب" : "Upgrade VIP")}
            </span>
            <span className="inline sm:hidden text-[10px] font-bold">
              {isPremium 
                ? (lang === "ar" ? "ذهبي" : "VIP")
                : (lang === "ar" ? "ترقية" : "Upgrade")}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Tabs Switcher */}
      <div className="lg:hidden bg-[#0A0B0E] border-b border-white/5 p-2 grid grid-cols-3 gap-1.5 text-xs" id="mobile-tabs-container">
        <button 
          onClick={() => setActiveTab("ai-tools")}
          className={`px-2 py-2.5 rounded-lg font-bold flex flex-col sm:flex-row items-center justify-center gap-1 text-center transition-all ${activeTab === "ai-tools" ? "bg-amber-500 text-black font-extrabold" : "bg-white/5 text-slate-300 hover:bg-white/10"}`}
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{lang === "ar" ? "ذكاء اصطناعي" : "AI Planner"}</span>
        </button>
        <button 
          onClick={() => setActiveTab("travel-guides")}
          className={`px-2 py-2.5 rounded-lg font-bold flex flex-col sm:flex-row items-center justify-center gap-1 text-center transition-all ${activeTab === "travel-guides" ? "bg-amber-500 text-black font-extrabold" : "bg-white/5 text-slate-300 hover:bg-white/10"}`}
        >
          <BookOpen className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{lang === "ar" ? "خطط جاهزة" : "Guides"}</span>
        </button>
        <button 
          onClick={() => setActiveTab("shop")}
          className={`px-2 py-2.5 rounded-lg font-bold flex flex-col sm:flex-row items-center justify-center gap-1 text-center relative transition-all ${activeTab === "shop" ? "bg-amber-500 text-black font-extrabold" : "bg-white/5 text-slate-300 hover:bg-white/10"}`}
        >
          <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{lang === "ar" ? "المتجر" : "Store"}</span>
          <span className="w-1.5 h-1.5 bg-rose-500 rounded-full absolute top-1.5 right-1.5"></span>
        </button>
        <button 
          onClick={() => setActiveTab("blog")}
          className={`px-2 py-2.5 rounded-lg font-bold flex flex-col sm:flex-row items-center justify-center gap-1 text-center transition-all ${activeTab === "blog" ? "bg-amber-500 text-black font-extrabold" : "bg-white/5 text-slate-300 hover:bg-white/10"}`}
        >
          <FileText className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{lang === "ar" ? "المدونة" : "Blog"}</span>
        </button>
        <button 
          onClick={() => setActiveTab("affiliates")}
          className={`px-2 py-2.5 rounded-lg font-bold flex flex-col sm:flex-row items-center justify-center gap-1 text-center transition-all ${activeTab === "affiliates" ? "bg-amber-500 text-black font-extrabold" : "bg-white/5 text-slate-300 hover:bg-white/10"}`}
        >
          <Coins className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{lang === "ar" ? "احجز الآن" : "Book Now"}</span>
        </button>
        <button 
          onClick={() => setActiveTab("about")}
          className={`px-2 py-2.5 rounded-lg font-bold flex flex-col sm:flex-row items-center justify-center gap-1 text-center transition-all ${activeTab === "about" ? "bg-amber-500 text-black font-extrabold" : "bg-white/5 text-slate-300 hover:bg-white/10"}`}
        >
          <Users className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{lang === "ar" ? "من نحن" : "About"}</span>
        </button>
      </div>

      {/* 2. Main Tabbed Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10" id="main-content">
        
        {/* Back to Home Page Button for all subpages */}
        {(activeTab !== "ai-tools" || selectedGuide !== null || readingProduct !== null || viewingProductDetail !== null || readingBlogArticle !== null) && (
          <div className="mb-6 flex animate-fade-in" id="back-to-home-container">
            <button
              onClick={handleGoHome}
              className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-amber-600/15 hover:from-amber-500 hover:to-amber-600 border border-amber-500/20 hover:border-transparent text-amber-500 hover:text-black rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-amber-500/20 cursor-pointer"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>
                {lang === "ar" ? "الرجوع للصفحة الرئيسية" : "Back to Home Page"}
              </span>
            </button>
          </div>
        )}
        
        {/* TAB 1: AI TRIP GENERATOR & SMART ASSISTANT */}
        {activeTab === "ai-tools" && (
          <div className="space-y-12" id="ai-planner-view">
            
            {/* Top Pitch Banner */}
            <div className="bg-gradient-to-br from-[#12141c] via-[#0D0E12] to-[#0A0B0E] p-6 md:p-8 rounded-3xl border border-amber-500/10 relative overflow-hidden shadow-2xl shadow-amber-500/2">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-[90px] pointer-events-none"></div>
              
              <div className="max-w-3xl space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 text-amber-400 rounded-lg text-xs font-black uppercase tracking-widest border border-amber-500/20">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" />
                  {lang === "ar" ? "نظام الذكاء الاصطناعي الفاخر v4.2" : "PREMIUM AI ENGINE v4.2"}
                </span>
                
                <h1 className="text-3xl md:text-5xl font-black text-white leading-tight font-display tracking-tight">
                  {lang === "ar" ? (
                    <>خطة سفرك بالكامل، <span className="text-amber-500 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">تُولد بالذكاء الاصطناعي</span></>
                  ) : (
                    <>Your Entire Trip, <span className="text-amber-500 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">AI-Generated</span></>
                  )}
                </h1>
                
                <p className="text-slate-400 text-xs md:text-sm max-w-2xl leading-relaxed">
                  {lang === "ar" ? (
                    "أدخل وجهتك، ميزانيتك، وعدد الأيام. وسوف يتكفل مساعدنا الذكي بجدولة برنامجك اليومي خطوة بخطوة، مع روابط خرائط جوجل المباشرة وأفضل الفنادق الموصى بها."
                  ) : (
                    "Enter your destination and budget. Our smart algorithm will curate custom daily schedules, hotel picks, secret photo-friendly spots, and direct Google Maps access points instantly."
                  )}
                </p>

                {/* Social Proof */}
                <div className="flex flex-wrap items-center gap-4 bg-white/[0.02] border border-white/5 rounded-2xl p-3 max-w-xl">
                  <div className="flex -space-x-2.5 rtl:space-x-reverse shrink-0">
                    <div className="w-8 h-8 rounded-full border-2 border-[#0A0B0E] bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-[10px] font-black text-black">A</div>
                    <div className="w-8 h-8 rounded-full border-2 border-[#0A0B0E] bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-[10px] font-black text-black">M</div>
                    <div className="w-8 h-8 rounded-full border-2 border-[#0A0B0E] bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-[10px] font-black text-black">S</div>
                    <div className="w-8 h-8 rounded-full border-2 border-[#0A0B0E] bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center text-[10px] font-black text-black">Y</div>
                    <div className="w-8 h-8 rounded-full border-2 border-[#0A0B0E] bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-[10px] font-black text-white">2k+</div>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs font-black text-white whitespace-nowrap">
                        {lang === "ar" ? "انضم لـ 2,400+ مسافر ذكي" : "Join 2,400+ smart travelers"}
                      </span>
                      <span className="text-amber-500 text-xs tracking-widest font-black">★★★★★</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-semibold truncate">
                      {lang === "ar" ? "يعتمدون على خطط سفر ذكية وعروض حصرية فورية" : "Leveraging smart planning & exclusive deals"}
                    </span>
                  </div>
                </div>

                {/* Micro-Stats Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-white/5">
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 text-left">
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">{lang === "ar" ? "تغطي عالمية" : "GLOBAL SCOPE"}</span>
                    <span className="text-sm font-black text-white block mt-0.5">10,000+ {lang === "ar" ? "وجهة" : "Cities"}</span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 text-left">
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">{lang === "ar" ? "سرعة المعالجة" : "SPEED"}</span>
                    <span className="text-sm font-black text-amber-500 block mt-0.5">&lt; 10s {lang === "ar" ? "توليد فوري" : "Instant"}</span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 text-left">
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">{lang === "ar" ? "توفير مضمون" : "AVG SAVINGS"}</span>
                    <span className="text-sm font-black text-white block mt-0.5">{lang === "ar" ? "يصل إلى ٤٠٪" : "Up to 40%"}</span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 rounded-xl p-3 text-left">
                    <span className="text-[10px] text-slate-500 uppercase font-bold block">{lang === "ar" ? "تحديث مباشر" : "INTEGRATION"}</span>
                    <span className="text-sm font-black text-emerald-400 block mt-0.5">100% {lang === "ar" ? "خرائط جوجل" : "Google Maps"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Split layout: left form inputs, right generated output */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Form Settings (4 cols on large screens) */}
              <div className="lg:col-span-5 bg-[#0F1116] border border-white/10 p-6 rounded-2xl space-y-5 shadow-xl">
                <div className="border-b border-white/5 pb-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Compass className="w-4 h-4 text-amber-500" />
                    {lang === "ar" ? "تحديد تفاصيل الرحلة" : "Define Your Adventure"}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {lang === "ar" ? "املأ البيانات لتوليد جدولك المثالي ثوانٍ معدودة" : "Provide details for the instant travel engine"}
                  </p>
                </div>

                {/* Destination Input */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase font-bold text-slate-400 tracking-wider">
                    {lang === "ar" ? "أين تريد السفر؟" : "Where to travel?"}
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                    <input 
                      type="text" 
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      placeholder={lang === "ar" ? "مثال: تركيا، لندن، دبي، ماليزيا..." : "e.g. Turkey, London, Dubai, Malaysia..."}
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>
                  {/* Quick Preset Buttons for Destination */}
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {["تركيا 🇹🇷", "دبي 🇦🇪", "لندن 🇬🇧", "سويسرا 🇨🇭"].map(preset => (
                      <button 
                        key={preset}
                        onClick={() => setDestination(preset.replace(/[\uD800-\uDFFF]./g, "").trim())}
                        className="text-[10px] bg-white/5 hover:bg-amber-500/20 hover:text-amber-300 px-2.5 py-1 rounded border border-white/5 text-slate-400 transition-all"
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration Picker */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase font-bold text-slate-400 tracking-wider">
                    {lang === "ar" ? "عدد الأيام" : "Duration (Days)"}
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {["3", "5", "7", "10"].map((dayOpt) => (
                      <button
                        key={dayOpt}
                        onClick={() => setDays(dayOpt)}
                        className={`py-2 text-xs font-bold rounded-lg transition-all ${days === dayOpt ? "bg-amber-500 text-black" : "bg-black/40 text-slate-400 hover:text-white border border-white/5"}`}
                      >
                        {dayOpt} {lang === "ar" ? "أيام" : "Days"}
                      </button>
                    ))}
                  </div>
                  {/* Custom Days Input */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">{lang === "ar" ? "أو مخصص:" : "Or Custom:"}</span>
                    <input 
                      type="number" 
                      min="1" 
                      max="14" 
                      value={days} 
                      onChange={(e) => setDays(e.target.value)}
                      className="w-20 bg-black/40 border border-white/15 rounded px-2 py-1 text-xs text-center focus:outline-none focus:border-amber-500 text-white"
                    />
                    <span className="text-xs text-slate-500">{lang === "ar" ? "يوم (بحد أقصى 14)" : "days (Max 14)"}</span>
                  </div>
                </div>

                {/* Budget Range selector */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase font-bold text-slate-400 tracking-wider flex justify-between items-center">
                    <span>{lang === "ar" ? "الميزانية والعملة" : "Budget & Currency"}</span>
                    <span className="text-[10px] text-amber-500 font-bold">
                      {lang === "ar" ? "ميزانيتي المخصصة" : "My Custom Budget"}
                    </span>
                  </label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <select 
                      value={budgetType}
                      onChange={(e) => {
                        const val = e.target.value;
                        setBudgetType(val);
                        if (val === "economy") {
                          setBudget(lang === "ar" ? "ميزانية اقتصادية" : "Economy Budget");
                        } else if (val === "moderate") {
                          setBudget(lang === "ar" ? "ميزانية متوسطة" : "Moderate Budget");
                        } else if (val === "luxury") {
                          setBudget(lang === "ar" ? "ميزانية فاخرة VIP" : "Luxury VIP Budget");
                        } else if (val === "custom") {
                          setBudget(lang === "ar" ? "500 - 620 ريال عماني لعائلة متوسطة" : "500 - 620 Omani Rial for a moderate family");
                        }
                      }}
                      className="w-full bg-black/40 border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-500 font-bold"
                    >
                      <option value="economy">
                        {lang === "ar" ? "📉 اقتصادية (موفرة)" : "📉 Economy / Budget"}
                      </option>
                      <option value="moderate">
                        {lang === "ar" ? "⚖️ متوسطة (متوازنة)" : "⚖️ Moderate / Balanced"}
                      </option>
                      <option value="luxury">
                        {lang === "ar" ? "💎 فاخرة VIP (راقية)" : "💎 Luxury VIP"}
                      </option>
                      <option value="custom">
                        {lang === "ar" ? "✏️ مخصصة (كتابة ميزانيتك)" : "✏️ Custom (Type own)"}
                      </option>
                    </select>

                    <div className="relative">
                      <input 
                        type="text"
                        value={budget}
                        onChange={(e) => {
                          setBudget(e.target.value);
                          if (budgetType !== "custom") {
                            setBudgetType("custom");
                          }
                        }}
                        placeholder={lang === "ar" ? "مثال: 500 - 620 ريال عماني" : "e.g., 500 - 620 Omani Rials"}
                        className="w-full bg-black/50 border border-white/15 rounded-xl p-3 pl-8 text-xs text-amber-400 focus:outline-none focus:border-amber-500 font-bold"
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs select-none">
                        💰
                      </span>
                    </div>
                  </div>
                </div>

                {/* Companion & style */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
                      {lang === "ar" ? "نمط السفر" : "Travel Style"}
                    </label>
                    <select
                      value={lang === "ar" ? travelStyle : travelStyleEn}
                      onChange={(e) => {
                        if (lang === "ar") {
                          setTravelStyle(e.target.value);
                        } else {
                          setTravelStyleEn(e.target.value);
                        }
                      }}
                      className="w-full bg-black/40 border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      {lang === "ar" ? (
                        <>
                          <option value="استكشاف ومعالم">استكشاف ومعالم</option>
                          <option value="مغامرة وتحدي">مغامرة وتحدي</option>
                          <option value="استرخاء وهدوء">استرخاء وهدوء</option>
                          <option value="تذوق طعام وتسوق">تذوق طعام وتسوق</option>
                        </>
                      ) : (
                        <>
                          <option value="Sightseeing">Sightseeing</option>
                          <option value="Adventure">Adventure</option>
                          <option value="Relaxation">Relaxation</option>
                          <option value="Foodie & Shopping">Foodie & Shop</option>
                        </>
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
                      {lang === "ar" ? "نوع الصحبة" : "Companion"}
                    </label>
                    <select
                      value={travelersType}
                      onChange={(e) => setTravelersType(e.target.value)}
                      className="w-full bg-black/40 border border-white/15 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      {lang === "ar" ? (
                        <>
                          <option value="زوجين / شخصين">زوجين / شخصين (Couples)</option>
                          <option value="عائلة وأطفال">عائلة وأطفال</option>
                          <option value="رحلة فردية (Solo)">رحلة فردية (Solo)</option>
                          <option value="رحلة شبابية">رحلة شبابية</option>
                          <option value="شهر عسل">شهر عسل رومنسي</option>
                        </>
                      ) : (
                        <>
                          <option value="Couples / Duo">Couples / Duo</option>
                          <option value="Family & Kids">Family & Kids</option>
                          <option value="Solo Traveler">Solo Traveler</option>
                          <option value="Friends Group">Friends Group</option>
                          <option value="Honeymoon Couple">Honeymoon</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                {/* AI Status Bar */}
                <div className="bg-[#121620] border border-white/10 rounded-xl p-3 flex items-center justify-between text-xs my-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                    <div className="text-left">
                      <span className="font-bold text-white block">
                        {lang === "ar" ? "محرك التخطيط الذكي نشط وجاهز" : "Intelligent AI Engine Active"}
                      </span>
                      <span className="text-[10px] text-slate-400 block leading-tight">
                        {lang === "ar" ? "تم التحسين لتوليد جداول سياحية دقيقة ومفصلة" : "Optimized for highly specific and detailed itineraries"}
                      </span>
                    </div>
                  </div>
                  {/* Free Trial Remaining Badge */}
                  <div className="text-right shrink-0">
                    {isPremium ? (
                      <span className="text-[10px] font-black tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded-md uppercase">
                        👑 {lang === "ar" ? "غير محدود" : "Unlimited"}
                      </span>
                    ) : (
                      <span className={`text-[10px] font-black tracking-wider px-2 py-1 rounded-md uppercase ${remainingPlanUses > 0 ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20" : "text-rose-400 bg-rose-500/10 border border-rose-500/20 animate-pulse"}`}>
                        {lang === "ar" ? `${remainingPlanUses} تجارب مجانية` : `${remainingPlanUses} Free Trials`}
                      </span>
                    )}
                  </div>
                </div>

                {/* Generate CTA */}
                <button
                  id="generate-plan-btn"
                  onClick={triggerGeneratePlan}
                  disabled={isGenerating}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold text-sm rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-black" />
                      <span>{lang === "ar" ? "جاري التخطيط وتوليد الخطة بالذكاء الاصطناعي..." : "AI Engine Estimating..."}</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>{lang === "ar" ? "توليد الخطة السياحية الذكية" : "Generate Smart Itinerary"}</span>
                    </>
                  )}
                </button>

                {/* Simulated Proof Tag */}
                <div className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1">
                  <Check className="w-3 h-3 text-emerald-500" />
                  <span>{lang === "ar" ? "تخطيط ذكي معتمد بنسبة 100%" : "100% Certified Intelligent Planning"}</span>
                </div>
              </div>

              {/* Right Column: AI Plan Display (7 cols) */}
              <div className="lg:col-span-7 bg-[#0F1116]/60 border border-white/10 p-6 rounded-2xl min-h-[450px] flex flex-col relative">
                
                {/* Loader State with beautiful tips */}
                {isGenerating && (
                  <div className="absolute inset-0 bg-[#0F1116]/95 z-10 flex flex-col items-center justify-center p-10 text-center rounded-2xl">
                    <div className="w-16 h-16 rounded-full border-4 border-amber-500/20 border-t-amber-500 animate-spin mb-6"></div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {lang === "ar" ? "الذكاء الاصطناعي ينسج رحلتك الآن..." : "AI Agent is weaving your trip..."}
                    </h4>
                    <p className="text-xs text-amber-500 animate-pulse uppercase tracking-wider mb-6">
                      {lang === "ar" ? "قد يستغرق ذلك من 5 إلى 10 ثوانٍ" : "May take 5 to 10 seconds"}
                    </p>
                    <div className="max-w-sm bg-white/5 p-4 rounded-xl border border-white/5 text-xs text-slate-400">
                      <span className="font-bold text-white block mb-1">
                        💡 {lang === "ar" ? "هل تعلم؟" : "Did you know?"}
                      </span>
                      {lang === "ar" ? (
                        "كتابة جدول سياحي يدوي من الصفر يستغرق بالمتوسط 14 ساعة من البحث! ذكاؤنا الاصطناعي يفعل ذلك في ثوانٍ مع توازن النفقات والمواقع السرية."
                      ) : (
                        "Curating a detailed travel schedule from scratch manually takes on average 14 hours of research. Our artificial intelligence matches real constraints in seconds."
                      )}
                    </div>
                  </div>
                )}

                {/* Empty State */}
                {!generatedPlan && !errorPlan && !isGenerating && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                      <Compass className="w-8 h-8 text-slate-600 animate-pulse" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {lang === "ar" ? "جاهز لتصميم رحلتك الاستثنائية!" : "Ready to design your ultimate journey!"}
                    </h3>
                    <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                      {lang === "ar" ? (
                        "اكتب وجهتك المطلوبة في النموذج الجانبي، واضغط على توليد الخطة. ستظهر التفاصيل كاملة ومصنفة هنا كالسحر."
                      ) : (
                        "Enter your desired destination on the left panel, and tap Generate. Your full, high-fidelity custom program will populate here magically."
                      )}
                    </p>
                    {/* Visual hints */}
                    <div className="grid grid-cols-2 gap-2 max-w-md w-full mt-8">
                      <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-left text-xs text-slate-400">
                        <span className="font-bold text-amber-500 block">✓ {lang === "ar" ? "توزيع ذكي للمصاريف" : "Smart Budget Allocation"}</span>
                        {lang === "ar" ? "ميزانيات دقيقة للفنادق والوجبات" : "Realistic calculations"}
                      </div>
                      <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-left text-xs text-slate-400">
                        <span className="font-bold text-amber-500 block">✓ {lang === "ar" ? "روابط Google Maps" : "Google Maps Integrated"}</span>
                        {lang === "ar" ? "انقر للبحث الفوري عن أي معلم" : "Instantly open direction searches"}
                      </div>
                    </div>
                  </div>
                )}

                {/* Error State */}
                {errorPlan && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-rose-300">
                    <AlertCircle className="w-12 h-12 text-rose-500 mb-4" />
                    <h4 className="font-bold text-white mb-1">{lang === "ar" ? "عذراً، فشل توليد الخطة" : "Failed to Generate Plan"}</h4>
                    <p className="text-xs text-slate-400 max-w-md mb-6">{errorPlan}</p>
                    <button 
                      onClick={triggerGeneratePlan}
                      className="px-4 py-2 bg-white/10 text-white rounded-lg text-xs hover:bg-white/20"
                    >
                      {lang === "ar" ? "إعادة المحاولة" : "Try Again"}
                    </button>
                  </div>
                )}

                {/* Generated Output Content */}
                {generatedPlan && !isGenerating && (
                  <div className="space-y-6">
                    {/* Result Header */}
                    <div className="border-b border-white/10 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-xs font-black uppercase bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded">
                            {lang === "ar" ? "خطة ذكية معتمدة" : "Smart Plan Approved"}
                          </span>
                          <span className="text-xs text-slate-400">
                            {generatedPlan.duration} {lang === "ar" ? "أيام" : "Days"}
                          </span>
                          {isCachedForOffline && (
                            <span className="text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded flex items-center gap-1" title={lang === "ar" ? "تم الحفظ مؤقتاً ومتاح للعرض بدون إنترنت" : "Cached and ready for offline viewing"}>
                              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
                              {lang === "ar" ? "متاح أوفلاين (مخزن)" : "Offline Ready"}
                            </span>
                          )}
                        </div>
                        <h2 className="text-2xl font-bold text-white mt-1 font-display">
                          {generatedPlan.destination}
                        </h2>
                      </div>
                      <div className="flex flex-col items-end bg-amber-500/10 border border-amber-500/20 px-4 py-2.5 rounded-xl text-right">
                        <span className="block text-[10px] uppercase text-amber-500 tracking-wider font-bold">
                          {lang === "ar" ? "إجمالي التكلفة التقديرية" : "Total Est. Cost"}
                        </span>
                        <span className="text-lg font-black text-white">{formatCostWithLocalAndUSD(generatedPlan.totalEstimatedCost, generatedPlan.destination)}</span>
                        <button
                          onClick={() => {
                            const parsed = parseCostAmount(generatedPlan.totalEstimatedCost);
                            setConvAmount(parsed.amount);
                            setConvFrom(parsed.detectedCurrency);
                            setActiveAssistantTool("currency-converter");
                            const el = document.getElementById("ai-specialist-tools");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="text-[10px] text-amber-400 hover:text-amber-300 font-bold underline flex items-center gap-1 cursor-pointer mt-1"
                        >
                          <Globe className="w-3 h-3 text-amber-400" />
                          <span>{lang === "ar" ? "تحويل للعملة المحلية" : "Convert to local currency"}</span>
                        </button>
                      </div>
                    </div>

                     {/* Premium PDF Export Action Card */}
                     <div className="flex flex-col gap-4 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 p-5 rounded-2xl">
                       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                         <div className="flex items-start gap-3">
                           <span className="text-2xl mt-0.5">🛡️</span>
                           <div>
                             <span className="text-sm text-amber-400 font-extrabold block">{lang === "ar" ? "تصدير مائي آمن ومحمي (PDF / HTML)" : "Secure Watermarked PDF / HTML Export"}</span>
                             <span className="text-xs text-slate-400 block">{lang === "ar" ? "قم بحماية وتخصيص دليلك الفاخر بإضافة اسمك لمنع التوزيع غير المصرح به" : "Protect and personalize your premium guide with your name & a secure trip ID watermark"}</span>
                           </div>
                         </div>
                         
                         <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold text-amber-400 self-start sm:self-auto">
                           <span>{lang === "ar" ? "معرّف الرحلة الآمن:" : "SECURE TRIP ID:"}</span>
                           <span>RMQ-ITN-{(generatedPlan ? (generatedPlan.destination.split("").reduce((acc: number, c: string) => acc + c.charCodeAt(0), 0) + generatedPlan.duration) : 2026).toString(36).toUpperCase()}</span>
                         </div>
                       </div>

                       <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-end">
                         <div className="flex-1 space-y-1">
                           <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                             <User className="w-3 h-3 text-amber-500" />
                             {lang === "ar" ? "اسم مالك الرخصة المطبوعة" : "License Holder / Passenger Name"}
                           </label>
                           <input
                             type="text"
                             placeholder={lang === "ar" ? "أدخل اسمك الكامل للعلامة المائية (مثال: محمد بن علي)" : "Enter your name for watermark (e.g. Liam Smith)"}
                             value={watermarkName}
                             onChange={(e) => handleWatermarkNameChange(e.target.value)}
                             className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
                           />
                         </div>

                         <button
                           onClick={handleDownloadPDF}
                           className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-black text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-lg hover:shadow-amber-500/20 active:scale-95 flex items-center justify-center gap-2 shrink-0 cursor-pointer h-[38px]"
                         >
                           <Download className="w-4 h-4 stroke-[3]" />
                           <span>{lang === "ar" ? "تنزيل نسخة مرخصة" : "Download Licensed PDF"}</span>
                         </button>
                       </div>
                     </div>

                    {/* Trip Highlights (Climate, Recommended Dates, Primary Language, and Star Rating) */}
                    <TripHighlights 
                      plan={generatedPlan} 
                      lang={lang} 
                      rating={getPlanRating(generatedPlan)}
                      onRate={handleRatePlan}
                    />

                    {/* Quick Tips Horizontal Row */}
                    <div className="bg-white/5 border border-white/5 p-3 rounded-xl">
                      <span className="text-[10px] font-bold text-amber-500 block mb-1 uppercase tracking-wider">
                        💡 {lang === "ar" ? "نصائح ذكية لهذه الرحلة" : "Smart Trip Tips"}
                      </span>
                      <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                        {generatedPlan.travelTips?.slice(0, 3).map((tip, idx) => (
                          <li key={idx}>{tip}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Recommended Hotels Section */}
                    {generatedPlan.recommendedHotels && generatedPlan.recommendedHotels.length > 0 && (
                      <div className="space-y-2">
                        <h3 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider flex items-center gap-1">
                          <Compass className="w-3.5 h-3.5 text-amber-500" />
                          {lang === "ar" ? "خيارات الإقامة الموصى بها" : "Recommended Stays"}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {generatedPlan.recommendedHotels.map((hotel, idx) => (
                            <div key={idx} className="bg-black/30 border border-white/5 p-3 rounded-xl space-y-1">
                              <div className="flex justify-between items-start">
                                <span className="font-bold text-xs text-white block">{hotel.name}</span>
                                <span className="text-[10px] bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded">{hotel.priceRange}</span>
                              </div>
                              <span className="text-[10px] text-slate-400 block">📍 {hotel.area}</span>
                              <p className="text-[11px] text-slate-400 italic">{hotel.whyChoose}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tab Navigation for Plan View */}
                    <div className="grid grid-cols-3 border-b border-white/10 gap-1 mb-6">
                      <button
                        type="button"
                        onClick={() => setPlanViewTab("itinerary")}
                        className={`py-3 text-xs font-black uppercase tracking-wider transition-all border-b-2 flex items-center justify-center gap-2 cursor-pointer ${
                          planViewTab === "itinerary" 
                            ? "border-amber-500 text-amber-500 font-extrabold" 
                            : "border-transparent text-slate-400 hover:text-white"
                        }`}
                      >
                        <Calendar className="w-4 h-4 shrink-0" />
                        <span className="truncate">{lang === "ar" ? "مسار الأيام" : "Daily Itinerary"}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPlanViewTab("budget")}
                        className={`py-3 text-xs font-black uppercase tracking-wider transition-all border-b-2 flex items-center justify-center gap-2 cursor-pointer ${
                          planViewTab === "budget" 
                            ? "border-amber-500 text-amber-500 font-extrabold" 
                            : "border-transparent text-slate-400 hover:text-white"
                        }`}
                      >
                        <DollarSign className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="truncate">{lang === "ar" ? "الميزانية الحية" : "Live Budget"}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPlanViewTab("checklist")}
                        className={`py-3 text-xs font-black uppercase tracking-wider transition-all border-b-2 flex items-center justify-center gap-2 cursor-pointer relative ${
                          planViewTab === "checklist" 
                            ? "border-amber-500 text-amber-500 font-extrabold" 
                            : "border-transparent text-slate-400 hover:text-white"
                        }`}
                      >
                        <ClipboardList className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="truncate">{lang === "ar" ? "قائمة الأمتعة والمهام" : "Smart Checklist"}</span>
                        <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-[8px] font-bold text-black bg-amber-500 rounded-full animate-pulse">
                          {lang === "ar" ? "جديد" : "NEW"}
                        </span>
                      </button>
                    </div>

                    {planViewTab === "itinerary" ? (
                      /* Itinerary Visualization with Interactive Day Selector */
                      <div className="space-y-4 animate-fade-in">
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                          <h3 className="text-xs uppercase font-extrabold text-slate-400 tracking-wider flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-amber-500" />
                            {lang === "ar" ? "جدول الأيام التفصيلي" : "Daily Schedule Breakdown"}
                          </h3>
                          {/* Day Badges Nav */}
                          <div className="flex gap-1 overflow-x-auto max-w-[200px] md:max-w-md">
                            {generatedPlan.itinerary?.map((day, idx) => (
                              <button
                                key={day.dayNumber}
                                onClick={() => setActiveDayIndex(idx)}
                                className={`px-2.5 py-1 text-xs rounded-md transition-all ${activeDayIndex === idx ? "bg-amber-500 text-black font-extrabold" : "bg-white/5 text-slate-400 hover:text-white"}`}
                              >
                                {lang === "ar" ? `يوم ${day.dayNumber}` : `Day ${day.dayNumber}`}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Display Selected Day Activities */}
                        {generatedPlan.itinerary && generatedPlan.itinerary[activeDayIndex] && (
                          <div className="bg-black/20 border border-white/10 rounded-xl p-4 space-y-4">
                            <div className="flex items-center justify-between border-b border-white/5 pb-2">
                              <span className="text-sm font-bold text-amber-400">
                                {lang === "ar" ? `اليوم ${generatedPlan.itinerary[activeDayIndex].dayNumber}:` : `Day ${generatedPlan.itinerary[activeDayIndex].dayNumber}:`} {generatedPlan.itinerary[activeDayIndex].theme}
                              </span>
                              <span className="text-xs text-slate-500">
                                {generatedPlan.itinerary[activeDayIndex].activities?.length || 0} {lang === "ar" ? "فعاليات" : "activities"}
                              </span>
                            </div>

                            <div className="space-y-3.5">
                              {generatedPlan.itinerary[activeDayIndex].activities?.map((activity, idx) => (
                                <div key={idx} className="group flex items-start gap-3 bg-white/5 hover:bg-white/10 p-3 rounded-lg border border-white/5 transition-all">
                                  <span className="text-xs font-bold text-amber-500 uppercase shrink-0 pt-0.5 min-w-[50px]">
                                    {activity.timeOfDay}
                                  </span>
                                  <div className="flex-1 space-y-1">
                                    <div className="flex items-center justify-between gap-2">
                                      <h4 className="text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                                        {activity.title}
                                      </h4>
                                      <span className="text-[10px] text-slate-500 font-semibold">{formatCostWithLocalAndUSD(activity.estimatedCost, generatedPlan.destination)}</span>
                                    </div>
                                    <p className="text-[11px] text-slate-400 leading-relaxed">
                                      {activity.description}
                                    </p>
                                    {activity.googleMapsSearchQuery && (
                                      <button
                                        onClick={() => handleGoogleMapsSearch(activity.googleMapsSearchQuery)}
                                        className="inline-flex items-center gap-1 text-[9px] text-amber-500 hover:text-amber-400 font-bold tracking-wider uppercase mt-1 bg-amber-500/5 hover:bg-amber-500/10 px-2 py-0.5 rounded transition-all"
                                      >
                                        <Map className="w-3 h-3" />
                                        {lang === "ar" ? "ابحث في خرائط Google 🗺️" : "Search Google Maps 🗺️"}
                                        <ExternalLink className="w-2.5 h-2.5" />
                                      </button>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : planViewTab === "budget" ? (
                      <BudgetTracker plan={generatedPlan} lang={lang} />
                    ) : (
                      <SmartChecklist plan={generatedPlan} lang={lang} />
                    )}

                     {/* Copy and Save bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleCopy(JSON.stringify(generatedPlan, null, 2), "generated-plan-copy")}
                          className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 cursor-pointer"
                        >
                          {copiedTextId === "generated-plan-copy" ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-green-500" />
                              <span>{lang === "ar" ? "تم نسخ النص!" : "Copied JSON!"}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>{lang === "ar" ? "نسخ بيانات الخطة" : "Copy Raw Plan"}</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={handleDownloadPDF}
                          className="text-xs text-amber-500 hover:text-amber-400 flex items-center gap-1.5 font-bold cursor-pointer"
                          title={lang === "ar" ? "تحميل كملف HTML جاهز للطباعة" : "Download as printable HTML"}
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>{lang === "ar" ? "تحميل HTML" : "Download HTML"}</span>
                        </button>
                      </div>

                      <span className="text-[10px] text-slate-500">
                        {lang === "ar" ? "انقر على روابط الماب لفتح الاتجاهات" : "Click Maps links to launch navigation"}
                      </span>
                    </div>

                  </div>
                )}
              </div>

            </div>

            {/* SECONDARY SECTION: INTERACTIVE AI ASSISTANT (BUDGET CALC & PHOTO SPOTS) */}
            <div className="bg-[#0F1116] border border-white/10 p-8 rounded-3xl space-y-6" id="ai-specialist-tools">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-4 gap-4">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white font-display">
                    🤖 {lang === "ar" ? "مساعد السفر المتخصص" : "Specialist AI Travel Assistants"}
                  </h2>
                  <p className="text-xs text-slate-400">
                    {lang === "ar" ? "اختر أداة وسيجيبك الذكاء الاصطناعي مباشرة بهيكل وحلول عملية" : "Select an specialized tool for real-time itemized outputs"}
                  </p>
                </div>

                {/* Tool toggle switches */}
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setActiveAssistantTool("budget-calculator");
                      setAssistantInput("");
                      setBudgetResult(null);
                      setPhotoResult(null);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeAssistantTool === "budget-calculator" ? "bg-amber-500 text-black" : "bg-white/5 text-slate-400 hover:text-white"}`}
                  >
                    <Coins className="w-3.5 h-3.5" />
                    {lang === "ar" ? "حاسب ميزانية مفصل" : "Budget Calculator"}
                  </button>

                  <button
                    onClick={() => {
                      setActiveAssistantTool("photo-spots");
                      setAssistantInput("");
                      setBudgetResult(null);
                      setPhotoResult(null);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeAssistantTool === "photo-spots" ? "bg-amber-500 text-black" : "bg-white/5 text-slate-400 hover:text-white"}`}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    {lang === "ar" ? "اقتراح أماكن تصوير" : "Scenic Photo Spots"}
                  </button>

                  <button
                    onClick={() => {
                      setActiveAssistantTool("currency-converter");
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeAssistantTool === "currency-converter" ? "bg-amber-500 text-black" : "bg-white/5 text-slate-400 hover:text-white"}`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    {lang === "ar" ? "محول عملات فوري" : "Instant Currency Converter"}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Side Input & Presets */}
                <div className="lg:col-span-5 space-y-4">
                  {activeAssistantTool === "currency-converter" ? (
                    /* Currency Converter Controls */
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs uppercase font-bold text-slate-400 tracking-wider mb-1.5">
                          {lang === "ar" ? "المبلغ المراد تحويله" : "Amount to Convert"}
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            min="0"
                            value={convAmount === 0 ? "" : convAmount}
                            onChange={(e) => setConvAmount(Number(e.target.value))}
                            className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 pr-12 text-lg font-black text-white focus:outline-none focus:border-amber-500 placeholder-slate-600"
                            placeholder="e.g. 1000"
                          />
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                            {convFrom}
                          </span>
                        </div>
                      </div>

                      {/* Dropdowns + Swap Button */}
                      <div className="space-y-3 bg-white/5 border border-white/5 p-4 rounded-2xl relative">
                        <div className="space-y-1">
                          <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                            {lang === "ar" ? "من عملة:" : "Convert From:"}
                          </label>
                          <select
                            value={convFrom}
                            onChange={(e) => setConvFrom(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500 cursor-pointer"
                          >
                            {CURRENCY_LIST.map((c) => (
                              <option key={c.code} value={c.code} className="bg-[#161920]">
                                {c.flag} {c.code} - {lang === "ar" ? c.nameAr : c.nameEn} ({c.symbol})
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Swap Button */}
                        <div className="flex justify-center -my-1.5 relative z-10">
                          <button
                            type="button"
                            onClick={() => {
                              const temp = convFrom;
                              setConvFrom(convTo);
                              setConvTo(temp);
                            }}
                            className="bg-amber-500 hover:bg-amber-400 text-black p-2.5 rounded-full shadow-lg transition-all active:scale-90 cursor-pointer flex items-center justify-center"
                            title={lang === "ar" ? "عكس العملات" : "Swap Currencies"}
                          >
                            <ArrowLeftRight className="w-4 h-4 stroke-[2.5]" />
                          </button>
                        </div>

                        <div className="space-y-1">
                          <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                            {lang === "ar" ? "إلى عملة:" : "Convert To:"}
                          </label>
                          <select
                            value={convTo}
                            onChange={(e) => setConvTo(e.target.value)}
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500 cursor-pointer"
                          >
                            {CURRENCY_LIST.map((c) => (
                              <option key={c.code} value={c.code} className="bg-[#161920]">
                                {c.flag} {c.code} - {lang === "ar" ? c.nameAr : c.nameEn} ({c.symbol})
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Quick Presets for currency */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] text-slate-500 block">
                          {lang === "ar" ? "مبالغ سريعة بالتجربة:" : "Quick Amounts:"}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {[50, 100, 250, 500, 1000, 2500, 5000].map((amt) => (
                            <button
                              key={amt}
                              onClick={() => setConvAmount(amt)}
                              className={`text-[10px] px-3 py-1.5 rounded-lg border transition-all ${convAmount === amt ? "bg-amber-500 text-black border-amber-500 font-bold animate-none" : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/10"}`}
                            >
                              {amt.toLocaleString()} {convFrom}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Rates Status Bar */}
                      <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center justify-between text-[11px] text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${ratesLoading ? "bg-blue-500 animate-pulse" : ratesLastUpdated ? "bg-emerald-500" : "bg-amber-500"}`}></span>
                          <span>
                            {ratesLoading 
                              ? (lang === "ar" ? "جاري تحديث الأسعار الحية..." : "Updating live rates...") 
                              : ratesLastUpdated 
                                ? (lang === "ar" ? `أسعار صرف حية نشطة (محدث ${ratesLastUpdated})` : `Live exchange rates active (updated ${ratesLastUpdated})`)
                                : (lang === "ar" ? "معدلات الصرف الافتراضية نشطة" : "Standard offline exchange rates active")}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={async () => {
                            setRatesLoading(true);
                            try {
                              const res = await fetch("https://open.er-api.com/v6/latest/USD");
                              if (res.ok) {
                                const data = await res.json();
                                if (data && data.rates) {
                                  const merged = { ...DEFAULT_RATES, ...data.rates };
                                  setExchangeRates(merged);
                                  const now = new Date();
                                  setRatesLastUpdated(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
                                }
                              }
                            } catch (e) {
                              console.error(e);
                            } finally {
                              setRatesLoading(false);
                            }
                          }}
                          disabled={ratesLoading}
                          className="hover:text-white transition-colors disabled:opacity-50 flex items-center gap-1 cursor-pointer"
                          title={lang === "ar" ? "تحديث أسعار الصرف الآن" : "Refresh rates"}
                        >
                          <RefreshCw className={`w-3 h-3 ${ratesLoading ? "animate-spin" : ""}`} />
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Left Side Input & Presets for AI Tools */
                    <>
                      <label className="block text-xs uppercase font-bold text-slate-400 tracking-wider">
                        {activeAssistantTool === "budget-calculator" ? (
                          lang === "ar" ? "اكتب تفاصيل رحلتك لتقدير التكاليف" : "Describe the trip concept for budget analysis"
                        ) : (
                          lang === "ar" ? "اكتب وجهتك للحصول على نقاط التصوير الخلابة" : "Input target destination for scenic shots"
                        )}
                      </label>

                      <textarea
                        rows={4}
                        value={assistantInput}
                        onChange={(e) => setAssistantInput(e.target.value)}
                        placeholder={
                          activeAssistantTool === "budget-calculator" ? (
                            lang === "ar" ? "مثال: بسافر تركيا 7 أيام بميزانية 600 ريال عماني أو كويتي لشخصين فنادق متوسطة" : "e.g. 7 days trip to Turkey with budget $1000 for a couple, moderate dining"
                          ) : (
                            lang === "ar" ? "مثال: أفضل زوايا التصوير في إسطنبول وكبادوكيا" : "e.g. Hidden photogenic alleys & sunrise sunset spots in Rome or Istanbul"
                          )
                        }
                        className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-xs text-white focus:outline-none focus:border-amber-500 placeholder-slate-600 resize-none"
                      />

                      {/* Quick Preset Buttons */}
                      <div className="space-y-1.5">
                        <span className="text-[10px] text-slate-500 block">{lang === "ar" ? "أفكار مقترحة للسرعة:" : "Quick Ideas:"}</span>
                        <div className="flex flex-wrap gap-1.5">
                          {(activeAssistantTool === "budget-calculator" ? 
                            (lang === "ar" ? [
                              { text: "تركيا 10 أيام لشخصين بميزانية 600 ريال عماني", label: "تركيا 🇹🇷" },
                              { text: "دبي 4 أيام عائلية بميزانية 500 دينار كويتي شاملة الأنشطة", label: "دبي 🇦🇪" }
                            ] : [
                              { text: "10 days in Turkey for a couple with $1500 limit", label: "Turkey 🇹🇷" },
                              { text: "5 days budget solo trip to London, cheap hostels", label: "London 🇬🇧" }
                            ]) : 
                            (lang === "ar" ? [
                              { text: "أفضل أماكن تصوير بالإنستغرام في سويسرا", label: "سويسرا 🇨🇭" },
                              { text: "زوايا سرية لتصوير برج خليفة دبي", label: "دبي 🇦🇪" }
                            ] : [
                              { text: "Instagrammable spots in Amalfi Coast & sunset views", label: "Amalfi 🇮🇹" },
                              { text: "Epic photographer perspectives for Paris Eiffel Tower", label: "Paris 🇫🇷" }
                            ])
                          ).map((presetObj, i) => (
                            <button
                              key={i}
                              onClick={() => handleQuickPreset(presetObj.text)}
                              className="text-[10px] bg-white/5 hover:bg-amber-500/20 hover:text-amber-300 px-2.5 py-1 rounded-md border border-white/5 text-slate-400 transition-all"
                            >
                              {presetObj.label}
                            </button>
                          ))}
                        </div>
                      </div>

                       {/* AI Status Bar */}
                      <div className="bg-[#121620] border border-white/10 rounded-xl p-3 flex items-center justify-between text-xs my-1">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                          <div className="text-left">
                            <span className="font-bold text-white block">
                              {lang === "ar" ? "مساعد السفر الذكي نشط ومستعد" : "AI Travel Assistant Active"}
                            </span>
                          </div>
                        </div>
                        {/* Free Trial Remaining Badge */}
                        <div className="text-right shrink-0">
                          {isPremium ? (
                            <span className="text-[10px] font-black tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded-md uppercase">
                              👑 {lang === "ar" ? "غير محدود" : "Unlimited"}
                            </span>
                          ) : (
                            activeAssistantTool === "budget-calculator" ? (
                              <span className={`text-[10px] font-black tracking-wider px-2 py-1 rounded-md uppercase ${remainingBudgetUses > 0 ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20" : "text-rose-400 bg-rose-500/10 border border-rose-500/20 animate-pulse"}`}>
                                {lang === "ar" ? `${remainingBudgetUses} تجارب مجانية` : `${remainingBudgetUses} Free Trials`}
                              </span>
                            ) : activeAssistantTool === "photo-spots" ? (
                              <span className={`text-[10px] font-black tracking-wider px-2 py-1 rounded-md uppercase ${remainingPhotoUses > 0 ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20" : "text-rose-400 bg-rose-500/10 border border-rose-500/20 animate-pulse"}`}>
                                {lang === "ar" ? `${remainingPhotoUses} تجارب مجانية` : `${remainingPhotoUses} Free Trials`}
                              </span>
                            ) : null
                          )}
                        </div>
                      </div>

                      <button
                        onClick={triggerTravelAssistant}
                        disabled={isAssistantLoading}
                        className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                      >
                        {isAssistantLoading ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin text-black" />
                            <span>{lang === "ar" ? "جاري الاستشارة والتحليل..." : "AI analyzing stats..."}</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>
                              {activeAssistantTool === "budget-calculator" ? (
                                lang === "ar" ? "حساب الميزانية التقديرية" : "Calculate My Budget"
                              ) : (
                                lang === "ar" ? "اقتراح أماكن التصوير" : "Recommend Photo Angles"
                              )}
                            </span>
                          </>
                        )}
                      </button>
                    </>
                  )}
                </div>

                {/* Right Side Result Visualizations */}
                <div className="lg:col-span-7 bg-black/40 border border-white/5 p-6 rounded-2xl min-h-[250px] flex flex-col justify-between">
                  
                  {isAssistantLoading && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-6 py-12">
                      <Loader2 className="w-10 h-10 text-amber-500 animate-spin mb-3" />
                      <p className="text-sm text-slate-300 font-bold">
                        {lang === "ar" ? "مساعد الذكاء الاصطناعي يقوم بالحسابات الجغرافية ومقارنة الأسعار..." : "Calculating live average costs & photo compositions..."}
                      </p>
                    </div>
                  )}

                  {!isAssistantLoading && !budgetResult && !photoResult && !errorAssistant && activeAssistantTool !== "currency-converter" && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-6 py-12 text-slate-500">
                      <Sparkles className="w-8 h-8 text-slate-700 mb-2" />
                      <p className="text-xs">
                        {lang === "ar" ? "النتائج ستظهر منسقة ومحللة بشكل تفصيلي هنا." : "Structured metrics and results will appear instantly here."}
                      </p>
                    </div>
                  )}

                  {errorAssistant && (
                    <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-rose-300">
                      <AlertCircle className="w-10 h-10 text-rose-500 mb-2" />
                      <p className="text-xs">{errorAssistant}</p>
                    </div>
                  )}

                  {/* 0. Render Currency Converter results */}
                  {activeAssistantTool === "currency-converter" && (() => {
                    const fromRate = exchangeRates[convFrom] || DEFAULT_RATES[convFrom] || 1.0;
                    const toRate = exchangeRates[convTo] || DEFAULT_RATES[convTo] || 1.0;
                    const rate = toRate / fromRate;
                    const convertedAmount = convAmount * rate;
                    const inverseRate = fromRate / toRate;
                    
                    const fromCurrencyObj = CURRENCY_LIST.find(c => c.code === convFrom);
                    const toCurrencyObj = CURRENCY_LIST.find(c => c.code === convTo);

                    const gccCurrencies = CURRENCY_LIST.filter(c => c.isGcc);
                    const worldCurrencies = CURRENCY_LIST.filter(c => !c.isGcc);

                    return (
                      <div className="space-y-6 w-full text-left">
                        {/* Primary Big Converter Display Card */}
                        <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 p-5 rounded-2xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                          
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                              {lang === "ar" ? "تحويل عملات فوري" : "Real-time Conversion"}
                            </span>
                            <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded-md font-bold">
                              {convFrom} ⇄ {convTo}
                            </span>
                          </div>

                          <div className="space-y-1">
                            <div className="text-xs text-slate-400">
                              {convAmount.toLocaleString()} {lang === "ar" ? fromCurrencyObj?.nameAr : fromCurrencyObj?.nameEn} =
                            </div>
                            <div className="text-3xl font-black text-white flex items-baseline gap-2 font-display">
                              <span>{convertedAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                              <span className="text-lg text-amber-500 font-bold">{toCurrencyObj?.symbol}</span>
                            </div>
                          </div>

                          {/* Rate Specs info */}
                          <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap justify-between gap-2 text-[11px] text-slate-400 font-mono">
                            <div>
                              1 {convFrom} = {rate.toFixed(4)} {convTo}
                            </div>
                            <div>
                              1 {convTo} = {inverseRate.toFixed(4)} {convFrom}
                            </div>
                          </div>
                        </div>

                        {/* GCC Currencies Section */}
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                              <span>🇰🇼</span>
                              <span>{lang === "ar" ? "عملات دول الخليج العربي" : "GCC Currencies"}</span>
                            </span>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                            {gccCurrencies.map((c) => {
                              const cRate = (exchangeRates[c.code] || DEFAULT_RATES[c.code] || 1.0) / fromRate;
                              const cAmount = convAmount * cRate;
                              const isSelected = convTo === c.code;
                              
                              return (
                                <button
                                  key={c.code}
                                  onClick={() => setConvTo(c.code)}
                                  className={`p-3 rounded-xl border text-left transition-all relative cursor-pointer hover:bg-white/5 ${isSelected ? "bg-amber-500/10 border-amber-500/40 animate-none" : "bg-black/20 border-white/5"}`}
                                >
                                  <div className="flex items-center gap-1.5 mb-1">
                                    <span className="text-base">{c.flag}</span>
                                    <span className="text-xs font-black text-white">{c.code}</span>
                                  </div>
                                  <div className="text-[10px] text-slate-400 truncate mb-1">
                                    {lang === "ar" ? c.nameAr : c.nameEn}
                                  </div>
                                  <div className="text-sm font-extrabold text-amber-500 font-display truncate">
                                    {cAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    <span className="text-[10px] text-slate-400 ml-1 font-normal">{c.symbol}</span>
                                  </div>
                                  {isSelected && (
                                    <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* World Currencies Section */}
                        <div className="space-y-2">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                            <span>🌍</span>
                            <span>{lang === "ar" ? "عملات عالمية رئيسية" : "Major Global Currencies"}</span>
                          </span>

                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                            {worldCurrencies.map((c) => {
                              const cRate = (exchangeRates[c.code] || DEFAULT_RATES[c.code] || 1.0) / fromRate;
                              const cAmount = convAmount * cRate;
                              const isSelected = convTo === c.code;

                              return (
                                <button
                                  key={c.code}
                                  onClick={() => setConvTo(c.code)}
                                  className={`p-3 rounded-xl border text-left transition-all relative cursor-pointer hover:bg-white/5 ${isSelected ? "bg-amber-500/10 border-amber-500/40 animate-none" : "bg-black/20 border-white/5"}`}
                                >
                                  <div className="flex items-center gap-1.5 mb-1">
                                    <span className="text-base">{c.flag}</span>
                                    <span className="text-xs font-black text-white">{c.code}</span>
                                  </div>
                                  <div className="text-[10px] text-slate-400 truncate mb-1">
                                    {lang === "ar" ? c.nameAr : c.nameEn}
                                  </div>
                                  <div className="text-sm font-extrabold text-white font-display truncate">
                                    {cAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    <span className="text-[10px] text-slate-400 ml-1 font-normal">{c.symbol}</span>
                                  </div>
                                  {isSelected && (
                                    <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  {/* 1. Render Budget Calculator results */}
                  {budgetResult && !isAssistantLoading && (
                    <div className="space-y-5 w-full">
                      <div className="border-b border-white/5 pb-2 flex justify-between items-start gap-4">
                        <span className="text-xs font-bold text-amber-500 uppercase mt-0.5">
                          {lang === "ar" ? "تحليل النفقات الذكي" : "Itemized Budget Intel"}
                        </span>
                        <div className="flex flex-col items-end gap-1">
                          <span className="text-sm font-black text-white">{formatCostWithLocalAndUSD(budgetResult.totalEstimatedCost, destination || generatedPlan?.destination || "London")}</span>
                          <button
                            onClick={() => {
                              const parsed = parseCostAmount(budgetResult.totalEstimatedCost);
                              setConvAmount(parsed.amount);
                              setConvFrom(parsed.detectedCurrency);
                              setActiveAssistantTool("currency-converter");
                            }}
                            className="text-[10px] text-amber-400 hover:text-amber-300 underline font-bold flex items-center gap-1 cursor-pointer"
                          >
                            <Globe className="w-3 h-3 text-amber-400" />
                            <span>{lang === "ar" ? "تحويل العملة" : "Convert"}</span>
                          </button>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 bg-white/5 p-3 rounded-lg border border-white/5">
                        {budgetResult.summary}
                      </p>

                      {/* Bar charts or lists with custom percentage meters */}
                      <div className="space-y-3">
                        <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 block">
                          {lang === "ar" ? "توزيع المصاريف المقترح:" : "Suggested Allocation Breakdown:"}
                        </span>
                        {budgetResult.breakdown?.map((item, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex justify-between items-center text-xs">
                              <span className="text-slate-300 font-medium">{item.category}</span>
                              <span className="text-amber-500 font-bold">{item.cost} ({item.percentage}%)</span>
                            </div>
                            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                              <div className="bg-amber-500 h-full" style={{ width: `${item.percentage}%` }}></div>
                            </div>
                            <span className="block text-[10px] text-slate-500 italic">
                              💡 {item.tips}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Smart Savings section */}
                      {budgetResult.smartSavingsAdvice && budgetResult.smartSavingsAdvice.length > 0 && (
                        <div className="bg-amber-500/5 p-3.5 rounded-xl border border-amber-500/10">
                          <span className="text-[10px] font-black uppercase text-amber-500 block mb-1">
                            💰 {lang === "ar" ? "نصائح ذكية لتقليل ميزانية السفر" : "Pro Hacks to Slash Costs"}
                          </span>
                          <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                            {budgetResult.smartSavingsAdvice.map((advice, i) => (
                              <li key={i}>{advice}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* 2. Render Photo spots results */}
                  {photoResult && !isAssistantLoading && (
                    <div className="space-y-4 w-full">
                      <div className="border-b border-white/5 pb-2">
                        <span className="text-xs font-bold text-amber-500 uppercase block">
                          📷 {lang === "ar" ? "دليل زوايا ومواقع التصوير الخلابة" : "High-Fidelity Photo Locations Guide"}
                        </span>
                        <h4 className="text-sm font-bold text-white mt-1">{photoResult.destination}</h4>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {photoResult.spots?.map((spot, i) => (
                          <div key={i} className="bg-white/5 border border-white/5 p-3 rounded-xl space-y-1">
                            <div className="flex justify-between items-start gap-1">
                              <span className="font-bold text-xs text-white block">{spot.name}</span>
                              <span className="text-[9px] bg-amber-500/15 text-amber-400 px-1.5 py-0.5 rounded uppercase shrink-0">
                                {spot.bestTime}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400">{spot.description}</p>
                            <div className="pt-1.5 border-t border-white/5 mt-1.5">
                              <span className="text-[10px] text-amber-500 font-bold block">
                                {lang === "ar" ? "نصيحة التصوير والزاوية:" : "Composition & Angle Hint:"}
                              </span>
                              <span className="text-[10px] text-slate-300 italic block">{spot.compositionTip}</span>
                            </div>
                            <span className="block text-[9px] text-slate-500 mt-1">
                              📍 {spot.exactLocationHint}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="text-[10px] text-slate-500 text-center mt-4">
                    {lang === "ar" ? "* تقديرات استشارية مبنية على مؤشرات أسعار السفر المحدثة لعام 2026." : "* Analytical travel cost estimates for year 2026."}
                  </div>

                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: PRE-MADE PLANS & TRAVEL GUIDES */}
        {activeTab === "travel-guides" && (
          <div className="space-y-10 animate-fade-in" id="premade-guides-view">
            
            {/* Introductory header */}
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs uppercase font-extrabold text-amber-500 tracking-widest block">
                {lang === "ar" ? "برامج سياحية متكاملة ومجربة" : "Tested Travel Blueprints"}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-white font-display">
                {lang === "ar" ? "خطط السفر الموصى بها مجاناً" : "Pre-Made Premium Itineraries"}
              </h2>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                {lang === "ar" ? (
                  "خطط جاهزة من تدوين خبراء ومسافرين محترفين. تصفح تفاصيل الأيام، الفعاليات، وروابط خرائط جوجل المباشرة فوراً."
                ) : (
                  "Explore high-fidelity templates crafted by travel bloggers. Access full lists, hidden gems, and directions without paying a single dime."
                )}
              </p>
            </div>

            {/* Your Rated Travel Plans Subsection */}
            {ratedPlans.length > 0 && (
              <div className="space-y-6 pt-6 border-t border-white/5" id="rated-plans-subsection">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
                    <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white font-display">
                      {lang === "ar" ? "خطط السفر المقيمة الخاصة بك" : "Your Rated Travel Plans"}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {lang === "ar" 
                        ? "الخطط التي قمت بتوليدها وتقييمها بالنجوم. انقر لعرضها وتحميلها مجدداً في ساحة العمل." 
                        : "Plans you have generated and rated. Click to instantly load them back into your workspace."}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ratedPlans.map((ratedItem) => (
                    <div 
                      key={ratedItem.id}
                      className="bg-[#0F1116] border border-white/10 rounded-2xl p-5 hover:border-amber-500/50 transition-all flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-2">
                        <div className="flex justify-between items-start gap-2">
                          <span className="text-[10px] bg-amber-500/10 text-amber-400 font-extrabold px-2 py-0.5 rounded">
                            📍 {ratedItem.plan.destination}
                          </span>
                          <span className="text-[10px] bg-white/5 text-slate-400 font-bold px-2 py-0.5 rounded">
                            {ratedItem.plan.duration} {lang === "ar" ? "أيام" : "Days"}
                          </span>
                        </div>

                        <h4 className="text-sm font-bold text-white line-clamp-1">
                          {lang === "ar" 
                            ? `رحلة إلى ${ratedItem.plan.destination}` 
                            : `Trip to ${ratedItem.plan.destination}`}
                        </h4>

                        {/* Stars */}
                        <div className="flex items-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star 
                              key={s} 
                              className={`w-3.5 h-3.5 ${
                                s <= ratedItem.rating 
                                  ? "fill-amber-500 text-amber-500" 
                                  : "text-slate-700"
                              }`}
                            />
                          ))}
                          <span className="text-[11px] text-amber-500 font-bold font-mono ml-1">
                            {ratedItem.rating}/5
                          </span>
                        </div>

                        <div className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                          {ratedItem.plan.travelTips?.[0] || (lang === "ar" ? "خطة مخصصة بالذكاء الاصطناعي." : "Custom AI-generated itinerary.")}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2 border-t border-white/5">
                        <button
                          onClick={() => handleLoadRatedPlan(ratedItem.plan)}
                          className="flex-1 py-1.5 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Sparkles className="w-3 h-3 text-black fill-black" />
                          <span>{lang === "ar" ? "عرض وتحميل الخطة" : "Load & View"}</span>
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(lang === "ar" ? "هل أنت متأكد من حذف هذا التقييم؟" : "Are you sure you want to delete this rating?")) {
                              setRatedPlans((prev) => {
                                const filtered = prev.filter((p) => p.id !== ratedItem.id);
                                localStorage.setItem("roamiq_rated_plans", JSON.stringify(filtered));
                                return filtered;
                              });
                            }
                          }}
                          className="p-2 bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 rounded-lg transition-colors cursor-pointer"
                          title={lang === "ar" ? "حذف التقييم" : "Delete Rating"}
                        >
                          <Trash className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-6 border-t border-white/5">
              <span className="text-xs uppercase font-extrabold text-amber-500 tracking-widest block text-center mb-2">
                {lang === "ar" ? "برامج سياحية متكاملة ومجربة" : "Tested Travel Blueprints"}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white font-display text-center mb-6">
                {lang === "ar" ? "أدلة السفر الجاهزة والموصى بها" : "Recommended Pre-Made Guides"}
              </h3>
            </div>

            {/* Grid display of guides */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PREDEFINED_GUIDES.map((guide) => (
                <div 
                  key={guide.id}
                  className="bg-[#0F1116] border border-white/10 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all flex flex-col justify-between"
                >
                  <div className="relative h-48 w-full bg-slate-900">
                    <img 
                      src={guide.coverImage} 
                      alt={guide.title}
                      className="w-full h-full object-cover opacity-80"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    
                    {/* Destination absolute tag */}
                    <span className="absolute bottom-3 left-4 bg-amber-500 text-black font-extrabold text-xs px-2.5 py-1 rounded">
                      📍 {lang === "ar" ? guide.destinationAr : guide.destination}
                    </span>

                    {/* Days absolute tag */}
                    <span className="absolute top-3 right-4 bg-black/60 backdrop-blur-sm text-white font-bold text-xs px-2.5 py-1 rounded border border-white/10">
                      {guide.days} {lang === "ar" ? "أيام" : "Days"}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-amber-500 font-bold">{lang === "ar" ? guide.budgetAr : guide.budget}</span>
                      {isPremium ? (
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                          🔓 {lang === "ar" ? "مفتوح بالاشتراك الذهبي" : "Gold Unlocked"}
                        </span>
                      ) : (
                        <span className="text-[10px] bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                          👑 {lang === "ar" ? "حصري للمشتركين الذهبيين" : "Gold Exclusive"}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-amber-500 transition-colors">
                      {lang === "ar" ? guide.titleAr : guide.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {lang === "ar" ? guide.shortDescriptionAr : guide.shortDescription}
                    </p>

                    <button
                      onClick={() => setSelectedGuide(guide)}
                      className="w-full py-2.5 bg-white/5 hover:bg-amber-500 hover:text-black border border-white/10 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                    >
                      <span>{lang === "ar" ? "قراءة وتصفح الخطة كاملة" : "Read & View Details"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Displaying detailed Selected Guide inside a beautiful interactive reader */}
            {selectedGuide && (
              <div className="bg-[#141720] border border-amber-500/20 p-6 md:p-8 rounded-2xl relative space-y-6 shadow-2xl">
                <button
                  onClick={() => setSelectedGuide(null)}
                  className="absolute top-4 right-4 text-xs text-slate-500 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1 rounded-md"
                >
                  {lang === "ar" ? "إغلاق القارئ ✕" : "Close Reader ✕"}
                </button>

                <div className="border-b border-white/10 pb-4">
                  <span className="text-xs bg-amber-500/10 text-amber-500 font-bold uppercase px-2.5 py-0.5 rounded">
                    {lang === "ar" ? "أدلة الخبراء الجاهزة" : "Expert Premium Guideline"}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-white mt-2">
                    {lang === "ar" ? selectedGuide.titleAr : selectedGuide.title}
                  </h3>
                  <span className="text-xs text-slate-400">
                    📍 {lang === "ar" ? selectedGuide.destinationAr : selectedGuide.destination} • {selectedGuide.days} {lang === "ar" ? "أيام" : "Days"}
                  </span>
                </div>

                {/* Preformatted Itinerary with copy option or premium wall */}
                {isPremium ? (
                  <>
                    <div className="bg-black/40 border border-white/5 p-5 rounded-xl font-mono text-xs text-slate-300 overflow-x-auto whitespace-pre-wrap leading-relaxed animate-fade-in">
                      {lang === "ar" ? selectedGuide.contentAr : selectedGuide.content}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/5">
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => handleCopy(lang === "ar" ? selectedGuide.contentAr : selectedGuide.content, `guide-${selectedGuide.id}`)}
                          className="px-4 py-2 bg-white/5 hover:bg-white/10 text-xs font-bold rounded-lg flex items-center gap-2 text-slate-300 hover:text-white"
                        >
                          {copiedTextId === `guide-${selectedGuide.id}` ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-green-500" />
                              <span>{lang === "ar" ? "تم نسخ الدليل!" : "Copied Guide!"}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-amber-500" />
                              <span>{lang === "ar" ? "نسخ الجدول كاملاً" : "Copy Full Guide"}</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => handleDownloadGuideHTML(selectedGuide)}
                          className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black text-xs font-black rounded-lg flex items-center gap-1.5 cursor-pointer shadow-lg hover:shadow-amber-500/20"
                        >
                          <Download className="w-3.5 h-3.5 stroke-[3]" />
                          <span>{lang === "ar" ? "تحميل HTML الفاخر" : "Download HTML"}</span>
                        </button>

                        <button
                          onClick={() => handleDownloadGuidePDF(selectedGuide)}
                          className="px-4 py-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-bold rounded-lg flex items-center gap-1.5 cursor-pointer border border-white/5"
                        >
                          <FileText className="w-3.5 h-3.5 text-amber-500" />
                          <span>{lang === "ar" ? "تصدير PDF (طباعة)" : "Export PDF (Print)"}</span>
                        </button>
                      </div>

                      <span className="text-[10px] text-emerald-400 font-extrabold">
                        {lang === "ar" ? "🔓 تم فتح الدليل بالكامل - متاح ضمن اشتراكك الذهبي" : "🔓 Full Premium Guide Access Unlocked via VIP Gold"}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="relative border border-amber-500/10 rounded-2xl overflow-hidden p-1">
                    <div className="bg-black/40 p-5 rounded-xl font-mono text-xs text-slate-500 overflow-y-hidden whitespace-pre-wrap leading-relaxed select-none blur-[4px] pointer-events-none h-44 overflow-hidden">
                      {(lang === "ar" ? selectedGuide.contentAr : selectedGuide.content).substring(0, 300)}...
                    </div>
                    
                    {/* Paywall Overlay */}
                    <div className="absolute inset-0 bg-black/85 backdrop-blur-[1.5px] rounded-xl flex flex-col items-center justify-center p-6 text-center">
                      <span className="text-3xl mb-2 animate-bounce">👑</span>
                      <h4 className="text-base font-black text-white">
                        {lang === "ar" ? "متاح حصرياً لمشتركي العضوية الذهبية VIP" : "Exclusive to Golden VIP Members"}
                      </h4>
                      <p className="text-[11px] text-slate-400 max-w-sm mt-1 mb-4 leading-relaxed">
                        {lang === "ar" 
                          ? "هذا الدليل السياحي الجاهز مجاني بالكامل لمشتركي العضوية الذهبية. اشترك الآن بخصم 80% لفتح جميع الأدلة والأدوات مدى الحياة!"
                          : "This ready-made travel plan is completely free for Golden Membership holders. Upgrade now at 80% off to unlock everything forever!"}
                      </p>
                      
                      <div className="flex flex-wrap justify-center gap-3 w-full max-w-md">
                        <button 
                          onClick={() => {
                            setShowSubscriptionModal(true);
                          }}
                          className="px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xs font-black rounded-xl transition-all shadow-lg shadow-amber-500/15 flex items-center gap-1.5 cursor-pointer scale-105"
                        >
                          <Crown className="w-3.5 h-3.5 text-black stroke-[3]" />
                          <span>{lang === "ar" ? "ترقية الاشتراك الذهبي الآن (29.99$)" : "Upgrade to Golden Lifetime VIP ($29.99)"}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

          </div>
        )}

        {/* TAB 3: PREMIUM DIGITAL PRODUCTS SHOP */}
        {activeTab === "shop" && (
          <div className="space-y-12 animate-fade-in" id="premium-shop-view">
            
            {/* Shop header & pitch */}
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs uppercase font-extrabold text-amber-500 tracking-widest block">
                {lang === "ar" ? "منتجات رقمية فاخرة للتصفح التفاعلي" : "Instant Access Premium Travel Products"}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-white font-display">
                {lang === "ar" ? "متجر المنتجات الرقمية الفاخرة" : "Premium Digital Travel Shop"}
              </h2>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                {lang === "ar" ? (
                  "خطط VIP، قوائم تحقق تفصيلية، خرائط تفاعلية جاهزة لخرائط جوجل ومخططات ميزانية ذكية. الدفع آمن ومحاكى بالكامل مع الكشف الفوري عن المحتويات!"
                ) : (
                  "Supercharge your vacation! Access premium travel lists, offline checklists, custom budgeting templates, and secret maps instantly after checkout."
                )}
              </p>
            </div>

            {/* Special Marketing Bundle Banner */}
            {(() => {
              const ultimateBundle = PREDEFINED_PRODUCTS.find(p => p.id === "prod-ultimate-bundle") || {
                id: "prod-ultimate-bundle",
                name: "Tripza Infinite Explorer Bundle - All 43 Guides Included! 🌟",
                nameAr: "الحزمة اللانهائية الكبرى - جميع الأدلة والملفات الرقمية 🌟",
                description: "Get immediate lifelong access to all 43 of our premium digital travel products. Save over 80% on schedules, secret maps, prompts, and templates.",
                descriptionAr: "احصل فوراً على وصول أبدي لجميع الملفات والخرائط الرقمية الـ 43 المتوفرة في المتجر بخصم يفوق 80% شاملة التحديثات المجانية.",
                price: 59.99,
                originalPrice: 125.00,
                type: "bundle",
                icon: "🌟"
              };
              const isUnlocked = unlockedProductIds.includes(ultimateBundle.id);
              return (
                <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-3xl p-6 md:p-8 text-black flex flex-col lg:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl shadow-amber-500/10">
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-black/5 rounded-full pointer-events-none"></div>
                  
                  <div className="space-y-2 text-center lg:text-left relative z-10">
                    <span className="inline-flex items-center gap-1 bg-black text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full">
                      🎁 {lang === "ar" ? "أفضل قيمة توفيرية كبرى" : "BEST SELLER ULTIMATE BUNDLE"}
                    </span>
                    <h3 className="text-xl md:text-3xl font-black leading-tight">
                      {lang === "ar" ? ultimateBundle.nameAr : ultimateBundle.name}
                    </h3>
                    <p className="text-xs font-semibold text-black/85 max-w-xl leading-relaxed">
                      {lang === "ar" ? ultimateBundle.descriptionAr : ultimateBundle.description}
                    </p>
                    {/* Bullet perks */}
                    <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-1 text-[10px] font-extrabold text-black/75">
                      <span>✓ {lang === "ar" ? "19 خطة ومستند متكامل" : "19 Full Travel Blueprints"}</span>
                      <span>✓ {lang === "ar" ? "خرائط دبابيس جوجل التفاعلية" : "Interactive Map Pins"}</span>
                      <span>✓ {lang === "ar" ? "قوالب وحاسبات ميزانية إكسل" : "Excel Financial Planners"}</span>
                      <span>✓ {lang === "ar" ? "تحديثات مجانية مدى الحياة" : "Lifetime Free Upgrades"}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 shrink-0 relative z-10 bg-black/5 p-4 rounded-2xl border border-black/5">
                    <div className="text-center lg:text-right">
                      <div className="text-3xl font-black text-black">${getProductPrice(ultimateBundle.price).toFixed(2)}</div>
                      <div className="text-xs line-through text-black/60 font-black">
                        {lang === "ar" ? `بدل من $${ultimateBundle.originalPrice?.toFixed(2)}` : `Worth $${ultimateBundle.originalPrice?.toFixed(2)}`}
                      </div>
                      <span className="text-[9px] text-white bg-black px-1.5 py-0.5 rounded font-black mt-1 inline-block uppercase">
                        {lang === "ar" ? "وفر 80% مدى الحياة" : "SAVE 80% FOREVER"}
                      </span>
                    </div>
                    
                    <button
                      onClick={() => handleBuyNow(ultimateBundle)}
                      className="px-6 py-3.5 bg-black hover:bg-neutral-900 text-white font-extrabold text-xs rounded-xl uppercase tracking-wider transition-all shadow-lg active:scale-95 cursor-pointer"
                    >
                      {isUnlocked ? (
                        lang === "ar" ? "تم تفعيل الحزمة الكبرى! تصفحها بالأسفل" : "Ultimate Bundle Unlocked!"
                      ) : (
                        lang === "ar" ? "احصل على العرض الشامل الآن" : "Claim Ultimate Bundle"
                      )}
                    </button>
                  </div>
                </div>
              );
            })()}

            {/* List of individual digital products */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PREDEFINED_PRODUCTS.map((prod) => {
                const isUnlocked = unlockedProductIds.includes(prod.id);
                return (
                  <div 
                    key={prod.id} 
                    className="bg-[#0F1116] border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-amber-500/30 transition-all relative"
                  >
                    {/* Badge top corner */}
                    {prod.badge && (
                      <span className="absolute top-4 right-4 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                        {lang === "ar" ? prod.badgeAr : prod.badge}
                      </span>
                    )}

                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl shadow-inner">
                        {prod.icon}
                      </div>

                      <div>
                        <h4 className="text-base font-bold text-white leading-snug">
                          {lang === "ar" ? prod.nameAr : prod.name}
                        </h4>
                        <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                          {prod.type.replace("_", " ")}
                        </span>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                        {lang === "ar" ? prod.descriptionAr : prod.description}
                      </p>

                      {/* Detailed Features quick preview */}
                      {(prod.features || prod.featuresAr) && (
                        <div className="pt-2 border-t border-white/5 space-y-1">
                          <span className="text-[10px] uppercase font-bold text-amber-500/80 tracking-wider block">
                            {lang === "ar" ? "مكونات ومزايا الدليل الحصري:" : "Product inclusions & features:"}
                          </span>
                          <ul className="grid grid-cols-1 gap-1">
                            {((lang === "ar" ? prod.featuresAr : prod.features) || []).slice(0, 3).map((feat, idx) => (
                              <li key={idx} className="text-[11px] text-slate-300 flex items-start gap-1">
                                <span className="text-amber-500 leading-none mt-0.5">•</span>
                                <span className="line-clamp-1">{feat}</span>
                              </li>
                            ))}
                          </ul>
                          {((lang === "ar" ? prod.featuresAr : prod.features) || []).length > 3 && (
                            <button
                              onClick={() => setViewingProductDetail(prod)}
                              className="text-[10px] text-slate-400 hover:text-amber-400 font-medium transition-colors flex items-center gap-0.5 mt-1"
                            >
                              {lang === "ar" ? `+ إظهار ${((lang === "ar" ? prod.featuresAr : prod.features) || []).length - 3} مزايا أخرى...` : `+ Show ${((lang === "ar" ? prod.featuresAr : prod.features) || []).length - 3} more...`}
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-white/5 mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="block text-[9px] text-slate-500 font-bold uppercase">{lang === "ar" ? "السعر الحصري" : "PRICE"}</span>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-lg font-black text-amber-500">${getProductPrice(prod.price).toFixed(2)}</span>
                          {prod.originalPrice && (
                            <span className="text-xs text-slate-500 line-through">${prod.originalPrice.toFixed(2)}</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* View Details Button */}
                        <button
                          onClick={() => setViewingProductDetail(prod)}
                          title={lang === "ar" ? "عرض تفاصيل المنتج ومحتوياته" : "View product details and specs"}
                          className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1"
                        >
                          <Info className="w-4 h-4 text-amber-500" />
                          <span className="sr-only sm:not-sr-only text-[10px]">
                            {lang === "ar" ? "التفاصيل" : "Details"}
                          </span>
                        </button>

                        {isUnlocked ? (
                          <span className="px-3 py-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-[10px] font-black uppercase flex items-center gap-1">
                            <Check className="w-3 h-3" />
                            {lang === "ar" ? "مفتوح" : "Unlocked"}
                          </span>
                        ) : (
                          <button
                            onClick={() => handleBuyNow(prod)}
                            className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-lg text-[10px] transition-all uppercase tracking-wider flex items-center gap-1"
                          >
                            <span>{lang === "ar" ? "شراء 💳" : "Unlock 💳"}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* UNLOCKED PRODUCTS PANEL: Users read the purchased files instantly! */}
            <div className="bg-[#0A0C10] border border-white/5 rounded-3xl p-6 md:p-8 space-y-6">
              <div className="border-b border-white/5 pb-3">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  {lang === "ar" ? "خزنة المحتويات التفاعلية والذكية" : "Your Premium Interactive Vault"}
                </h3>
                <p className="text-xs text-slate-400">
                  {lang === "ar" ? "المنتجات التي تقوم بشرائها تفتح هنا فوراً بنظام تصفح ذكي وتفاعلي وقارئ فاخر دون ملفات PDF جامدة." : "Your purchased products open immediately with rich responsive design features inside the live application vault."}
                </p>
              </div>

              {unlockedProductIds.length === 0 ? (
                <div className="text-center py-10 text-slate-600 space-y-2">
                  <Lock className="w-10 h-10 text-slate-700 mx-auto animate-pulse" />
                  <p className="text-xs max-w-sm mx-auto">
                    {lang === "ar" ? "لم تفتح أي منتجات بعد. قم بمحاكاة شراء أي منتج وسيتم تفعيل الملفات في الخزنة هنا فوراً!" : "No unlocked products yet. Tap 'Buy' on any template to instantly render full data contents here."}
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {PREDEFINED_PRODUCTS.filter(p => unlockedProductIds.includes(p.id)).map((prod) => (
                    <div key={prod.id} className="bg-[#0F1116] border border-emerald-500/20 rounded-xl p-5 md:p-6 space-y-4">
                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <div className="flex items-center gap-2">
                          <Unlock className="w-4 h-4 text-emerald-400" />
                          <h4 className="text-sm font-bold text-white">{lang === "ar" ? prod.nameAr : prod.name}</h4>
                        </div>
                        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded font-bold uppercase">
                          {lang === "ar" ? "تم التحقق والتشغيل التفاعلي" : "Secured & Interactive"}
                        </span>
                      </div>

                      {/* Purchased content reader snippet */}
                      <div className="bg-black/60 p-4 rounded-xl border border-white/5 text-xs font-mono text-slate-300 overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-48 opacity-90">
                        {lang === "ar" ? prod.contentAr?.slice(0, 300) + "..." : prod.content?.slice(0, 300) + "..."}
                      </div>

                      {/* Interactive view and copy triggers */}
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => handleCopy(lang === "ar" ? prod.contentAr! : prod.content!, `unlocked-copy-${prod.id}`)}
                          className="px-3.5 py-1.5 bg-white/5 hover:bg-white/10 text-xs text-slate-300 font-bold rounded flex items-center gap-1.5"
                        >
                          {copiedTextId === `unlocked-copy-${prod.id}` ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-green-500" />
                              <span>{lang === "ar" ? "تم نسخ النص!" : "Copied Content!"}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-amber-500" />
                              <span>{lang === "ar" ? "نسخ النص بالكامل" : "Copy Full Text"}</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => setReadingProduct(prod)}
                          className="px-3.5 py-1.5 bg-gradient-to-r from-amber-500/15 to-amber-600/15 hover:from-amber-500/25 hover:to-amber-600/25 text-xs text-amber-400 border border-amber-500/20 font-bold rounded flex items-center gap-1.5 transition-all active:scale-95"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                          <span>{lang === "ar" ? "فتح القارئ الفاخر 📖" : "Open Premium Reader 📖"}</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        )}

        {/* TAB 4: AFFILIATE EARNINGS & OFFERS */}
        {activeTab === "affiliates" && (
          <div className="space-y-12 animate-fade-in" id="affiliates-view">
            
            {/* Affiliate header */}
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs uppercase font-extrabold text-amber-500 tracking-widest block">
                {lang === "ar" ? "شركاء السفر العالميون" : "Official Global Partners"}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-white font-display">
                {lang === "ar" ? "عروض وحجوزات السفر الحصرية" : "Affiliate Deals & Booking Engine"}
              </h2>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                {lang === "ar" ? (
                  "نقوم بالربط مع كبار شركاء حجز الفنادق والطيران لتوفير أفضل العروض الحصرية والخصومات للمسافرين."
                ) : (
                  "We connect with major hotel and flight booking partners to provide exclusive deals and discounts for travelers."
                )}
              </p>
            </div>

            {/* List of active partner campaigns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Campaign 1: Booking.com */}
              <div className="bg-[#0F1116] border border-white/10 rounded-2xl p-5 flex flex-col justify-between space-y-5">
                <div className="space-y-2 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black text-blue-400">BOOKING.COM</span>
                    <span className="bg-rose-500/10 text-rose-400 text-[10px] font-bold px-2 py-0.5 rounded">
                      {lang === "ar" ? "وفر 15%" : "Save 15%"}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {lang === "ar" ? "حجوزات فنادق مخفضة" : "Exclusive Hotels Discount"}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lang === "ar" ? (
                      "احصل على خصومات حصرية للمسافرين الأعضاء في جميع فنادق العالم مع إلغاء مجاني لمعظم الغرف."
                    ) : (
                      "Unlock special Genius level pricing instantly and secure the absolute cheapest hotel rates worldwide."
                    )}
                  </p>
                </div>

                <a 
                  href="https://www.booking.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all"
                >
                  <span>{lang === "ar" ? "البحث عن فنادق مخفضة" : "Find Hotel Discounts"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Campaign 2: Skyscanner */}
              <div className="bg-[#0F1116] border border-white/10 rounded-2xl p-5 flex flex-col justify-between space-y-5">
                <div className="space-y-2 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black text-emerald-400">SKYSCANNER</span>
                    <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded">
                      {lang === "ar" ? "أرخص طيران" : "Compare Flight"}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {lang === "ar" ? "مقارنة تذاكر الطيران" : "Ultimate Flight Search"}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lang === "ar" ? (
                      "قارن بين أكثر من 1200 خط طيران وشركة سياحية للحصول على أرخص الأسعار والمسارات."
                    ) : (
                      "Scan across 1200+ global airlines & agencies to extract layover optimizations and flight rates."
                    )}
                  </p>
                </div>

                <a 
                  href="https://www.skyscanner.net" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all"
                >
                  <span>{lang === "ar" ? "مقارنة أسعار التذاكر" : "Search Cheap Flights"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Campaign 3: eSIM Instant Store */}
              <div className="bg-[#0F1116] border border-white/10 rounded-2xl p-5 flex flex-col justify-between space-y-5">
                <div className="space-y-2 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black text-amber-500">TRIPZA eSIM</span>
                    <span className="bg-amber-500/10 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded">
                      {lang === "ar" ? "تفعيل فوري" : "Instant 5G"}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {lang === "ar" ? "متجر باقات eSIM الفورية" : "Travel eSIM Internet Store"}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lang === "ar" ? (
                      "اختر باقة الإنترنت المناسبة لوجهتك لتوليد قسيمة تفعيل تفاعلية ورمز استجابة (QR) فوري."
                    ) : (
                      "Instant activation eSIM data shop. Buy packages for any territory with real-time QR credentials."
                    )}
                  </p>
                </div>

                <button 
                  onClick={() => setIsEsimModalOpen(true)}
                  className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-black rounded-xl text-xs font-extrabold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-all"
                >
                  <Wifi className="w-3.5 h-3.5" />
                  <span>{lang === "ar" ? "باقات eSIM الفورية" : "Buy instant eSIM"}</span>
                </button>
              </div>

              {/* Campaign 4: Premium Car Rental */}
              <div className="bg-[#0F1116] border border-white/10 rounded-2xl p-5 flex flex-col justify-between space-y-5">
                <div className="space-y-2 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black text-blue-400">TRIPZA CARS</span>
                    <span className="bg-blue-500/10 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded">
                      {lang === "ar" ? "تأمين شامل مجاني" : "Full Cover"}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {lang === "ar" ? "حجز واستئجار السيارات" : "Luxury Car Rental"}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {lang === "ar" ? (
                      "قارن الفئات (اقتصادية، عائلية SUV، VIP) واحسب مدة الإيجار مع تأكيد وقسيمة حجز رقمية."
                    ) : (
                      "Compare SUV, family, and VIP options. Instantly calculate rentals with free comprehensive insurance."
                    )}
                  </p>
                </div>

                <button 
                  onClick={() => setIsCarModalOpen(true)}
                  className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-all"
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>{lang === "ar" ? "محرك حجز السيارات" : "Rent Luxury Car"}</span>
                </button>
              </div>

            </div>



          </div>
        )}

        {/* TAB 5: BLOG & TRAVEL WISDOM HUB */}
        {activeTab === "blog" && (
          <div className="space-y-12 animate-fade-in" id="blog-view">
            
            {/* Header section */}
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs uppercase font-extrabold text-amber-500 tracking-widest block">
                {lang === "ar" ? "مستودع المعرفة وإلهام المسافرين" : "TRAVEL WISDOM & STRATEGY HUB"}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-white font-display">
                {lang === "ar" ? "مدونة السفر الذكي والوجهات" : "Smart Traveler Hub & Blog"}
              </h2>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                {lang === "ar" ? (
                  "مقالات استراتيجية حقيقية مكتوبة بأيدي خبراء لمساعدتك على السفر بذكاء وتوفير آلاف الدولارات."
                ) : (
                  "In-depth articles and guides written by travel veterans to help you optimize budgets and travel confidently."
                )}
              </p>
            </div>

            {/* Newsletter CRO Section */}
            <div className="bg-[#0F1116] border border-amber-500/10 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
              <div className="space-y-2 text-left w-full md:w-3/5">
                <span className="bg-amber-500/10 text-amber-400 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-amber-500/20">
                  {lang === "ar" ? "نشرة بريدية مجانية" : "FREE WEEKLY NEWSLETTER"}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {lang === "ar" ? "اشترك للحصول على ثغرات السفر السرية أسبوعياً! 📨" : "Unlock hidden travel loopholes delivered weekly! 📨"}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {lang === "ar" ? (
                    "انضم إلى 12,840 مسافر ذكي يتلقون أسبوعياً نصائح التوفير السرية، وتخفيضات الفنادق، وأدلة الميزانيات المحدثة فوراً."
                  ) : (
                    "Join 12,840+ savvy explorers receiving secret discount alerts, cheap flight tricks, and custom packing matrices."
                  )}
                </p>
              </div>

              <div className="w-full md:w-2/5">
                {newsletterSubscribed ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl text-center space-y-1">
                    <span className="text-emerald-400 font-bold block text-sm">🎉 {lang === "ar" ? "تم اشتراكك بنجاح!" : "Welcome to the Crew!"}</span>
                    <span className="text-[10px] text-slate-400 block">{lang === "ar" ? "تفقد بريدك الإلكتروني قريباً لاستلام هديتك الترحيبية." : "Check your inbox shortly for your premium entry gift."}</span>
                  </div>
                ) : (
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (newsletterEmail.trim()) {
                        setNewsletterSubscribed(true);
                      }
                    }}
                    className="flex flex-col sm:flex-row gap-2"
                  >
                    <input 
                      type="email"
                      required
                      placeholder={lang === "ar" ? "بريدك الإلكتروني الحقيقي" : "Your primary email"}
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500/50 placeholder:text-slate-500"
                    />
                    <button 
                      type="submit"
                      className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black text-xs font-black rounded-xl uppercase tracking-wider transition-all active:scale-95 shrink-0"
                    >
                      {lang === "ar" ? "اشترك الآن" : "Subscribe"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex gap-2 border-b border-white/5 pb-4 overflow-x-auto text-xs">
              <button 
                onClick={() => setBlogCategory("all")}
                className={`px-4 py-2 rounded-lg font-bold transition-all shrink-0 ${blogCategory === "all" ? "bg-amber-500 text-black" : "bg-white/5 text-slate-300 hover:text-white"}`}
              >
                {lang === "ar" ? "كل المقالات" : "All Articles"}
              </button>
              <button 
                onClick={() => setBlogCategory("hotels")}
                className={`px-4 py-2 rounded-lg font-bold transition-all shrink-0 ${blogCategory === "hotels" ? "bg-amber-500 text-black" : "bg-white/5 text-slate-300 hover:text-white"}`}
              >
                🏨 {lang === "ar" ? "أسرار الفنادق" : "Hotel Secrets"}
              </button>
              <button 
                onClick={() => setBlogCategory("budget")}
                className={`px-4 py-2 rounded-lg font-bold transition-all shrink-0 ${blogCategory === "budget" ? "bg-amber-500 text-black" : "bg-white/5 text-slate-300 hover:text-white"}`}
              >
                💰 {lang === "ar" ? "توفير الميزانية" : "Budget Hacks"}
              </button>
              <button 
                onClick={() => setBlogCategory("tips")}
                className={`px-4 py-2 rounded-lg font-bold transition-all shrink-0 ${blogCategory === "tips" ? "bg-amber-500 text-black" : "bg-white/5 text-slate-300 hover:text-white"}`}
              >
                💡 {lang === "ar" ? "نصائح السفر" : "Expert Tips"}
              </button>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BLOG_ARTICLES.filter(article => blogCategory === "all" || article.category === blogCategory).map((article) => (
                <div 
                  key={article.id} 
                  className="bg-[#0F1116] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-amber-500/30 transition-all duration-300 shadow-lg"
                  id={`article-card-${article.id}`}
                >
                  {/* Visual Header Gradient Mocking Cover Photo */}
                  <div className="h-44 bg-gradient-to-r from-slate-900 via-amber-900/10 to-slate-900 relative p-6 flex flex-col justify-between overflow-hidden">
                    <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 to-transparent opacity-30"></div>
                    <span className="self-start bg-amber-500 text-black text-[9px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow">
                      {lang === "ar" ? article.categoryLabelAr : article.categoryLabelEn}
                    </span>
                    
                    <div className="space-y-1 relative z-10 text-left">
                      <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1 font-bold">
                        📅 {lang === "ar" ? article.dateAr : article.dateEn} • ⏱️ {lang === "ar" ? article.readTimeAr : article.readTimeEn}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 space-y-3 flex flex-col justify-between text-left">
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {lang === "ar" ? article.titleAr : article.titleEn}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {lang === "ar" ? article.excerptAr : article.excerptEn}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <button 
                        onClick={() => setReadingBlogArticle(article.id)}
                        className="text-xs text-amber-500 hover:text-amber-400 font-black uppercase flex items-center gap-1.5 group-hover:translate-x-1 transition-all"
                      >
                        <span>{lang === "ar" ? "قراءة المقال بالكامل ←" : "Read Full Article →"}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Reading Article Modal */}
            {readingBlogArticle && (() => {
              const article = BLOG_ARTICLES.find(a => a.id === readingBlogArticle);

              if (!article) return null;

              return (
                <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto" id="article-reader-modal">
                  <div className="bg-[#0F1116] border border-white/10 rounded-3xl p-6 md:p-8 max-w-2xl w-full space-y-6 relative text-slate-200 animate-fade-in my-8">
                    <button
                      onClick={() => setReadingBlogArticle(null)}
                      className="absolute top-4 right-4 text-slate-400 hover:text-white text-xs bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded-lg border border-white/5"
                    >
                      {lang === "ar" ? "✕ إغلاق" : "✕ Close"}
                    </button>

                    <div className="space-y-2 text-left pt-4">
                      <span className="bg-amber-500 text-black text-[9px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                        {lang === "ar" ? article.categoryLabelAr : article.categoryLabelEn}
                      </span>
                      <h2 className="text-xl md:text-3xl font-bold text-white leading-tight">
                        {lang === "ar" ? article.titleAr : article.titleEn}
                      </h2>
                      <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest font-bold">
                        📅 {lang === "ar" ? article.dateAr : article.dateEn} • ⏱️ {lang === "ar" ? article.readTimeAr : article.readTimeEn}
                      </p>
                    </div>

                    <div className="border-t border-white/5 pt-6 text-left text-xs md:text-sm text-slate-300 leading-relaxed space-y-4 whitespace-pre-wrap">
                      {lang === "ar" ? article.bodyAr : article.bodyEn}
                    </div>

                    <div className="border-t border-white/5 pt-4 flex justify-end">
                      <button
                        onClick={() => setReadingBlogArticle(null)}
                        className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-bold rounded-xl transition-all"
                      >
                        {lang === "ar" ? "إغلاق مقال الخبير" : "Close Article"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}

          </div>
        )}

        {/* TAB 6: ABOUT US, FAQ & REFUND GUARANTEE */}
        {activeTab === "about" && (
          <div className="space-y-12 animate-fade-in" id="about-view">
            
            {/* Header section */}
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs uppercase font-extrabold text-amber-500 tracking-widest block">
                {lang === "ar" ? "تعرف على عائلة TRIPZA AI" : "MEET THE TEAM & MISSION"}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-white font-display">
                {lang === "ar" ? "قصتنا ورسالتنا الذكية" : "About Us & FAQ"}
              </h2>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                {lang === "ar" ? (
                  "نسعى لتمكين كل عائلة عربية من التخطيط لرحلاتها بذكاء وموثوقية بالاعتماد على أحدث نماذج الذكاء الاصطناعي وخبراء السفر البشريين."
                ) : (
                  "Our mission is to enable automated, highly budget-optimized, stress-free custom travel planning for global explorers."
                )}
              </p>
            </div>

            {/* Two Column Story & Certificate Badge */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Brand Story (Left) */}
              <div className="lg:col-span-7 bg-[#0F1116] border border-white/10 rounded-3xl p-6 md:p-8 space-y-4 flex flex-col justify-between text-left">
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    🚀 {lang === "ar" ? "كيف بدأنا رحلتنا؟" : "How We Revolutionized Travel Planning"}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    {lang === "ar" ? (
                      "ولدت فكرة Tripza AI من قلب المعاناة والوقت المهدر في التخطيط للسفر. كنا نقضي أسابيع طويلة نقارن جداول القطارات، نبحث عن مقاهٍ سرية، ونكتب لوائح التعبئة يدوياً في ملفات نصية مبعثرة."
                    ) : (
                      "Tripza AI was born from the frustrating weeks wasted comparing train tables, researching secret view points on scattered blogs, and managing paper packing lists."
                    )}
                  </p>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    {lang === "ar" ? (
                      "قمنا بدمج التكنولوجيا الفائقة للذكاء الاصطناعي مع خبرة السفر التراكمية لأكثر من 50 مرشداً بشرياً محترفاً. النتيجة؟ نظام تخطيط يمنحك خطة سفر متكاملة وحقيقية ومفصلة بالدقائق في أقل من 30 ثانية وبأرخص تكلفة ممكنة."
                    ) : (
                      "By layering modern AI models with hard-earned feedback from over 50 human travel veterans, we built an engine that designs custom, bulletproof schedules in under 30 seconds."
                    )}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-4 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span className="text-lg md:text-2xl font-black text-amber-500 block">34,500+</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">{lang === "ar" ? "خطة منشأة" : "Trips Planned"}</span>
                  </div>
                  <div>
                    <span className="text-lg md:text-2xl font-black text-amber-500 block">43+</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">{lang === "ar" ? "منتج جاهز" : "Digital Guides"}</span>
                  </div>
                  <div>
                    <span className="text-lg md:text-2xl font-black text-amber-500 block">99.4%</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">{lang === "ar" ? "تقييم إيجابي" : "Satisfaction"}</span>
                  </div>
                </div>
              </div>

              {/* Digital Nature - No Refund Policy (Right) */}
              <div className="lg:col-span-5 bg-gradient-to-tr from-amber-500/10 via-[#0F1116] to-[#0F1116] border-2 border-amber-500/30 rounded-3xl p-6 md:p-8 flex flex-col justify-between text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl"></div>
                
                <div className="space-y-4">
                  {/* Large Icon Seal */}
                  <div className="w-20 h-20 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center text-4xl mx-auto shadow-lg text-amber-500">
                    🔒
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {lang === "ar" ? "سياسة تسليم وحماية المنتجات الرقمية" : "Digital Asset Delivery Policy"}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lang === "ar" ? (
                      "نظراً لطبيعة المنتجات الرقمية القابلة للتنزيل الفوري والكامل (ملفات وخرائط تفاعلية)، فإن جميع المبيعات نهائية وغير قابلة للاسترداد. يضمن هذا الإجراء حماية حقوق النشر وتعب خبراء السفر ومنع إساءة استخدام الخدمة (تنزيل الملفات ثم المطالبة بالإرجاع). نلتزم بتقديم أدلة فائقة الجودة وتحديثها باستمرار مجاناً."
                    ) : (
                      "Due to the immediate, downloadable nature of our premium travel guides and custom maps, all sales are strictly final and non-refundable. This standard policy prevents abuse and protects our experts' hard work. We are committed to providing peerless accuracy and free lifetime updates."
                    )}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-4 text-[10px] text-amber-500 uppercase tracking-widest font-mono flex items-center justify-center gap-1.5 font-bold">
                  <span>🛡️ {lang === "ar" ? "حماية الملكية الفكرية وجهود الخبراء" : "Protected Assets & Expert Support"}</span>
                </div>
              </div>

            </div>

            {/* FAQ Accordion Section */}
            <div className="bg-[#0F1116] border border-white/10 rounded-3xl p-6 md:p-8 space-y-6 text-left">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-amber-500 tracking-wider block">
                  {lang === "ar" ? "إجابات فورية لجميع مخاوفك" : "HAVE QUESTIONS? WE HAVE ANSWERS"}
                </span>
                <h3 className="text-lg md:text-2xl font-bold text-white">
                  {lang === "ar" ? "الأسئلة الشائعة الأكثر طرحاً (FAQ)" : "Frequently Asked Questions"}
                </h3>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    qAr: "هل تعمل الخطط والملفات المفتوحة في وضع عدم الاتصال (Offline)؟",
                    qEn: "Do the unlocked guides work offline while traveling?",
                    aAr: "نعم، تماماً! فور حجز أي منتج رقمي، يمكنك تصفحه عبر المتصفح في وضع الأوفلاين، كما نوفر لك زراً لتحميل النسخة الفاخرة كملف HTML مدمج جاهز للطباعة والفتح في أي مكان بدون إنترنت على الإطلاق.",
                    aEn: "Yes! Once you buy any product, you can access it inside our offline vault. We also offer a one-click 'Download Premium HTML' button so you can store it offline on your smartphone."
                  },
                  {
                    qAr: "هل العضوية الذهبية مدى الحياة تتطلب أي اشتراكات شهرية لاحقة؟",
                    qEn: "Does the Lifetime VIP membership have recurring costs?",
                    aAr: "لا، على الإطلاق. العضوية الذهبية هي عملية دفع لمرة واحدة فقط مدى الحياة. ستحصل فورياً ومستقبلياً على كل ميزة جديدة نقوم بإضافتها، بما في ذلك توليد خطط الذكاء الاصطناعي بشكل غير محدود وبلا أي قيود يومية.",
                    aEn: "Absolutely not. The Golden VIP membership is a strictly one-time payment. You gain permanent unlimited access with zero recurring subscription bills forever."
                  },
                  {
                    qAr: "هل هناك إمكانية لاسترداد الأموال بعد الشراء وتنزيل الملفات؟",
                    qEn: "Is there a refund option after purchasing and downloading files?",
                    aAr: "لا، نظراً لأن المنتجات رقمية بالكامل وقابلة للتنزيل الفوري والاحتفاظ بها على جهازك للأبد، فإن جميع المبيعات نهائية وغير قابلة للاسترداد. يمنع هذا الإجراء إساءة الاستخدام المتمثلة في تنزيل جميع أدلتنا ثم طلب استعادة الأموال. نحن نضمن لك دقة فائقة وقيمة توفر لك مئات أضعاف سعر الدليل الفعلي.",
                    aEn: "No. Since these are fully digital products that are instantly downloaded and saved to your device forever, all purchases are final and non-refundable. This standard policy prevents users from downloading all our guides and then claiming a refund. We guarantee extreme travel value that saves you hundreds of dollars."
                  },
                  {
                    qAr: "كيف تختلف أدلتكم الجاهزة عن نتائج البحث العادية في جوجل؟",
                    qEn: "How do your guides differ from standard Google search results?",
                    aAr: "أدلتنا الرقمية مصممة ومختبرة ميدانياً من قبل خبراء سافروا فعلياً لهذه البلدان، وهي مرتبة في جداول زمنية بالدقائق والروابط التفاعلية المباشرة لخرائط جوجل السرية، وقوائم التعبئة التفاعلية، مما يوفر عليك أكثر من 40 ساعة من البحث المتعب والمضلل.",
                    aEn: "Our guides are curated by real travel experts who have spent years exploring those cities. They include verified interactive Google Maps, exact hour-by-hour schedules, and custom checklists that eliminate 40+ hours of search fatigue."
                  }
                ].map((faq, i) => (
                  <div 
                    key={i} 
                    className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
                    id={`faq-item-${i}`}
                  >
                    <button
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full px-5 py-4 flex items-center justify-between text-slate-200 hover:text-white hover:bg-white/5 transition-all font-bold text-xs md:text-sm text-left"
                    >
                      <span>{lang === "ar" ? faq.qAr : faq.qEn}</span>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform text-amber-500 duration-300 ${activeFaq === i ? "rotate-90" : ""}`} />
                    </button>
                    
                    {activeFaq === i && (
                      <div className="px-5 pb-4 pt-1 text-xs md:text-sm text-slate-400 border-t border-white/5 bg-black/20 leading-relaxed text-left">
                        {lang === "ar" ? faq.aAr : faq.aEn}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </main>

      {/* 2.5 PREMIUM PRODUCT DETAILS MODAL */}
      {viewingProductDetail && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto" id="product-details-modal">
          <div className="bg-[#0F1116] border border-white/10 rounded-3xl p-6 md:p-8 max-w-xl w-full space-y-6 relative animate-fade-in text-slate-200 my-8">
            
            <button
              onClick={() => setViewingProductDetail(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xs bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded transition-all"
            >
              ✕
            </button>

            {/* Modal Title / Icon */}
            <div className="flex items-start gap-4 text-left">
              <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex items-center justify-center text-3xl shrink-0 shadow-lg">
                {viewingProductDetail.icon}
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="bg-amber-500 text-black text-[9px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                    {lang === "ar" ? "منتج رقمي فاخر" : "PREMIUM ITEM"}
                  </span>
                  {viewingProductDetail.badge && (
                    <span className="bg-white/5 border border-white/10 text-amber-400 text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                      {lang === "ar" ? viewingProductDetail.badgeAr : viewingProductDetail.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white leading-tight">
                  {lang === "ar" ? viewingProductDetail.nameAr : viewingProductDetail.name}
                </h3>
                <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">
                  {viewingProductDetail.type.replace("_", " ")}
                </p>
              </div>
            </div>

            {/* Main Details Description */}
            <div className="space-y-2 text-left">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {lang === "ar" ? "نظرة عامة على الدليل:" : "OVERVIEW & DESCRIPTION:"}
              </h4>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                {lang === "ar" 
                  ? (viewingProductDetail.detailsAr || viewingProductDetail.descriptionAr)
                  : (viewingProductDetail.details || viewingProductDetail.description)
                }
              </p>
            </div>

            {/* Features Checklist */}
            {(viewingProductDetail.features || viewingProductDetail.featuresAr) && (
              <div className="space-y-3 text-left">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {lang === "ar" ? "محتويات وعناصر الملف الكاملة:" : "COMPLETE FILE INCLUSIONS:"}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-black/30 p-4 rounded-xl border border-white/5">
                  {((lang === "ar" ? viewingProductDetail.featuresAr : viewingProductDetail.features) || []).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Premium Specs Grid */}
            <div className="space-y-2 text-left">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {lang === "ar" ? "المواصفات والميزات:" : "SPECS & FEATURES:"}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 space-y-0.5">
                  <span className="text-[9px] text-slate-500 uppercase block font-bold">{lang === "ar" ? "صيغة التسليم" : "Format"}</span>
                  <span className="text-xs text-slate-300 font-semibold">{lang === "ar" ? "تصفح ويب تفاعلي" : "Interactive Vault"}</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 space-y-0.5">
                  <span className="text-[9px] text-slate-500 uppercase block font-bold">{lang === "ar" ? "التحديثات" : "Updates"}</span>
                  <span className="text-xs text-slate-300 font-semibold">{lang === "ar" ? "مجانية مدى الحياة" : "Lifetime Free"}</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 space-y-0.5">
                  <span className="text-[9px] text-slate-500 uppercase block font-bold">{lang === "ar" ? "معدل التوفير" : "Expected savings"}</span>
                  <span className="text-xs text-emerald-400 font-bold">{lang === "ar" ? "حتى 30% للمصاريف" : "Up to 30% Off"}</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/5 space-y-0.5">
                  <span className="text-[9px] text-slate-500 uppercase block font-bold">{lang === "ar" ? "طريقة الدفع" : "Simulated pay"}</span>
                  <span className="text-xs text-amber-500 font-bold">{lang === "ar" ? "آمنة (تجريبية)" : "Safe Sandbox"}</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                  {lang === "ar" ? "الاستثمار المطلوب" : "INVESTMENT REQUIRED"}
                </span>
                <div className="flex items-baseline justify-center sm:justify-start gap-2">
                  <span className="text-2xl font-black text-amber-500">${viewingProductDetail.price.toFixed(2)}</span>
                  {viewingProductDetail.originalPrice && (
                    <>
                      <span className="text-sm text-slate-500 line-through">${viewingProductDetail.originalPrice.toFixed(2)}</span>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">
                        {lang === "ar" 
                          ? `وفر ${Math.round((1 - viewingProductDetail.price / viewingProductDetail.originalPrice) * 100)}%`
                          : `${Math.round((1 - viewingProductDetail.price / viewingProductDetail.originalPrice) * 100)}% OFF`
                        }
                      </span>
                    </>
                  )}
                </div>
              </div>

              {unlockedProductIds.includes(viewingProductDetail.id) ? (
                <div className="w-full sm:w-auto text-center">
                  <span className="w-full sm:w-auto px-6 py-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl text-xs font-black uppercase flex items-center justify-center gap-2">
                    <Check className="w-4 h-4" />
                    {lang === "ar" ? "تم فتح المنتج بنجاح!" : "Product Unlocked!"}
                  </span>
                </div>
              ) : (
                <div className="flex w-full sm:w-auto gap-2">
                  <button
                    onClick={() => setViewingProductDetail(null)}
                    className="w-1/2 sm:w-auto px-4 py-3 bg-white/5 hover:bg-white/10 text-slate-300 font-bold text-xs rounded-xl transition-all"
                  >
                    {lang === "ar" ? "إغلاق" : "Close"}
                  </button>
                  <button
                    onClick={() => {
                      const prod = viewingProductDetail;
                      setViewingProductDetail(null);
                      handleBuyNow(prod);
                    }}
                    className="w-1/2 sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs rounded-xl uppercase tracking-wider transition-all shadow-lg shadow-amber-500/10 active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <span>{lang === "ar" ? "امتلك وافتح الآن 💳" : "Buy & Unlock Now 💳"}</span>
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* 3. SIMULATED STRIPE CHECKOUT MODAL */}
      {purchasingProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" id="checkout-modal">
          <div className="bg-[#0F1116] border border-white/10 rounded-2xl p-6 md:p-8 max-w-md w-full space-y-6 relative animate-fade-in text-slate-200">
            
            <button
              onClick={() => setPurchasingProduct(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-white text-xs bg-white/5 hover:bg-white/10 px-2 py-1 rounded"
            >
              ✕
            </button>

            {/* Modal Title */}
            <div className="text-center space-y-1">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-2 text-black">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                {lang === "ar" ? "بوابة الدفع الآمنة (محاكاة)" : "Secure Checkout (Sandbox)"}
              </h3>
              <p className="text-xs text-slate-400">
                {lang === "ar" ? "قم بمحاكاة الدفع لفتح منتجك الرقمي فوراً." : "Simulate payment to instantly unlock full templates."}
              </p>
            </div>

            {/* Product Summary */}
            <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white block">
                  {lang === "ar" ? purchasingProduct.nameAr : purchasingProduct.name}
                </span>
                <span className="text-[10px] text-slate-500 uppercase">
                  {purchasingProduct.type}
                </span>
              </div>
              <span className="text-lg font-black text-amber-500">${getProductPrice(purchasingProduct.price).toFixed(2)}</span>
            </div>

            {/* Success message or real PayPal gateway */}
            {paymentSuccess ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl text-center space-y-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center mx-auto text-black">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{lang === "ar" ? "اكتملت عملية الدفع بنجاح!" : "Payment Successful!"}</h4>
                  <p className="text-xs text-slate-300">
                    {lang === "ar" ? "تم فتح المنتج الرقمي وإضافته إلى خزنتك بالأسفل." : "Your digital item is unlocked and ready below."}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setPaymentSuccess(false);
                    setPurchasingProduct(null);
                    // navigate to the shop unlocked panel
                    setActiveTab("shop");
                  }}
                  className="w-full py-2 bg-emerald-500 text-black text-xs font-bold rounded-lg uppercase transition-all hover:brightness-105"
                >
                  {lang === "ar" ? "تصفح ونسخ الملف الآن" : "View & Read Content"}
                </button>
              </div>
            ) : (
              /* Live Real PayPal Buttons Gateway */
              <div className="bg-[#002446]/20 border border-blue-500/20 p-4 rounded-xl space-y-4 text-left">
                <div className="text-[11px] text-sky-300 flex items-start gap-2 leading-relaxed">
                  <Info className="w-4 h-4 shrink-0 mt-0.5 text-sky-400" />
                  <div>
                    <p className="font-bold">
                      {lang === "ar" ? "بوابة دفع إلكتروني آمنة" : "Secure Electronic Payment Gateway"}
                    </p>
                    <p className="mt-1 opacity-85 text-[11px]">
                      {lang === "ar" 
                        ? "تدعم الدفع السريع المباشر بحساب PayPal الخاص بك، أو بالبطاقات الائتمانية والخصم المباشر لغير المشتركين." 
                        : "Supports instant payment using your PayPal account, or debit/credit cards for guest users."}
                    </p>
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 border-t border-white/5 pt-2 flex items-center justify-between">
                  <span>{lang === "ar" ? "بيئة التشغيل:" : "Environment Status:"}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${paypalClientId === "sb" ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"}`}>
                    {paypalClientId === "sb" 
                      ? (lang === "ar" ? "تجريبية افتراضية (Sandbox)" : "Demo Sandbox Mode") 
                      : (lang === "ar" ? "حسابك المباشر (Production)" : "Production Live Connected")}
                  </span>
                </div>

                {paypalClientId === "sb" && (
                  <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl text-[9.5px] text-amber-500 leading-normal">
                    {lang === "ar"
                      ? "💡 لتشغيل بوابة الدفع على حسابك الحقيقي، أضف معرف PAYPAL_CLIENT_ID في إعدادات التطبيق."
                      : "💡 To connect your real business account, set PAYPAL_CLIENT_ID in the app Secrets settings."}
                  </div>
                )}

                {/* Official Smart Buttons Container */}
                <div id="paypal-button-container" className="my-2 min-h-[140px] bg-black/35 rounded-2xl p-4 flex flex-col justify-center items-center border border-white/10 shadow-inner">
                  {!paypalReady ? (
                    <div className="text-xs text-slate-400 flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
                      <span>{lang === "ar" ? "جاري الاتصال الآمن بـ PayPal..." : "Connecting securely to PayPal..."}</span>
                    </div>
                  ) : null}
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* 3.5 LIFETIME GOLDEN VIP PASS SUBSCRIPTION MODAL */}
      {showSubscriptionModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto" id="subscription-modal">
          <div className="bg-[#0F1116] border-2 border-amber-500/30 rounded-3xl p-6 md:p-8 max-w-lg w-full space-y-6 relative animate-fade-in text-slate-200 my-8 shadow-2xl shadow-amber-500/10">
            
            <button
              onClick={() => {
                setShowSubscriptionModal(false);
                setSubscriptionSuccess(false);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xs bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded-lg border border-white/5"
            >
              ✕
            </button>

            {/* Modal Title / Visual Brand Header */}
            <div className="text-center space-y-2">
              <div className="w-16 h-16 bg-gradient-to-tr from-yellow-500 via-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl shadow-amber-500/20 text-black text-3xl animate-pulse">
                👑
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white font-display tracking-tight">
                {lang === "ar" ? "ترقية العضوية الذهبية مدى الحياة" : "Lifetime Golden VIP Premium Pass"}
              </h3>
              <p className="text-xs text-amber-400 font-extrabold tracking-widest uppercase">
                {lang === "ar" ? "استثمار ذكي لمرة واحدة مدى الحياة" : "One-Time Payment • Unlimited Future Access"}
              </p>
            </div>

            {/* VIP Premium Perks List */}
            <div className="bg-black/50 border border-white/5 rounded-2xl p-4 space-y-3">
              <span className="text-[10px] uppercase font-bold text-amber-500 tracking-wider block">
                {lang === "ar" ? "ميزات العضوية الذهبية الشاملة:" : "COMPLETE UNLOCKED CAPABILITIES:"}
              </span>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs text-left">
                  <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold block">
                      {lang === "ar" ? "تخطيط ذكي غير محدود" : "Unlimited AI Travel Plan Generations"}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {lang === "ar" ? "قم بتوليد عدد لا نهائي من جداول السفر بدقة فائقة دون قيود يومية." : "No daily quotas or limits. Plan as many custom trips as you want."}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-left">
                  <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold block">
                      {lang === "ar" ? "تجاوز حد الاستخدام اليومي للمساعدين" : "Uncapped AI Assistant Access"}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {lang === "ar" ? "تواصل بلا حدود مع مستشاري الميزانية وخبراء قوائم التعبئة وزوايا التصوير." : "Chat endlessly with our specialist budget planning and photoshoot advisors."}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-left">
                  <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold block">
                      {lang === "ar" ? "مساعد السفر المتخصص غير محدود" : "Unlimited Specialist Travel Assistants"}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {lang === "ar" ? "استشارات حاسبة الميزانية وتوليد زوايا وأماكن التصوير الفاخرة بلا حدود." : "Query estimated budget breakdowns and photoshoot compositions endlessly."}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-left">
                  <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold block">
                      {lang === "ar" ? "محرك الذكاء الاصطناعي المطور والسريع" : "Supercharged Advanced AI Engine"}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {lang === "ar" ? "معالجة أسرع بـ 3 أضعاف مع تفعيل محركات الذكاء الاصطناعي الأقوى بدون مفتاح API خاص." : "Experience 3x faster response speeds using high-fidelity cloud intelligence models."}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Price tag block */}
            <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/15 border border-amber-500/20 p-4 rounded-xl flex items-center justify-between">
              <div className="text-left">
                <span className="text-[10px] text-amber-400 font-extrabold uppercase tracking-wider block">
                  {lang === "ar" ? "استثمار واحد $29.99 — وصول مدى الحياة" : "ONE-TIME INVESTMENT $29.99 — LIFETIME ACCESS"}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-amber-400">$29.99</span>
                  <span className="text-xs text-slate-500 line-through">$49.00</span>
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                    {lang === "ar" ? "وفر 80% مدى الحياة" : "SAVE 80% FOREVER"}
                  </span>
                </div>
              </div>
              <span className="text-[10px] bg-amber-500 text-black font-black px-2 py-1 rounded uppercase tracking-wider scale-95">
                {lang === "ar" ? "دفعة واحدة" : "One-Time"}
              </span>
            </div>

            {/* Success message or payment form */}
            {subscriptionSuccess ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto text-black text-xl font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-base font-black text-white">
                    {lang === "ar" ? "مبروك! تم تفعيل اشتراكك الذهبي مدى الحياة! 🎉" : "Congratulations! Lifetime Premium Activated! 🎉"}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {lang === "ar" 
                      ? "أنت الآن عضو ذهبي مع صلاحيات غير محدودة لجميع أدوات السفر والذكاء الاصطناعي لتخطيط الرحلات بلا قيود يومية." 
                      : "You are now a VIP Golden Member with unlimited access to all AI travel planners and assistants."}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowSubscriptionModal(false);
                    setSubscriptionSuccess(false);
                  }}
                  className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black rounded-xl uppercase transition-all shadow-md active:scale-95"
                >
                  {lang === "ar" ? "ابدأ الاستخدام الذهبي الفاخر 🚀" : "Launch Premium Experience 🚀"}
                </button>
              </div>
            ) : (
              /* Live PayPal buttons for subscription */
              <div className="bg-[#002446]/20 border border-blue-500/20 p-4 rounded-xl space-y-3 text-left">
                <div className="text-[11px] text-sky-300 flex items-start gap-2 leading-relaxed">
                  <Info className="w-4 h-4 shrink-0 mt-0.5 text-sky-400" />
                  <div>
                    <p className="font-bold">
                      {lang === "ar" ? "الدفع الإلكتروني الآمن والمباشر عبر PayPal" : "Secure PayPal Direct Subscription"}
                    </p>
                    <p className="mt-1 opacity-80 text-[10px]">
                      {lang === "ar" 
                        ? "قم بتفعيل العضوية الذهبية مدى الحياة فوراً بشكل آمن وتلقائي عبر بوابة PayPal الرسمية." 
                        : "Activate your lifetime VIP Membership securely and instantly using our official PayPal checkout."}
                    </p>
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 border-t border-white/5 pt-2 flex items-center justify-between">
                  <span>{lang === "ar" ? "بيئة التشغيل:" : "Environment Status:"}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${paypalClientId === "sb" ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"}`}>
                    {paypalClientId === "sb" 
                      ? (lang === "ar" ? "تجريبية افتراضية (Sandbox)" : "Demo Sandbox Mode") 
                      : (lang === "ar" ? "حسابك المباشر (Production)" : "Production Live Connected")}
                  </span>
                </div>

                {paypalClientId === "sb" && (
                  <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl text-[9.5px] text-amber-500 leading-normal">
                    {lang === "ar"
                      ? "💡 لتشغيل بوابة الدفع على حسابك الحقيقي، أضف معرف PAYPAL_CLIENT_ID في إعدادات التطبيق."
                      : "💡 To connect your real business account, set PAYPAL_CLIENT_ID in the app Secrets settings."}
                  </div>
                )}

                {/* Official Smart Buttons for subscription */}
                <div id="paypal-sub-button-container" className="my-2 min-h-[140px] bg-black/35 rounded-2xl p-4 flex flex-col justify-center items-center border border-white/10 shadow-inner">
                  {!paypalReady ? (
                    <div className="text-xs text-slate-400 flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
                      <span>{lang === "ar" ? "جاري ربط خوادم بايبال الآمنة..." : "Connecting securely to PayPal..."}</span>
                    </div>
                  ) : null}
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* 4. PREMIUM LUXURY INTERACTIVE DOCUMENT READER MODAL */}
      {readingProduct && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto" id="luxury-reader-modal">
          <div className="bg-[#0B0D13] border-2 border-amber-500/20 rounded-3xl p-6 md:p-10 max-w-3xl w-full my-8 space-y-8 relative animate-fade-in text-slate-100 shadow-2xl shadow-amber-500/5 max-h-[90vh] overflow-y-auto">
            
            {/* Elegant Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-center justify-center text-amber-500 text-lg">
                  👑
                </div>
                <div>
                  <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest block">
                    {lang === "ar" ? "المستند الرقمي الحصري المعتمد" : "VIP Certified Premium Document"}
                  </span>
                  <h3 className="text-lg md:text-xl font-black text-white leading-tight">
                    {lang === "ar" ? readingProduct.nameAr : readingProduct.name}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setReadingProduct(null)}
                className="text-slate-400 hover:text-white text-xs bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/5 font-bold transition-all"
              >
                {lang === "ar" ? "إغلاق القارئ ✕" : "Close Reader ✕"}
              </button>
            </div>

            {/* Premium Document Stamp */}
            <div className="absolute top-24 right-10 md:right-16 pointer-events-none opacity-10 transform rotate-12 select-none">
              <div className="border-4 border-emerald-500 text-emerald-500 text-[14px] font-black px-4 py-2 rounded-lg tracking-widest uppercase">
                {lang === "ar" ? "معتمد VIP نشط" : "VIP VERIFIED ACTIVE"}
              </div>
            </div>

            {/* Interactive Document Body */}
            <div className="space-y-6 text-sm leading-relaxed text-slate-300">
              {(() => {
                const text = lang === "ar" ? readingProduct.contentAr || readingProduct.content! : readingProduct.content!;
                const lines = text.split("\n");
                return (
                  <div className="space-y-4">
                    {lines.map((line, idx) => {
                      const trimmed = line.trim();
                      if (!trimmed) return <div key={idx} className="h-2" />;

                      // Divider lines
                      if (trimmed.startsWith("===") || trimmed.startsWith("---")) {
                        return <div key={idx} className="border-t border-amber-500/10 my-4" />;
                      }

                      // Major titles (e.g., SWITZERLAND 10-DAY, TURKEY 7 DAYS, THE ULTIMATE CHECKLIST)
                      if (trimmed.toUpperCase() === trimmed && trimmed.length > 5 && !trimmed.startsWith("-") && !trimmed.startsWith("[ ]") && !trimmed.startsWith("[")) {
                        return (
                          <h4 key={idx} className="text-base md:text-lg font-black text-amber-400 font-display tracking-wide uppercase pt-4">
                            {line}
                          </h4>
                        );
                      }

                      // Subheaders like DAY 1:, اليوم 1:
                      if (trimmed.startsWith("DAY") || trimmed.startsWith("Day") || trimmed.startsWith("اليوم")) {
                        return (
                          <div key={idx} className="bg-amber-500/5 border border-amber-500/10 px-4 py-2 rounded-xl mt-4">
                            <h5 className="font-bold text-amber-500 text-sm md:text-base flex items-center gap-2">
                              <span>🌟</span>
                              <span>{line}</span>
                            </h5>
                          </div>
                        );
                      }

                      // Checklist/bullet items
                      if (trimmed.startsWith("-") || trimmed.startsWith("[ ]") || trimmed.startsWith("[x]")) {
                        const contentText = trimmed.replace(/^-\s*/, "").replace(/^\[\s*\]\s*/, "").replace(/^\[x\]\s*/, "");
                        return (
                          <label key={idx} className="flex items-start gap-3 p-2 hover:bg-white/5 rounded-lg transition-all cursor-pointer group">
                            <input 
                              type="checkbox" 
                              className="mt-1 accent-amber-500 rounded border-white/20 bg-black/40 text-amber-500 focus:ring-amber-500"
                            />
                            <span className="text-xs md:text-sm text-slate-300 group-hover:text-white transition-colors">
                              {contentText}
                            </span>
                          </label>
                        );
                      }

                      // Key-Value pairs or instructions with colon
                      if (trimmed.includes(":")) {
                        const parts = line.split(":");
                        const label = parts[0];
                        const val = parts.slice(1).join(":");
                        return (
                          <div key={idx} className="pl-2 border-l border-white/10 py-1 text-xs md:text-sm">
                            <span className="font-bold text-slate-100">{label}:</span>
                            <span className="text-slate-300">{val}</span>
                          </div>
                        );
                      }

                      // Normal lines
                      return (
                        <p key={idx} className="text-xs md:text-sm text-slate-400 pl-2">
                          {line}
                        </p>
                      );
                    })}
                  </div>
                );
              })()}
            </div>

            {/* Download and Printing Unlocked */}
            <div className="bg-amber-500/10 border border-amber-500/20 p-5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {lang === "ar" ? "🔓 تم فتح التحميل والطباعة بنجاح" : "🔓 Export & Print System Active"}
                </h4>
                <p className="text-[10px] text-slate-300 mt-1 max-w-md">
                  {lang === "ar" 
                    ? "يمكنك الآن تحميل هذا الدليل كملف نصي كامل (.txt) للاحتفاظ به دون اتصال، أو حفظه وتصديره كملف PDF عالي الجودة للطباعة الفاخرة."
                    : "You can now download this premium guide as a raw file (.txt) for offline access, or export it to a beautifully formatted PDF document."}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto shrink-0">
                {/* Copy Text Button */}
                <button
                  onClick={() => handleCopy(lang === "ar" ? readingProduct.contentAr || readingProduct.content! : readingProduct.content!, `read-copy-${readingProduct.id}`)}
                  className="px-3.5 py-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-bold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-1.5"
                >
                  {copiedTextId === `read-copy-${readingProduct.id}` ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span>{lang === "ar" ? "تم النسخ!" : "Copied!"}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{lang === "ar" ? "نسخ" : "Copy"}</span>
                    </>
                  )}
                </button>

                {/* Download Text File Button */}
                <button
                  onClick={() => handleDownloadProductText(readingProduct)}
                  className="px-3.5 py-2 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-bold rounded-xl border border-white/5 transition-all flex items-center justify-center gap-1.5"
                  title={lang === "ar" ? "تحميل كملف نصي" : "Download as raw text file"}
                >
                  <Download className="w-3.5 h-3.5 text-amber-500" />
                  <span>{lang === "ar" ? "تحميل ملف (.txt)" : "Download (.txt)"}</span>
                </button>

                {/* Print & Save PDF Button */}
                <button
                  onClick={() => handleDownloadProductPDF(readingProduct)}
                  className="px-4 py-2 bg-amber-500 text-black text-xs font-black rounded-xl hover:brightness-105 transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/10"
                  title={lang === "ar" ? "تحميل ملف HTML منسق بالكامل للطباعة" : "Download fully styled HTML ready to print"}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{lang === "ar" ? "تحميل ملف HTML الفاخر 🖨️" : "Download Premium HTML 🖨️"}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 5. Elegant Footer */}
      <footer className="mt-auto border-t border-white/5 bg-black/40 px-4 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 shrink-0" id="footer-section">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></span>
            <span className="text-xs font-bold text-slate-300">
              {liveUsers} {lang === "ar" ? "مستخدم نشط حالياً" : "active users globally"}
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-4 text-slate-600 font-bold uppercase tracking-wider">
            <span>{lang === "ar" ? "الشركاء والعملاء:" : "AFFILIATE SYSTEM:"}</span>
            <span className="text-[10px]">BOOKING.COM</span>
            <span className="text-[10px]">SKYSCANNER</span>
            <span className="text-[10px]">STRIPE SECURED</span>
          </div>
        </div>

        <div className="text-[10px] text-slate-500 uppercase tracking-widest text-center md:text-right space-y-1">
          <div>Powered by Tripza.store AI Suite v5.4</div>
          <div>{lang === "ar" ? "جميع الحقوق محفوظة © 2026" : "All Rights Reserved © 2026"}</div>
        </div>
      </footer>

      {/* 6. eSIM SIMULATOR MODAL */}
      {isEsimModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto" id="esim-simulator-modal">
          <div className="max-w-xl w-full">
            <EsimSimulator lang={lang} onClose={() => setIsEsimModalOpen(false)} />
          </div>
        </div>
      )}

      {/* 7. CAR RENTAL SIMULATOR MODAL */}
      {isCarModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto" id="car-rental-simulator-modal">
          <div className="max-w-xl w-full">
            <CarRentalSimulator lang={lang} onClose={() => setIsCarModalOpen(false)} />
          </div>
        </div>
      )}

      {/* 8. SIMULATED GUIDE CHECKOUT MODAL */}
      {isGuideCheckoutOpen && purchasingGuide && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" id="guide-checkout-modal">
          <div className="bg-[#0F1116] border border-white/10 rounded-2xl p-6 md:p-8 max-w-md w-full space-y-6 relative animate-fade-in text-slate-200">
            
            <button
              onClick={() => {
                setIsGuideCheckoutOpen(false);
                setPurchasingGuide(null);
              }}
              className="absolute top-4 right-4 text-slate-500 hover:text-white text-xs bg-white/5 hover:bg-white/10 px-2 py-1 rounded"
            >
              ✕
            </button>

            {/* Modal Title */}
            <div className="text-center space-y-1">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-2 text-black font-bold text-2xl">
                💳
              </div>
              <h3 className="text-lg font-bold text-white">
                {lang === "ar" ? "بوابة الدفع الآمنة (بايبال)" : "Secure Checkout (PayPal)"}
              </h3>
              <p className="text-xs text-slate-400">
                {lang === "ar" ? "قم بالدفع عبر بايبال لفتح ملف الدليل السياحي فوراً بالدولار." : "Pay via PayPal to instantly unlock full travel guides in USD."}
              </p>
            </div>

            {/* Guide Summary */}
            <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white block">
                  {lang === "ar" ? purchasingGuide.titleAr : purchasingGuide.title}
                </span>
                <span className="text-[10px] text-slate-500 uppercase">
                  {lang === "ar" ? "📍 دليل سفر مميز" : "📍 Premium Blueprint"}
                </span>
              </div>
              <span className="text-lg font-black text-amber-500 font-mono">
                $4.99
              </span>
            </div>

            {/* PayPal Buttons Gateway */}
            <div className="bg-[#002446]/20 border border-blue-500/20 p-4 rounded-xl space-y-4 text-left">
              <div className="text-[11px] text-sky-300 flex items-start gap-2 leading-relaxed">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-sky-400" />
                <div>
                  <p className="font-bold">
                    {lang === "ar" ? "الدفع الإلكتروني الآمن والمباشر عبر PayPal" : "Secure PayPal Direct Payment"}
                  </p>
                  <p className="mt-1 opacity-85 text-[11px]">
                    {lang === "ar" 
                      ? "يدعم الدفع السريع بالدولار بحساب PayPal الخاص بك، أو بالبطاقات الائتمانية والخصم المباشر." 
                      : "Supports instant payment in USD using your PayPal account, or debit/credit cards."}
                  </p>
                </div>
              </div>

              <div className="text-[10px] text-slate-400 border-t border-white/5 pt-2 flex items-center justify-between font-sans">
                <span>{lang === "ar" ? "بيئة التشغيل:" : "Environment Status:"}</span>
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${paypalClientId === "sb" ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"}`}>
                  {paypalClientId === "sb" 
                    ? (lang === "ar" ? "تجريبية افتراضية (Sandbox)" : "Demo Sandbox Mode") 
                    : (lang === "ar" ? "حسابك المباشر (Production)" : "Production Live Connected")}
                </span>
              </div>

              {paypalClientId === "sb" && (
                <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl text-[9.5px] text-amber-500 leading-normal">
                  {lang === "ar"
                    ? "💡 لتشغيل بوابة الدفع على حسابك الحقيقي، أضف معرف PAYPAL_CLIENT_ID في إعدادات التطبيق."
                    : "💡 To connect your real business account, set PAYPAL_CLIENT_ID in the app Secrets settings."}
                </div>
              )}

              {/* Official Smart Buttons Container */}
              <div id="paypal-guide-button-container" className="my-2 min-h-[140px] bg-black/35 rounded-2xl p-4 flex flex-col justify-center items-center border border-white/10 shadow-inner">
                {!paypalReady ? (
                  <div className="text-xs text-slate-400 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
                    <span>{lang === "ar" ? "جاري الاتصال الآمن بـ PayPal..." : "Connecting securely to PayPal..."}</span>
                  </div>
                ) : null}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* 9. EXIT INTENT POPUP */}
      {showExitIntent && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4" id="exit-intent-modal">
          <div className="bg-[#0F1116] border-2 border-red-500/30 rounded-3xl p-6 md:p-8 max-w-md w-full text-center space-y-6 relative animate-fade-in text-slate-200 shadow-2xl shadow-red-500/10">
            <button
              onClick={() => setShowExitIntent(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xs bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded-lg border border-white/5"
            >
              ✕
            </button>

            <div className="space-y-2">
              <div className="w-16 h-16 bg-gradient-to-tr from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto text-white text-3xl shadow-lg shadow-red-500/20">
                🎁
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                {lang === "ar" ? "انتظر! لا تذهب فارغ اليدين 🥺" : "Wait! Don't leave empty-handed 🥺"}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
                {lang === "ar" 
                  ? "احصل على خصم إضافي خاص ومباشر بقيمة 5% على جميع الأدلة السياحية الفاخرة والحزمة اللانهائية الكبرى! العرض صالح لمدة 10 دقائق فقط!"
                  : "Claim a very special, instant 5% DISCOUNT on all our premium travel guides, custom maps, and the Grand Ultimate Bundle! Only valid for the next 10 minutes!"}
              </p>
            </div>

            <div className="bg-white/5 border border-white/5 py-3 px-4 rounded-xl flex items-center justify-center gap-3 font-mono">
              <span className="text-xs font-bold text-slate-400 uppercase">{lang === "ar" ? "ينتهي العرض خلال" : "OFFER EXPIRES IN"}:</span>
              <span className="text-lg font-black text-yellow-400">10:00</span>
            </div>

            <div className="space-y-2.5">
              <button
                onClick={() => {
                  setHasExitDiscount(true);
                  setExitDiscountTimer(600); // 10 minutes
                  try {
                    localStorage.setItem("roamiq_exit_discount_applied", "true");
                    localStorage.setItem("roamiq_exit_discount_timer", "600");
                  } catch {}
                  setShowExitIntent(false);
                }}
                className="w-full py-3 bg-gradient-to-r from-red-500 via-rose-600 to-red-600 text-white text-xs font-black rounded-xl uppercase tracking-wider transition-all shadow-lg hover:brightness-105 active:scale-95"
              >
                {lang === "ar" ? "تطبيق الخصم 5% الآن! 🚀" : "Apply 5% Discount Now! 🚀"}
              </button>
              
              <button
                onClick={() => setShowExitIntent(false)}
                className="w-full py-2 bg-transparent hover:bg-white/5 border border-white/10 text-slate-400 hover:text-white text-[10px] font-bold rounded-lg uppercase transition-colors"
              >
                {lang === "ar" ? "لا شكراً، سأستمر بالسعر الكامل" : "No thanks, I will pay full price"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 10. BUNDLE UPSELL MODAL */}
      {upsellProduct && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4" id="bundle-upsell-modal">
          <div className="bg-[#0F1116] border-2 border-amber-500/30 rounded-3xl p-6 md:p-8 max-w-lg w-full space-y-6 relative animate-fade-in text-slate-200 shadow-2xl shadow-amber-500/10">
            <button
              onClick={() => {
                const prod = upsellProduct;
                setUpsellProduct(null);
                // immediately launch checkout with original single product!
                setPurchasingProduct(prod);
                setPaymentSuccess(false);
                setIsPaying(false);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xs bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded-lg border border-white/5"
            >
              ✕
            </button>

            {/* Title */}
            <div className="text-center space-y-2">
              <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-400 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-amber-500/20">
                🚀 {lang === "ar" ? "ترقية ذكية فائقة التوفير" : "ULTIMATE SMART UPGRADE"}
              </span>
              <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
                {lang === "ar" ? "انتظر! احصل على الحزمة اللانهائية الكبرى ووفر أكثر من 85%! 🌟" : "Wait! Upgrade to the Grand Ultimate Bundle & Save Over 85%! 🌟"}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
                {lang === "ar"
                  ? `أنت تقوم بشراء "${lang === "ar" ? upsellProduct.nameAr : upsellProduct.name}". لماذا تشتري دليلاً واحداً بينما يمكنك فتح جميع الملفات والخرائط الرقمية الـ 43+ في متجرنا بخصم إضافي كبير؟`
                  : `You are about to unlock "${upsellProduct.name}". Why buy just one guide when you can unlock all 43+ premium trip plans, interactive Google Maps, checklists, and templates at an extreme discount?`}
              </p>
            </div>

            {/* Comparison Box */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-center">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">{lang === "ar" ? "منتج فردي" : "SINGLE ITEM"}</span>
                <span className="text-sm font-bold text-slate-300 line-clamp-1 mt-1">{lang === "ar" ? upsellProduct.nameAr : upsellProduct.name}</span>
                <div className="text-xl font-black text-slate-400 mt-2">${getProductPrice(upsellProduct.price).toFixed(2)}</div>
              </div>
              <div className="bg-amber-500/10 border-2 border-amber-500/30 rounded-xl p-4 text-center relative">
                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[8px] font-black px-2 py-0.5 rounded-full uppercase">
                  {lang === "ar" ? "موصى به" : "RECOMMENDED"}
                </span>
                <span className="text-[10px] text-amber-500 uppercase font-black block mt-1">{lang === "ar" ? "الحزمة الكبرى الـ 43+" : "ULTIMATE 43+ BUNDLE"}</span>
                <span className="text-xs font-bold text-white block mt-1">{lang === "ar" ? "جميع الأدلة والخرائط" : "All Products Included"}</span>
                <div className="text-2xl font-black text-amber-400 mt-1">
                  ${getProductPrice(59.99).toFixed(2)}
                </div>
                <div className="text-[9px] text-slate-400 line-through">
                  ${hasExitDiscount ? "47.99" : "125.00"}
                </div>
              </div>
            </div>

            <div className="text-center text-[10px] text-slate-400 flex items-center justify-center gap-1.5 leading-relaxed bg-white/5 py-2 px-4 rounded-xl">
              <span>🔒 {lang === "ar" ? "تسليم رقمي فوري كامل. مبيعات نهائية لحماية جهود الخبراء." : "Instant digital delivery. Final sales to protect expert research."}</span>
            </div>

            {/* Buttons */}
            <div className="space-y-2.5">
              <button
                onClick={() => {
                  setUpsellProduct(null);
                  // Find the real Ultimate Bundle product or simulate it!
                  const bundleProduct = PREDEFINED_PRODUCTS.find(p => p.id === "prod-ultimate-bundle") || {
                    id: "prod-ultimate-bundle",
                    name: "Tripza Infinite Explorer Bundle - All 43 Guides Included! 🌟",
                    nameAr: "الحزمة اللانهائية الكبرى - جميع الأدلة والملفات الرقمية 🌟",
                    price: 59.99,
                    type: "bundle"
                  };
                  // Launch checkout with the Bundle!
                  setPurchasingProduct(bundleProduct);
                  setPaymentSuccess(false);
                  setIsPaying(false);
                }}
                className="w-full py-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-black text-xs font-black rounded-xl uppercase tracking-wider transition-all shadow-lg hover:brightness-105 active:scale-95"
              >
                🚀 {lang === "ar" ? "نعم، قم بترقية طلبي للحزمة اللانهائية الكبرى 🌟" : "Yes, Upgrade my order to the Ultimate Bundle 🌟"}
              </button>
              
              <button
                onClick={() => {
                  const prod = upsellProduct;
                  setUpsellProduct(null);
                  // immediately launch checkout with original single product!
                  setPurchasingProduct(prod);
                  setPaymentSuccess(false);
                  setIsPaying(false);
                }}
                className="w-full py-2 bg-transparent hover:bg-white/5 border border-white/10 text-slate-400 hover:text-white text-[10px] font-bold rounded-lg uppercase transition-colors"
              >
                {lang === "ar" ? `لا شكراً، سأستمر مع المنتج الفردي فقط ($${getProductPrice(upsellProduct.price).toFixed(2)})` : `No thanks, continue with single product ($${getProductPrice(upsellProduct.price).toFixed(2)})`}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 11. SOCIAL PROOF LIVE RECENT PURCHASES TOAST */}
      {(() => {
        const buyers = [
          {
            nameAr: "أحمد المرزوقي من الرياض",
            nameEn: "Ahmad Al-Marzouqi from Riyadh",
            actionAr: "اشترى الحزمة اللانهائية الكبرى بخصم 80% 🌟",
            actionEn: "purchased the Grand Ultimate Bundle at 80% off 🌟",
            timeAr: "قبل دقيقتين",
            timeEn: "2 minutes ago"
          },
          {
            nameAr: "سارة المهيري من دبي",
            nameEn: "Sara Al-Mheiri from Dubai",
            actionAr: "اشترت دليل رحلة البوسنة والهرسك الفاخر 🇧🇦",
            actionEn: "purchased the Golden Bosnia 8-Day Travel Plan 🇧🇦",
            timeAr: "قبل 6 دقائق",
            timeEn: "6 minutes ago"
          },
          {
            nameAr: "عبد الرحمن الدوسري من جدة",
            nameEn: "Abdulrahman Al-Dossari from Jeddah",
            actionAr: "اشترى دليل وخرائط تركيا السرية 🇹🇷",
            actionEn: "purchased Secret Istanbul & Turkey Maps 🇹🇷",
            timeAr: "قبل 11 دقيقة",
            timeEn: "11 minutes ago"
          },
          {
            nameAr: "فاطمة الكواري من الدوحة",
            nameEn: "Fatima Al-Kuwari from Doha",
            actionAr: "اشترت الحزمة اللانهائية الكبرى للتوفير الأقصى 🎁",
            actionEn: "purchased the Grand Ultimate Bundle 🎁",
            timeAr: "قبل 18 دقيقة",
            timeEn: "18 minutes ago"
          },
          {
            nameAr: "فيصل العجمي من الكويت",
            nameEn: "Faisal Al-Ajmi from Kuwait",
            actionAr: "اشترى دليل المالديف الرومانسية التفاعلي 🇲🇲",
            actionEn: "purchased the Romantic Maldives Guide 🇲🇲",
            timeAr: "قبل 24 دقيقة",
            timeEn: "24 minutes ago"
          },
          {
            nameAr: "خالد الشحي من مسقط",
            nameEn: "Khaled Al-Shehhi from Muscat",
            actionAr: "اشترى الحزمة اللانهائية الكبرى 🌟",
            actionEn: "purchased the Grand Ultimate Bundle 🌟",
            timeAr: "قبل 31 دقيقة",
            timeEn: "31 minutes ago"
          }
        ];
        
        if (!showSocialProof) return null;

        return (
          <div 
            className={`fixed bottom-4 ${lang === "ar" ? "left-4" : "right-4"} z-50 bg-[#0F1116]/95 backdrop-blur-md border border-white/10 rounded-2xl p-4 max-w-sm w-[340px] flex gap-3 shadow-2xl animate-slide-in relative overflow-hidden`}
            id="social-proof-toast"
          >
            {/* Subtle colored accent line */}
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-amber-500 to-yellow-500"></div>
            
            <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-lg shrink-0 mt-0.5">
              🛒
            </div>
            
            <div className="space-y-1 text-xs">
              <p className="font-bold text-white">
                {lang === "ar" ? buyers[socialProofIndex].nameAr : buyers[socialProofIndex].nameEn}
              </p>
              <p className="text-slate-300">
                {lang === "ar" ? buyers[socialProofIndex].actionAr : buyers[socialProofIndex].actionEn}
              </p>
              <span className="text-[10px] text-slate-500 font-medium font-mono flex items-center gap-1 mt-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
                {lang === "ar" ? buyers[socialProofIndex].timeAr : buyers[socialProofIndex].timeEn}
              </span>
            </div>

            <button
              onClick={() => setShowSocialProof(false)}
              className="text-slate-500 hover:text-white text-[10px] bg-white/5 hover:bg-white/10 w-5 h-5 rounded-full flex items-center justify-center absolute top-2 right-2 border border-white/5"
            >
              ✕
            </button>
          </div>
        );
      })()}

    </div>
  );
}
