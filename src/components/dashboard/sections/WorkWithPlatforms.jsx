import React from 'react'
import { TrendingUp } from 'lucide-react'

export default function WorkWithPlatforms() {
  return (
    <div className="bg-white rounded-2xl p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[13px] font-medium text-gray-800">Work with platforms</h3>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-[11px] text-[#E11D48] bg-pink-50 px-2 py-0.5 rounded-full">
            <TrendingUp className="w-3 h-3" />
            3
          </span>
          <span className="text-[13px] font-bold text-[#E11D48]">$156,841</span>
        </div>
      </div>
      
      {/* Platform Grid */}
      <div className="grid grid-cols-3 gap-x-4 gap-y-1 mb-3">
        {/* Dribbble */}
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center">
            <span className="text-[10px]">🏀</span>
          </div>
          <span className="text-[11px] text-gray-600">Dribbble</span>
        </div>
        
        {/* Instagram */}
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)'}}>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="white" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="3" fill="white"/>
              <circle cx="17" cy="7" r="1" fill="white"/>
            </svg>
          </div>
          <span className="text-[11px] text-gray-600">Instagram</span>
        </div>
        
        {/* Google */}
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
            <span className="text-[11px] font-bold text-[#4285F4]">G</span>
          </div>
          <span className="text-[11px] text-gray-600">Google</span>
        </div>
        
        {/* Stats Row */}
        <div></div>
        <div className="text-[11px]">
          <span className="text-gray-700 font-medium">28.1%</span>
          <span className="text-gray-400 ml-1">$44,072</span>
        </div>
        <div className="text-[11px]">
          <span className="text-gray-400 line-through">14.1%</span>
          <span className="text-gray-300 ml-1 line-through">$22,114</span>
        </div>
      </div>
      
      {/* Big Stats */}
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-[28px] font-bold text-gray-900">45.3%</span>
        <span className="text-[20px] font-bold text-gray-300">$71,048</span>
      </div>
      
      {/* Bottom Stats */}
      <div className="flex items-center gap-4 text-[11px]">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-gray-200"></div>
          <span className="text-gray-500">Other</span>
          <span className="text-gray-400">7.1%</span>
          <span className="text-gray-400">$11,135</span>
        </div>
        <div className="flex items-center gap-1">
          <span>👁️👁️</span>
          <span className="text-gray-400">5.4%</span>
          <span className="text-gray-400">$8,469</span>
        </div>
      </div>
    </div>
  )
}
