import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Shield, Code, Award, Mail, Github, Linkedin, Terminal, Lock,
  Target, Sparkles, Brain, Zap, Activity, CheckCircle2, Server, Rocket
} from 'lucide-react';

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
  type Project,
  type ExperienceItem,
  type SkillCluster,
  type Certification,
  type ImpactMetric,
  type Achievement,
} from './content';

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

/* ---------- Small stateless UI blocks ---------- */

const SkillPill = ({ text }: { text: string }) => (
  <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-200">
    {text}
  </span>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.article
    {...fadeIn}
    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-cyan-400/40 hover:bg-cyan-500/10"
  >
    <div className="relative flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">{project.subtitle}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-100"
          >
            View Repo <Github className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
      <p className="text-sm leading-relaxed text-slate-300">{project.summary}</p>
      <ul className="space-y-2 text-sm text-slate-300">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-300" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {project.tools.map((t) => <SkillPill key={t} text={t} />)}
      </div>
    </div>
  </motion.article>
);

const ExperienceCard = ({ item }: { item: ExperienceItem }) => (
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
      {item.bullets.map((b) => (
        <li key={b} className="flex items-start gap-2">
          <Sparkles className="mt-0.5 h-4 w-4 text-blue-200" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </motion.article>
);

const ImpactCard = ({ metric }: { metric: ImpactMetric }) => (
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

const CertificationCard = ({ cert }: { cert: Certification }) => {
  const Icon = cert.icon;
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-950 p-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-slate-900/70">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <p className="text-sm font-semibold text-white">{cert.name}</p>
        <p className="text-xs text-slate-200">{cert.issuer}</p>
      </div>
    </div>
  );
};

const SkillClusterCard = ({ cluster }: { cluster: SkillCluster }) => (
  <motion.div
    {...fadeIn}
    className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-cyan-400/40 hover:bg-cyan-500/10"
  >
    <h3 className="text-lg font-semibold text-white">{cluster.title}</h3>
    <div className="mt-4 flex flex-wrap gap-2">
      {cluster.items.map((i) => <SkillPill key={i} text={i} />)}
    </div>
  </motion.div>
);

function Section({
  title, icon: Icon, eyebrow, background, center, children,
}: {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  eyebrow: string;
  background?: string;
  center?: boolean;
  children: React.ReactNode;
}) {
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

/* ---------- App ---------- */

export default function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative overflow-hidden">
        <img
          src={heroTexture}
          alt="Cybersecurity abstract texture"
          className="pointer-events-none select-none absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <header className="relative z-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-24 lg:flex-row lg:items-center">
            <motion.div className="flex-1 space-y-8" {...fadeIn}>
              <h1 className="text-5xl font-bold" data-text="Samman Chouhan">Samman Chouhan</h1>
              <p className="text-lg text-slate-300">
                Seasoned security engineer delivering cloud-native defenses, detection pipelines, and purple team automation.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-cyan-200">
                {credentialBadges.map((b) => (
                  <span key={b} className="rounded-full border border-cyan-400/30 bg-cyan-500/5 px-4 py-1 text-[11px] tracking-[0.2em] text-cyan-100">
                    {b}
                  </span>
                ))}
              </div>

              {/* Contact */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:24s.chouhan@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:scale-[1.01]"
                >
                  <Mail className="h-4 w-4" />
                  Let&apos;s Collaborate
                </a>
                <a href="https://github.com/asocsam" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/samman-chouhan" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex-1"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative mx-auto max-w-sm">
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/60 p-2 backdrop-blur">
                  <img src={profileImg} alt="Samman Chouhan" className="h-full w-full object-cover rounded-[20px]" />
                </div>
              </div>
            </motion.div>
          </div>
        </header>
      </div>

      {/* Credentials & Impact */}
      <main className="relative z-10 space-y-24 pb-24">
        <Section title="Credentials & Impact" icon={Shield} eyebrow="Proof at a glance">
          <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h3 className="text-lg font-semibold text-cyan-200">Certifications</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {certifications.map((c) => <CertificationCard key={c.name} cert={c} />)}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {impactMetrics.map((m) => <ImpactCard key={m.stat} metric={m} />)}
            </div>
          </div>
        </Section>

        {/* Skills */}
        <Section title="Technical Arsenal" icon={Zap} eyebrow="Depth & breadth" background="from-slate-900 via-slate-950 to-slate-950">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((cl) => <SkillClusterCard key={cl.title} cluster={cl} />)}
          </div>
        </Section>

        {/* Projects */}
        <Section title="Signature Projects" icon={Terminal} eyebrow="GitHub Spotlights">
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
          </div>
        </Section>

        {/* Experience */}
        <Section title="Experience Blueprint" icon={Brain} eyebrow="How I build security" background="from-blue-500/10 via-slate-900 to-slate-950">
          <div className="grid gap-6 md:grid-cols-2">
            {experience.map((e) => <ExperienceCard key={e.title} item={e} />)}
          </div>
        </Section>

        {/* Footer CTA */}
        <Section title="Let&apos;s Build Resilient Security" icon={Rocket} eyebrow="Reach out" center>
          <div className="mx-auto max-w-3xl text-center text-lg text-slate-300">
            I love collaborating on cloud security, detection engineering, and offensive research projects.
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label === 'Email' ? '_self' : '_blank'}
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-cyan-100 transition hover:bg-cyan-400/20"
              >
                <s.icon className="h-4 w-4" />
                {s.label}
              </a>
            ))}
          </div>
        </Section>
      </main>

      {/* Bottom footer */}
      <footer className="border-t border-white/5 bg-slate-950/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Samman Chouhan.</p>
          <div className="flex gap-4 text-slate-400">
            <a href="https://github.com/asocsam" className="transition hover:text-cyan-200">GitHub</a>
            <a href="https://www.linkedin.com/in/samman-chouhan" className="transition hover:text-cyan-200">LinkedIn</a>
            <a href="mailto:24s.chouhan@gmail.com" className="transition hover:text-cyan-200">Email</a>
          </div>
        </div>
         </footer>
    </div>
    );
  }
