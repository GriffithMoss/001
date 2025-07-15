"use client"

import { useState } from "react"
import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import { MinusCircle, PlusCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getProductById } from "@/lib/products"
import { useCart } from "@/context/cart-context"
import { ProductCard } from "@/components/product-card"
import { products } from "@/lib/products"
import { WishlistButton } from "@/components/wishlist-button"

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  const product = getProductById(productId)

  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addItem(product, quantity)
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  // Get related products (same category, excluding current product)
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="flex flex-col min-h-screen vintage-paper">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="vintage-border">
              <div className="aspect-square relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl font-serif">{product.name}</h1>

              <p className="text-2xl font-medium">
                ¥{product.price.toLocaleString()} <span className="text-sm text-muted-foreground">（税込）</span>
              </p>

              <div className="flex items-center gap-4">
                <WishlistButton product={product} showText={true} variant="outline" size="default" />
              </div>

              <div className="border-t border-b py-6">
                <p className="text-muted-foreground whitespace-pre-line">{product.description}</p>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-muted-foreground">数量:</span>
                <div className="flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    aria-label="数量を減らす"
                  >
                    <MinusCircle className="h-5 w-5" />
                  </Button>
                  <span className="w-8 text-center">{quantity}</span>
                  <Button variant="ghost" size="icon" onClick={incrementQuantity} aria-label="数量を増やす">
                    <PlusCircle className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <Button onClick={handleAddToCart} size="lg" className="w-full sm:w-auto">
                カートに追加
              </Button>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground">カテゴリー: {product.category}</p>
              </div>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-serif mb-6">関連商品</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
