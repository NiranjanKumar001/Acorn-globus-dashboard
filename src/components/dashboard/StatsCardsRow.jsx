import React from 'react'
import RevenueCard from './cards/RevenueCard'
import TopSalesCard from './cards/TopSalesCard'
import BestDealCard from './cards/BestDealCard'
import DealsCard from './cards/DealsCard'
import ValueCard from './cards/ValueCard'
import WinRateCard from './cards/WinRateCard'

export default function StatsCardsRow() {
  return (
    <div className="flex items-center justify-between mb-5">
      {/* Revenue Card - Takes more space */}
      <RevenueCard />
      
      {/* Smaller Stats Cards */}
      <div className="flex items-center">
        <TopSalesCard />
        <BestDealCard />
        <DealsCard />
        <ValueCard isSelected={true} />
        <WinRateCard />
      </div>
    </div>
  )
}
