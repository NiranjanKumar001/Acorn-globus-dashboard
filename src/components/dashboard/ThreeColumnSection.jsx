import React from 'react'
import PlatformList from './sections/PlatformList'
import ReferrerChart from './sections/ReferrerChart'
import UserPerformance from './sections/UserPerformance'
import PlatformValueCard from './sections/PlatformValueCard'
import RevenueBarChart from './sections/RevenueBarChart'

export default function ThreeColumnSection() {
  return (
    <>
      {/* Mobile & Tablet: Stack PlatformList, ReferrerChart, PlatformValueCard, RevenueBarChart; Desktop: original grid */}
      <div className="block lg:hidden w-full">
        <div className="flex flex-col gap-3">
          <PlatformList />
          <ReferrerChart />
          <PlatformValueCard />
          <div className="w-full flex justify-start lg:justify-center -ml-4 lg:ml-0">
            <div className="w-full px-2 lg:max-w-none lg:px-0">
              <RevenueBarChart />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <UserPerformance />
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-12 gap-4 mb-4">
        {/* Left Column */}
        <div className="col-span-6 flex flex-col gap-2">
          {/* Top Row: Platform List + Referrer Chart */}
          <div className="grid grid-cols-2 gap-4">
            <PlatformList />
            <ReferrerChart />
          </div>
          {/* Bottom Row: Platform Value + Revenue Bar Chart */}
          <div className="grid grid-cols-12 gap-4 bg-[#F5F5F5] rounded-2xl p-1.5 pb-0 pl-0">
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
