import React from 'react'
import { ChevronDown } from 'lucide-react'

export default function Logo() {
  return (
    <button className="flex items-center gap-1.5 px-4 pt-5 pb-3 hover:opacity-80 transition-opacity">
      {/* Company Name */}
      <span className="text-[15px] font-semibold text-gray-800">Codename.com</span>
      
      {/* Dropdown */}
      <ChevronDown className="w-4 h-4 text-gray-400" strokeWidth={2} />
    </button>
  )
}
