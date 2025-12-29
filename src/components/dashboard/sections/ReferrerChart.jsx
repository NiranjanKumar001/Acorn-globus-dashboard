import React from 'react'
import { BarChart3, ListFilter, ChevronDown } from 'lucide-react'

const bars = [
  { id: 1, height: 85, logo: 'behance' },
  { id: 2, height: 110, logo: 'dribbble' },
  { id: 3, height: 65, logo: 'google' },
  { id: 4, height: 55, logo: 'instagram' },
  { id: 5, height: 95, logo: 'other' },
]

export default function ReferrerChart() {
  return (
    <div className="bg-[#F5F5F5] rounded-2xl p-2 h-full flex flex-col min-h-[120px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <button className="flex items-center gap-1 text-gray-500">
          <BarChart3 className="w-5 h-5" />
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
        <button className="flex items-center gap-2 text-[12px] text-gray-600 border border-gray-300 rounded-full px-4 py-1 hover:bg-gray-50">
          Filters
          <ListFilter className="w-3.5 h-3.5" />
        </button>
      </div>
      
      {/* Bar Chart Area */}
      <div className="flex-1 flex items-end justify-center gap-2 pb-3 px-2 bg-[#F5F5F5] rounded-xl">
        {bars.map((bar) => (
          <div key={bar.id} className="flex flex-col items-center justify-end">
            {/* Bar with diagonal stripes and embedded logo */}
            <div 
              className="w-7 sm:w-12 rounded-xl overflow-hidden relative border-2 border-white"
              style={{ height: `${bar.height}px` }}
            >
              <div 
                className="w-full h-full bg-white"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 4px,
                    #D1D5DB 4px,
                    #D1D5DB 5px
                  )`
                }}
              />
              {/* Logo embedded on top of bar */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2">
                {bar.logo === 'dribbble' && (
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-pink-50">
                    <svg className="w-4 h-4 text-[#EA4C89]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.5a10.18 10.18 0 012.312 6.375c-.337-.063-3.687-.75-7.062-.313-.063-.125-.125-.25-.188-.375-.187-.438-.375-.875-.625-1.313 3.75-1.5 5.375-3.687 5.563-4.375zM12 1.75c2.75 0 5.25 1.063 7.125 2.75-.125.625-1.562 2.625-5.125 4-1.563-2.875-3.313-5.25-3.563-5.562A10.3 10.3 0 0112 1.75zM8.5 3.625c.25.313 1.938 2.688 3.5 5.5-4.437 1.188-8.313 1.125-8.75 1.125.625-2.875 2.562-5.313 5.25-6.625zM1.75 12v-.313c.438.013 5 .063 9.75-1.375.25.5.5 1.063.75 1.563-.125.063-.313.063-.438.125-4.937 1.625-7.5 6-7.687 6.312A10.19 10.19 0 011.75 12zm10.25 10.25c-2.375 0-4.562-.812-6.312-2.187.125-.313 2.063-4.063 7.438-5.938l.063-.063c1.375 3.5 1.938 6.438 2.063 7.25a10.14 10.14 0 01-3.25.938zm5-1.688c-.125-.562-.625-3.375-1.875-6.812 3.187-.5 6 .375 6.375.5a10.22 10.22 0 01-4.5 6.313z"/>
                    </svg>
                  </div>
                )}
                {bar.logo === 'behance' && (
                  <div className="w-6 h-6 rounded-lg bg-[#1769FF] flex items-center justify-center">
                    <span className="text-[9px] font-bold text-white">Bē</span>
                  </div>
                )}
                {bar.logo === 'google' && (
                  <div className="w-6 h-6 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                )}
                {bar.logo === 'instagram' && (
                  <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <radialGradient id="ig-radial" cx="50%" cy="50%" r="80%" fx="30%" fy="107%">
                          <stop offset="0%" stopColor="#fdf497"/>
                          <stop offset="5%" stopColor="#fdf497"/>
                          <stop offset="45%" stopColor="#fd5949"/>
                          <stop offset="60%" stopColor="#d6249f"/>
                          <stop offset="90%" stopColor="#285AEB"/>
                        </radialGradient>
                      </defs>
                      <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="white" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="5" fill="none" stroke="white" strokeWidth="2"/>
                      <circle cx="17" cy="7" r="1.3" fill="white"/>
                    </svg>
                  </div>
                )}
                {bar.logo === 'other' && (
                  <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                    <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Text */}
      <div className="text-left mt-2">
        <p className="text-[14px] text-gray-400">Deals amount</p>
        <button className="flex items-center gap-1 text-[15px] font-medium text-gray-800 hover:text-gray-900">
          by referrer category
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
