"use client";

import { personalInfo } from "@/data/resume";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 bg-background">
      <div className="max-w-4xl mx-auto w-full py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
          {personalInfo.name}
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl text-foreground-secondary">
          Computer Science student at the University of Virginia. I work on machine learning research, build full-stack applications, and compete in programming competitions.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full font-medium transition-all duration-200 bg-foreground text-background hover:scale-110"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border rounded-full font-medium transition-all duration-200 border-foreground text-foreground hover:scale-110"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
