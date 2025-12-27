import React from 'react'
import IconNav from './IconNav'
import SidebarPanel from './SidebarPanel'
import { IconNavFooter } from './SidebarFooter'
import { PanelLeftClose, PanelLeft } from 'lucide-react'

export default function Sidebar({ activeReport, setActiveReport, activeNav, setActiveNav, isCollapsed, setIsCollapsed, showPanel = true }) {
  return (
    <aside className="flex h-full bg-[#F4F0F0] relative">
      {/* IconNav and Folder/Logo side by side */}
      <div className="flex flex-row h-full">
        {/* IconNav */}
        <div className="w-[60px] bg-[#F4F0F0] flex flex-col items-center border-r border-gray-200/50">
          <IconNav activeNav={activeNav} setActiveNav={setActiveNav} />
          <IconNavFooter />
        </div>
        {/* Folder sidebar (panel) */}
        {showPanel && (
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isCollapsed ? 'w-0' : 'w-[200px]'}`}>
            <SidebarPanel activeNav={activeNav} activeReport={activeReport} setActiveReport={setActiveReport} />
          </div>
        )}
      </div>
    </aside>
  )
}