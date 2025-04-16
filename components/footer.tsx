"use client"

import { ArrowUp } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 bg-black border-t border-gray-800 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-900/0 via-purple-600 to-purple-900/0"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-4 inline-block">
              <span className="text-purple-500">I</span>AS
            </Link>
            <p className="text-gray-400 mb-4 max-w-md">
              A passionate web developer focused on creating beautiful, functional, and user-centered digital
              experiences. Always eager to take on new challenges and collaborate on exciting projects.
            </p>
            
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-purple-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Web Development
                </Link>
              </li>
              
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  Mobile Development
                </Link>
              </li>
             
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Ibrahim Al Shaikhli. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm flex items-center">
              Made with  React
            </span>

            <motion.button
              whileHover={{ y: -5 }}
              onClick={scrollToTop}
              className="ml-4 bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4 text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
