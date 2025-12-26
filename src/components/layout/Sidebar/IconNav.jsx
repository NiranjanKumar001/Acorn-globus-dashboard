import React from 'react'
import { Home, Target, FileText, Command, CheckSquare } from 'lucide-react'

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'sales', icon: Target, label: 'Sales' },
  { id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
  { id: 'files', icon: FileText, label: 'Files' },
  { id: 'commands', icon: Command, label: 'Commands' },
  { id: 'tasks', icon: CheckSquare, label: 'Tasks' },
]

// Custom Dashboard Icon Component
function DashboardIcon({ active }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="6" height="6" rx="1.5" fill={active ? "white" : "#1F2937"} />
      <rect x="11" y="1" width="6" height="6" rx="1.5" fill={active ? "white" : "#1F2937"} />
      <rect x="1" y="11" width="6" height="6" rx="1.5" fill={active ? "white" : "#1F2937"} />
      <rect x="11" y="11" width="6" height="6" rx="1.5" fill={active ? "white" : "#1F2937"} />
    </svg>
  )
}

export default function IconNav({ activeNav, setActiveNav }) {
  return (
    <div className="flex flex-col items-center pt-4 pb-2 pl-3">
      {/* Logo at top */}
      <div className="w-9 h-9 rounded-full bg-[#0F172A] flex items-center justify-center mb-10">
        <span className="text-white font-bold text-xl">C</span>
      </div>
      
      <div className="flex flex-col items-center gap-3">
        {navItems.map((item) => {
          const isActive = activeNav === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isActive 
                  ? 'bg-[#E11D48] ' 
                  : 'bg-white'
              }`}
              title={item.label}
            >
              {item.icon === 'dashboard' ? (
                <DashboardIcon active={isActive} />
              ) : (
                <item.icon 
                  className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-800'}`} 
                  strokeWidth={1.5} 
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}