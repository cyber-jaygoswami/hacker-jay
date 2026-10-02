import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { attackSurfaceNodes } from '../data/attackSurface';

export default function AttackSurfaceLab() {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const currentNode = attackSurfaceNodes[activeNodeIndex];

  return (
    <section id="attack-surface" className="py-24 lg:py-32 bg-[#EFE7DC] border-t border-[#D8D0C6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 mb-16 border-b border-[#D8D0C6]">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs text-[#8A847C] uppercase tracking-widest block">
              SECTION 09 / ANATOMY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight">
              Attack Surface &amp; Defense
            </h2>
          </div>
          <p className="text-sm text-[#5F5A54] font-sans max-w-md leading-relaxed">
            An educational security model illustrating typical adversary entry points across the enterprise stack, contrasted with architectural defense-in-depth controls.
          </p>
        </div>

        {/* 2-Column Model */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Chain Nodes (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-mono text-[#8A847C] uppercase tracking-wider mb-3">
              STACK LAYERS // SELECT TO INSPECT
            </div>

            <div className="space-y-2">
              {attackSurfaceNodes.map((node, index) => {
                const isSelected = activeNodeIndex === index;

                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNodeIndex(index)}
                    className={`w-full text-left p-4 rounded border transition-all flex items-center justify-between group ${
                      isSelected
                        ? 'bg-[#FAF7F1] border-[#111111] shadow-sm'
                        : 'bg-[#FAF7F1]/60 border-[#D8D0C6] hover:border-[#111111] hover:bg-[#FAF7F1]'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-mono text-[#8A847C]">
                        0{index + 1} // {node.securityDomain}
                      </div>
                      <div className="font-serif text-base font-bold text-[#111111] group-hover:text-[#6F263D] transition-colors">
                        {node.title.replace(/^\d+\.\s*/, '')}
                      </div>
                      <div className="text-[11px] font-sans text-[#5F5A54]">
                        {node.tagline}
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#111111] translate-x-1' : 'text-[#8A847C]'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Technical Inspector (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded bg-[#FAF7F1] border border-[#111111] space-y-6">
              
              <div className="border-b border-[#D8D0C6] pb-4 space-y-1">
                <span className="text-[10px] font-mono text-[#8A847C] uppercase tracking-widest block">
                  LAYER SPECIFICATION &bull; {currentNode.securityDomain}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#111111]">
                  {currentNode.title}
                </h3>
                <p className="text-xs text-[#5F5A54] font-sans leading-relaxed pt-1">
                  {currentNode.description}
                </p>
              </div>

              {/* 2-Column: Vectors vs Safeguards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Vectors */}
                <div className="space-y-3">
                  <div className="text-xs font-mono text-[#6F263D] uppercase tracking-wider font-semibold">
                    COMMON ATTACK VECTORS
                  </div>
                  <ul className="space-y-2">
                    {currentNode.threatVectors.map((v, i) => (
                      <li key={i} className="text-xs text-[#5F5A54] font-sans flex items-start space-x-2">
                        <span className="text-[#6F263D] font-mono mt-0.5">&bull;</span>
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Safeguards */}
                <div className="space-y-3">
                  <div className="text-xs font-mono text-[#111111] uppercase tracking-wider font-semibold">
                    ARCHITECTURAL SAFEGUARDS
                  </div>
                  <ul className="space-y-2">
                    {currentNode.defensiveControls.map((c, i) => (
                      <li key={i} className="text-xs text-[#5F5A54] font-sans flex items-start space-x-2">
                        <span className="text-[#111111] font-mono mt-0.5">&bull;</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="pt-4 border-t border-[#D8D0C6] flex items-center justify-between text-[11px] font-mono text-[#8A847C]">
                <span>DEFENSE-IN-DEPTH ARCHITECTURE</span>
                <span>ZERO SIMULATED EXPLOITS</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
