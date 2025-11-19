"use client";

import { personalInfo } from "@/data/resume";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6" style={{ background: 'var(--background)' }}>
      <div className="max-w-4xl mx-auto w-full py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: 'var(--foreground)' }}>
          {personalInfo.name}
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl" style={{ color: 'var(--foreground-secondary)' }}>
          Computer Science student at the University of Virginia. I work on machine learning research, build full-stack applications, and compete in programming competitions.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-block px-8 py-3 rounded-md font-medium transition-colors"
            style={{ 
              background: 'var(--foreground)',
              color: 'var(--background)'
            }}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-3 border-2 rounded-md font-medium transition-all"
            style={{ 
              borderColor: 'var(--border)',
              color: 'var(--foreground)'
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
