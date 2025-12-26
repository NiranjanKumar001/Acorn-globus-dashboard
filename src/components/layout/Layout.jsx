import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'

export default function Layout({ children }) {
  return (
    <div className="flex h-screen bg-[#F5F5F5]">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />
        
        {/* Page Content */}
        <main className="flex-1 overflow-auto px-6 py-3">
          {children}
        </main>
      </div>
    </div>
  )
}
