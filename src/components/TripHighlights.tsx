import React, { useState } from "react";
import { CloudSun, Calendar, Languages, Star } from "lucide-react";
import { TravelPlan } from "../types";

interface TripHighlightsProps {
  plan: TravelPlan;
  lang: "ar" | "en";
  rating?: number;
  onRate?: (rating: number) => void;
}

export const TripHighlights: React.FC<TripHighlightsProps> = ({ plan, lang, rating = 0, onRate }) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  // Graceful fallbacks in case the fields are missing or not populated yet
  const climateText = plan.climate || (lang === "ar" 
    ? "يختلف حسب الموسم؛ صيف معتدل، أمطار متوسطة، وشتاء لطيف بارد." 
    : "Varies by season. Warm summers, moderate rainfall, and cool winters.");

  const datesText = plan.recommendedDates || (lang === "ar" 
    ? "الربيع والخريف (أشهر الفترات الانتقالية توفر أفضل طقس)" 
    : "Spring and Autumn (the shoulder seasons offer pleasant weather)");

  const languageText = plan.primaryLanguage || (lang === "ar" 
    ? "اللغة المحلية للوجهة المحددة" 
    : "Local Language of the Destination");


  return (
    <div 
      className="bg-gradient-to-br from-[#121620] to-[#0F1116] border border-white/5 rounded-2xl p-4 md:p-5 shadow-xl space-y-4 animate-fade-in"
      id="trip-highlights-card"
    >
      <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
        <h3 className="text-xs font-black uppercase tracking-wider text-amber-500 font-display flex items-center gap-2">
          ✨ {lang === "ar" ? "أبرز ملامح الرحلة" : "Trip Highlights & Essentials"}
        </h3>
        <span className="text-[10px] bg-amber-500/10 text-amber-400 font-bold px-2 py-0.5 rounded">
          {lang === "ar" ? "تفاصيل سريعة" : "Quick Facts"}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Climate Card */}
        <div className="bg-white/5 border border-white/5 rounded-xl p-3.5 flex items-start gap-3 transition-all hover:bg-white/10" id="highlight-climate">
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
            <CloudSun className="w-5 h-5" />
          </div>
          <div className="text-left space-y-0.5 min-w-0">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
              {lang === "ar" ? "المناخ والطقس" : "Climate & Weather"}
            </span>
            <p className="text-xs text-white font-medium leading-relaxed break-words">
              {climateText}
            </p>
          </div>
        </div>

        {/* Recommended Dates Card */}
        <div className="bg-white/5 border border-white/5 rounded-xl p-3.5 flex items-start gap-3 transition-all hover:bg-white/10" id="highlight-dates">
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div className="text-left space-y-0.5 min-w-0">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
              {lang === "ar" ? "الأوقات المفضلة للزيارة" : "Best Time to Visit"}
            </span>
            <p className="text-xs text-white font-medium leading-relaxed break-words">
              {datesText}
            </p>
          </div>
        </div>

        {/* Primary Language Card */}
        <div className="bg-white/5 border border-white/5 rounded-xl p-3.5 flex items-start gap-3 transition-all hover:bg-white/10" id="highlight-language">
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
            <Languages className="w-5 h-5" />
          </div>
          <div className="text-left space-y-0.5 min-w-0">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
              {lang === "ar" ? "اللغة الأساسية" : "Primary Language"}
            </span>
            <p className="text-xs text-white font-medium leading-relaxed break-words">
              {languageText}
            </p>
          </div>
        </div>
      </div>

      {/* Star Rating Section */}
      <div className="border-t border-white/5 pt-4 mt-2 flex flex-col sm:flex-row items-center justify-between gap-3" id="trip-rating-section">
        <div className="text-left">
          <h4 className="text-xs font-bold text-slate-300">
            {lang === "ar" ? "ما رأيك في هذه الخطة؟" : "What do you think of this plan?"}
          </h4>
          <p className="text-[10px] text-slate-500 mt-0.5">
            {lang === "ar" 
              ? "تقييمك بالنجوم يحفظ هذه الخطة تلقائياً في قسم أدلة السفر الخاصة بك." 
              : "Rating this plan with stars automatically saves it under your Travel Guides section."}
          </p>
        </div>

        <div className="flex items-center gap-1 bg-black/25 px-3 py-1.5 rounded-xl border border-white/5">
          {[1, 2, 3, 4, 5].map((starValue) => {
            const isStarred = hoverRating !== null ? starValue <= hoverRating : starValue <= rating;
            return (
              <button
                key={starValue}
                type="button"
                onClick={() => onRate && onRate(starValue)}
                onMouseEnter={() => setHoverRating(starValue)}
                onMouseLeave={() => setHoverRating(null)}
                className="p-1 rounded transition-transform duration-100 hover:scale-125 focus:outline-none cursor-pointer"
                title={lang === "ar" ? `تقييم بـ ${starValue} نجوم` : `Rate ${starValue} Stars`}
              >
                <Star
                  className={`w-5 h-5 transition-colors duration-200 ${
                    isStarred 
                      ? "fill-amber-500 text-amber-500 drop-shadow-[0_0_4px_rgba(245,158,11,0.4)]" 
                      : "text-slate-600 hover:text-amber-400"
                  }`}
                />
              </button>
            );
          })}
          {rating > 0 && (
            <span className="text-[10px] font-black text-amber-500 ml-1.5 font-mono">
              {rating}/5
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
