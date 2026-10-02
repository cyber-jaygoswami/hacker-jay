import React from 'react';
import { experienceData } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-[#F7F1E8] border-t border-[#D8D0C6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 mb-16 border-b border-[#D8D0C6]">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs text-[#8A847C] uppercase tracking-widest block">
              SECTION 02 / RECORD
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight">
              Professional Experience
            </h2>
          </div>
          <p className="text-sm text-[#5F5A54] font-sans max-w-md leading-relaxed">
            Direct institutional appointments in higher education lecturing and corporate cybersecurity instruction.
          </p>
        </div>

        {/* Minimalist Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative border-l border-[#111111] ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-16">
          {experienceData.map((job) => (
            <div key={job.id} className="relative space-y-4">
              
              {/* Timeline Marker (Minimal Solid Black Square / Dot) */}
              <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-3 h-3 bg-[#111111] border-2 border-[#F7F1E8]"></div>

              {/* Header Info */}
              <div className="space-y-1">
                <div className="flex items-baseline space-x-3 text-xs font-mono text-[#8A847C]">
                  <span>{job.period}</span>
                  <span>&bull;</span>
                  <span className="text-[#111111] font-semibold">{job.location}</span>
                  {job.current && (
                    <>
                      <span>&bull;</span>
                      <span className="text-[#6F263D] font-semibold">ACTIVE APPOINTMENT</span>
                    </>
                  )}
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
                  {job.title}
                </h3>
                
                <div className="text-sm font-sans font-medium text-[#5F5A54]">
                  {job.organization}
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-sm sm:text-base text-[#111111] font-serif italic leading-relaxed">
                {job.summary}
              </p>

              {/* Technical Responsibilities */}
              <div className="space-y-2 pt-2">
                <div className="text-[10px] font-mono text-[#8A847C] uppercase tracking-wider">
                  KEY RESPONSIBILITIES
                </div>
                <ul className="space-y-2 text-sm text-[#5F5A54] font-sans leading-relaxed">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-[#111111] font-mono text-xs mt-0.5">&mdash;</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Utilized */}
              <div className="pt-4 border-t border-[#D8D0C6] flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-mono text-[#8A847C] uppercase tracking-wider mr-2">
                  DOMAINS:
                </span>
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-[#EFE7DC] border border-[#D8D0C6] text-[#111111]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
