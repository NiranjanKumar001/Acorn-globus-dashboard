import React from 'react'
import { Search } from 'lucide-react'

export default function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" strokeWidth={2} />
      <input
        type="text"
        placeholder='Try searching "insights"'
        className="w-72 h-10 pl-10 pr-4 bg-[#F5F5F5] rounded-xl text-[13px] text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-200 transition-all"
      />
    </div>
  )
}
