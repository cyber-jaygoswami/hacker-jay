import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { researchProjects, researchAreas } from '../data/research';
import ResearchModal from '../components/ResearchModal';

export default function Research() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="research" className="py-24 lg:py-32 bg-[#EFE7DC] border-t border-[#D8D0C6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 mb-16 border-b border-[#D8D0C6]">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs text-[#8A847C] uppercase tracking-widest block">
              SECTION 07 / INVESTIGATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight">
              Selected Research
            </h2>
          </div>
          <p className="text-sm text-[#5F5A54] font-sans max-w-md leading-relaxed">
            Documented hands-on research environments, adversary simulation labs, and custom tooling strictly validated against real targets.
          </p>
        </div>

        {/* Large Editorial Project Entries */}
        <div className="space-y-16 mb-24">
          {researchProjects.map((project, idx) => (
            <div
              key={project.id}
              className="p-8 sm:p-12 rounded bg-[#FAF7F1] border border-[#D8D0C6] hover:border-[#111111] transition-colors group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Oversized Number & Meta (3 cols) */}
                <div className="lg:col-span-3 space-y-2">
                  <div className="font-serif text-5xl sm:text-6xl font-light text-[#111111] leading-none">
                    0{idx + 1}
                  </div>
                  <div className="font-mono text-xs text-[#8A847C] uppercase tracking-wider">
                    {project.category}
                  </div>
                  <div className="pt-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#111111] bg-[#111111] text-[#F7F1E8]">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Right: Content, Specs, Action (9 cols) */}
                <div className="lg:col-span-9 space-y-6">
                  
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111]">
                      {project.title}
                    </h3>
                    <div className="text-xs font-mono text-[#6F263D] font-medium">
                      Core Concept: {project.securityConcept}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-[#5F5A54] font-sans leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="p-4 rounded border border-[#D8D0C6] bg-[#F7F1E8] text-xs font-mono text-[#5F5A54] space-y-1">
                    <span className="text-[10px] text-[#8A847C] uppercase tracking-wider block">TARGET ENVIRONMENT</span>
                    <span className="text-[#111111]">{project.targetEnvironment}</span>
                  </div>

                  {/* Toolchain & Action Button */}
                  <div className="pt-4 border-t border-[#D8D0C6] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2.5 py-1 rounded bg-[#EFE7DC] border border-[#D8D0C6] text-[#111111]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => handleOpenProject(project)}
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded bg-[#111111] text-[#F7F1E8] font-mono text-xs font-medium hover:bg-[#333333] transition-colors self-start sm:self-auto shrink-0"
                    >
                      <span>READ RESEARCH</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Active Research Areas (Extensible Writeup System) */}
        <div className="pt-12 border-t border-[#D8D0C6]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono text-[#8A847C] uppercase tracking-wider block mb-1">
                PUBLICATION PIPELINE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
                Active Research Areas &amp; Lab Notes
              </h3>
            </div>
            <div className="text-xs font-mono text-[#5F5A54]">
              READY FOR FUTURE SECURITY WRITEUPS
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area) => (
              <div
                key={area.id}
                className="p-6 rounded bg-[#FAF7F1] border border-[#D8D0C6] space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#8A847C]">
                    <span className="uppercase">{area.tag}</span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#111111]">
                    {area.title}
                  </h4>
                  <p className="text-xs text-[#5F5A54] font-sans leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D8D0C6]/60 flex flex-wrap gap-1">
                  {area.topics.map((tp, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-[#EFE7DC] text-[#5F5A54]"
                    >
                      {tp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal */}
      <ResearchModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
