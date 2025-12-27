import React from 'react'
import { TrendingUp } from 'lucide-react'

export default function WinRateCard() {
  return (
    <div className="px-4 py-2 min-w-[70px] text-center border-2 border-gray-300 rounded-2xl bg-white">
      {/* Label */}
      <p className="text-[12px] text-gray-500 mb-1.5 font-medium">Win rate</p>
      
      {/* Value in pill */}
      <div className="flex justify-center mb-1.5">
        <div className="inline-block px-2 py-0.5 bg-gray-200 rounded-full">
          <p className="text-[16px] font-bold text-gray-800">44%</p>
        </div>
      </div>
      
      {/* Percentage */}
      <div className="flex items-center gap-1">
        <TrendingUp className="w-3 h-3 text-gray-800" strokeWidth={2.5} />
        <span className="text-[13px] font-semibold text-gray-800">1.2%</span>
      </div>
    </div>
  )
}
