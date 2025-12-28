
import React from 'react';
import { SupplyPartner } from '../types';

interface Props {
  data: SupplyPartner[];
}

const SupplyChainView: React.FC<Props> = ({ data }) => {
  return (
    <div className="animate-slide-up space-y-10 md:space-y-12 px-1 md:px-0">
      <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-sm border border-slate-100">
        <div className="mb-10 md:mb-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="max-w-xl">
            <h3 className="text-[10px] font-black gold-text uppercase tracking-[0.4em] mb-2 md:mb-4">Logistics Management</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-black font-serif-tnr leading-tight">Authorized Network</h2>
            <p className="text-slate-500 mt-2 md:mt-4 text-base md:text-xl">Vetted wholesale and retail anchors secured for your enterprise scaling.</p>
          </div>
          <div className="px-6 py-3 bg-[#0a0a0a] text-[#d4af37] rounded-2xl text-[10px] font-black tracking-widest uppercase flex items-center gap-3 shadow-xl border border-[#d4af37]/20 self-start md:self-auto">
             <i className="fa-solid fa-handshake-simple"></i>
             Exclusive Partners
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {data.map((partner, idx) => (
            <div key={idx} className="group p-6 md:p-10 rounded-[2rem] bg-white border border-slate-100 hover:border-[#d4af37] transition-all hover:shadow-xl hover:-translate-y-1 duration-500">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-6 md:mb-10 gap-6">
                <div className="flex gap-4 md:gap-8 items-center">
                  <div className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center text-xl md:text-3xl shadow-xl ${
                    partner.type === 'Wholesaler' ? 'bg-black text-[#d4af37]' : 'gold-bg text-black'
                  }`}>
                    <i className={`fa-solid ${partner.type === 'Wholesaler' ? 'fa-building-columns' : 'fa-store'}`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-black group-hover:gold-text transition-colors duration-300 font-serif-tnr truncate max-w-[150px] md:max-w-none">{partner.name}</h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mt-1 md:mt-2">
                       <span className="text-[10px] md:text-xs text-slate-400 font-bold"><i className="fa-solid fa-location-dot mr-2 gold-text"></i> {partner.location}</span>
                       <span className="text-[9px] md:text-[10px] font-mono gold-text font-black uppercase tracking-widest">{partner.contact}</span>
                    </div>
                  </div>
                </div>
                <span className={`text-[8px] md:text-[9px] font-black px-4 py-1.5 rounded-full tracking-widest uppercase border-2 self-start ${
                  partner.type === 'Wholesaler' ? 'bg-black text-white border-black' : 'bg-white text-black border-black'
                }`}>
                  {partner.type}
                </span>
              </div>
              
              <div className="bg-slate-50 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-500">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <div className="w-7 h-7 rounded-lg gold-bg text-black flex items-center justify-center text-[10px] shadow-lg">
                    <i className="fa-solid fa-award"></i>
                  </div>
                  <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-[#d4af37]">Performance Index</span>
                </div>
                <p className="text-sm md:text-base text-slate-700 group-hover:text-slate-300 leading-relaxed font-medium italic">
                  "{partner.marketValueStat}"
                </p>
              </div>

              <div className="mt-8 md:mt-10 flex justify-end">
                <button className="flex items-center gap-3 text-[10px] md:text-xs font-black text-black group-hover:gold-text transition-all uppercase tracking-widest group-hover:gap-5">
                  Secure Allocation
                  <i className="fa-solid fa-arrow-right-long text-[#d4af37]"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupplyChainView;
