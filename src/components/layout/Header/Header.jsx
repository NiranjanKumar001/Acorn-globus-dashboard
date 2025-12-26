import React from 'react'
import SearchBar from './SearchBar'
import AddButton from './AddButton'
import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="h-14 bg-white flex items-center justify-between px-6">
      {/* Left Section - Search */}
      <div className="flex items-center">
        <SearchBar />
      </div>
      
      {/* Right Section - Menu, Profile, Add Button */}
      <div className="flex items-center gap-3">
        {/* Hamburger Menu */}
        <button className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
          <Menu className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
        </button>
        
        {/* Profile Avatar - Gradient egg/sunset */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-b from-[#FEF3C7] via-[#FDBA74] to-[#F97316] cursor-pointer">
        </div>
        
        {/* Add Button */}
        <AddButton />
      </div>
    </header>
  )
}
