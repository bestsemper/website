"use client";

import { about, education, experience } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">About</h2>
        
        <div className="space-y-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {about.description}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {["Python", "Java", "C++", "JavaScript", "TypeScript", "React", "Next.js", "PyTorch", "TensorFlow", "LangChain"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white text-gray-700 text-sm border border-gray-200 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-gray-900 pl-6 py-2">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{edu.school}</h4>
                    <span className="text-sm text-gray-500">{edu.period}</span>
                  </div>
                  <p className="text-gray-700 mb-1">{edu.degree}</p>
                  {edu.gpa && <p className="text-gray-600 text-sm">GPA: {edu.gpa}</p>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-gray-900 pl-6 py-2">
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{exp.title}</h4>
                      <p className="text-gray-700 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc: string, i: number) => (
                      <li key={i} className="text-gray-600 text-sm leading-relaxed">• {desc}</li>
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
