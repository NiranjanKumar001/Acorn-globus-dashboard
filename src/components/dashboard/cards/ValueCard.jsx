import React from 'react'
import { TrendingUp } from 'lucide-react'

export default function ValueCard({ isSelected = true }) {
  return (
    <div className={`rounded-2xl px-5 py-4 min-w-[90px] ${
      isSelected 
        ? 'bg-[#E11D48]' 
        : 'bg-white shadow-sm'
    }`}>
      {/* Label */}
      <p className={`text-[12px] mb-1.5 ${isSelected ? 'text-rose-200' : 'text-gray-400'}`}>Value</p>
      
      {/* Value */}
      <p className={`text-[28px] font-bold mb-2 ${
        isSelected ? 'text-white' : 'text-gray-900'
      }`}>528k</p>
      
      {/* Percentage */}
      <div className="flex items-center gap-1">
        <TrendingUp className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-green-500'}`} />
        <span className={`text-[12px] font-medium ${isSelected ? 'text-white' : 'text-green-500'}`}>7.9%</span>
      </div>
    </div>
  )
}
