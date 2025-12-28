
import React from 'react';
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Cell, BarChart, Bar } from 'recharts';
import { SeasonalData } from '../types';

interface Props {
  data: SeasonalData[];
}

const SeasonalDemandView: React.FC<Props> = ({ data }) => {
  const graphColors = ['#ef4444', '#facc15', '#22c55e', '#3b82f6'];

  return (
    <div className="animate-slide-up space-y-10 md:space-y-12 px-1 md:px-0">
      <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-14 shadow-sm border border-slate-100">
        <div className="mb-10 md:mb-14 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 md:gap-8">
          <div className="max-w-3xl">
            <h3 className="text-[10px] md:text-[11px] font-black gold-text uppercase tracking-[0.4em] md:tracking-[0.5em] mb-2 md:mb-4">Fiscal Forecasting</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-black font-serif-tnr leading-tight">Demand Velocity</h2>
            <p className="text-slate-500 mt-2 md:mt-4 text-base md:text-xl">Projected market absorption and growth percentages for the next 12 months.</p>
          </div>
          <div className="bg-[#0a0a0a] text-[#d4af37] px-6 py-3 rounded-2xl md:rounded-3xl border border-[#d4af37]/40 flex items-center gap-3 md:gap-4 shadow-xl self-start lg:self-auto">
             <i className="fa-solid fa-wave-square"></i>
             <span className="text-[10px] font-black uppercase tracking-widest leading-none">Fiscal Intelligence</span>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-10 md:gap-20">
          <div className="flex-1 h-[350px] md:h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 0, left: -25, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#0a0a0a', fontSize: 10, fontWeight: 800 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#cbd5e1', fontSize: 9, fontWeight: 700 }}
                  domain={[0, 100]}
                />
                <Tooltip 
                  cursor={{ fill: '#f8fafc' }}
                  contentStyle={{ 
                    borderRadius: '20px', 
                    border: '1px solid #d4af37',
                    backgroundColor: '#0a0a0a',
                    color: '#fff',
                    padding: '12px md:20px',
                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                    fontSize: '12px'
                  }}
                  itemStyle={{ color: '#d4af37', fontWeight: 800 }}
                  labelStyle={{ color: '#fff', marginBottom: '4px', fontSize: '12px', fontWeight: 600, fontFamily: 'serif' }}
                />
                <Bar dataKey="demand" radius={[8, 8, 0, 0]} barSize={30}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={graphColors[index % graphColors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="w-full xl:w-96 space-y-4">
            <h3 className="text-[10px] md:text-[11px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4 md:mb-8 flex items-center gap-4">
               <span className="w-10 md:w-12 h-[1px] gold-bg"></span> Momentum Ledger
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-2 xl:max-h-[420px] xl:overflow-y-auto xl:pr-4 scrollbar-hide">
              {data.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#d4af37]/40 hover:bg-white transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: graphColors[idx % graphColors.length] }}></div>
                    <span className="text-xs font-black text-black uppercase tracking-widest">{item.month}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-slate-400">{item.demand} Pts</span>
                    <span className={`text-[9px] font-black px-3 py-1.5 rounded-xl border ${
                      item.monthlyIncrease.startsWith('+') 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                        : 'bg-rose-50 text-rose-700 border-rose-100'
                    }`}>
                      {item.monthlyIncrease}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalDemandView;
