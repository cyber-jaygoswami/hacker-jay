import React from 'react';

export default function TeachingEducation() {
  const academicPillars = [
    {
      num: '01',
      title: 'Information Security & Cryptography',
      description: 'Delivering lectures and rigorous mathematical proofs covering symmetric/asymmetric encryption, hash algorithms, PKI, digital signatures, and key exchange mechanics.',
      topics: ['Cryptographic Algorithms', 'Cipher Suites & SSL/TLS', 'Integrity & Hashing', 'Key Lifecycle Management']
    },
    {
      num: '02',
      title: 'Cloud Computing & Infrastructure',
      description: 'Instructing students on enterprise virtualization principles, multi-tenant architectures, deployment pipelines, and cloud security defense baselines.',
      topics: ['Virtualization Models', 'Cloud Architecture Patterns', 'Deployment Automation', 'Cloud Security Foundations']
    },
    {
      num: '03',
      title: 'Computer Networks & Protocol Security',
      description: 'Conducting practical packet analysis with Wireshark, dissecting TCP/IP handshakes, routing protocols, subnetting calculations, and firewall deployment.',
      topics: ['TCP/IP Protocol Stack', 'Packet Analysis (Wireshark)', 'Subnet Architecture', 'Firewalls & Network Defense']
    },
    {
      num: '04',
      title: 'Secure Systems & Web Development',
      description: 'Training undergraduate students in secure software engineering, client-server communications, session validation, and web vulnerability prevention.',
      topics: ['Secure Coding Practices', 'Web Architectures', 'API Security Controls', 'Database Defense (SQL/NoSQL)']
    }
  ];

  const practicalHighlights = [
    {
      label: 'MITRE ATT&CK Matrix',
      detail: 'Adversary behavior mapping across initial compromise, execution, lateral movement, and command-and-control.'
    },
    {
      label: 'OWASP Top 10 Web Triage',
      detail: 'Hands-on auditing demonstrations targeting injection flaws, broken authorization, SSRF, and security misconfigurations.'
    },
    {
      label: 'Incident Investigation',
      detail: 'Phishing email header dissection, malicious artifact triage, and indicator of compromise (IoC) extraction.'
    },
    {
      label: 'Practical Laboratory Design',
      detail: 'Architecting safe, isolated virtualization environments where students practice Linux administration and defensive hardening.'
    }
  ];

  return (
    <section id="education-work" className="py-24 lg:py-32 bg-[#EFE7DC] border-t border-[#D8D0C6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 mb-16 border-b border-[#D8D0C6]">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-xs text-[#8A847C] uppercase tracking-widest block">
              SECTION 03 / PEDAGOGY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111111] tracking-tight leading-tight">
              Teaching &amp;<br />
              <span className="italic font-normal font-serif">Technical Education</span>
            </h2>
          </div>
          <div className="max-w-md space-y-2">
            <p className="text-sm text-[#111111] font-serif italic text-base leading-relaxed">
              Education is a cornerstone of my technical practice.
            </p>
            <p className="text-xs sm:text-sm text-[#5F5A54] font-sans leading-relaxed">
              As an IT Lecturer at VJ Modha College and former trainer at MrWebSecure, I synthesize complex offensive concepts into structured university curricula and practical laboratory exercises.
            </p>
          </div>
        </div>

        {/* 4 Academic Pillars (Editorial 2-Column Split) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {academicPillars.map((pillar) => (
            <div key={pillar.num} className="pt-4 border-t border-[#D8D0C6] space-y-4">
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-2xl text-[#111111] font-light">
                  {pillar.num}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A847C]">
                  CURRICULUM PILLAR
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
                {pillar.title}
              </h3>

              <p className="text-sm text-[#5F5A54] font-sans leading-relaxed">
                {pillar.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {pillar.topics.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-[#FAF7F1] border border-[#D8D0C6] text-[#111111]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Laboratory Architecture & Training Impact Box */}
        <div className="p-8 sm:p-12 rounded bg-[#FAF7F1] border border-[#D8D0C6] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-[#D8D0C6]">
            <div>
              <span className="text-[10px] font-mono text-[#8A847C] uppercase tracking-widest block mb-1">
                PRACTICAL INSTRUCTIONAL DESIGN
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111]">
                Laboratory Architecture &amp; Practical Training
              </h4>
            </div>
            <div className="text-xs font-mono text-[#5F5A54]">
              VJ MODHA COLLEGE &amp; MRWEBSECURE
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {practicalHighlights.map((mod, idx) => (
              <div key={idx} className="space-y-2">
                <span className="font-mono text-xs font-semibold text-[#111111] block">
                  [{idx + 1}] {mod.label}
                </span>
                <p className="text-xs text-[#5F5A54] font-sans leading-relaxed">
                  {mod.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
