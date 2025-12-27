import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function TimeframeSelector() {
  const [isEnabled, setIsEnabled] = useState(true)
  
  return (
    <div className="flex items-center gap-4">
      {/* Toggle Switch */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsEnabled(!isEnabled)}
          className={`relative w-11 h-6 rounded-full transition-colors ${
            isEnabled ? 'bg-[#111827]' : 'bg-gray-300'
          }`}
        >
          <div
            className={`absolute top-[3px] w-[18px] h-[18px] bg-white rounded-full transition-all duration-200 shadow-sm ${
              isEnabled ? 'left-[22px]' : 'left-[3px]'
            }`}
          />
        </button>
        
        {/* Timeframe Label */}
        <span className="text-[13px] text-[#6B7280]">Timeframe</span>
      </div>
      
      {/* Date Range Dropdown */}
      <button className="flex items-center gap-2 px-3 py-1 bg-gray-200 border border-[#E5E7EB] rounded-full text-xs font-medium text-[#374151] hover:border-gray-300 transition-colors">
        <span>Sep 1 - Nov 30, 2023</span>
        <ChevronDown className="w-3.5 h-3.5 text-gray-400" strokeWidth={2} />
      </button>
    </div>
  )
}
