import React from 'react'
import { Star, Clock } from 'lucide-react'

const links = [
  { id: 'starred', icon: Star, label: 'Starred' },
  { id: 'recent', icon: Clock, label: 'Recent' },
]

export default function QuickLinks() {
  return (
    <div className="px-4 pb-2">
      {links.map((link) => (
        <button
          key={link.id}
          className="flex items-center gap-2.5 w-full py-[5px] text-gray-400 hover:text-gray-600 transition-colors"
        >
          <link.icon className="w-4 h-4" strokeWidth={1.5} />
          <span className="text-[13px]">{link.label}</span>
        </button>
      ))}
    </div>
  )
}
