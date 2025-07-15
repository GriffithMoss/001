"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { Product } from "@/context/cart-context"
import { WishlistButton } from "@/components/wishlist-button"
import { ScaleOnHover } from "@/components/animations/scale-on-hover"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative bg-card rounded-sm overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 vintage-paper"
    >
      <ScaleOnHover>
        <Link href={`/products/${product.id}`} className="block aspect-square overflow-hidden relative">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="absolute top-2 right-2"
          >
            <WishlistButton product={product} />
          </motion.div>
        </Link>
      </ScaleOnHover>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="p-4"
      >
        <h3 className="font-serif text-lg mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="font-medium">
            ¥{product.price.toLocaleString()} <span className="text-xs text-muted-foreground">（税込）</span>
          </p>
          <Link href={`/products/${product.id}`}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="sm">
                詳細を見る
              </Button>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}
