
import React, { useState } from 'react';
import { FounderProfile, BusinessData } from '../types';

interface Props {
  founder: FounderProfile;
  businessData: BusinessData | null;
}

const HomeView: React.FC<Props> = ({ founder, businessData }) => {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="space-y-8 md:space-y-12 animate-slide-up px-1 md:px-0">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
        <div className="lg:col-span-8 p-6 md:p-12 bg-white rounded-[2rem] md:rounded-[3rem] shadow-sm border border-slate-100 flex flex-col justify-between relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 md:mb-8">
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full gold-bg animate-pulse"></span>
              <span className="text-[9px] md:text-[11px] font-black gold-text uppercase tracking-[0.3em] md:tracking-[0.4em] flex items-center gap-2">
                <i className="fa-solid fa-satellite"></i> Strategic Operations Engaged
              </span>
            </div>
            <h2 className="text-3xl md:text-6xl font-bold text-black font-serif-tnr mb-4 leading-tight">
              Ignite Growth, <br/><span className="gold-text italic">{founder.name.split(' ')[0]}</span>.
            </h2>
            <p className="text-slate-500 text-sm md:text-xl max-w-xl leading-relaxed">
              Propelling <span className="font-bold text-black border-b-2 border-[#d4af37]/30 pb-1">{founder.startupName}</span> into new market spheres. Your compass is locked onto the highest demand coordinates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 md:mt-16 relative z-10">
            {[
              { label: 'Domain', val: founder.productCategory, icon: 'fa-diamond', color: 'black' },
              { label: 'Targeting', val: businessData?.marketDemand[0]?.city || 'Syncing...', icon: 'fa-bullseye', color: 'gold' },
              { label: 'Trajectory', val: 'Aggressive', icon: 'fa-rocket', color: 'black' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-3 group/stat bg-slate-50 sm:bg-transparent p-4 sm:p-0 rounded-2xl hover:bg-white transition-all shadow-sm sm:shadow-none">
                <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl ${stat.color === 'gold' ? 'gold-bg text-black shadow-[#d4af37]/20' : 'bg-black text-[#d4af37] shadow-black/20'} flex items-center justify-center text-xs md:text-sm shadow-lg group-hover/stat:rotate-12 transition-transform`}>
                  <i className={`fa-solid ${stat.icon}`}></i>
                </div>
                <div>
                  <span className="text-[8px] md:text-[10px] font-black text-slate-300 uppercase tracking-widest block mb-0.5">{stat.label}</span>
                  <span className="text-black font-bold text-sm md:text-lg truncate block leading-none">{stat.val}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Background Decorative Symbol */}
          <i className="fa-solid fa-rocket absolute -bottom-10 -right-10 text-[12rem] text-slate-50 rotate-[320deg] group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-1000 z-0"></i>
        </div>

        <div className="lg:col-span-4 bg-[#0a0a0a] rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group border border-[#d4af37]/30 flex flex-col items-center text-center">
          <div className="relative z-10 w-full flex flex-col justify-between items-center h-full">
            <div className="mb-6">
              <i className="fa-solid fa-compass text-5xl gold-text opacity-70 mb-4 block group-hover:rotate-180 transition-transform duration-1000"></i>
              <h3 className="text-xl font-bold font-serif-tnr gold-text">Strategic Access</h3>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">Founders Ledger ID</p>
            </div>
            
            <button 
              onClick={() => setShowProducts(!showProducts)}
              className="w-full bg-white/5 backdrop-blur-xl p-6 rounded-[1.5rem] md:rounded-[2rem] border border-[#d4af37]/30 hover:bg-[#d4af37] hover:text-black transition-all duration-500 flex flex-col items-center gap-3 group/btn shadow-xl active:scale-95"
            >
              <span className="text-[9px] uppercase font-black tracking-widest opacity-60 flex items-center gap-2">
                <i className="fa-solid fa-key text-[8px]"></i> Authenticate Assets
              </span>
              <span className="text-2xl font-mono font-bold tracking-tighter group-hover/btn:tracking-widest transition-all duration-700">
                {founder.serialNumber}
              </span>
            </button>

            <div className="mt-6 flex items-center gap-2 text-[9px] font-black text-[#d4af37] uppercase tracking-widest">
              <i className="fa-solid fa-shield-halved text-[10px]"></i> Secured via Blockchain
            </div>
          </div>
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4af37]/5 rounded-full blur-[60px]"></div>
        </div>
      </div>

      {showProducts ? (
        <div className="animate-slide-up space-y-6 md:space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between px-2 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                <i className="fa-solid fa-boxes-stacked gold-text"></i>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-black font-serif-tnr leading-none">Market Assets</h3>
                <p className="text-slate-400 text-sm md:text-lg italic mt-1">Registered Product Entities</p>
              </div>
            </div>
            <span className="self-start text-[10px] md:text-[11px] font-black text-black gold-bg px-6 py-2.5 rounded-full shadow-lg uppercase tracking-widest flex items-center gap-2">
              <i className="fa-solid fa-tag"></i> {businessData?.products.length || 0} Catalog Units
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10">
            {businessData?.products.map((product, idx) => (
              <div key={idx} className="bg-white p-6 md:p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#d4af37]/50 transition-all group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0a0a0a] rounded-2xl flex items-center justify-center mb-6 group-hover:gold-bg transition-all duration-500 shadow-xl border border-[#d4af37]/20">
                  <i className="fa-solid fa-cube gold-text group-hover:text-black transition-colors text-lg"></i>
                </div>
                <h4 className="font-bold text-black text-lg md:text-xl mb-1 font-serif-tnr group-hover:gold-text transition-colors">{product}</h4>
                <p className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-tighter">SKU-{founder.serialNumber.split('-')[1]}-{idx+1}</p>
                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                   <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full gold-bg animate-pulse"></span>
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active Batch</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div 
          className="py-16 md:py-32 flex flex-col items-center justify-center border-2 border-dashed border-[#d4af37]/30 rounded-[2rem] md:rounded-[3.5rem] bg-slate-50/40 group hover:bg-white transition-all cursor-pointer" 
          onClick={() => setShowProducts(true)}
        >
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-2xl mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-700">
            <i className="fa-solid fa-eye-slash text-[#d4af37] text-3xl md:text-4xl"></i>
          </div>
          <p className="text-black font-black tracking-[0.3em] uppercase text-xs md:text-sm flex items-center gap-3">
             <i className="fa-solid fa-lock"></i> Corporate Vault Sealed
          </p>
          <p className="text-slate-400 text-[10px] md:text-xs mt-2 italic text-center px-4">Authenticate with serial signature above.</p>
        </div>
      )}
    </div>
  );
};

export default HomeView;
