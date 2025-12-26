import React from 'react'

export default function BottomUserRow() {
  return (
    <div className="bg-white rounded-2xl px-5 py-3">
      <div className="flex items-center">
        {/* Avatar & Name */}
        <div className="flex items-center gap-2.5 min-w-[120px]">
          <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center">
            <span className="text-[11px] font-bold text-white">M</span>
          </div>
          <span className="text-[13px] font-medium text-gray-800">Eren Y.</span>
        </div>
        
        {/* Revenue */}
        <span className="text-[13px] font-semibold text-gray-800 min-w-[90px]">$117,115</span>
        
        {/* Sales Box */}
        <span className="w-8 h-8 rounded-lg bg-[#1F2937] text-white text-[12px] font-semibold flex items-center justify-center mr-4">
          22
        </span>
        
        {/* Other stats */}
        <span className="text-[13px] text-gray-600 min-w-[50px]">84</span>
        <span className="text-[13px] text-gray-600 min-w-[50px]">0.79</span>
        <span className="text-[13px] text-gray-600 min-w-[50px]">32%</span>
        
        {/* W/L */}
        <div className="flex items-center gap-1 ml-4">
          <span className="w-7 h-7 rounded-lg bg-[#1F2937] text-white text-[11px] font-semibold flex items-center justify-center">
            7
          </span>
          <span className="w-7 h-7 rounded-lg bg-gray-100 text-gray-600 text-[11px] font-semibold flex items-center justify-center">
            15
          </span>
        </div>
      </div>
    </div>
  )
}
