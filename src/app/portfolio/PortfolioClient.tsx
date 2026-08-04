"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// We can define our fallback portfolio projects here in case the CMS is empty


export default function PortfolioClient({ projects = [] }: { projects?: any[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="flex-grow py-20 px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto w-full">
      <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold font-condensed mb-4 text-gray-900">Our Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Explore some of our most memorable events and activations. Click on a project to see the full gallery.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-3 mb-10">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeCategory === category 
                ? "bg-red-600 text-white shadow-md shadow-red-200" 
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link 
            key={project.id} 
            href={`/portfolio/${project.id}`}
            className="group block relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Image Layer */}
            <div className={`absolute inset-0 z-0 bg-gradient-to-br ${project.color}`}>
              {project.coverImage && (
                <Image 
                  src={project.coverImage} 
                  alt={project.title} 
                  fill 
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110" 
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              )}
            </div>
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

            {/* Hover Reveal Overlay (Subtle) */}
            <div className="absolute inset-0 z-20 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]"></div>
            
            {/* Content Layer */}
            <div className="absolute inset-0 z-30 p-6 sm:p-8 flex flex-col justify-end">
              
              <div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                 <span className="text-xs font-bold tracking-widest uppercase text-white/90 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                    {project.category}
                 </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white font-condensed tracking-wide drop-shadow-md leading-tight">
                {project.title}
              </h3>
              
              <p className="text-white/80 text-sm sm:text-base line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 transform translate-y-4 group-hover:translate-y-0">
                {project.description}
              </p>

              <div className="inline-flex items-center font-semibold text-orange-400 group-hover:text-orange-300 transition-colors opacity-0 group-hover:opacity-100 duration-500 delay-200">
                Explore Gallery 
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
