import React from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function ResearchModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl rounded bg-[#FAF7F1] border border-[#111111] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#EFE7DC] px-6 py-4 border-b border-[#D8D0C6] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-[#8A847C] uppercase tracking-widest block">
              RESEARCH LAB DISSECTION // {project.category}
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#111111]">
              {project.title}
            </h3>
          </div>
          
          <button
            onClick={onClose}
            className="p-1 rounded text-[#5F5A54] hover:text-[#111111] hover:bg-[#D8D0C6]/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 rounded border border-[#D8D0C6] bg-[#F7F1E8]">
              <span className="text-[#8A847C] text-[10px] block uppercase tracking-wider">PROJECT TYPE</span>
              <span className="text-[#111111] font-medium">{project.type}</span>
            </div>
            <div className="p-3 rounded border border-[#D8D0C6] bg-[#F7F1E8]">
              <span className="text-[#8A847C] text-[10px] block uppercase tracking-wider">STATUS</span>
              <span className="text-[#111111] font-semibold">{project.status}</span>
            </div>
            <div className="p-3 rounded border border-[#D8D0C6] bg-[#F7F1E8] sm:col-span-2">
              <span className="text-[#8A847C] text-[10px] block uppercase tracking-wider">TARGET ENVIRONMENT</span>
              <span className="text-[#111111]">{project.targetEnvironment}</span>
            </div>
            <div className="p-3 rounded border border-[#D8D0C6] bg-[#F7F1E8] sm:col-span-2">
              <span className="text-[#8A847C] text-[10px] block uppercase tracking-wider">SECURITY CONCEPT</span>
              <span className="text-[#6F263D] font-bold">{project.securityConcept}</span>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-[11px] font-mono text-[#8A847C] uppercase tracking-wider">
              OVERVIEW &amp; OBJECTIVE
            </h4>
            <p className="text-sm text-[#5F5A54] leading-relaxed font-sans">
              {project.summary}
            </p>
          </div>

          {/* Methodology / Attack Vectors */}
          {project.methodology && (
            <div className="space-y-2 pt-2 border-t border-[#D8D0C6]">
              <h4 className="text-[11px] font-mono text-[#111111] uppercase tracking-wider font-semibold">
                EXECUTION METHODOLOGY &amp; VECTORS
              </h4>
              <div className="space-y-2">
                {project.methodology.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs text-[#5F5A54] bg-[#F7F1E8] p-3 rounded border border-[#D8D0C6]">
                    <span className="font-mono text-[#111111] font-semibold mt-0.5">[{idx + 1}]</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Defensive Hardening Controls */}
          {project.defensiveHardening && (
            <div className="space-y-2 pt-2 border-t border-[#D8D0C6]">
              <h4 className="text-[11px] font-mono text-[#111111] uppercase tracking-wider font-semibold">
                DEFENSIVE HARDENING &amp; MITIGATION CONTROLS
              </h4>
              <div className="space-y-2">
                {project.defensiveHardening.map((defense, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs text-[#5F5A54] bg-[#FAF7F1] p-3 rounded border border-[#D8D0C6]">
                    <span className="text-[#111111] font-mono font-bold mt-0.5">&bull;</span>
                    <span>{defense}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Toolchain */}
          <div className="pt-2 border-t border-[#D8D0C6]">
            <h4 className="text-[10px] font-mono text-[#8A847C] uppercase tracking-wider mb-2">
              TOOLCHAIN &amp; SOFTWARE STACK
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2 py-0.5 rounded bg-[#EFE7DC] border border-[#D8D0C6] text-[#111111]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className="p-4 rounded border border-[#111111] bg-[#FAF7F1]">
            <span className="text-[10px] font-mono text-[#111111] font-semibold block uppercase tracking-wider mb-1">
              VALIDATED RESULT
            </span>
            <p className="text-xs text-[#5F5A54] font-sans leading-relaxed">
              {project.result}
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#EFE7DC] px-6 py-4 border-t border-[#D8D0C6] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded text-xs font-mono bg-[#111111] text-[#F7F1E8] hover:bg-[#333333] transition-colors"
          >
            CLOSE DISSECTION
          </button>
        </div>

      </div>
    </div>
  );
}
