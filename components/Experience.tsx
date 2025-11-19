"use client";

import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-[var(--background-color)] bg-opacity-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl border border-[var(--primary-color)] border-opacity-20 hover:border-opacity-50 transition-all hover:scale-105 bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] bg-opacity-5"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[var(--primary-color)] mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg gradient-text font-semibold">
                    {exp.company}
                  </p>
                  <p className="text-sm text-[var(--primary-color)] opacity-70 mt-1">
                    {exp.location}
                  </p>
                </div>
                <span className="text-sm text-[var(--primary-color)] opacity-70 mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.description.map((desc, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[var(--primary-color)] opacity-90"
                  >
                    <span className="text-[var(--gradient-from)] mt-1">▹</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
