import React from 'react'
import { Link, Settings } from 'lucide-react'

export default function SidebarFooter() {
  return (
    <div className="mt-auto px-4 py-4">
      <button className="flex items-center gap-2.5 text-[13px] text-gray-500 hover:text-gray-700 transition-colors">
        <Link className="w-4 h-4" strokeWidth={2} />
        <span>Manage folders</span>
      </button>
    </div>
  )
}

export function IconNavFooter() {
  return (
    <div className="mt-auto flex flex-col items-center gap-1 pb-5">
      {/* Notification */}
      <button className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors relative">
        <div className="relative">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#E11D48] rounded-full border-2 border-white"></span>
        </div>
      </button>
      
      {/* Settings */}
      <button className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors">
        <Settings className="w-[22px] h-[22px] text-gray-400" strokeWidth={1.5} />
      </button>
    </div>
  )
}
