"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useAnimation } from "@/components/animationContext"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { animationComplete } = useAnimation()

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      let currentSection = ""

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = sectionId
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
  
    // Get the target element
    const targetId = href.replace("#", "");
    const element = targetId ? document.getElementById(targetId) : document.body;
  
    if (element) {
      // First handle the scroll
      const targetPosition = targetId ? element.offsetTop - 80 : 0;
      
      // Close mobile menu first, then scroll after a slight delay
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
        // Add delay before scrolling to let the menu animation complete
        setTimeout(() => {
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }, 300);
      } else {
        // If menu isn't open, scroll immediately
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  }

  // If animation isn't complete, don't render the navbar
  if (!animationComplete) {
    return null;
  }
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="#" className="text-2xl font-bold text-white" onClick={(e) => handleNavClick(e, "#")}>
            <span className="text-purple-500">I</span>
            <span className="gradient-text">AS</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-gray-300 hover:text-purple-500 transition-colors relative group ${
                  (link.href === "#" && !activeSection) || (link.href === `#${activeSection}`) ? "text-purple-500" : ""
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 right-0 bottom-0 h-0.5 bg-purple-500 transform transition-transform origin-left ${
                    (link.href === "#" && !activeSection) || (link.href === `#${activeSection}`)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full transition-colors "
            >
              Hire Me
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-gray-300 hover:text-purple-500 py-2 transition-colors ${
                      (link.href === "#" && !activeSection) || (link.href === `#${activeSection}`)
                        ? "text-purple-500"
                        : ""
                    }`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full transition-colors text-center"
                  onClick={(e) => handleNavClick(e, "#contact")}
                >
                  Hire Me
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}