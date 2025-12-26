import React, { useState } from 'react'
import IconNav from './IconNav'
import SidebarPanel from './SidebarPanel'
import { IconNavFooter } from './SidebarFooter'

export default function Sidebar() {
  const [activeNav, setActiveNav] = useState('dashboard')

  return (
    <aside className="flex h-full bg-[#FAFAFA]">
      {/* Left Icon Navigation */}
      <div className="w-[60px] bg-white flex flex-col items-center border-r border-gray-100">
        <IconNav activeNav={activeNav} setActiveNav={setActiveNav} />
        <IconNavFooter />
      </div>
      
      {/* Right Panel */}
      <SidebarPanel activeNav={activeNav} />
    </aside>
  )
}
