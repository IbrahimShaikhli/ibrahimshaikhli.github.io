"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowDown, Terminal, Play } from "lucide-react"
import Link from "next/link"
import { useRef, useState, useEffect } from "react" 
import CodeBackground from "@/components/codeBG"

// Define TypeScript interfaces
interface TerminalLine {
  text: string;
  delay: number;
}

interface TypedLineProps {
  text: string;
  delay: number;
  index: number;
  onComplete: () => void;
}

export default function Hero() {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const [animationStage, setAnimationStage] = useState<"init" | "typing" | "complete">("init")
  
  // Terminal typing text
  const terminalLines: TerminalLine[] = [
    { text: "> npm run build", delay: 0.5 },
    { text: "Creating optimized production build...", delay: 1.2 },
    { text: "Compiling src/components/Hero.tsx...", delay: 1.8 },
    { text: "Generating UI components...", delay: 2.4 },
    { text: "Build complete! Starting application...", delay: 3.0 },
  ]
  
  // Start complete stage after typing is complete

  // Auto-start animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStage("typing")
    }, 800)
    
    return () => clearTimeout(timer)
  }, [])

  // Typing effect for terminal lines
  const TypedLine = ({ text, delay, index, onComplete }: TypedLineProps) => {
    const [displayText, setDisplayText] = useState("")
    const [cursorVisible, setCursorVisible] = useState(true)
    
    useEffect(() => {
      let currentIndex = 0
      
      // Start typing after delay
      const startTimeout = setTimeout(() => {
        const interval = setInterval(() => {
          if (currentIndex <= text.length) {
            setDisplayText(text.substring(0, currentIndex))
            currentIndex++
          } else {
            clearInterval(interval)
            // Call completion callback for the last line
            if (index === terminalLines.length - 1) {
              setTimeout(() => onComplete(), 300)
            }
          }
        }, 30) // typing speed
        
        return () => clearInterval(interval)
      }, delay * 1000)
      
      // Blinking cursor
      const cursorInterval = setInterval(() => {
        setCursorVisible(prev => !prev)
      }, 500)
      
      return () => {
        clearTimeout(startTimeout)
        clearInterval(cursorInterval)
      }
    }, [text, delay, index, onComplete])
    
    return (
      <div className="flex items-start mb-2 font-mono text-sm">
        {index === 0 && <span className="text-green-400 mr-2">➜</span>}
        <span className="text-gray-300">{displayText}</span>
        {cursorVisible && <span className="w-2 h-4 bg-gray-400 ml-1"></span>}
      </div>
    )
  }
  
  // Hero content that appears after animation
  const renderedHeroContent = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center max-w-3xl mx-auto"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
      >
        Ibrahim Al Shaikhli
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300"
      >
        Full Stack Developer
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-gray-400 mb-8 max-w-2xl mx-auto"
      >
        I build exceptional and accessible digital experiences for the web. Focused on creating elegant solutions to
        complex problems.
      </motion.p>
    </motion.div>
  )
  
  // Check if we should show the CodeBackground
  
  return (
    <section id="Home" className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background code animation container - only shown after animation completes */}
        <div ref={backgroundRef} className="absolute inset-0 overflow-hidden opacity-50">
          <CodeBackground />
        </div>
    

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0"></div>

      <div className="container mx-auto px-4 z-10">
        <AnimatePresence mode="wait">
          {/* Initial terminal window */}
          {animationStage === "init" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                onClick={() => setAnimationStage("typing")}
                className="bg-gray-800 rounded-lg border border-gray-700 p-8 shadow-lg cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Terminal size={32} className="text-purple-500" />
                  <span className="text-xl font-medium text-white">Start Portfolio Experience</span>
                </div>
                <div className="flex items-center gap-3 mt-4 justify-center">
                  <Play size={16} className="text-green-500" />
                  <span className="text-sm text-gray-400">Click to begin</span>
                </div>
              </motion.div>
            </motion.div>
          )}
          
          {/* Terminal typing animation */}
          {animationStage === "typing" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="bg-gray-900 w-full max-w-lg rounded-lg overflow-hidden shadow-xl border border-gray-700">
                {/* Terminal header */}
                <div className="flex items-center bg-gray-800 px-4 py-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-sm font-mono text-center flex-1 text-gray-400">portfolio-builder</div>
                </div>
                
                {/* Terminal content */}
              
              </div>
            </motion.div>
          )}
          
          {/* Final hero content */}
          {animationStage === "complete" && renderedHeroContent}
        </AnimatePresence>
      </div>

      {/* Scroll indicator - only shows when animation is complete */}
      <AnimatePresence>
       
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            >
              <Link href="#about" aria-label="Scroll to About section">
                <ArrowDown className="h-8 w-8 text-purple-500" />
              </Link>
            </motion.div>
          </motion.div>
      </AnimatePresence>
    </section>
  )
}