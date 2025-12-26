import React from 'react'
import { Heart } from 'lucide-react'

export default function DealsCard() {
  return (
    <div className="px-5 py-4 min-w-[70px]">
      {/* Label */}
      <p className="text-[12px] text-gray-400 mb-1.5">Deals</p>
      
      {/* Value */}
      <p className="text-[28px] font-bold text-gray-300 mb-3">256</p>
      
      {/* Heart indicator */}
      <div className="flex items-center gap-1.5">
        <Heart className="w-3.5 h-3.5 text-[#E11D48] fill-[#E11D48]" />
        <span className="text-[12px] text-gray-600 font-medium">5</span>
      </div>
    </div>
  )
}
