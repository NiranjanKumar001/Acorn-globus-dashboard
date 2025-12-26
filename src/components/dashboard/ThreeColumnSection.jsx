import React from 'react'
import PlatformList from './sections/PlatformList'
import ReferrerChart from './sections/ReferrerChart'
import UserPerformance from './sections/UserPerformance'
import PlatformValueCard from './sections/PlatformValueCard'
import RevenueBarChart from './sections/RevenueBarChart'

export default function ThreeColumnSection() {
  return (
    <>
      {/* Row 1: Platform List + Referrer Chart | User Performance */}
      <div className="grid grid-cols-12 gap-4 mb-4">
        {/* Left Column */}
        <div className="col-span-6 flex flex-col gap-4">
          {/* Top Row: Platform List + Referrer Chart */}
          <div className="grid grid-cols-2 gap-4">
            <PlatformList />
            <ReferrerChart />
          </div>
          
          {/* Bottom Row: Platform Value + Revenue Bar Chart */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <PlatformValueCard />
            </div>
            <div className="col-span-8">
              <RevenueBarChart />
            </div>
          </div>
        </div>
        
        {/* Right Column - User Performance */}
        <div className="col-span-6">
          <UserPerformance />
        </div>
      </div>
    </>
  )
}
