"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { getFeaturedProducts } from "@/lib/products"
import { PageTransition } from "@/components/animations/page-transition"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { SlideIn } from "@/components/animations/slide-in"
import { Typewriter } from "@/components/animations/typewriter"
import { FloatingElement } from "@/components/animations/floating-elements"
import { ScaleOnHover } from "@/components/animations/scale-on-hover"

export default function Home() {
  const featuredProducts = getFeaturedProducts()

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen vintage-paper">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative bg-muted/50 overflow-hidden">
            <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2 space-y-6">
                <FadeIn direction="up" delay={0.2}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-wider leading-tight">
                    <Typewriter text="伝統と現代が融合する" delay={0.5} speed={0.08} />
                    <br />
                    <Typewriter text="日本の文房具" delay={2} speed={0.08} />
                  </h1>
                </FadeIn>

                <FadeIn direction="up" delay={0.8}>
                  <p className="text-lg text-muted-foreground">
                    職人の技が光る和紙テープから、日常を彩る万年筆まで。
                    <br />
                    あなたの文房具体験を豊かにする特別なアイテムをご用意しています。
                  </p>
                </FadeIn>

                <FadeIn direction="up" delay={1.2}>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/products">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Button className="text-base px-6 py-5">商品を見る</Button>
                      </motion.div>
                    </Link>
                    <Link href="/about">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Button variant="outline" className="text-base px-6 py-5 bg-transparent">
                          当店について
                        </Button>
                      </motion.div>
                    </Link>
                  </div>
                </FadeIn>
              </div>

              <div className="md:w-1/2 mt-8 md:mt-0">
                <SlideIn direction="right" delay={0.5}>
                  <FloatingElement delay={1} duration={4}>
                    <div className="relative aspect-[4/3] vintage-border">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="日本の伝統的な文房具"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </FloatingElement>
                </SlideIn>
              </div>
            </div>
          </section>

          {/* Featured Products */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <FadeIn direction="up" className="text-center mb-12">
                <h2 className="text-3xl font-serif mb-4">おすすめ商品</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  当店が自信を持っておすすめする厳選された文房具です。伝統的な技術と現代のデザインが融合した特別なアイテムをご覧ください。
                </p>
              </FadeIn>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                  <StaggerItem key={product.id}>
                    <ProductCard product={product} />
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <FadeIn direction="up" delay={0.5} className="text-center mt-12">
                <Link href="/products">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Button variant="outline" size="lg">
                      すべての商品を見る
                    </Button>
                  </motion.div>
                </Link>
              </FadeIn>
            </div>
          </section>

          {/* About Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <SlideIn direction="left" className="order-2 md:order-1">
                  <FloatingElement delay={0.5} duration={5}>
                    <div className="relative aspect-[4/3] vintage-border">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="店舗の様子"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </FloatingElement>
                </SlideIn>

                <div className="order-1 md:order-2 space-y-6">
                  <FadeIn direction="right">
                    <h2 className="text-3xl font-serif">筆記具の夢について</h2>
                  </FadeIn>

                  <FadeIn direction="right" delay={0.2}>
                    <p className="text-muted-foreground">
                      私たちは2005年の創業以来、日本の伝統的な文房具と現代のデザインを融合させた商品を提供してきました。職人の技術を大切にしながら、日常の中で使える美しい文房具を厳選しています。
                    </p>
                  </FadeIn>

                  <FadeIn direction="right" delay={0.4}>
                    <p className="text-muted-foreground">
                      和紙テープや万年筆、手作りノートなど、一つ一つに物語があります。私たちは単なる文房具ではなく、あなたの創造性を刺激し、日々の生活に彩りを添える道具をお届けしたいと考えています。
                    </p>
                  </FadeIn>

                  <FadeIn direction="right" delay={0.6}>
                    <Link href="/about">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Button variant="outline">もっと詳しく</Button>
                      </motion.div>
                    </Link>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <FadeIn direction="up" className="text-center mb-12">
                <h2 className="text-3xl font-serif mb-4">商品カテゴリー</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  様々な種類の文房具を取り揃えております。あなたのお気に入りを見つけてください。
                </p>
              </FadeIn>

              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "和紙テープ",
                    image: "/placeholder.svg?height=300&width=400",
                    href: "/products?category=和紙テープ",
                  },
                  { name: "ペン", image: "/placeholder.svg?height=300&width=400", href: "/products?category=ペン" },
                  { name: "ノート", image: "/placeholder.svg?height=300&width=400", href: "/products?category=ノート" },
                  { name: "インク", image: "/placeholder.svg?height=300&width=400", href: "/products?category=インク" },
                  { name: "紙製品", image: "/placeholder.svg?height=300&width=400", href: "/products?category=紙製品" },
                  {
                    name: "アクセサリー",
                    image: "/placeholder.svg?height=300&width=400",
                    href: "/products?category=アクセサリー",
                  },
                ].map((category) => (
                  <StaggerItem key={category.name}>
                    <ScaleOnHover scale={1.03}>
                      <Link
                        href={category.href}
                        className="group relative overflow-hidden rounded-sm vintage-border block"
                      >
                        <div className="aspect-[4/3] relative">
                          <Image
                            src={category.image || "/placeholder.svg"}
                            alt={category.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <motion.div
                            initial={{ opacity: 0.7 }}
                            whileHover={{ opacity: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-black/30 flex items-center justify-center"
                          >
                            <motion.h3
                              initial={{ y: 10, opacity: 0.8 }}
                              whileHover={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.3 }}
                              className="text-white text-2xl font-serif"
                            >
                              {category.name}
                            </motion.h3>
                          </motion.div>
                        </div>
                      </Link>
                    </ScaleOnHover>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary/10">
            <div className="container mx-auto px-4 text-center">
              <FadeIn direction="up">
                <h2 className="text-3xl font-serif mb-6">特別なお知らせを受け取る</h2>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  新商品の入荷情報や限定セールのお知らせをいち早くお届けします。
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
                >
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    placeholder="メールアドレス"
                    className="px-4 py-2 border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Button>登録する</Button>
                  </motion.div>
                </motion.div>
              </FadeIn>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  )
}
