
import { GoogleGenAI, Type } from "@google/genai";
import { BusinessData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateMarketInsights = async (
  startupName: string,
  productCategory: string
): Promise<BusinessData> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze the market for a startup named "${startupName}" producing "${productCategory}". 
    Generate a professional and realistic business report in JSON format:
    1. Rank the TOP 15 CITIES with highest to lowest demand for this product.
    2. Provide a "bonusTip" on how to expand these specific products.
    3. Provide 12 months of "seasonalForecast" with "demand" (0-100) and "monthlyIncrease" (as a percentage string like '+5%').
    4. Provide 8 "supplyChain" partners (4 Wholesalers, 4 Retailers) with a "marketValueStat" explaining your product's projected value/performance in their specific market segment.
    5. Generate "dashboard" metrics: realistic yearly "sales" projection (USD), "productionRate" (units/month), "marketPercentage" (projected share), and a list of 4 "nextActions" for the founder.
    6. A list of 5 specific "products" the startup might sell.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          marketDemand: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                city: { type: Type.STRING },
                score: { type: Type.NUMBER },
                reason: { type: Type.STRING }
              },
              required: ["city", "score", "reason"]
            }
          },
          bonusTip: { type: Type.STRING },
          seasonalForecast: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                month: { type: Type.STRING },
                demand: { type: Type.NUMBER },
                monthlyIncrease: { type: Type.STRING }
              },
              required: ["month", "demand", "monthlyIncrease"]
            }
          },
          supplyChain: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                type: { type: Type.STRING, enum: ["Retailer", "Wholesaler"] },
                location: { type: Type.STRING },
                contact: { type: Type.STRING },
                marketValueStat: { type: Type.STRING }
              },
              required: ["name", "type", "location", "contact", "marketValueStat"]
            }
          },
          products: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          dashboard: {
            type: Type.OBJECT,
            properties: {
              sales: { type: Type.STRING },
              productionRate: { type: Type.STRING },
              marketPercentage: { type: Type.STRING },
              nextActions: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["sales", "productionRate", "marketPercentage", "nextActions"]
          }
        },
        required: ["marketDemand", "bonusTip", "seasonalForecast", "supplyChain", "products", "dashboard"]
      }
    }
  });

  return JSON.parse(response.text || '{}');
};
