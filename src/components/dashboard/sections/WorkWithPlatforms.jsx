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
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
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
