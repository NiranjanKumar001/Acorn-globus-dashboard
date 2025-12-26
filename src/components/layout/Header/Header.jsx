import React from 'react'
import SearchBar from './SearchBar'
import AddButton from './AddButton'
import { Menu } from 'lucide-react'

export default function Header() {
    return (
        <header className="h-16 bg-[#DED8D8] flex items-center justify-between px-6">
            {/* Left Section - Search */}
            <div className="flex items-center">
                <SearchBar />
            </div>

            {/* Right Section - Menu, Profile, Add Button */}
            <div className="flex items-center gap-3">
                {/* Hamburger Menu */}
                <div className='flex items-center gap-1 bg-white p-1 rounded-full'>
                    <button className="w-6 h-6 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <Menu className="w-4 h-4 text-black" strokeWidth={1.5} />
                    </button>

                    {/* Profile Avatar - Gradient egg/sunset */}
                    <div className="w-6 h-6 rounded-full bg-gradient-to-b from-[#FEF3C7] via-[#FDBA74] to-[#F97316] cursor-pointer">
                    </div>
                </div>


                {/* Add Button */}
                <AddButton />
            </div>
        </header>
    )
}
