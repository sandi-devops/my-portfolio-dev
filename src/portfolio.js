import React, { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, Mail, Code, Cloud, Zap } from 'lucide-react';


export default function SandiPortfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: '8+', label: 'Years Experience' },
    { number: '9+', label: 'Certifications' },
    { number: '15+', label: 'Projects Completed' },
    
  ];

  const certifications = [
    {
      name: 'Google Cloud Platform Business Professional Accreditation',
      year: '2020',
      icon: '☁️'
    },
    {
      name: 'Scrum Foundation Professional Certificate',
      year: '2020',
      icon: '📋'
    },
    {
      name: 'ICSI | CyberSecurity Essentials',
      year: '2020',
      icon: '🔒'
    },
    {
      name: 'Cyber Foundation Professional Certificate',
      year: '2020',
      icon: '🛡️'
    },
    {
      name: 'Aviatrix Certified Engineer',
      year: '2021',
      icon: '🚀'
    },
    {
      name: 'AWS Training Completion Certificate',
      year: '2021',
      icon: '☁️'
    },
    {
      name: 'IT Service Management Certificate',
      year: '2021',
      icon: '⚙️'
    },
    {
      name: 'ISO 9001 Quality Management',
      year: '2021',
      icon: '✅'
    },
    {
      name: 'SKILLFRONT SYSTEMS ASSOCIATE™',
      year: '2021',
      icon: '🏆'
    }
  ];

  const skills = {
    backend: {
      title: 'Backend Development',
      icon: '🖥️',
      items: ['PHP', 'Laravel', 'CodeIgniter', 'CakePHP', 'Python', 'Smarty']
    },
    frontend: {
      title: 'Frontend Development',
      icon: '🎨',
      items: ['JavaScript', 'AJAX', 'jQuery', 'Bootstrap', 'React', 'Next.js']
    },
    devops: {
      title: 'DevOps & Cloud',
      icon: '☁️',
      items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'HELM', 'CloudFormation', 'CI/CD']
    },
    tools: {
      title: 'Tools & Version Control',
      icon: '🛠️',
      items: ['Git', 'Linux', 'Backlog', 'Batch Processing']
    }
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution built with Laravel and React',
      technologies: ['Laravel', 'React', 'AWS', 'Docker'],
      category: 'fullstack'
    },
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Automated AWS infrastructure provisioning using Terraform and HELM',
      technologies: ['Terraform', 'AWS', 'Kubernetes', 'CloudFormation'],
      category: 'devops'
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Interactive dashboard with real-time data processing',
      technologies: ['Docker','Next.js', 'Python', 'AWS', 'CI/CD'],
      category: 'fullstack'
    },
    
    {
      title: 'Legacy System Migration',
      description: 'Migrated CodeIgniter application to modern Laravel architecture',
      technologies: ['Laravel', 'CodeIgniter', 'AWS', 'Docker'],
      category: 'backend'
    },
    {
      title: 'CMS Development',
      description: 'Custom content management system with advanced features',
      technologies: ['PHP', 'CakePHP', 'MySQL', 'jQuery'],
      category: 'backend'
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-slate-950/50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <div className="hidden md:flex space-x-8">
            {['about', 'skills', 'experience', 'projects', 'certifications'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm uppercase tracking-wider hover:text-emerald-400 transition capitalize"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div 
              className="mb-8"
              style={{
                opacity: 1 - scrollY / 300,
                transform: `translateY(${scrollY * 0.5}px)`
              }}
            >
              <div className="inline-block mb-6 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                <span className="text-emerald-400 text-sm font-semibold">🚀 Full-Stack Developer • Cloud Engineer</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                Sandi Khaing
                <span className="block bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Software Developer
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
                Full-stack developer & cloud engineer specialized in modern web technologies, DevOps, and AWS cloud infrastructure. Turning complex ideas into scalable solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold rounded-lg transition transform hover:scale-105">
                  View My Work
                </button>
                <div className="flex gap-4">
                <a
                  href={`${process.env.PUBLIC_URL}/resume-en.pdf`}
                  download
                  className="inline-block px-8 py-4 border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-bold rounded-lg transition"
                >
                  Download Resume (EN)
                </a>
               

                <a
                  href={`${process.env.PUBLIC_URL}/resume-jp.pdf`}
                  download
                  className="inline-block px-8 py-4 border border-blue-500 text-blue-400 hover:bg-blue-500/10 font-bold rounded-lg transition"
                >
                  日本語履歴書
                </a>
              </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="group">
                    <div className="text-3xl md:text-4xl font-bold text-emerald-400 group-hover:text-blue-400 transition">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-400 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 animate-bounce">
              <ChevronDown className="mx-auto w-6 h-6 text-emerald-400" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center px-6 py-20">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              About Me
              <span className="block text-slate-500">Full-Stack Developer & Cloud Architect</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-slate-300 leading-relaxed">
                  I'm a passionate software developer with 5+ years of experience building scalable web applications and cloud infrastructure. I specialize in full-stack development with expertise in both frontend and backend technologies.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  My journey spans from traditional web development with PHP and Laravel to modern JavaScript frameworks like React and Next.js. Recently, I've focused on DevOps and cloud architecture, leveraging AWS, Docker, and Kubernetes.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  I'm certified in multiple technologies and continuously learning to stay ahead of industry trends. I believe in writing clean, maintainable code and building systems that scale effortlessly.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg p-6 hover:border-emerald-500/50 transition">
                  <Code className="w-6 h-6 text-emerald-400 mb-3" />
                  <h3 className="font-semibold mb-2">Full-Stack Development</h3>
                  <p className="text-sm text-slate-400">Modern web development with PHP, Laravel, React, and Next.js</p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg p-6 hover:border-emerald-500/50 transition">
                  <Cloud className="w-6 h-6 text-emerald-400 mb-3" />
                  <h3 className="font-semibold mb-2">Cloud Engineering</h3>
                  <p className="text-sm text-slate-400">AWS, Kubernetes, Docker, and infrastructure automation</p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg p-6 hover:border-emerald-500/50 transition">
                  <Zap className="w-6 h-6 text-emerald-400 mb-3" />
                  <h3 className="font-semibold mb-2">DevOps & CI/CD</h3>
                  <p className="text-sm text-slate-400">Terraform, HELM, CloudFormation, and automation pipelines</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen flex items-center px-6 py-20">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Technical Skills
              <span className="block text-slate-500">Languages & Technologies</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.values(skills).map((skillGroup, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/30 backdrop-blur border border-slate-700/50 rounded-lg p-8 hover:border-emerald-500/50 transition"
                >
                  <h3 className="text-2xl font-bold mb-6 text-emerald-400">
                    <span className="mr-3">{skillGroup.icon}</span>
                    {skillGroup.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, sidx) => (
                      <span
                        key={sidx}
                        className="px-4 py-2 bg-slate-700/50 hover:bg-emerald-500/20 border border-slate-600/50 hover:border-emerald-500/50 rounded-full text-sm transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center px-6 py-20">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Featured Projects
              <span className="block text-slate-500">Full-Stack & DevOps Solutions</span>
            </h2>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-4 mb-12">
              {['all', 'fullstack', 'backend', 'devops'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-2 rounded-lg font-semibold transition capitalize ${
                    activeTab === category
                      ? 'bg-emerald-500 text-slate-900'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50'
                  }`}
                >
                  {category === 'all' ? 'All Projects' : category}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700/50 rounded-lg p-8 hover:border-emerald-500/50 transition overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition"></div>
                  
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition">{project.title}</h3>
                    <p className="text-slate-300 mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tidx) => (
                        <span
                          key={tidx}
                          className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded text-xs text-emerald-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="min-h-screen flex items-center px-6 py-20">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Certifications & Awards
              <span className="block text-slate-500">Professional Credentials</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="group bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg p-6 hover:border-emerald-500/50 transition"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{cert.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 group-hover:text-emerald-400 transition">{cert.name}</h3>
                      <p className="text-sm text-emerald-400 font-semibold">{cert.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="border-t border-slate-800 px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
                <p className="text-slate-400 mb-6">
                  I'm always interested in new projects, collaborations, and opportunities to build amazing solutions. Feel free to reach out!
                </p>
                <div className="flex gap-4">
                  
                  <button
                  onClick={() => window.location.href = "mailto:sandi.devops@gmail.com"}
                  className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold rounded-lg transition"
                >
                  Send Email
                </button>
                  
                </div>
              </div>

              <div className="flex items-start justify-end">
                <div className="space-y-4">
                  {/* <a href="#" className="flex items-center space-x-3 hover:text-emerald-400 transition group">
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition -ml-2" />
                  </a> */}
                  
                  <a href="#" className="flex items-center space-x-3 hover:text-emerald-400 transition group">
                    <Mail className="w-5 h-5" />
                    <span>Email</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition -ml-2" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
              <p>© 2026 Sandi Khaing. Full-Stack Developer & Cloud Engineer.</p>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}