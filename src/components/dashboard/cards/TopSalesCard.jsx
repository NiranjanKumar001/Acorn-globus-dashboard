import React from 'react'
import { ChevronRight } from 'lucide-react'

import { useEffect, useState } from 'react'
export default function TopSalesCard() {
  const [shadow, setShadow] = useState('0 10px 4px -2px rgba(0, 0, 0, 0.2), 0 -10px 4px -2px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(0, 0, 0, 0.12)');
  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      if (w < 1024) setShadow(undefined); // no shadow for mobile and tablet
      else setShadow('0 10px 4px -2px rgba(0, 0, 0, 0.2), 0 -10px 4px -2px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(0, 0, 0, 0.12)');
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return (
    <div className="bg-white rounded-2xl px-4 py-2 min-w-[180px] border border-gray-400" style={shadow ? { boxShadow: shadow } : {}}>
      {/* Label */}
      <p className="text-[12px] text-gray-400 mb-1">Top sales</p>
      
      {/* Value */}
      <p className="text-[18px] font-bold text-gray-900 mb-1">72</p>
      
      {/* User Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          {/* Avatar */}
          <div className="w-5 h-5 rounded-full overflow-hidden">
            <img src="/Mikasa.png" alt="Mikasa" className="w-full h-full object-cover" />
          </div>
          <span className="text-[12px] text-gray-500 group-hover:text-gray-700">Mikasa</span>
        </div>
        <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
          <ChevronRight className="w-4 h-4 text-gray-800" />
        </button>
      </div>
    </div>
  )
}
