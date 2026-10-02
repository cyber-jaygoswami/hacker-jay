export const cloudSecurityLayers = [
  {
    step: "01",
    layer: "User & Client Perimeter",
    azureConcept: "Conditional Access & MFA",
    description: "External access boundary handling inbound traffic, verifying device compliance, and enforcing multi-factor challenges.",
    securityControls: [
      "Zero-Trust Identity Verification",
      "Microsoft Entra Conditional Access Policies",
      "IP Geolocation & Risk-Based Access",
      "Encrypted TLS 1.3 Transport"
    ],
    technicalNotes: "Ensures every request is strictly authenticated and validated prior to granting access to edge network assets."
  },
  {
    step: "02",
    layer: "Identity & Access Management",
    azureConcept: "Microsoft Entra ID & RBAC",
    description: "Centralized identity provider governing authentication tokens, role-based authorization, and least-privilege scoping.",
    securityControls: [
      "Privileged Identity Management (PIM) with Just-In-Time access",
      "Granular Role-Based Access Control (Azure RBAC)",
      "Service Principals & Managed Identities for compute workloads",
      "Regular Access Reviews & Inactive Account Auditing"
    ],
    technicalNotes: "Eliminates hardcoded credentials by using Azure Managed Identities directly for resource-to-resource authentication."
  },
  {
    step: "03",
    layer: "Application & Edge Layer",
    azureConcept: "Web App Gateway & WAF",
    description: "Inbound HTTP/HTTPS reverse proxy inspecting incoming traffic against web vulnerability signatures.",
    securityControls: [
      "Azure Application Gateway with WAF (OWASP Core Rule Set)",
      "Strict HTTP Strict Transport Security (HSTS)",
      "Rate Limiting & Anti-DDoS Standard Protection",
      "Content Security Policy (CSP) & Secure Cookie Flags"
    ],
    technicalNotes: "Shields back-end applications against OWASP Top 10 vectors including SQL injection, cross-site scripting, and request smuggling."
  },
  {
    step: "04",
    layer: "Cloud Infrastructure & Compute",
    azureConcept: "Virtual Networks (VNets) & Subnets",
    description: "Isolated virtual private cloud segment partitioning application runtimes, databases, and microservices.",
    securityControls: [
      "Strict Virtual Network (VNet) Subnet Segmentation",
      "Private Endpoints for Azure Storage & Database access",
      "Network Security Groups (NSGs) restricting ports & protocols",
      "Azure Bastion for Secure, Agentless RDP/SSH Management"
    ],
    technicalNotes: "Zero public IP addresses assigned directly to compute instances; all administration routed via isolated Bastion gateways."
  },
  {
    step: "05",
    layer: "Data & Secrets Protection",
    azureConcept: "Azure Key Vault & Encryption",
    description: "Hardware security module (HSM) backed store for TLS certificates, encryption keys, and confidential connection strings.",
    securityControls: [
      "Azure Key Vault Access Policies & RBAC",
      "Azure Storage Service Encryption (SSE) with Customer-Managed Keys",
      "Transparent Data Encryption (TDE) for relational databases",
      "Data-at-rest and Data-in-transit mandatory encryption"
    ],
    technicalNotes: "Automated key rotation and strict logging of every cryptographic operation to prevent unauthorized key extraction."
  },
  {
    step: "06",
    layer: "Security Operations & Telemetry",
    azureConcept: "Microsoft Sentinel & Defender for Cloud",
    description: "Continuous telemetry collection, security posture management, and SIEM/SOAR incident detection.",
    securityControls: [
      "Centralized Azure Monitor & Log Analytics Workspaces",
      "Microsoft Defender for Cloud security baseline recommendations",
      "Automated threat alert correlation via Microsoft Sentinel SIEM",
      "Immutable Audit Logging with retention policies"
    ],
    technicalNotes: "Continuous real-time anomaly detection identifying privilege escalation attempts and unauthorized network egress."
  }
];
