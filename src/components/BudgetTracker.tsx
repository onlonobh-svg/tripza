import React, { useState, useEffect } from "react";
import { Plus, Trash2, CheckSquare, Square, DollarSign, PieChart, Download, HelpCircle, Save, Edit3, Check } from "lucide-react";
import { TravelPlan } from "../types";

interface BudgetItem {
  id: string;
  title: string;
  cost: number;
  category: "Activities" | "Dining" | "Accommodations" | "Transport" | "Shopping" | "Other";
  paid: boolean;
  dayNumber?: number;
  isCustom?: boolean;
}

interface BudgetTrackerProps {
  plan: TravelPlan;
  lang: "ar" | "en";
}

export const BudgetTracker: React.FC<BudgetTrackerProps> = ({ plan, lang }) => {
  const [items, setItems] = useState<BudgetItem[]>([]);
  const [customTitle, setCustomTitle] = useState("");
  const [customCost, setCustomCost] = useState("");
  const [customCategory, setCustomCategory] = useState<BudgetItem["category"]>("Activities");
  const [customDay, setCustomDay] = useState<string>("1");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editCostValue, setEditCostValue] = useState("");

  const detectedCurrency = plan.currency || "$";

  // Helper to parse numeric cost from string (e.g., "50 SAR" -> 50, "Free" -> 0)
  const parseNumericCost = (costStr: string): number => {
    if (!costStr) return 0;
    const clean = costStr.toLowerCase().replace(/,/g, "");
    if (clean.includes("free") || clean.includes("مجاني") || clean.includes("مشمول")) {
      return 0;
    }
    const match = clean.match(/\d+(\.\d+)?/);
    return match ? parseFloat(match[0]) : 0;
  };

  // Populate budget items from generated plan
  useEffect(() => {
    const initialItems: BudgetItem[] = [];
    
    // Add recommended hotels as an accommodation expense if present
    if (plan.recommendedHotels && plan.recommendedHotels.length > 0) {
      plan.recommendedHotels.forEach((hotel, idx) => {
        let estCost = 150; // default medium rate
        if (hotel.priceRange.includes("VIP") || hotel.priceRange.includes("$$$$")) estCost = 450;
        else if (hotel.priceRange.includes("متوسط") || hotel.priceRange.includes("$$")) estCost = 180;
        else if (hotel.priceRange.includes("اقتصادي") || hotel.priceRange.includes("$")) estCost = 80;

        initialItems.push({
          id: `hotel-${idx}`,
          title: `${lang === "ar" ? "إقامة:" : "Stay:"} ${hotel.name} (${hotel.area})`,
          cost: estCost,
          category: "Accommodations",
          paid: false
        });
      });
    }

    // Add activities from itinerary
    if (plan.itinerary) {
      plan.itinerary.forEach((day) => {
        if (day.activities) {
          day.activities.forEach((act, actIdx) => {
            const costVal = parseNumericCost(act.estimatedCost);
            // Deduce category from title or desc
            let category: BudgetItem["category"] = "Activities";
            const lowerTitle = act.title.toLowerCase();
            const lowerDesc = act.description.toLowerCase();
            
            if (
              lowerTitle.includes("dinner") || lowerTitle.includes("lunch") || lowerTitle.includes("breakfast") || 
              lowerTitle.includes("food") || lowerTitle.includes("restaurant") || lowerTitle.includes("cafe") || 
              lowerTitle.includes("وجبة") || lowerTitle.includes("عشاء") || lowerTitle.includes("غداء") || 
              lowerTitle.includes("فطور") || lowerTitle.includes("مقهى") || lowerTitle.includes("مطعم")
            ) {
              category = "Dining";
            } else if (
              lowerTitle.includes("train") || lowerTitle.includes("metro") || lowerTitle.includes("taxi") || 
              lowerTitle.includes("flight") || lowerTitle.includes("bus") || lowerTitle.includes("ride") ||
              lowerTitle.includes("قطار") || lowerTitle.includes("مترو") || lowerTitle.includes("تاكسي") || 
              lowerTitle.includes("طيران") || lowerTitle.includes("حافلة") || lowerTitle.includes("عبارة")
            ) {
              category = "Transport";
            } else if (
              lowerTitle.includes("shop") || lowerTitle.includes("bazaar") || lowerTitle.includes("souk") || 
              lowerTitle.includes("mall") || lowerTitle.includes("تسوق") || lowerTitle.includes("سوق") || 
              lowerTitle.includes("مول")
            ) {
              category = "Shopping";
            }

            initialItems.push({
              id: `act-${day.dayNumber}-${actIdx}`,
              title: act.title,
              cost: costVal,
              category,
              paid: false,
              dayNumber: day.dayNumber
            });
          });
        }
      });
    }

    setItems(initialItems);
  }, [plan, lang]);

  // Totals calculations
  const totalBudget = items.reduce((sum, item) => sum + item.cost, 0);
  const paidBudget = items.filter(i => i.paid).reduce((sum, item) => sum + item.cost, 0);
  const unpaidBudget = totalBudget - paidBudget;
  const paidPercentage = totalBudget > 0 ? Math.round((paidBudget / totalBudget) * 100) : 0;

  // Category breakdowns
  const getCategoryTotal = (cat: BudgetItem["category"]) => {
    return items.filter(i => i.category === cat).reduce((sum, i) => sum + i.cost, 0);
  };

  const categoriesList: BudgetItem["category"][] = ["Accommodations", "Activities", "Dining", "Transport", "Shopping", "Other"];
  const categoryLabelsAr: Record<BudgetItem["category"], string> = {
    Accommodations: "الإقامة والفنادق",
    Activities: "الأنشطة والفعاليات",
    Dining: "الوجبات والمطاعم",
    Transport: "المواصلات والتنقل",
    Shopping: "التسوق والهدايا",
    Other: "مصاريف أخرى"
  };
  const categoryLabelsEn: Record<BudgetItem["category"], string> = {
    Accommodations: "Stays & Hotels",
    Activities: "Sightseeing & Tours",
    Dining: "Dining & Food",
    Transport: "Transport",
    Shopping: "Shopping",
    Other: "Other Costs"
  };

  // Add custom item handler
  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTitle.trim()) return;
    const costNum = parseFloat(customCost) || 0;
    
    const newItem: BudgetItem = {
      id: `custom-${Date.now()}`,
      title: customTitle.trim(),
      cost: costNum,
      category: customCategory,
      paid: false,
      dayNumber: parseInt(customDay) || undefined,
      isCustom: true
    };

    setItems(prev => [...prev, newItem]);
    setCustomTitle("");
    setCustomCost("");
  };

  // Toggle paid status
  const togglePaid = (id: string) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, paid: !item.paid } : item));
  };

  // Delete item
  const handleDeleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  // Start inline editing
  const startEditing = (id: string, currentCost: number) => {
    setEditingId(id);
    setEditCostValue(currentCost.toString());
  };

  // Save inline edit
  const saveEdit = (id: string) => {
    const costNum = parseFloat(editCostValue) || 0;
    setItems(prev => prev.map(item => item.id === id ? { ...item, cost: costNum } : item));
    setEditingId(null);
  };

  // Export as Text Report
  const handleExportText = () => {
    let text = `=========================================\n`;
    text += `    TRIPZA.STORE TRAVEL BUDGET REPORT    \n`;
    text += `=========================================\n`;
    text += `Destination: ${plan.destination}\n`;
    text += `Duration: ${plan.duration} Days\n`;
    text += `Total Budget: ${totalBudget.toFixed(2)} ${detectedCurrency}\n`;
    text += `Paid Expenses: ${paidBudget.toFixed(2)} ${detectedCurrency} (${paidPercentage}%)\n`;
    text += `Remaining: ${unpaidBudget.toFixed(2)} ${detectedCurrency}\n\n`;
    
    text += `CATEGORY BREAKDOWN:\n`;
    categoriesList.forEach(cat => {
      const catTotal = getCategoryTotal(cat);
      if (catTotal > 0) {
        const pct = totalBudget > 0 ? ((catTotal / totalBudget) * 100).toFixed(1) : "0";
        const label = lang === "ar" ? categoryLabelsAr[cat] : categoryLabelsEn[cat];
        text += `- ${label}: ${catTotal.toFixed(2)} ${detectedCurrency} (${pct}%)\n`;
      }
    });

    text += `\nEXPENSE ITEMS:\n`;
    text += `-----------------------------------------\n`;
    items.forEach(item => {
      const status = item.paid ? "[PAID]" : "[UNPAID]";
      const dayStr = item.dayNumber ? `Day ${item.dayNumber} - ` : "";
      text += `${status} ${dayStr}${item.title} (${item.category}): ${item.cost.toFixed(2)} ${detectedCurrency}\n`;
    });
    text += `-----------------------------------------\n`;
    text += `Generated via Tripza.store Premium Travel Planner\n`;

    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Tripza.store_Budget_${plan.destination.replace(/ /g, "_")}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6 animate-fade-in" id="live-budget-tracker-card">
      {/* Upper Status Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Total Cost */}
        <div className="bg-[#121620] border border-white/10 p-4 rounded-xl flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">
              {lang === "ar" ? "الميزانية الكلية الكاشفة" : "TOTAL PLAN BUDGET"}
            </span>
            <span className="text-xl font-black text-amber-500">
              {totalBudget.toFixed(2)} <span className="text-xs font-semibold text-white">{detectedCurrency}</span>
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400">
            <DollarSign className="w-5 h-5" />
          </div>
        </div>

        {/* Paid Expenses */}
        <div className="bg-[#121620] border border-white/10 p-4 rounded-xl flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">
              {lang === "ar" ? "المدفوعات والمستقرة" : "PAID EXPENSES"}
            </span>
            <span className="text-xl font-black text-emerald-400">
              {paidBudget.toFixed(2)} <span className="text-xs font-semibold text-white">{detectedCurrency}</span>
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded block">
              {paidPercentage}%
            </span>
          </div>
        </div>

        {/* Unpaid Left */}
        <div className="bg-[#121620] border border-white/10 p-4 rounded-xl flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wider">
              {lang === "ar" ? "المتبقي للدفع" : "REMAINING UNPAID"}
            </span>
            <span className="text-xl font-black text-sky-400">
              {unpaidBudget.toFixed(2)} <span className="text-xs font-semibold text-white">{detectedCurrency}</span>
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400">
            <PieChart className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white/5 border border-white/5 rounded-xl p-3">
        <div className="flex justify-between text-xs text-slate-400 mb-1.5 font-bold">
          <span>{lang === "ar" ? "تتبع الصرف الفعلي" : "Actual Spending Progress"}</span>
          <span>{paidPercentage}% {lang === "ar" ? "تم سداده" : "Settled"}</span>
        </div>
        <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
          <div 
            className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500" 
            style={{ width: `${paidPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Grid: Left Column (Add & Category stats), Right Column (Live table List) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Add item & Category Breakdown */}
        <div className="lg:col-span-5 space-y-6">
          {/* Form to add item */}
          <div className="bg-black/30 border border-white/10 p-4 rounded-xl space-y-3">
            <h4 className="text-xs font-black uppercase text-amber-500 tracking-wider">
              ➕ {lang === "ar" ? "إضافة نفقة جديدة للميزانية" : "Add Custom Expense"}
            </h4>
            <form onSubmit={handleAddItem} className="space-y-3">
              <div>
                <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                  {lang === "ar" ? "اسم البند (مثال: تذاكر الطيران، هدايا)" : "Expense Title (e.g. Flight ticket)"}
                </label>
                <input 
                  type="text" 
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  placeholder={lang === "ar" ? "تذكرة متحف، عشاء فاخر..." : "E.g. Theme Park pass"}
                  className="w-full bg-black/40 border border-white/15 rounded-lg p-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                    {lang === "ar" ? "التكلفة التقديرية" : "Estimated Cost"}
                  </label>
                  <input 
                    type="number" 
                    step="any"
                    value={customCost}
                    onChange={(e) => setCustomCost(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-black/40 border border-white/15 rounded-lg p-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                    {lang === "ar" ? "اليوم (اختياري)" : "Day (Optional)"}
                  </label>
                  <select
                    value={customDay}
                    onChange={(e) => setCustomDay(e.target.value)}
                    className="w-full bg-black/40 border border-white/15 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="">{lang === "ar" ? "عام / لا يوجد" : "General"}</option>
                    {Array.from({ length: plan.duration }).map((_, dIdx) => (
                      <option key={dIdx + 1} value={dIdx + 1}>
                        {lang === "ar" ? `اليوم ${dIdx + 1}` : `Day ${dIdx + 1}`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-slate-400 mb-1">
                  {lang === "ar" ? "الفئة" : "Category"}
                </label>
                <select
                  value={customCategory}
                  onChange={(e) => setCustomCategory(e.target.value as BudgetItem["category"])}
                  className="w-full bg-black/40 border border-white/15 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-amber-500"
                >
                  {categoriesList.map(cat => (
                    <option key={cat} value={cat}>
                      {lang === "ar" ? categoryLabelsAr[cat] : categoryLabelsEn[cat]}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-black text-xs font-black rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
                <span>{lang === "ar" ? "إضافة للمخطط" : "Add Expense"}</span>
              </button>
            </form>
          </div>

          {/* Category breakdown visual bars */}
          <div className="bg-black/20 border border-white/10 p-4 rounded-xl space-y-3">
            <h4 className="text-xs font-black uppercase text-amber-500 tracking-wider">
              📊 {lang === "ar" ? "توزيع الميزانية بالفئات" : "Category Allocation"}
            </h4>
            <div className="space-y-3">
              {categoriesList.map(cat => {
                const total = getCategoryTotal(cat);
                if (total === 0 && cat !== "Activities" && cat !== "Accommodations") return null;
                const percentage = totalBudget > 0 ? Math.round((total / totalBudget) * 100) : 0;
                return (
                  <div key={cat} className="space-y-1">
                    <div className="flex justify-between text-[11px] font-semibold text-slate-300">
                      <span>{lang === "ar" ? categoryLabelsAr[cat] : categoryLabelsEn[cat]}</span>
                      <span>
                        {total.toFixed(1)} {detectedCurrency} ({percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-amber-500/80 h-full rounded-full transition-all duration-300" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Side: Expense List Table with Interactive Actions */}
        <div className="lg:col-span-7 bg-black/30 border border-white/10 rounded-xl p-4 flex flex-col h-[480px]">
          <div className="flex justify-between items-center border-b border-white/5 pb-2.5 mb-3">
            <h4 className="text-xs font-black uppercase text-amber-500 tracking-wider">
              📝 {lang === "ar" ? "تفاصيل بنود الصرف" : "Active Expense Items"}
            </h4>
            <button
              onClick={handleExportText}
              className="px-2 py-1 bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 rounded text-[10px] font-bold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3 h-3 text-amber-400" />
              <span>{lang === "ar" ? "تصدير التقرير" : "Export Report"}</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 pr-1">
            {items.length === 0 ? (
              <div className="text-center py-10 text-xs text-slate-500">
                {lang === "ar" ? "لا توجد بنود صرف حالية." : "No expense items found."}
              </div>
            ) : (
              items.map(item => (
                <div 
                  key={item.id} 
                  className={`flex items-center gap-3 p-2.5 rounded-lg border transition-all ${
                    item.paid 
                      ? "bg-emerald-500/5 border-emerald-500/10 opacity-75" 
                      : "bg-white/5 border-white/5 hover:bg-white/10"
                  }`}
                >
                  {/* Paid check box */}
                  <button 
                    onClick={() => togglePaid(item.id)}
                    className="text-slate-400 hover:text-emerald-400 transition-colors shrink-0 cursor-pointer"
                  >
                    {item.paid ? (
                      <CheckSquare className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Square className="w-4 h-4" />
                    )}
                  </button>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white block truncate">
                        {item.title}
                      </span>
                      {item.dayNumber && (
                        <span className="text-[9px] bg-amber-500/10 text-amber-400 px-1 py-0.2 rounded font-black shrink-0">
                          {lang === "ar" ? `يوم ${item.dayNumber}` : `Day ${item.dayNumber}`}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-500 block uppercase font-medium mt-0.5">
                      {lang === "ar" ? categoryLabelsAr[item.category] : categoryLabelsEn[item.category]}
                    </span>
                  </div>

                  {/* Cost & Edit/Delete actions */}
                  <div className="flex items-center gap-3 shrink-0">
                    {editingId === item.id ? (
                      <div className="flex items-center gap-1 bg-black/40 border border-white/15 p-0.5 rounded-md">
                        <input 
                          type="number"
                          step="any"
                          value={editCostValue}
                          onChange={(e) => setEditCostValue(e.target.value)}
                          className="w-16 bg-transparent text-xs text-white focus:outline-none px-1 text-right font-bold"
                          autoFocus
                          onKeyDown={(e) => {
                            if (e.key === "Enter") saveEdit(item.id);
                          }}
                        />
                        <button 
                          onClick={() => saveEdit(item.id)}
                          className="text-emerald-400 hover:text-emerald-300 p-0.5 cursor-pointer"
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </button>
                      </div>
                    ) : (
                      <div 
                        onClick={() => startEditing(item.id, item.cost)}
                        className="text-right cursor-pointer group/cost flex items-center gap-1"
                        title={lang === "ar" ? "اضغط لتعديل السعر" : "Click to edit price"}
                      >
                        <span className={`text-xs font-bold ${item.paid ? "text-slate-400 line-through" : "text-white"}`}>
                          {item.cost.toFixed(1)} {detectedCurrency}
                        </span>
                        <Edit3 className="w-2.5 h-2.5 text-slate-500 opacity-0 group-hover/cost:opacity-100 transition-opacity" />
                      </div>
                    )}

                    <button 
                      onClick={() => handleDeleteItem(item.id)}
                      className="text-slate-500 hover:text-red-400 transition-colors p-1 cursor-pointer shrink-0"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          
          <div className="border-t border-white/5 pt-2.5 mt-2 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
            <span>{lang === "ar" ? "* اضغط على تكلفة البند لتعديله مباشرة" : "* Click on any cost value to edit it"}</span>
            <span>{items.length} {lang === "ar" ? "بنود إجمالية" : "total items"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
