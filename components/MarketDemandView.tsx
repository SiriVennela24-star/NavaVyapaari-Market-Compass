
import React from 'react';
import { MarketDemand } from '../types';

interface Props {
  data: MarketDemand[];
  tip: string;
}

const MarketDemandView: React.FC<Props> = ({ data, tip }) => {
  const sortedData = [...data].sort((a, b) => b.score - a.score).slice(0, 15);

  return (
    <div className="space-y-10 md:space-y-12 animate-slide-up px-1 md:px-0">
      <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-sm border border-slate-100">
        <div className="mb-10 md:mb-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-xl">
            <h3 className="text-[10px] font-black gold-text uppercase tracking-[0.4em] mb-3 md:mb-4">Strategic Mapping</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-black font-serif-tnr leading-tight">Demand Hierarchy</h2>
            <p className="text-slate-500 mt-2 md:mt-4 text-base md:text-xl">Ranking the top 15 high-performing geographic markets.</p>
          </div>
          <div className="flex items-center gap-3 bg-black text-[#d4af37] px-6 py-3 md:px-8 md:py-4 rounded-2xl md:rounded-3xl border border-[#d4af37]/20 shadow-xl self-start md:self-auto">
             <i className="fa-solid fa-satellite text-sm md:text-lg"></i>
             <span className="text-[10px] font-black uppercase tracking-widest leading-none">Global Scan v2.5</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-2 md:gap-y-6">
          {sortedData.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between group py-4 md:py-6 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-all px-4 md:px-6 rounded-2xl -mx-4 md:-mx-6">
              <div className="flex items-center gap-4 md:gap-8">
                <div className="relative shrink-0">
                  <span className="text-2xl md:text-4xl font-serif-tnr font-black text-slate-100 group-hover:gold-text transition-colors duration-500 select-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-bold text-black text-base md:text-xl group-hover:gold-text transition-colors truncate">{item.city}</h4>
                  <p className="text-[10px] md:text-xs text-slate-400 font-medium italic mt-0.5 truncate md:whitespace-normal">"{item.reason}"</p>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-6 shrink-0">
                <div className="text-right hidden sm:block">
                  <div className="w-20 lg:w-32 h-2 bg-slate-100 rounded-full overflow-hidden mb-1 shadow-inner">
                    <div className="h-full gold-bg transition-all duration-1000 shadow-[0_0_8px_#d4af37]" style={{ width: `${item.score}%` }}></div>
                  </div>
                  <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Impact Factor</span>
                </div>
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-black flex flex-col items-center justify-center border border-[#d4af37]/30 group-hover:gold-bg group-hover:scale-105 transition-all shadow-lg">
                  <span className="text-lg md:text-2xl font-black gold-text group-hover:text-black leading-none">{item.score}</span>
                  <span className="text-[8px] font-black gold-text group-hover:text-black uppercase mt-1">IDX</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#0a0a0a] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl flex flex-col sm:flex-row items-center gap-8 md:gap-14 group border border-[#d4af37]/30">
        <div className="w-20 h-20 md:w-28 md:h-28 gold-bg rounded-2xl md:rounded-[2.5rem] flex items-center justify-center shrink-0 shadow-xl group-hover:rotate-6 transition-all duration-700 border-4 border-black">
          <i className="fa-solid fa-trophy text-2xl md:text-4xl text-black"></i>
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-[10px] font-black gold-text uppercase tracking-[0.4em] mb-2 md:mb-4">Expansion Protocol</h3>
          <p className="text-[#d4af37] text-lg md:text-2xl leading-relaxed italic opacity-90 font-serif-tnr font-bold">
            "{tip}"
          </p>
          <div className="mt-6 md:mt-10 flex flex-wrap items-center gap-3 md:gap-6 justify-center sm:justify-start">
            <span className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest bg-white/5 px-4 py-1.5 md:px-5 md:py-2 rounded-lg md:rounded-xl border border-white/10">Priority expansion</span>
            <span className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest bg-white/5 px-4 py-1.5 md:px-5 md:py-2 rounded-lg md:rounded-xl border border-white/10">High performance</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#d4af37]/5 rounded-full blur-[100px] opacity-40"></div>
      </div>
    </div>
  );
};

export default MarketDemandView;
