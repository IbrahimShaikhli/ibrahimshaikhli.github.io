"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "AGP",
    description: "A comprehensive landingpage for managing and showcasing various projects.",
    image: "/AGPPROFILE.jpg",
    tags: ["React", "Next.js", "Tailwind CSS", "Vercel"],
    liveLink: "https://agp-sigma.vercel.app/",
    githubLink: "https://github.com/IbrahimShaikhli/AGP",
  },
  {
    id: 2,
    title: "HalalElites",
    description: "A web development services based in Toledo Ohio",
    image: "/HELogo.jpg",
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
    <section id="projects" className="py-20 bg-gray-950 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-900/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">My Projects</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one presented unique challenges and opportunities for growth.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Image with fixed aspect ratio */}
              <div className="relative w-full aspect-[3/2] overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                  placeholder="blur"
                  blurDataURL="/blur-placeholder.jpg" // Make sure you generate one
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>

              {/* Text content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-purple-900/30 text-purple-400 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-purple-500 hover:text-purple-400"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  )}
                  {project.githubLink !== "#" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-purple-500 hover:text-purple-400"
                    >
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/IbrahimShaikhli"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-600 text-purple-500 hover:bg-purple-600 hover:text-white font-bold py-2 px-6 rounded-full transition-all duration-200 inline-block"
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
