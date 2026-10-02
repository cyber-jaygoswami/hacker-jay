import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function SecurityConsole() {
  const [activeTab, setActiveTab] = useState('ad-lab');

  const tabs = [
    { id: 'ad-lab', label: '01 / ACTIVE DIRECTORY LAB' },
    { id: 'web-sec', label: '02 / WEB APPLICATION SECURITY' },
    { id: 'cloud-infra', label: '03 / AZURE CLOUD SECURITY' },
    { id: 'academic', label: '04 / CURRICULUM LABS' },
  ];

  const dossierData = {
    'ad-lab': {
      title: 'Active Directory Adversary Simulation Lab',
      status: 'VERIFIED ENVIRONMENT',
      category: 'Network Security & Identity Exploitation',
      specs: [
        { label: 'TOPOLOGY', value: '4 Virtual Nodes (1 DC, 2 Workstations, 1 Kali Attacker VM)' },
        { label: 'ATTACK VECTORS', value: 'Kerberoasting, LLMNR/NBT-NS Poisoning, SMB Relay, Token Impersonation' },
        { label: 'TOOLCHAIN', value: 'BloodHound, Mimikatz, Responder, Impacket, PowerShell' },
        { label: 'HARDENING CONTROLS', value: 'SMB Signing Enforcement, LLMNR Disabled, Tiered Admin Model' },
      ],
      description: 'Private virtualization environment engineered to dissect domain trust relationships, privilege escalation paths, and validate defensive Group Policy countermeasures.',
      tag: 'PNPT Assessment Scope'
    },
    'web-sec': {
      title: 'Web Application Vulnerability Analysis',
      status: 'eWPTv2 METHODOLOGY',
      category: 'Application Security & Logic Auditing',
      specs: [
        { label: 'AUDIT SCOPE', value: 'OWASP Top 10, Authentication Systems, Session State, API Endpoints' },
        { label: 'TOOLCHAIN', value: 'Burp Suite Professional, SQLMap, Wafw00f, Python, Django' },
        { label: 'DEVELOPED TOOL', value: 'HACK-TOOLS (Python/Django Multi-threaded Network Recon)' },
        { label: 'KEY VECTORS', value: 'SQL Injection, Stored/Reflected XSS, Session Fixation, Auth Bypasses' },
      ],
      description: 'Standardized assessment methodologies targeting web application logic, session integrity, and input validation boundaries in modern multi-tier web services.',
      tag: 'INE eWPTv2 Verified'
    },
    'cloud-infra': {
      title: 'Microsoft Azure Security & Governance Focus',
      status: 'PREPARING AZ-104 & AZ-500',
      category: 'Cloud Infrastructure & Zero-Trust Posture',
      specs: [
        { label: 'PLATFORM', value: 'Microsoft Azure' },
        { label: 'IDENTITY & ACCESS', value: 'Microsoft Entra ID, PIM, Conditional Access, Managed Identities' },
        { label: 'NETWORK ISOLATION', value: 'Virtual Networks (VNets), NSGs, Azure Bastion, Private Endpoints' },
        { label: 'MONITORING & SIEM', value: 'Azure Monitor, Log Analytics, Microsoft Defender for Cloud, Sentinel' },
      ],
      description: 'Systematic technical exploration and architectural modeling of enterprise cloud perimeters, least-privilege identity governance, and telemetry ingestion.',
      tag: 'Active Engineering Specialization'
    },
    'academic': {
      title: 'Academic & Professional Instruction Platform',
      status: 'ACTIVE FACULTY & INSTRUCTOR',
      category: 'Pedagogy & Lab Architecture',
      specs: [
        { label: 'ACADEMIC APPOINTMENT', value: 'IT Lecturer at VJ Modha College (May 2025 — Present)' },
        { label: 'SUBJECTS DELIVERED', value: 'Cybersecurity, Cryptography, Cloud Computing, Web Development' },
        { label: 'TRAINING ROLE', value: 'Cyber Security Instructor at MrWebSecure (Jan — Apr 2025)' },
        { label: 'CORE MODULES', value: 'MITRE ATT&CK Mapping, Threat Hunting, Phishing Investigation' },
      ],
      description: 'Designing university cybersecurity syllabi, supervising hands-on student laboratory experiments, and delivering corporate threat detection coursework.',
      tag: 'Technical Education'
    }
  };

  const current = dossierData[activeTab];

  return (
    <div className="w-full rounded-lg bg-[#FAF7F1] border border-[#D8D0C6] overflow-hidden">
      {/* Dossier Top Bar */}
      <div className="bg-[#EFE7DC] px-6 py-3 border-b border-[#D8D0C6] flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center space-x-3">
          <span className="w-2 h-2 rounded-full bg-[#111111]"></span>
          <span className="font-mono text-xs font-medium text-[#111111] tracking-wider uppercase">
            TECHNICAL DOSSIER // RESEARCH TELEMETRY
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded border border-[#D8D0C6] bg-[#FAF7F1] text-[#5F5A54]">
            LOCATION: PORBANDAR, INDIA
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#D8D0C6] bg-[#FAF7F1] overflow-x-auto text-xs font-mono no-scrollbar">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3.5 border-r border-[#D8D0C6] transition-all whitespace-nowrap focus:outline-none text-left ${
                isActive
                  ? 'bg-[#FAF7F1] text-[#111111] font-semibold border-b-2 border-b-[#111111]'
                  : 'text-[#5F5A54] hover:text-[#111111] hover:bg-[#EFE7DC]/50'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Dossier Content Body */}
      <div className="p-6 sm:p-8 space-y-6">
        
        {/* Title & Status */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-4 border-b border-[#D8D0C6]">
          <div>
            <span className="text-[11px] font-mono text-[#8A847C] uppercase tracking-widest block mb-1">
              {current.category}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111111]">
              {current.title}
            </h3>
          </div>
          <span className="self-start sm:self-auto text-[11px] font-mono px-3 py-1 rounded border border-[#111111] bg-[#111111] text-[#F7F1E8]">
            {current.status}
          </span>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {current.specs.map((spec, i) => (
            <div key={i} className="p-4 rounded border border-[#D8D0C6] bg-[#F7F1E8] space-y-1">
              <div className="text-[10px] font-mono text-[#8A847C] tracking-wider uppercase">
                {spec.label}
              </div>
              <div className="text-xs font-mono text-[#111111] leading-relaxed">
                {spec.value}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Description */}
        <div className="pt-2 text-sm text-[#5F5A54] font-sans leading-relaxed flex items-start space-x-3">
          <span className="font-mono text-xs text-[#111111] font-semibold mt-0.5">&mdash;</span>
          <p>{current.description}</p>
        </div>

      </div>

      {/* Dossier Footer */}
      <div className="bg-[#EFE7DC] px-6 py-2.5 border-t border-[#D8D0C6] flex items-center justify-between text-[11px] font-mono text-[#5F5A54]">
        <span>VERIFIED CREDENTIALS: PNPT &bull; eWPTv2 &bull; BCA 8.81</span>
        <span className="hidden sm:inline text-[#8A847C]">STRICTLY SOURCED FROM AUTHENTIC DOCUMENTATION</span>
      </div>
    </div>
  );
}
