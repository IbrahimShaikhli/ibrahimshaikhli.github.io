import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import { AnimationProvider } from "@/components/animationContext"
const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ibrahim Al Shaikhli | Web Developer",
  description: "",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
      <AnimationProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </AnimationProvider>
      </body>
    </html>
  )
}
