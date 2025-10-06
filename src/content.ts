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
  Target,
  CloudCog,
  Command,
  ShieldCheck,
  LineChart,
  Users,
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

export interface NavLink {
  label: string;
  href: string;
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

export interface FocusArea {
  title: string;
  description: string;
  bullets: string[];
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  accent: string;
}

export interface HeroHighlight {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const credentialBadges = [
  'CEH',
  'CompTIA Security+',
  'AWS Solutions Architect – Associate (In Progress)',
  'Splunk Core Certified Power User',
  'Purple Team Program Lead',
];

export const heroHighlights: HeroHighlight[] = [
  {
    title: 'Detection Engineering Leadership',
    description:
      'Built analytics-as-code frameworks, telemetry strategy, and governance models that keep fintech SOCs ahead of threats.',
    icon: ShieldCheck,
  },
  {
    title: 'Cloud Guardrail Architecture',
    description:
      'Codified AWS multi-account guardrails, incident playbooks, and compliance automation supporting hyper-growth teams.',
    icon: LineChart,
  },
  {
    title: 'Mentorship & Stakeholder Trust',
    description:
      'Trusted partner to engineering, product, and executive stakeholders with a record of elevating analyst teams.',
    icon: Users,
  },
];

export const navLinks: NavLink[] = [
  { label: 'Overview', href: '#top' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Leadership', href: '#focus' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
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
    title: '120+ Analytics Operationalized',
    description: 'Detection-as-code program shipping Sigma, Splunk, and Elastic content with CI/CD governance.',
  },
  {
    title: '40% Lift in Detection Fidelity',
    description: 'Unified telemetry architecture across Splunk, Elastic, and Snowflake to raise precision.',
  },
  {
    title: 'Top 6% National Cyber League',
    description: 'Ranked among 4,199 competitors across seven CTF disciplines (Spring 2024).',
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
    title: 'Senior Security Engineer',
    organization: 'Synapse LLC',
    timeframe: 'Jan 2024 – Present',
    description:
      'Leading detection engineering, purple team automation, and telemetry strategy for a fintech security program.',
    bullets: [
      'Built a real-time pipeline aggregating 50TB+ telemetry across Splunk, Elastic, and Snowflake, lifting detection accuracy by 40%.',
      'Deployed detection-as-code workflows in GitLab CI/CD with 120+ Sigma rules, trimming analytics release cycles by 55%.',
      'Ran AttackIQ and Atomic Red Team simulations that increased control coverage by 35% and tuned response playbooks.',
    ],
  },
  {
    title: 'Security Operations Engineer',
    organization: 'CloudOne Managed Security',
    timeframe: 'Aug 2022 – Jan 2024',
    description:
      'Owned SIEM engineering, threat hunting, and client reporting for SaaS and cloud-native environments.',
    bullets: [
      'Maintained Splunk pipelines serving 25 SaaS clients and 35TB/day ingest with 99% MITRE ATT&CK coverage.',
      'Authored 85 detections and 18 SOAR playbooks, cutting response times by 30% and false positives by 70%.',
      'Delivered executive-ready threat hunting briefings and exposure reviews that drove board-level risk reductions.',
    ],
  },
  {
    title: 'Security Operations Center Analyst',
    organization: 'Tech Guard Team',
    timeframe: 'May 2021 – Aug 2022',
    description:
      'Triaged incidents, tuned SIEM analytics, and coordinated remediation for enterprise and public sector customers.',
    bullets: [
      'Investigated 2.5K+ incidents annually across Splunk, Sentinel, and QRadar with a 98% SLA adherence rate.',
      'Implemented hunt playbooks that surfaced credential abuse, ransomware precursors, and BEC tradecraft.',
      'Partnered with IR teams to streamline evidence capture and automation, shrinking containment time by 25%.',
    ],
  },
  {
    title: 'Cybersecurity Analyst Co-op',
    organization: 'SecureFuture Labs',
    timeframe: 'Jan 2021 – May 2021',
    description:
      'Supported governance, risk, and cloud security assessments for manufacturing and healthcare clients.',
    bullets: [
      'Documented NIST CSF maturity gaps and remediation roadmaps adopted by CISO leadership.',
      'Automated evidence collection scripts in Python that reduced audit preparation effort by 20 hours per engagement.',
      'Collaborated on AWS security baselines leveraging Config, GuardDuty, and IAM least-privilege patterns.',
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

export const focusAreas: FocusArea[] = [
  {
    title: 'Detection Engineering Leadership',
    description:
      'Productizing threat research into resilient analytics portfolios that defenders can trust.',
    bullets: [
      'Operational owner for detection-as-code and CI/CD governance.',
      'Backlog prioritization driven by threat intel, emulation, and SOC feedback loops.',
      'Mentor analysts on translating adversary tradecraft into measurable controls.',
    ],
    icon: Command,
    accent: 'from-cyan-500/60 to-blue-500/40',
  },
  {
    title: 'Cloud Security Architecture',
    description:
      'Designing secure guardrails for AWS, Azure, and hybrid SaaS footprints without slowing delivery.',
    bullets: [
      'Codify IAM, network, and data protection baselines as reusable templates.',
      'Instrument compliance automation and drift detection across multi-account estates.',
      'Embed incident response runbooks with native cloud detections and SOAR integrations.',
    ],
    icon: CloudCog,
    accent: 'from-emerald-500/60 to-teal-500/40',
  },
  {
    title: 'Threat Operations & Response',
    description:
      'Owning the full loop from hunt hypotheses to executive reporting and remediation orchestration.',
    bullets: [
      'Drive purple team programs validating MITRE ATT&CK coverage and response readiness.',
      'Author executive-ready intelligence briefs and metrics that influence board conversations.',
      'Automate collection, enrichment, and handoffs to shrink mean time to contain incidents.',
    ],
    icon: Target,
    accent: 'from-purple-500/60 to-fuchsia-500/40',
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
