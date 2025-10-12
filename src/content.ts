import type { ComponentType, SVGProps } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Shield,
  Lock,
  Rocket,
  Radar,
  BookOpen,
  GraduationCap,
} from 'lucide-react';

export interface SocialLink {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
}

export interface HighlightStat {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  subtitle: string;
  summary: string;
  highlights: string[];
  tools: string[];
  link: string;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  timeframe: string;
  description: string;
  bullets: string[];
}

export interface SkillCluster {
  title: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface ImpactMetric {
  stat: string;
  detail: string;
}

export const credentialBadges = [
  'CEH',
  'CompTIA Security+',
  'AWS Solutions Architect – Associate (In Progress)',
  'Splunk Core Certified Power User',
];

export const socials: SocialLink[] = [
  {
    label: 'Email',
    icon: Mail,
    href: 'mailto:24s.chouhan@gmail.com',
  },
  {
    label: 'GitHub',
    icon: Github,
    href: 'https://github.com/asocsam',
  },
  {
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/samman-chouhan',
  },
];

export const highlightStats: HighlightStat[] = [
  {
    title: '40% Higher Detection Precision',
    description: 'Real-time telemetry pipeline across Splunk, Elastic, and Snowflake at Synapse.',
  },
  {
    title: 'Top 6% – National Cyber League',
    description: 'Ranked among 4,199 competitors across seven CTF domains (Spring 2024).',
  },
  {
    title: '55% Faster Analytics Shipping',
    description: 'Detection-as-code program with 120+ Sigma rules and GitLab CI/CD automations.',
  },
];

export const projects: Project[] = [
  {
    title: 'Blue Team Detection',
    subtitle: 'Detection-as-code engineering',
    summary:
      '120+ Sigma rules, Splunk detections, and analytics-as-code pipelines aligning to MITRE ATT&CK for fintech workloads.',
    highlights: [
      'Detection pipelines that transform research into reusable analytics content.',
      'Dashboards and hunt workbooks that surface high-fidelity signals for defenders.',
      'Automation scripts to validate detections against emulated adversary behaviors.',
    ],
    tools: ['Sigma', 'Splunk', 'Elastic', 'Python'],
    link: 'https://github.com/asocsam/blue-team-detection',
  },
  {
    title: 'Cloud Security Automation',
    subtitle: 'Guardrails for AWS environments',
    summary:
      'Infrastructure-as-code baselines, compliance automations, and response playbooks enforcing zero-trust guardrails.',
    highlights: [
      'Automated IAM baseline enforcing least privilege across core services.',
      'Config and CloudTrail monitoring patterns for continuous compliance.',
      'Incident response playbooks integrating with native AWS detections.',
    ],
    tools: ['AWS', 'Terraform', 'CloudFormation', 'Python'],
    link: 'https://github.com/asocsam/cloud-security-projects',
  },
  {
    title: 'SIEM Threat Detection',
    subtitle: 'Operational dashboards & analytics',
    summary:
      'Splunk, Sentinel, and Elastic content packs with SLAs, KPIs, and automation to keep SOC teams ahead of threats.',
    highlights: [
      'Correlation searches mapped to ATT&CK tactics for rapid triage.',
      'Visual storytelling dashboards for executive and SOC consumption.',
      'Detection content versioned and tested to stay ahead of evolving threats.',
    ],
    tools: ['Splunk', 'Elastic', 'KQL', 'Sigma'],
    link: 'https://github.com/asocsam/SIEM-Projects-Dashboards',
  },
  {
    title: 'Offensive Security Projects',
    subtitle: 'Adversary emulation labs',
    summary:
      'Red team tooling, exploit research, and hands-on lab writeups sharpening adversarial thinking for defenders.',
    highlights: [
      'End-to-end attack chains exercised against vulnerable lab infrastructure.',
      'Custom payload development with staged command-and-control.',
      'Writeups documenting methodology, mitigations, and defender takeaways.',
    ],
    tools: ['Burp Suite', 'Metasploit', 'Python', 'Bash'],
    link: 'https://github.com/asocsam/offensive-red-team-projects',
  },
];

export const experience: ExperienceItem[] = [
  {
    title: 'Network & Security Engineer',
    organization: 'Focus Eye Technocraft · Indore, India',
    timeframe: 'Aug 2022 – Dec 2023',
    description:
      'Architected secure AWS and hybrid infrastructures while automating detection, patching, and access controls for distributed clients.',
    bullets: [
      'Strengthened AWS GuardDuty & Security Hub pipelines, cutting false positives by 40% and elevating detection fidelity.',
      'Automated vulnerability scanning and patching with AWS Systems Manager + Lambda, shrinking remediation time by 70%.',
      'Deployed IAM segmentation and VPN zero-trust access for 50+ accounts, eliminating credential sprawl and lateral exposure.',
      'Executed Nmap/Nessus-driven threat scans uncovering 30+ high-risk flaws, reducing total attack surface by 35%.',
      'Unified CloudTrail, GuardDuty, and VPC Flow telemetry in Splunk dashboards, slashing investigation time by 20%.',
    ],
  },
  {
    title: 'Cybersecurity Analyst Intern',
    organization: 'Avalanche Infotech Pvt · Indore, India',
    timeframe: 'Jan 2022 – Jul 2022',
    description:
      'Delivered end-to-end SOC automation and visibility for AWS workloads using Splunk, SOAR, and EDR integrations.',
    bullets: [
      'Built Splunk ES dashboards for CloudTrail, VPC Flow, and GuardDuty, accelerating detection by 35%.',
      'Automated incident response via Splunk SOAR + Lambda, reducing remediation effort by 80%.',
      'Deployed Security Hub & Inspector across EC2/S3, achieving CIS compliance and 50% fewer misconfigs.',
      'Integrated SentinelOne EDR with CloudWatch + Splunk, improving investigation throughput by 40%.',
    ],
  },
  {
    title: 'Bug Bounty Hunter',
    organization: 'HackerOne & Bugcrowd (Independent)',
    timeframe: '2021 – Present',
    description:
      'Disclosed exploitable web and cloud vulnerabilities for global programs with reproducible PoCs and technical write-ups.',
    bullets: [
      'Identified and responsibly disclosed XSS, SSRF, and IDOR flaws with full impact assessments and mitigation guidance.',
      'Automated reconnaissance using Nuclei, Subfinder, and custom Python scripts, raising valid-finding rate by 25%.',
      'Mapped findings to CWE and MITRE ATT&CK, enhancing consistency and triage clarity for vendor programs.',
    ],
  },
  {
    title: 'Independent Security Researcher',
    organization: 'Personal Red & Blue Team Labs',
    timeframe: '2020 – Present',
    description:
      'Developing detection engineering pipelines, adversary emulation environments, and SIEM analytics for purple-team research.',
    bullets: [
      'Built AWS-hosted Caldera & Atomic Red Team lab integrated with Wazuh + Splunk for end-to-end telemetry testing.',
      'Authored Sigma rules mapped to ATT&CK tactics for Sysmon and Winlogbeat events, validating detections across multiple datasets.',
      'Automated enrichment and alert correlation workflows, enabling near-real-time incident triage and response simulation.',
    ],
  },
];


export const skills: SkillCluster[] = [
  {
    title: 'Cloud & Platform Security',
    items: ['AWS', 'Azure', 'GCP', 'Terraform', 'CloudFormation'],
  },
  {
    title: 'Detection & Analytics Engineering',
    items: ['Splunk', 'Elastic', 'Snowflake', 'Sigma', 'MITRE ATT&CK'],
  },
  {
    title: 'Threat Detection & Response',
    items: ['Threat Hunting', 'Incident Response', 'SOAR', 'Playbook Automation'],
  },
  {
    title: 'Security Automation & Scripting',
    items: ['Python', 'PowerShell', 'Bash', 'GitLab CI/CD', 'API Integrations'],
  },
  {
    title: 'Offensive & Purple Teaming',
    items: ['AttackIQ', 'Atomic Red Team', 'Burp Suite', 'Metasploit', 'TryHackMe Top 1%'],
  },
  {
    title: 'Governance & Risk Management',
    items: ['NIST CSF', 'ISO 27001', 'SOC 2', 'Risk Assessments', 'Security Awareness'],
  },
];

export const certifications: Certification[] = [
  {
    name: 'Certified Ethical Hacker',
    issuer: 'EC-Council',
    icon: Shield,
    color: 'from-pink-500/80 to-pink-400/40',
  },
  {
    name: 'CompTIA Security+',
    issuer: 'CompTIA',
    icon: Lock,
    color: 'from-cyan-500/80 to-cyan-400/40',
  },
  {
    name: 'AWS Solutions Architect (In Progress)',
    issuer: 'Amazon Web Services',
    icon: Rocket,
    color: 'from-emerald-500/80 to-emerald-400/40',
  },
];

export const impactMetrics: ImpactMetric[] = [
  {
    stat: '40% ↑ Detection Accuracy',
    detail: 'Realigned telemetry and analytics pipelines to boost signal fidelity across Splunk, Elastic, and Snowflake.',
  },
  {
    stat: '70% ↓ False Positives',
    detail: 'Tuned detections and SOAR playbooks for SaaS clients, accelerating analyst triage and containment.',
  },
  {
    stat: '35% ↑ Control Coverage',
    detail: 'Orchestrated purple team simulations to validate MITRE ATT&CK defenses and harden response workflows.',
  },
];

export const achievements: Achievement[] = [
  {
    title: 'Purple Team Program Lead',
    description: 'Ran AttackIQ and Atomic Red Team exercises to close detection gaps by 35% across critical controls.',
    icon: Radar,
  },
  {
    title: 'Detection Content Author',
    description: 'Published 120+ Sigma detections, Splunk analytics, and response runbooks used by fintech and SaaS teams.',
    icon: BookOpen,
  },
  {
    title: 'Graduate Research & Mentorship',
    description: 'M.S. Cybersecurity Engineering (Illinois Tech, Dec 2025) guiding peers on threat hunting and detection labs.',
    icon: GraduationCap,
  },
];
