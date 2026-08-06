import { Suspense } from 'react'
import { client } from '../../sanity/lib/client'
import { urlForImage } from '../../sanity/lib/image'
import PortfolioClient from './PortfolioClient'
import { fallbackProjects } from './data'

export const revalidate = 60 // revalidate at most every 60 seconds

export default async function PortfolioPage() {
  // Fetch projects from Sanity
  const query = `*[_type == "project"] {
    title,
    "id": slug.current,
    description,
    coverImage,
    "category": category->title,
    color
  }`
  
  let sanityProjects = []
  try {
    sanityProjects = await client.fetch(query)
  } catch (error) {
    console.error("Failed to fetch from Sanity:", error)
  }

  // Format the data to match the fallback
  const formattedProjects = sanityProjects.map((project: any) => ({
    ...project,
    coverImage: project.coverImage ? urlForImage(project.coverImage)?.url() : null
  }))

  // Combine Sanity projects with hardcoded projects
  const projects = [...formattedProjects, ...fallbackProjects]

  return (
    <Suspense fallback={<div className="py-20 text-center">Loading portfolio...</div>}>
      <PortfolioClient projects={projects} />
    </Suspense>
  )
}
