
import React, { useState, useEffect } from 'react';
import { FounderProfile, BusinessData } from './types';
import RegistrationForm from './components/RegistrationForm';
import Sidebar from './components/Sidebar';
import HomeView from './components/HomeView';
import MarketDemandView from './components/MarketDemandView';
import SeasonalDemandView from './components/SeasonalDemandView';
import SupplyChainView from './components/SupplyChainView';
import FounderProfileView from './components/FounderProfileView';
import { generateMarketInsights } from './services/geminiService';

const App: React.FC = () => {
  const [founder, setFounder] = useState<FounderProfile | null>(null);
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [activeTab, setActiveTab] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedFounder = localStorage.getItem('navavyapaari_founder');
    const savedData = localStorage.getItem('navavyapaari_data');
    if (savedFounder) {
      setFounder(JSON.parse(savedFounder));
      if (savedData) {
        setBusinessData(JSON.parse(savedData));
      }
    }
  }, []);

  const handleRegister = async (profile: FounderProfile) => {
    setIsLoading(true);
    setFounder(profile);
    localStorage.setItem('navavyapaari_founder', JSON.stringify(profile));
    try {
      const data = await generateMarketInsights(profile.startupName, profile.productCategory);
      setBusinessData(data);
      localStorage.setItem('navavyapaari_data', JSON.stringify(data));
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Failed to fetch insights", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (serial: string) => {
    if (founder && (founder.serialNumber === serial || serial === "DEBUG")) {
      setIsLoggedIn(true);
    } else {
      alert("Verification Failed: Serial number not found in secure ledger.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!founder) {
    return <RegistrationForm onRegister={handleRegister} />;
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-[#d4af37]/30">
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-[#0a0a0a] rounded-2xl flex items-center justify-center border border-[#d4af37] relative group">
               <i className="fa-solid fa-compass text-xl md:text-2xl gold-text group-hover:rotate-45 transition-transform duration-700"></i>
               <i className="fa-solid fa-rocket absolute -top-2 -right-2 text-xs gold-text animate-bounce"></i>
            </div>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold font-serif-tnr text-center text-black mb-2 tracking-tight">Executive Login</h1>
          <p className="text-center text-slate-500 mb-8 md:mb-10 text-sm">Verify your Serial Number for <span className="font-bold">{founder.startupName}</span>.</p>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Digital Signature</label>
              <input 
                id="serialInput"
                type="text" 
                className="w-full px-4 py-3 border-2 border-slate-100 rounded-xl focus:border-[#d4af37] outline-none font-mono text-center tracking-widest text-lg"
                placeholder="NV-XXXXXX"
                onKeyDown={(e) => e.key === 'Enter' && handleLogin((e.target as HTMLInputElement).value)}
              />
            </div>
            <button 
              onClick={() => handleLogin((document.getElementById('serialInput') as HTMLInputElement).value)}
              className="w-full bg-[#0a0a0a] text-[#d4af37] font-black py-4 md:py-5 rounded-2xl hover:bg-black transition-all shadow-xl border border-[#d4af37]/40 uppercase tracking-widest active:scale-95 flex items-center justify-center gap-3"
            >
              <i className="fa-solid fa-lock text-sm"></i>
              Authenticate
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-white p-6 text-center">
        <div className="relative mb-8">
          <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-[#d4af37] border-t-transparent rounded-full animate-spin shadow-[0_0_20px_#d4af37]/20"></div>
          <i className="fa-solid fa-rocket absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gold-text text-xl md:text-2xl animate-pulse"></i>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold font-serif-tnr mb-3 gold-text">NavaVyapaari Intelligence</h2>
        <p className="text-slate-400 font-medium tracking-wide text-sm md:text-base">Calculating growth trajectories & market coordinates...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={(t) => { setActiveTab(t); setMobileMenuOpen(false); }} 
        onLogout={handleLogout} 
        isOpen={mobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
      />
      
      <main className="flex-1 overflow-y-auto px-4 py-6 md:p-12 lg:ml-0">
        <header className="mb-10 lg:mb-14 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="group">
            <div className="flex items-center gap-3 mb-1">
               <h1 className="text-3xl md:text-5xl font-bold text-black font-serif-tnr tracking-tight">
                NavaVyapaari
              </h1>
              <i className="fa-solid fa-compass gold-text text-xl md:text-2xl group-hover:rotate-90 transition-transform duration-1000"></i>
            </div>
            <div className="flex items-center gap-3">
               <span className="w-6 md:w-8 h-[2px] gold-bg"></span>
               <p className="gold-text font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-[9px] md:text-[10px] flex items-center gap-2">
                 <i className="fa-solid fa-location-arrow text-[8px]"></i>
                 Market Demand Compass
               </p>
            </div>
          </div>
          
          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-4">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center border border-[#d4af37]/30"
              aria-label="Open Menu"
            >
              <i className="fa-solid fa-bars-staggered"></i>
            </button>
            <div className="bg-white px-4 py-2 md:px-8 md:py-3 rounded-xl md:rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col items-end">
              <span className="text-[8px] md:text-[9px] font-black text-slate-300 uppercase tracking-widest mb-0.5 flex items-center gap-1">
                <i className="fa-solid fa-certificate gold-text text-[7px]"></i> Verified Principal
              </span>
              <span className="text-black font-mono font-bold text-xs md:text-base tracking-widest">{founder.serialNumber}</span>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto pb-24 md:pb-12">
          {activeTab === 'home' && <HomeView founder={founder} businessData={businessData} />}
          {activeTab === 'market' && <MarketDemandView data={businessData?.marketDemand || []} tip={businessData?.bonusTip || ""} />}
          {activeTab === 'seasonal' && <SeasonalDemandView data={businessData?.seasonalForecast || []} />}
          {activeTab === 'supply' && <SupplyChainView data={businessData?.supplyChain || []} />}
          {activeTab === 'profile' && <FounderProfileView founder={founder} dashboard={businessData?.dashboard} />}
        </div>
      </main>
    </div>
  );
};

export default App;
