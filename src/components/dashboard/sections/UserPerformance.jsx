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
                      <span className="flex items-center gap-1 text-[11px] text-[#E11D48] bg-[#E11D48] text-white px-2 py-0.5 rounded-md font-medium">
                        <TrendingUp className="w-3 h-3" />
                        3
                      </span>
                      <span className="text-[13px] font-bold text-[#E11D48] bg-pink-100 px-2 py-0.5 rounded-md">$156,841</span>
                    </div>
                  </div>
                  
                  {/* Platform Grid */}
                  <div className="flex gap-3">
                    {/* Dribbble - Large Card with Stripes */}
                    <div 
                      className="rounded-xl p-4 min-w-[140px] relative overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, #FFF5F7 0%, #FFF5F7 100%)`,
                        backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 8px, rgba(225,29,72,0.03) 8px, rgba(225,29,72,0.03) 9px)`
                      }}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <svg className="w-4 h-4 text-[#EA4C89]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.5a10.18 10.18 0 012.312 6.375c-.337-.063-3.687-.75-7.062-.313-.063-.125-.125-.25-.188-.375-.187-.438-.375-.875-.625-1.313 3.75-1.5 5.375-3.687 5.563-4.375zM12 1.75c2.75 0 5.25 1.063 7.125 2.75-.125.625-1.562 2.625-5.125 4-1.563-2.875-3.313-5.25-3.563-5.562A10.3 10.3 0 0112 1.75z"/>
                          </svg>
                        </div>
                        <span className="text-[12px] text-gray-700 font-medium">Dribbble</span>
                      </div>
                      <div className="text-[28px] font-bold text-gray-900 leading-none">{user.platforms.dribbble.percent}</div>
                      <div className="text-[14px] text-gray-400 mt-1">{user.platforms.dribbble.value}</div>
                    </div>
                    
                    {/* Middle Column */}
                    <div className="flex flex-col gap-2">
                      {/* Instagram Card */}
                      <div className="bg-pink-50 rounded-xl p-3 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="2" y="2" width="20" height="20" rx="5"/>
                              <circle cx="12" cy="12" r="4"/>
                              <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
                            </svg>
                          </div>
                          <span className="text-[11px] text-gray-700 font-medium">Instagram</span>
                        </div>
                        <div className="text-[12px] mt-1">
                          <span className="font-bold text-gray-800">{user.platforms.instagram.percent}</span>
                          <span className="text-gray-400 ml-1">{user.platforms.instagram.value}</span>
                        </div>
                      </div>
                      
                      {/* Other Card */}
                      <div className="bg-gray-50 rounded-xl p-3 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-5 h-5 rounded-lg bg-gray-200 flex items-center justify-center">
                            <svg className="w-3 h-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <rect x="3" y="3" width="18" height="18" rx="2"/>
                            </svg>
                          </div>
                          <span className="text-[11px] text-gray-700 font-medium">Other</span>
                        </div>
                        <div className="text-[12px] mt-1">
                          <span className="font-semibold text-gray-600">{user.platforms.other.percent}</span>
                          <span className="text-gray-400 ml-1">{user.platforms.other.value}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column */}
                    <div className="flex flex-col gap-2">
                      {/* Google Card with Stripes */}
                      <div 
                        className="rounded-xl p-3 flex-1"
                        style={{
                          background: `linear-gradient(135deg, #FAFAFA 0%, #FAFAFA 100%)`,
                          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(0,0,0,0.03) 6px, rgba(0,0,0,0.03) 7px)`
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          <span className="text-[11px] text-gray-700 font-medium">Google</span>
                        </div>
                        <div className="text-[12px] mt-1">
                          <span className="font-semibold text-gray-600">{user.platforms.google.percent}</span>
                          <span className="text-gray-400 ml-1">{user.platforms.google.value}</span>
                        </div>
                      </div>
                      
                      {/* Meta/Flickr Card */}
                      <div className="bg-gray-50 rounded-xl p-3 flex-1">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            <div className="w-2 h-4 bg-[#0063DC] rounded-sm"></div>
                            <div className="w-2 h-4 bg-[#FF0084] rounded-sm ml-0.5"></div>
                          </div>
                          <span className="text-[11px] text-gray-600">{user.platforms.meta.percent}</span>
                          <span className="text-[11px] text-gray-400">{user.platforms.meta.value}</span>
                        </div>
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
                  <div className="relative h-[70px]">
                    <svg className="w-full h-full" viewBox="0 0 300 70" preserveAspectRatio="none">
                      {/* Main Red Line (solid) */}
                      <polyline
                        fill="none"
                        stroke="#E11D48"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="0,50 20,48 40,42 60,38 80,35 100,30 120,28 140,25 160,22 180,18 200,15 220,12 240,10 260,12 280,8 300,5"
                      />
                      
                      {/* Secondary Red Line (dashed) */}
                      <polyline
                        fill="none"
                        stroke="#F9A8D4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="4,4"
                        points="0,55 20,52 40,48 60,45 80,42 100,45 120,42 140,38 160,42 180,38 200,35 220,38 240,35 260,38 280,32 300,30"
                      />
                    </svg>
                  </div>
                  
                  {/* Bottom Progress Bar with Platform Icons */}
                  <div className="relative h-4 rounded-full overflow-hidden flex mt-2">
                    {/* Behance - Blue */}
                    <div className="h-full bg-[#0057FF] flex-[15] relative flex items-center justify-center">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 rounded-full bg-[#0057FF] border-2 border-white flex items-center justify-center z-10">
                        <span className="text-[8px] font-bold text-white">Be</span>
                      </div>
                    </div>
                    
                    {/* Dribbble - Pink/Red */}
                    <div className="h-full bg-[#10B981] flex-[30] relative flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <TrendingUp className="w-2.5 h-2.5 text-white/80" />
                      </div>
                    </div>
                    
                    {/* Instagram - Purple/Pink gradient */}
                    <div className="h-full bg-[#10B981] flex-[10] relative flex items-center justify-center">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 rounded-full bg-[#EA4C89] border-2 border-white flex items-center justify-center z-10">
                        <ChevronDown className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                    
                    {/* Google - Yellow/Green section */}
                    <div className="h-full bg-[#FBBF24] flex-[35] relative flex items-center justify-center">
                    </div>
                    
                    {/* Other - Green */}
                    <div className="h-full bg-[#10B981] flex-[10] relative flex items-center justify-center">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 rounded-full bg-[#10B981] border-2 border-white flex items-center justify-center z-10">
                        <span className="text-[7px] text-white">+</span>
                      </div>
                    </div>
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
