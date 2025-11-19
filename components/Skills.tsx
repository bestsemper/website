"use client";

export default function Skills() {
  const skillList1 = [
    { name: "Python", level: 10 },
    { name: "Java", level: 7 },
    { name: "C++", level: 5 },
    { name: "JavaScript", level: 7 },
    { name: "TypeScript", level: 7 },
  ];
  
  const skillList2 = [
    { name: "React", level: 8 },
    { name: "Next.js", level: 8 },
    { name: "PyTorch", level: 8 },
    { name: "TensorFlow", level: 7 },
    { name: "LangChain", level: 9 },
  ];

  return (
    <section id="skills" className="w-full py-12 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-[64px] text-center py-12 px-12 relative flex items-center" style={{background: 'var(--secondary-color)'}}>
          <div className="w-full py-12">
            <h2 className="text-5xl font-bold mb-5">Skills</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12">
              <div className="space-y-8">
                {skillList1.map((skill, idx) => (
                  <div key={idx} className="flex items-center">
                    <h5 className="text-xl ml-6 mr-auto my-auto">{skill.name}</h5>
                    <div className="flex gap-2 mr-6">
                      {Array.from({ length: 10 }, (_, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 rounded-full"
                          style={{
                            background: i < skill.level ? 'var(--linear-gradient)' : 'var(--linear-gradient)',
                            opacity: i < skill.level ? 1 : 0.3
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-8">
                {skillList2.map((skill, idx) => (
                  <div key={idx} className="flex items-center">
                    <h5 className="text-xl ml-6 mr-auto my-auto">{skill.name}</h5>
                    <div className="flex gap-2 mr-6">
                      {Array.from({ length: 10 }, (_, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 rounded-full"
                          style={{
                            background: i < skill.level ? 'var(--linear-gradient)' : 'var(--linear-gradient)',
                            opacity: i < skill.level ? 1 : 0.3
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
