import React from 'react'
import TimeframeSelector from '../layout/Header/TimeframeSelector'

export default function PageHeader({ title = "New report" }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-1 mb-2 gap-2">
      {/* Left - Page Title */}
      <h1 className="text-[26px] font-semibold text-[#9CA3AF] tracking-wider">{title}</h1>
      {/* Timeframe below title on mobile, right on desktop */}
      <TimeframeSelector />
    </div>
  )
}
