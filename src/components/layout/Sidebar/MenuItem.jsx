import React from 'react'

export default function MenuItem({ 
  label, 
  badge = null, 
  active = false, 
  hasLine = false,
  isLast = false,
  onClick 
}) {
  return (
    <div className="relative flex items-center">
      {/* Tree connector line */}
      {hasLine && (
        <>
          {/* Vertical line */}
          <div className={`absolute left-0 w-px bg-gray-300 ${isLast ? 'h-[14px] top-0' : 'h-full top-0'}`} />
          {/* Horizontal line */}
          <div className="absolute left-0 top-[14px] w-3 h-px bg-gray-300" />
        </>
      )}
      
      <button
        onClick={onClick}
        className={`flex items-center justify-between w-full py-1 transition-colors ${hasLine ? 'pl-5' : ''} ${
          active 
            ? 'text-[#E11D48]' 
            : 'text-gray-800 hover:text-gray-900'
        }`}
      >
        <span className={`text-[13px] ${active ? 'font-semibold' : 'font-normal'}`}>{label}</span>
        
        {badge && (
          <span className="text-[10px] font-semibold min-w-[16px] h-[16px] flex items-center justify-center rounded-md bg-[#E11D48] text-white">
            {badge}
          </span>
        )}
      </button>
    </div>
  )
}
