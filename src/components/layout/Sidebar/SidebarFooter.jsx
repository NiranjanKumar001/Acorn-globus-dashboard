import React from 'react'
import { Link, Settings } from 'lucide-react'

export default function SidebarFooter() {
  return (
    <div className="px-4 py-3">
      <button className="flex items-center gap-2.5 text-[13px] text-gray-500 hover:text-gray-700 transition-colors">
        <Link className="w-4 h-4" strokeWidth={2} />
        <span>Manage folders</span>
      </button>
    </div>
  )
}

export function IconNavFooter() {
  return (
    <div className="mt-auto flex flex-col items-center gap-5 pb-6 pl-3">
      {/* Notification */}
      <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors relative shadow-sm">
        <div className="relative">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-800">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#E11D48] rounded-full border-2 border-white"></span>
        </div>
      </button>
      
      {/* Settings */}
      <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
        <Settings className="w-[22px] h-[22px] text-gray-800" strokeWidth={1.5} />
      </button>
    </div>
  )
}
