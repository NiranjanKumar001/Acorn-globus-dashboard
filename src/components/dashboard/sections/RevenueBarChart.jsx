/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const barData = [
  { 
    month: 'Sep', 
    value: 6901, 
    bars: [
      { height: 45, avatarImg: '/Armin.png' },
      { height: 30, avatarImg: '/Mikasa.png', border: true },
      { height: 22, avatarImg: '/Eren.png' }
    ]
  },
  { 
    month: 'Oct', 
    value: 11035, 
    bars: [
      { height: 55, avatarImg: '/Armin.png' },
      { height: 65, avatarImg: '/Mikasa.png', border: true },
      { height: 42, avatarImg: '/Eren.png' }
    ]
  },
  { 
    month: 'Nov', 
    value: 9288, 
    bars: [
      { height: 42, avatarImg: '/Armin.png' },
      { height: 58, avatarImg: '/Mikasa.png', border: true },
      { height: 30, avatarImg: '/Eren.png' }
    ]
  },
]

const tabs = ['Revenue', 'Leads', 'W/L']

export default function RevenueBarChart() {
  const [activeTab, setActiveTab] = useState(0)
  
  return (
    <div className="bg-transparent rounded-2xl p-1.5 h-full">
      {/* Tabs at top right */}
      <div className="flex justify-end mb-1">
        <div className="flex items-center gap-1 bg-gray-100 rounded-full p-0.5">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`px-3 py-1 rounded-full text-[10px] font-medium transition-colors ${
                index === activeTab
                  ? 'bg-[#1F2937] text-white'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      {/* Chart Container */}
      <div className="flex">
        {/* Chart Area */}
        <div className="flex-1 flex flex-col mt-10">
          {/* Bars Area */}
          <div className="flex items-end justify-around px-2 pb-2">
            {barData.map((group) => (
              <div key={group.month} className="flex flex-col items-center">
                {/* Value Label */}
                <div className="text-[9px] font-semibold px-2 py-0.5 rounded-lg mb-1 bg-[#E11D48] text-white">
                  ${group.value.toLocaleString()}
                </div>
                
                {/* Bar Group with individual avatars */}
                <div className="flex items-end gap-0 sm:gap-1">
                  {group.bars.map((bar, barIdx) => (
                    <div key={barIdx} className="flex flex-col items-center">
                      {/* Bar */}
                      <div 
                        className="w-4 sm:w-8 rounded-xl overflow-hidden"
                        style={{ height: `${bar.height}px` }}
                      >
                        <div 
                          className="w-full h-full bg-white border border-gray-200 rounded-xl"
                          style={{
                            backgroundImage: `repeating-linear-gradient(
                              -45deg,
                              transparent,
                              transparent 3px,
                              #D1D5DB 3px,
                              #D1D5DB 4px
                            )`
                          }}
                        />
                      </div>
                      {/* Avatar below bar */}
                      <div
                        className="w-6 h-6 rounded-full border-2 border-white mt-1 overflow-hidden"
                      >
                        <img src={bar.avatarImg} alt="" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* X-Axis - Months */}
          <div className="flex justify-around">
            {barData.map((group) => (
              <span key={group.month} className="text-[12px] text-gray-400 font-medium">{group.month}</span>
            ))}
          </div>
        </div>
        
        {/* Y-Axis Labels on right */}
        <div className="flex flex-col justify-between text-[11px] text-gray-500 py-0 pl-0 sm:pl-3 h-[120px]">
          {/* Desktop: full values, Mobile: short values */}
          <span>
            <span className="hidden sm:inline">$14,500</span>
            <span className="inline sm:hidden">14k</span>
          </span>
          <span>
            <span className="hidden sm:inline">$11,000</span>
            <span className="inline sm:hidden">11k</span>
          </span>
          <span>
            <span className="hidden sm:inline">$7,500</span>
            <span className="inline sm:hidden">7k</span>
          </span>
          <span>
            <span className="hidden sm:inline">$4,000</span>
            <span className="inline sm:hidden">4k</span>
          </span>
        </div>
      </div>
    </div>
  )
}
