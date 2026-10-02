import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F7F1E8] border-t border-[#D8D0C6] py-16 font-sans text-[#5F5A54]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-baseline justify-between gap-6 pb-12 border-b border-[#D8D0C6]">
          
          {/* Left: Brand Identity */}
          <div className="space-y-1">
            <div className="font-serif text-2xl font-bold tracking-tight text-[#111111]">
              {profile.name}
            </div>
            <div className="font-mono text-xs text-[#8A847C]">
              HACKERJAY.COM // PERSONAL RESEARCH LAB
            </div>
          </div>

          {/* Right: Professional Roles */}
          <div className="text-left md:text-right space-y-1">
            <div className="text-sm font-sans font-medium text-[#111111]">
              Security Researcher &bull; Cloud Security Engineer
            </div>
            <div className="text-xs font-mono text-[#5F5A54]">
              IT Lecturer at VJ Modha College &bull; Certified PNPT &amp; eWPTv2
            </div>
          </div>

        </div>

        {/* Bottom Metadata & Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#8A847C]">
          
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="text-[#5F5A54] hover:text-[#111111] transition-colors"
            >
              Email Inbox
            </a>
            <a
              href={profile.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5F5A54] hover:text-[#111111] transition-colors"
            >
              linktr.ee/cyber.jay
            </a>
            <a
              href={profile.resumeUrl}
              download="Jaypuri_Goswami_Resume.pdf"
              className="text-[#5F5A54] hover:text-[#111111] transition-colors"
            >
              Resume (PDF)
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span>&copy; {currentYear} {profile.name}. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded border border-[#D8D0C6] text-[#5F5A54] hover:text-[#111111] hover:bg-[#EFE7DC] transition-all"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
