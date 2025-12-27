/* eslint-disable no-unused-vars */
import React from 'react'
import { TrendingUp } from 'lucide-react'

export default function ValueCard({ isSelected = true }) {
  return (
    <div className="rounded-2xl text-center px-4 py-2 min-w-[70px] border-2 border-[#E11D48] bg-white">
      {/* Label */}
      <p className="text-[12px] text-gray-800 mb-1.5 font-medium">Value</p>
      
      {/* Value in pink pill */}
      <div className="flex justify-center mb-1.5">
        <div className="inline-block px-2 py-0.5 bg-[#E11D48] rounded-full">
          <p className="text-[14px] font-bold text-white">528k</p>
        </div>
      </div>
      
      {/* Percentage */}
      <div className="flex items-center gap-1">
        <TrendingUp className="w-3 h-3 text-gray-800" strokeWidth={2.5} />
        <span className="text-[13px] font-semibold text-gray-800">7.9%</span>
      </div>
    </div>
  )
}
