import Image from 'next/image';
import Link from 'next/link';
import ImageGallery, { GalleryImage } from '@/components/portfolio/ImageGallery';
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

import { fallbackProjects as projects } from '../data';

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

  // 2. Fallback to local folder logic
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

  let images: GalleryImage[] = [];

  const folderPath = project.coverImage.substring(0, project.coverImage.lastIndexOf('/'));
  
  try {
    const fs = require('fs');
    const path = require('path');
    const fullFolderPath = path.join(process.cwd(), 'public', folderPath);
    
    if (fs.existsSync(fullFolderPath)) {
      const files = fs.readdirSync(fullFolderPath);
      const imageFiles = files.filter((file: string) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
      
      images = imageFiles.map((file: string) => ({
        url: `${folderPath}/${file}`,
        thumbnailUrl: `${folderPath}/${file}`
      }));
    }
  } catch (error) {
    console.error("Error fetching local images:", error);
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
