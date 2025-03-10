// components/Tooltip.tsx
"use client";
// components/Tooltip.tsx
import React, { useState } from 'react';

interface TooltipProps {
  text: string;
  info: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text, info }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span className="relative inline-block">
      {/* Main text */}
      <span className="text-gray-900">{text}</span>

      {/* Info icon as superscript */}
      <sup
        className="ml-1 text-blue-500 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        ℹ
      </sup>

      {/* Tooltip box - Now with a solid white background */}
      {isHovered && (
    
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-200 p-2 bg-yellow-200 text-black text-sm border border-gray-400 rounded shadow-lg z-50">
          {info}
        </div>
     
      )}
    </span>
  );
};

export default Tooltip;