import React from 'react'
import { ListFilter, ChevronDown } from 'lucide-react'

const platforms = [
  { 
    id: 1, 
    name: 'Dribbble', 
    amount: '$227,459', 
    percentage: '43%' 
  },
  { 
    id: 2, 
    name: 'Instagram', 
    amount: '$142,823', 
    percentage: '27%' 
  },
  { 
    id: 3, 
    name: 'Behance', 
    amount: '$89,935', 
    percentage: '11%' 
  },
  { 
    id: 4, 
    name: 'Google', 
    amount: '$37,028', 
    percentage: '7%' 
  },
]

export default function PlatformList() {
  return (
    <div className="bg-[#F5F5F5] rounded-2xl p-5 h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <button className="flex items-center gap-1 text-gray-500">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="14" y2="12" />
            <line x1="4" y1="18" x2="8" y2="18" />
          </svg>
          <ChevronDown className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-2 text-[13px] text-gray-600 border border-gray-300 rounded-full px-4 py-1.5 bg-white hover:bg-gray-50">
          Filters
          <ListFilter className="w-4 h-4" />
        </button>
      </div>
      
      {/* Platform Items */}
      <div className="space-y-3">
        {platforms.map((platform) => (
          <div key={platform.id} className="flex items-center justify-between bg-white rounded-xl px-3 py-2.5">
            <div className="flex items-center gap-3">
              {/* Icon */}
              {platform.name === 'Dribbble' && (
                <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#EA4C89]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.938 5.5a10.18 10.18 0 012.312 6.375c-.337-.063-3.687-.75-7.062-.313-.063-.125-.125-.25-.188-.375-.187-.438-.375-.875-.625-1.313 3.75-1.5 5.375-3.687 5.563-4.375zM12 1.75c2.75 0 5.25 1.063 7.125 2.75-.125.625-1.562 2.625-5.125 4-1.563-2.875-3.313-5.25-3.563-5.562A10.3 10.3 0 0112 1.75z"/>
                  </svg>
                </div>
              )}
              {platform.name === 'Instagram' && (
                <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFDC80"/>
                        <stop offset="50%" stopColor="#F77737"/>
                        <stop offset="100%" stopColor="#C13584"/>
                      </linearGradient>
                    </defs>
                    <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="url(#ig-gradient)" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="4" fill="none" stroke="url(#ig-gradient)" strokeWidth="2"/>
                    <circle cx="18" cy="6" r="1.5" fill="#C13584"/>
                  </svg>
                </div>
              )}
              {platform.name === 'Behance' && (
                <div className="w-8 h-8 rounded-lg bg-[#1769FF] flex items-center justify-center">
                  <span className="text-[11px] font-bold text-white">Bē</span>
                </div>
              )}
              {platform.name === 'Google' && (
                <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
              )}
              
              {/* Name */}
              <span className="text-[14px] font-medium text-gray-800">{platform.name}</span>
            </div>
            
            {/* Amount & Percentage */}
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-semibold text-gray-800">{platform.amount}</span>
              <span className="text-[13px] text-gray-400">{platform.percentage}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
