import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-20 font-sans">
      <SEO 
        title="Waterproofing Projects & Case Studies in Hyderabad | AR Waterproofing Solutions"
        description="Explore our portfolio of successful waterproofing projects across Hyderabad and Telangana. See real before-and-after results of our residential, commercial, and industrial waterproofing services."
        keywords="waterproofing projects Hyderabad, waterproofing case studies, terrace waterproofing examples, basement leakage repair projects, AR Waterproofing portfolio, structural repair cases Telangana"
      />
      <div className="bg-slate-900 pt-24 pb-32 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Our Work Speaks</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4 text-lg">
          Explore our portfolio of successful waterproofing projects across Hyderabad and Telangana.
        </p>
      </div>

      <section className="pb-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 -mt-6 relative z-10">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                        filter === cat 
                        ? 'bg-brand-600 text-white shadow-lg' 
                        : 'bg-white text-slate-600 hover:bg-brand-50 border border-gray-200 shadow-sm'
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