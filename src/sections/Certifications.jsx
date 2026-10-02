import React, { useState } from 'react';
import { ArrowRight, Eye, Download, CheckCircle2 } from 'lucide-react';
import { certificationsData } from '../data/certifications';
import CertificateModal from '../components/CertificateModal';

export default function Certifications() {
  const [activeCert, setActiveCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCert = (cert) => {
    setActiveCert(cert);
    setIsModalOpen(true);
  };

  return (
    <section id="certifications" className="py-24 lg:py-32 bg-[#F7F1E8] border-t border-[#D8D0C6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 mb-16 border-b border-[#D8D0C6]">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs text-[#8A847C] uppercase tracking-widest block">
              SECTION 04 / CREDENTIALS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight">
              Certification Archive
            </h2>
          </div>
          <p className="text-sm text-[#5F5A54] font-sans max-w-md leading-relaxed">
            All awarded certifications are backed by rigorous practical examinations and verifiable documentation IDs. Active studies are explicitly cataloged as in progress.
          </p>
        </div>

        {/* Minimal Typographic Summary Line */}
        <div className="pb-8 mb-12 border-b border-[#D8D0C6] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#5F5A54]">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#111111]"></span>
            <span className="text-[#111111] font-semibold">01. COMPLETED (2)</span>
            <span>&mdash; PNPT &amp; eWPTv2</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#6F263D]"></span>
            <span className="text-[#6F263D] font-semibold">02. CURRENTLY PREPARING (2)</span>
            <span>&mdash; AZ-104 &amp; AZ-500</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#8A847C]"></span>
            <span className="text-[#8A847C]">03. PLANNED &mdash; OSCP</span>
          </div>
        </div>

        {/* 1. COMPLETED CERTIFICATIONS ARCHIVE ROWS */}
        <div className="space-y-1 mb-20">
          <div className="text-xs font-mono text-[#8A847C] uppercase tracking-wider mb-6">
            OFFICIALLY COMPLETED CREDENTIALS
          </div>

          <div className="border-t border-[#111111] divide-y divide-[#D8D0C6]">
            {certificationsData.completed.map((cert) => (
              <div 
                key={cert.id}
                className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center group transition-colors hover:bg-[#FAF7F1]/60 px-2 sm:px-4 rounded"
              >
                
                {/* Year & Code */}
                <div className="lg:col-span-2 space-y-1">
                  <div className="font-serif text-2xl sm:text-3xl font-light text-[#111111]">
                    {cert.issueDate.split(' ')[2] || '2024'}
                  </div>
                  <div className="text-xs font-mono text-[#8A847C]">
                    AWARDED
                  </div>
                </div>

                {/* Title & Issuer */}
                <div className="lg:col-span-6 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#111111] text-[#F7F1E8] font-medium">
                      {cert.id.toUpperCase()}
                    </span>
                    <span className="text-xs font-mono text-[#5F5A54]">
                      ID: {cert.credentialId}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
                    {cert.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5F5A54] font-sans leading-relaxed">
                    {cert.summary}
                  </p>
                  
                  <div className="text-xs font-mono text-[#8A847C] pt-1">
                    ISSUER: {cert.issuer}
                  </div>
                </div>

                {/* Document Thumbnail & Action */}
                <div className="lg:col-span-4 flex items-center justify-start lg:justify-end space-x-4">
                  {cert.image && (
                    <div 
                      onClick={() => handleOpenCert(cert)}
                      className="w-20 h-14 sm:w-24 sm:h-16 rounded border border-[#D8D0C6] overflow-hidden bg-white shadow-sm shrink-0 cursor-pointer hover:border-[#111111] transition-colors"
                      title="Click to view full credential"
                    >
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover object-center filter grayscale contrast-105 group-hover:contrast-100" 
                      />
                    </div>
                  )}

                  <button
                    onClick={() => handleOpenCert(cert)}
                    className="px-4 py-2 rounded border border-[#111111] text-xs font-mono font-medium text-[#111111] hover:bg-[#111111] hover:text-[#F7F1E8] transition-all flex items-center space-x-1.5 shrink-0"
                  >
                    <span>INSPECT DOCUMENT</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* 2. CURRENTLY PREPARING (NOT COMPLETED) */}
        <div className="space-y-6 pt-12 border-t border-[#D8D0C6] mb-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-[#6F263D] uppercase tracking-wider mb-1 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#6F263D]"></span>
                <span>CURRENTLY PREPARING &bull; ACTIVE SPECIALIZATION</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
                Microsoft Azure Cloud Track
              </h3>
            </div>
            <div className="text-xs font-mono text-[#8A847C]">
              EXPLICITLY IN PROGRESS &bull; NOT YET AWARDED
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificationsData.currentlyPreparing.map((cert) => (
              <div 
                key={cert.id}
                className="p-6 sm:p-8 rounded bg-[#FAF7F1] border border-[#D8D0C6] space-y-4"
              >
                <div className="flex items-baseline justify-between border-b border-[#D8D0C6] pb-3">
                  <span className="font-mono text-xs font-bold text-[#111111] tracking-wider">
                    {cert.code} &mdash; {cert.issuer}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#6F263D]/40 bg-[#F6E8E5] text-[#6F263D] font-medium">
                    IN PROGRESS
                  </span>
                </div>

                <h4 className="font-serif text-xl font-bold text-[#111111]">
                  {cert.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#5F5A54] font-sans leading-relaxed">
                  {cert.summary}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-[#D8D0C6]/60">
                  <div className="text-[10px] font-mono text-[#8A847C] uppercase tracking-wider">
                    SYLLABUS &amp; ENGINEERING FOCUS
                  </div>
                  {cert.focusAreas.map((area, i) => (
                    <div key={i} className="text-xs text-[#5F5A54] font-sans flex items-start space-x-2">
                      <span className="text-[#6F263D] font-mono mt-0.5">&bull;</span>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. PLANNED ROADMAP OBJECTIVES */}
        <div className="pt-8 border-t border-[#D8D0C6]">
          <div className="flex items-baseline justify-between mb-4">
            <span className="text-xs font-mono text-[#8A847C] uppercase tracking-wider">
              FUTURE ROADMAP OBJECTIVE
            </span>
          </div>

          {certificationsData.planned.map((cert) => (
            <div 
              key={cert.id}
              className="p-6 rounded border border-[#D8D0C6] bg-[#EFE7DC]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <span className="text-[10px] font-mono text-[#8A847C] block uppercase">
                  {cert.issuer} &bull; TARGET CERTIFICATION
                </span>
                <h4 className="font-serif text-lg font-bold text-[#111111]">
                  {cert.title} ({cert.code})
                </h4>
                <p className="text-xs text-[#5F5A54] font-sans mt-1">
                  {cert.summary}
                </p>
              </div>

              <span className="text-xs font-mono text-[#8A847C] border border-[#D8D0C6] px-3 py-1 rounded bg-[#FAF7F1] self-start sm:self-auto shrink-0">
                PLANNED MILESTONE
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      <CertificateModal
        cert={activeCert}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
