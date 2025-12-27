import React from 'react'
import { Plus } from 'lucide-react'

export default function AddButton() {
  return (
    <button className="w-7 h-7 rounded-full bg-[#E11D48] hover:bg-[#BE123C] flex items-center justify-center transition-colors mr-4">
      <Plus className="w-4 h-4 text-white" strokeWidth={2.5} />
    </button>
  )
}