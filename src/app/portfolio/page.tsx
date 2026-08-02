import Link from "next/link";
import Image from "next/image";

// We can define our portfolio projects here
const projects = [
  {
    id: "cadboury-tang", // This will be the slug
    title: "Cadbury Tang - Canopy Activation",
    description: "A vibrant canopy activation setup and event for Cadbury Tang.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785670354/100_5899_goqs3z.jpg", 
    tag: "Cadboury_Tang",
    color: "from-orange-400 to-yellow-300", // Fallback color
    category: "Event Activation"
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
    category: "Street Play"
  },
  {
    id: "pcra-campaign",
    title: "PCRA Fuel & LPG Saving Awareness Campaign",
    description: "A nationwide awareness campaign promoting fuel and LPG conservation.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785673882/DSCN3308_jnyjyf.jpg", 
    tag: "PCRA", // Updated tag
    color: "from-green-500 to-teal-400",
    category: "Awareness Campaign"
  },
  {
    id: "saas-bina-sasural",
    title: "Saas Bina Sasural - Sony Entertainment Television",
    description: "An engaging promotional event and activation for Sony Entertainment Television.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785674461/DSC_4095_thoqfe.jpg", 
    tag: "Saas Bina Sasural",
    color: "from-purple-500 to-pink-500",
    category: "TV Promotion"
  },
  {
    id: "chajje-chajje-ka-pyar",
    title: "Chajje Chajje Ka Pyar - Sony Entertainment Television",
    description: "An interactive promotional campaign and activation for Sony Entertainment Television.",
    coverImage: "https://res.cloudinary.com/crw5jo8x/image/upload/v1785675216/000_0094_blldxx.jpg", 
    tag: "Chajje",
    color: "from-indigo-500 to-purple-500",
    category: "TV Promotion"
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
  // You can add more projects here in the future
];

export default function PortfolioPage() {
  return (
    <div className="flex-grow py-20 px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto w-full">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold font-condensed mb-4 text-gray-900">Our Portfolio</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Explore some of our most memorable events and activations. Click on a project to see the full gallery.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
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
