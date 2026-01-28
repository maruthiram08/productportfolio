
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  ExternalLink,
  Menu,
  X,
  BrainCircuit,
  Gamepad2
} from 'lucide-react';
import { PROJECTS } from './src/data/projects';
// Re-using types from types.ts, note: PROJECTS is now imported
import { Experience, CaseStudy } from './types';
import ProjectDetails from './src/components/ProjectDetails';

// --- Components ---

const EXPERIENCES: Experience[] = [
  {
    company: 'Head Digital Works (A23)',
    role: 'Principal Product Manager',
    period: 'Jan 2022 - Present',
    location: 'Bengaluru, India',
    description: 'Launched A23 Poker from scratch, scaling to ₹24Cr+ MRR within 24 months. Boosted engagement by 25% through Leaderboards & Loyalty Programs, improving D30 retention by 7% and ARPU by 22%.'
  },
  {
    company: 'Epic Group',
    role: 'Manager - Business Analytics',
    period: 'Oct 2020 - Dec 2021',
    location: 'Dhaka, Bangladesh',
    description: 'Overhauled ERP system for 1k+ employees, built Power BI dashboards for CXOs, and optimized supply chain delivering 13% cost savings and 25% reduction in lead times.'
  },
  {
    company: 'IIM Bangalore',
    role: 'MBA (Strategy & Technology)',
    period: '2018 - 2020',
    location: 'Bengaluru, India',
    description: 'National Runner-up in Financial Valuation competitions. Secretary of IIMB Investment Fund managing ₹2L+ equity portfolio across Pharma & Energy sectors.'
  },
  {
    company: 'Indian Oil Corporation Ltd.',
    role: 'Production Engineer',
    period: 'Sep 2015 - May 2018',
    location: 'India',
    description: 'Top 5% of 2000+ employees. Led team to design Fuel Management System saving ₹130+ Mn annually. Improved process efficiency by 175%, generating ₹770+ Mn incremental revenue.'
  }
];

const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Scaling Market Share in Fantasy Sports',
    subtitle: 'FanFight: Driving 15% MoM growth through Mini-Games & Multi-Sport expansion.',
    tags: ['Growth', 'RMG', 'RICE'],
    link: '/case-studies/FanFight_Case_Study.pdf'
  },
  {
    title: 'User Retention in OTT Streaming',
    subtitle: 'MovieFix: Implementing referral loops and gamified watch parties to boost MAUs.',
    tags: ['Product Strategy', 'Retention'],
    link: '/case-studies/MovieFix_Case_Study.pdf'
  },
  {
    title: 'Career Accelerator Engagement Funnel',
    subtitle: 'Expertrons: Redesigning mentor discovery and gamified learning paths for higher conversion.',
    tags: ['EdTech', 'UX Strategy'],
    link: '/case-studies/Expertrons_Case_Study.pdf'
  },
  {
    title: 'Streamlining Startup Onboarding',
    subtitle: 'OneValley: Developing a guided product tour to reduce friction and increase activation.',
    tags: ['Onboarding', 'SaaS', 'PRD'],
    link: '/case-studies/OneValley_Case_Study.pdf'
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const handleScroll = (id: string) => {
    if (!isHome) return; // If not home, Link will handle routing, this is for hash scrolling
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold tracking-tighter">
          MARUTHI <span className="text-zinc-500 italic">RAM</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {['Projects', 'About', 'Experience', 'Case Studies'].map((item) => {
            const sectionId = item.toLowerCase().replace(' ', '-');
            return isHome ? (
              <button
                key={item}
                onClick={() => handleScroll(sectionId)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {item}
              </button>
            ) : (
              <Link
                key={item}
                to={`/#${sectionId}`} // Simple link back to home with hash
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {item}
              </Link>
            );
          })}
          <a href="#contact" className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-zinc-200 transition-colors">
            Let's Connect
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-zinc-400">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col gap-4">
          {['Projects', 'About', 'Experience', 'Case Studies'].map((item) => (
            <Link
              key={item}
              to={`/#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-zinc-400"
            >
              {item}
            </Link>
          ))}
          <a href="#contact" className="w-full text-center px-5 py-3 bg-white text-black font-bold rounded-lg mt-4">
            Let's Connect
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000"
        className="w-full h-full object-cover opacity-20"
        alt="Background"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/80 to-zinc-950"></div>
    </div>

    <div className="container max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-zinc-500 font-medium tracking-widest uppercase text-xs">Principal Product Manager @ A23</p>
          <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter">
            MARUTHI <span className="font-serif italic font-light text-gradient">Ram</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-xl leading-relaxed">
            Crafting intelligent product experiences at scale. Bridging <span className="text-white font-medium italic underline decoration-zinc-700">AI strategy</span> and <span className="text-white font-medium italic underline decoration-zinc-700">user retention</span>.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <a href="mailto:mnvmaruthiram@gmail.com" className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition-all">
            Get in Touch
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="flex items-center gap-4 px-2">
            <a href="https://linkedin.com/in/maruthirammunta" target="_blank" className="p-3 bg-zinc-900 border border-zinc-800 rounded-full hover:text-white hover:border-zinc-700 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/maruthiram08" target="_blank" className="p-3 bg-zinc-900 border border-zinc-800 rounded-full hover:text-white hover:border-zinc-700 transition-all">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative group">
        <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800">
          <img
            src="/hero-photo.jpg"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            alt="Maruthi Ram"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-zinc-800 p-6 md:p-8 rounded-2xl shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <div>
              <p className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Impact</p>
              <p className="text-xl md:text-2xl font-black">4 Millions+</p>
              <p className="text-zinc-400 text-xs md:text-sm">Users Scale</p>
            </div>
            <div>
              <p className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Education</p>
              <p className="text-xl md:text-2xl font-black">IIM-B</p>
              <p className="text-zinc-400 text-xs md:text-sm">MBA Alumni</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SectionHeading = ({ title, subtitle, number }: { title: string; subtitle: string; number: string }) => (
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
    <div>
      <p className="text-zinc-500 font-mono text-xs mb-2 tracking-widest">// {subtitle.toUpperCase()}</p>
      <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
        {title.split(' ')[0]} <span className="font-serif italic font-light text-gradient">{title.split(' ').slice(1).join(' ')}</span>
      </h2>
    </div>
    <div className="text-right hidden md:block">
      <span className="text-6xl font-black text-zinc-900 tracking-tighter">{number}</span>
      <p className="text-xs text-zinc-600 font-bold uppercase tracking-widest">Section Index</p>
    </div>
  </div>
);

const FeaturedProjects = () => (
  <section id="projects" className="py-24 bg-zinc-950 border-t border-zinc-900">
    <div className="container max-w-7xl mx-auto px-6">
      <SectionHeading title="Strategic Work" subtitle="Selected Projects" number="01" />

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          // Changed div to Link
          <Link to={`/work/${project.id}`} key={project.id} className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-500 flex flex-col block">
            <div className="aspect-video overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
              />
            </div>
            <div className="p-8 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">{project.category}</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <div className="flex gap-2">
                  {/* We might want to keep these as quick links or remove them to force visiting the detail page. 
                       Keeping them for now but stopping propagation if needed, or simply let them be part of the card 
                       which now links to details. Let's keep them as quick actions. */}
                  {project.link && (
                    <object className="z-10 relative">
                      <a href={project.link} target="_blank" className="block p-2 bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-all"><ExternalLink size={16} /></a>
                    </object>
                  )}
                  {project.github && (
                    <object className="z-10 relative">
                      <a href={project.github} target="_blank" className="block p-2 bg-zinc-800 rounded-full hover:bg-white hover:text-black transition-all"><Github size={16} /></a>
                    </object>
                  )}
                </div>
              </div>
              <p className="text-zinc-400 leading-relaxed font-light">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-zinc-800 rounded-full text-[10px] font-bold text-zinc-400 border border-zinc-700 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-24 bg-zinc-950 border-t border-zinc-900 overflow-hidden">
    <div className="container max-w-7xl mx-auto px-6">
      <SectionHeading title="Philosophy & Discipline" subtitle="Product Mindset" number="02" />

      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900">
            <img
              src="/hero-photo.jpg"
              className="w-full h-full object-cover grayscale"
              alt="Maruthi Ram"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 p-6 bg-white text-black rounded-2xl shadow-xl space-y-2 hidden md:block">
            <p className="text-xs font-black uppercase tracking-widest">Current Status</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-sm font-bold italic font-serif">Available for AI Leadership Roles</p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold leading-snug">
              I build <span className="text-zinc-500 italic font-serif">high-fidelity</span> products where strategy meets engineering rigor.
            </h3>
            <div className="space-y-4 text-zinc-400 font-light leading-relaxed">
              <p>
                As a Principal PM at A23, I navigate the intersection of skill gaming, financial liquidity, and real-time user mechanics. My approach is deeply analytical, rooted in the IIM-B framework of disciplined scaling.
              </p>
              <p>
                Currently, I am obsessing over how Generative AI can redefine product workflows—from internal productivity to LLM-powered user-facing scholarly interfaces.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-6 border-t border-zinc-900">
            <div>
              <p className="text-2xl font-black">4+ Yrs</p>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1">Industry Exp</p>
            </div>
            <div>
              <p className="text-2xl font-black">MBA</p>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1">IIM Bangalore</p>
            </div>
            <div>
              <p className="text-2xl font-black">B.Tech</p>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1">Chemical Engg</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl group hover:border-white transition-all">
              <BrainCircuit className="text-zinc-500 mb-4 group-hover:text-white transition-colors" />
              <h4 className="font-bold mb-1">AI Product Strategy</h4>
              <p className="text-sm text-zinc-500 font-light">Implementing RAG & LLM pipelines for real-world utility.</p>
            </div>
            <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl group hover:border-white transition-all">
              <Gamepad2 className="text-zinc-500 mb-4 group-hover:text-white transition-colors" />
              <h4 className="font-bold mb-1">Skill Gaming</h4>
              <p className="text-sm text-zinc-500 font-light">Balancing mechanics, fairness, and monetization at scale.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ExperienceSection = () => (
  <section id="experience" className="py-24 bg-zinc-950 border-t border-zinc-900">
    <div className="container max-w-7xl mx-auto px-6">
      <SectionHeading title="Professional Journey" subtitle="Industry Experience" number="03" />

      <div className="space-y-1">
        <div className="grid grid-cols-12 gap-6 p-6 bg-zinc-900/40 text-xs font-bold uppercase tracking-widest text-zinc-500 border-b border-zinc-800 mb-4">
          <div className="col-span-4">Role & Company</div>
          <div className="col-span-3">Duration</div>
          <div className="col-span-5 hidden md:block">Focus Area</div>
        </div>

        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="grid grid-cols-12 gap-6 p-6 border-b border-zinc-900 hover:bg-zinc-900 transition-colors group">
            <div className="col-span-12 md:col-span-4">
              <h3 className="text-xl font-bold group-hover:text-white transition-colors">{exp.role}</h3>
              <p className="text-sm text-zinc-500">{exp.company}</p>
            </div>
            <div className="col-span-6 md:col-span-3">
              <span className="text-sm font-medium text-zinc-400">{exp.period}</span>
              <p className="text-xs text-zinc-600 mt-1">{exp.location}</p>
            </div>
            <div className="col-span-6 md:col-span-5">
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CaseStudiesSection = () => (
  <section id="case-studies" className="py-24 bg-zinc-950 border-t border-zinc-900">
    <div className="container max-w-7xl mx-auto px-6">
      <SectionHeading title="Product Case-Studies" subtitle="Intellectual Capital" number="04" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CASE_STUDIES.map((study, idx) => (
          <a
            key={idx}
            href={study.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:bg-white hover:text-black transition-all duration-500 cursor-pointer block"
          >
            <div className="flex justify-between items-start mb-12">
              <div className="flex flex-wrap gap-2">
                {study.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 border border-current text-[10px] font-bold rounded-full uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </div>
            <h3 className="text-2xl font-bold mb-2 tracking-tight">{study.title}</h3>
            <p className="text-sm opacity-60 font-light">{study.subtitle}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="pt-32 pb-12 bg-zinc-950 border-t border-zinc-900">
    <div className="container max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center text-center space-y-12 mb-24">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter max-w-4xl">
          Let's <span className="font-serif italic font-light text-gradient">work</span> together.
        </h2>
        <p className="text-zinc-500 max-w-lg text-lg font-light leading-relaxed">
          Building the next generation of AI-driven products? I'm open to conversations about strategic product leadership and innovation.
        </p>
        <a
          href="mailto:mnvmaruthiram@gmail.com"
          className="group flex items-center gap-4 text-3xl md:text-4xl font-light hover:text-zinc-400 transition-colors"
        >
          <Mail className="text-zinc-700 group-hover:text-white transition-colors" />
          mnvmaruthiram@gmail.com
        </a>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-zinc-900 gap-6">
        <div className="flex items-center gap-8">
          <a href="https://linkedin.com/in/maruthirammunta" target="_blank" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/maruthiram08" target="_blank" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">GitHub</a>
          <a href="/Maruthi Ram Principal PM.pdf" target="_blank" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">Resume</a>
        </div>
        <p className="text-xs text-zinc-700 uppercase tracking-widest font-bold">
          © 2025 MARUTHI RAM M N V.
        </p>
      </div>
    </div>
  </footer>
);

// Main Layout Component
const MainLayout = () => {
  return (
    <div className="selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <AboutSection />
      <ExperienceSection />
      <CaseStudiesSection />
      <Footer />
    </div>
  );
};

// App with Routes
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/work/:projectId" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
