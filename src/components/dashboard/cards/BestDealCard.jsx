import React from 'react'
import { ChevronRight, Star } from 'lucide-react'

export default function BestDealCard() {
  return (
    <div className="bg-[#1F2937] rounded-2xl px-5 py-4 min-w-[140px]">
      {/* Label Row */}
      <div className="flex items-center justify-between mb-1.5">
        <p className="text-[12px] text-gray-400">Best deal</p>
        <Star className="w-4 h-4 text-gray-500" strokeWidth={1.5} />
      </div>
      
      {/* Value */}
      <p className="text-[28px] font-bold text-white mb-3">$42,300</p>
      
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
