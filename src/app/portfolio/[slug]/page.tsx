import Image from 'next/image';
import Link from 'next/link';
import ImageGallery, { GalleryImage } from '@/components/portfolio/ImageGallery';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

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
  {
    id: "hpcl-milcy-turbo-canopy-activation",
    title: "HPCL Milcy Turbo Canopy Activation",
    description: "A targeted canopy activation and product showcase for HPCL Milcy Turbo.",
    tag: "hpcl milcy",
  },
  {
    id: "silica-canopy-activation",
    title: "Silica Canopy Activation",
    description: "A professional canopy activation and brand promotion campaign for Silica.",
    tag: "Silica",
  },
  {
    id: "dell-roadshow",
    title: "Dell RoadShow",
    description: "An engaging and extensive roadshow campaign for Dell technologies.",
    tag: "Dell",
  },
  {
    id: "colgate-roadshow",
    title: "Colgate Roadshow",
    description: "A wide-reaching and engaging roadshow activation for Colgate.",
    tag: "colgate",
  },
  {
    id: "pcra-van-publicity",
    title: "PCRA Van Publicity",
    description: "An impactful van publicity and awareness campaign for PCRA.",
    tag: "PCRA VAN",
  },
  {
    id: "pcra-conference",
    title: "PCRA Conference",
    description: "A well-organized professional conference and corporate event for PCRA.",
    tag: "Conference",
  },
];

// Removed old CloudinaryImage interface since we use GalleryImage now

export default async function ProjectGalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  
  // 1. Try to fetch from Sanity first
  const query = `*[_type == "project" && slug.current == $slug][0] {
    title,
    description,
    "gallery": gallery[]
  }`
  
  let sanityProject = null;
  try {
    sanityProject = await client.fetch(query, { slug: resolvedParams.slug })
  } catch (err) {
    console.error("Sanity fetch error:", err)
  }

  // If found in Sanity
  if (sanityProject) {
    const sanityImages: GalleryImage[] = (sanityProject.gallery || []).map((img: any) => ({
      url: urlForImage(img)?.url() || '',
      thumbnailUrl: urlForImage(img)?.width(600).url() || ''
    })).filter((img: any) => img.url !== '');

    return (
      <div className="flex-grow py-20 px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <Link href="/portfolio" className="text-sm font-semibold text-gray-500 hover:text-gray-900 flex items-center gap-2 mb-6 transition-colors">
            &larr; Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold font-condensed mb-4 text-gray-900">{sanityProject.title}</h1>
          <p className="text-lg text-gray-600 max-w-3xl">{sanityProject.description}</p>
        </div>
        <ImageGallery images={sanityImages} />
      </div>
    )
  }

  // 2. Fallback to hardcoded Cloudinary logic
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
  let images: GalleryImage[] = [];

  try {
    const url = `https://res.cloudinary.com/${cloudName}/image/list/${project.tag}.json`;
    const response = await fetch(url, { next: { revalidate: 3600 } }); 
    
    if (response.ok) {
      const data = await response.json();
      images = (data.resources || []).map((img: any) => ({
        url: `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/v${img.version}/${img.public_id}.${img.format}`,
        thumbnailUrl: `https://res.cloudinary.com/${cloudName}/image/upload/w_600,f_auto,q_auto/v${img.version}/${img.public_id}.${img.format}`
      }));
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

      <ImageGallery images={images} />
    </div>
  );
}
