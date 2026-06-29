export interface Activity {
  timeOfDay: string;
  title: string;
  description: string;
  estimatedCost: string;
  googleMapsSearchQuery: string;
}

export interface ItineraryDay {
  dayNumber: number;
  theme: string;
  activities: Activity[];
}

export interface RecommendedHotel {
  name: string;
  area: string;
  priceRange: string;
  whyChoose: string;
}

export interface TravelPlan {
  destination: string;
  duration: number;
  currency: string;
  totalEstimatedCost: string;
  travelTips: string[];
  recommendedHotels: RecommendedHotel[];
  itinerary: ItineraryDay[];
  climate?: string;
  recommendedDates?: string;
  primaryLanguage?: string;
}

export interface Product {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  price: number;
  originalPrice?: number;
  type: "pdf_plan" | "checklist" | "google_map" | "budget" | "prompts" | "bundle";
  icon: string;
  badge?: string;
  badgeAr?: string;
  // Included items in case of bundle
  includedProducts?: string[];
  // Full downloadable / readable content for the user once purchased
  content?: string;
  contentAr?: string;
  features?: string[];
  featuresAr?: string[];
  details?: string;
  detailsAr?: string;
}

export interface PredefinedGuide {
  id: string;
  title: string;
  titleAr: string;
  destination: string;
  destinationAr: string;
  days: number;
  budget: string;
  budgetAr: string;
  coverImage: string;
  shortDescription: string;
  shortDescriptionAr: string;
  content: string;
  contentAr: string;
}

export interface BudgetBreakdownItem {
  category: string;
  cost: string;
  percentage: number;
  tips: string;
}

export interface BudgetCalculatorResult {
  summary: string;
  totalEstimatedCost: string;
  breakdown: BudgetBreakdownItem[];
  smartSavingsAdvice: string[];
}

export interface PhotoSpot {
  name: string;
  bestTime: string;
  compositionTip: string;
  description: string;
  exactLocationHint: string;
}

export interface PhotoSpotResult {
  destination: string;
  spots: PhotoSpot[];
}

export interface RatedPlan {
  id: string;
  plan: TravelPlan;
  rating: number;
  timestamp: number;
}

