import React, { useState } from 'react'
import { RxDragHandleDots2 } from 'react-icons/rx';
import IconSidebar from './Sidebar/IconSidebar'
import SidebarPanel from './Sidebar/SidebarPanel'
import Header from './Header/Header'

export default function Layout({ children }) {
  const [activeReport, setActiveReport] = useState('New report')
  const [activeNav, setActiveNav] = useState('dashboard')
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  // Mobile: show folder sidebar or main content
  const [showFolderSidebarMobile, setShowFolderSidebarMobile] = useState(false)

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
      {/* Mobile swap button - vertical, centered between icon sidebar and main content */}
      <div className="block md:hidden fixed z-50 left-[60px] top-1/2 -translate-y-1/2">
        <button
          className="w-5 h-28 bg-[#262424] border border-[#444] rounded-xl shadow flex flex-col items-center justify-center p-0 select-none"
          onClick={() => setShowFolderSidebarMobile((prev) => !prev)}
          aria-label="Toggle Folder Sidebar"
        >
          <RxDragHandleDots2 className="text-gray-300" style={{ width: '1.5em', height: '1.5em' }} />
        </button>
      </div>


      {/* Icon sidebar: always visible */}
      <div className="h-full">
        <IconSidebar activeNav={activeNav} setActiveNav={setActiveNav} />
      </div>

      {/* Folder sidebar: visible as panel on desktop, toggled on mobile */}
      <div
        className={`h-full transition-all duration-300 ease-in-out overflow-hidden ${showFolderSidebarMobile || typeof window === 'undefined' || window.innerWidth >= 768 ? 'block' : 'hidden'}`}
        style={{ minWidth: 0, marginLeft: (showFolderSidebarMobile && (typeof window === 'undefined' || window.innerWidth < 768)) ? '24px' : '0' }}
      >
        <SidebarPanel
          activeNav={activeNav}
          activeReport={activeReport}
          setActiveReport={setActiveReport}
        />
      </div>

      {/* Main Content Area: visible on desktop, or mobile if not toggled */}
      <div className={`flex-1 flex flex-col overflow-hidden p-2 pr-4 ${showFolderSidebarMobile && window.innerWidth < 768 ? 'hidden' : 'block'}`}>
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
