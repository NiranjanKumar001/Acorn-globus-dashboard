import React from 'react'
import UserAvatarPills from '../layout/Header/UserAvatarPills'
import ActionIcons from '../layout/Header/ActionIcons'

export default function ContentHeader() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-2 w-full">
      {/* Mobile: ActionIcons on top right, UserAvatarPills below left; Desktop: ActionIcons at far right */}
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div className="flex w-full sm:w-auto justify-start order-2 sm:order-none">
          <UserAvatarPills />
        </div>
        <div className="flex w-full sm:w-auto justify-end order-1 sm:order-none">
          <ActionIcons />
        </div>
      </div>
    </div>
  )
}
