/* eslint-disable no-unused-vars */
import React from 'react'

const barData = [
  { 
    month: 'Sep', 
    value: 6901, 
    bars: [
      { height: 100, avatar: 'bg-gray-300' },
      { height: 65, avatar: 'bg-blue-500', border: true },
      { height: 50, avatar: 'bg-gray-300' }
    ]
  },
  { 
    month: 'Oct', 
    value: 11035, 
    bars: [
      { height: 120, avatar: 'bg-gray-300' },
      { height: 150, avatar: 'bg-green-500', border: true },
      { height: 95, avatar: 'bg-orange-400' }
    ]
  },
  { 
    month: 'Nov', 
    value: 9288, 
    bars: [
      { height: 85, avatar: 'bg-gray-300' },
      { height: 130, avatar: 'bg-blue-500', border: true },
      { height: 75, avatar: 'bg-orange-400' }
    ]
  },
]

const tabs = ['Revenue', 'Leads', 'W/L']

export default function RevenueBarChart() {
  return (
    <div className="bg-white rounded-2xl p-5 h-full">
      {/* Tabs at top right */}
      <div className="flex justify-end mb-4">
        <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`px-5 py-2 rounded-full text-[13px] font-medium transition-colors ${
                index === 0
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
        <div className="flex-1 flex flex-col">
          {/* Bars Area */}
          <div className="flex items-end justify-around px-2 pb-10">
            {barData.map((group) => (
              <div key={group.month} className="flex flex-col items-center">
                {/* Value Label */}
                <div className="text-[11px] font-semibold px-2.5 py-1 rounded-lg mb-2 bg-[#E11D48] text-white">
                  ${group.value.toLocaleString()}
                </div>
                
                {/* Bar Group with individual avatars */}
                <div className="flex items-end gap-1">
                  {group.bars.map((bar, barIdx) => (
                    <div key={barIdx} className="flex flex-col items-center">
                      {/* Bar */}
                      <div 
                        className="w-6 rounded-xl overflow-hidden"
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
                        className={`w-6 h-6 rounded-full ${bar.avatar} ${bar.border ? 'ring-2 ring-blue-400' : ''} border-2 border-white mt-1`}
                      />
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
        <div className="flex flex-col justify-between text-[11px] text-gray-300 py-2 pl-3 h-[180px]">
          <span>$14,500</span>
          <span>$11,000</span>
          <span>$7,500</span>
          <span>$4,000</span>
        </div>
      </div>
    </div>
  )
}
