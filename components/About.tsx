"use client";

import { about, education, experience } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-foreground">About</h2>
        
        <div className="space-y-16">
          <div>
            <p className="text-lg leading-relaxed mb-6 text-foreground">
              {about.description}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {["Python", "Java", "C++", "JavaScript", "TypeScript", "React", "Next.js", "PyTorch", "TensorFlow", "LangChain"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-background text-foreground border border-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 pl-6 py-2 border-foreground">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-foreground">{edu.school}</h4>
                    <span className="text-sm text-foreground-secondary">{edu.period}</span>
                  </div>
                  <p className="mb-1 text-foreground">{edu.degree}</p>
                  {edu.gpa && <p className="text-sm text-foreground-secondary">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-4 pl-6 py-2 border-foreground">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                      <p className="font-medium text-foreground">{exp.company}</p>
                    </div>
                    <span className="text-sm text-foreground-secondary">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc: string, i: number) => (
                      <li key={i} className="text-sm leading-relaxed text-foreground-secondary">• {desc}</li>
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
