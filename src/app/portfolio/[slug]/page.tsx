import Image from 'next/image';
import Link from 'next/link';

// You can move this to a separate data file later
const projects = [
  {
    id: "cadboury-tang",
    title: "Cadbury Tang - Canopy Activation",
    description: "A vibrant canopy activation setup and event for Cadbury Tang.",
    tag: "Cadboury_Tang",
  },
  {
    id: "tata-swach",
    title: "Tata Swach Door-To-Door Campaign",
    description: "A comprehensive BTL activation and door-to-door campaign for Tata Swach.",
    tag: "Tata_Swach",
  },
  {
    id: "nukkad-natak",
    title: "Nukkad Natak",
    description: "An engaging street play and theatrical performance for brand awareness.",
    tag: "Nukkad_Natak",
  },
  {
    id: "pcra-campaign",
    title: "PCRA Fuel & LPG Saving Awareness Campaign",
    description: "A nationwide awareness campaign promoting fuel and LPG conservation.",
    tag: "PCRA", // Updated tag
  },
  {
    id: "saas-bina-sasural",
    title: "Saas Bina Sasural - Sony Entertainment Television",
    description: "An engaging promotional event and activation for Sony Entertainment Television.",
    tag: "Saas Bina Sasural",
  },
  {
    id: "chajje-chajje-ka-pyar",
    title: "Chajje Chajje Ka Pyar - Sony Entertainment Television",
    description: "An interactive promotional campaign and activation for Sony Entertainment Television.",
    tag: "Chajje",
  },
  {
    id: "celebrity-fitness-mall-activations",
    title: "Celebrity Fitness - Mall Activations",
    description: "High-energy mall activations and fitness promotional events for Celebrity Fitness.",
    tag: "Mall",
  },
  {
    id: "ghaziabad-smart-city-campaign",
    title: "Ghaziabad Smart City Campaign - Canopy Activation",
    description: "A civic awareness and interactive canopy activation campaign for Ghaziabad Smart City.",
    tag: "Ghaziabad",
  },
  {
    id: "mountain-dew-van-activation",
    title: "Mountain Dew - Van Activation",
    description: "A high-impact and adventurous van activation campaign for Mountain Dew.",
    tag: "Mountain Dew",
  },
  {
    id: "tata-nano-van-activation",
    title: "Tata Nano - Van Activation",
    description: "An engaging van activation and promotional campaign for Tata Nano.",
    tag: "Tata Nano",
  },
  {
    id: "punjab-national-bank-van-activation",
    title: "Punjab National Bank Van Activation",
    description: "A comprehensive van activation and outreach campaign for Punjab National Bank.",
    tag: "pnb",
  },
  {
    id: "hp-pcra-conservation-fortnight",
    title: "HP & PCRA Oil & Gas Conservation Fortnight",
    description: "A nationwide government and NGO awareness campaign for oil and gas conservation.",
    tag: "HP",
  },
];

interface CloudinaryImage {
  public_id: string;
  version: number;
  format: string;
}

export default async function ProjectGalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.slug);

  if (!project) {
    return (
      <div className="flex-grow py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Project not found</h1>
        <Link href="/portfolio" className="text-blue-600 hover:underline">
          Return to Portfolio
        </Link>
      </div>
    );
  }

  const cloudName = 'crw5jo8x'; 
  let images: CloudinaryImage[] = [];

  try {
    const url = `https://res.cloudinary.com/${cloudName}/image/list/${project.tag}.json`;
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Cache for 1 hour
    
    if (response.ok) {
      const data = await response.json();
      images = data.resources || [];
    } else {
      console.error("Failed to fetch images from Cloudinary");
    }
  } catch (error) {
    console.error("Error fetching images:", error);
  }

  return (
    <div className="flex-grow py-20 px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto w-full">
      <div className="mb-8">
        <Link href="/portfolio" className="text-sm font-semibold text-gray-500 hover:text-gray-900 flex items-center gap-2 mb-6 transition-colors">
          &larr; Back to Portfolio
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold font-condensed mb-4 text-gray-900">{project.title}</h1>
        <p className="text-lg text-gray-600 max-w-3xl">{project.description}</p>
      </div>

      {images.length === 0 ? (
        <div className="py-20 text-center bg-gray-50 rounded-2xl border border-gray-100">
          <p className="text-gray-500">No images found for this project yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img) => {
            const imageUrl = `https://res.cloudinary.com/${cloudName}/image/upload/v${img.version}/${img.public_id}.${img.format}`;
            
            return (
              <div key={img.public_id} className="relative aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group bg-gray-100">
                <Image 
                  src={imageUrl} 
                  alt={img.public_id} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
