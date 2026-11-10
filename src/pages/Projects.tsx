import React, { useState } from 'react';
import ProjectCard, { Project } from '../components/ProjectCard';

const projects: Project[] = [
  {
    title: 'Vihara Township',
    category: 'Architecture',
    year: '2024',
    location: 'Ballahalli, Mysuru',
    description: 'A sustainable and contemporary residential township integrating traditional architectural elements with modern design. The project emphasises eco-friendly practices, solar passive cooling, rainwater harvesting, and community-centric amenities.',
    features: [
      'Contemporary design inspired by traditional architecture',
      'Maximised natural ventilation and daylighting',
      'Eco-friendly materials: PPC cement, precast blocks, recycled waste',
      'Rainwater harvesting, sewage treatment plant, waste recycling',
      'Residential mix: villas, studio to 3BHK apartments, senior housing',
      'Public amenities: school, healthcare, clubhouse, gardens, sports zone',
      'EV charging, staff apartments, water harvesting facilities',
      'Grid-pattern circulation with residential, public, and service zoning',
      'Integration of Moogana Hundi Kere lake as green wellness zone',
    ],
    images: ['/images/1/1.png', '/images/1/2.png', '/images/1/3.png'],
  },
  {
    title: 'Spa Interior Design',
    category: 'Interior Design',
    year: '2024',
    location: 'Mysuru, Karnataka',
    description: 'Interior design for a two-level spa incorporating a vintage theme for adult spaces and an animal-inspired theme for the children\'s area. Comfort, relaxation, and functionality are balanced across dedicated treatment, wellness, and family zones.',
    features: [
      'Vintage-themed spa interiors with warm, calming ambiance',
      'Dedicated reception and waiting area with inviting design',
      'Pedicure and manicure space with specialised seating',
      'Hair spa and haircut area designed for comfort',
      'Massage rooms with integrated steam facilities',
      'Retail store for essential oils and spa products',
      'Children\'s saloon and play area with fun animal-inspired theme',
      'Eating, reading, and waiting lounge for families',
      'Two-floor zoning for optimised user flow',
    ],
    images: ['/images/2/1.png', '/images/2/2.png', '/images/2/3.png'],
  },
  {
    title: 'Fine Art Campus',
    category: 'Institutional',
    year: '2024',
    location: 'Karnataka',
    description: 'An academic campus designed around the concept of "Bricks and Greens". Courtyards serve as central interactive and climatic elements, with distinct coloured brick facades establishing identity for each department.',
    features: [
      '"Bricks and Greens" concept — structures built around courtyards',
      'Six departments each defined by unique coloured brick facades',
      'Courtyards for natural light, ventilation, and social interaction',
      'Jaali walls for ornamental screening and airflow',
      'Hip roof design for effective rain and heat management',
      'Zoning: education block, student accommodation, staff housing, sports',
      'Integrated green spaces throughout campus layout',
      'Clustered arrangement to foster community and interaction',
    ],
    images: ['/images/3/1.png', '/images/3/2.png', '/images/3/3.png'],
  },
];

const categories = ['All', 'Architecture', 'Interior Design', 'Institutional'];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/2/1.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-stone-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-gold-400 text-xs tracking-[0.25em] uppercase font-medium mb-4">Portfolio</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-white mb-4">
            Our <span className="italic text-gold-400">Projects</span>
          </h1>
          <p className="text-stone-400 max-w-2xl leading-relaxed">
            Architecture, interior design, and institutional spaces — each project
            shaped by its context, climate, and the people who inhabit it.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-stone-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-1 py-3 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 rounded-sm ${
                  activeCategory === cat
                    ? 'bg-stone-900 text-white'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-stone-500 text-sm mb-8">
            Showing <span className="font-semibold text-stone-800">{filtered.length}</span> {filtered.length === 1 ? 'project' : 'projects'}
            {activeCategory !== 'All' && ` in ${activeCategory}`}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          <div className="mt-20 bg-stone-900 rounded-xl p-10 text-center">
            <h2 className="font-serif text-2xl font-semibold text-white mb-3">
              Have a project in mind?
            </h2>
            <p className="text-stone-400 mb-7 max-w-xl mx-auto">
              Every great space begins with a conversation. Let's explore what's possible.
            </p>
            <button className="bg-gold-500 text-white px-8 py-3 text-sm font-semibold hover:bg-gold-600 transition-colors rounded-sm">
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
