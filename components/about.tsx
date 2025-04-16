"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import {Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

// Timeline data
const timelineData = [
 
  {
    id: 1,
    year: "2024",
    title: "Freelance Web Developer",
    company: "Self-employed",
    description:
      "Worked on various freelance projects, focusing on responsive web design and user experience.",
    position: "left",
  },
  {
    id: 2,
    year: "2023",
    title: "Information Tech Degree",
    company: "SEGi University",
    description: "Graduated with honors in IT with a focus on web, mobile development and user interface design.",
    position: "right",
  },
  {
    id: 3,
    year: "2022",
    title: "Coding Trainer ",
    company: "Kido Code",
    description:
      "Mentored and trained junior developers in coding during my internship.",
    position: "left",
  },
]

export default function About() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, 100])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-black relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            My journey in web development has been driven by a passion for creating beautiful, functional digital
            experiences. Here&apos;s a glimpse into my professional path.
          </p>
        </motion.div>

        <motion.div style={{ opacity, y }} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-500">Fullstack Developer</h3>
              <p className="text-gray-300 mb-6 text-lg">
                I&apos;m a passionate web developer specializing in creating responsive, user-friendly websites and
                applications. With a strong foundation in modern frontend technologies like React, Next.js, and Tailwind
                CSS, I build digital experiences that are both beautiful and functional.
              </p>
              <p className="text-gray-300 mb-8 text-lg">
                My approach combines clean code, intuitive design, and performance optimization to deliver solutions
                that exceed expectations. I&apos;m constantly learning and exploring new technologies to stay at the
                forefront of web development.
              </p>
            </div>

            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">
                    <strong className="text-purple-400">Location:</strong> Sharjah, UAE
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">
                    <strong className="text-purple-400">Experience:</strong> 1 Year
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">
                    <strong className="text-purple-400">Degree:</strong> B.I.T (HONS)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">
                    <strong className="text-purple-400">Availability:</strong> Freelance/Full-time
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#projects"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  View My Work
                </Link>
                {/* <a
                  href="#"
                  className="border border-purple-600 text-purple-500 hover:bg-purple-600/10 hover:text-purple-400 font-bold py-2 px-6 rounded-full transition-all duration-300 flex items-center gap-2"
                >
                  <FileText className="h-4 w-4" />
                  Download CV
                </a> */}
                <a
                  href="https://www.linkedin.com/in/ibrahim-khalid-8b5692176/" target="_blank"
                  className="border border-purple-600 text-purple-500 hover:bg-purple-600/10 hover:text-purple-400 font-bold py-2 px-6 rounded-full transition-all duration-300 flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-8 text-center text-purple-500">My Journey</h3>

          <div className="timeline-container">
            {timelineData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: item.position === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
                viewport={{ once: true }}
                className={`timeline-item timeline-${item.position}`}
              >
                <div className="timeline-content">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold text-purple-400">{item.title}</h4>
                    <span className="text-sm bg-purple-900/50 px-3 py-1 rounded-full text-purple-300">{item.year}</span>
                  </div>
                  <h5 className="text-gray-300 mb-2">{item.company}</h5>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
