// import React from 'react'
// import RevenueCard from './cards/RevenueCard'
// import TopSalesCard from './cards/TopSalesCard'
// import BestDealCard from './cards/BestDealCard'
// import DealsCard from './cards/DealsCard'
// import ValueCard from './cards/ValueCard'
// import WinRateCard from './cards/WinRateCard'

// export default function StatsCardsRow() {
//   return (
//     <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between mb-5 gap-2">
      
//       {/* Revenue Card - Takes more space */}
//       <RevenueCard />
//       {/* Smaller Stats Cards */}
//       <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
//         <TopSalesCard />
//         <BestDealCard />
        
//         {/* Deals, Value, WinRate always in a row */}
//         <div className="flex flex-row items-stretch gap-2 w-full sm:w-auto">
//           <DealsCard />
//           <ValueCard isSelected={true} />
//           <WinRateCard />
//         </div>
//       </div>
//     </div>
//   )
// }


import React from 'react'
import RevenueCard from './cards/RevenueCard'
import TopSalesCard from './cards/TopSalesCard'
import BestDealCard from './cards/BestDealCard'
import DealsCard from './cards/DealsCard'
import ValueCard from './cards/ValueCard'
import WinRateCard from './cards/WinRateCard'

export default function StatsCardsRow() {
  return (
    <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between mb-5 gap-2">
      
      {/* Revenue Card - Takes more space on desktop */}
      <RevenueCard />
      
      {/* Stats Cards Container - Stacked on mobile/tablet, row on desktop */}
      <div className="flex flex-col xl:flex-row items-stretch xl:items-center gap-2 w-full xl:w-auto">
        <TopSalesCard />
        <BestDealCard />
        
        {/* Deals, Value, WinRate - Always in a row */}
        <div className="flex flex-row items-stretch gap-2 w-full xl:w-auto">
          <DealsCard />
          <ValueCard isSelected={true} />
          <WinRateCard />
        </div>
      </div>
    </div>
  )
}