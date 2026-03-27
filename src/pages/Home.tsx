import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ExternalLink, Github, FileText, Linkedin, Mail, Twitter, GraduationCap, BrainCircuit, Bot, Database, Brain, Languages, Eye, BarChart, PieChart, Code, GitBranch, Terminal, Box, Cloud, Settings, Repeat, Activity, Network, Monitor, Video } from 'lucide-react';

const skillsData: Record<string, { title: string; desc: string; icon: React.ElementType; logos?: string[] }[]> = {
  'Machine Learning & Data Science': [
    { title: 'Large Language Models', desc: 'Transformers (Hugging Face), LangChain, LangGraph', icon: BrainCircuit, logos: ['huggingface', 'langchain'] },
    { title: 'LLMs', desc: 'OpenAI API, Google AI studio API, Ollama', icon: Bot, logos: ['openai', 'google', 'ollama'] },
    { title: 'Vector Databases', desc: 'FAISS', icon: Database, logos: ['meta'] },
    { title: 'Machine Learning', desc: 'PyTorch, TensorFlow, Scikit-learn, XGBoost', icon: Brain, logos: ['pytorch', 'tensorflow', 'scikitlearn'] },
    { title: 'Natural Language Processing', desc: 'NLTK, SpaCy', icon: Languages, logos: ['spacy'] },
    { title: 'Computer Vision', desc: 'OpenCV, YOLO, Hugging Face Diffusers', icon: Eye, logos: ['opencv', 'huggingface'] },
    { title: 'Data Analysis', desc: 'NumPy, Pandas, Hugging Face Datasets', icon: BarChart, logos: ['numpy', 'pandas', 'huggingface'] },
    { title: 'Databases', desc: 'MySQL, MongoDB', icon: Database, logos: ['mysql', 'mongodb'] },
    { title: 'Data Visualization', desc: 'Matplotlib, Seaborn', icon: PieChart, logos: ['python'] }
  ],
  'Programming': [
    { title: 'Languages', desc: 'Python (primary), C, C++, Java', icon: Code, logos: ['python', 'c', 'cplusplus', 'java'] },
    { title: 'Database', desc: 'MySQL, MongoDB', icon: Database, logos: ['mysql', 'mongodb'] }
  ],
  'Development Tools': [
    { title: 'Version Control', desc: 'Git, GitHub', icon: GitBranch, logos: ['git', 'github'] },
    { title: 'IDEs', desc: 'VS Code, Jupyter Notebooks, Kaggle Notebooks, Google Colab', icon: Terminal, logos: ['visualstudiocode', 'jupyter', 'kaggle', 'googlecolab'] },
    { title: 'Containerization', desc: 'Docker', icon: Box, logos: ['docker'] }
  ],
  'Cloud & Deployment': [
    { title: 'Platforms', desc: 'AWS, Google Cloud Platform (basic)', icon: Cloud, logos: ['amazonwebservices', 'googlecloud'] },
    { title: 'MLOps', desc: 'Weights & Bias, MLflow, DagsHub', icon: Settings, logos: ['weightsandbiases', 'mlflow'] },
    { title: 'CI/CD', desc: 'GitHub Actions', icon: Repeat, logos: ['githubactions'] },
    { title: 'Deployment & Monitoring', desc: 'Prometheus, Grafana', icon: Activity, logos: ['prometheus', 'grafana'] },
    { title: 'Distributed Computing', desc: 'Kubernetes (K8s)', icon: Network, logos: ['kubernetes'] }
  ],
  'Other': [
    { title: 'Operating Systems', desc: 'MacOS, Windows', icon: Monitor, logos: ['apple', 'windows'] },
    { title: 'Video Editing (basic)', desc: 'Steve AI, Microsoft Clipchamp', icon: Video, logos: ['microsoft'] }
  ]
};

export default function Home() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');
  const [activeSkillTab, setActiveSkillTab] = useState('Machine Learning & Data Science');

  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    setTimeout(() => {
      if (container.scrollWidth > 0) {
        container.scrollLeft = container.scrollWidth / 3;
      }
    }, 50);
  }, [activeSkillTab]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    const speed = 1; // 1px per frame ~ 60px/sec

    const scroll = () => {
      if (!isDraggingRef.current && !isHoveredRef.current) {
        container.scrollLeft += speed;
      }
      
      if (container.scrollWidth > 0) {
        const singleSetWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += singleSetWidth;
        }
      }

      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeftRef.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    isDraggingRef.current = false;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startXRef.current) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'timeline', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-indigo-50 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-bold text-xl tracking-tight text-slate-800">Rupesh Bhardwaj</a>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                    activeSection === link.name.toLowerCase() ? 'text-indigo-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="https://drive.google.com/file/d/1Sc4TVl_Y4APgjPRvqppFVBf06H0xN2-E/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-5 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      <main className="w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 space-y-32">
        <section id="about" className="scroll-mt-32">
          <div className="flex flex-col items-center text-center pt-10">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 mb-6 pb-2">
              Rupesh Bhardwaj
            </h1>
            <h2 className="text-sm md:text-base text-slate-600 mb-6 font-medium uppercase tracking-[0.2em]">
              AI & Machine Learning Graduate
            </h2>
            
            <div className="w-12 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>

            <p className="text-lg text-slate-700 mb-10 max-w-4xl mx-auto leading-relaxed">
              Bachelors in AI - ML from Shri Vishwakarma Skill University (2022-26) | Eager to build intelligent solutions with Machine Learning, Data Science, and Large Language Models
            </p>
            
            <div className="flex items-center justify-center gap-8 mb-12">
              <a href="https://www.linkedin.com/in/rupesh-bhardwaj-b924a9287" target="_blank" rel="noopener noreferrer" className="group relative text-[#0A66C2] hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 fill-current" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">LinkedIn</span>
              </a>
              <a href="https://github.com/Rupeshbhardwaj002" target="_blank" rel="noopener noreferrer" className="group relative text-slate-700 hover:opacity-80 transition-opacity" aria-label="GitHub">
                <Github className="w-6 h-6 fill-current" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">GitHub</span>
              </a>
              <a href="https://leetcode.com/u/rupeshbhardwaj/" target="_blank" rel="noopener noreferrer" className="group relative text-[#FFA116] hover:opacity-80 transition-opacity" aria-label="LeetCode">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.541l5.967 5.68c.8.705 2.015.705 2.815 0 .8-.705.8-1.868 0-2.573l-5.967-5.68a1.751 1.751 0 0 1-.274-.387 1.814 1.814 0 0 1-.181-.478 1.873 1.873 0 0 1-.048-.526 1.95 1.95 0 0 1 .095-.523 1.84 1.84 0 0 1 .39-.616l3.897-4.145 4.815-4.8c.8-.704.8-1.868 0-2.572a1.756 1.756 0 0 0-1.209-.438zm-1.086 10.418a1.72 1.72 0 0 0-1.21.437l-5.617 5.56c-.8.705-.8 1.868 0 2.573.8.705 2.015.705 2.815 0l5.617-5.56c.8-.705.8-1.868 0-2.573a1.756 1.756 0 0 0-1.21-.437zm5.406 4.214a1.72 1.72 0 0 0-1.21.437l-2.52 2.495c-.8.705-.8 1.868 0 2.573.8.705 2.015.705 2.815 0l2.52-2.495c.8-.705.8-1.868 0-2.573a1.756 1.756 0 0 0-1.21-.437z"/></svg>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">LeetCode</span>
              </a>
              <a href="mailto:bhardwajrupesh933@zohomail.in" className="group relative text-[#E32636] hover:opacity-80 transition-opacity" aria-label="Email">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M8.66 6.897a1.299 1.299 0 0 0-1.205.765l-.642 1.44-.062-.385A1.291 1.291 0 0 0 5.27 7.648l-4.185.678A1.291 1.291 0 0 0 .016 9.807l.678 4.18a1.293 1.293 0 0 0 1.27 1.087c.074 0 .143-.01.216-.017l4.18-.678c.436-.07.784-.351.96-.723l2.933 1.307a1.304 1.304 0 0 0 .988.026c.321-.12.575-.365.716-.678l.28-.629.038.276a1.297 1.297 0 0 0 1.455 1.103l3.712-.501a1.29 1.29 0 0 0 1.03.514h4.236c.713 0 1.29-.58 1.291-1.291V9.545c0-.712-.58-1.291-1.291-1.291h-4.236c-.079 0-.155.008-.23.022a1.309 1.309 0 0 0-.275-.288c-.275-.21-.614-.3-.958-.253l-4.197.571c-.155.021-.3.07-.432.14L9.159 7.01a1.27 1.27 0 0 0-.499-.113zm-.025.705c.077 0 .159.013.24.052l2.971 1.324c-.128.238-.18.508-.142.782l.357 2.596h.002l-.745 1.672a.59.59 0 0 1-.777.296l-3.107-1.385-.004-.041-.41-2.526L8.1 7.95a.589.589 0 0 1 .536-.348zm-3.159.733c.125 0 .245.039.343.112.13.09.21.227.237.382l.234 1.446-.56 1.259a1.27 1.27 0 0 0-.026.987c.12.322.364.575.678.717l.295.131a.585.585 0 0 1-.428.314l-4.185.678a.59.59 0 0 1-.674-.485l-.678-4.18a.588.588 0 0 1 .485-.674l4.185-.678c.03-.004.064-.01.094-.01zm11.705.09a.59.59 0 0 1 .415.173 1.287 1.287 0 0 0-.416.947v4.237c0 .033.003.065.005.097l-3.55.482a.586.586 0 0 1-.66-.502l-.191-1.403.899-2.017a1.29 1.29 0 0 0-.333-1.5l3.754-.51c.026-.004.051-.004.077-.004zm1.3.532h4.227c.326 0 .588.266.588.588v4.237a.589.589 0 0 1-.588.588h-4.237a.564.564 0 0 1-.12-.013c.47-.246.758-.765.684-1.318zm-5.988.309.254.113c.296.133.43.48.296.777l-.432.97-.207-1.465a.58.58 0 0 1 .09-.395zm5.39.538.453 3.325a.583.583 0 0 1-.453.65zM6.496 11.545l.17 1.052a.588.588 0 0 1-.293-.776zm3.985 4.344a.588.588 0 0 0-.612.603c0 .358.244.61.601.61a.582.582 0 0 0 .607-.608c0-.35-.242-.605-.596-.605zm5.545 0a.588.588 0 0 0-.612.603c0 .358.245.61.602.61a.582.582 0 0 0 .606-.608c0-.35-.24-.605-.596-.605zm-8.537.018a.047.047 0 0 0-.048.047v.085c0 .026.021.047.048.047h.52l-.623.9a.052.052 0 0 0-.009.027v.027c0 .026.021.047.048.047h.815a.047.047 0 0 0 .047-.047v-.085a.047.047 0 0 0-.047-.047h-.55l.606-.9a.05.05 0 0 0 .008-.026v-.028a.047.047 0 0 0-.047-.047zm5.303 0a.047.047 0 0 0-.047.047v1.086c0 .026.02.047.047.047h.135a.047.047 0 0 0 .047-.047v-.454h.545v.454c0 .026.02.047.047.047h.134a.047.047 0 0 0 .047-.047v-1.086a.047.047 0 0 0-.047-.047h-.134a.047.047 0 0 0-.047.047v.453h-.545v-.453a.047.047 0 0 0-.047-.047zm-2.324.164c.25 0 .372.194.372.425 0 .219-.109.425-.358.426-.242 0-.375-.197-.375-.419 0-.235.108-.432.36-.432zm5.545 0c.25 0 .372.194.372.425 0 .219-.108.425-.358.426-.242 0-.374-.197-.374-.419 0-.235.108-.432.36-.432z"/></svg>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">Zoho Mail</span>
              </a>
            </div>

            <a
              href="https://drive.google.com/file/d/1Sc4TVl_Y4APgjPRvqppFVBf06H0xN2-E/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-slate-900 to-slate-600 text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-slate-200/50"
            >
              View Resume
            </a>
          </div>

          <div className="prose prose-slate prose-lg max-w-none mb-16 mt-24 text-left">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">About</h3>
            <p className="text-slate-700 leading-relaxed">
              I am an AI/ML Engineer specializing in designing and deploying scalable machine learning systems and generative AI solutions. With a strong foundation in MLOps, I bridge the gap between experimental models and production-ready applications. My expertise spans developing advanced RAG pipelines, fine-tuning Large Language Models (LLMs), and building robust computer vision systems. I am passionate about leveraging cloud infrastructure and automated CI/CD pipelines to deliver high-performance, data-driven solutions that solve complex business challenges and drive impactful AI innovation.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-32 pt-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
            <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg mr-4 text-sm font-mono">01</span>
            Skills
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="flex overflow-x-auto border-b border-slate-200 hide-scrollbar">
                {['Machine Learning & Data Science', 'Programming', 'Development Tools', 'Cloud & Deployment', 'Other'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveSkillTab(tab)}
                    className={`whitespace-nowrap px-6 py-4 text-sm font-medium transition-colors ${
                      activeSkillTab === tab
                        ? 'text-indigo-600 border-b-2 border-indigo-600 bg-slate-50'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-[#FAFAFA]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="p-6 md:p-8">
                {/* Static List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {skillsData[activeSkillTab].map((item, i) => (
                    <div key={`static-${i}`} className="text-slate-700">
                      <span className="font-bold text-slate-900">{item.title}:</span> {item.desc}
                    </div>
                  ))}
                </div>

                {/* Sliding Tape */}
                <div 
                  ref={scrollRef}
                  className="flex gap-8 overflow-x-auto hide-scrollbar py-4 cursor-grab active:cursor-grabbing select-none"
                  style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
                  onMouseEnter={() => { isHoveredRef.current = true; }}
                  onMouseLeave={handleMouseLeave}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onMouseMove={handleMouseMove}
                  onTouchStart={() => { isDraggingRef.current = true; }}
                  onTouchEnd={() => { isDraggingRef.current = false; }}
                >
                  {[...skillsData[activeSkillTab], ...skillsData[activeSkillTab], ...skillsData[activeSkillTab]].map((item, i) => (
                    <div key={i} className="group relative bg-[#FAFAFA] border border-slate-200 rounded-xl min-w-[260px] h-[110px] shadow-sm overflow-hidden shrink-0 hover:border-indigo-200 transition-colors">
                      <div className="absolute inset-0 p-4 flex flex-col justify-center transition-transform duration-300 group-hover:-translate-y-full">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-lg shrink-0">
                            <item.icon className="w-6 h-6" />
                          </div>
                          <h4 className="font-bold text-slate-900 leading-tight">{item.title}</h4>
                        </div>
                        {item.logos && item.logos.length > 0 && (
                          <div className="flex gap-3 pl-[3.25rem]">
                            {item.logos.map((logo, idx) => (
                              <img 
                                key={idx} 
                                src={`https://cdn.simpleicons.org/${logo}`} 
                                alt={logo} 
                                className="w-5 h-5 pointer-events-none" 
                                onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                              />
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="absolute inset-0 p-4 flex items-center justify-center bg-slate-50 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                        <p className="text-sm text-indigo-900 font-medium text-center leading-tight line-clamp-3 pointer-events-none">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-32">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
            <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg mr-4 text-sm font-mono">02</span>
            Projects
          </h2>
          
          <div className="space-y-8">
            {/* Project 1 */}
            <div onClick={() => navigate('/project/mlops-capstone')} className="block group">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 group-hover:border-indigo-200 group-hover:shadow-md transition-all cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">End-to-End MLOps Capstone Project</h4>
                    <p className="text-indigo-600 font-medium mt-1">Python, AWS, Kubernetes, Docker, MLflow, DVC, GitHub Actions, Prometheus, Grafana</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="https://github.com/Rupeshbhardwaj002/Mlops-Capstone-Project-II" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="group relative text-slate-600 hover:text-indigo-600 transition-colors">
                      <Github className="w-6 h-6 github-illuminate" />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">GitHub</span>
                    </a>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">A comprehensive, industry-standard Machine Learning Operations (MLOps) project demonstrating a fully automated pipeline from data versioning to cloud deployment and real-time observability.</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-2">
                  <li><strong>Data Versioning:</strong> Tracked large datasets and model files using DVC, syncing with AWS S3 for exact reproducibility.</li>
                  <li><strong>Experiment Tracking:</strong> Integrated MLflow to automatically log hyperparameters, metrics, and artifacts, serving as a model registry.</li>
                  <li><strong>CI/CD Pipeline:</strong> Built automated GitHub Actions workflows for linting, testing, building Docker images, and pushing to AWS ECR.</li>
                  <li><strong>Infrastructure as Code:</strong> Provisioned underlying infrastructure (VPCs, Subnets, EC2 worker nodes) programmatically using AWS CloudFormation.</li>
                  <li><strong>Orchestration & Deployment:</strong> Deployed containerized applications to Amazon EKS (Kubernetes) ensuring high availability and load balancing.</li>
                  <li><strong>Monitoring & Observability:</strong> Set up Prometheus and Grafana to scrape metrics and visualize system health, model performance, and data drift.</li>
                </ul>
                <div className="mt-6 flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700">
                  View Project Details <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div onClick={() => navigate('/project/footfall-counter')} className="block group">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 group-hover:border-indigo-200 group-hover:shadow-md transition-all cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Footfall Counter using Computer Vision</h4>
                    <p className="text-indigo-600 font-medium mt-1">Python, OpenCV, Object Detection, SORT/DeepSORT Tracking</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="https://github.com/Rupeshbhardwaj002/footfall_couter_project" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="group relative text-slate-600 hover:text-indigo-600 transition-colors">
                      <Github className="w-6 h-6 github-illuminate" />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">GitHub</span>
                    </a>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">A robust and efficient Computer Vision project designed to count the number of people entering and exiting a specific area using object detection and tracking algorithms.</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-2">
                  <li><strong>Object Detection & Tracking:</strong> Identifies people using pre-trained models and assigns unique IDs using tracking algorithms to monitor movement across consecutive frames.</li>
                  <li><strong>Directional Counting:</strong> Calculates bounding box centroids to determine movement direction (IN vs. OUT) across a virtual reference line.</li>
                  <li><strong>Video Processing Pipeline:</strong> Processes pre-recorded videos or live RTSP camera feeds, updating on-screen displays with real-time analytics.</li>
                  <li><strong>Analyzed Limitations & Future Scope:</strong> Documented challenges like occlusion and camera angle dependence, with proposed future improvements like DeepSORT or ByteTrack integration.</li>
                </ul>
                <div className="mt-6 flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700">
                  View Project Details <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div onClick={() => navigate('/project/hybrid-rag')} className="block group">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 group-hover:border-indigo-200 group-hover:shadow-md transition-all cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Hybrid RAG Pipeline with Qwen, FAISS & XGBoost</h4>
                    <p className="text-indigo-600 font-medium mt-1">Python, Qwen LLM, FAISS, XGBoost, LangChain</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="https://github.com/Rupeshbhardwaj002/Hybrid-RAG-Qwen-FAISS-XGBoost" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="group relative text-slate-600 hover:text-indigo-600 transition-colors">
                      <Github className="w-6 h-6 github-illuminate" />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">GitHub</span>
                    </a>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">An advanced Hybrid Retrieval-Augmented Generation (RAG) pipeline combining dense vector search using FAISS, intelligent re-ranking using XGBoost, and high-quality text generation with the Qwen LLM.</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-2">
                  <li><strong>Dense Retrieval:</strong> Implemented FAISS for fast and scalable vector search across large document embeddings.</li>
                  <li><strong>Intelligent Re-ranking:</strong> Integrated an XGBoost model to re-evaluate and score retrieved chunks based on deeper semantic features, improving context accuracy.</li>
                  <li><strong>LLM Generation:</strong> Utilized the Qwen Large Language Model to synthesize highly accurate, hallucination-free responses from the re-ranked context.</li>
                  <li><strong>Scalable Architecture:</strong> Designed for high-performance AI applications like chatbots, knowledge assistants, and search systems.</li>
                </ul>
                <div className="mt-6 flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700">
                  View Project Details <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div 
              onClick={() => navigate('/project/vehicle-insurance')}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 cursor-pointer hover:shadow-md hover:border-indigo-100 transition-all group"
            >
              <div className="flex flex-col h-full">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">Vehicle Insurance Prediction</h4>
                    <p className="text-indigo-600 font-medium mt-1">Python, FastAPI, Docker, AWS, XGBoost</p>
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href="https://github.com/Rupeshbhardwaj002/Vehicle-insurance-" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group relative text-slate-600 hover:text-indigo-600 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-6 h-6 github-illuminate" />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">GitHub</span>
                    </a>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">
                  An enterprise-grade, end-to-end Machine Learning solution to predict whether a customer is likely to purchase vehicle insurance. Built with a focus on scalability and automation, demonstrating a complete MLOps lifecycle from data ingestion to cloud deployment.
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-2 flex-grow mb-6">
                  <li><strong>End-to-End Pipeline:</strong> Designed a complete MLOps pipeline covering data ingestion from MongoDB, validation, transformation, and model training.</li>
                  <li><strong>Model Training & Evaluation:</strong> Trained and evaluated an XGBoost classifier to accurately predict customer intent for purchasing vehicle insurance.</li>
                  <li><strong>Automated CI/CD:</strong> Set up GitHub Actions for continuous integration and continuous deployment (CI/CD) to streamline updates and testing.</li>
                  <li><strong>Cloud Deployment:</strong> Containerized the application using Docker and deployed the FastAPI serving interface on AWS for scalable real-time predictions.</li>
                </ul>
                <div className="mt-6 flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700">
                  View Project Details <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div onClick={() => navigate('/project/tcs-stock-prediction')} className="block group">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 group-hover:border-indigo-200 group-hover:shadow-md transition-all cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">TCS Stock Price Prediction App</h4>
                    <p className="text-indigo-600 font-medium mt-1">Python, TensorFlow, Keras, Streamlit, Pandas</p>
                  </div>
                  <div className="flex gap-3">
                    <a href="https://github.com/Rupeshbhardwaj002/TCS_Stock_Price_Prediction_app_using_LSTM" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="group relative text-slate-600 hover:text-indigo-600 transition-colors">
                      <Github className="w-6 h-6 github-illuminate" />
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">GitHub</span>
                    </a>
                  </div>
                </div>
                <p className="text-slate-600 mb-4">A machine learning web application that predicts the future stock prices of Tata Consultancy Services (TCS) using Long Short-Term Memory (LSTM) neural networks.</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-2">
                  <li><strong>Historical Data Visualization:</strong> View interactive charts of TCS stock prices over time.</li>
                  <li><strong>Moving Averages:</strong> Analyze trends with 100-day and 200-day Moving Averages (MA).</li>
                  <li><strong>LSTM Prediction:</strong> Get highly accurate stock price predictions using a deep learning LSTM model.</li>
                  <li><strong>Interactive UI:</strong> Built with Streamlit for a seamless and responsive user experience.</li>
                  <li><strong>Real-time Data Fetching:</strong> Integrates with yfinance to fetch the latest market data.</li>
                </ul>
                <div className="mt-6 flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700">
                  View Project Details <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="scroll-mt-32">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center">
            <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg mr-4 text-sm font-mono">03</span>
            Timeline
          </h2>

          <div className="relative border-l-2 border-slate-200 ml-3 md:ml-6 space-y-12 pb-8">
            {/* Experience 1 */}
            <div className="relative pl-8 md:pl-12">
              <div className="absolute w-6 h-6 bg-blue-600 rounded-full -left-[13px] top-1 border-4 border-[#f4f9fc] shadow-sm"></div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-slate-900">AI Intern</h3>
                  <span className="text-xs font-medium text-slate-600 border border-slate-200 px-2 py-0.5 rounded-full">Remote</span>
                </div>
                <span className="text-sm font-mono text-indigo-600 bg-slate-50 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">Feb 2026 - Present</span>
              </div>
              <h4 className="text-lg font-medium text-slate-700 mb-1">
                <a href="https://www.linkedin.com/company/zenithindia/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors underline decoration-slate-300 underline-offset-4">Zenith India</a>
              </h4>
              <p className="text-sm text-slate-600 mb-4">Jaipur, Rajasthan</p>
              <p className="text-slate-600 mb-4">Worked on AI/ML infrastructure focusing on model debugging for a startup comprising Zenith India and Baby Dino (focusing on helpful and educational apps/toys for children). Responsibilities also included building robust machine learning pipelines and implementing MLOps functions like Docker for scalable and reliable deployments.</p>
              
              <div className="mt-4 bg-[#FAFAFA] p-5 rounded-xl border border-slate-200">
                <h5 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Project: Category and Class Classification</h5>
                <p className="text-slate-600 text-sm md:text-base mb-4 leading-relaxed">
                  <strong>Objective:</strong> The core expectation from leadership was to deliver highly accurate yet lightweight and fast models suitable for children's mobile applications. To achieve this, we utilized pre-trained <strong>EfficientNet-B0</strong> models. Additionally, we integrated a local LLM (<strong>Ollama</strong>) across all levels to generate simple, 4-5 line child-friendly explanations for every predicted class or species. The final deliverables were structured into three levels:
                </p>
                <ul className="space-y-3 text-slate-600 text-sm md:text-base">
                  <li className="leading-relaxed">
                    <span className="font-semibold text-indigo-600">Level 1 (Hierarchical Classification):</span> Developed a two-step pipeline where a primary model predicts the broad category (out of 9+ categories like flags, vehicles, animals). It then dynamically routes to one of 9 specialized models to predict the exact class (e.g., identifying the specific country of a flag).
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold text-indigo-600">Level 2 (Professional Identification):</span> Built specialized models for fine-grained classification to identify exact species of flora and fauna (e.g., distinguishing between specific bird or flower species).
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold text-indigo-600">Level 3 (Discovery & Similarity Search):</span> Enabled users to discover and add new species dynamically. Instead of standard final-layer classification, we used a modified Level 3 model to extract 712-dimensional vector embeddings. We performed similarity search on the uploaded image using a FAISS index. If a species was not found, its embedding was stored and the FAISS index was updated, allowing the system to continuously learn and add new species.
                  </li>
                </ul>
              </div>

              <div className="mt-4 bg-[#FAFAFA] p-5 rounded-xl border border-slate-200">
                <h5 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Project: Mental Health App (Chatbot Component)</h5>
                <p className="text-slate-600 text-sm md:text-base mb-4 leading-relaxed">
                  <strong>Objective:</strong> The team was developing a comprehensive mental health application. My core responsibility was to build its conversational component: a highly authenticated chatbot that generates replies strictly from verified medical sources, providing exact page numbers or text chunks as references to build trust with users.
                </p>
                <ul className="space-y-3 text-slate-600 text-sm md:text-base">
                  <li className="leading-relaxed">
                    <span className="font-semibold text-indigo-600">Soulmate AI Integration:</span> Helped the team implement a "Soulmate AI" style conversational experience as a specialized feature within the broader mental health app.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold text-indigo-600">RAG Pipeline & Embeddings:</span> Built a Retrieval-Augmented Generation (RAG) pipeline using <strong>OpenAI LLMs and embeddings</strong>. Processed 9-10 comprehensive books on mental health to generate vector embeddings for precise retrieval.
                  </li>
                  <li className="leading-relaxed">
                    <span className="font-semibold text-indigo-600">Verified Answer Generation:</span> Engineered the retrieval system to ground all generated answers in the embedded books, successfully citing the specific page number or chunk reference alongside the response to ensure medical authenticity.
                  </li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="relative pl-8 md:pl-12 mb-12">
              <div className="absolute w-6 h-6 bg-slate-400 rounded-full -left-[13px] top-1 border-4 border-[#f4f9fc] shadow-sm"></div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900">Bachelors in AI - ML</h3>
                <span className="text-sm font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">2022 - 2026</span>
              </div>
              <h4 className="text-lg font-medium text-slate-700 mb-1">
                <a href="https://svsu.ac.in/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors underline decoration-slate-300 underline-offset-4">Shri Vishwakarma Skill University</a>
              </h4>
              <p className="text-sm text-slate-600 mb-2">Haryana, India</p>
              <p className="text-slate-700 font-medium mb-4">CGPA: 7.5</p>
              <p className="text-slate-600">Graduating with a strong foundation in Artificial Intelligence, Machine Learning, and Data Science. It was during this period that I immersed myself in the captivating realms of AI, marking the beginning of my journey in building intelligent systems.</p>
            </div>

            <div className="relative pl-8 md:pl-12 mb-12">
              <div className="absolute w-6 h-6 bg-slate-400 rounded-full -left-[13px] top-1 border-4 border-[#f4f9fc] shadow-sm"></div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900">12th Grade (PCM)</h3>
                <span className="text-sm font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">2020 - 2021</span>
              </div>
              <h4 className="text-lg font-medium text-slate-700 mb-1">Swami Vivekanand Public School</h4>
              <p className="text-sm text-slate-600 mb-2">State Board</p>
              <p className="text-slate-700 font-medium">Marks: 88%</p>
            </div>

            <div className="relative pl-8 md:pl-12">
              <div className="absolute w-6 h-6 bg-slate-400 rounded-full -left-[13px] top-1 border-4 border-[#f4f9fc] shadow-sm"></div>
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-900">10th Grade</h3>
                <span className="text-sm font-mono text-slate-600 bg-slate-100 px-3 py-1 rounded-full mt-2 md:mt-0 w-fit">2018 - 2019</span>
              </div>
              <h4 className="text-lg font-medium text-slate-700 mb-1">Swami Vivekanand Public School</h4>
              <p className="text-sm text-slate-600 mb-2">CBSE</p>
              <p className="text-slate-700 font-medium">Marks: 78%</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-32">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
            <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg mr-4 text-sm font-mono">04</span>
            Contact
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center text-center md:text-left">
              <div className="flex-1 max-w-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Let's Connect</h3>
                <p className="text-slate-600 mb-8">
                  I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="flex flex-col gap-4">
                  <a href="mailto:bhardwajrupesh933@zohomail.in" className="flex items-center gap-4 text-slate-700 hover:text-indigo-600 transition-colors bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-indigo-100">
                    <div className="p-3 bg-slate-50 text-indigo-600 rounded-lg">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 font-medium">Email</p>
                      <p className="font-semibold">bhardwajrupesh933@zohomail.in</p>
                    </div>
                  </a>
                  <a href="tel:+919350856473" className="flex items-center gap-4 text-slate-700 hover:text-indigo-600 transition-colors bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-indigo-100">
                    <div className="p-3 bg-slate-50 text-indigo-600 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 font-medium">Phone</p>
                      <p className="font-semibold">+91 9350856473</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-600 text-sm">© 2026 Rupesh Bhardwaj. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/rupesh-bhardwaj-b924a9287" target="_blank" rel="noopener noreferrer" className="group relative text-[#0A66C2] hover:opacity-80 transition-opacity" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 fill-current" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">LinkedIn</span>
            </a>
            <a href="https://github.com/Rupeshbhardwaj002" target="_blank" rel="noopener noreferrer" className="group relative text-slate-700 hover:opacity-80 transition-opacity" aria-label="GitHub">
              <Github className="w-5 h-5 fill-current" />
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">GitHub</span>
            </a>
            <a href="https://leetcode.com/u/rupeshbhardwaj/" target="_blank" rel="noopener noreferrer" className="group relative text-[#FFA116] hover:opacity-80 transition-opacity" aria-label="LeetCode">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.541l5.967 5.68c.8.705 2.015.705 2.815 0 .8-.705.8-1.868 0-2.573l-5.967-5.68a1.751 1.751 0 0 1-.274-.387 1.814 1.814 0 0 1-.181-.478 1.873 1.873 0 0 1-.048-.526 1.95 1.95 0 0 1 .095-.523 1.84 1.84 0 0 1 .39-.616l3.897-4.145 4.815-4.8c.8-.704.8-1.868 0-2.572a1.756 1.756 0 0 0-1.209-.438zm-1.086 10.418a1.72 1.72 0 0 0-1.21.437l-5.617 5.56c-.8.705-.8 1.868 0 2.573.8.705 2.015.705 2.815 0l5.617-5.56c.8-.705.8-1.868 0-2.573a1.756 1.756 0 0 0-1.21-.437zm5.406 4.214a1.72 1.72 0 0 0-1.21.437l-2.52 2.495c-.8.705-.8 1.868 0 2.573.8.705 2.015.705 2.815 0l2.52-2.495c.8-.705.8-1.868 0-2.573a1.756 1.756 0 0 0-1.21-.437z"/></svg>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">LeetCode</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
