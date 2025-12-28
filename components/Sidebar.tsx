
import React from 'react';

interface Props {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<Props> = ({ activeTab, setActiveTab, onLogout, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: 'home', icon: 'fa-rocket', label: 'Launch Pad' },
    { id: 'market', icon: 'fa-bullseye', label: 'Targeting' },
    { id: 'seasonal', icon: 'fa-chart-pie', label: 'Forecasting' },
    { id: 'supply', icon: 'fa-briefcase', label: 'Portfolio' },
    { id: 'profile', icon: 'fa-user-tie', label: 'Executive' },
  ];

  const NavContent = () => (
    <>
      <div className="p-8 md:p-10 border-b border-white/5 flex items-center justify-between lg:block">
        <div className="flex items-center gap-4 mb-0 lg:mb-3 group cursor-pointer">
          <div className="w-10 h-10 md:w-12 md:h-12 gold-bg rounded-xl md:rounded-2xl flex items-center justify-center text-xl shadow-2xl shadow-[#d4af37]/20 border border-white/10 group-hover:scale-110 transition-transform">
            <i className="fa-solid fa-compass text-black group-hover:rotate-180 transition-transform duration-1000"></i>
          </div>
          <div>
             <h1 className="text-xl md:text-2xl font-bold font-serif-tnr tracking-tighter leading-none gold-text">NavaVyapaari</h1>
             <p className="text-[8px] text-slate-400 font-black uppercase tracking-[0.3em] mt-1 flex items-center gap-1">
               <i className="fa-solid fa-bolt text-[7px] gold-text"></i> Elite Network
             </p>
          </div>
        </div>
        <button onClick={() => setIsOpen(false)} className="lg:hidden text-slate-400 p-2">
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>
      </div>

      <nav className="flex-1 px-4 lg:px-6 py-8 space-y-2 lg:space-y-3">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 lg:gap-5 px-5 lg:px-6 py-3.5 lg:py-4 rounded-xl lg:rounded-2xl transition-all group relative overflow-hidden ${
              activeTab === item.id
                ? 'gold-bg text-black shadow-xl'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <i className={`fa-solid ${item.icon} w-5 text-base transition-transform group-hover:scale-125 ${activeTab === item.id ? 'text-black' : 'text-slate-500 group-hover:text-white'}`}></i>
            <span className="font-bold text-sm tracking-wide">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-6 lg:p-8 border-t border-white/5">
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-5 px-6 py-4 rounded-xl text-slate-500 hover:text-rose-500 hover:bg-rose-500/5 transition-all group"
        >
          <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-all">
             <i className="fa-solid fa-power-off text-sm"></i>
          </div>
          <span className="font-bold text-sm tracking-wide">Secure Exit</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-80 bg-[#0a0a0a] text-white flex-col h-screen sticky top-0 overflow-y-auto border-r border-[#d4af37]/20 shadow-2xl">
        <NavContent />
      </aside>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
        <aside className={`absolute left-0 top-0 bottom-0 w-72 bg-[#0a0a0a] text-white flex flex-col transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full shadow-2xl'}`}>
          <NavContent />
        </aside>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 h-16 bg-[#0a0a0a]/90 backdrop-blur-md rounded-2xl border border-[#d4af37]/30 shadow-2xl z-[90] flex items-center justify-around px-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all ${
              activeTab === item.id ? 'gold-bg text-black scale-110 shadow-lg' : 'text-slate-500'
            }`}
          >
            <i className={`fa-solid ${item.icon} text-sm`}></i>
            <span className="text-[7px] font-black uppercase tracking-tighter mt-1">{item.label.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
