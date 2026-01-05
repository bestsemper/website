"use client";

import { useRef, useState } from "react";
import { SkillPill, SkillItem } from "./SkillPill";

interface SkillCardProps {
  category: string;
  items: (string | SkillItem)[];
}

export default function SkillCard({ category, items }: SkillCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || !divRef.current.matches(':hover')) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    if (divRef.current?.matches(':hover')) {
      setOpacity(1);
    }
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl border border-border bg-background p-6 transition-all duration-200 hover:z-20"
    >
      {/* Background Effects Container - Clipped */}
      <div className="absolute -inset-px overflow-hidden rounded-2xl pointer-events-none">
        <div
          className="absolute inset-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, var(--foreground-secondary), transparent 40%)`,
            filter: "opacity(20%)",
          }}
        />
        <div
          className="absolute inset-0 rounded-2xl transition duration-300"
          style={{
            opacity,
            border: "1.5px solid var(--foreground)",
            maskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black, transparent)`,
          }}
        />
      </div>
      
      <div className="relative z-10 h-full">
        <h4 className="text-lg font-semibold text-foreground mb-4">{category}</h4>
        <div className="flex flex-wrap gap-2">
          {items.map((skill) => (
            <SkillPill key={typeof skill === "string" ? skill : skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
