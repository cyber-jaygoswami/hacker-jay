export const researchProjects = [
  {
    id: "active-directory-lab",
    slug: "active-directory-home-lab",
    title: "Enterprise Active Directory Attack & Defense Lab",
    type: "Adversary Simulation & Research Lab",
    category: "Network Security & Active Directory",
    targetEnvironment: "Virtualized Multi-Node Domain (1 Domain Controller, 2 Domain Workstations, 1 Kali Attacker VM)",
    technologies: ["Active Directory", "BloodHound", "Responder", "Mimikatz", "Impacket", "Kerberos", "PowerShell"],
    securityConcept: "Identity-Based Lateral Movement & Domain Compromise Vectors",
    summary: "A private enterprise-grade Active Directory laboratory engineered to model real-world Windows domain compromise paths, test identity attacks, and formulate defensive hardening controls.",
    methodology: [
      "Simulated initial network positioning and passive reconnaissance across domain boundaries.",
      "Demonstrated LLMNR/NBT-NS Poisoning using Responder to capture NetNTLMv2 hashes during broadcast resolution.",
      "Executed SMB Relay attacks against endpoints lacking SMB signing requirements to obtain code execution.",
      "Performed Kerberoasting by extracting Service Principal Name (SPN) tickets from the DC for offline cracking.",
      "Exploited Windows Token Impersonation (Incognito / Potato family) for local privilege escalation.",
      "Mapped graph-based access relationships and privilege escalation paths using BloodHound."
    ],
    defensiveHardening: [
      "Enforced SMB Signing across all domain workstations via Group Policy (GPO).",
      "Disabled LLMNR and NetBIOS over TCP/IP across Windows clients.",
      "Configured Group Managed Service Accounts (gMSA) with strong 128-character auto-rotated passwords.",
      "Implemented Tiered Administrative Model to prevent high-privilege credential caching on lower-trust endpoints."
    ],
    result: "Established an isolated testing ground for validating offensive techniques against hardened Windows configurations and evaluating defensive detection telemetry.",
    status: "Active Research Lab",
    date: "2023 — Present",
    featured: true
  },
  {
    id: "hack-tools-platform",
    slug: "hack-tools-recon-platform",
    title: "HACK-TOOLS: Automated Reconnaissance & Diagnostics Platform",
    type: "Security Tooling & Web Application",
    category: "Web Application Security & Reconnaissance",
    targetEnvironment: "Web Application / Host & Network Services",
    technologies: ["Python", "Django", "Nmap", "Wafw00f", "ICMP", "Linux"],
    securityConcept: "Automated Host Discovery, Port Enumeration & WAF Fingerprinting",
    summary: "Architected and implemented as a university capstone project, HACK-TOOLS provides authenticated operators with a centralized web dashboard to perform systematic network diagnostics and perimeter reconnaissance.",
    methodology: [
      "Built a secure multi-user Django web backend managing scan sessions and host target records.",
      "Implemented ICMP echo routines to verify host availability before initiating port-level enumeration.",
      "Integrated Nmap backend scanning modules to discover exposed TCP/UDP services and service versions.",
      "Automated Web Application Firewall (WAF) detection via Wafw00f to identify perimeter filtering technologies."
    ],
    defensiveHardening: [
      "Sanitized user inputs to prevent shell injection vulnerabilities in backend subprocess calls.",
      "Implemented session authentication and user privilege boundaries.",
      "Structured scan rate controls to prevent denial-of-service against tested infrastructure."
    ],
    result: "Delivered a completed, functional web security tool demonstrating automated external asset discovery and firewall identification.",
    status: "Completed College Project",
    date: "May 2023",
    featured: true
  }
];

export const researchAreas = [
  {
    id: "cloud-sec-research",
    title: "Cloud Infrastructure & Azure Security",
    icon: "Cloud",
    tag: "Current Focus",
    description: "Investigating cloud attack surfaces, identity architecture misconfigurations in Microsoft Entra ID, Virtual Network isolation, and secure blueprint design.",
    topics: ["Azure RBAC & Conditional Access", "NSG & Firewall Architectures", "Cloud Workload Protection", "Secure Resource Deployment"]
  },
  {
    id: "web-vuln-research",
    title: "Web Application Security & OWASP",
    icon: "Globe",
    tag: "Core Specialty",
    description: "Deep-dive analysis of modern web application vulnerabilities, business logic bypasses, authentication flaws, and API security testing methodologies.",
    topics: ["eWPTv2 Methodology", "Deep SQLi & XSS Analysis", "Session Hijacking & State Management", "WAF Evasion & Countermeasures"]
  },
  {
    id: "ad-identity-research",
    title: "Active Directory & Enterprise Identity",
    icon: "Network",
    tag: "Core Specialty",
    description: "Ongoing exploration of Windows domain trust relationships, Kerberos delegation flaws, privilege escalation graphs, and defense-in-depth strategies.",
    topics: ["Kerberos Ticket Attacks", "BloodHound Path Optimization", "Tiered AD Architecture", "Privileged Access Management"]
  },
  {
    id: "detection-eng-research",
    title: "Detection Engineering & Telemetry",
    icon: "ShieldAlert",
    tag: "Educational / Defensive",
    description: "Correlating offensive adversary techniques (MITRE ATT&CK) with defensive telemetry in Splunk, Snort IDS/IPS, and endpoint detection engines.",
    topics: ["MITRE ATT&CK Mapping", "Snort Rule Formulation", "Event Log Correlation", "Phishing Triage & Forensics"]
  },
  {
    id: "reverse-eng-research",
    title: "Reverse Engineering & Binary Triage",
    icon: "Cpu",
    tag: "Low-Level Research",
    description: "Decompiling compiled binaries using Ghidra, understanding x86 assembly structures, control-flow analysis, and sandboxed dynamic execution.",
    topics: ["Ghidra Static Decompilation", "x86 Disassembly Analysis", "Sandbox Behavior Tracking", "Malware Triage Fundamentals"]
  }
];
