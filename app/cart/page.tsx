"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trash2, MinusCircle, PlusCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useCart } from "@/context/cart-context"

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const handleCheckout = () => {
    setIsCheckingOut(true)
    // Simulate checkout process
    setTimeout(() => {
      alert("注文が完了しました！")
      setIsCheckingOut(false)
    }, 2000)
  }

  return (
    <div className="flex flex-col min-h-screen vintage-paper">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif mb-8">ショッピングカート</h1>

          {items.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="border rounded-sm overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left p-4">商品</th>
                        <th className="text-center p-4 hidden sm:table-cell">価格</th>
                        <th className="text-center p-4">数量</th>
                        <th className="text-right p-4">小計</th>
                        <th className="p-4 w-10"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {items.map((item) => (
                        <tr key={item.product.id}>
                          <td className="p-4">
                            <div className="flex items-center gap-4">
                              <div className="relative w-16 h-16 flex-shrink-0 border">
                                <Image
                                  src={item.product.image || "/placeholder.svg"}
                                  alt={item.product.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <Link href={`/products/${item.product.id}`} className="font-medium hover:text-primary">
                                  {item.product.name}
                                </Link>
                                <p className="text-sm text-muted-foreground sm:hidden">
                                  ¥{item.product.price.toLocaleString()}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="text-center p-4 hidden sm:table-cell">
                            ¥{item.product.price.toLocaleString()}
                          </td>
                          <td className="text-center p-4">
                            <div className="flex items-center justify-center">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                                aria-label="数量を減らす"
                              >
                                <MinusCircle className="h-4 w-4" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                aria-label="数量を増やす"
                              >
                                <PlusCircle className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                          <td className="text-right p-4">¥{(item.product.price * item.quantity).toLocaleString()}</td>
                          <td className="p-4 text-center">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeItem(item.product.id)}
                              aria-label="削除"
                            >
                              <Trash2 className="h-4 w-4 text-muted-foreground" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <div className="bg-card p-6 border rounded-sm">
                  <h2 className="text-xl font-serif mb-4">注文概要</h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">小計</span>
                      <span>¥{getTotalPrice().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">送料</span>
                      <span>¥800</span>
                    </div>
                    <div className="border-t pt-3 flex justify-between font-medium">
                      <span>合計（税込）</span>
                      <span>¥{(getTotalPrice() + 800).toLocaleString()}</span>
                    </div>
                  </div>

                  <Button className="w-full" onClick={handleCheckout} disabled={isCheckingOut}>
                    {isCheckingOut ? "処理中..." : "購入手続きへ"}
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-serif mb-4">カートは空です</h2>
              <p className="text-muted-foreground mb-8">商品をカートに追加してください。</p>
              <Link href="/products">
                <Button>商品一覧へ戻る</Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
