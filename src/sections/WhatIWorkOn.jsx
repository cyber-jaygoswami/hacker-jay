import React from 'react';

export default function WhatIWorkOn() {
  const focusAreas = [
    {
      num: '01',
      title: 'Web Application Security',
      credential: 'eWPTv2 CERTIFIED',
      description: 'Systematic auditing of web services and API boundaries targeting the OWASP Top 10, complex SQL injection, authentication bypasses, broken session states, and business logic flaws.',
      technologies: ['Burp Suite Pro', 'SQLMap', 'Wafw00f', 'Django / Node.js APIs', 'OWASP Top 10']
    },
    {
      num: '02',
      title: 'Active Directory & Network Pentesting',
      credential: 'PNPT CERTIFIED',
      description: 'Adversary simulation within Windows enterprise environments, mapping privilege escalation vectors from external perimeter breaches to full domain controller compromise.',
      technologies: ['BloodHound', 'Responder', 'Mimikatz', 'Impacket', 'Kerberos', 'Nmap']
    },
    {
      num: '03',
      title: 'Cloud Security & Azure Architecture',
      credential: 'AZ-104 & AZ-500 FOCUS',
      description: 'Architectural evaluation of zero-trust cloud infrastructure, role-based access control (RBAC), virtual network segmentation, and identity governance using Microsoft Entra ID.',
      technologies: ['Microsoft Azure', 'Virtual Networks (VNets)', 'NSGs', 'Microsoft Entra ID', 'Azure Key Vault']
    },
    {
      num: '04',
      title: 'Security Operations & Threat Hunting',
      credential: 'SEC-OPS TELEMETRY',
      description: 'Adversary behavior mapping against the MITRE ATT&CK matrix, log aggregation, event correlation in Splunk, phishing email investigations, and network intrusion analysis with Snort.',
      technologies: ['Splunk SIEM', 'Snort IDS/IPS', 'EDR Telemetry', 'Wireshark', 'MITRE ATT&CK']
    },
    {
      num: '05',
      title: 'Reverse Engineering & Binary Analysis',
      credential: 'LOW-LEVEL SYSTEMS',
      description: 'Dissecting compiled executables using Ghidra static decompilation, x86 assembly analysis, control-flow reconstruction, and dynamic behavioral triage in isolated sandboxes.',
      technologies: ['Ghidra', 'x86 Assembly', 'Static & Dynamic Triage', 'Sandboxing', 'Sysinternals']
    },
    {
      num: '06',
      title: 'Cybersecurity Education & Curriculum',
      credential: 'ACADEMIC FACULTY',
      description: 'Designing college-level syllabi and supervising hands-on student laboratories in Cybersecurity, Cryptography, Cloud Computing, and Web Development at VJ Modha College.',
      technologies: ['VJ Modha College Faculty', 'Syllabus Development', 'Laboratory Design', 'MrWebSecure Instruction']
    }
  ];

  return (
    <section id="work" className="py-24 lg:py-32 bg-[#EFE7DC] border-t border-[#D8D0C6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 mb-12 border-b border-[#D8D0C6]">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs text-[#8A847C] uppercase tracking-widest block">
              SECTION 01 / DOMAINS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight">
              Areas of Technical Focus
            </h2>
          </div>
          <p className="text-sm text-[#5F5A54] font-sans max-w-md leading-relaxed">
            A structured index of disciplines where I conduct practical security assessments, engineer defensive infrastructure, and deliver technical education.
          </p>
        </div>

        {/* Editorial Typographic Grid with Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {focusAreas.map((area) => (
            <div key={area.num} className="space-y-4 flex flex-col justify-between pt-2 border-t border-[#D8D0C6]">
              
              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-2xl text-[#111111] font-light">
                    {area.num}
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-[#8A847C] uppercase">
                    {area.credential}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
                  {area.title}
                </h3>

                <p className="text-sm text-[#5F5A54] font-sans leading-relaxed">
                  {area.description}
                </p>
              </div>

              {/* Technologies List */}
              <div className="pt-4 border-t border-[#D8D0C6]/60">
                <div className="text-[10px] font-mono text-[#8A847C] uppercase tracking-wider mb-2">
                  TOOLCHAIN &amp; METHODOLOGY
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {area.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-[#FAF7F1] border border-[#D8D0C6] text-[#111111]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
