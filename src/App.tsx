// Full Cyberpunk Portfolio with All Sections Restored
import {
  Shield, Code, Award, Mail, Github, Linkedin, Terminal, AlignCenterVertical as Certificate, Target, Server, Bug, Lock
} from 'lucide-react';
import { motion } from 'framer-motion';

function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-[#E0E0E0] font-mono">
        <header className="relative">
          <img
            src="src/IMG_3955.jpg"
            alt="Cyberpunk Background"
            className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
          />
          <div className="container mx-auto px-6 py-20 max-w-6xl relative z-10">
            <motion.div
              className="flex flex-col md:flex-row items-start justify-between gap-12"
              {...fadeIn}
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
                  </div>
                  
                </div>
              </div>
            </div>

  
              {/* Right Column - Photo & Profiles */}
              <div className="flex-1 flex flex-col items-center gap-8">
                <div className="relative group">
                  <img
                    src="src/samman.png"
                    alt="Profile"
                    className="rounded-2xl shadow-[0_0_25px_#FF00FF] w-64 h-64 object-cover 
                      transition-transform group-hover:scale-105"
                  />
                  {/* Username Tag */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#0d0d1f]/70 backdrop-blur-md px-6 py-3 rounded-full border border-[#39FF14] shadow-[0_0_15px_#39FF14]/50">
  <span className="text-lg font-bold tracking-widest text-[#E0E0E0] font-[JetBrains_Mono] flex items-center gap-1 uppercase">
    <span className="text-[#FF00FF] text-xl">&lt;</span>
    <span className="text-[#39FF14] tracking-tight text-xl drop-shadow-[0_0_5px_#39FF14]">Asocsam</span>
    <span className="text-[#FF00FF] text-xl">&gt;</span>
  </span>
</div>


                </div>
  
                {/* Cyber Profiles Section */}
                <div className="space-y-6 w-full max-w-xs mt-12">
                  <h3 className="text-2xl text-[#FCEE0A] font-bold text-center glitch" 
                    data-text="Cyber Profiles">
                    Cyber Profiles
                  </h3>
                  <div className="space-y-4">
                    <motion.a 
                      href="https://tryhackme.com/p/asocsam" 
                      target="_blank"
                      className="flex items-center gap-4 p-3 hover:bg-[#1f1f2e] rounded-xl transition"
                      whileHover={{ x: 10 }}
                    >
                      <Target className="w-8 h-8 text-[#FF00FF]" />
                      <div>
                        <p className="font-semibold">TryHackMe</p>
                        <p className="text-sm text-gray-400">Top 1% (15k+ Points)</p>
                      </div>
                    </motion.a>
                    
                    <motion.a
                      href="https://app.hackthebox.com/profile/asocsam"
                      target="_blank"
                      className="flex items-center gap-4 p-3 hover:bg-[#1f1f2e] rounded-xl transition"
                      whileHover={{ x: 10 }}
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
                </div>
              </div>
            </motion.div>
          </div>
        </header>


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

<ProjectCard 
  title="Network IDS Optimization" 
  tools={["Snort 3.0", "Suricata", "Kibana", "Zeek"]}
>
  Deployed high-performance intrusion detection system achieving 90.4% detection accuracy through 
  custom rule tuning, reducing incident response time by 40% for 150+ monitored endpoints.
</ProjectCard>

          </div>
        </div>
      </section>

      {/* Competition Achievements */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#FCEE0A]">Competition Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AchievementCard title="National Cyber League (NCL)" desc="Top 6% among 4,199 competitors across 7 CTF domains (Spring 2024)." />
            <AchievementCard title="Collegiate Penetration Testing Competition (CPTC)" desc="Regional Players – identified 12+ critical vulnerabilities, top 30% nationally." />
            <AchievementCard title="CSAW CTF" desc="Participated in exploitation, reversing, and binary challenges during regional qualifier." />
            <AchievementCard title="NCAE-CyberGames" desc="Competed in NCAE-2024, was responsible for two services, FTP and SSH while also maintaining and thwarting attacks.." />
          </div>
        </div>
      </section>

       {/* Footer */}
       <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6 max-w-5xl text-center text-gray-400">
          <p>© 2025 Samman Chouhan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  desc: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, desc }) => (
  <motion.div className="bg-[#1a1a2e] p-6 rounded-xl border border-[#00FFFF] shadow-[0_0_20px_#00FFFF] hover:shadow-[0_0_30px_#FF00FF] transition" whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-[#FCEE0A] mb-2">{title}</h3>
    <p className="text-gray-300 whitespace-pre-line">{desc}</p>
  </motion.div>
);

interface ProjectCardProps {
  title: string;
  tools: string[];
  children: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tools, children }) => (
  <motion.div className="bg-[#1a1a2e] p-6 rounded-xl min-w-[300px] max-w-xs border border-[#FF00FF] shadow-[0_0_15px_#FF00FF]" whileHover={{ scale: 1.03 }}>
    <h3 className="text-xl font-semibold mb-2 text-[#00FFFF]">{title}</h3>
    <p className="text-gray-400 mb-4">{children}</p>
    <div className="flex flex-wrap gap-2">
      {tools.map((tool, index) => (
        <span key={index} className="px-3 py-1 bg-[#00FFFF] text-black rounded-full text-sm">{tool}</span>
      ))}
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
      </div>
      <div>
        <h3 className="text-xl font-bold text-[${glowColor}]">{title}</h3>
        <p className="text-sm text-gray-400">{issuer}</p>
      </div>
    </div>
  </motion.div>
);



export default App;
