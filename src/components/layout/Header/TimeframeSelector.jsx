import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function TimeframeSelector() {
  const [isEnabled, setIsEnabled] = useState(true)
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      {/* Toggle Switch */}
      <div className="flex items-center gap-1 sm:gap-2">
        <button
          onClick={() => setIsEnabled(!isEnabled)}
          className={`relative w-8 h-4 sm:w-11 sm:h-6 rounded-full transition-colors ${
            isEnabled ? 'bg-[#111827]' : 'bg-gray-300'
          }`}
        >
          <div
            className={`absolute top-[2px] sm:top-[3px] w-[12px] h-[12px] sm:w-[18px] sm:h-[18px] bg-white rounded-full transition-all duration-200 shadow-sm ${
              isEnabled ? 'left-[14px] sm:left-[22px]' : 'left-[2px] sm:left-[3px]'
            }`}
          />
        </button>
        {/* Timeframe Label */}
        <span className="text-xs sm:text-[13px] text-[#6B7280]">Timeframe</span>
      </div>
      {/* Date Range Dropdown */}
      <button className="flex items-center gap-1 sm:gap-2 px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-200 border border-[#E5E7EB] rounded-full text-[10px] sm:text-xs font-medium text-[#374151] hover:border-gray-300 transition-colors whitespace-nowrap">
        <span className="whitespace-nowrap">Sep 1 - Nov 30, 2023</span>
        <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-400" strokeWidth={2} />
      </button>
    </div>
  )
}
