
import React, { useState } from 'react';
import { FounderProfile } from '../types';

interface Props {
  onRegister: (profile: FounderProfile) => void;
}

const RegistrationForm: React.FC<Props> = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    startupName: '',
    productCategory: '',
    location: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serialNumber = `NV-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    onRegister({
      ...formData,
      bio: '', // Set empty bio as it's removed from form
      serialNumber
    });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white overflow-x-hidden">
      {/* Branding Side */}
      <div className="w-full lg:w-5/12 bg-[#0a0a0a] p-8 md:p-16 flex flex-col justify-between text-white relative border-b lg:border-b-0 lg:border-r border-[#d4af37]/20 min-h-[400px] lg:min-h-screen">
        <div className="z-10">
          <div className="flex items-center gap-4 mb-10 md:mb-20">
            <div className="w-12 h-12 md:w-16 md:h-16 gold-bg rounded-xl md:rounded-[1.5rem] flex items-center justify-center shadow-lg border-2 md:border-4 border-black">
              <i className="fa-solid fa-compass text-2xl md:text-3xl text-black"></i>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold font-serif-tnr tracking-tighter gold-text">NavaVyapaari</h1>
          </div>
          <div className="space-y-6 md:space-y-10">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight font-serif-tnr italic gold-text">
              Excellence in <br className="hidden md:block"/>Market Strategy.
            </h2>
            <p className="text-slate-400 text-base md:text-xl max-w-sm leading-relaxed">
              Your tactical compass for navigating the global market with executive precision.
            </p>
          </div>
        </div>
        
        <div className="z-10 mt-10 lg:mt-0">
          <div className="flex items-center gap-4 p-4 md:p-6 bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 backdrop-blur-sm max-w-xs md:max-w-none">
            <div className="flex -space-x-2 md:-space-x-3">
              {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-[#0a0a0a] gold-bg flex items-center justify-center text-[8px] md:text-xs text-black font-black">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-[10px] md:text-sm text-slate-300 font-bold uppercase tracking-widest leading-none">Enterprise Intelligence Active</p>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#d4af37]/5 rounded-full blur-[80px] md:blur-[100px] -mr-32 -mt-32 md:-mr-64 md:-mt-64"></div>
      </div>

      {/* Form Side */}
      <div className="w-full lg:w-7/12 p-6 md:p-12 lg:p-24 flex flex-col justify-center bg-white">
        <div className="max-w-xl mx-auto w-full">
          <div className="mb-8 md:mb-14">
            <h3 className="text-[10px] font-black gold-text uppercase tracking-[0.4em] mb-2 md:mb-4">Strategic Onboarding</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-black font-serif-tnr">Founders Initiative</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Executive Name</label>
                <input
                  required
                  className="w-full px-5 py-3 md:py-5 bg-slate-50 border border-slate-200 rounded-2xl md:rounded-3xl focus:border-[#d4af37] outline-none transition font-medium"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g. Sterling Cross"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Startup Identity</label>
                <input
                  required
                  className="w-full px-5 py-3 md:py-5 bg-slate-50 border border-slate-200 rounded-2xl md:rounded-3xl focus:border-[#d4af37] outline-none transition font-medium"
                  value={formData.startupName}
                  onChange={(e) => setFormData({...formData, startupName: e.target.value})}
                  placeholder="e.g. Apex Global"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Industry Category</label>
              <input
                required
                className="w-full px-5 py-3 md:py-5 bg-slate-50 border border-slate-200 rounded-2xl md:rounded-3xl focus:border-[#d4af37] outline-none transition font-medium"
                value={formData.productCategory}
                onChange={(e) => setFormData({...formData, productCategory: e.target.value})}
                placeholder="e.g. AI-Logistics Systems"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Corporate Email</label>
              <input
                required
                type="email"
                className="w-full px-5 py-3 md:py-5 bg-slate-50 border border-slate-200 rounded-2xl md:rounded-3xl focus:border-[#d4af37] outline-none transition font-medium"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="founder@apex.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Primary Location</label>
              <input
                required
                className="w-full px-5 py-3 md:py-5 bg-slate-50 border border-slate-200 rounded-2xl md:rounded-3xl focus:border-[#d4af37] outline-none transition font-medium"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                placeholder="e.g. New York, USA"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0a0a0a] text-[#d4af37] font-black py-4 md:py-6 rounded-2xl md:rounded-3xl shadow-2xl hover:bg-black transition-all hover:-translate-y-1 active:scale-[0.98] text-base md:text-lg uppercase tracking-widest border border-[#d4af37]/30"
            >
              Initialize Intelligence
            </button>
            <p className="text-center text-[8px] md:text-[9px] text-slate-400 font-black uppercase tracking-[0.3em]">
              Secured via 256-bit encryption
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
