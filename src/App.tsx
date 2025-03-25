import React, { useState } from 'react';
import { Shield, Code, BookOpen, Award, Mail, Github, Linkedin, Terminal, Trophy, AlignCenterVertical as Certificate, Target, Brain, Server, Lock } from 'lucide-react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { motion } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState(0);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-6 py-16 max-w-5xl">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Samman Chouhan
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-400 mb-6">
              Security Engineer | Penetration Tester | Security Researcher
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Passionate cybersecurity professional with expertise in offensive security, threat detection, and secure architecture design. 
              Currently pursuing Information Technology and Management at IIT Chicago with a focus on Cybersecurity (Expected graduation: December 2025).
            </p>
            <div className="flex gap-4">
              <a href="mailto:your.email@example.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition">
                <Mail size={20} />
                Contact Me
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-700 rounded-lg transition">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-700 rounded-lg transition">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=400&h=400" 
              alt="Cybersecurity Illustration"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>
      </header>

      {/* Skills Section */}
      <section className="bg-gray-800/50 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            {...fadeIn}
          >
            Core Competencies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-gray-800 p-6 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security Operations</h3>
              <p className="text-gray-400">Advanced incident response, threat hunting, and security monitoring</p>
            </motion.div>
            <motion.div 
              className="bg-gray-800 p-6 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Terminal className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Penetration Testing</h3>
              <p className="text-gray-400">Web app security, network penetration, and red teaming</p>
            </motion.div>
            <motion.div 
              className="bg-gray-800 p-6 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Code className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Development</h3>
              <p className="text-gray-400">SAST/DAST implementation, secure SDLC, and DevSecOps</p>
            </motion.div>
            <motion.div 
              className="bg-gray-800 p-6 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Lock className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security Architecture</h3>
              <p className="text-gray-400">Zero Trust implementation and cloud security</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            {...fadeIn}
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-gray-800 p-6 rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <Server className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud Security Framework</h3>
              <p className="text-gray-400 mb-4">Developed a comprehensive security framework for AWS infrastructure, implementing Zero Trust architecture and automated compliance checks.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">Terraform</span>
                <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">Python</span>
              </div>
            </motion.div>
            <motion.div 
              className="bg-gray-800 p-6 rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <Brain className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Threat Detection</h3>
              <p className="text-gray-400 mb-4">Built a machine learning model for real-time threat detection in network traffic, achieving 95% accuracy in identifying malicious patterns.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">TensorFlow</span>
                <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-900 rounded-full text-sm">Wireshark</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section className="bg-gray-800/50 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            {...fadeIn}
          >
            Certifications & Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Certificate className="text-blue-400" />
                Certifications
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold">CompTIA Security+</h4>
                  <p className="text-gray-400">Achieved in 2024</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold">Certified Ethical Hacker (CEH)</h4>
                  <p className="text-gray-400">In Progress</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Trophy className="text-blue-400" />
                Competitions & Achievements
              </h3>
              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold">National Cyber League</h4>
                  <p className="text-gray-400">Top 10% in Individual Game, Spring 2024</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold">Collegiate Penetration Testing Competition</h4>
                  <p className="text-gray-400">Regional Finalist, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Profiles Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            {...fadeIn}
          >
            Online Profiles & Rankings
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-800 p-6 rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
            >
              <Target className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">TryHackMe</h3>
              <p className="text-gray-400 mb-2">Top 1% | 15,000+ Points</p>
              <a href="https://tryhackme.com/p/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                View Profile →
              </a>
            </motion.div>
            <motion.div 
              className="bg-gray-800 p-6 rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
            >
              <Shield className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">HackTheBox</h3>
              <p className="text-gray-400 mb-2">Pro Hacker | 20 Boxes Pwned</p>
              <a href="https://app.hackthebox.com/profile/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                View Profile →
              </a>
            </motion.div>
            <motion.div 
              className="bg-gray-800 p-6 rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
            >
              <Code className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">PortSwigger Academy</h3>
              <p className="text-gray-400 mb-2">Expert Level | 25 Labs Completed</p>
              <a href="#" className="text-blue-400 hover:text-blue-300">
                View Profile →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-gray-800/50 py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            {...fadeIn}
          >
            Education
          </motion.h2>
          <motion.div 
            className="bg-gray-800 p-8 rounded-xl"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start gap-4">
              <Award className="w-12 h-12 text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Illinois Institute of Technology</h3>
                <p className="text-gray-400 mb-2">Bachelor's in Information Technology and Management</p>
                <p className="text-blue-400">Expected Graduation: December 2025</p>
                <ul className="mt-4 text-gray-300 list-disc list-inside">
                  <li>Specialization in Cybersecurity</li>
                  <li>Relevant Coursework: Network Security, Cryptography, Digital Forensics, Malware Analysis</li>
                  <li>Vice President of Cybersecurity Club</li>
                  <li>GPA: 3.8/4.0</li>
                </ul>
              </div>
            </div>
          </motion.div>
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

export default App;