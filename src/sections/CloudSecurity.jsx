import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { cloudSecurityLayers } from '../data/cloudArchitecture';

export default function CloudSecurity() {
  const [activeLayerIndex, setActiveLayerIndex] = useState(0);
  const activeLayer = cloudSecurityLayers[activeLayerIndex];

  return (
    <section id="cloud" className="py-24 lg:py-32 bg-[#EFE7DC] border-t border-[#D8D0C6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 mb-16 border-b border-[#D8D0C6]">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs text-[#8A847C] uppercase tracking-widest block">
              SECTION 05 / BLUEPRINT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight">
              Cloud Security Architecture
            </h2>
          </div>
          <p className="text-sm text-[#5F5A54] font-sans max-w-md leading-relaxed">
            A minimalist zero-trust architecture model reflecting enterprise defense patterns that I teach and study as part of my Microsoft Azure engineering specialization (AZ-104 &amp; AZ-500).
          </p>
        </div>

        {/* Technical Journal Architecture Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Minimalist Black-Line Architecture Pipeline (6 cols) */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-mono text-[#8A847C] uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>ZERO-TRUST PIPELINE // CLICK TO INSPECT</span>
              <span>FIG. 02</span>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-[#111111] ml-3 sm:ml-4 space-y-4">
              {cloudSecurityLayers.map((layer, idx) => {
                const isSelected = activeLayerIndex === idx;
                const isCriticalBoundary = idx === 1 || idx === 3; // Identity & Network boundary

                return (
                  <div key={layer.step} className="relative">
                    {/* Architectural Connecting Node */}
                    <div className={`absolute -left-[31px] sm:-left-[39px] top-4 w-3 h-3 rounded-full border-2 transition-all ${
                      isSelected
                        ? 'bg-[#111111] border-[#111111]'
                        : isCriticalBoundary
                        ? 'bg-[#F7F1E8] border-[#6F263D]'
                        : 'bg-[#F7F1E8] border-[#8A847C]'
                    }`} />

                    <button
                      onClick={() => setActiveLayerIndex(idx)}
                      className={`w-full text-left p-4 sm:p-5 rounded border transition-all flex items-center justify-between group ${
                        isSelected
                          ? 'bg-[#FAF7F1] border-[#111111] shadow-sm'
                          : 'bg-[#FAF7F1]/60 border-[#D8D0C6] hover:border-[#111111] hover:bg-[#FAF7F1]'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-mono text-xs text-[#8A847C]">
                            LAYER {layer.step}
                          </span>
                          {isCriticalBoundary && (
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded border border-[#6F263D]/30 bg-[#F6E8E5] text-[#6F263D]">
                              TRUST BOUNDARY
                            </span>
                          )}
                        </div>

                        <div className="font-serif text-lg font-bold text-[#111111] group-hover:text-[#6F263D] transition-colors">
                          {layer.layer}
                        </div>

                        <div className="text-xs font-mono text-[#5F5A54]">
                          {layer.azureConcept}
                        </div>
                      </div>

                      <ChevronRight className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-[#111111] translate-x-1' : 'text-[#8A847C]'
                      }`} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Architectural Dossier Panel (6 cols) */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="p-6 sm:p-8 rounded bg-[#FAF7F1] border border-[#111111] space-y-6">
              
              {/* Header */}
              <div className="border-b border-[#D8D0C6] pb-4 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono text-[#8A847C]">
                  <span>LAYER {activeLayer.step} // ARCHITECTURAL DOSSIER</span>
                  <span className="text-[#111111] font-semibold">AZURE SPECIFICATION</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#111111]">
                  {activeLayer.layer}
                </h3>
                <div className="text-xs font-mono text-[#6F263D] font-medium">
                  Azure Concept: {activeLayer.azureConcept}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#5F5A54] font-sans leading-relaxed">
                {activeLayer.description}
              </p>

              {/* Security Controls */}
              <div className="space-y-2 pt-2">
                <div className="text-[10px] font-mono text-[#8A847C] uppercase tracking-wider">
                  DEFENSIVE SAFEGUARDS &amp; CONTROLS
                </div>
                <div className="space-y-2">
                  {activeLayer.securityControls.map((ctrl, i) => (
                    <div
                      key={i}
                      className="p-3 rounded border border-[#D8D0C6] bg-[#F7F1E8] text-xs text-[#111111] font-sans flex items-start space-x-2.5"
                    >
                      <span className="font-mono text-[#111111] font-bold">&mdash;</span>
                      <span>{ctrl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Rationale */}
              <div className="p-4 rounded border border-[#D8D0C6] bg-[#EFE7DC] text-xs font-sans text-[#5F5A54] space-y-1">
                <span className="text-[10px] font-mono text-[#111111] font-semibold uppercase tracking-wider block">
                  ENGINEERING RATIONALE
                </span>
                <p className="leading-relaxed">
                  {activeLayer.technicalNotes}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
