import React from 'react'

const users = [
  { 
    id: 1, 
    avatarBg: 'bg-gray-300',
    avatarImage: true,
    value: '$209,633', 
    percentage: '39.63%', 
  },
  { 
    id: 2, 
    avatarBg: 'bg-[#3B82F6]',
    avatarEmoji: '🦊',
    value: '$156,841', 
    percentage: '29.65%', 
  },
  { 
    id: 3, 
    avatarBg: 'bg-[#10B981]',
    avatarLetter: 'M',
    value: '$117,115', 
    percentage: '22.14%', 
  },
  { 
    id: 4, 
    avatarBg: 'bg-[#1F2937]',
    avatarLetter: 'C',
    value: '$45,386', 
    percentage: '8.58%', 
  },
]

export default function UserMetricsBar() {
  return (
    <div className="bg-white rounded-2xl px-6 py-4">
      {/* User Stats Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          {users.map((user) => (
            <div key={user.id} className="flex items-center gap-2.5">
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-full ${user.avatarBg} flex items-center justify-center overflow-hidden`}>
                {user.avatarImage && (
                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                )}
                {user.avatarEmoji && (
                  <span className="text-sm">{user.avatarEmoji}</span>
                )}
                {user.avatarLetter && (
                  <span className="text-[11px] font-bold text-white">{user.avatarLetter}</span>
                )}
              </div>
              
              {/* Value */}
              <span className="text-[14px] font-semibold text-gray-800">{user.value}</span>
              
              {/* Percentage */}
              <span className="text-[14px] text-gray-400">{user.percentage}</span>
            </div>
          ))}
        </div>
        
        {/* Details Button */}
        <button className="px-6 py-2.5 bg-[#1F2937] text-white text-[13px] font-medium rounded-full hover:bg-gray-700 transition-colors">
          Details
        </button>
      </div>
    </div>
  )
}
