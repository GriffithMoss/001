"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="flex flex-col min-h-screen vintage-paper">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-serif mb-8">お問い合わせ</h1>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 border rounded-sm">
                <h2 className="text-xl font-serif mb-4">店舗情報</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-1">住所</h3>
                    <p className="text-muted-foreground">
                      〒123-4567
                      <br />
                      東京都渋谷区文房具町1-2-3
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-1">電話番号</h3>
                    <p className="text-muted-foreground">03-1234-5678</p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-1">メールアドレス</h3>
                    <p className="text-muted-foreground">info@bunbogu-yume.jp</p>
                  </div>

                  <div>
                    <h3 className="font-medium mb-1">営業時間</h3>
                    <p className="text-muted-foreground">
                      平日: 10:00 - 19:00
                      <br />
                      土日祝: 10:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 border rounded-sm">
                <h2 className="text-xl font-serif mb-4">お問い合わせフォーム</h2>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <p className="text-green-600 mb-4">お問い合わせありがとうございました。</p>
                    <p className="text-muted-foreground">2営業日以内にご返信いたします。</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">お名前 *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">メールアドレス *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">メッセージ *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "送信中..." : "送信する"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
