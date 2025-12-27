import React, { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'

export default function Layout({ children }) {
  const [activeReport, setActiveReport] = useState('New report')
  const [activeNav, setActiveNav] = useState('dashboard')
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const navTitles = {
    home: 'Home',
    sales: 'Sales',
    files: 'Files',
    commands: 'Commands',
    tasks: 'Tasks',
  }

  const showContent = activeNav === 'dashboard' && activeReport === 'New report'

  return (
    <div className="flex h-screen bg-[#F5F0F0]">
      {/* Sidebar */}
      <Sidebar 
        activeReport={activeReport} 
        setActiveReport={setActiveReport}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden p-2 pr-4">
        {/* Header */}
        <Header />
        
        {/* Page Content */}
        <main className="flex-1 overflow-auto px-6 py-3 bg-white rounded-3xl scrollbar-hide">
          {showContent ? (
            children
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <span className="text-6xl font-bold text-gray-200">No Data</span>
              <p className="text-gray-400 mt-2">
                {activeNav !== 'dashboard' ? navTitles[activeNav] : activeReport}
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
