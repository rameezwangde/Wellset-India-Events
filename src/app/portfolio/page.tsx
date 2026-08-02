"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// We can define our portfolio projects here
const projects = [
  {
    id: "cadboury-tang", // This will be the slug
    title: "Cadbury Tang - Canopy Activation",
    description: "A vibrant canopy activation setup and event for Cadbury Tang.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785670354/100_5899_goqs3z.jpg", 
    tag: "Cadboury_Tang",
    color: "from-orange-400 to-yellow-300", 
    category: "Canopy Activation"
  },
  {
    id: "tata-swach",
    title: "Tata Swach Door-To-Door Campaign",
    description: "A comprehensive BTL activation and door-to-door campaign for Tata Swach.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785672206/20130630_123155_v2uxny.jpg", 
    tag: "Tata_Swach",
    color: "from-blue-500 to-cyan-400",
    category: "BTL Activations"
  },
  {
    id: "nukkad-natak",
    title: "Nukkad Natak",
    description: "An engaging street play and theatrical performance for brand awareness.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785673320/IMG_3566_dmuyaf.jpg", 
    tag: "Nukkad_Natak",
    color: "from-red-500 to-rose-400",
    category: "Nukkad Natak"
  },
  {
    id: "pcra-campaign",
    title: "PCRA Fuel & LPG Saving Awareness Campaign",
    description: "A nationwide awareness campaign promoting fuel and LPG conservation.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785673882/DSCN3308_jnyjyf.jpg", 
    tag: "PCRA", 
    color: "from-green-500 to-teal-400",
    category: "Government & NGO Awareness Campaigns"
  },
  {
    id: "saas-bina-sasural",
    title: "Saas Bina Sasural - Sony Entertainment Television",
    description: "An engaging promotional event and activation for Sony Entertainment Television.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785674461/DSC_4095_thoqfe.jpg", 
    tag: "Saas Bina Sasural",
    color: "from-purple-500 to-pink-500",
    category: "Conference, Events & Exhibition"
  },
  {
    id: "chajje-chajje-ka-pyar",
    title: "Chajje Chajje Ka Pyar - Sony Entertainment Television",
    description: "An interactive promotional campaign and activation for Sony Entertainment Television.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785675216/000_0094_blldxx.jpg", 
    tag: "Chajje",
    color: "from-indigo-500 to-purple-500",
    category: "Conference, Events & Exhibition"
  },
  {
    id: "celebrity-fitness-mall-activations",
    title: "Celebrity Fitness - Mall Activations",
    description: "High-energy mall activations and fitness promotional events for Celebrity Fitness.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785675595/100_0165_jprzbd.jpg", 
    tag: "Mall",
    color: "from-orange-500 to-red-500",
    category: "Mall Activation"
  },
  {
    id: "ghaziabad-smart-city-campaign",
    title: "Ghaziabad Smart City Campaign - Canopy Activation",
    description: "A civic awareness and interactive canopy activation campaign for Ghaziabad Smart City.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785675981/20160527_121427_maygod.jpg", 
    tag: "Ghaziabad",
    color: "from-blue-600 to-sky-400",
    category: "Canopy Activation"
  },
  {
    id: "mountain-dew-van-activation",
    title: "Mountain Dew - Van Activation",
    description: "A high-impact and adventurous van activation campaign for Mountain Dew.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785677473/Picture_1391_pum84o.jpg", 
    tag: "Mountain Dew",
    color: "from-lime-500 to-green-600",
    category: "Van Activation"
  },
  {
    id: "tata-nano-van-activation",
    title: "Tata Nano - Van Activation",
    description: "An engaging van activation and promotional campaign for Tata Nano.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785677601/DSCF2845_ailauc.jpg", 
    tag: "Tata Nano",
    color: "from-yellow-400 to-orange-500",
    category: "Van Activation"
  },
  {
    id: "punjab-national-bank-van-activation",
    title: "Punjab National Bank Van Activation",
    description: "A comprehensive van activation and outreach campaign for Punjab National Bank.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785677884/IMG-20150914-WA0004_uvgzzp.jpg", 
    tag: "pnb",
    color: "from-blue-600 to-red-600",
    category: "Van Activation"
  },
  {
    id: "hp-pcra-conservation-fortnight",
    title: "HP & PCRA Oil & Gas Conservation Fortnight",
    description: "A nationwide government and NGO awareness campaign for oil and gas conservation.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785678102/DSC_0447_um3qwf.jpg", 
    tag: "HP",
    color: "from-teal-600 to-emerald-500",
    category: "Government & NGO Awareness Campaigns"
  },
  {
    id: "hpcl-milcy-turbo-canopy-activation",
    title: "HPCL Milcy Turbo Canopy Activation",
    description: "A targeted canopy activation and product showcase for HPCL Milcy Turbo.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785678613/IMG-20150828-WA0010_noyrm2.jpg", 
    tag: "hpcl milcy",
    color: "from-red-600 to-orange-500",
    category: "Canopy Activation"
  },
  {
    id: "silica-canopy-activation",
    title: "Silica Canopy Activation",
    description: "A professional canopy activation and brand promotion campaign for Silica.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785680077/100_7354_e9vzz8.jpg", 
    tag: "Silica",
    color: "from-sky-500 to-blue-600",
    category: "Canopy Activation"
  },
  {
    id: "dell-roadshow",
    title: "Dell RoadShow",
    description: "An engaging and extensive roadshow campaign for Dell technologies.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785680236/102_3197_vv3n24.jpg", 
    tag: "Dell",
    color: "from-blue-600 to-cyan-500",
    category: "Roadshow"
  },
  {
    id: "colgate-roadshow",
    title: "Colgate Roadshow",
    description: "A wide-reaching and engaging roadshow activation for Colgate.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785680366/100_2562_rfw8rf.jpg", 
    tag: "colgate",
    color: "from-red-600 to-pink-500",
    category: "Roadshow"
  },
  {
    id: "pcra-van-publicity",
    title: "PCRA Van Publicity",
    description: "An impactful van publicity and awareness campaign for PCRA.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785680493/DSC_1617_ls7vhk.jpg", 
    tag: "PCRA VAN",
    color: "from-amber-500 to-yellow-600",
    category: "Van Activation"
  },
  {
    id: "pcra-conference",
    title: "PCRA Conference",
    description: "A well-organized professional conference and corporate event for PCRA.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785680601/DSC_0796_snc109.jpg", 
    tag: "Conference",
    color: "from-slate-700 to-zinc-600",
    category: "Conferences"
  },
];

export default function PortfolioPage() {
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
