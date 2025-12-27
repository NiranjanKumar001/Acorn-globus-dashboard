import React from 'react'
import SearchBar from './SearchBar'
import AddButton from './AddButton'
import { Menu } from 'lucide-react'

export default function Header() {
    return (
        <header className="h-16 bg-[#F4F0F0] flex items-center justify-between ">
            {/* Left Section - Search */}
            <div className="flex items-center">
                <SearchBar />
            </div>

            {/* Right Section - Profile and Add Button at far right */}
            <div className="flex-1 flex items-center justify-end gap-3">
                {/* Hamburger Menu */}
                <div className='flex items-center gap-1 bg-white p-1 rounded-full'>
                    <button className="w-6 h-6 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <Menu className="w-4 h-4 text-black" strokeWidth={1.5} />
                    </button>
                </div>
                {/* Profile Avatar */}
                <div className="w-6 h-6 rounded-full overflow-hidden cursor-pointer">
                    <img src="/Profile.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
                {/* Add Button */}
                <AddButton />
            </div>
        </header>
    )
}
