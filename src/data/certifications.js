export const certificationsData = {
  completed: [
    {
      id: "ewptv2",
      title: "eWPT — Web Application Penetration Tester",
      issuer: "INE Security / eLearnSecurity",
      issueDate: "May 16, 2024",
      credentialId: "103850755",
      status: "COMPLETED",
      badgeColor: "cyan",
      image: "/assets/certifications/ewpt-certificate.png",
      pdf: null,
      summary: "Rigorous practical certification validating end-to-end web application security assessment, OWASP Top 10 vulnerabilities, complex exploitation techniques, and professional remediation reporting.",
      domains: [
        "OWASP Top 10 Exploitation & Mitigation",
        "Deep SQL Injection & Cross-Site Scripting (XSS)",
        "Authentication & Session Management Flaws",
        "Business Logic Flaws & API Security",
        "Burp Suite & Automated/Manual Web Auditing"
      ]
    },
    {
      id: "pnpt",
      title: "PNPT — Practical Network Penetration Tester",
      issuer: "TCM Security, Inc.",
      issueDate: "December 25, 2023",
      credentialId: "90534111",
      status: "COMPLETED",
      badgeColor: "blue",
      image: "/assets/certifications/pnpt-certificate.png",
      pdf: "/assets/certifications/pnpt-certificate.pdf",
      summary: "Comprehensive practical 5-day hands-on penetration testing assessment covering external reconnaissance, network perimeter compromise, and complete Active Directory exploitation.",
      domains: [
        "Open-Source Intelligence (OSINT) & External Pentesting",
        "Active Directory Exploitation & Privilege Escalation",
        "Kerberoasting, LLMNR/NBT-NS Poisoning, Token Manipulation",
        "Pivoting, Lateral Movement & AV Evasion Fundamentals",
        "Formal Commercial Penetration Test Report Delivery"
      ]
    }
  ],
  
  currentlyPreparing: [
    {
      id: "az-104",
      code: "AZ-104",
      title: "Microsoft Azure Administrator",
      issuer: "Microsoft",
      status: "CURRENTLY PREPARING",
      target: "In Progress",
      summary: "Deepening practical hands-on engineering across core cloud infrastructure, hybrid networking, virtual machines, storage accounts, and role-based access control.",
      focusAreas: [
        "Azure Identities & Governance (Microsoft Entra ID)",
        "Configuring & Managing Virtual Networks and Subnets",
        "Compute Infrastructure (Virtual Machines, Containers)",
        "Implementing & Managing Cloud Storage & Backup",
        "Azure Monitor, Log Analytics & Resource Governance"
      ]
    },
    {
      id: "az-500",
      code: "AZ-500",
      title: "Microsoft Azure Security Technologies",
      issuer: "Microsoft",
      status: "CURRENTLY PREPARING",
      target: "In Progress",
      summary: "Targeted specialization in cloud security posture, zero-trust identity architectures, perimeter defense, encryption at rest/in transit, and cloud detection engineering.",
      focusAreas: [
        "Managing Azure Identity & Access Security (PIM, Conditional Access)",
        "Network Security (NSGs, Azure Firewall, Bastion, DDoS)",
        "Host & Container Security (Defender for Cloud)",
        "Securing Data & Key Management (Azure Key Vault)",
        "Security Operations & SIEM Integration (Microsoft Sentinel)"
      ]
    }
  ],

  planned: [
    {
      id: "oscp",
      code: "OSCP",
      title: "Offensive Security Certified Professional",
      issuer: "OffSec",
      status: "PLANNED",
      target: "Roadmap Objective",
      summary: "Planned advanced offensive security certification focusing on rigorous manual penetration testing, privilege escalation, and lateral movement in enterprise target environments.",
      focusAreas: [
        "Advanced Exploit Customization",
        "Complex Active Directory Domain Attacks",
        "Custom Tunneling & Evasion"
      ]
    }
  ]
};
