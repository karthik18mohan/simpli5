import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface Project {
  title: string;
  category: string;
  description: string;
  features: string[];
  images: string[];
  folder?: string;
  year?: string;
  location?: string;
}

const categoryColors: Record<string, string> = {
  Architecture: "bg-stone-700 text-stone-100",
  "Interior Design": "bg-gold-500/20 text-gold-600 border border-gold-400/30",
  Residential: "bg-emerald-700/20 text-emerald-700 border border-emerald-400/30",
  Institutional: "bg-blue-700/20 text-blue-700 border border-blue-400/30",
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {project.images && project.images.length > 0 && (
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          className="w-full"
          style={{ height: '240px' }}
        >
          {project.images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`${project.title} — view ${i + 1}`}
                className="w-full object-cover"
                style={{ height: '240px' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-serif text-lg font-semibold text-stone-900 leading-tight">{project.title}</h3>
          <span className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 font-medium ${categoryColors[project.category] || 'bg-stone-100 text-stone-600'}`}>
            {project.category}
          </span>
        </div>

        {(project.year || project.location) && (
          <p className="text-xs text-stone-400 mb-3 tracking-wide">
            {[project.year, project.location].filter(Boolean).join(' · ')}
          </p>
        )}

        <p className="text-stone-600 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {project.features && project.features.length > 0 && (
          <div>
            <ul className="space-y-1.5">
              {(expanded ? project.features : project.features.slice(0, 3)).map((feature, i) => (
                <li key={i} className="text-xs text-stone-600 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 mt-1.5" />
                  {feature}
                </li>
              ))}
            </ul>
            {project.features.length > 3 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-3 text-xs text-gold-600 hover:text-gold-700 font-medium flex items-center gap-1 transition-colors"
              >
                {expanded ? (
                  <><ChevronUp size={14} /> Show less</>
                ) : (
                  <><ChevronDown size={14} /> +{project.features.length - 3} more</>
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
