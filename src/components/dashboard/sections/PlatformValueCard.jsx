import React from 'react'
import { ChevronDown } from 'lucide-react'

export default function PlatformValueCard() {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2 pl-3 pt-3">
        <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center">
          <svg className="w-6 h-6 text-[#EA4C89]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.5a10.18 10.18 0 012.312 6.375c-.337-.063-3.687-.75-7.062-.313-.063-.125-.125-.25-.188-.375-.187-.438-.375-.875-.625-1.313 3.75-1.5 5.375-3.687 5.563-4.375zM12 1.75c2.75 0 5.25 1.063 7.125 2.75-.125.625-1.562 2.625-5.125 4-1.563-2.875-3.313-5.25-3.563-5.562A10.3 10.3 0 0112 1.75zM8.5 3.625c.25.313 1.938 2.688 3.5 5.5-4.437 1.188-8.313 1.125-8.75 1.125.625-2.875 2.562-5.313 5.25-6.625zM1.75 12v-.313c.438.013 5 .063 9.75-1.375.25.5.5 1.063.75 1.563-.125.063-.313.063-.438.125-4.937 1.625-7.5 6-7.687 6.312A10.19 10.19 0 011.75 12zm10.25 10.25c-2.375 0-4.562-.812-6.312-2.187.125-.313 2.063-4.063 7.438-5.938l.063-.063c1.375 3.5 1.938 6.438 2.063 7.25a10.14 10.14 0 01-3.25.938zm5-1.688c-.125-.562-.625-3.375-1.875-6.812 3.187-.5 6 .375 6.375.5a10.22 10.22 0 01-4.5 6.313z"/>
          </svg>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-500">Platform value</span>
          <button className="flex items-center gap-1 text-[14px] font-semibold text-gray-800 hover:text-gray-600">
            Dribbble
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
      
      {/* Pink Stats Section - Expanded to fill */}
      <div className="bg-[#E11D48] rounded-tr-2xl rounded-bl-2xl p-3 flex-1 flex">
        {/* Vertical Text */}
        <div className="flex items-center mr-2">
          <span 
            className="text-[9px] text-pink-200 font-medium tracking-wider whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Average monthly
          </span>
        </div>
        
        {/* Stats */}
        <div className="flex flex-col justify-start gap-2 text-white flex-1">
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
            <p className="text-[8px] text-pink-200">Win/lose</p>
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
