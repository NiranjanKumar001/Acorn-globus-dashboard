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
      
      {/* ...existing code... */}
    </aside>
  )
}