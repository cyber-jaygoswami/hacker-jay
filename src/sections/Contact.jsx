import React, { useState } from 'react';
import { ArrowRight, Copy, Check, ExternalLink, Download } from 'lucide-react';
import { profile } from '../data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.honeypot) return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please provide a valid email address.');
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#EFE7DC] border-t border-[#D8D0C6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Large Dramatic Headline */}
        <div className="pb-16 mb-16 border-b border-[#D8D0C6]">
          <span className="font-mono text-xs text-[#8A847C] uppercase tracking-widest block mb-4">
            SECTION 11 / INQUIRIES &amp; COLLABORATION
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#111111] tracking-tight leading-[0.98]">
            Let's talk<br />
            <span className="italic font-normal font-serif">about security.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5F5A54] font-sans max-w-xl pt-6 leading-relaxed">
            Available for security research collaboration, cloud security engineering, penetration testing assessments, and academic lecturing.
          </p>
        </div>

        {/* 2-Column Split: Links Left, Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Links & Coordinates (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            
            <div className="space-y-3">
              <span className="text-[10px] font-mono text-[#8A847C] uppercase tracking-widest block">
                DIRECT INBOX
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="font-serif text-xl sm:text-2xl font-bold text-[#111111] hover:text-[#6F263D] transition-colors underline underline-offset-4"
                >
                  {profile.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded border border-[#D8D0C6] text-[#5F5A54] hover:text-[#111111] hover:bg-[#FAF7F1] transition-colors"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-[#111111]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <div className="text-xs font-mono text-[#111111]">
                  Copied to clipboard.
                </div>
              )}
            </div>

            <div className="space-y-3 pt-6 border-t border-[#D8D0C6]">
              <span className="text-[10px] font-mono text-[#8A847C] uppercase tracking-widest block">
                EXTERNAL PROFILES
              </span>
              <div className="space-y-2">
                <a
                  href={profile.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm font-mono text-[#111111] hover:text-[#6F263D] transition-colors group"
                >
                  <span className="underline underline-offset-4">linktr.ee/cyber.jay</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#5F5A54] group-hover:text-[#6F263D]" />
                </a>
                <div className="text-xs text-[#5F5A54] font-sans">
                  Central hub for verified external security profiles.
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#D8D0C6]">
              <span className="text-[10px] font-mono text-[#8A847C] uppercase tracking-widest block">
                OFFICIAL RESUME
              </span>
              <a
                href={profile.resumeUrl}
                download="Jaypuri_Goswami_Resume.pdf"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded border border-[#111111] text-xs font-mono font-medium text-[#111111] hover:bg-[#111111] hover:text-[#F7F1E8] transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>
            </div>

            <div className="pt-6 border-t border-[#D8D0C6] text-xs font-mono text-[#8A847C]">
              <span>CONFIDENTIALITY: All technical correspondence is handled with strict professional privacy.</span>
            </div>

          </div>

          {/* Right Column: Clean Minimalist Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded bg-[#FAF7F1] border border-[#111111] shadow-sm">
              <span className="text-[10px] font-mono text-[#8A847C] uppercase tracking-widest block mb-2">
                CORRESPONDENCE FORM
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-6">
                Send a Direct Message
              </h3>

              {submitted ? (
                <div className="py-8 space-y-4">
                  <h4 className="font-serif text-2xl font-bold text-[#111111]">
                    Message Prepared
                  </h4>
                  <p className="text-sm text-[#5F5A54] font-sans leading-relaxed">
                    Thank you, {formData.name}. Click below to dispatch your message via your email client:
                  </p>
                  <a
                    href={`mailto:${profile.email}?subject=${encodeURIComponent(formData.subject || 'Inquiry: ' + formData.name)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded bg-[#111111] text-[#F7F1E8] font-mono text-xs font-medium hover:bg-[#333333] transition-colors"
                  >
                    <span>LAUNCH DIRECT EMAIL</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-mono text-[#5F5A54] hover:text-[#111111] underline"
                    >
                      Reset form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {error && (
                    <div className="p-3 rounded border border-[#6F263D] bg-[#F6E8E5] text-xs font-mono text-[#6F263D]">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-[#111111] uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded bg-[#F7F1E8] border border-[#D8D0C6] focus:border-[#111111] focus:outline-none text-xs sm:text-sm text-[#111111] placeholder:text-[#8A847C] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-[#111111] uppercase tracking-wider">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@organization.com"
                        className="w-full px-3.5 py-2.5 rounded bg-[#F7F1E8] border border-[#D8D0C6] focus:border-[#111111] focus:outline-none text-xs sm:text-sm text-[#111111] placeholder:text-[#8A847C] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-[#111111] uppercase tracking-wider">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Security Assessment / Research Inquiry"
                      className="w-full px-3.5 py-2.5 rounded bg-[#F7F1E8] border border-[#D8D0C6] focus:border-[#111111] focus:outline-none text-xs sm:text-sm text-[#111111] placeholder:text-[#8A847C] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-[#111111] uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline your project scope, inquiry, or research proposal..."
                      className="w-full px-3.5 py-2.5 rounded bg-[#F7F1E8] border border-[#D8D0C6] focus:border-[#111111] focus:outline-none text-xs sm:text-sm text-[#111111] placeholder:text-[#8A847C] transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded bg-[#111111] hover:bg-[#333333] text-[#F7F1E8] font-mono text-xs font-medium tracking-wider transition-all flex items-center justify-center space-x-2"
                  >
                    <span>SEND MESSAGE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
