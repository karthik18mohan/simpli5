import React from 'react';
import { Building2, Sofa, Cuboid, Leaf, Ruler, FileText, Lightbulb, PenTool } from 'lucide-react';

const mainServices = [
  {
    icon: Building2,
    title: 'Architecture Design',
    description: 'From residential townships to institutional campuses — full architectural services encompassing concept, design development, working drawings, and site coordination.',
    features: ['Concept Design', 'Design Development', 'Working Drawings', 'Site Supervision'],
  },
  {
    icon: Sofa,
    title: 'Interior Design',
    description: 'Spaces crafted for how people live and feel. Interior design services that consider materiality, light, and human experience — from spa interiors to residential spaces.',
    features: ['Space Planning', 'Material & Finish Selection', 'Furniture Layout', 'Lighting Concept'],
  },
  {
    icon: Cuboid,
    title: '3D Visualisation',
    description: 'Photo-realistic renders and walkthroughs using Lumion, Enscape, and 3ds Max — communicating design intent clearly to clients and stakeholders before anything is built.',
    features: ['Revit Modelling', 'Lumion Renders', 'Enscape Walkthroughs', '3ds Max + V-Ray'],
  },
  {
    icon: Leaf,
    title: 'Sustainable Design',
    description: 'Climate-responsive architecture that integrates passive cooling, daylighting, rainwater harvesting, and sustainable materials as core design principles — not add-ons.',
    features: ['Passive Cooling Strategy', 'Rainwater Harvesting', 'Solar Orientation', 'Green Materials'],
  },
];

const additionalServices = [
  { icon: Ruler, title: 'Space Planning', description: 'Optimising layouts for function, flow, and experience.' },
  { icon: FileText, title: 'Construction Documents', description: 'Detailed drawings and specifications for execution.' },
  { icon: Lightbulb, title: 'Design Consultation', description: 'Expert guidance at any stage of your project.' },
  { icon: PenTool, title: 'Concept Development', description: 'From brief to idea — structured creative exploration.' },
];

const Services: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/images/2/2.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-stone-900/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-gold-400 text-xs tracking-[0.25em] uppercase font-medium mb-4">What we do</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-white mb-4">
            Our <span className="italic text-gold-400">Services</span>
          </h1>
          <p className="text-stone-400 max-w-2xl leading-relaxed">
            Architecture, interior design, and visualisation services — from first sketch to final render.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-stone-50 rounded-lg p-8 border border-stone-100 hover:border-gold-300 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-stone-900 rounded-lg flex-shrink-0">
                      <Icon className="h-6 w-6 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-stone-900 mb-3">{service.title}</h3>
                      <p className="text-stone-600 text-sm leading-relaxed mb-5">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((f, fi) => (
                          <span key={fi} className="text-xs bg-white border border-stone-200 text-stone-600 px-3 py-1 rounded-full">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-serif text-2xl font-semibold text-stone-900">Additional Services</h2>
            <p className="text-stone-500 text-sm mt-2">Specialist support for specific needs at any stage of your project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg border border-stone-200 hover:border-gold-400 transition-colors duration-200">
                  <div className="p-2 bg-stone-100 rounded-lg w-fit mb-4">
                    <Icon className="h-5 w-5 text-gold-600" />
                  </div>
                  <h3 className="font-semibold text-stone-900 mb-2 text-sm">{service.title}</h3>
                  <p className="text-stone-500 text-xs leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-400 text-xs tracking-[0.2em] uppercase font-medium mb-3">Process</p>
            <h2 className="font-serif text-3xl font-semibold text-white">How a project unfolds</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: '01', title: 'Consultation', description: 'We understand your brief, timeline, and budget — asking the right questions from the start.' },
              { step: '02', title: 'Concept', description: 'Sketch design, massing, spatial strategy, and initial mood boards for your approval.' },
              { step: '03', title: 'Development', description: 'Detailed design, 3D visualisation, working drawings, and material specifications.' },
              { step: '04', title: 'Implementation', description: 'Construction documentation, contractor coordination, and site inspections.' },
            ].map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-gold-500 text-white rounded-full flex items-center justify-center font-mono text-sm font-semibold mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="font-serif text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
