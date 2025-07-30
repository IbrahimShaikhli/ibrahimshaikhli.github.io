"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "HalalElites",
    description: "A web development services based in Toledo Ohio that offers AI solutions and Mentorship",
    image: "/HELogo.jpg",
    tags: ["React", "Next.js", "Tailwind CSS", "Zoho"],
    liveLink: "https://halalelites.dev/",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Coming Soon",
    description: "...",
    image: "/placeholder.svg",
    tags: ["React", "Next.js", "Tailwind CSS", "Zoho"],
    liveLink: "https://halalelites.dev/",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Coming Soon",
    description: "...",
    image: "/placeholder.svg",
    tags: [],
    liveLink: "#",
    githubLink: "#",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one presented unique challenges and opportunities for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-colors"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-purple-900/30 text-purple-400 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    className="flex items-center gap-1 text-sm text-purple-500 hover:text-purple-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-1 text-sm text-purple-500 hover:text-purple-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/IbrahimShaikhli"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-600 text-purple-500 hover:bg-purple-600 hover:text-white font-bold py-2 px-6 rounded-full transition-all inline-block"
          >
            <span className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              View All Projects
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}