"use client";

import { about, education, experience } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ background: 'var(--background-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16" style={{ color: 'var(--foreground)' }}>About</h2>
        
        <div className="space-y-16">
          <div>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--foreground)' }}>
              {about.description}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {["Python", "Java", "C++", "JavaScript", "TypeScript", "React", "Next.js", "PyTorch", "TensorFlow", "LangChain"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-md"
                  style={{ 
                    background: 'var(--background)',
                    color: 'var(--foreground)',
                    border: '1px solid var(--border)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8" style={{ color: 'var(--foreground)' }}>Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--foreground)' }}>
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>{edu.school}</h4>
                    <span className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>{edu.period}</span>
                  </div>
                  <p className="mb-1" style={{ color: 'var(--foreground)' }}>{edu.degree}</p>
                  {edu.gpa && <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8" style={{ color: 'var(--foreground)' }}>Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-4 pl-6 py-2" style={{ borderColor: 'var(--foreground)' }}>
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>{exp.title}</h4>
                      <p className="font-medium" style={{ color: 'var(--foreground)' }}>{exp.company}</p>
                    </div>
                    <span className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc: string, i: number) => (
                      <li key={i} className="text-sm leading-relaxed" style={{ color: 'var(--foreground-secondary)' }}>• {desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
