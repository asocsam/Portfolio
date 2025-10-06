import {
  Activity,
  BookOpen,
  Brain,
  CheckCircle2,
  Github,
  GraduationCap,
  Linkedin,
  Lock,
  Mail,
  Radar,
  Rocket,
  Shield,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from './samman.png';
import heroTexture from './IMG_3955.jpg';

const socials = [
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

const highlightStats = [
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

const projects = [
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

const experience = [
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

const skills = [
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

// Tailwind gradient utilities referenced dynamically in certification data.
// Safelist: from-pink-500/80 to-pink-400/40 from-cyan-500/80 to-cyan-400/40 from-emerald-500/80 to-emerald-400/40
const certifications = [
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

const impactMetrics = [
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

const achievements = [
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

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <img
          src={heroTexture}
          alt="Cybersecurity abstract texture"
          className="pointer-events-none select-none absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_55%)]" />
        <header className="relative z-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-24 lg:flex-row lg:items-center">
            <motion.div
              className="flex-1 space-y-8"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-1 text-sm uppercase tracking-[0.3em] text-cyan-200">
                Seasoned Security Engineer
                <span className="h-1 w-1 rounded-full bg-cyan-300" />
                Cloud & Detection Specialist
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  Samman Chouhan
                </h1>
                <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
                  Seasoned security engineer delivering cloud-native defenses, detection pipelines, and purple team
                  automation for fintech, SaaS, and critical infrastructure teams. Advancing research through the M.S.
                  Cybersecurity Engineering program at Illinois Institute of Technology (Dec 2025).
                </p>
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-200">
                CEH • Security+ • AWS Solutions Architect (In Progress)
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {highlightStats.map((stat) => (
                  <div
                    key={stat.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-cyan-400/40 hover:bg-cyan-500/10"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-200">{stat.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{stat.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:24s.chouhan@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:scale-[1.01]"
                >
                  <Mail className="h-4 w-4" />
                  Let&apos;s Collaborate
                </a>
                <div className="flex items-center gap-3">
                  {socials.slice(1).map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-200"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
                <div className="text-sm text-slate-400">Chicago, IL · 312-866-4722</div>
              </div>
            </motion.div>
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 opacity-60 blur-3xl" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/60 p-2 backdrop-blur">
                  <div className="overflow-hidden rounded-[20px] border border-white/10">
                    <img src={profileImg} alt="Samman Chouhan" className="h-full w-full object-cover" />
                  </div>
                  <div className="mt-4 space-y-2 rounded-[20px] border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-cyan-200">@asocsam</span>
                      <div className="inline-flex items-center gap-1 rounded-full bg-cyan-500/10 px-3 py-1 text-[11px] uppercase tracking-wide text-cyan-200">
                        TryHackMe Top 1%
                      </div>
                    </div>
                    <p className="leading-relaxed">
                      Focused on bridging offensive insights with defensive engineering—sharing tooling, writeups, and
                      automation that help teams ship resilient security capabilities faster.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </header>
      </div>

      <main className="relative z-10 space-y-24 pb-24">
        <Section title="Credentials & Impact" icon={Shield} eyebrow="Proof at a glance">
          <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h3 className="text-lg font-semibold text-cyan-200">Certifications</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <CertificationCard key={cert.name} cert={cert} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {impactMetrics.map((metric) => (
                <ImpactCard key={metric.stat} metric={metric} />
              ))}
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-slate-900 to-slate-950 p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-purple-200">Signature Highlights</p>
                <div className="mt-4 grid gap-4">
                  {achievements.map((achievement) => (
                    <AchievementCard key={achievement.title} achievement={achievement} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Signature Projects" icon={Terminal} eyebrow="GitHub Spotlights">
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section title="Experience Blueprint" icon={Brain} eyebrow="How I build security" background="from-blue-500/10 via-slate-900 to-slate-950">
          <div className="grid gap-6 md:grid-cols-2">
            {experience.map((item) => (
              <ExperienceCard key={item.title} item={item} />
            ))}
          </div>
        </Section>

        <Section title="Technical Arsenal" icon={Zap} eyebrow="Depth & breadth" background="from-slate-900 via-slate-950 to-slate-950">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((cluster) => (
              <SkillCard key={cluster.title} cluster={cluster} />
            ))}
          </div>
        </Section>

        <Section title="Let&apos;s Build Resilient Security" icon={Rocket} eyebrow="Reach out" center>
          <div className="mx-auto max-w-3xl text-center text-lg text-slate-300">
            I love collaborating on cloud security, detection engineering, and offensive research projects. Whether you
            need someone to harden AWS environments, craft SIEM content, or run adversary simulations, let&apos;s make it happen.
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.label === 'Email' ? '_self' : '_blank'}
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-cyan-100 transition hover:bg-cyan-400/20"
              >
                <social.icon className="h-4 w-4" />
                {social.label}
              </a>
            ))}
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/5 bg-slate-950/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Samman Chouhan. Purpose-built for security leaders & recruiters.</p>
          <div className="flex gap-4 text-slate-400">
            <a href="https://github.com/asocsam" className="transition hover:text-cyan-200">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/samman-chouhan" className="transition hover:text-cyan-200">
              LinkedIn
            </a>
            <a href="mailto:24s.chouhan@gmail.com" className="transition hover:text-cyan-200">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface Project {
  title: string;
  subtitle: string;
  summary: string;
  highlights: string[];
  tools: string[];
  link: string;
}

interface ExperienceItem {
  title: string;
  organization: string;
  timeframe: string;
  description: string;
  bullets: string[];
}

interface SkillCluster {
  title: string;
  items: string[];
}

interface Certification {
  name: string;
  issuer: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
}

interface Achievement {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface ImpactMetric {
  stat: string;
  detail: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      {...fadeIn}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-cyan-400/40 hover:bg-cyan-500/10"
    >
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-cyan-500/20 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="relative flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">{project.subtitle}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-100"
          >
            View Repo
            <Github className="h-3.5 w-3.5" />
          </a>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">{project.summary}</p>
        <ul className="space-y-2 text-sm text-slate-300">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-cyan-200"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <motion.article
      {...fadeIn}
      className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/5 via-slate-950 to-slate-950 p-6 backdrop-blur"
    >
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.3em] text-blue-200">{item.timeframe}</p>
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
        <p className="text-sm font-medium text-slate-300">{item.organization}</p>
      </div>
      <p className="text-sm text-slate-300">{item.description}</p>
      <ul className="space-y-2 text-sm text-slate-300">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <Sparkles className="mt-0.5 h-4 w-4 text-blue-200" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function SkillCard({ cluster }: { cluster: SkillCluster }) {
  return (
    <motion.div
      {...fadeIn}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-cyan-400/40 hover:bg-cyan-500/10"
    >
      <h3 className="text-lg font-semibold text-white">{cluster.title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {cluster.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function CertificationCard({ cert }: { cert: Certification }) {
  const Icon = cert.icon;
  return (
    <div className={`flex items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-br ${cert.color} p-4`}>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-slate-900/70">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{cert.name}</p>
        <p className="text-xs text-slate-200">{cert.issuer}</p>
      </div>
    </div>
  );
}

function AchievementCard({ achievement }: { achievement: Achievement }) {
  const Icon = achievement.icon;
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-purple-200">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{achievement.title}</p>
        <p className="text-xs text-slate-200">{achievement.description}</p>
      </div>
    </div>
  );
}

function ImpactCard({ metric }: { metric: ImpactMetric }) {
  return (
    <motion.div
      {...fadeIn}
      className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/70 text-cyan-200">
        <Activity className="h-5 w-5" />
      </div>
      <div>
        <p className="text-lg font-semibold text-white">{metric.stat}</p>
        <p className="text-sm text-slate-300">{metric.detail}</p>
      </div>
    </motion.div>
  );
}

interface SectionProps {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  eyebrow: string;
  background?: string;
  center?: boolean;
  children: React.ReactNode;
}

function Section({ title, icon: Icon, eyebrow, background, center, children }: SectionProps) {
  return (
    <section className={`relative ${background ? `bg-gradient-to-br ${background}` : ''}`}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.div {...fadeIn} className={`mb-10 flex flex-col gap-3 ${center ? 'items-center text-center' : ''}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
            <Icon className="h-3.5 w-3.5" />
            {eyebrow}
          </div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">{title}</h2>
        </motion.div>
        <div className="space-y-12">{children}</div>
      </div>
    </section>
  );
}

export default App;
