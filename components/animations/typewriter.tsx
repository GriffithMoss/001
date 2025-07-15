"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface TypewriterProps {
  text: string
  delay?: number
  speed?: number
  className?: string
}

export function Typewriter({ text, delay = 0, speed = 0.05, className }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i))
        i++
        if (i > text.length) {
          clearInterval(interval)
        }
      }, speed * 1000)

      return () => clearInterval(interval)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [text, delay, speed])

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="inline-block w-0.5 h-6 bg-current ml-1"
      />
    </motion.span>
  )
}
