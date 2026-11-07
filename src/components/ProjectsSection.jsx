import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowUpRight, 
  Sparkles, 
  TrendingUp,
  Maximize2
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { sound } from '../utils/audio';
import ProjectModal from './ProjectModal';

export default function ProjectsSection({ projects }) {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI & ML', 'Full-Stack', 'Cloud & Systems', 'Creative & Web3'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-medium text-cyan-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Architectures & Systems
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every project represents solving hard problems at scale: high-throughput concurrency, real-time WebSockets, WebGL rendering, and production AI orchestration.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick();
                  setFilter(cat);
                }}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  filter === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 flex flex-col justify-between overflow-hidden group transition-all duration-300"
            >
              {/* Card Header Gradient Banner */}
              <div className={`p-6 bg-gradient-to-br ${project.gradient} border-b border-slate-800/60 relative`}>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-950/80 text-cyan-300 border border-cyan-500/30">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  {project.role}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Impact Metric Callout */}
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-start gap-2.5">
                  <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300 font-medium">
                    {project.metrics}
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 5).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/50 text-slate-400">
                      +{project.techStack.length - 5}
                    </span>
                  )}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="p-4 px-6 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => {
                    sound.playClick();
                    setSelectedProject(project);
                  }}
                  className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Deep Dive Spec</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View GitHub Repository"
                    onClick={() => sound.playClick()}
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Launch Live Demo"
                    onClick={() => sound.playClick()}
                    className="p-2 rounded-lg bg-indigo-600/30 hover:bg-indigo-600 text-cyan-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
