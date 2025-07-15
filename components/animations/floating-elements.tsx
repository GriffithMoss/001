"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FloatingElement({ children, delay = 0, duration = 3, className }: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [-5, 5, -5],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
