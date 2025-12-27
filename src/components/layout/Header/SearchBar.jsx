import React from 'react'
import { Search } from 'lucide-react'

export default function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" strokeWidth={2} />
      <input
        type="text"
        placeholder='Try searching "insights"'
        className="w-40 sm:w-60 md:w-80 lg:w-102 h-8 pl-10 pr-4 bg-white rounded-full text-[13px] text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-200 transition-all"
      />
    </div>
  )
}
