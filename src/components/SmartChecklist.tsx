import React, { useState, useEffect } from "react";
import { 
  CheckSquare, 
  Square, 
  Plus, 
  Trash2, 
  Sparkles, 
  ClipboardList, 
  Luggage, 
  ShieldCheck, 
  CalendarDays, 
  RefreshCw,
  PlusCircle,
  HelpCircle,
  AlertCircle
} from "lucide-react";
import { TravelPlan } from "../types";

interface ChecklistItem {
  id: string;
  text: string;
  textAr: string;
  category: "pre-trip" | "clothing" | "electronics" | "documents" | "health" | "misc";
  checked: boolean;
  isCustom?: boolean;
}

interface SmartChecklistProps {
  plan: TravelPlan;
  lang: "ar" | "en";
}

export const SmartChecklist: React.FC<SmartChecklistProps> = ({ plan, lang }) => {
  const [items, setItems] = useState<ChecklistItem[]>([]);
  const [activeCategoryTab, setActiveCategoryTab] = useState<"all" | "pre-trip" | "packing">("all");
  const [packingSubTab, setPackingSubTab] = useState<"clothing" | "electronics" | "documents" | "health" | "misc">("clothing");
  const [customItemText, setCustomItemText] = useState("");
  const [customItemCategory, setCustomItemCategory] = useState<ChecklistItem["category"]>("clothing");

  const storageKey = `roamiq_checklist_${plan.destination || "default"}`;

  // Helper to detect climate context to generate tailored clothing items
  const getClimateContext = () => {
    const climateStr = (plan.climate || "").toLowerCase();
    const destinationStr = (plan.destination || "").toLowerCase();

    if (
      climateStr.includes("cold") || climateStr.includes("snow") || climateStr.includes("winter") ||
      climateStr.includes("بارد") || climateStr.includes("ثلج") ||
      destinationStr.includes("london") || destinationStr.includes("paris") || destinationStr.includes("switzerland") ||
      destinationStr.includes("russia") || destinationStr.includes("canada")
    ) {
      return "cold";
    }

    if (
      climateStr.includes("tropical") || climateStr.includes("beach") || climateStr.includes("hot") ||
      climateStr.includes("warm") || climateStr.includes("summer") ||
      climateStr.includes("حار") || climateStr.includes("شاطئ") || climateStr.includes("صيف") ||
      destinationStr.includes("maldives") || destinationStr.includes("bali") || destinationStr.includes("phuket") ||
      destinationStr.includes("dubai") || destinationStr.includes("jeddah")
    ) {
      return "hot";
    }

    return "moderate";
  };

  const climate = getClimateContext();

  // Generate initial default checklist items
  const generateDefaultItems = (): ChecklistItem[] => {
    const defaults: ChecklistItem[] = [];

    // --- Pre-trip tasks ---
    defaults.push(
      {
        id: "p1",
        text: "Verify passport validity (needs at least 6 months remaining)",
        textAr: "التحقق من صلاحية جواز السفر (يجب ألا تقل عن 6 أشهر)",
        category: "pre-trip",
        checked: false
      },
      {
        id: "p2",
        text: `Check visa entry requirements for ${plan.destination}`,
        textAr: `التحقق من متطلبات تأشيرة الدخول لـ ${plan.destination}`,
        category: "pre-trip",
        checked: false
      },
      {
        id: "p3",
        text: "Purchase travel insurance covering medical emergencies",
        textAr: "شراء تأمين سفر يغطي الحالات الطبية الطارئة",
        category: "pre-trip",
        checked: false
      },
      {
        id: "p4",
        text: "Notify bank of international travel to avoid blocked cards",
        textAr: "إبلاغ البنك بالسفر الدولي لتجنب إيقاف البطاقات المصرفية",
        category: "pre-trip",
        checked: false
      },
      {
        id: "p5",
        text: "Confirm flight bookings and download offline copies of tickets",
        textAr: "تأكيد حجوزات الطيران وتحميل نسخ غير متصلة بالإنترنت من التذاكر",
        category: "pre-trip",
        checked: false
      },
      {
        id: "p6",
        text: "Pre-book airport transfer or note the transit directions",
        textAr: "حجز وسيلة نقل من المطار مسبقاً أو تدوين اتجاهات النقل",
        category: "pre-trip",
        checked: false
      }
    );

    // --- Documents & Valuables ---
    defaults.push(
      {
        id: "d1",
        text: "Physical passport & national ID card",
        textAr: "جواز السفر الفعلي وبطاقة الهوية الوطنية",
        category: "documents",
        checked: false
      },
      {
        id: "d2",
        text: `Some local cash (${plan.currency || "USD"}) or credit cards with no foreign fee`,
        textAr: `بعض النقود السائلة بالعملة المحلية (${plan.currency || "دولار"}) أو بطاقات ائتمان بدون رسوم صرف`,
        category: "documents",
        checked: false
      },
      {
        id: "d3",
        text: "Printed/Digital hotel reservations & itinerary plans",
        textAr: "حجوزات الفنادق المطبوعة/الرقمية وخطط المسار",
        category: "documents",
        checked: false
      },
      {
        id: "d4",
        text: "Driving license (international if renting a car)",
        textAr: "رخصة القيادة (دولية في حال استئجار سيارة)",
        category: "documents",
        checked: false
      }
    );

    // --- Electronics ---
    defaults.push(
      {
        id: "e1",
        text: "Universal plug adapter & voltage converter",
        textAr: "مهايئ قابس عالمي (Fishe/Universal Adapter) ومحول جهد",
        category: "electronics",
        checked: false
      },
      {
        id: "e2",
        text: "Power bank (portable charger) for long days exploring",
        textAr: "شاحن متنقل (باور بانك) لأيام التجول الطويلة",
        category: "electronics",
        checked: false
      },
      {
        id: "e3",
        text: "Phone charging cables and camera accessories",
        textAr: "أسلاك شحن الهاتف وملحقات الكاميرا",
        category: "electronics",
        checked: false
      },
      {
        id: "e4",
        text: "Noise-cancelling headphones for flights or trains",
        textAr: "سماعات رأس عازلة للضوضاء للرحلات الجوية أو القطارات",
        category: "electronics",
        checked: false
      }
    );

    // --- Clothing (Tailored to climate) ---
    if (climate === "cold") {
      defaults.push(
        {
          id: "c1",
          text: "Heavy jacket, windproof coat, or parka",
          textAr: "سترة ثقيلة أو معطف مقاوم للرياح أو باركا",
          category: "clothing",
          checked: false
        },
        {
          id: "c2",
          text: "Thermal underwear layers (tops & bottoms)",
          textAr: "ملابس داخلية حرارية (طبقات علوية وسفلية)",
          category: "clothing",
          checked: false
        },
        {
          id: "c3",
          text: "Warm gloves, wool socks, and winter beanies",
          textAr: "قفازات دافئة، جوارب صوفية، وقبعات شتوية",
          category: "clothing",
          checked: false
        },
        {
          id: "c4",
          text: "Comfortable, waterproof walking boots",
          textAr: "أحذية مشي مريحة ومقاومة للماء",
          category: "clothing",
          checked: false
        },
        {
          id: "c5",
          text: "Scarves and sweaters for layering",
          textAr: "أوشحة وكنزات صوفية للتدفئة المتعددة",
          category: "clothing",
          checked: false
        }
      );
    } else if (climate === "hot") {
      defaults.push(
        {
          id: "c1",
          text: "Lightweight breathable t-shirts and shorts",
          textAr: "تيشيرتات خفيفة جيدة التهوية وسراويل قصيرة",
          category: "clothing",
          checked: false
        },
        {
          id: "c2",
          text: "Swimwear and beach cover-up / quick-dry towel",
          textAr: "ملابس سباحة وغطاء للشاطئ / منشفة سريعة الجفاف",
          category: "clothing",
          checked: false
        },
        {
          id: "c3",
          text: "Sunglasses and wide-brimmed sun hat",
          textAr: "نظارات شمسية وقبعة شمسية واسعة الحواف",
          category: "clothing",
          checked: false
        },
        {
          id: "c4",
          text: "Comfortable sandals and breathable walking shoes",
          textAr: "صنادل مريحة وأحذية مشي خفيفة وقابلة للتهوية",
          category: "clothing",
          checked: false
        },
        {
          id: "c5",
          text: "Light linen clothing for balmy evenings",
          textAr: "ملابس كتان خفيفة للأمسيات الصيفية الدافئة",
          category: "clothing",
          checked: false
        }
      );
    } else {
      defaults.push(
        {
          id: "c1",
          text: "Versatile layers (light jackets, cardigans, or hoodies)",
          textAr: "طبقات ملابس متعددة الاستخدامات (سترات خفيفة أو هوديز)",
          category: "clothing",
          checked: false
        },
        {
          id: "c2",
          text: "Comfortable sneakers for intensive city walking",
          textAr: "أحذية رياضية مريحة للمشي المكثف في المدينة",
          category: "clothing",
          checked: false
        },
        {
          id: "c3",
          text: "Jeans, chinos, or comfortable travel pants",
          textAr: "جينز أو بنطال تشينو أو سراويل سفر مريحة",
          category: "clothing",
          checked: false
        },
        {
          id: "c4",
          text: "Compact travel umbrella or light rain poncho",
          textAr: "مظلة سفر مدمجة أو معطف مطر خفيف",
          category: "clothing",
          checked: false
        },
        {
          id: "c5",
          text: "Casual dinner outfits & simple smart-casual clothes",
          textAr: "ملابس أنيقة كاجوال لتناول العشاء والطلعات",
          category: "clothing",
          checked: false
        }
      );
    }

    // --- Health & Toiletries ---
    defaults.push(
      {
        id: "h1",
        text: "Prescription medications (with original pharmacy labels)",
        textAr: "الأدوية الموصوفة طبياً (مع الملصقات الصيدلانية الأصلية)",
        category: "health",
        checked: false
      },
      {
        id: "h2",
        text: "Travel-size sunscreen & lip balm",
        textAr: "واقي شمس بحجم السفر ومرطب شفاه",
        category: "health",
        checked: false
      },
      {
        id: "h3",
        text: "Basic first-aid kit (painkillers, band-aids, motion sickness pills)",
        textAr: "حقيبة إسعافات أولية مبسطة (مسكنات، ضمادات، حبوب دوار الحركة)",
        category: "health",
        checked: false
      },
      {
        id: "h4",
        text: "Toothbrush, travel-size toothpaste, & hair care essentials",
        textAr: "فرشاة أسنان ومعجون أسنان بحجم مناسب ومستلزمات الشعر",
        category: "health",
        checked: false
      },
      {
        id: "h5",
        text: "Hand sanitizer & disinfectant wipes",
        textAr: "معقم لليدين ومناديل مطهرة",
        category: "health",
        checked: false
      }
    );

    // --- Miscellaneous ---
    defaults.push(
      {
        id: "m1",
        text: "Reusable travel water bottle (empty through airport security)",
        textAr: "زجاجة مياه قابلة لإعادة الاستخدام (تُفرغ أثناء تفتيش المطار)",
        category: "misc",
        checked: false
      },
      {
        id: "m2",
        text: "Travel neck pillow and sleeping eye mask",
        textAr: "وسادة رقبة للسفر وقناع نوم مريح للعينين",
        category: "misc",
        checked: false
      },
      {
        id: "m3",
        text: "Compact daypack/backpack for active days",
        textAr: "حقيبة ظهر يومية مدمجة للأيام المليئة بالحركة",
        category: "misc",
        checked: false
      },
      {
        id: "m4",
        text: "Zip-lock bags (great for organizing and waterproofing)",
        textAr: "أكياس بلاستيكية ذات سحاب (ممتازة للتنظيم ومقاومة الماء)",
        category: "misc",
        checked: false
      }
    );

    return defaults;
  };

  // Load checklist items from localStorage or fallback to defaults
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setItems(parsed);
          return;
        }
      } catch (e) {
        console.error("Failed to parse saved checklist, resetting to defaults", e);
      }
    }
    // Fallback to newly generated defaults
    setItems(generateDefaultItems());
  }, [plan.destination, plan.climate]);

  // Save checklist items to localStorage whenever they change
  const saveChecklist = (newItems: ChecklistItem[]) => {
    setItems(newItems);
    localStorage.setItem(storageKey, JSON.stringify(newItems));
  };

  // Toggle item check status
  const handleToggleItem = (id: string) => {
    const updated = items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    saveChecklist(updated);
  };

  // Add custom item
  const handleAddCustomItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customItemText.trim()) return;

    const newItem: ChecklistItem = {
      id: `custom-${Date.now()}`,
      text: customItemText.trim(),
      textAr: customItemText.trim(), // Use same for both in case of custom user input
      category: customItemCategory,
      checked: false,
      isCustom: true
    };

    const updated = [...items, newItem];
    saveChecklist(updated);
    setCustomItemText("");
  };

  // Delete checklist item
  const handleDeleteItem = (id: string) => {
    const updated = items.filter(item => item.id !== id);
    saveChecklist(updated);
  };

  // Reset checklist to original defaults
  const handleResetChecklist = () => {
    if (window.confirm(lang === "ar" ? "هل أنت متأكد من إعادة تعيين القائمة إلى وضعها الافتراضي؟ سيتم حذف العناصر المخصصة." : "Are you sure you want to reset the checklist? All custom items will be lost.")) {
      saveChecklist(generateDefaultItems());
    }
  };

  // Calculate statistics
  const getStats = (cat?: ChecklistItem["category"] | "packing") => {
    let filtered = items;
    if (cat === "packing") {
      filtered = items.filter(i => i.category !== "pre-trip");
    } else if (cat) {
      filtered = items.filter(i => i.category === cat);
    }
    
    const total = filtered.length;
    const completed = filtered.filter(i => i.checked).length;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    return { total, completed, percent };
  };

  const overallStats = getStats();
  const preTripStats = getStats("pre-trip");
  const packingStats = getStats("packing");

  // Filter items for render
  const getFilteredItems = (): ChecklistItem[] => {
    if (activeCategoryTab === "all") {
      return items;
    }
    if (activeCategoryTab === "pre-trip") {
      return items.filter(i => i.category === "pre-trip");
    }
    // "packing" is active
    return items.filter(i => i.category === packingSubTab);
  };

  const currentList = getFilteredItems();

  const packingSubCategories: { key: ChecklistItem["category"]; label: string; labelAr: string }[] = [
    { key: "clothing", label: "Clothing", labelAr: "الملابس والأحذية" },
    { key: "electronics", label: "Electronics", labelAr: "الإلكترونيات" },
    { key: "documents", label: "Documents", labelAr: "الوثائق والأموال" },
    { key: "health", label: "Health & Care", labelAr: "الصحة والنظافة" },
    { key: "misc", label: "Miscellaneous", labelAr: "حقيبة اليد ومتنوعات" }
  ];

  return (
    <div className="space-y-6 animate-fade-in bg-slate-900/50 border border-white/10 rounded-2xl p-5 md:p-6" id="smart-checklist-view">
      {/* Top Header with Progress */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-amber-500 animate-pulse" />
            <h3 className="text-sm font-black uppercase text-white tracking-wider flex items-center gap-1.5">
              {lang === "ar" ? "قائمة المهام وحقيبة السفر الذكية" : "Smart Checklist & Packing Assistant"}
              <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded font-black uppercase tracking-normal">
                {climate === "cold" ? (lang === "ar" ? "❄️ بارد" : "❄️ Winter/Cold") : climate === "hot" ? (lang === "ar" ? "☀️ حار" : "☀️ Tropical/Hot") : (lang === "ar" ? "🍃 معتدل" : "🍃 Moderate")}
              </span>
            </h3>
          </div>
          <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
            {lang === "ar" 
              ? `قائمة مخصصة ومطابقة لأجواء وظروف السفر لـ ${plan.destination || "وجهتك"}.`
              : `Personalized checklists matching the climate and travel conditions of ${plan.destination || "your destination"}.`
            }
          </p>
        </div>

        {/* Overall Completion Circle/Bar */}
        <div className="flex items-center gap-3 bg-black/20 px-4 py-2 border border-white/5 rounded-xl shrink-0">
          <div className="text-right">
            <span className="text-[10px] uppercase font-bold text-slate-500 block leading-none mb-1">
              {lang === "ar" ? "نسبة الجاهزية" : "Ready to Travel"}
            </span>
            <span className="text-xs font-black text-amber-500">
              {overallStats.completed} / {overallStats.total} {lang === "ar" ? "مكتمل" : "items completed"}
            </span>
          </div>
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* SVG Progress Circle */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="24"
                cy="24"
                r="18"
                className="stroke-white/5"
                strokeWidth="3.5"
                fill="transparent"
              />
              <circle
                cx="24"
                cy="24"
                r="18"
                className="stroke-amber-500 transition-all duration-500"
                strokeWidth="3.5"
                fill="transparent"
                strokeDasharray={2 * Math.PI * 18}
                strokeDashoffset={2 * Math.PI * 18 * (1 - overallStats.percent / 100)}
              />
            </svg>
            <span className="absolute text-[10px] font-black text-white">{overallStats.percent}%</span>
          </div>
        </div>
      </div>

      {/* Main Tab Switcher */}
      <div className="grid grid-cols-3 bg-black/30 p-1.5 rounded-xl border border-white/5 gap-1">
        <button
          type="button"
          onClick={() => {
            setActiveCategoryTab("all");
          }}
          className={`py-2 px-1 text-xs font-bold rounded-lg transition-all text-center flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
            activeCategoryTab === "all"
              ? "bg-amber-500 text-black font-extrabold shadow-md"
              : "text-slate-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{lang === "ar" ? "كل العناصر" : "All Tasks"}</span>
          <span className={`text-[9px] px-1.5 py-0.2 rounded-full ${activeCategoryTab === "all" ? "bg-black/20 text-black font-black" : "bg-white/10 text-slate-400"}`}>
            {overallStats.total}
          </span>
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveCategoryTab("pre-trip");
          }}
          className={`py-2 px-1 text-xs font-bold rounded-lg transition-all text-center flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
            activeCategoryTab === "pre-trip"
              ? "bg-amber-500 text-black font-extrabold shadow-md"
              : "text-slate-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{lang === "ar" ? "تجهيزات ما قبل السفر" : "Pre-trip Tasks"}</span>
          <span className={`text-[9px] px-1.5 py-0.2 rounded-full ${activeCategoryTab === "pre-trip" ? "bg-black/20 text-black font-black" : "bg-white/10 text-slate-400"}`}>
            {preTripStats.total}
          </span>
        </button>

        <button
          type="button"
          onClick={() => {
            setActiveCategoryTab("packing");
          }}
          className={`py-2 px-1 text-xs font-bold rounded-lg transition-all text-center flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
            activeCategoryTab === "packing"
              ? "bg-amber-500 text-black font-extrabold shadow-md"
              : "text-slate-400 hover:text-white hover:bg-white/5"
          }`}
        >
          <Luggage className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">{lang === "ar" ? "تعبئة الحقيبة" : "Packing List"}</span>
          <span className={`text-[9px] px-1.5 py-0.2 rounded-full ${activeCategoryTab === "packing" ? "bg-black/20 text-black font-black" : "bg-white/10 text-slate-400"}`}>
            {packingStats.total}
          </span>
        </button>
      </div>

      {/* Sub-tabs for Packing categories */}
      {activeCategoryTab === "packing" && (
        <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-white/10">
          {packingSubCategories.map(cat => {
            const catStats = getStats(cat.key);
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setPackingSubTab(cat.key)}
                className={`py-1.5 px-3 rounded-lg text-xs font-bold border shrink-0 transition-all ${
                  packingSubTab === cat.key
                    ? "bg-white/10 text-amber-400 border-amber-500/30"
                    : "bg-black/20 text-slate-400 border-transparent hover:text-white"
                }`}
              >
                {lang === "ar" ? cat.labelAr : cat.label} ({catStats.completed}/{catStats.total})
              </button>
            );
          })}
        </div>
      )}

      {/* Checklist items rendering */}
      <div className="bg-black/20 border border-white/5 rounded-xl p-4 space-y-2.5 max-h-[400px] overflow-y-auto">
        {currentList.length === 0 ? (
          <div className="text-center py-8 space-y-2">
            <AlertCircle className="w-8 h-8 text-slate-600 mx-auto" />
            <p className="text-xs text-slate-400">
              {lang === "ar" ? "لا توجد عناصر في هذه الفئة بعد." : "No checklist items in this category yet."}
            </p>
          </div>
        ) : (
          currentList.map(item => (
            <div 
              key={item.id} 
              className={`flex items-start justify-between gap-3 p-3 rounded-lg border transition-all duration-200 ${
                item.checked 
                  ? "bg-emerald-500/5 border-emerald-500/10 text-slate-400" 
                  : "bg-white/5 border-white/5 text-white hover:bg-white/10"
              }`}
            >
              <button
                type="button"
                onClick={() => handleToggleItem(item.id)}
                className="flex items-start gap-3 flex-1 text-left cursor-pointer"
              >
                {item.checked ? (
                  <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-slate-400 hover:text-amber-400 shrink-0 mt-0.5" />
                )}
                <div className="text-xs md:text-sm leading-relaxed select-none">
                  <span className={item.checked ? "line-through text-slate-500" : ""}>
                    {lang === "ar" ? item.textAr : item.text}
                  </span>
                  {item.isCustom && (
                    <span className="ml-1.5 text-[8px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1 py-0.2 rounded uppercase font-black">
                      {lang === "ar" ? "مضاف" : "Custom"}
                    </span>
                  )}
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleDeleteItem(item.id)}
                className="text-slate-500 hover:text-rose-400 p-1 rounded hover:bg-rose-500/10 transition-all shrink-0"
                title={lang === "ar" ? "حذف العنصر" : "Delete Item"}
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Add Custom Item Input Bar */}
      <form onSubmit={handleAddCustomItem} className="bg-black/30 border border-white/5 p-3 rounded-xl flex flex-wrap items-center gap-3">
        <div className="flex-1 min-w-[200px] flex items-center gap-2">
          <PlusCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <input
            type="text"
            value={customItemText}
            onChange={(e) => setCustomItemText(e.target.value)}
            placeholder={lang === "ar" ? "إضافة مهمة أو غرض مخصص..." : "Add a custom item or essential..."}
            className="w-full bg-transparent border-none text-xs text-white focus:outline-none focus:ring-0 placeholder-slate-500"
          />
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {/* Category selection for custom item */}
          <select
            value={customItemCategory}
            onChange={(e) => setCustomItemCategory(e.target.value as ChecklistItem["category"])}
            className="bg-slate-800/80 border border-white/10 text-[10px] text-slate-300 rounded px-2 py-1.5 font-bold focus:outline-none"
          >
            <option value="pre-trip">{lang === "ar" ? "تجهيزات ما قبل السفر" : "Pre-trip Tasks"}</option>
            <option value="clothing">{lang === "ar" ? "ملابس وأحذية" : "Clothing"}</option>
            <option value="electronics">{lang === "ar" ? "إلكترونيات" : "Electronics"}</option>
            <option value="documents">{lang === "ar" ? "وثائق وحقيبة يد" : "Documents"}</option>
            <option value="health">{lang === "ar" ? "صحة وعناية" : "Health"}</option>
            <option value="misc">{lang === "ar" ? "متنوعات أخرى" : "Misc"}</option>
          </select>

          <button
            type="submit"
            disabled={!customItemText.trim()}
            className="bg-amber-500 hover:bg-amber-400 disabled:bg-slate-700 disabled:text-slate-500 text-black px-3 py-1.5 rounded-lg text-xs font-black flex items-center gap-1 transition-all"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{lang === "ar" ? "إضافة" : "Add"}</span>
          </button>
        </div>
      </form>

      {/* Bottom action controls */}
      <div className="flex justify-between items-center text-xs text-slate-400 pt-1">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>{lang === "ar" ? "تُحفظ التقدم تلقائياً بمتصفحك" : "Progress saves automatically offline"}</span>
        </div>

        <button
          type="button"
          onClick={handleResetChecklist}
          className="text-slate-400 hover:text-white flex items-center gap-1 bg-white/5 hover:bg-white/10 px-2.5 py-1.5 rounded-lg transition-all"
        >
          <RefreshCw className="w-3 h-3" />
          <span>{lang === "ar" ? "إعادة تعيين القائمة" : "Reset Checklist"}</span>
        </button>
      </div>
    </div>
  );
};
