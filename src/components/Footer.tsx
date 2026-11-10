import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl font-semibold text-white mb-2">
              Simpli<span className="text-gold-400">5</span> Design Studio
            </h2>
            <p className="text-xs text-stone-400 tracking-widest uppercase mb-5">
              Architecture · Interior · Visualisation
            </p>
            <p className="text-stone-400 leading-relaxed max-w-sm mb-6 text-sm">
              A design practice rooted in Mysuru, crafting spaces that balance
              built form with nature, tradition with modernity, and function with beauty.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="mailto:ilasirish2001@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-gold-400 flex-shrink-0" />
                ilasirish2001@gmail.com
              </a>
              <a href="tel:+918147647126" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-gold-400 flex-shrink-0" />
                +91 81476 47126
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Below Lens Hut, New Kantharaj Urs Rd,<br />Kuvempu Nagara, Mysuru, Karnataka 570009</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold tracking-widest uppercase mb-5">Navigate</h3>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-stone-400 text-sm hover:text-gold-400 transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold tracking-widest uppercase mb-5">Connect</h3>
            <div className="flex gap-3 mb-6">
              <a
                href="https://instagram.com"
                className="p-2.5 bg-stone-800 rounded hover:bg-gold-500 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-2.5 bg-stone-800 rounded hover:bg-gold-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <div className="text-xs text-stone-500 space-y-1">
              <p>B.Arch, University of Mysore</p>
              <p>Class of 2024</p>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Simpli5 Design Studio. All rights reserved.</p>
          <p>Crafted with intention · Mysuru, Karnataka</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
