
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    ArrowLeft,
    Github,
    ExternalLink,
    ArrowRight,
    Code,        // Instead of plain Code icon for challenges
    Target,      // For Challenge/Solution
    Zap,         // For Solution
    Layers,      // For Tech Stack
    Trophy       // For Impact
} from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { Project } from '../../types';

const ProjectDetails = () => {
    const { projectId } = useParams();
    const project = PROJECTS.find(p => p.id === projectId);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

    if (!project) {
        return (
            <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
                    <Link to="/" className="text-zinc-400 hover:text-white underline">Return Home</Link>
                </div>
            </div>
        );
    }

    // Find next project for navigation
    const currentIndex = PROJECTS.findIndex(p => p.id === projectId);
    const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-white selection:text-black">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Portfolio</span>
                    </Link>
                    <div className="flex gap-4">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
                                <Github size={20} />
                            </a>
                        )}
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2">
                                Visit Live <ExternalLink size={14} />
                            </a>
                        )}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="pt-32 pb-16 px-6 border-b border-zinc-900 bg-gradient-to-b from-zinc-950 to-zinc-900/50">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <span className="inline-block px-3 py-1 border border-zinc-800 rounded-full text-[10px] font-bold tracking-widest uppercase text-zinc-500 bg-zinc-900/50">
                        {project.category}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
                        {project.description}
                    </p>
                </div>
            </header>

            {/* Hero Image */}
            <div className="w-full h-[40vh] md:h-[60vh] bg-zinc-900 overflow-hidden relative border-y border-zinc-800">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent opacity-50"></div>
            </div>

            <main className="max-w-4xl mx-auto px-6 py-24 space-y-24">

                {/* Project Meta Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-zinc-900">
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Role</h3>
                        <p className="font-medium">{project.role}</p>
                    </div>
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Timeline</h3>
                        <p className="font-medium">2024</p> {/* Placeholder or add to data if needed */}
                    </div>
                    <div className="col-span-2">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack?.map((tech) => (
                                <span key={tech} className="text-sm text-zinc-400 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-zinc-500 mb-2">
                            <Target size={20} />
                            <h2 className="text-sm font-bold uppercase tracking-widest">The Challenge</h2>
                        </div>
                        <p className="text-lg text-zinc-300 leading-relaxed font-light">
                            {project.challenge}
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-zinc-500 mb-2">
                            <Zap size={20} />
                            <h2 className="text-sm font-bold uppercase tracking-widest">The Solution</h2>
                        </div>
                        {/* Render markdown-like bold text if simple, or use a markdown parser if preferred. 
                 For now, keeping it simple as a string, but the content has **bold**. 
                 We can do a simple replacement for ** */}
                        <div className="text-lg text-zinc-300 leading-relaxed font-light">
                            {project.solution?.split('**').map((part, i) =>
                                i % 2 === 1 ? <span key={i} className="text-white font-medium">{part}</span> : part
                            )}
                        </div>
                    </div>
                </div>

                {/* Key Features */}
                <div className="p-8 md:p-12 bg-zinc-900/30 rounded-3xl border border-zinc-800">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <Layers className="text-zinc-500" /> Key Features
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {project.features?.map((feature, idx) => {
                            const [title, desc] = feature.split(':');
                            return (
                                <div key={idx} className="space-y-2">
                                    <h3 className="font-bold text-white text-lg">{title.replace(/\*\*/g, '')}</h3>
                                    <p className="text-zinc-400 font-light leading-relaxed">{desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Impact */}
                <div className="space-y-8">
                    <div className="flex items-center gap-3 text-zinc-500 mb-2">
                        <Trophy size={20} />
                        <h2 className="text-sm font-bold uppercase tracking-widest">Impact & Outcomes</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {project.impact?.map((item, idx) => (
                            <div key={idx} className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
                                <p className="text-lg font-light leading-relaxed text-zinc-300">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Next Project Footer */}
            <Link to={`/work/${nextProject.id}`} className="group block relative h-[40vh] overflow-hidden border-t border-zinc-800">
                <div className="absolute inset-0 z-10 bg-zinc-950/80 group-hover:bg-zinc-950/60 transition-colors flex flex-col items-center justify-center space-y-4">
                    <span className="text-zinc-500 font-bold tracking-widest uppercase text-xs">Next Project</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter flex items-center gap-4">
                        {nextProject.title}
                        <ArrowRight size={40} className="group-hover:translate-x-4 transition-transform duration-500" />
                    </h2>
                </div>
                <img
                    src={nextProject.imageUrl}
                    className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700"
                    alt="Next Project"
                />
            </Link>
        </div>
    );
};

export default ProjectDetails;
