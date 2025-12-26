import React from 'react'
import { Plus } from 'lucide-react'

const users = [
  { id: 1, name: 'Armin A.', bgColor: 'bg-gray-200', initial: 'A', initialColor: 'text-gray-600', hasImage: true, imageColor: 'bg-gray-300' },
  { id: 2, name: 'Eren Y.', bgColor: 'bg-orange-100', initial: 'E', initialColor: 'text-orange-600', hasImage: true, imageColor: 'bg-orange-200' },
  { id: 3, name: 'Mikasa A.', bgColor: 'bg-emerald-400', initial: 'M', initialColor: 'text-white' },
  { id: 4, name: null, bgColor: 'bg-[#1F2937]', initial: 'C', initialColor: 'text-white', isLogo: true },
]

export default function UserAvatarPills() {
  return (
    <div className="flex items-center gap-2">
      {/* Add User Button */}
      <button className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors">
        <Plus className="w-4 h-4 text-gray-400" strokeWidth={2} />
      </button>
      
      {/* User Pills */}
      {users.map((user) => (
        <div
          key={user.id}
          className={`flex items-center gap-2 ${user.isLogo ? '' : 'bg-[#F5F5F5] rounded-full pl-1 pr-3 py-1 cursor-pointer hover:bg-gray-200 transition-colors'}`}
        >
          {/* Avatar Circle */}
          <div className={`w-7 h-7 rounded-full ${user.bgColor} flex items-center justify-center overflow-hidden`}>
            {user.hasImage ? (
              <div className={`w-full h-full ${user.imageColor} flex items-center justify-center`}>
                <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M12 14c-6 0-8 3-8 6v1h16v-1c0-3-2-6-8-6z" />
                </svg>
              </div>
            ) : (
              <span className={`text-xs font-semibold ${user.initialColor}`}>{user.initial}</span>
            )}
          </div>
          
          {/* Name (if not logo) */}
          {!user.isLogo && (
            <span className="text-[13px] text-gray-700 font-medium">{user.name}</span>
          )}
        </div>
      ))}
    </div>
  )
}
