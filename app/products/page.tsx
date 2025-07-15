"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { products, getCategories } from "@/lib/products"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { PageTransition } from "@/components/animations/page-transition"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "")

  const categories = getCategories()

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory && selectedCategory !== "all" ? product.category === selectedCategory : true
    const matchesSearch = searchQuery
      ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true

    return matchesCategory && matchesSearch
  })

  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen vintage-paper">
        <Header />

        <main className="flex-1 py-8">
          <div className="container mx-auto px-4">
            <FadeIn direction="up">
              <h1 className="text-3xl font-serif mb-6">商品一覧</h1>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <motion.div whileFocus={{ scale: 1.02 }} className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="商品を検索..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="w-full md:w-64">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="カテゴリを選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">すべてのカテゴリ</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </motion.div>
              </div>
            </FadeIn>

            {filteredProducts.length > 0 ? (
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <StaggerItem key={product.id}>
                    <ProductCard product={product} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            ) : (
              <FadeIn direction="up" delay={0.3}>
                <div className="text-center py-12">
                  <motion.p
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg text-muted-foreground"
                  >
                    商品が見つかりませんでした。
                  </motion.p>
                </div>
              </FadeIn>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  )
}
