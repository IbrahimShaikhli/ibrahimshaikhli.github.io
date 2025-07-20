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
    image: "/placeholder.svg?height=400&width=600",
    tags: [],
    liveLink: "#",
    githubLink: "#",
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gray-950 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-900/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-900/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one presented unique challenges and opportunities for growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-colors duration-200 project-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-48 w-full overflow-hidden group">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-105 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>

                {/* Hover overlay with key features - Simplified */}
                <div className="absolute inset-0 bg-purple-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-center p-6">
                  <h4 className="text-white font-bold mb-3">Key Features:</h4>
                  <ul className="text-white text-sm space-y-2">
                    <li>• Responsive design for all devices</li>
                    <li>• Optimized performance</li>
                    <li>• Intuitive user interface</li>
                  </ul>
                </div>
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
                    className="flex items-center gap-1 text-sm text-purple-500 hover:text-purple-400 transition-colors duration-150"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex items-center gap-1 text-sm text-purple-500 hover:text-purple-400 transition-colors duration-150"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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