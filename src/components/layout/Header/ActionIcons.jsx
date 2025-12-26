import React from 'react'
import { Share2, Download, Upload } from 'lucide-react'

export default function ActionIcons() {
  return (
    <div className="flex items-center gap-1">
      {/* Share Button */}
      <button className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
        <Share2 className="w-[18px] h-[18px] text-gray-400" strokeWidth={1.5} />
      </button>
      
      {/* Download Button */}
      <button className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
        <Download className="w-[18px] h-[18px] text-gray-400" strokeWidth={1.5} />
      </button>
      
      {/* Export/Upload Button */}
      <button className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
        <Upload className="w-[18px] h-[18px] text-gray-400" strokeWidth={1.5} />
      </button>
    </div>
  )
}
