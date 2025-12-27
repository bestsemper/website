"use client";

import { about, education, experience, skills } from "@/data/resume";
import SkillCard from "./SkillCard";

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
                  {edu.degree && <p className="mb-1 text-foreground">{edu.degree}</p>}
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

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <SkillCard key={category} category={category} items={items} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
