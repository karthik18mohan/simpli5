import React from 'react';
import { ArrowRight, Building2, Sofa, Cuboid, Leaf } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const services = [
    { icon: Building2, label: 'Architecture', desc: 'Residential, institutional & campus design' },
    { icon: Sofa, label: 'Interior Design', desc: 'Spaces crafted for comfort and character' },
    { icon: Cuboid, label: '3D Visualisation', desc: 'Revit, Lumion, Enscape & 3ds Max' },
    { icon: Leaf, label: 'Sustainable Design', desc: 'Passive cooling, rainwater harvesting & green materials' },
  ];

  const featuredProjects = [
    {
      num: '01',
      folder: '1',
      title: 'Vihara Township',
      category: 'Architecture',
      tagline: 'Living green, designed for tomorrow',
      location: 'Ballahalli, Mysuru',
    },
    {
      num: '02',
      folder: '2',
      title: 'Spa Interior Design',
      category: 'Interior Design',
      tagline: 'Where wellness meets timeless design',
      location: 'Mysuru, Karnataka',
    },
    {
      num: '03',
      folder: '3',
      title: 'Fine Art Campus',
      category: 'Institutional',
      tagline: 'Bricks, greens, and spaces that inspire',
      location: 'Karnataka',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-end bg-stone-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/1/1.png"
            alt="Vihara Township — Simpli5 Design Studio"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pb-20 pt-32 w-full">
          <div className="max-w-3xl">
            <p className="text-gold-400 text-xs font-medium tracking-[0.25em] uppercase mb-6">
              Architecture · Interior · Visualisation
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6">
              Spaces that<br />
              <span className="text-gold-400 italic">speak</span> to you
            </h1>
            <p className="text-stone-300 text-lg leading-relaxed mb-10 max-w-2xl">
              Simpli5 Design Studio is a Mysuru-based architecture and interior design practice
              building thoughtful, sustainable spaces — from residential townships to academic campuses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2.5 bg-gold-500 text-white px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-gold-600 transition-colors duration-200 group"
              >
                View Portfolio
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 border border-stone-400 text-stone-200 px-7 py-3.5 text-sm font-medium hover:bg-stone-800 transition-colors duration-200"
              >
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services strip */}
      <section className="bg-stone-800 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-stone-700">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="lg:px-8 first:pl-0 last:pr-0 flex items-start gap-3">
                  <Icon className="h-5 w-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white text-sm font-semibold">{s.label}</p>
                    <p className="text-stone-400 text-xs mt-0.5 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-gold-500 text-xs tracking-[0.2em] uppercase font-medium mb-2">Selected Work</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-stone-900">Featured Projects</h2>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="hidden sm:inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 font-medium transition-colors group"
            >
              All projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.num}
                className="group cursor-pointer overflow-hidden rounded-lg bg-stone-200"
                onClick={() => onNavigate('projects')}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={`/images/${project.folder}/1.png`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-gold-400 text-xs font-medium tracking-widest uppercase">{project.category}</span>
                    <p className="text-white text-sm italic font-serif mt-1">{project.tagline}</p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-stone-400 text-xs font-mono">{project.num}</span>
                    <span className="text-stone-200 text-xs">—</span>
                    <span className="text-gold-500 text-xs font-medium">{project.category}</span>
                  </div>
                  <h3 className="font-serif text-stone-900 font-semibold">{project.title}</h3>
                  <p className="text-stone-500 text-xs mt-1">{project.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 font-medium"
            >
              View all projects <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-500 text-xs tracking-[0.2em] uppercase font-medium mb-3">The Studio</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-stone-900 mb-6 leading-tight">
                Design rooted in<br />place and purpose
              </h2>
              <p className="text-stone-600 leading-relaxed mb-5">
                Simpli5 Design Studio is led by Ila Sirish, a B.Arch graduate from the University of Mysore
                (Class of 2024). The practice specialises in architecture, interior design, and 3D
                visualisation — bringing together technical rigour and design sensitivity on every project.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                From sustainable residential townships to vintage spa interiors and academic campuses,
                each project is approached with an understanding of place, climate, and the people who will inhabit the space.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900 hover:text-gold-600 transition-colors group"
              >
                About the studio
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src="/images/3/2.png"
                  alt="Fine Art Campus — Simpli5 Design Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold-500 text-white p-6 rounded-lg shadow-xl">
                <p className="font-serif text-3xl font-bold">3</p>
                <p className="text-xs uppercase tracking-widest mt-1">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-white mb-4">
            Have a project in mind?
          </h2>
          <p className="text-stone-400 mb-8">
            Let's talk about how Simpli5 can bring your vision to life.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 bg-gold-500 text-white px-8 py-3.5 text-sm font-semibold hover:bg-gold-600 transition-colors"
          >
            Start a conversation <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
