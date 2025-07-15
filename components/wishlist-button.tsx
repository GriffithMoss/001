"use client"

import type React from "react"
import { Heart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useWishlist } from "@/context/wishlist-context"
import type { Product } from "@/context/cart-context"
import { cn } from "@/lib/utils"

interface WishlistButtonProps {
  product: Product
  variant?: "default" | "ghost" | "outline"
  size?: "default" | "sm" | "lg" | "icon"
  showText?: boolean
  className?: string
}

export function WishlistButton({
  product,
  variant = "ghost",
  size = "icon",
  showText = false,
  className,
}: WishlistButtonProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const inWishlist = isInWishlist(product.id)

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (inWishlist) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button
        variant={variant}
        size={size}
        onClick={handleToggleWishlist}
        className={cn("transition-colors relative overflow-hidden", className)}
        aria-label={inWishlist ? "お気に入りから削除" : "お気に入りに追加"}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={inWishlist ? "filled" : "empty"}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.3, ease: "backOut" }}
          >
            <Heart
              className={cn(
                "h-4 w-4 transition-colors",
                size === "sm" && "h-3 w-3",
                size === "lg" && "h-5 w-5",
                inWishlist ? "fill-red-500 text-red-500" : "text-muted-foreground hover:text-red-400",
              )}
            />
          </motion.div>
        </AnimatePresence>

        {showText && (
          <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="ml-2">
            {inWishlist ? "お気に入り済み" : "お気に入り"}
          </motion.span>
        )}

        {/* Ripple effect */}
        <AnimatePresence>
          {inWishlist && (
            <motion.div
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 4, opacity: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-red-500 rounded-full"
            />
          )}
        </AnimatePresence>
      </Button>
    </motion.div>
  )
}
