import React from 'react'
import { Heart } from 'lucide-react'

export default function DealsCard() {
  return (
    <div className="px-4 py-2 min-w-[70px] text-center border-1 sm:border-2 border-gray-300 rounded-2xl bg-white">
      {/* Label */}
      <p className="text-[12px] text-gray-500 mb-1.5 font-medium">Deals</p>
      
      {/* Value in pill */}
      <div className="flex justify-center mb-1.5">
        <div className="inline-block px-2 py-0.5 bg-gray-200 rounded-full">
          <p className="text-[14px] font-bold text-gray-800">256</p>
        </div>
      </div>
      
      {/* Heart indicator */}
      <div className="flex items-center gap-1">
        <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12l-3 3-3-3h6z" />
        </svg>
        <span className="text-[13px] text-gray-800 font-semibold">5</span>
      </div>
    </div>
  )
}
