import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { profile } from '../data/profile';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'RESEARCH', href: '#research' },
    { label: 'CLOUD', href: '#cloud' },
    { label: 'CERTIFICATIONS', href: '#certifications' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#F7F1E8]/95 backdrop-blur-sm ${
        scrolled 
          ? 'border-b border-[#D8D0C6] py-3.5 shadow-sm' 
          : 'border-b border-[#D8D0C6]/60 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Identifier */}
          <a 
            href="#home" 
            className="flex items-baseline space-x-2 group"
            aria-label="Jay Goswami Home"
          >
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#111111]">
              JAY GOSWAMI
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] text-[#5F5A54] tracking-widest uppercase">
              / RESEARCH LAB
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono tracking-wider text-[#5F5A54] hover:text-[#111111] transition-colors py-1 relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#111111] transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={profile.resumeUrl}
              download="Jaypuri_Goswami_Resume.pdf"
              className="text-xs font-mono text-[#5F5A54] hover:text-[#111111] px-2 py-1 transition-colors flex items-center space-x-1"
              title="Download official resume PDF"
            >
              <span>RESUME</span>
              <Download className="w-3 h-3 text-[#5F5A54]" />
            </a>
            
            <a
              href="#contact"
              className="px-4 py-2 rounded text-xs font-mono font-medium tracking-wider bg-[#111111] text-[#F7F1E8] hover:bg-[#F7F1E8] hover:text-[#111111] border border-[#111111] transition-all duration-200"
            >
              <span>LET'S TALK</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <a
              href={profile.resumeUrl}
              download="Jaypuri_Goswami_Resume.pdf"
              className="text-xs font-mono text-[#111111] border border-[#D8D0C6] px-2 py-1 rounded"
              aria-label="Download Resume"
            >
              PDF
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#111111] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F1E8] border-b border-[#D8D0C6] px-6 pt-4 pb-8 space-y-4 animate-in fade-in duration-200">
          <div className="text-[10px] font-mono text-[#8A847C] tracking-widest uppercase pb-2 border-b border-[#D8D0C6]">
            NAVIGATION
          </div>
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono text-[#111111] hover:text-[#6F263D] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-[#D8D0C6] flex flex-col space-y-2.5">
            <a
              href={profile.resumeUrl}
              download="Jaypuri_Goswami_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded border border-[#111111] text-xs font-mono text-[#111111] hover:bg-[#EFE7DC] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD RESUME (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 w-full py-2.5 rounded bg-[#111111] text-[#F7F1E8] text-xs font-mono font-medium hover:bg-[#333333] transition-colors"
            >
              <span>LET'S TALK</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
