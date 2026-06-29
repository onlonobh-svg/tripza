import React, { useState } from "react";
import { 
  Wifi, 
  Car, 
  CheckCircle2, 
  Mail, 
  QrCode, 
  ArrowRight, 
  Info, 
  AlertTriangle,
  Calendar,
  MapPin,
  Clock,
  Briefcase,
  Users,
  Gauge,
  CreditCard,
  Check
} from "lucide-react";

interface EsimSimulatorProps {
  lang: "ar" | "en";
  onClose?: () => void;
}

export const EsimSimulator: React.FC<EsimSimulatorProps> = ({ lang, onClose }) => {
  const [esimCountry, setEsimCountry] = useState<string>("TR");
  const [esimPlan, setEsimPlan] = useState<string>("10GB");
  const [esimEmail, setEsimEmail] = useState<string>("");
  const [esimName, setEsimName] = useState<string>("");
  const [isOrderingEsim, setIsOrderingEsim] = useState<boolean>(false);
  const [esimSuccess, setEsimSuccess] = useState<boolean>(false);
  const [esimQrValue, setEsimQrValue] = useState<string>("");

  const esimPlans = [
    { id: "5GB", size: "5 GB", days: 7, price: 8.99, descAr: "مثالي لتصفح الخرائط ومواقع التواصل الاجتماعي الخفيفة", descEn: "Ideal for light browsing and navigation" },
    { id: "10GB", size: "10 GB", days: 15, price: 14.99, descAr: "الباقة الأكثر مبيعاً؛ كافية جداً للتصفح ومشاركة الصور والاتصال", descEn: "Best seller; ample for high-quality photos & calls" },
    { id: "20GB", size: "20 GB", days: 30, price: 24.99, descAr: "مثالي للمسافر النشط أو رحلات العمل الطويلة والإنترنت الكثيف", descEn: "Perfect for active nomads and heavy streaming" },
    { id: "UNLIMITED", size: "Unlimited", days: 15, price: 39.99, descAr: "إنترنت غير محدود؛ تصفح، تنزيل، واتصال بلا قيود أو بطء", descEn: "No throttling, unlimited extreme high-speed data" },
  ];

  const esimCountries = [
    { code: "TR", nameAr: "تركيا 🇹🇷", nameEn: "Turkey 🇹🇷" },
    { code: "AE", nameAr: "الإمارات العربية المتحدة 🇦🇪", nameEn: "United Arab Emirates 🇦🇪" },
    { code: "EU", nameAr: "أوروبا (شاملة لـ 32 دولة) 🇪🇺", nameEn: "Europe (32 Countries) 🇪🇺" },
    { code: "US", nameAr: "الولايات المتحدة الأمريكية 🇺🇸", nameEn: "United States 🇺🇸" },
    { code: "GLOBAL", nameAr: "عالمي (85 دولة) 🌐", nameEn: "Global Coverage (85 Countries) 🌐" },
  ];

  const handleOrderEsim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!esimEmail || !esimName) return;

    setIsOrderingEsim(true);
    setTimeout(() => {
      setIsOrderingEsim(false);
      setEsimSuccess(true);
      setEsimQrValue(`esim_act_code_tripza_${esimCountry}_${esimPlan}_${Math.floor(Math.random() * 900000 + 100000)}`);
    }, 1500);
  };

  const selectedEsimPlanObj = esimPlans.find(p => p.id === esimPlan);
  const selectedCountryName = esimCountries.find(c => c.code === esimCountry)?.[lang === "ar" ? "nameAr" : "nameEn"];

  return (
    <div 
      className="bg-gradient-to-br from-[#121620] to-[#0F1116] border border-white/5 rounded-3xl p-5 md:p-6 lg:p-8 space-y-6 shadow-2xl relative text-slate-200"
      id="esim-shop-module"
    >
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
            <Wifi className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h4 className="text-base font-black text-white font-display">
              {lang === "ar" ? "شراء وتفعيل شريحة eSIM الفورية" : "Instant eSIM Activation Shop"}
            </h4>
            <p className="text-[10px] text-slate-400">
              {lang === "ar" ? "محاكي التفعيل الفوري وإنترنت الـ 5G بدون شرائح بلاستيكية" : "Instant high-speed 5G without physical SIM cards"}
            </p>
          </div>
        </div>
        {onClose && (
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-xl text-xs transition-all"
          >
            ✕
          </button>
        )}
      </div>

      {esimSuccess ? (
        <div className="space-y-6 text-center animate-fade-in p-2">
          <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mx-auto text-2xl font-black">
            ✓
          </div>
          <div className="space-y-1">
            <h5 className="text-base font-black text-white">
              {lang === "ar" ? "تم توليد وتفعيل بطاقة eSIM بنجاح! 🎉" : "eSIM Successfully Issued! 🎉"}
            </h5>
            <p className="text-xs text-slate-400">
              {lang === "ar" 
                ? `تم إرسال رمز التفعيل والتعليمات المفصلة إلى البريد الإلكتروني: ${esimEmail}`
                : `Your activation profile has been delivered to: ${esimEmail}`}
            </p>
          </div>

          <div className="bg-black/40 border border-white/5 rounded-2xl p-5 max-w-xs mx-auto space-y-4">
            <div className="bg-white p-3 rounded-xl inline-block mx-auto">
              <QrCode className="w-32 h-32 text-black" />
            </div>
            <div className="text-center space-y-1 text-slate-400">
              <span className="text-[9px] uppercase font-bold tracking-widest block text-amber-500">
                {lang === "ar" ? "رمز تنشيط الشريحة الفوري" : "QR ACTIVATION KEY"}
              </span>
              <span className="font-mono text-[10px] block text-white bg-white/5 py-1 rounded select-all border border-white/5">
                {esimQrValue}
              </span>
            </div>
          </div>

          <div className="bg-white/5 p-3.5 rounded-xl border border-white/5 text-[10px] text-left text-slate-300 space-y-1.5">
            <span className="font-bold text-amber-400 block">📲 {lang === "ar" ? "خطوات التثبيت السريعة:" : "Quick Activation Steps:"}</span>
            <p>{lang === "ar" ? "1. افتح إعدادات الهاتف ← شبكات الهاتف والاتصال ← إضافة باقة سيلولار / eSIM." : "1. Go to Settings → Cellular / Mobile Data → Add eSIM / Cellular Plan."}</p>
            <p>{lang === "ar" ? "2. قم بمسح رمز الاستجابة السريعة (QR) الموضح بالأعلى مباشرة." : "2. Scan the generated QR Code shown above."}</p>
            <p>{lang === "ar" ? "3. قم بتفعيل التجوال للبيانات (Data Roaming) عند الوصول لوجهتك." : "3. Turn on 'Data Roaming' once you touch down at your destination."}</p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                setEsimSuccess(false);
                setEsimEmail("");
                setEsimName("");
              }}
              className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-bold uppercase transition-all"
            >
              {lang === "ar" ? "شراء شريحة أخرى" : "Buy Another eSIM"}
            </button>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-black rounded-xl text-xs font-bold uppercase transition-all"
              >
                {lang === "ar" ? "إغلاق" : "Close"}
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleOrderEsim} className="space-y-5 text-left">
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              {lang === "ar" ? "اختر وجهة السفر لتغطية الشبكة:" : "Select Destination Territory:"}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {esimCountries.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  onClick={() => setEsimCountry(c.code)}
                  className={`px-3 py-2 text-xs font-bold rounded-xl border text-center transition-all ${
                    esimCountry === c.code 
                      ? "bg-amber-500 text-black border-amber-500" 
                      : "bg-black/30 border-white/10 text-slate-300 hover:border-white/20"
                  }`}
                >
                  {lang === "ar" ? c.nameAr : c.nameEn}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              {lang === "ar" ? "اختر حجم باقة الإنترنت المطلوبة:" : "Choose Your Data Allocation:"}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {esimPlans.map((planObj) => (
                <div 
                  key={planObj.id}
                  onClick={() => setEsimPlan(planObj.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between space-y-1 ${
                    esimPlan === planObj.id 
                      ? "bg-amber-500/10 border-amber-500" 
                      : "bg-black/30 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-black text-white">{planObj.size}</span>
                    <span className="text-sm font-black text-amber-400">${planObj.price}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-slate-400">
                    <span>{planObj.days} {lang === "ar" ? "أيام صلاحية" : "Days Validity"}</span>
                    <span className="truncate max-w-[150px] text-right">
                      {lang === "ar" ? planObj.descAr : planObj.descEn}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                {lang === "ar" ? "الاسم الكامل للمسافر" : "Traveler Full Name"}
              </label>
              <input 
                type="text"
                required
                value={esimName}
                onChange={(e) => setEsimName(e.target.value)}
                placeholder="MOHAMMAD AL-MUTAIRI"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                {lang === "ar" ? "البريد الإلكتروني للتسليم" : "Delivery Email Address"}
              </label>
              <input 
                type="email"
                required
                value={esimEmail}
                onChange={(e) => setEsimEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex justify-between items-center">
            <div className="text-left">
              <span className="text-[9px] text-slate-400 block">{lang === "ar" ? "إجمالي الحساب" : "TOTAL PRICE"}</span>
              <span className="text-base font-black text-amber-400">
                ${selectedEsimPlanObj?.price} USD
              </span>
            </div>
            <div className="text-right text-[10px] text-slate-400">
              <span>{lang === "ar" ? `شريحة eSIM لـ ${selectedCountryName}` : `${selectedCountryName} eSIM Profile`}</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={isOrderingEsim}
            className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 transition-all disabled:opacity-50 active:scale-95"
          >
            {isOrderingEsim ? (
              <>
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                <span>{lang === "ar" ? "جاري تشفير وتوليد شريحة eSIM..." : "Encrypting & provisioning eSIM..."}</span>
              </>
            ) : (
              <>
                <Wifi className="w-4 h-4" />
                <span>
                  {lang === "ar" 
                    ? `شراء وتوليد الشريحة فوراً - $${selectedEsimPlanObj?.price}` 
                    : `Instant Buy & Issue eSIM - $${selectedEsimPlanObj?.price}`}
                </span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

interface CarRentalSimulatorProps {
  lang: "ar" | "en";
  onClose?: () => void;
}

export const CarRentalSimulator: React.FC<CarRentalSimulatorProps> = ({ lang, onClose }) => {
  const [carClass, setCarClass] = useState<string>("suv");
  const [pickupLocation, setPickupLocation] = useState<string>(lang === "ar" ? "مطار إسطنبول الدولي (IST)" : "Istanbul Airport (IST)");
  const [pickupDate, setPickupDate] = useState<string>("2026-07-10");
  const [dropoffDate, setDropoffDate] = useState<string>("2026-07-17");
  const [driverAgeAccepted, setDriverAgeAccepted] = useState<boolean>(true);
  const [isReservingCar, setIsReservingCar] = useState<boolean>(false);
  const [carSuccess, setCarSuccess] = useState<boolean>(false);
  const [reservationId, setReservationId] = useState<string>("");

  const carClasses = [
    { 
      id: "economy", 
      nameAr: "اقتصادية (رينو كليو أو مشابهة)", 
      nameEn: "Economy (Renault Clio or similar)", 
      pricePerDay: 28, 
      passengers: 4, 
      luggage: 2, 
      gearAr: "يدوي / أوتوماتيك", 
      gearEn: "Manual/Auto",
      icon: "🚗"
    },
    { 
      id: "suv", 
      nameAr: "عائلية SUV (داسيا داستر أو مشابهة)", 
      nameEn: "Comfort SUV (Dacia Duster or similar)", 
      pricePerDay: 45, 
      passengers: 5, 
      luggage: 4, 
      gearAr: "أوتوماتيك", 
      gearEn: "Automatic",
      icon: "🚙"
    },
    { 
      id: "luxury", 
      nameAr: "فخمة VIP (مرسيدس E-Class أو مشابهة)", 
      nameEn: "Premium Luxury VIP (Mercedes E-Class or similar)", 
      pricePerDay: 95, 
      passengers: 5, 
      luggage: 3, 
      gearAr: "أوتوماتيك فاخر", 
      gearEn: "Luxury Automatic",
      icon: "🏎️"
    },
    { 
      id: "van", 
      nameAr: "فان سياحي كبير (مرسيدس فيتو أو مشابهة)", 
      nameEn: "Family Tourist Van (Mercedes Vito or similar)", 
      pricePerDay: 110, 
      passengers: 8, 
      luggage: 6, 
      gearAr: "أوتوماتيك دافئ", 
      gearEn: "Automatic Comfort",
      icon: "🚐"
    },
  ];

  const getRentalDays = () => {
    try {
      const start = new Date(pickupDate);
      const end = new Date(dropoffDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    } catch {
      return 7;
    }
  };

  const handleReserveCar = (e: React.FormEvent) => {
    e.preventDefault();
    setIsReservingCar(true);
    setTimeout(() => {
      setIsReservingCar(false);
      setCarSuccess(true);
      setReservationId(`VGX-CAR-${Math.floor(Math.random() * 89999 + 10000)}`);
    }, 1500);
  };

  const selectedCarObj = carClasses.find(c => c.id === carClass);
  const rentalDays = getRentalDays();

  return (
    <div 
      className="bg-gradient-to-br from-[#121620] to-[#0F1116] border border-white/5 rounded-3xl p-5 md:p-6 lg:p-8 space-y-6 shadow-2xl relative text-slate-200"
      id="car-rental-module"
    >
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
            <Car className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h4 className="text-base font-black text-white font-display">
              {lang === "ar" ? "محرك حجز واستئجار السيارات الفاخرة" : "Premium Car Rental Hub"}
            </h4>
            <p className="text-[10px] text-slate-400">
              {lang === "ar" ? "مقارنة أفضل الفئات وحساب مدة الإيجار بدقة مع تأكيد فوري ومجاني" : "Compare classes, durations, and secure premium rental confirmations"}
            </p>
          </div>
        </div>
        {onClose && (
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-xl text-xs transition-all"
          >
            ✕
          </button>
        )}
      </div>

      {carSuccess ? (
        <div className="space-y-5 text-center animate-fade-in p-2">
          <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mx-auto text-2xl font-black">
            ✓
          </div>
          <div className="space-y-1">
            <h5 className="text-base font-black text-white">
              {lang === "ar" ? "تم تأكيد حجز السيارة بنجاح! 🚗" : "Car Reservation Confirmed! 🚗"}
            </h5>
            <p className="text-xs text-slate-400">
              {lang === "ar" 
                ? `رقم حجز القسيمة الخاص بك هو ${reservationId}. يرجى إبرازه عند مكتب الاستلام.`
                : `Your digital reservation voucher is ${reservationId}. Please present it at the pick-up counter.`}
            </p>
          </div>

          <div className="bg-black/60 border border-amber-500/15 rounded-2xl p-4 text-left space-y-3.5 text-xs text-slate-200">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <span className="font-extrabold text-amber-500 text-[10px] uppercase tracking-widest">
                {lang === "ar" ? "قسيمة حجز سيارة سياحية" : "OFFICIAL VEHICLE VOUCHER"}
              </span>
              <span className="font-mono text-white text-[10px] bg-white/5 px-2 py-0.5 rounded">
                {reservationId}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-[11px]">
              <div>
                <span className="text-slate-400 block text-[9px] uppercase">{lang === "ar" ? "فئة السيارة المحجوزة" : "VEHICLE CLASS"}</span>
                <span className="font-bold text-white block truncate">{selectedCarObj?.[lang === "ar" ? "nameAr" : "nameEn"]}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[9px] uppercase">{lang === "ar" ? "موقع استلام السيارة" : "PICK-UP HUB"}</span>
                <span className="font-bold text-white block truncate">{pickupLocation}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[9px] uppercase">{lang === "ar" ? "تاريخ الاستلام" : "PICK-UP DATE"}</span>
                <span className="font-bold text-white block">{pickupDate}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[9px] uppercase">{lang === "ar" ? "تاريخ الإرجاع" : "DROP-OFF DATE"}</span>
                <span className="font-bold text-white block">{dropoffDate}</span>
              </div>
            </div>

            <div className="border-t border-white/5 pt-2.5 flex justify-between items-center text-[11px]">
              <span className="text-slate-400">{lang === "ar" ? "إجمالي المدة والسعر" : "Rental Duration & Total"}</span>
              <span className="font-bold text-emerald-400">
                {rentalDays} {lang === "ar" ? "أيام" : "Days"} • ${(selectedCarObj?.pricePerDay || 20) * rentalDays} USD
              </span>
            </div>
          </div>

          <div className="bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/10 text-[10px] text-left text-emerald-400 flex gap-2 items-center">
            <Check className="w-4 h-4 shrink-0" />
            <span>
              {lang === "ar" ? "مؤمن بالكامل. يشمل التأمين ضد الحوادث والسرقة والتأمين ضد الغير مجاناً!" : "Zero deductible fully covered! Includes collision, theft, and third-party liabilities free."}
            </span>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                setCarSuccess(false);
              }}
              className="flex-1 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-bold uppercase transition-all"
            >
              {lang === "ar" ? "حجز سيارة أخرى" : "Reserve Another Car"}
            </button>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-black rounded-xl text-xs font-bold uppercase transition-all"
              >
                {lang === "ar" ? "إغلاق" : "Close"}
              </button>
            )}
          </div>
        </div>
      ) : (
        <form onSubmit={handleReserveCar} className="space-y-4 text-left">
          <div className="space-y-1.5">
            <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              {lang === "ar" ? "اختر فئة وموديل السيارة:" : "Choose Vehicle Standard Class:"}
            </label>
            <div className="grid grid-cols-1 gap-2">
              {carClasses.map((c) => (
                <div
                  key={c.id}
                  onClick={() => setCarClass(c.id)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                    carClass === c.id 
                      ? "bg-amber-500/10 border-amber-500" 
                      : "bg-black/30 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl shrink-0">{c.icon}</span>
                    <div className="text-left leading-tight">
                      <span className="text-xs font-bold text-white block">
                        {lang === "ar" ? c.nameAr : c.nameEn}
                      </span>
                      <div className="flex items-center gap-3 mt-0.5 text-[9px] text-slate-400">
                        <span className="flex items-center gap-0.5">
                          <Users className="w-3 h-3" /> {c.passengers}
                        </span>
                        <span className="flex items-center gap-0.5">
                          <Briefcase className="w-3 h-3" /> {c.luggage}
                        </span>
                        <span>{lang === "ar" ? c.gearAr : c.gearEn}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-black text-amber-400 block">${c.pricePerDay}/d</span>
                    <span className="text-[8px] text-slate-400 uppercase tracking-widest">{lang === "ar" ? "يومياً" : "per day"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              {lang === "ar" ? "موقع أو مطار استلام وتسليم السيارة:" : "Pick-up Location & Hub:"}
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-slate-400">📍</span>
              <input 
                type="text"
                required
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                placeholder={lang === "ar" ? "اكتب اسم المدينة أو المطار" : "Enter city or airport code"}
                className="w-full bg-black/40 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                {lang === "ar" ? "تاريخ الاستلام" : "Pick-up Date"}
              </label>
              <input 
                type="date"
                required
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-center text-white focus:outline-none focus:border-amber-500"
              />
            </div>
            <div className="space-y-1">
              <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                {lang === "ar" ? "تاريخ الإرجاع" : "Drop-off Date"}
              </label>
              <input 
                type="date"
                required
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-center text-white focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex justify-between items-center text-xs">
            <div>
              <span className="text-[9px] text-slate-400 block">{lang === "ar" ? "حساب المدة" : "DURATION DETAILS"}</span>
              <span className="text-xs font-bold text-white">
                {rentalDays} {lang === "ar" ? "أيام كاملة" : "Rental Days"}
              </span>
            </div>
            <div className="text-right">
              <span className="text-[9px] text-slate-400 block">{lang === "ar" ? "إجمالي التكلفة التقديرية" : "TOTAL RENTAL ESTIMATE"}</span>
              <span className="text-sm font-black text-amber-400">
                ${(selectedCarObj?.pricePerDay || 20) * rentalDays} USD
              </span>
            </div>
          </div>

          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input 
              type="checkbox"
              required
              checked={driverAgeAccepted}
              onChange={(e) => setDriverAgeAccepted(e.target.checked)}
              className="rounded border-white/10 bg-black/40 text-amber-500 focus:ring-0 w-3.5 h-3.5"
            />
            <span className="text-[9px] text-slate-400 leading-tight">
              {lang === "ar" 
                ? "أؤكد أن عمر السائق الأساسي يتراوح بين 21 و 70 عاماً ولديه رخصة قيادة سارية ومترجمة."
                : "I verify the driver is aged 21-70, with a valid driver license and passport."}
            </span>
          </label>

          <button
            type="submit"
            disabled={isReservingCar}
            className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs rounded-xl uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 transition-all disabled:opacity-50 active:scale-95"
          >
            {isReservingCar ? (
              <>
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                <span>{lang === "ar" ? "جاري حجز قسيمة السيارة من المورد..." : "Reserving voucher with operator..."}</span>
              </>
            ) : (
              <>
                <Car className="w-4 h-4" />
                <span>
                  {lang === "ar" 
                    ? `حجز وتأكيد السيارة الفوري - $${(selectedCarObj?.pricePerDay || 20) * rentalDays}` 
                    : `Instant Book Rental - $${(selectedCarObj?.pricePerDay || 20) * rentalDays}`}
                </span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export const TravelBookingServices: React.FC<{ lang: "ar" | "en" }> = ({ lang }) => {
  return (
    <div className="space-y-8" id="travel-services-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <EsimSimulator lang={lang} />
        <CarRentalSimulator lang={lang} />
      </div>
    </div>
  );
};

