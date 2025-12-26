import React from 'react'
import UserAvatarPills from '../layout/Header/UserAvatarPills'
import ActionIcons from '../layout/Header/ActionIcons'

export default function ContentHeader() {
  return (
    <div className="flex items-center justify-between py-2">
      {/* Left - User Avatar Pills */}
      <UserAvatarPills />
      
      {/* Right - Actions */}
      <ActionIcons />
    </div>
  )
}
