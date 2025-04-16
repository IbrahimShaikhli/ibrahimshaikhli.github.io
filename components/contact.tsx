"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Github, Linkedin, Send, } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-950 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Get In Touch</h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I&apos;m always open to new ideas and
            collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-500">Contact Information</CardTitle>
                <CardDescription className="text-gray-400">
                  Feel free to reach out through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-900/30 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-200">Email</h4>
                    <a
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      ibrahim.alshaikhli@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-900/30 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-200">Phone</h4>
                    <a href="tel:+97150814858" className="text-gray-400 hover:text-purple-400 transition-colors">
                      +971 50 814 8858
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-900/30 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-200">Location</h4>
                    <p className="text-gray-400">Sharjah, UAE</p>
                  </div>
                </div>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  href="mailto:ibrahim.alshaikhli@outlook.com"
                  className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 mt-4 "
                >
                  <Send className="h-5 w-5" />
                  Send Me an Email
                </motion.a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900 border-gray-800 h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-purple-500">Connect With Me</CardTitle>
                <CardDescription className="text-gray-400">
                  Follow me on social media or check out my work
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <motion.a
                    whileHover={{ y: -5 }}
                    href="https://github.com/IbrahimShaikhli" 
                    target="_blank"
                    className="flex flex-col items-center justify-center bg-gray-800 hover:bg-purple-900/30 p-6 rounded-lg transition-colors duration-300"
                  >
                    <Github className="h-10 w-10 text-purple-500 mb-3" />
                    <h4 className="font-medium text-gray-200">GitHub</h4>
                    <p className="text-sm text-gray-400 text-center">Check out my projects</p>
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ y: -5 }}
                    href="https://www.linkedin.com/in/ibrahim-khalid-8b5692176/" 
                    target="_blank"
                    className="flex flex-col items-center justify-center bg-gray-800 hover:bg-purple-900/30 p-6 rounded-lg transition-colors duration-300"
                  >
                    <Linkedin className="h-10 w-10 text-purple-500 mb-3" />
                    <h4 className="font-medium text-gray-200">LinkedIn</h4>
                    <p className="text-sm text-gray-400 text-center">Connect professionally</p>
                  </motion.a>
                </div>
                
                <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                  <p className="text-gray-300 text-center">
                    Looking forward to connecting with you! Feel free to reach out for collaborations, 
                    job opportunities, or just to say hello.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}