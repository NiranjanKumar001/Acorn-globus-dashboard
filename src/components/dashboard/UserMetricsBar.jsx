import React from 'react'

const users = [
  { 
    id: 1, 
    avatarImg: '/Armin.png',
    value: '$209,633', 
    percentage: '39.63%', 
  },
  { 
    id: 2, 
    avatarImg: '/Mikasa.png',
    value: '$156,841', 
    percentage: '29.65%', 
  },
  { 
    id: 3, 
    avatarImg: '/Eren.png',
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
    <div className="flex items-center gap-3">
      {/* User Stats Pills */}
      <div className="flex items-center gap-2 flex-1 min-w-0 bg-gray-100 rounded-full p-1">
        {users.map((user) => (
          <div 
            key={user.id} 
            className={`rounded-full flex items-center justify-between overflow-hidden ${
              user.id === 4 ? 'bg-transparent px-2 py-1' : 'bg-white border border-gray-200 shadow-sm px-3 py-1.5'
            }`}
            style={{ width: user.percentage, minWidth: '160px' }}
          >
            <div className="flex items-center gap-2">
              {/* Avatar */}
              <div className={`${user.id === 4 ? 'w-7 h-7' : 'w-5 h-5'} rounded-full ${user.avatarBg || ''} flex items-center justify-center overflow-hidden flex-shrink-0`}>
                {user.avatarImg ? (
                  <img src={user.avatarImg} alt="" className="w-full h-full object-cover" />
                ) : user.avatarLetter && (
                  <span className={`${user.id === 4 ? 'text-[10px]' : 'text-[8px]'} font-bold text-white`}>{user.avatarLetter}</span>
                )}
              </div>
              
              {/* Value */}
              <span className={`${user.id === 4 ? 'text-[14px]' : 'text-[12px]'} font-semibold text-gray-900`}>{user.value}</span>
            </div>
            
            {/* Percentage */}
            <span className={`${user.id === 4 ? 'text-[13px]' : 'text-[11px]'} text-gray-400 font-medium`}>{user.percentage}</span>
          </div>
        ))}
      </div>
      
      {/* Details Button */}
      <button className="px-8 py-2.5 bg-[#1F2937] text-white text-[12px] font-medium rounded-full hover:bg-gray-700 transition-colors flex-shrink-0 tracking-wider">
        Details
      </button>
    </div>
  )
}
