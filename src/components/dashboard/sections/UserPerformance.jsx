import React, { useState } from 'react'
import { ChevronUp, ChevronDown, TrendingUp, ArrowUpRight } from 'lucide-react'

const users = [
  {
    id: 1,
    name: 'Armin A.',
    avatar: 'bg-gray-300',
    avatarType: 'image',
    revenue: '$209,633',
    sales: 41,
    salesBg: 'bg-gray-100',
    leads: 118,
    kpi: 0.84,
    winRate: '31%',
    wl: { wins: 12, losses: 29 }
  },
  {
    id: 2,
    name: 'Mikasa A.',
    avatar: 'bg-[#10B981]',
    avatarLetter: 'M',
    revenue: '$156,841',
    sales: 54,
    salesBg: 'bg-[#E11D48]',
    salesTextColor: 'text-white',
    leads: 103,
    kpi: 0.89,
    winRate: '39%',
    wl: { wins: 21, losses: 33 },
    badges: [
      { label: 'Top sales', emoji: '💪' },
      { label: 'Sales streak', emoji: '🔥' },
      { label: 'Top review', emoji: '👍' }
    ],
    platforms: {
      dribbble: { percent: '45.3%', value: '$71,048' },
      instagram: { percent: '28.1%', value: '$44,072' },
      google: { percent: '14.1%', value: '$22,114' },
      meta: { percent: '5.4%', value: '$8,469' },
      other: { percent: '7.1%', value: '$11,135' }
    }
  },
  {
    id: 3,
    name: 'Eren Y.',
    avatar: 'bg-[#10B981]',
    avatarLetter: 'E',
    revenue: '$117,115',
    sales: 22,
    salesBg: 'bg-gray-100',
    leads: 84,
    kpi: 0.79,
    winRate: '32%',
    wl: { wins: 7, losses: 15 }
  }
]

const weeks = ['W 1', '', 'W 3', '', 'W 5', '', 'W 7', '', 'W 9', '', 'W 11']

export default function UserPerformance() {
  const [expandedUser, setExpandedUser] = useState(2) // Mikasa expanded by default

  return (
    <div className="bg-white rounded-2xl p-5 h-full">
      {/* Header Row */}
      <div className="flex items-center gap-4 mb-4 text-[12px] text-gray-400 font-medium">
        <div className="w-[140px]"></div>
        <div className="w-[80px] text-center">Sales</div>
        <div className="w-[80px]">Revenue</div>
        <div className="w-[50px] text-center">Leads</div>
        <div className="w-[50px] text-center">KPI</div>
        <div className="w-[50px] text-center">W/L</div>
        <div className="w-[60px]"></div>
      </div>
      
      {/* User Rows */}
      <div className="space-y-3">
        {users.map((user) => (
          <div key={user.id}>
            {/* Main Row */}
            <div className="flex items-center gap-4">
              {/* Avatar & Name */}
              <div className="flex items-center gap-2.5 w-[140px]">
                <div className={`w-8 h-8 rounded-full ${user.avatar} flex items-center justify-center overflow-hidden`}>
                  {user.avatarType === 'image' && (
                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  )}
                  {user.avatarLetter && (
                    <span className="text-[11px] font-bold text-white">{user.avatarLetter}</span>
                  )}
                </div>
                <span className="text-[14px] font-medium text-gray-800">{user.name}</span>
              </div>
              
              {/* Sales */}
              <div className="w-[80px] flex justify-center">
                <span className={`w-9 h-9 rounded-xl ${user.salesBg} ${user.salesTextColor || 'text-gray-700'} text-[14px] font-semibold flex items-center justify-center`}>
                  {user.sales}
                </span>
              </div>
              
              {/* Revenue */}
              <div className="w-[80px]">
                <span className="text-[14px] font-semibold text-gray-800">{user.revenue}</span>
              </div>
              
              {/* Leads */}
              <div className="w-[50px] text-center">
                <span className="text-[14px] text-gray-600">{user.leads}</span>
              </div>
              
              {/* KPI */}
              <div className="w-[50px] text-center">
                <span className="text-[14px] text-gray-600">{user.kpi}</span>
              </div>
              
              {/* Win Rate */}
              <div className="w-[50px] text-center">
                <span className="text-[14px] text-gray-600">{user.winRate}</span>
              </div>
              
              {/* W/L Boxes */}
              <div className="flex items-center gap-1">
                <span className="w-7 h-7 rounded-lg bg-[#1F2937] text-white text-[12px] font-semibold flex items-center justify-center">
                  {user.wl.wins}
                </span>
                <span className="w-7 h-7 rounded-lg bg-gray-100 text-gray-600 text-[12px] font-semibold flex items-center justify-center">
                  {user.wl.losses}
                </span>
              </div>
              
              {/* Expand Button */}
              <button 
                onClick={() => setExpandedUser(expandedUser === user.id ? null : user.id)}
                className={`w-7 h-7 rounded-full flex items-center justify-center ${
                  expandedUser === user.id 
                    ? 'bg-[#E11D48] text-white' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {expandedUser === user.id ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
            
            {/* Expanded Content for Mikasa */}
            {expandedUser === user.id && user.badges && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                {/* Badges */}
                <div className="flex items-center gap-2 mb-4">
                  {user.badges.map((badge, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-gray-100 rounded-full text-[12px] text-gray-600 font-medium flex items-center gap-1.5"
                    >
                      {badge.label}
                      <span>{badge.emoji}</span>
                    </span>
                  ))}
                </div>
                
                {/* Work with platforms section */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[13px] font-medium text-gray-800">Work with platforms</h3>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 text-[11px] text-[#E11D48] bg-pink-50 px-2 py-0.5 rounded-full">
                        <TrendingUp className="w-3 h-3" />
                        3
                      </span>
                      <span className="text-[13px] font-bold text-[#E11D48]">$156,841</span>
                    </div>
                  </div>
                  
                  {/* Platform Grid */}
                  <div className="flex gap-4">
                    {/* Dribbble - Large */}
                    <div className="bg-pink-50 rounded-xl p-3 min-w-[120px]">
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#EA4C89]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.5a10.18 10.18 0 012.312 6.375c-.337-.063-3.687-.75-7.062-.313-.063-.125-.125-.25-.188-.375-.187-.438-.375-.875-.625-1.313 3.75-1.5 5.375-3.687 5.563-4.375zM12 1.75c2.75 0 5.25 1.063 7.125 2.75-.125.625-1.562 2.625-5.125 4-1.563-2.875-3.313-5.25-3.563-5.562A10.3 10.3 0 0112 1.75z"/>
                          </svg>
                        </div>
                        <span className="text-[11px] text-gray-700 font-medium">Dribbble</span>
                      </div>
                      <div className="text-[22px] font-bold text-gray-900">{user.platforms.dribbble.percent}</div>
                      <div className="text-[14px] text-gray-400">{user.platforms.dribbble.value}</div>
                    </div>
                    
                    {/* Instagram Card */}
                    <div className="bg-pink-50 rounded-xl p-3">
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="2" y="2" width="20" height="20" rx="5"/>
                          </svg>
                        </div>
                        <span className="text-[11px] text-gray-700 font-medium">Instagram</span>
                      </div>
                      <div className="text-[13px]">
                        <span className="font-semibold text-gray-800">{user.platforms.instagram.percent}</span>
                        <span className="text-gray-400 ml-1">{user.platforms.instagram.value}</span>
                      </div>
                    </div>
                    
                    {/* Right Column Stats */}
                    <div className="flex flex-col gap-2">
                      {/* Google */}
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-[#4285F4]">G</span>
                        </div>
                        <span className="text-[11px] text-gray-700 font-medium">Google</span>
                        <span className="text-[11px] text-gray-400">{user.platforms.google.percent}</span>
                        <span className="text-[11px] text-gray-300">{user.platforms.google.value}</span>
                      </div>
                      
                      {/* Meta */}
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                          <span className="text-[10px]">👁️👁️</span>
                        </div>
                        <span className="text-[11px] text-gray-400">{user.platforms.meta.percent}</span>
                        <span className="text-[11px] text-gray-300">{user.platforms.meta.value}</span>
                      </div>
                      
                      {/* Other */}
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center">
                          <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                          </svg>
                        </div>
                        <span className="text-[11px] text-gray-700 font-medium">Other</span>
                        <span className="text-[11px] text-gray-400">{user.platforms.other.percent}</span>
                        <span className="text-[11px] text-gray-300">{user.platforms.other.value}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Sales Dynamic */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[13px] font-medium text-gray-800">Sales dynamic</h3>
                    <ArrowUpRight className="w-4 h-4 text-gray-400" />
                  </div>
                  
                  {/* Week Labels */}
                  <div className="flex justify-between mb-1 px-1">
                    {weeks.map((week, idx) => (
                      <span key={idx} className="text-[9px] text-gray-400 w-6 text-center">{week}</span>
                    ))}
                  </div>
                  
                  {/* Chart */}
                  <div className="relative h-[60px]">
                    <svg className="w-full h-full" viewBox="0 0 300 60" preserveAspectRatio="none">
                      {/* Red Line */}
                      <polyline
                        fill="none"
                        stroke="#E11D48"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="0,45 30,42 60,38 90,30 120,25 150,22 180,18 210,12 240,8 270,10 300,5"
                      />
                      
                      {/* Green Line */}
                      <polyline
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="0,50 30,48 60,45 90,42 120,40 150,45 180,38 210,35 240,40 270,38 300,42"
                      />
                      
                      {/* Yellow Line */}
                      <polyline
                        fill="none"
                        stroke="#F59E0B"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="0,55 30,53 60,52 90,50 120,48 150,50 180,48 210,45 240,48 270,46 300,50"
                      />
                      
                      {/* Highlight points with icons */}
                      <circle cx="90" cy="30" r="8" fill="#1769FF" />
                      <circle cx="210" cy="12" r="8" fill="#EA4C89" />
                      <circle cx="150" cy="45" r="8" fill="#10B981" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
            
            {/* Collapsed placeholder for non-Mikasa users when expanded */}
            {expandedUser === user.id && !user.badges && (
              <div className="mt-4 pt-4 border-t border-gray-100 text-center text-gray-400 text-[13px] py-6">
                N/A - No detailed data available
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
