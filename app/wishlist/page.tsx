"use client"

import Link from "next/link"
import Image from "next/image"
import { Trash2, Heart } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useWishlist } from "@/context/wishlist-context"
import { useCart } from "@/context/cart-context"
import { PageTransition } from "@/components/animations/page-transition"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { ScaleOnHover } from "@/components/animations/scale-on-hover"

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist()
  const { addItem } = useCart()

  const handleAddToCart = (product: any) => {
    addItem(product)
  }

  const handleClearWishlist = () => {
    if (confirm("お気に入りリストをすべて削除しますか？")) {
      clearWishlist()
    }
  }

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen vintage-paper">
        <Header />

        <main className="flex-1 py-8">
          <div className="container mx-auto px-4">
            <FadeIn direction="up">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-serif">お気に入り</h1>
                {wishlistItems.length > 0 && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" onClick={handleClearWishlist}>
                      すべて削除
                    </Button>
                  </motion.div>
                )}
              </div>
            </FadeIn>

            <AnimatePresence mode="wait">
              {wishlistItems.length > 0 ? (
                <motion.div
                  key="wishlist-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                    <AnimatePresence>
                      {wishlistItems.map((product) => (
                        <StaggerItem key={product.id}>
                          <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8, y: -50 }}
                            transition={{ duration: 0.3 }}
                            className="group relative bg-card rounded-sm overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 vintage-paper"
                          >
                            <ScaleOnHover>
                              <Link href={`/products/${product.id}`} className="block aspect-square overflow-hidden">
                                <Image
                                  src={product.image || "/placeholder.svg"}
                                  alt={product.name}
                                  width={300}
                                  height={300}
                                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                                />
                              </Link>
                            </ScaleOnHover>

                            <div className="p-4">
                              <h3 className="font-serif text-lg mb-1 line-clamp-1">{product.name}</h3>
                              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
                              <div className="flex items-center justify-between mb-3">
                                <p className="font-medium">
                                  ¥{product.price.toLocaleString()}{" "}
                                  <span className="text-xs text-muted-foreground">（税込）</span>
                                </p>
                              </div>
                              <div className="flex gap-2">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                                  <Button onClick={() => handleAddToCart(product)} className="w-full" size="sm">
                                    カートに追加
                                  </Button>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => removeFromWishlist(product.id)}
                                    aria-label="お気に入りから削除"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </motion.div>
                              </div>
                            </div>
                          </motion.div>
                        </StaggerItem>
                      ))}
                    </AnimatePresence>
                  </StaggerContainer>

                  <FadeIn direction="up" delay={0.3}>
                    <div className="text-center">
                      <p className="text-muted-foreground mb-4">
                        {wishlistItems.length}個の商品がお気に入りに登録されています
                      </p>
                      <Link href="/products">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Button variant="outline">商品一覧に戻る</Button>
                        </motion.div>
                      </Link>
                    </div>
                  </FadeIn>
                </motion.div>
              ) : (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="mb-8"
                  >
                    <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h2 className="text-2xl font-serif mb-4">お気に入りは空です</h2>
                    <p className="text-muted-foreground mb-8">
                      気になる商品を見つけたら、ハートマークをクリックしてお気に入りに追加しましょう。
                    </p>
                  </motion.div>
                  <Link href="/products">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Button>商品一覧を見る</Button>
                    </motion.div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  )
}
