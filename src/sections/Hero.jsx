import React from 'react';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { profile } from '../data/profile';
import SecurityConsole from '../components/SecurityConsole';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#F7F1E8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Folio Header */}
        <div className="flex items-center justify-between pb-8 mb-12 border-b border-[#D8D0C6] text-xs font-mono text-[#5F5A54]">
          <div className="flex items-center space-x-3">
            <span className="uppercase tracking-widest text-[#111111] font-semibold">PORTFOLIO &amp; RESEARCH ARCHIVE</span>
            <span className="text-[#8A847C]">&bull;</span>
            <span className="hidden sm:inline">OFFENSIVE SECURITY &amp; CLOUD INFRASTRUCTURE</span>
          </div>
          <div className="text-right">
            <span>VOL. 2026 // HACKERJAY.COM</span>
          </div>
        </div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bold Editorial Typography & Statement */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Small tracking kicker */}
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest text-[#5F5A54] uppercase">
              <span>SECURITY RESEARCHER &bull; CLOUD SECURITY ENGINEER</span>
            </div>

            {/* Oversized Serif Headline */}
            <div className="space-y-1">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111111] leading-[0.98]">
                Security<br />
                <span className="italic font-normal font-serif">Researcher</span>
              </h1>
              <p className="font-sans text-base sm:text-lg text-[#5F5A54] pt-2 font-medium tracking-wide">
                Cloud Security Engineer &bull; Penetration Testing &bull; Technical Educator
              </p>
            </div>

            {/* Evidence-Driven Editorial Statement */}
            <div className="pt-2 max-w-xl">
              <p className="text-base sm:text-lg text-[#111111] font-serif italic leading-relaxed">
                Operating at the intersection of offensive penetration testing, Active Directory exploitation, and enterprise cloud architecture.
              </p>
              <p className="text-sm text-[#5F5A54] font-sans leading-relaxed pt-3">
                Certified PNPT and eWPTv2, actively lecturing in university computing faculties while specializing in Microsoft Azure cloud security engineering (AZ-104 &amp; AZ-500).
              </p>
            </div>

            {/* High-Contrast Editorial Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#work"
                className="px-6 py-3 rounded text-xs font-mono font-medium tracking-wider bg-[#111111] text-[#F7F1E8] hover:bg-[#FAF7F1] hover:text-[#111111] border border-[#111111] transition-all duration-200 flex items-center space-x-2 shadow-sm"
              >
                <span>VIEW SELECTED WORK</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={profile.resumeUrl}
                download="Jaypuri_Goswami_Resume.pdf"
                className="px-6 py-3 rounded text-xs font-mono font-medium tracking-wider bg-transparent text-[#111111] hover:bg-[#EFE7DC] border border-[#D8D0C6] hover:border-[#111111] transition-all duration-200 flex items-center space-x-2"
                title="Download verified resume PDF"
              >
                <Download className="w-3.5 h-3.5 text-[#111111]" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
            </div>

            {/* Subtle Metadata Grid */}
            <div className="pt-8 border-t border-[#D8D0C6] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono text-[#5F5A54]">
              <div>
                <span className="text-[10px] text-[#8A847C] uppercase tracking-wider block mb-1">LOCATION</span>
                <span className="text-[#111111] font-medium">{profile.heroMetadata.location}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#8A847C] uppercase tracking-wider block mb-1">CREDENTIALS</span>
                <span className="text-[#111111] font-medium">PNPT &bull; eWPTv2 &bull; BCA 8.81</span>
              </div>
              <div>
                <span className="text-[10px] text-[#8A847C] uppercase tracking-wider block mb-1">CURRENT FOCUS</span>
                <span className="text-[#6F263D] font-medium">Azure AZ-104 &amp; AZ-500</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Portrait Treatment */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-md space-y-4">
              
              {/* Image Frame: Tactile Cream Border, Clean Crop */}
              <div className="p-3 bg-[#FAF7F1] border border-[#D8D0C6] rounded shadow-sm">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#EFE7DC]">
                  <img
                    src={profile.avatar}
                    alt="Jaypuri Goswami - Security Researcher"
                    className="w-full h-full object-cover object-center filter grayscale contrast-105 hover:contrast-100 transition-all duration-700"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Minimal Caption / Metadata below portrait */}
              <div className="flex items-baseline justify-between px-1 text-xs font-mono text-[#5F5A54]">
                <div>
                  <span className="text-sm font-serif font-bold text-[#111111] block">
                    JAYPURI GOSWAMI
                  </span>
                  <span className="text-[11px] text-[#5F5A54]">
                    Security Researcher &bull; IT Lecturer
                  </span>
                </div>
                <div className="text-right text-[11px] text-[#8A847C]">
                  FIG. 01 &mdash; ARCHIVE
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Hero Interactive Element: Redesigned Editorial Technical Dossier */}
        <div className="mt-20 lg:mt-28">
          <SecurityConsole />
        </div>

      </div>
    </section>
  );
}
