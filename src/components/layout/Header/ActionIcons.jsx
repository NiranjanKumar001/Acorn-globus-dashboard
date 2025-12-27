import React from 'react'
import { Share2, Download, Upload } from 'lucide-react'

export default function ActionIcons() {
  return (
    <div className="flex items-center gap-1">
      {/* Share Button */}
      <button className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
        <Share2 className="w-4 h-4 text-black" strokeWidth={1.5} />
      </button>
      
      {/* Download Button */}
      <button className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
        <Download className="w-4 h-4 text-black" strokeWidth={1.5} />
      </button>
      
      {/* Export/Upload Button */}
      <button className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
        <Upload className="w-4 h-4 text-black" strokeWidth={1.5} />
      </button>
    </div>
  )
}