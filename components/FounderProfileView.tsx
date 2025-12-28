
import React from 'react';
import { FounderProfile, BusinessData } from '../types';

interface Props {
  founder: FounderProfile;
  dashboard?: BusinessData['dashboard'];
}

const FounderProfileView: React.FC<Props> = ({ founder, dashboard }) => {
  return (
    <div className="animate-slide-up space-y-8 md:space-y-10 px-1 md:px-0">
      {/* Metrics Row - Responsive Grid */}
      {dashboard && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { label: 'Revenue Velocity', val: dashboard.sales, icon: 'fa-money-bill-trend-up', color: '#d4af37', desc: 'Net Capital Accrual' },
            { label: 'Market Orbit', val: dashboard.marketPercentage, icon: 'fa-globe-americas', color: '#000000', desc: 'Industry Domination' },
            { label: 'Scale Factor', val: dashboard.productionRate, icon: 'fa-rocket', color: '#d4af37', desc: 'Units / Fiscal Month' }
          ].map((m, i) => (
            <div key={i} className="bg-white p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#d4af37]/30 transition-all group">
              <div className="flex justify-between items-start mb-8 md:mb-10">
                <div className={`w-12 h-12 md:w-14 md:h-14 ${i === 1 ? 'bg-black text-[#d4af37]' : 'gold-bg text-black'} rounded-xl md:rounded-[1.2rem] flex items-center justify-center text-lg md:text-xl shadow-xl transition-transform group-hover:rotate-12`}>
                  <i className={`fa-solid ${m.icon}`}></i>
                </div>
                <div className="text-right">
                   <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1 block">Status: Optimal</span>
                   <div className="flex gap-1 justify-end">
                      <div className="w-1.5 h-1.5 rounded-full gold-bg"></div>
                      <div className="w-1.5 h-1.5 rounded-full gold-bg"></div>
                      <div className="w-1.5 h-1.5 rounded-full gold-bg"></div>
                   </div>
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-black tracking-tight font-serif-tnr group-hover:gold-text transition-colors leading-none">{m.val}</h3>
              <p className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-[0.2em]">{m.label}</p>
              <p className="text-[9px] text-slate-400 mt-0.5 italic">{m.desc}</p>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
        <div className="lg:col-span-7 bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden group">
          <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-12 mb-10 md:mb-12 pb-10 md:pb-12 border-b border-slate-50 relative z-10">
            <div className="relative group shrink-0">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-[2rem] md:rounded-[2.5rem] bg-[#0a0a0a] flex items-center justify-center text-[#d4af37] text-4xl md:text-6xl font-serif-tnr font-bold shadow-2xl transition-transform duration-700 border border-[#d4af37]/20">
                {founder.name.charAt(0)}
              </div>
              <div className="absolute -bottom-2 -right-2 gold-bg border-4 border-white w-10 h-10 rounded-xl flex items-center justify-center shadow-xl">
                 <i className="fa-solid fa-crown text-black text-[10px]"></i>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-3xl md:text-5xl font-bold font-serif-tnr text-black">{founder.name}</h2>
              <p className="gold-text font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[9px] mt-2 md:mt-3 flex items-center justify-center sm:justify-start gap-2">
                <i className="fa-solid fa-id-badge"></i> Chief Executive Officer
              </p>
              <div className="flex flex-wrap gap-3 mt-6 justify-center sm:justify-start">
                <span className="px-4 py-2 bg-black text-[#d4af37] rounded-xl text-[10px] font-bold shadow-md flex items-center gap-2">
                   <i className="fa-solid fa-envelope-open-text text-[8px]"></i> {founder.email}
                </span>
                <span className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-[10px] font-bold flex items-center gap-2">
                   <i className="fa-solid fa-building gold-text text-[8px]"></i> {founder.startupName}
                </span>
              </div>
            </div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em] mb-6 md:mb-8 flex items-center gap-4">
               <span className="w-10 md:w-16 h-[1px] bg-[#d4af37]"></span> Strategic Vision
            </h3>
            <p className="text-black text-lg md:text-2xl leading-relaxed italic font-serif-tnr opacity-90 first-letter:text-5xl md:first-letter:text-7xl first-letter:font-bold first-letter:gold-text first-letter:mr-3 first-letter:float-left">
              {founder.bio || 'Architecting a global footprint through data-centric decision making. Every directive is a calculated step toward market peak.'}
            </p>
          </div>

          <i className="fa-solid fa-briefcase absolute -bottom-8 -right-8 text-9xl text-slate-50 rotate-12 z-0 opacity-40 group-hover:text-slate-100 transition-colors"></i>
        </div>

        <div className="lg:col-span-5 bg-[#0a0a0a] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl flex flex-col justify-between border border-[#d4af37]/20 min-h-[400px] relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="text-[10px] font-black gold-text uppercase tracking-[0.4em] mb-10 flex items-center gap-4">
               <i className="fa-solid fa-lightbulb text-[10px]"></i> Corporate Road Map
            </h3>
            <div className="space-y-8 md:space-y-10">
              {dashboard?.nextActions.map((action, idx) => (
                <div key={idx} className="flex gap-6 md:gap-8 group/item">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#d4af37] flex items-center justify-center text-black font-black shrink-0 shadow-lg group-hover/item:scale-110 transition-transform">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black gold-text uppercase tracking-widest mb-1 flex items-center gap-2">
                       Protocol {idx+1} <i className="fa-solid fa-chevron-right text-[7px]"></i>
                    </h4>
                    <p className="text-sm md:text-lg text-white/90 leading-tight font-medium">{action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 md:mt-16 relative z-10">
            <button className="w-full py-5 md:py-6 gold-bg text-black text-lg md:text-xl font-bold rounded-[1.5rem] md:rounded-[2rem] hover:opacity-90 transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-3">
              <i className="fa-solid fa-paper-plane text-sm"></i>
              Execute Initiatives
            </button>
            <div className="flex items-center justify-center gap-3 mt-6 md:mt-8 opacity-30">
               <span className="h-px w-6 bg-white/20"></span>
               <span className="text-[8px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                 <i className="fa-solid fa-compass text-[7px]"></i> Report Active
               </span>
               <span className="h-px w-6 bg-white/20"></span>
            </div>
          </div>

          {/* Decorative Radar background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full animate-ping z-0 pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default FounderProfileView;
