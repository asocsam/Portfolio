import {
  Activity,
  Brain,
  CheckCircle2,
  Github,
  Mail,
  Menu,
  Rocket,
  Shield,
  Sparkles,
  Terminal,
  X,
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import profileImg from './samman.png';
import heroTexture from './IMG_3955.jpg';
import {
  socials,
  highlightStats,
  projects,
  experience,
  skills,
  certifications,
  impactMetrics,
  achievements,
  credentialBadges,
  navLinks,
  focusAreas,
  heroHighlights,
  type Project,
  type ExperienceItem,
  type SkillCluster,
  type Certification,
  type ImpactMetric,
  type Achievement,
  type FocusArea,
  type HeroHighlight,
} from './content';

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div id="top" className="relative overflow-hidden">
        <img
          src={heroTexture}
          alt="Cybersecurity abstract texture"
          className="pointer-events-none select-none absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_55%)]" />
        <header className="relative z-10">
          <div className="border-b border-white/10 bg-slate-950/70 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
                <div className="h-2 w-2 rounded-full bg-cyan-400" />
                Samman Chouhan
              </div>
              <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group relative transition hover:text-cyan-200"
                  >
                    {link.label}
                    <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-cyan-300 transition group-hover:scale-x-100" />
                  </a>
                ))}
              </nav>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-200 lg:hidden"
                onClick={() => setIsMobileNavOpen((prev) => !prev)}
                aria-label="Toggle navigation"
              >
                {isMobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
            {isMobileNavOpen ? (
              <div className="border-t border-white/10 bg-slate-950/90 px-6 py-4 lg:hidden">
                <div className="flex flex-col gap-3 text-sm font-medium text-slate-200">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition hover:border-cyan-400/40 hover:text-cyan-100"
                      onClick={() => setIsMobileNavOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
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
                  Seasoned security engineer building high-signal detection ecosystems, purple team programs, and secure
                  cloud guardrails for fintech, SaaS, and critical infrastructure teams. Graduate cybersecurity researcher
                  focused on marrying offensive insights with resilient defense.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-cyan-200">
                {credentialBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-cyan-400/30 bg-cyan-500/5 px-4 py-1 text-[11px] tracking-[0.2em] text-cyan-100"
                  >
                    {badge}
                  </span>
                ))}
              </div>
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
              <div className="grid gap-4 lg:grid-cols-3">
                {heroHighlights.map((item) => (
                  <HeroHighlightCard key={item.title} highlight={item} />
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
        <Section id="credentials" title="Credentials & Impact" icon={Shield} eyebrow="Proof at a glance">
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

        <Section
          id="focus"
          title="Leadership Focus"
          icon={Rocket}
          eyebrow="Where I drive impact"
          background="from-cyan-500/10 via-slate-900 to-slate-950"
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <FocusCard key={area.title} area={area} />
            ))}
          </div>
        </Section>

        <Section id="projects" title="Signature Projects" icon={Terminal} eyebrow="GitHub Spotlights">
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          title="Experience Blueprint"
          icon={Brain}
          eyebrow="How I build security"
          background="from-blue-500/10 via-slate-900 to-slate-950"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {experience.map((item) => (
              <ExperienceCard key={item.title} item={item} />
            ))}
          </div>
        </Section>

        <Section
          id="skills"
          title="Technical Arsenal"
          icon={Zap}
          eyebrow="Depth & breadth"
          background="from-slate-900 via-slate-950 to-slate-950"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((cluster) => (
              <SkillCard key={cluster.title} cluster={cluster} />
            ))}
          </div>
        </Section>

        <Section id="contact" title="Let&apos;s Build Resilient Security" icon={Rocket} eyebrow="Reach out" center>
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

function FocusCard({ area }: { area: FocusArea }) {
  const Icon = area.icon;
  return (
    <motion.article
      {...fadeIn}
      className="flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-slate-950/80 p-6 backdrop-blur"
    >
      <div className={`inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-r ${area.accent} px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/90`}>
        <Icon className="h-4 w-4" />
        Impact
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-white">{area.title}</h3>
        <p className="text-sm text-slate-300">{area.description}</p>
      </div>
      <ul className="space-y-2 text-sm text-slate-300">
        {area.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2">
            <Sparkles className="mt-0.5 h-4 w-4 text-cyan-200" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </motion.article>
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

function HeroHighlightCard({ highlight }: { highlight: HeroHighlight }) {
  const Icon = highlight.icon;
  return (
    <motion.div
      {...fadeIn}
      className="flex items-start gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur transition hover:border-cyan-400/40 hover:bg-cyan-500/10"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-500/10 text-cyan-200">
        <Icon className="h-5 w-5" />
      </div>
      <div className="space-y-1">
        <h3 className="text-base font-semibold text-white">{highlight.title}</h3>
        <p className="text-sm text-slate-300">{highlight.description}</p>
      </div>
    </motion.div>
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
  id?: string;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  eyebrow: string;
  background?: string;
  center?: boolean;
  children: React.ReactNode;
}

function Section({ id, title, icon: Icon, eyebrow, background, center, children }: SectionProps) {
  return (
    <section id={id} className={`relative ${background ? `bg-gradient-to-br ${background}` : ''}`}>
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
