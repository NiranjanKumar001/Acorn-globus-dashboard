import React from 'react'
import { TrendingUp } from 'lucide-react'

export default function WinRateCard() {
  return (
    <div className="px-5 py-4 min-w-[80px]">
      {/* Label */}
      <p className="text-[12px] text-gray-400 mb-1.5">Win rate</p>
      
      {/* Value */}
      <p className="text-[28px] font-bold text-gray-300 mb-2">44%</p>
      
      {/* Percentage */}
      <div className="flex items-center gap-1">
        <TrendingUp className="w-3.5 h-3.5 text-[#E11D48]" />
        <span className="text-[12px] font-medium text-[#E11D48]">1.2%</span>
      </div>
    </div>
  )
}
