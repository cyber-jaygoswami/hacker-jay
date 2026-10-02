export const attackSurfaceNodes = [
  {
    id: "perimeter",
    title: "1. Untrusted Internet",
    tagline: "External Attack Vector",
    description: "Inbound traffic originated by untrusted remote entities, automated scanners, and potential adversaries.",
    threatVectors: [
      "Distributed Denial of Service (DDoS)",
      "Automated vulnerability and port scanners",
      "Credential stuffing & brute force attempts",
      "Network routing / DNS hijacking"
    ],
    defensiveControls: [
      "Edge Web Application Firewall (WAF)",
      "DNSSEC & Cloudflare / Azure DDoS Protection",
      "Strict TLS 1.3 protocol negotiation",
      "Geo-blocking and rate limiting on edge routers"
    ],
    securityDomain: "Edge & Transport Security"
  },
  {
    id: "webapp",
    title: "2. Web Application",
    tagline: "Client-Facing Presentation Layer",
    description: "The publicly accessible web interface where user requests are parsed, validated, and processed.",
    threatVectors: [
      "OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF)",
      "Server-Side Request Forgery (SSRF)",
      "File upload flaws and path traversal",
      "Sensitive data exposure in HTML/JS source"
    ],
    defensiveControls: [
      "Context-aware input validation and parameterized queries",
      "Strict Content Security Policy (CSP) & CORS headers",
      "Secure cookie attributes (HttpOnly, Secure, SameSite=Strict)",
      "Static and Dynamic Application Security Testing (SAST/DAST)"
    ],
    securityDomain: "Application Security (AppSec)"
  },
  {
    id: "auth",
    title: "3. Identity & Authentication",
    tagline: "Trust Verification Boundary",
    description: "The authentication mechanism validating principal identity and minting session authorization tokens.",
    threatVectors: [
      "Credential harvesting & password spraying",
      "Broken Object Level Authorization (BOLA)",
      "Session fixation and token replay attacks",
      "Lack of multi-factor enforcement"
    ],
    defensiveControls: [
      "Phishing-resistant Multi-Factor Authentication (MFA)",
      "Cryptographically signed short-lived JWT / OAuth2 tokens",
      "Strict session invalidation upon logout / timeout",
      "Risk-based adaptive step-up authentication"
    ],
    securityDomain: "Identity & Access Management (IAM)"
  },
  {
    id: "api",
    title: "4. REST / Microservices API",
    tagline: "Application Business Logic",
    description: "The programmatic interface handling core business transactions, data exchange, and backend services.",
    threatVectors: [
      "Mass assignment vulnerabilities",
      "Broken Function Level Authorization (BFLA)",
      "API rate limiting bypasses & resource exhaustion",
      "Improper error handling exposing internal stack traces"
    ],
    defensiveControls: [
      "API Gateway schema validation against OpenAPI specs",
      "Per-client request throttling and token bucket quotas",
      "Mutual TLS (mTLS) between internal microservices",
      "Sanitized error responses returning generic codes"
    ],
    securityDomain: "API & Service Mesh Security"
  },
  {
    id: "cloud",
    title: "5. Cloud Infrastructure",
    tagline: "Compute, Virtual Networks & Storage",
    description: "The underlying virtualization, containers, virtual networks, and object storage holding application state.",
    threatVectors: [
      "Over-privileged IAM roles & service principal abuse",
      "Publicly exposed storage buckets / blobs",
      "Unrestricted network egress and lateral movement",
      "Unpatched hypervisor or container breakout"
    ],
    defensiveControls: [
      "Principle of Least Privilege via Azure RBAC / AWS IAM",
      "Private Endpoints with zero direct public internet routing",
      "Immutable storage policies with customer-managed keys (CMK)",
      "Automated Cloud Security Posture Management (CSPM)"
    ],
    securityDomain: "Cloud Security Architecture"
  },
  {
    id: "monitoring",
    title: "6. Telemetry & SIEM",
    tagline: "Detection & Incident Response",
    description: "The central observability pipeline correlating logs, telemetry, and alerts across every architecture tier.",
    threatVectors: [
      "Attacker log tampering / audit trail evasion",
      "Alert fatigue causing missed indicators of compromise (IoC)",
      "Blind spots due to unmonitored endpoints or shadow IT",
      "Delayed mean-time-to-detect (MTTD)"
    ],
    defensiveControls: [
      "Centralized immutable log streaming (Splunk / Azure Monitor)",
      "MITRE ATT&CK mapped detection rules and automated alerts",
      "Endpoint Detection & Response (EDR) telemetry collection",
      "Automated incident response playbooks (SOAR)"
    ],
    securityDomain: "Security Operations & Detection Engineering"
  }
];
