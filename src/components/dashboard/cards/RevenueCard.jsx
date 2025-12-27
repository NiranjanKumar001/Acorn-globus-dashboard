import React from 'react'
import { ChevronDown, TrendingUp } from 'lucide-react'

export default function RevenueCard() {
  return (
    <div className="flex-shrink-0">
      {/* Revenue Label */}
      <p className="text-[14px] font-medium text-gray-800 mb-1 tracking-wider">Revenue</p>
      
      {/* Main Value Row */}
      <div className="flex items-center gap-3 mb-1">
        <div className="flex items-baseline">
          <span className="text-[36px] font-bold text-gray-900 tracking-tight">$528,976</span>
          <span className="text-[36px] font-bold text-gray-300">.82</span>
        </div>
        
        {/* Percentage Badge */}
        <span className="flex items-center gap-0.5 bg-[#D62C56] text-white text-[12px] font-semibold px-2 py-1 rounded-full">
          <TrendingUp className="w-3.5 h-3.5" />
          7.9%
        </span>
        
        {/* Green Amount */}
        <span className="text-[12px] font-semibold text-white bg-[#D62C56] px-2 py-1 rounded-full">$27,335.09</span>
      </div>
      
      {/* Comparison Text */}
      <button className="flex items-center gap-1 text-[13px] text-gray-700 hover:text-gray-600">
        <span>vs prev.</span>
        <span className="text-gray-800 font-medium">$501,641.73</span>
        <span className="text-gray-800">Jun 1 - Aug 31, 2023</span>
        <ChevronDown className="w-4 h-4 text-gray-800" />
      </button>
    </div>
  )
}
