/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { ChevronUp, Plus } from 'lucide-react'
import MenuItem from './MenuItem'

export default function MenuSection({ 
  title, 
  items = [], 
  defaultOpen = true,
  showAddButton = false 
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="px-4 py-1">
      {/* Section Header */}
      <div className="flex items-center justify-between py-[6px]">
        <span className="text-[13px] font-semibold text-gray-800">{title}</span>
        
        {showAddButton && (
          <button className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors shadow-sm">
            <Plus className="w-4 h-4" strokeWidth={2} />
          </button>
        )}
      </div>
      
      {/* Items */}
      {isOpen && (
        <div className="relative ml-2">
          {items.map((item, index) => (
            <div key={index}>
              {item.isSubSection ? (
                <SubSection 
                  {...item} 
                  isLast={index === items.length - 1}
                  showConnector
                />
              ) : (
                <MenuItem 
                  {...item} 
                  hasLine 
                  isLast={index === items.length - 1}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function SubSection({ label, items = [], defaultOpen = true, isLast = false, showConnector = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="relative">
      {/* Connector lines for subsection header */}
      {showConnector && (
        <>
          {/* Vertical line */}
          <div className={`absolute left-0 w-px bg-gray-400 ${isLast && !isOpen ? 'h-[14px] top-0' : 'top-0 bottom-0'}`} />
          {/* Horizontal line */}
          <div className="absolute left-0 top-[14px] w-3 h-px bg-gray-400" />
        </>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-0.5 pl-5 text-gray-800 hover:text-gray-900 transition-colors"
      >
        <span className="text-[13px] font-normal">{label}</span>
        <ChevronUp className={`w-3.5 h-3.5 text-gray-400 transition-transform ${isOpen ? '' : 'rotate-180'}`} />
      </button>
      
      {isOpen && (
        <div className="relative ml-5">
          {/* Continuing vertical line from parent */}
          {!isLast && showConnector && (
            <div className="absolute -left-5 top-0 bottom-0 w-px bg-gray-400" />
          )}
          
          {items.map((item, index) => (
            <MenuItem 
              key={index} 
              {...item} 
              hasLine 
              isLast={index === items.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}
