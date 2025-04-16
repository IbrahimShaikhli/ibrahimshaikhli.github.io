"use client"

import { createContext, useContext, useState, ReactNode } from "react"

interface AnimationContextProps {
  animationComplete: boolean
  setAnimationComplete: (value: boolean) => void
}

const AnimationContext = createContext<AnimationContextProps>({
  animationComplete: false,
  setAnimationComplete: () => {},
})

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [animationComplete, setAnimationComplete] = useState(false)

  return (
    <AnimationContext.Provider value={{ animationComplete, setAnimationComplete }}>
      {children}
    </AnimationContext.Provider>
  )
}

export const useAnimation = () => useContext(AnimationContext)