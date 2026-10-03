import React from 'react';
import { profile } from '../data/profile';
import { educationData } from '../data/education';

export default function About() {
  const education = educationData[0];

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#F7F1E8] border-t border-[#D8D0C6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="pb-12 mb-16 border-b border-[#D8D0C6]">
          <span className="font-mono text-xs text-[#8A847C] uppercase tracking-widest block mb-2">
            SECTION 7 / PROFILE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight">
            About Jay Goswami
          </h2>
        </div>

        {/* Editorial Split Layout: Oversized Statement Left, Detailed Paragraphs Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Oversized Serif Statement & Formal Degree (5 cols) */}
          <div className="lg:col-span-5 space-y-10">
            
            <div className="space-y-4">
              <span className="font-mono text-xs text-[#8A847C] uppercase tracking-wider block">
                CORE STATEMENT
              </span>
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] leading-tight">
                Security researcher working across web application security, penetration testing, and enterprise cloud security.
              </p>
            </div>

            {/* Formal University Degree Record */}
            <div className="p-6 rounded bg-[#FAF7F1] border border-[#D8D0C6] space-y-4">
              <span className="text-[10px] font-mono text-[#8A847C] uppercase tracking-widest block">
                ACADEMIC CREDENTIAL
              </span>

              <div>
                <h4 className="font-serif text-xl font-bold text-[#111111]">
                  {education.degree}
                </h4>
                <div className="text-xs font-mono text-[#5F5A54] pt-0.5">
                  {education.institution} &bull; {education.location}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-2 border-t border-[#D8D0C6]">
                <div>
                  <span className="text-[10px] text-[#8A847C] block uppercase">COMPLETED</span>
                  <span className="text-[#111111] font-semibold">{education.completionDate}</span>
                </div>
                <div>
                  <span className="text-[10px] text-[#8A847C] block uppercase">ACADEMIC SCORE</span>
                  <span className="text-[#111111] font-bold">{education.grade}</span>
                </div>
              </div>

              <div className="pt-2 text-xs text-[#5F5A54] font-sans leading-relaxed">
                {education.summary}
              </div>

              <div className="pt-2 border-t border-[#D8D0C6] text-[11px] font-mono text-[#5F5A54]">
                <span className="text-[#8A847C] block uppercase text-[10px]">CAPSTONE DISSERTATION</span>
                <span>{education.capstoneProject}</span>
              </div>
            </div>

            {/* Location Tag */}
            <div className="flex items-center justify-between text-xs font-mono text-[#5F5A54] pt-2">
              <span>LOCATION: PORBANDAR, GUJARAT, INDIA</span>
              <span>UTC +05:30</span>
            </div>

          </div>

          {/* Right Column: Detailed Editorial Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-sm sm:text-base text-[#5F5A54] font-sans leading-relaxed">
            
            <div className="space-y-3 pt-2">
              <h3 className="font-serif text-xl font-bold text-[#111111]">
                01. Software Engineering to Security
              </h3>
              <p>
                {profile.about.origin} Developing software platforms in Python, Django, and Node.js highlighted the reality that code cannot be considered reliable unless its operational environment and threat vectors are rigorously evaluated. This drove my deep dive into socket communications, network protocols, and x86 disassembly.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#D8D0C6]">
              <h3 className="font-serif text-xl font-bold text-[#111111]">
                02. Offensive Security &amp; Practical Rigor
              </h3>
              <p>
                {profile.about.securityFocus} I prioritized hands-on, practical examinations: earning the Practical Network Penetration Tester (PNPT) from TCM Security and eWPTv2 from INE Security. I maintain a private 4-node Active Directory laboratory to dissect domain attacks like Kerberoasting, LLMNR poisoning, and token impersonation.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#D8D0C6]">
              <h3 className="font-serif text-xl font-bold text-[#111111]">
                03. Pedagogy &amp; Academic Instruction
              </h3>
              <p>
                {profile.about.educationRole} Teaching forces clarity. Delivering university lectures on Cryptography, Cloud Computing, and Information Security requires dissecting RFC specifications, proving algorithmic integrity, and constructing hands-on student lab exercises.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#D8D0C6]">
              <h3 className="font-serif text-xl font-bold text-[#111111]">
                04. Cloud Security Specialization
              </h3>
              <p>
                {profile.about.cloudTransition} Modern security boundaries live in cloud identity and virtual network segmentation. I am dedicating focused engineering hours to Microsoft Azure architectures, identity governance (Microsoft Entra ID, PIM, Conditional Access), and preparing for the AZ-104 and AZ-500 examinations.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
