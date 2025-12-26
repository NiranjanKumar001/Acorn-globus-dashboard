import React from 'react'
import TimeframeSelector from '../layout/Header/TimeframeSelector'

export default function PageHeader({ title = "New report" }) {
  return (
    <div className="flex items-center justify-between py-1 mb-2">
      {/* Left - Page Title */}
      <h1 className="text-[26px] font-normal text-[#C4C4C4] tracking-tight">{title}</h1>
      
      {/* Right - Timeframe */}
      <TimeframeSelector />
    </div>
  )
}
