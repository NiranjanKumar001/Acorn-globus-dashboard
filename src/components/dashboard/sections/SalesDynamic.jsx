import React from 'react'

const weeks = ['W 1', 'W 3', 'W 5', 'W 7', 'W 9', 'W 11']

export default function SalesDynamic() {
  return (
    <div className="bg-white rounded-2xl p-4">
      {/* Header */}
      <h3 className="text-[13px] font-medium text-gray-800 mb-3">Sales dynamic</h3>
      
      {/* Week Labels */}
      <div className="flex justify-between mb-1 px-1">
        {weeks.map((week) => (
          <span key={week} className="text-[10px] text-gray-400">{week}</span>
        ))}
      </div>
      
      {/* Chart Area */}
      <div className="relative h-[70px]">
        {/* SVG Lines */}
        <svg className="w-full h-full" viewBox="0 0 300 70" preserveAspectRatio="none">
          {/* Red/Pink Line - Main trend */}
          <polyline
            fill="none"
            stroke="#E11D48"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="0,55 30,52 60,48 90,40 120,35 150,32 180,28 210,22 240,18 270,20 300,15"
          />
          
          {/* Green Line */}
          <polyline
            fill="none"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="0,60 30,58 60,55 90,52 120,50 150,55 180,48 210,45 240,50 270,48 300,52"
          />
          
          {/* Yellow/Orange Line */}
          <polyline
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="0,65 30,63 60,62 90,60 120,58 150,60 180,58 210,55 240,58 270,56 300,60"
          />
          
          {/* Highlight points */}
          <circle cx="90" cy="40" r="4" fill="#E11D48" />
          <circle cx="210" cy="22" r="4" fill="#E11D48" />
          <circle cx="150" cy="55" r="4" fill="#10B981" />
        </svg>
        
        {/* W11 Label */}
        <div className="absolute right-4 top-0">
          <span className="text-[10px] text-gray-500 bg-gray-50 px-1.5 py-0.5 rounded">W 11</span>
        </div>
      </div>
    </div>
  )
}
