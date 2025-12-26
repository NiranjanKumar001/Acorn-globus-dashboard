import React from 'react'
import { ChevronRight } from 'lucide-react'

export default function TopSalesCard() {
  return (
    <div className="bg-white rounded-2xl px-5 py-4 min-w-[120px] border border-gray-200">
      {/* Label */}
      <p className="text-[12px] text-gray-400 mb-1.5">Top sales</p>
      
      {/* Value */}
      <p className="text-[28px] font-bold text-gray-900 mb-3">72</p>
      
      {/* User Row */}
      <button className="flex items-center gap-2 group">
        {/* Avatar */}
        <div className="w-5 h-5 rounded-full bg-[#10B981] flex items-center justify-center">
          <span className="text-[9px] font-bold text-white">M</span>
        </div>
        <span className="text-[12px] text-gray-500 group-hover:text-gray-700">Mikasa</span>
        <ChevronRight className="w-4 h-4 text-gray-400" />
      </button>
    </div>
  )
}
