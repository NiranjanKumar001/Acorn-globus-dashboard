import React from 'react'
import { Plus } from 'lucide-react'

export default function AddButton() {
  return (
    <button className="w-9 h-9 rounded-full bg-[#E11D48] hover:bg-[#BE123C] flex items-center justify-center transition-colors shadow-lg shadow-rose-500/30">
      <Plus className="w-5 h-5 text-white" strokeWidth={2.5} />
    </button>
  )
}
