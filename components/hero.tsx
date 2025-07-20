import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="Home" className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0"></div>

      <div className="container mx-auto px-4 z-10">
        {/* Hero content with animations */}
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
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
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
    </section>
  )
}