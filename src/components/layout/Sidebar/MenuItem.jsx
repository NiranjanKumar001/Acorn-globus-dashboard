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
          <div className={`absolute left-0 w-px bg-gray-200 ${isLast ? 'h-[14px] top-0' : 'h-full top-0'}`} />
          {/* Horizontal line */}
          <div className="absolute left-0 top-[14px] w-3 h-px bg-gray-200" />
        </>
      )}
      
      <button
        onClick={onClick}
        className={`flex items-center justify-between w-full py-[6px] transition-colors ${hasLine ? 'pl-5' : ''} ${
          active 
            ? 'text-[#E11D48]' 
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        <span className={`text-[13px] ${active ? 'font-medium' : ''}`}>{label}</span>
        
        {badge && (
          <span className="text-[11px] font-semibold min-w-[20px] h-[20px] flex items-center justify-center rounded-full bg-[#E11D48] text-white">
            {badge}
          </span>
        )}
      </button>
    </div>
  )
}
