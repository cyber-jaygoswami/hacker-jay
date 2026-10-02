import React from 'react';
import { roadmapStages } from '../data/roadmap';

export default function LearningRoadmap() {
  return (
    <section id="roadmap" className="py-24 lg:py-32 bg-[#F7F1E8] border-t border-[#D8D0C6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 mb-16 border-b border-[#D8D0C6]">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs text-[#8A847C] uppercase tracking-widest block">
              SECTION 06 / TRAJECTORY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight">
              Currently Exploring &amp; Roadmap
            </h2>
          </div>
          <p className="text-sm text-[#5F5A54] font-sans max-w-md leading-relaxed">
            A transparent editorial progression from foundational software engineering to offensive practical certifications, college lecturing, and ongoing Azure cloud security specialization.
          </p>
        </div>

        {/* Editorial Horizontal / Vertical Progression */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {roadmapStages.map((stage) => {
            const isCurrent = stage.status === 'In Progress';
            const isCompleted = stage.status === 'Completed' || stage.status === 'Active / Delivered';

            return (
              <div 
                key={stage.step}
                className="pt-6 border-t border-[#D8D0C6] grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
              >
                {/* Step & Status (3 cols) */}
                <div className="md:col-span-3 space-y-1.5">
                  <div className="font-serif text-2xl sm:text-3xl font-light text-[#111111]">
                    PHASE {stage.step}
                  </div>
                  <div className="text-xs font-mono text-[#8A847C]">
                    {stage.period}
                  </div>
                  <div>
                    {isCurrent ? (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#6F263D]/40 bg-[#F6E8E5] text-[#6F263D] font-semibold">
                        CURRENT PRIORITY
                      </span>
                    ) : isCompleted ? (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#D8D0C6] bg-[#FAF7F1] text-[#111111]">
                        ACCOMPLISHED
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#D8D0C6] bg-transparent text-[#8A847C]">
                        FUTURE ROADMAP
                      </span>
                    )}
                  </div>
                </div>

                {/* Content (9 cols) */}
                <div className="md:col-span-9 space-y-3">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
                    {stage.phase}
                  </h3>

                  <p className="text-sm text-[#5F5A54] font-sans leading-relaxed">
                    {stage.summary}
                  </p>

                  <div className="pt-2 space-y-1.5">
                    <div className="text-[10px] font-mono text-[#8A847C] uppercase tracking-wider">
                      SYLLABUS &amp; MILESTONES
                    </div>
                    {stage.milestones.map((ms, i) => (
                      <div key={i} className="text-xs text-[#5F5A54] font-sans flex items-start space-x-2.5">
                        <span className="text-[#111111] font-mono mt-0.5">&mdash;</span>
                        <span>{ms}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
