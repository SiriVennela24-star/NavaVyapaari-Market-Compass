
export interface FounderProfile {
  name: string;
  startupName: string;
  productCategory: string;
  serialNumber: string;
  bio: string;
  location: string;
  email: string;
}

export interface MarketDemand {
  city: string;
  score: number;
  reason: string;
}

export interface SeasonalData {
  month: string;
  demand: number;
  monthlyIncrease: string; // Percentage increase string
}

export interface SupplyPartner {
  name: string;
  type: 'Retailer' | 'Wholesaler';
  location: string;
  contact: string;
  marketValueStat: string; // Statistic of product value in their market
}

export interface BusinessData {
  marketDemand: MarketDemand[];
  bonusTip: string;
  seasonalForecast: SeasonalData[];
  supplyChain: SupplyPartner[];
  products: string[];
  dashboard: {
    sales: string;
    productionRate: string;
    marketPercentage: string;
    nextActions: string[];
  };
}
