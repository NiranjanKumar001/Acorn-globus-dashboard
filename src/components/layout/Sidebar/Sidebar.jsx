import React from 'react'
import IconNav from './IconNav'
import SidebarPanel from './SidebarPanel'
import { IconNavFooter } from './SidebarFooter'
import { PanelLeftClose, PanelLeft } from 'lucide-react'

export default function Sidebar({ activeReport, setActiveReport, activeNav, setActiveNav, isCollapsed, setIsCollapsed, showPanel = true, onlyIconNav = false }) {
  return (
    <aside className="flex h-full bg-[#F4F0F0] relative">
      {/* IconNav: always visible */}
      <div className="w-[60px] bg-[#F4F0F0] flex flex-col items-center border-r border-gray-200/50 h-full">
        <IconNav activeNav={activeNav} setActiveNav={setActiveNav} />
        <IconNavFooter />
      </div>
      {/* Folder sidebar (panel): only if not onlyIconNav */}
      {showPanel && !onlyIconNav && (
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isCollapsed ? 'w-0' : 'w-[200px]'} ml-0 md:ml-0`} style={{ marginLeft: window.innerWidth < 768 ? '24px' : '0' }}>
          <SidebarPanel activeNav={activeNav} activeReport={activeReport} setActiveReport={setActiveReport} />
        </div>
      )}
    </aside>
  )
}