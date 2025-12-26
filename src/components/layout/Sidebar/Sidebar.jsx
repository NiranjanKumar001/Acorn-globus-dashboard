import React, { useState } from 'react'
import IconNav from './IconNav'
import SidebarPanel from './SidebarPanel'
import { IconNavFooter } from './SidebarFooter'

export default function Sidebar() {
  const [activeNav, setActiveNav] = useState('dashboard')

  return (
    <aside className="flex h-full bg-[#F4F0F0] gap-3">
      {/* Left Icon Navigation */}
      <div className="w-[60px] bg-[#F4F0F0] flex flex-col items-center border-r border-gray-200/50">
        <IconNav activeNav={activeNav} setActiveNav={setActiveNav} />
        <IconNavFooter />
      </div>
      
      {/* Right Panel */}
      <SidebarPanel activeNav={activeNav} />
    </aside>
  )
}
