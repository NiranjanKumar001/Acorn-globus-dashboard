import React from 'react'
import { ChevronDown } from 'lucide-react'

export default function PlatformValueCard() {
  return (
    <div className="bg-[#F5F5F5] rounded-2xl p-4 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-full bg-pink-50 flex items-center justify-center">
          <svg className="w-4 h-4 text-[#EA4C89]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.5a10.18 10.18 0 012.312 6.375c-.337-.063-3.687-.75-7.062-.313-.063-.125-.125-.25-.188-.375-.187-.438-.375-.875-.625-1.313 3.75-1.5 5.375-3.687 5.563-4.375zM12 1.75c2.75 0 5.25 1.063 7.125 2.75-.125.625-1.562 2.625-5.125 4-1.563-2.875-3.313-5.25-3.563-5.562A10.3 10.3 0 0112 1.75z"/>
          </svg>
        </div>
        <span className="text-[11px] text-gray-500">Platform value</span>
      </div>
      
      {/* Dropdown */}
      <button className="flex items-center gap-1 text-[14px] font-semibold text-gray-800 hover:text-gray-600 mb-3">
        Dribbble
        <ChevronDown className="w-3.5 h-3.5" />
      </button>
      
      {/* Pink Stats Section */}
      <div className="bg-[#E11D48] rounded-xl p-3 flex flex-1">
        {/* Vertical Text */}
        <div className="flex items-center mr-3">
          <span 
            className="text-[9px] text-pink-200 font-medium tracking-wider whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Average monthly
          </span>
        </div>
        
        {/* Stats */}
        <div className="flex flex-col justify-between text-white flex-1">
          {/* Revenue */}
          <div>
            <p className="text-[10px] text-pink-200">Revenue</p>
            <p className="text-[18px] font-bold">$18,552</p>
          </div>
          
          {/* Leads */}
          <div>
            <p className="text-[10px] text-pink-200">Leads</p>
            <div className="flex items-baseline gap-1">
              <span className="text-[16px] font-bold">373</span>
              <span className="text-[9px] text-pink-200">97/276</span>
            </div>
          </div>
          
          {/* Win/lose */}
          <div>
            <p className="text-[10px] text-pink-200">Win/lose</p>
            <div className="flex items-baseline gap-1">
              <span className="text-[16px] font-bold">16%</span>
              <span className="text-[9px] text-pink-200">51/318</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
