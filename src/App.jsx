import React from 'react'
import Layout from './components/layout/Layout'
import ContentHeader from './components/dashboard/ContentHeader'
import PageHeader from './components/dashboard/PageHeader'
import StatsCardsRow from './components/dashboard/StatsCardsRow'
import UserMetricsBar from './components/dashboard/UserMetricsBar'
import ThreeColumnSection from './components/dashboard/ThreeColumnSection'
import BottomSection from './components/dashboard/BottomSection'

export default function App() {
  return (
    <Layout>
      {/* Content Area Header - User pills & actions */}
      <ContentHeader />
      
      {/* Page Header - Title & Timeframe */}
      <PageHeader title="New report" />
      
      {/* Stats Cards Row */}
      <StatsCardsRow />
      
      {/* User Metrics Bar */}
      <div className="mb-5">
        <UserMetricsBar />
      </div>
      
      {/* Three Column Section */}
      <ThreeColumnSection />
      
      {/* Bottom Section - Charts & User Row */}
      <BottomSection />
    </Layout>
  )
}