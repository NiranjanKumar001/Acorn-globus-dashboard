import React from 'react'
import IconNav from './IconNav'
import SidebarPanel from './SidebarPanel'
import { IconNavFooter } from './SidebarFooter'
import { PanelLeftClose, PanelLeft } from 'lucide-react'

export default function Sidebar({ activeReport, setActiveReport, activeNav, setActiveNav, isCollapsed, setIsCollapsed }) {
  return (
    <aside className="flex h-full bg-[#F4F0F0] gap-3 relative">
      {/* Left Icon Navigation */}
      <div className="w-[60px] bg-[#F4F0F0] flex flex-col items-center border-r border-gray-200/50">
        <IconNav activeNav={activeNav} setActiveNav={setActiveNav} />
        <IconNavFooter />
      </div>
      
      {/* Right Panel - Collapsible */}
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isCollapsed ? 'w-0' : 'w-[200px]'}`}>
        <SidebarPanel activeNav={activeNav} activeReport={activeReport} setActiveReport={setActiveReport} />
      </div>
      
      {/* Collapse/Expand Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors z-20 border border-gray-200"
      >
        {isCollapsed ? (
          <PanelLeft className="w-3.5 h-3.5 text-gray-600" />
        ) : (
          <PanelLeftClose className="w-3.5 h-3.5 text-gray-600" />
        )}
      </button>
    </aside>
  )
}