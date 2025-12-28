import React, { useState } from 'react'
import { ChevronUp, ChevronDown, TrendingUp, ArrowUpRight } from 'lucide-react'

const users = [
  {
    id: 1,
    name: 'Armin A.',
    avatarImg: '/Armin.png',
    revenue: '$209,633',
    sales: 41,
    salesBg: 'bg-black',
    salesTextColor: 'text-white',
    leads: 118,
    kpi: 0.84,
    winRate: '31%',
    wl: { wins: 12, losses: 29 }
  },
  {
    id: 2,
    name: 'Mikasa A.',
    avatarImg: '/Mikasa.png',
    revenue: '$156,841',
    sales: 54,
    salesBg: 'bg-black',
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
    avatarImg: '/Eren.png',
    revenue: '$117,115',
    sales: 22,
    salesBg: 'bg-black',
    salesTextColor: 'text-white',
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
    <div className="bg-white rounded-2xl p-1.5 h-full">
      {/* Header Row */}
      <div className="hidden sm:grid sm:grid-cols-[140px_95px_100px_50px_50px_70px_30px] mb-0 text-[12px] text-gray-400 font-medium w-full">
        <div>Sales</div>
        <div className="text-left">Revenue</div>
        <div className="text-center">Leads</div>
        <div className="text-center ml-10">KPI</div>
        <div className="text-right ml-10">W/L</div>
        <div></div>
      </div>
      <div className="sm:hidden flex items-center gap-2 mb-0 text-[12px] text-gray-400 font-medium">
        <div className="w-[50px]">Sales</div>
        <div className="w-[70px] text-left">Revenue</div>
        <div className="w-[70px] text-center">Leads</div>
        <div className="w-[40px] text-center ">KPI</div>
        <div className="w-[40px] text-right">W/L</div>
        <div className="w-[60px]"></div>
      </div>
      
      {/* User Rows */}
      <div className="space-y-1">
        {users.map((user) => (
          <div key={user.id} className={`${
            expandedUser === user.id 
              ? 'bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-indigo-50/50 rounded-2xl py-0.5 px-2 -mx-1 border border-gray-200' 
              : 'bg-gray-50 rounded-2xl py-0.5 px-2 -mx-1 border border-gray-200'
          }`}>
            {/* Main Row */}
            <div className="sm:grid sm:grid-cols-[140px_95px_100px_50px_50px_70px_30px] sm:items-center flex items-center sm:gap-0 gap-5 sm:justify-between w-full">
              {/* Avatar & Name */}
              <div className="flex items-center sm:gap-1.5 gap-1 min-w-0 sm:min-w-[140px]">
                <div className="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
                  <img src={user.avatarImg} alt={user.name} className="w-full h-full object-cover" />
                </div>
                <span className="hidden sm:inline text-[11px] font-medium text-gray-800">{user.name}</span>
              </div>

              {/* Revenue */}
              <div className="sm:w-[95px] min-w-0">
                <span className="hidden sm:inline text-[11px] font-semibold text-gray-800">{user.revenue}</span>
                <span className="inline sm:hidden text-[11px] font-semibold text-gray-800">
                  {(() => {
                    const num = Number(user.revenue.replace(/[^\d.]/g, ''));
                    
                    return num >= 1000 ? Math.round(num / 1000) + 'k' : user.revenue;
                  })()}
                </span>
              </div>

              {/* Sales and Leads combined */}
              <div className="sm:w-[100px] min-w-0 flex items-center sm:gap-1 gap-1 justify-center">
                <span className={`w-5 h-5 sm:w-6 sm:h-6 rounded-lg ${user.salesBg} ${user.salesTextColor || 'text-black'} text-[9px] sm:text-[11px] font-semibold flex items-center justify-center`}>
                  {user.sales}
                </span>
                <span className="w-6 h-6 rounded-lg bg-gray-100 text-gray-600 text-[11px] font-semibold flex items-center justify-center">
                  {user.leads}
                </span>
              </div>

              {/* KPI */}
              <div className="sm:w-[50px] min-w-0 flex justify-center">
                <span className="text-[11px] text-gray-600">{user.kpi}</span>
              </div>

              {/* Win Rate */}
              <div className="sm:w-[50px] min-w-0 flex justify-center">
                <span className="text-[11px] text-gray-600">{user.winRate}</span>
              </div>

              {/* W/L Boxes - only show on desktop/tablet */}
              <div className="hidden sm:flex items-center gap-1 min-w-[60px]">
                <span className="w-6 h-6 rounded-lg bg-[#1F2937] text-white text-[11px] font-semibold flex items-center justify-center">
                  {user.wl.wins}
                </span>
                <span className="w-6 h-6 rounded-lg bg-gray-100 text-gray-600 text-[11px] font-semibold flex items-center justify-center">
                  {user.wl.losses}
                </span>
              </div>

              {/* Expand Button - always at far right */}
              <div className="flex-1 flex justify-end">
                <button 
                  onClick={() => setExpandedUser(expandedUser === user.id ? null : user.id)}
                  className={`w-4 h-4 rounded-full flex items-center justify-center ${
                    expandedUser === user.id 
                      ? 'bg-[#E11D48] text-white' 
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {expandedUser === user.id ? (
                    <ChevronUp className="w-2.5 h-2.5" />
                  ) : (
                    <ChevronDown className="w-2.5 h-2.5" />
                  )}
                </button>
              </div>
            </div>
            
            {/* Expanded Content for Mikasa */}
            {expandedUser === user.id && user.badges && (
              <div className="mt-1 pt-0.5 border-t border-gray-100">
                {/* Badges */}
                <div className="hidden sm:flex flex-row flex-nowrap items-center gap-2 mb-1">
                  {user.badges.map((badge, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-[11px] text-gray-600 font-medium flex items-center gap-1 leading-none whitespace-nowrap"
                    >
                      {badge.label}
                      <span>{badge.emoji}</span>
                    </span>
                  ))}
                </div>
                
                {/* Work with platforms section */}
                <div className="mb-2">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[13px] font-medium text-gray-800">Work with platforms</h3>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 text-[11px] bg-[#E11D48] text-white px-2 py-0.5 rounded-full font-medium">
                        <TrendingUp className="w-3 h-3" />
                        3
                      </span>
                      <span className="hidden sm:inline text-[11px] font-bold text-white bg-[#E11D48] px-2 py-0.5 rounded-full">$156,841</span>
                      <span className="inline sm:hidden text-[11px] font-bold text-white bg-[#E11D48] px-2 py-0.5 rounded-full">156k</span>
                    </div>
                  </div>
                  
                  {/* Platform Grid */}
                  
                  <div className="flex flex-col sm:flex-row gap-2 w-full">
                    {/* Dribbble - Large Card with Stripes */}
                    <div 
                      className="rounded-xl p-2 flex-1 sm:w-auto sm:flex-auto relative overflow-hidden border border-pink-200 flex flex-col bg-white "
                    >
                      <div className="flex items-center gap-1.5 mb-0 ">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#EA4C89]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
                          </svg>
                        </div>
                        <span className="text-[11px] sm:text-[13px] text-gray-700 font-medium leading-none">Dribbble</span>
                      </div>
                      <div className="mt-auto flex justify-between items-center text-[13px] leading-none">
                        <span className="font-bold text-xl text-gray-900">{user.platforms.dribbble.percent}</span>
                        <span className="text-xl text-gray-400">{user.platforms.dribbble.value}</span>
                      </div>
                    </div>
                    {/* Right Side - Instagram, Google+Meta, Other */}
                    <div className="w-full sm:w-[230px] grid grid-cols-1 gap-1 sm:flex sm:flex-col">
                      {/* Top Row - Instagram and Google+Meta */}
                      <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-2">
                        {/* Instagram Card */}
                        <div className="bg-white rounded-xl p-2 flex-1 sm:max-w-[110px] border border-pink-200 flex flex-col">
                          <div className="flex items-center gap-2 mb-0">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="2" width="20" height="20" rx="5"/>
                                <circle cx="12" cy="12" r="4"/>
                                <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
                              </svg>
                            </div>
                            <span className="text-[11px] sm:text-[13px] text-gray-700 font-medium leading-none">Instagram</span>
                          </div>
                          <div className="mt-auto p-1">
                            <div className="text-[13px] flex justify-between items-center leading-none">
                              <span className="font-bold text-gray-800">{user.platforms.instagram.percent}</span>
                              <span className="text-gray-400">{user.platforms.instagram.value}</span>
                            </div>
                          </div>
                        </div>
                        {/* Google + Meta stacked on desktop */}
                        <div className="flex flex-col gap-2 flex-1 sm:max-w-[110px]">
                          {/* Google Card with Stripes */}
                          <div className="rounded-xl p-1 border border-gray-200 bg-white">
                            <div className="flex items-center gap-2 mb-2 sm:mb-4">
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                              </svg>
                              <span className="text-[11px] sm:text-[13px] text-gray-700 font-medium leading-none">Google</span>
                            </div>
                            <div className="text-[13px] mt-0 leading-none flex justify-between">
                              <span className="font-semibold text-gray-600">{user.platforms.google.percent}</span>
                              <span className="text-gray-400">{user.platforms.google.value}</span>
                            </div>
                          </div>
                          {/* Meta/Flickr Card */}
                          <div className="bg-white rounded-xl p-1 border border-gray-200">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="flex items-center flex-shrink-0">
                                  <div className="w-2 h-4 bg-[#0063DC] rounded-sm"></div>
                                  <div className="w-2 h-4 bg-[#FF0084] rounded-sm ml-0.5"></div>
                                </div>
                                <span className="text-[11px] sm:text-[13px] text-gray-600 leading-none">{user.platforms.meta.percent}</span>
                              </div>
                              <span className="text-[11px] sm:text-[13px] text-gray-400 leading-none">{user.platforms.meta.value}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Other Card - Full Width */}
                      <div className="bg-white rounded-xl p-1 flex items-center justify-between border border-gray-200">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 rounded-lg bg-gray-200 flex items-center justify-center">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <rect x="3" y="3" width="18" height="18" rx="2"/>
                            </svg>
                          </div>
                          <span className="text-[11px] sm:text-[13px] text-gray-700 font-medium leading-none">Other</span>
                        </div>
                        <div className="text-[13px] leading-none">
                          <span className="font-semibold text-gray-600">{user.platforms.other.percent}</span>
                          <span className="text-gray-400 ml-1">{user.platforms.other.value}</span>
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
                      {/* Main Red Line (solid) - natural random vibration */}
                      <polyline
                        fill="none"
                        stroke="#E11D48"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points="0,52 8,48 18,55 28,45 38,50 48,42 55,48 65,38 78,44 88,35 98,42 108,32 118,38 130,28 142,35 155,25 168,32 178,22 190,28 202,18 215,25 228,15 242,22 255,12 268,18 280,10 292,15 300,8"
                      />
                      
                      {/* Secondary Pink Line (dashed) - natural random vibration */}
                      <polyline
                        fill="none"
                        stroke="#F9A8D4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeDasharray="4,4"
                        points="0,58 12,52 22,58 35,48 45,55 58,45 68,52 80,42 92,50 105,38 115,48 128,35 140,45 152,32 165,42 175,30 188,40 200,28 212,38 225,25 238,35 250,22 262,32 275,20 288,28 300,22"
                      />
                    </svg>
                  </div>
                  
                  {/* Bottom Progress Bar with Platform Icons */}
                  <div className="relative h-1 rounded-full overflow-visible flex mt-4 mb-2">
                    {/* Behance - Blue */}
                    <div className="h-full bg-[#0057FF] flex-[15] relative flex items-center justify-center rounded-l-full">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 rounded-full bg-[#0057FF] border-2 border-white flex items-center justify-center z-10">
                        <span className="text-[8px] font-bold text-white">Be</span>
                      </div>
                    </div>
                    
                    {/* Green section */}
                    <div className="h-full bg-[#10B981] flex-[30] relative flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 text-white/80" />
                      </div>
                    </div>
                    
                    {/* Mikasa avatar */}
                    <div className="h-full bg-[#10B981] flex-[10] relative flex items-center justify-center">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center z-10 overflow-hidden">
                        <img src="/Mikasa.png" alt="Mikasa" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    
                    {/* Yellow section */}
                    <div className="h-full bg-[#FBBF24] flex-[35] relative flex items-center justify-center">
                    </div>
                    
                    {/* Dribbble - Pink */}
                    <div className="h-full bg-[#10B981] flex-[10] relative flex items-center justify-center rounded-r-full">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-5 h-5 rounded-full bg-[#EA4C89] border-2 border-white flex items-center justify-center z-10">
                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
                        </svg>
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
