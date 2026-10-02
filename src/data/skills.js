export const skillsData = [
  {
    category: "Offensive Security & Penetration Testing",
    id: "offensive-security",
    description: "Methodologies and tooling for network vulnerability assessment, Active Directory attack paths, and application auditing.",
    skills: [
      { name: "Active Directory Pentesting", context: "Kerberoasting, LLMNR/NBT-NS poisoning, SMB relay, token impersonation" },
      { name: "Network Penetration Testing", context: "Perimeter enumeration, port scanning, vulnerability discovery, service exploitation" },
      { name: "Web Application Assessment", context: "OWASP Top 10, SQLi, XSS, broken auth, session management, CSRF" },
      { name: "Reconnaissance & Enumeration", context: "OSINT gathering, service fingerprinting, WAF identification, network mapping" }
    ],
    tools: ["Nmap", "Burp Suite", "BloodHound", "Responder", "Mimikatz", "Metasploit", "SQLMap", "Wireshark", "Nessus"]
  },
  {
    category: "Cloud Computing & Cloud Security",
    id: "cloud-security",
    description: "Cloud infrastructure principles, secure architecture design, and active specialization in Microsoft Azure ecosystems.",
    skills: [
      { name: "Cloud Architecture Fundamentals", context: "Virtual networks, compute provisioning, storage isolation, multi-tier architectures" },
      { name: "Cloud Identity & Access", context: "Microsoft Entra ID, RBAC principles, least-privilege authorization policies" },
      { name: "Cloud Network Defense", context: "Network Security Groups (NSGs), firewall concepts, secure bastion access" },
      { name: "Cloud Security Posture", context: "Active preparation for AZ-104 (Azure Administrator) and AZ-500 (Azure Security)" }
    ],
    tools: ["Microsoft Azure (AZ-104 / AZ-500 In Progress)", "Virtual Networks (VNet)", "NSGs", "Entra ID", "Cloud Storage"]
  },
  {
    category: "Security Operations & Detection",
    id: "sec-ops",
    description: "Threat hunting, telemetry analysis, event correlation, and defensive framework mapping.",
    skills: [
      { name: "SIEM & Log Analysis", context: "Splunk search processing, event correlation, detection rules, system log auditing" },
      { name: "Intrusion Detection & EDR", context: "Snort IDS/IPS signature analysis, alert triage, endpoint behavior monitoring" },
      { name: "Threat Hunting & Frameworks", context: "MITRE ATT&CK matrix mapping, phishing email analysis, incident response triage" }
    ],
    tools: ["Splunk", "Snort IDS/IPS", "EDR Solutions", "Wireshark", "MITRE ATT&CK Matrix"]
  },
  {
    category: "Reverse Engineering & Malware Analysis",
    id: "reverse-engineering",
    description: "Decompilation, binary triage, and behavioral analysis of compiled executables.",
    skills: [
      { name: "Static Binary Analysis", context: "Control flow inspection, disassembly, string extraction, Ghidra decompilation" },
      { name: "Dynamic Analysis & Sandboxing", context: "Runtime execution tracing, process monitoring, behavioral triage in isolated sandboxes" },
      { name: "Low-Level Systems", context: "x86 architecture fundamentals, memory layout, stack frames, register operations" }
    ],
    tools: ["Ghidra", "x86 Assembly", "Isolated Sandboxing Environments", "Sysinternals"]
  },
  {
    category: "Software Development & Scripting",
    id: "development",
    description: "Custom security tooling, automated diagnostic scripts, and full-stack web applications.",
    skills: [
      { name: "Python & Security Automation", context: "Custom network scripts, protocol interaction, Django web framework development" },
      { name: "JavaScript & Modern Web", context: "Full-stack development with Node.js, Express, React, and RESTful APIs" },
      { name: "Database Engineering", context: "Relational data modeling in MySQL and document storage in MongoDB" },
      { name: "x86 Assembly", context: "Low-level system comprehension, instruction sets, binary reverse engineering" }
    ],
    tools: ["Python", "Django", "JavaScript", "Node.js with Express", "MySQL", "MongoDB", "x86 Assembly"]
  },
  {
    category: "Operating Systems & Lab Environments",
    id: "systems",
    description: "Hands-on administration, virtualization, and testing across enterprise OS environments.",
    skills: [
      { name: "Linux Administration", context: "Debian, Ubuntu, Kali Linux, bash scripting, permission models, system hardening" },
      { name: "Windows Server & Domain Services", context: "Active Directory domain controllers, group policy, workstation management, Kerberos" },
      { name: "Virtualization & Testing Labs", context: "Multi-node lab provisioning for attack and defense simulation" }
    ],
    tools: ["Linux (Kali, Ubuntu)", "Windows Server", "Active Directory (AD DS)", "VirtualBox / VMware"]
  }
];
