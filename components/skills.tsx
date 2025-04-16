"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

// Enhanced skills data with project connections
const skills = [
  {
    name: "React",
    level: 90,
    description: "Building interactive UIs with React and its ecosystem",
    projects: ["E-Commerce Platform", "Portfolio Website"],
    icon: "⚛️",
  },
  {
    name: "Next.js",
    level: 85,
    description: "Creating performant, SEO-friendly React applications",
    projects: ["Task Management App"],
    icon: "▲",
  },
  {
    name: "TypeScript",
    level: 80,
    description: "Developing type-safe applications with enhanced tooling",
    projects: ["Task Management App"],
    icon: "TS",
  },
  {
    name: "Node.js",
    level: 75,
    description: "Building scalable backend services and APIs",
    projects: ["E-Commerce Platform"],
    icon: "🟢",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    description: "Creating responsive, utility-first designs",
    projects: ["Portfolio Website", "Task Management App"],
    icon: "🎨",
  },
  {
    name: "Redux",
    level: 78,
    description: "Managing complex application state",
    projects: ["Task Management App"],
    icon: "🔄",
  },
  {
    name: "MongoDB",
    level: 82,
    description: "Working with NoSQL databases for flexible data storage",
    projects: ["E-Commerce Platform"],
    icon: "🍃",
  },
  {
    name: "UI/UX Design",
    level: 78,
    description: "Creating intuitive and visually appealing interfaces",
    projects: ["Portfolio Website"],
    icon: "🎯",
  },
]

// Skill categories for the tabs
const categories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend", skills: ["React", "Next.js", "Tailwind CSS", "Redux"] },
  { id: "backend", name: "Backend", skills: ["Node.js", "MongoDB"] },
  { id: "design", name: "Design", skills: ["UI/UX Design"] },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => categories.find((cat) => cat.id === activeCategory)?.skills?.includes(skill.name))

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-purple-900/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-900/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            I've developed expertise in various technologies and tools throughout my journey as a web developer. Each
            skill is applied in real-world projects to create exceptional digital experiences.
          </p>
        </motion.div>

        {/* Skill category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-purple-600 text-white"
                  : "bg-gray-900 text-gray-300 hover:bg-gray-800"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between mb-1">
                <span className="font-medium text-gray-200 flex items-center gap-2">
                  <span className="inline-block w-6 text-center">{skill.icon}</span>
                  {skill.name}
                </span>
                <span className="text-purple-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-purple-600 to-purple-400 h-3 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
              <div className="mt-1">
                <p className="text-xs text-gray-400">{skill.description}</p>

                {/* Projects using this skill */}
                {skill.projects && skill.projects.length > 0 && (
                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-purple-400 font-medium">Projects using {skill.name}:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {skill.projects.map((project, idx) => (
                        <Link
                          key={idx}
                          href="#projects"
                          className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded-full hover:bg-purple-800/40 transition-colors"
                        >
                          {project}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold mb-6 text-purple-500">Other Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Git", "GitHub", "VS Code", "Figma", "Firebase", "GraphQL", "Jest", "Webpack", "Docker", "AWS"].map(
              (tool, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-gray-900 text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-800 hover:border-purple-500 hover:text-purple-400 transition-colors"
                >
                  {tool}
                </motion.span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
