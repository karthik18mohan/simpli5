import React from 'react';
import { Layers, Compass, Leaf, Monitor } from 'lucide-react';

const skills = [
  { group: 'Design & Drawing', items: ['AutoCAD', 'Revit', 'Rhino', 'SketchUp'] },
  { group: '3D & Visualisation', items: ['3ds Max', 'Lumion', 'Enscape', 'V-Ray'] },
  { group: 'Creative Suite', items: ['Photoshop', 'Illustrator', 'InDesign'] },
  { group: 'Languages', items: ['English', 'Hindi', 'Kannada'] },
];

const values = [
  {
    icon: Compass,
    title: 'Site-Responsive Design',
    description: 'Every project begins with understanding the land — its orientation, climate, and existing ecology. Good architecture grows from its place.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Practice',
    description: 'Passive cooling, rainwater harvesting, natural materials, and low-energy strategies are built into the design process, not added as afterthoughts.',
  },
  {
    icon: Layers,
    title: 'Layered Thinking',
    description: 'Architecture operates at multiple scales simultaneously — from urban context to material detail. Each layer matters and each decision is considered.',
  },
  {
    icon: Monitor,
    title: 'Visual Precision',
    description: 'Technical accuracy and design intent come together through rigorous drawing, 3D modelling, and photo-realistic visualisation.',
  },
];

const About: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/images/1/2.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-stone-900/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-gold-400 text-xs tracking-[0.25em] uppercase font-medium mb-4">The Studio</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-white mb-4 leading-tight">
            About <span className="italic text-gold-400">Simpli5</span>
          </h1>
          <p className="text-stone-400 max-w-2xl leading-relaxed">
            A Mysuru-based architecture and design practice with a focus on
            thoughtful, sustainable, and human-centred spaces.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-500 text-xs tracking-[0.2em] uppercase font-medium mb-3">Founder</p>
              <h2 className="font-serif text-3xl font-semibold text-stone-900 mb-1">Ila Sirish</h2>
              <p className="text-stone-500 text-sm mb-6">B.Arch, University of Mysore (2024) · Mysuru, Karnataka</p>
              <div className="space-y-4 text-stone-600 leading-relaxed text-sm">
                <p>
                  Ila Sirish is an architect and designer based in Mysuru, Karnataka. She holds a
                  Bachelor of Architecture from the University of Mysore (Class of 2024), where her
                  work consistently explored the relationship between built form, nature, and community.
                </p>
                <p>
                  Her graduate portfolio spans three distinct typologies — a sustainable residential
                  township, a two-level spa interior, and a fine art campus — demonstrating range
                  across scale, programme, and design approach.
                </p>
                <p>
                  Simpli5 was founded with the belief that well-designed spaces — regardless of
                  budget or scale — have the power to improve how people live, work, and connect.
                  The practice prioritises site-responsive, climate-sensitive design that is rooted
                  in its local context.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-stone-100">
                <img
                  src="/images/3/1.png"
                  alt="Fine Art Campus — Simpli5 Design Studio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-stone-900 text-white p-5 rounded-lg shadow-xl">
                <p className="font-serif text-2xl font-bold text-gold-400">2024</p>
                <p className="text-xs text-stone-400 uppercase tracking-widest mt-0.5">Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-500 text-xs tracking-[0.2em] uppercase font-medium mb-3">Philosophy</p>
            <h2 className="font-serif text-3xl font-semibold text-stone-900">What drives the work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white p-8 rounded-lg border border-stone-100 hover:border-gold-300 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-stone-100 rounded-lg flex-shrink-0">
                      <Icon className="h-5 w-5 text-gold-600" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-stone-900 mb-2">{v.title}</h3>
                      <p className="text-stone-600 text-sm leading-relaxed">{v.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-gold-500 text-xs tracking-[0.2em] uppercase font-medium mb-3">Technical Skills</p>
            <h2 className="font-serif text-3xl font-semibold text-stone-900">Tools of the trade</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((group, i) => (
              <div key={i}>
                <h3 className="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-4">{group.group}</h3>
                <ul className="space-y-2.5">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-400 text-xs tracking-[0.2em] uppercase font-medium mb-3">How we work</p>
            <h2 className="font-serif text-3xl font-semibold text-white">The design process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Brief & Site', description: 'Understanding your vision, the site, climate, and constraints.' },
              { step: '02', title: 'Concept', description: 'Developing design principles, massing, and spatial strategy.' },
              { step: '03', title: 'Development', description: 'Working drawings, material selection, and 3D visualisation.' },
              { step: '04', title: 'Delivery', description: 'Construction documentation, coordination, and site review.' },
            ].map((p, i) => (
              <div key={i} className="border border-stone-700 rounded-lg p-6 hover:border-gold-500 transition-colors duration-300">
                <span className="font-mono text-gold-400 text-sm font-medium">{p.step}</span>
                <h3 className="font-serif text-lg font-semibold text-white mt-2 mb-3">{p.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
