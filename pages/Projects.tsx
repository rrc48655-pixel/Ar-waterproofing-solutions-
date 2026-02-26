import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { MapPin, Eye } from 'lucide-react';
import SEO from '../components/SEO';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [showBefore, setShowBefore] = useState(false);
  const hasBefore = !!project.beforeImage;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full">
      {/* Image Container */}
      <div 
        className="relative overflow-hidden h-72 bg-slate-900 cursor-pointer" 
        onClick={() => hasBefore && setShowBefore(!showBefore)}
      >
        {/* Images with Crossfade Transition */}
        <div className="relative w-full h-full">
           {/* After Image (Always rendered at bottom) */}
           <img 
            src={project.afterImage} 
            alt={`${project.title} - After`} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          
          {/* Before Image (Overlay with fade) */}
          {hasBefore && (
            <img 
              src={project.beforeImage} 
              alt={`${project.title} - Before`} 
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110 ${showBefore ? 'opacity-100' : 'opacity-0'}`}
            />
          )}

          {/* Dark Gradient Overlay for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none"></div>
        </div>
        
        {/* Category Badges */}
        <div className="absolute top-4 left-4 z-20">
             <span className="bg-brand-900/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-lg border border-white/10">
                {project.category}
             </span>
        </div>

        {/* Status Indicator (Top Right) */}
        {hasBefore ? (
            <div className="absolute top-4 right-4 z-20">
                 <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide shadow-lg backdrop-blur-md transition-all duration-300 border border-white/10 ${showBefore ? 'bg-amber-500/90 text-white' : 'bg-green-600/90 text-white'}`}>
                    {showBefore ? 'Before Repair' : 'Completed'}
                 </span>
            </div>
        ) : (
             <div className="absolute top-4 right-4 z-20">
                <span className="bg-green-600/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-lg border border-white/10">
                  Completed
                </span>
             </div>
        )}

        {/* Toggle Switch (Bottom Center) */}
        {hasBefore && (
            <div 
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex bg-black/60 backdrop-blur-xl rounded-full p-1.5 shadow-2xl z-30 border border-white/10 transition-transform hover:scale-105" 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${showBefore ? 'bg-amber-500 text-white shadow-lg' : 'text-slate-200 hover:text-white hover:bg-white/10'}`}
                onClick={() => setShowBefore(true)}
              >
                Before
              </button>
              <button 
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${!showBefore ? 'bg-green-600 text-white shadow-lg' : 'text-slate-200 hover:text-white hover:bg-white/10'}`}
                onClick={() => setShowBefore(false)}
              >
                After
              </button>
            </div>
        )}
        
        {/* Hint Overlay */}
        {hasBefore && (
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-black/40 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 border border-white/20">
                 <Eye size={14} /> Click to Toggle
              </div>
           </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
           <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">{project.title}</h3>
           {project.location && (
              <div className="flex items-center text-slate-500 text-xs font-medium">
                  <MapPin size={14} className="mr-1 text-brand-500" /> {project.location}
              </div>
           )}
        </div>

        <div className="space-y-4 flex-grow border-t border-gray-100 pt-4">
            <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">The Challenge</span>
                <p className="text-sm text-slate-600 leading-relaxed bg-red-50/50 p-3 rounded-lg border border-red-50">{project.problem}</p>
            </div>
            <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">The Fix</span>
                <p className="text-sm text-slate-600 leading-relaxed">{project.solution}</p>
            </div>
             <div className="bg-green-50 p-3 rounded-lg border border-green-100 mt-2">
                <span className="text-xs font-bold text-green-700 uppercase tracking-wider block mb-1">Result</span>
                <p className="text-sm text-green-800 font-medium">{project.outcome}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-20 font-sans">
      <SEO 
        title="Waterproofing Projects in Hyderabad | AR Solutions Portfolio"
        description="View our successful waterproofing projects in Hyderabad. See how we've protected residential and commercial buildings from severe water damage."
        keywords="waterproofing projects Hyderabad, AR Waterproofing portfolio, structural repair cases"
      />
      <div className="bg-slate-900 py-24 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Our Work Speaks</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4 text-lg">
          Explore our portfolio of successful waterproofing projects across Hyderabad and Telangana.
        </p>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                        filter === cat 
                        ? 'bg-brand-600 text-white shadow-lg' 
                        : 'bg-white text-slate-600 hover:bg-brand-50 border border-gray-200'
                    }`}
                >
                    {cat}
                </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;