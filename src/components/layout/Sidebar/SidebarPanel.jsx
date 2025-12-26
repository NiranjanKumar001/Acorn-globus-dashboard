import React from 'react'
import Logo from './Logo'
import QuickLinks from './QuickLinks'
import MenuSection from './MenuSection'
import SidebarFooter from './SidebarFooter'

// Menu Data
const dashboardItems = [
  { label: 'Codename' },
  { 
    isSubSection: true, 
    label: 'Shared with me',
    items: [
      { label: 'Cargo2go' },
      { label: 'Cloud3r', badge: 2 },
      { label: 'Idioma' },
      { label: 'Syllables' },
      { label: 'x-0b' },
    ]
  },
]

const reportsItems = [
  { 
    isSubSection: true, 
    label: 'Share with me',
    items: [
      { label: 'Deals by user' },
      { label: 'Deal duration' },
    ]
  },
  { 
    isSubSection: true, 
    label: 'My reports',
    items: [
      { label: 'Emails received' },
      { label: 'Deal duration' },
      { label: 'New report', active: true },
      { label: 'Analytics', badge: 7 },
    ]
  },
]

// Empty state for non-dashboard navs
function EmptyPanel({ title }) {
  return (
    <div className="w-[200px] bg-white flex flex-col h-full">
      <Logo />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <span className="text-2xl font-semibold text-gray-300">NA</span>
          <p className="text-xs text-gray-400 mt-1">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default function SidebarPanel({ activeNav }) {
  // Show empty panel for non-dashboard navs
  if (activeNav !== 'dashboard') {
    const titles = {
      home: 'Home',
      sales: 'Sales',
      files: 'Files',
      commands: 'Commands',
      tasks: 'Tasks',
    }
    return <EmptyPanel title={titles[activeNav] || 'Coming Soon'} />
  }

  return (
    <div className="w-[200px] bg-white flex flex-col h-full overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {/* Logo */}
      <Logo />
      
      {/* Quick Links */}
      <QuickLinks />
      
      {/* Main Nav Items */}
      <div className="px-4 py-1">
        <button className="w-full py-[6px] text-left text-[13px] font-semibold text-gray-800 hover:text-gray-600 transition-colors">
          Sales list
        </button>
        <button className="w-full py-[6px] text-left text-[13px] font-semibold text-gray-800 hover:text-gray-600 transition-colors">
          Goals
        </button>
      </div>
      
      {/* Dashboard Section */}
      <MenuSection 
        title="Dashboard" 
        items={dashboardItems} 
        showAddButton 
      />
      
      {/* Reports Section */}
      <MenuSection 
        title="Reports" 
        items={reportsItems} 
        showAddButton 
      />
      
      {/* Footer */}
      <SidebarFooter />
    </div>
  )
}
