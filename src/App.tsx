import {
  Shield, Code, Award, Mail, Github, Linkedin, Terminal, AlignCenterVertical as Certificate, Target, Server, Bug, Lock
  Activity,
  Brain,
  CheckCircle2,
  Github,
  Mail,
  Rocket,
  Shield,
  Sparkles,
  Terminal,
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
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

function App() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-[#E0E0E0] font-mono">
        <header className="relative">
          <img
            src="IMG_3955.jpg"
            alt="Cyberpunk Background"
            className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
          />
          <div className="container mx-auto px-6 py-20 max-w-6xl relative z-10">
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
              className="flex flex-col md:flex-row items-start justify-between gap-12"
              {...fadeIn}
              className="flex-1 space-y-8"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Left Column - Intro & Education */}
              <div className="flex-1 space-y-8">
                <div>
                  <h1 className="text-5xl font-bold glitch relative" data-text="Samman Chouhan">
                    Samman Chouhan
                  </h1>
                  <h2 className="text-xl md:text-2xl text-[#00FFFF] mb-6">
                    Security Engineer | Cyber Security Specialist
                  </h2>
                  <p className="text-[#E0E0E0] text-small mb-8">
                    Cybersecurity professional with certifications in CEH and CompTIA Security+. My expertise spans threat detection, 
                    incident response, and cloud security, with hands-on experience using tools like Splunk, Wireshark, and AWS. 
                    I’ve collaborated on projects involving SIEM optimization, malware analysis, and compliance frameworks such as 
                    NIST and ISO 27001.
                  </p>
  
                  {/* Current Focus Section */}
                  <div className="space-y-4 p-6 border-2 border-[#00FFFF] rounded-xl bg-[#1a1a2e]/50 mb-8 
                    hover:shadow-[0_0_15px_#00FFFF] transition-all">
                    <h3 className="text-2xl text-[#FF00FF] font-bold glitch" data-text="Current Focus">
                      Current Focus
                    </h3>
                    <ul className="list-disc list-inside space-y-3 text-[#E0E0E0] pl-4">
                      <li>Hardening AWS infrastructure against novel attack vectors</li>
                      <li>Reverse engineering modern ransomware variants</li>
                      <li>Contributing to open-source security tooling</li>
                    </ul>
                  </div>
  
                  
                </div>
  
                {/* Education Section */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-1 text-sm uppercase tracking-[0.3em] text-cyan-200">
                Seasoned Security Engineer
                <span className="h-1 w-1 rounded-full bg-cyan-300" />
                Cloud & Detection Specialist
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl text-[#39FF14] font-bold">Education</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Award className="w-8 h-8 text-[#00FFFF] flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold">Illinois Institute of Technology</h4>
                      <p className="text-gray-400">M.S. Cybersecurity Engineering (2024-2025)</p>
                      <p className="text-sm text-[#00FFFF]">GPA: 3.6/4.0</p>
                    </div>
                <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                  Samman Chouhan
                </h1>
                <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
                  Seasoned security engineer delivering cloud-native defenses, detection pipelines, and purple team
                  automation for fintech, SaaS, and critical infrastructure teams. Advancing research through the M.S.
                  Cybersecurity Engineering program at Illinois Institute of Technology (Dec 2025).
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
                      <Target className="w-8 h-8 text-[#FF00FF]" />
                      <div>
                        <p className="font-semibold">TryHackMe</p>
                        <p className="text-sm text-gray-400">Top 1% (15k+ Points)</p>
                      </div>
                    </motion.a>
                    
                    <motion.a
                      href="https://app.hackthebox.com/profile/asocsam"
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
                      className="flex items-center gap-4 p-3 hover:bg-[#1f1f2e] rounded-xl transition"
                      whileHover={{ x: 10 }}
                      rel="noreferrer"
                      className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-cyan-400/50 hover:text-cyan-200"
                    >
                      <Shield className="w-8 h-8 text-[#39FF14]" />
                      <div>
                        <p className="font-semibold">HackTheBox</p>
                        <p className="text-sm text-gray-400">Pro Hacker | 20+ Boxes</p>
                      </div>
                    </motion.a>
  
                    <motion.a
                      href="#"
                      className="flex items-center gap-4 p-3 hover:bg-[#1f1f2e] rounded-xl transition"
                      whileHover={{ x: 10 }}
                    >
                      <Code className="w-8 h-8 text-[#00FFFF]" />
                      <div>
                        <p className="font-semibold">PortSwigger</p>
                        <p className="text-sm text-gray-400">Expert | 25 Labs</p>
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
                    </motion.a>

                    <div className="flex flex-col gap-4 mb-12">
  {/* Contact Buttons */}
  <div className="flex gap-4 justify-start flex-wrap">
    <a href="mailto:24s.chouhan@gmail.com" className="flex items-center gap-2 bg-[#FF00FF] hover:bg-[#FF2052] text-black font-bold px-4 py-2 rounded-full shadow-lg transition">
      <Mail size={20} /> Contact Me
    </a>
    <a href="https://github.com/asocam" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#1f1f2e] rounded-full border border-[#FF00FF]/30 shadow-sm">
      <Github size={24} />
    </a>
    <a href="https://linkedin.com/in/samman-chouhan" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-[#1f1f2e] rounded-full border border-[#00FFFF]/30 shadow-sm">
      <Linkedin size={24} />
    </a>
  </div>

  {/* Location & Phone */}
  <div className="text-sm text-[#AAAAAA] font-mono tracking-wider pl-1">
    Chicago, IL <span className="mx-2 text-[#FF00FF]">|</span> 312-866-4722
  </div>
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


      <section className="bg-black py-16">
  <div className="container mx-auto px-6 max-w-7xl">
    <div className="flex flex-col lg:flex-row gap-12">
      
      {/* Certifications - Left Column */}
      <div className="w-full lg:w-1/4">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#FF00FF] glitch" data-text="Certifications">
          Certifications
        </h2>
        <div className="flex flex-col gap-6">
          <motion.div 
            className="bg-[#1a1a2e] p-6 rounded-xl border border-[#FF00FF] relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Bug className="w-10 h-10 text-[#FF00FF]" />
              <div>
                <h3 className="text-xl font-bold">CEH</h3>
                <p className="text-gray-400">EC-Council</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">Certified Ethical Hacker v11</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF00FF] to-transparent" />
          </motion.div>

          <motion.div 
            className="bg-[#1a1a2e] p-6 rounded-xl border border-[#00FFFF] relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-10 h-10 text-[#00FFFF]" />
              <div>
                <h3 className="text-xl font-bold">Security+</h3>
                <p className="text-gray-400">CompTIA</p>
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
            <p className="text-gray-300 text-sm">SY0-701 Certification</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00FFFF] to-transparent" />
          </motion.div>

          <motion.div 
            className="bg-[#1a1a2e] p-6 rounded-xl border border-[#39FF14] relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Lock className="w-10 h-10 text-[#39FF14]" />
              <div>
                <h3 className="text-xl font-bold">ISC² CC</h3>
                <p className="text-gray-400">ISC²</p>
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
            <p className="text-gray-300 text-sm">Certified in Cybersecurity</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#39FF14] to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden lg:block w-1 bg-gradient-to-b from-transparent via-gray-700 to-transparent rounded-full" />

      {/* Skills - Right Column */}
      <div className="w-full lg:w-3/4">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#39FF14]">Technical Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCard 
            icon={<Terminal className="w-12 h-12 text-[#FF00FF]" />} 
            title="Penetration Testing" 
            desc={
              <>
                Tools: Burp Suite, Metasploit, Nmap <br />
                Certs: OSCP, eJPT <br />
                Methodologies: OWASP, PTES
              </>
            } 
          />
          <SkillCard 
            icon={<Code className="w-12 h-12 text-[#00FFFF]" />} 
            title="Security Automation" 
            desc={
              <>
                Languages: Python, Bash <br />
                Frameworks: Scapy, Requests <br />
                CI/CD: Jenkins, GitLab CI
              </>
            } 
          />
          <SkillCard 
            icon={<Shield className="w-12 h-12 text-[#39FF14]" />} 
            title="Defensive Security" 
            desc={
              <>
                SIEM: Splunk, ELK <br />
                IDS: Snort, Suricata <br />
                Frameworks: NIST CSF
              </>
            } 
          />
          <SkillCard 
            icon={<Server className="w-12 h-12 text-[#FCEE0A]" />} 
            title="Cloud Security" 
            desc={
              <>
                AWS: IAM, GuardDuty <br />
                Azure: Sentinel <br />
                IaC: Terraform
              </>
            } 
          />
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Projects Section */}
      <section className="py-16 bg-[#0a0a1f]">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#FF00FF]">Security Projects</h2>
          <div className="flex gap-6 overflow-x-scroll pb-4 scrollbar-hide">
          <ProjectCard 
  title="AWS Security Posture Automation" 
  tools={["CloudFormation", "IAM", "KMS", "AWS Config"]}
>
  Architected AWS security automation framework implementing least-privilege policies across 23 services, 
  reducing configuration drift by 75% and hardening cloud infrastructure against 15+ MITRE ATT&CK tactics.
</ProjectCard>

<ProjectCard 
  title="Ransomware Forensic Investigation Platform" 
  tools={["Volatility", "Autopsy", "Wireshark", "FTK Imager"]}
>
  Led digital forensic analysis of 12 ransomware incidents, developing artifact correlation system that 
  reduced evidence recovery time by 40% and improved incident report accuracy by 65%.
</ProjectCard>

<ProjectCard 
  title="OWASP crAPI Vulnerability Research" 
  tools={["Burp Suite Pro", "Postman", "Python", "OWASP ZAP"]}
>
  Discovered 8 critical API vulnerabilities (including 3 zero-days) and engineered custom fuzzing harness 
  that uncovered 15+ undocumented endpoints, enhancing API security testing methodology.
</ProjectCard>

<ProjectCard 
  title="Threat Detection Engineering" 
  tools={["Splunk ES", "ELK Stack", "Sigma Rules", "PySpark"]}
>
  Developed 50+ detection playbooks covering APT29/IronNet TTPs, achieving 92% detection coverage 
  and reducing mean time to detection (MTTD) from 48h to 2.3h across enterprise network.
</ProjectCard>

<ProjectCard 
  title="ML-Powered DDoS Mitigation System" 
  tools={["TensorFlow", "Scapy", "C++", "DPDK"]}
>
  Engineered ensemble ML model (99.2% precision) with real-time packet analysis engine capable of 
  processing 2.4M packets/sec, reducing false positives by 25% in production environment.
</ProjectCard>

<ProjectCard 
  title="Web Application Security Testing" 
  tools={["Burp Suite", "SQLMap", "XSStrike", "Nuclei"]}
>
  Conducted full-scope penetration testing identifying 15+ vulnerabilities (including 4 critical-risk 
  findings), enabling patching that eliminated 80% of attack surface in legacy web applications.
</ProjectCard>
          </div>
        </Section>

<ProjectCard 
  title="Network IDS Optimization" 
  tools={["Snort 3.0", "Suricata", "Kibana", "Zeek"]}
>
  Deployed high-performance intrusion detection system achieving 90.4% detection accuracy through 
  custom rule tuning, reducing incident response time by 40% for 150+ monitored endpoints.
</ProjectCard>
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
        </div>
      </section>
        </Section>

      {/* Competition Achievements */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#FCEE0A]">Competition Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AchievementCard title="National Cyber League (NCL)" desc="Top 6% among 4,199 competitors across 7 CTF domains (Spring 2024)." />
            <AchievementCard title="Collegiate Penetration Testing Competition (CPTC)" desc="Regional Players – identified 12+ critical vulnerabilities, top 30% nationally." />
            <AchievementCard title="CSAW CTF" desc="Participated in exploitation, reversing, and binary challenges during regional qualifier." />
            <AchievementCard title="NCAE-CyberGames" desc="Competed in NCAE-2024, was responsible for two services, FTP and SSH while also maintaining and thwarting attacks.." />
        <Section title="Technical Arsenal" icon={Zap} eyebrow="Depth & breadth" background="from-slate-900 via-slate-950 to-slate-950">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((cluster) => (
              <SkillCard key={cluster.title} cluster={cluster} />
            ))}
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
      </section>
        </Section>

       {/* Footer */}
       <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6 max-w-5xl text-center text-gray-400">
          <p>© 2025 Samman Chouhan. All rights reserved.</p>
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
      </div>
    </motion.article>
  );
}

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  desc: React.ReactNode;
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

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, desc }) => (
  <motion.div className="bg-[#1a1a2e] p-6 rounded-xl border border-[#00FFFF] shadow-[0_0_20px_#00FFFF] hover:shadow-[0_0_30px_#FF00FF] transition" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-[#FCEE0A] mb-2">{title}</h3>
    <p className="text-gray-300 whitespace-pre-line">{desc}</p>
  </motion.div>
);
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

interface ProjectCardProps {
  title: string;
  tools: string[];
  children: React.ReactNode;
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

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tools, children }) => (
  <motion.div className="bg-[#1a1a2e] p-6 rounded-xl min-w-[300px] max-w-xs border border-[#FF00FF] shadow-[0_0_15px_#FF00FF]" whileHover={{ scale: 1.03 }}>
    <h3 className="text-xl font-semibold mb-2 text-[#00FFFF]">{title}</h3>
    <p className="text-gray-400 mb-4">{children}</p>
    <div className="flex flex-wrap gap-2">
      {tools.map((tool, index) => (
        <span key={index} className="px-3 py-1 bg-[#00FFFF] text-black rounded-full text-sm">{tool}</span>
      ))}
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
  </motion.div>
);

const AchievementCard: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <motion.div className="bg-[#1a1a2e] p-6 rounded-xl border border-[#39FF14]" whileHover={{ scale: 1.02 }}>
    <h4 className="text-xl font-semibold mb-2 text-[#FCEE0A]">{title}</h4>
    <p className="text-gray-400">{desc}</p>
  </motion.div>
);


// Certification Card Component
interface CertificationCardProps {
  title: string;
  issuer: string;
  icon: React.ReactNode;
  glowColor: string;
  );
}

const CertificationCard: React.FC<CertificationCardProps> = ({ 
  title, 
  issuer,
  icon,
  glowColor
}) => (
  <motion.div 
    className={`p-4 rounded-lg bg-[#1a1a2e] border border-[${glowColor}] relative group`}
    whileHover={{ scale: 1.02 }}
    style={{ boxShadow: `0 0 15px ${glowColor}33` }}
  >
    <div className="flex items-center gap-4">
      <div className={`p-2 rounded-md bg-[${glowColor}]/20`}>
        {icon}
function AchievementCard({ achievement }: { achievement: Achievement }) {
  const Icon = achievement.icon;
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-purple-200">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-[${glowColor}]">{title}</h3>
        <p className="text-sm text-gray-400">{issuer}</p>
        <p className="text-sm font-semibold text-white">{achievement.title}</p>
        <p className="text-xs text-slate-200">{achievement.description}</p>
      </div>
    </div>
  </motion.div>
);
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
