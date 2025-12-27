import React from 'react'
import { ChevronRight, Star } from 'lucide-react'

export default function BestDealCard() {
  return (
    <div className="bg-[#1F2937] rounded-2xl px-4 py-2 min-w-[190px] border border-gray-400" style={{ boxShadow: '0 10px 4px -2px rgba(0, 0, 0, 0.3), 0 -10px 4px -2px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(0, 0, 0, 0.18)' }}>
      {/* Label Row */}
      <div className="flex items-center justify-between mb-1">
        <p className="text-[12px] text-gray-400">Best deal</p>
        <Star className="w-4 h-4 text-gray-500" strokeWidth={1.5} />
      </div>
      
      {/* Value */}
      <p className="text-[18px] font-bold text-white mb-1">$42,300</p>
      
      {/* Company Row */}
      <div className="flex items-center justify-between">
        <span className="text-[12px] text-gray-400">Rolf Inc.</span>
        <button className="w-7 h-7 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
          <ChevronRight className="w-4 h-4 text-gray-800" />
        </button>
      </div>
    </div>
  )
}
