import React from 'react';
import { skillsData } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-[#F7F1E8] border-t border-[#D8D0C6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 mb-16 border-b border-[#D8D0C6]">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs text-[#8A847C] uppercase tracking-widest block">
              SECTION 06 / REGISTER
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight">
              Technical Competencies
            </h2>
          </div>
          <p className="text-sm text-[#5F5A54] font-sans max-w-md leading-relaxed">
            A typographic register of practical capabilities, languages, and security toolchains strictly verified through authentic laboratory experience and professional instruction.
          </p>
        </div>

        {/* Typographic Publication List with Thin Horizontal Rules */}
        <div className="border-t border-[#111111] divide-y divide-[#D8D0C6]">
          {skillsData.map((group) => (
            <div 
              key={group.id} 
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              
              {/* Category Name & Description (4 cols) */}
              <div className="lg:col-span-4 space-y-2">
                <span className="text-[10px] font-mono text-[#8A847C] uppercase tracking-widest block">
                  CATEGORY SPECIFICATION
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
                  {group.category}
                </h3>
                <p className="text-xs text-[#5F5A54] font-sans leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Skills with Context (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="text-[10px] font-mono text-[#8A847C] uppercase tracking-wider">
                  CORE TECHNICAL PROFICIENCIES
                </div>
                <div className="space-y-3">
                  {group.skills.map((skill, i) => (
                    <div key={i} className="text-xs font-sans">
                      <div className="font-medium text-[#111111] flex items-center space-x-2">
                        <span className="font-mono text-[#111111]">&mdash;</span>
                        <span>{skill.name}</span>
                      </div>
                      <div className="text-[11px] text-[#5F5A54] pl-4 leading-normal mt-0.5">
                        {skill.context}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Tools (3 cols) */}
              <div className="lg:col-span-3 space-y-2">
                <div className="text-[10px] font-mono text-[#8A847C] uppercase tracking-wider">
                  VERIFIED TOOLCHAIN
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-[#FAF7F1] border border-[#D8D0C6] text-[#111111]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
