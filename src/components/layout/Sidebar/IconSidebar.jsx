import React from 'react';
import IconNav from './IconNav';
import { IconNavFooter } from './SidebarFooter';

export default function IconSidebar({ activeNav, setActiveNav }) {
  return (
    <div className="w-[60px] bg-[#F4F0F0] flex flex-col items-center border-r border-gray-200/50 h-full">
      <IconNav activeNav={activeNav} setActiveNav={setActiveNav} />
      <IconNavFooter />
    </div>
  );
}
