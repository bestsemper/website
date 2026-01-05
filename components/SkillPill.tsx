"use client";

import { useState, useEffect, useRef } from "react";

export interface SkillItem {
  name: string;
  description?: string;
}

export function SkillPill({ skill }: { skill: string | SkillItem }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<'left' | 'center' | 'right'>('center');
  const [tooltipReady, setTooltipReady] = useState(false);
  const pillRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  
  const isString = typeof skill === "string";
  const name = isString ? skill : skill.name;
  const description = !isString ? skill.description : null;

  useEffect(() => {
    if (showTooltip && pillRef.current && tooltipRef.current) {
      const pillRect = pillRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      
      // Check if tooltip would overflow on the left
      if (pillRect.left + pillRect.width / 2 - tooltipRect.width / 2 < 0) {
        setTooltipPosition('left');
      }
      // Check if tooltip would overflow on the right
      else if (pillRect.left + pillRect.width / 2 + tooltipRect.width / 2 > viewportWidth) {
        setTooltipPosition('right');
      }
      else {
        setTooltipPosition('center');
      }
      setTooltipReady(true);
    } else if (!showTooltip) {
      setTooltipReady(false);
    }
  }, [showTooltip]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (pillRef.current && !pillRef.current.contains(event.target as Node)) {
        setShowTooltip(false);
        setIsActive(false);
      }
    };

    if (showTooltip && isTouchDevice) {
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showTooltip, isTouchDevice]);

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (isTouchDevice) return;
    const nativeEvent = e.nativeEvent as PointerEvent;
    if (!nativeEvent.pointerType || nativeEvent.pointerType === 'mouse') {
      setShowTooltip(true);
      setIsActive(true);
    }
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (isTouchDevice) return;
    const nativeEvent = e.nativeEvent as PointerEvent;
    if (!nativeEvent.pointerType || nativeEvent.pointerType === 'mouse') {
      setShowTooltip(false);
      setIsActive(false);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nativeEvent = e.nativeEvent as PointerEvent;
    const isTouch = nativeEvent.pointerType === 'touch' || nativeEvent.pointerType === 'pen';
    
    if (isTouch) {
      setIsTouchDevice(true);
    }
    
    if (description && isTouch) {
      setShowTooltip(!showTooltip);
      setIsActive(!isActive);
    }
  };

  return (
    <div 
      ref={pillRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <span
        className={`block px-3 py-1 text-sm font-medium rounded-full bg-background-secondary text-foreground border transition-all duration-300 cursor-pointer ${
          isActive ? 'scale-105 border-foreground' : 'border-border'
        }`}
      >
        {name}
      </span>
      
      {description && showTooltip && (
        <div 
          ref={tooltipRef}
          className={`absolute bottom-full mb-2 w-max max-w-[220px] text-wrap p-3 bg-foreground text-background text-xs rounded-lg shadow-xl z-50 pointer-events-none transition-opacity duration-100 ${
            tooltipPosition === 'left' ? 'left-0' :
            tooltipPosition === 'right' ? 'right-0' :
            'left-1/2 -translate-x-1/2'
          } ${tooltipReady ? 'opacity-100' : 'opacity-0'}`}
        >
          {description}
          {/* Arrow */}
          <div className={`absolute top-full -mt-1 border-4 border-transparent border-t-foreground ${
            tooltipPosition === 'left' ? 'left-4' :
            tooltipPosition === 'right' ? 'right-4' :
            'left-1/2 -translate-x-1/2'
          }`} />
        </div>
      )}
    </div>
  );
}
