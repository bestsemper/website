"use client";

import { useState } from "react";

export interface SkillItem {
  name: string;
  description?: string;
}

export function SkillPill({ skill }: { skill: string | SkillItem }) {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const isString = typeof skill === "string";
  const name = isString ? skill : skill.name;
  const description = !isString ? skill.description : null;

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={() => setShowTooltip(!showTooltip)}
    >
      <span
        className="block px-3 py-1 text-sm font-medium rounded-full bg-background-secondary text-foreground border border-border transition-all duration-300 cursor-pointer hover:scale-105 hover:border-foreground"
      >
        {name}
      </span>
      
      {description && (
        <div 
          className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[220px] text-wrap p-3 bg-foreground text-background text-xs rounded-lg shadow-xl z-50 pointer-events-none transition-all duration-200 ${
            showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          {description}
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-foreground" />
        </div>
      )}
    </div>
  );
}
