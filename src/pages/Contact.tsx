import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', projectType: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email address';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
        setIsSubmitted(false);
      }, 4000);
    }
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', details: 'ilasirish2001@gmail.com', subtitle: 'Respond within 24 hours' },
    { icon: Phone, title: 'Phone', details: '+91 81476 47126', subtitle: 'Mon–Sat, 9 am – 6 pm' },
    {
      icon: MapPin, title: 'Studio',
      details: 'Below Lens Hut, Vijaya Bank Circle',
      subtitle: 'New Kantharaj Urs Rd, Kuvempu Nagara, Mysuru, Karnataka 570009',
    },
  ];

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center px-6">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gold-500/10 rounded-full">
              <CheckCircle className="h-12 w-12 text-gold-500" />
            </div>
          </div>
          <h2 className="font-serif text-3xl font-semibold text-stone-900 mb-3">Message received</h2>
          <p className="text-stone-600 max-w-md mx-auto">
            Thank you for reaching out. We'll get back to you within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 bg-stone-900 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-gold-400 text-xs tracking-[0.25em] uppercase font-medium mb-4">Let's talk</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-white mb-4">
            Get in <span className="italic text-gold-400">Touch</span>
          </h1>
          <p className="text-stone-400 max-w-xl leading-relaxed">
            Whether you have a project brief or just an idea — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info */}
            <div>
              <h2 className="font-serif text-xl font-semibold text-stone-900 mb-7">Contact Details</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2.5 bg-stone-900 rounded-lg flex-shrink-0">
                        <Icon className="h-4 w-4 text-gold-400" />
                      </div>
                      <div>
                        <p className="text-xs text-stone-400 uppercase tracking-widest font-medium mb-0.5">{info.title}</p>
                        <p className="text-stone-800 text-sm font-medium">{info.details}</p>
                        <p className="text-stone-500 text-xs mt-0.5">{info.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 p-5 bg-white border border-stone-200 rounded-lg">
                <h3 className="text-sm font-semibold text-stone-900 mb-3 tracking-wide">Studio Hours</h3>
                <div className="space-y-2 text-xs">
                  {[
                    ['Monday – Friday', '9:00 AM – 6:00 PM'],
                    ['Saturday', '10:00 AM – 4:00 PM'],
                    ['Sunday', 'Closed'],
                  ].map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="text-stone-500">{day}</span>
                      <span className="text-stone-800 font-medium">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-xl p-8 border border-stone-200 shadow-sm">
              <h2 className="font-serif text-xl font-semibold text-stone-900 mb-7">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-2">Name *</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-sm text-sm focus:ring-1 focus:ring-gold-400 focus:border-gold-400 outline-none transition ${errors.name ? 'border-red-400' : 'border-stone-200'}`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-2">Email *</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-sm text-sm focus:ring-1 focus:ring-gold-400 focus:border-gold-400 outline-none transition ${errors.email ? 'border-red-400' : 'border-stone-200'}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-2">Phone</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-200 rounded-sm text-sm focus:ring-1 focus:ring-gold-400 focus:border-gold-400 outline-none transition"
                      placeholder="+91 _____ _____"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-2">Project Type</label>
                    <select
                      name="projectType" value={formData.projectType} onChange={handleChange}
                      className="w-full px-4 py-3 border border-stone-200 rounded-sm text-sm focus:ring-1 focus:ring-gold-400 focus:border-gold-400 outline-none transition text-stone-700"
                    >
                      <option value="">Select a type</option>
                      <option value="residential">Residential Architecture</option>
                      <option value="interior">Interior Design</option>
                      <option value="institutional">Institutional / Campus</option>
                      <option value="commercial">Commercial</option>
                      <option value="visualisation">3D Visualisation</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-2">Message *</label>
                  <textarea
                    name="message" rows={5} value={formData.message} onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-sm text-sm focus:ring-1 focus:ring-gold-400 focus:border-gold-400 outline-none transition resize-none ${errors.message ? 'border-red-400' : 'border-stone-200'}`}
                    placeholder="Tell us about your project — scope, location, timeline, and any specific requirements..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-stone-900 text-white px-7 py-3 text-sm font-semibold hover:bg-gold-500 transition-colors duration-200"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
