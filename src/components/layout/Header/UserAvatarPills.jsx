import React from 'react'
import { Plus } from 'lucide-react'

const users = [
  { id: 1, name: 'Armin A.', avatarImg: '/Armin.png' },
  { id: 2, name: 'Eren Y.', avatarImg: '/Eren.png' },
  { id: 3, name: 'Mikasa A.', avatarImg: '/Mikasa.png' },
  { id: 4, name: null, bgColor: 'bg-[#1F2937]', initial: 'C', initialColor: 'text-white', isLogo: true },
]

export default function UserAvatarPills() {
  return (
    <div className="flex items-center gap-2">
      {/* Add User Button */}
      <button className="w-8 h-8 rounded-full border-2 border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors">
        <Plus className="w-4 h-4 text-black" strokeWidth={2} />
      </button>
      
      {/* User Pills */}
      {users.map((user) => (
        <div
          key={user.id}
          className={`flex items-center gap-2 ${user.isLogo ? 'border border-gray-300 rounded-full p-1' : 'border border-gray-300 rounded-full pl-1 pr-3 py-1 cursor-pointer hover:bg-gray-200 transition-colors'}`}
        >
          {/* Avatar Circle */}
          <div className={`w-5 h-5 rounded-full ${user.bgColor || ''} flex items-center justify-center overflow-hidden`}>
            {user.avatarImg ? (
              <img src={user.avatarImg} alt={user.name} className="w-full h-full object-cover" />
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
