"use client";

import { personalInfo } from "@/data/resume";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 bg-white">
      <div className="max-w-4xl mx-auto w-full py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {personalInfo.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
          Computer Science student at the University of Virginia. I work on machine learning research, build full-stack applications, and compete in programming competitions.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-block px-8 py-3 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-md font-medium hover:bg-gray-900 hover:text-white transition-all"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
