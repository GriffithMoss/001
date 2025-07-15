"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/context/auth-context"

export default function LoginPage() {
  const router = useRouter()
  const { login, register, isLoading, error } = useAuth()

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  })

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await login(loginData.email, loginData.password)
    router.push("/")
  }

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await register(registerData.email, registerData.password, registerData.name)
    router.push("/")
  }

  return (
    <div className="flex flex-col min-h-screen vintage-paper">
      <Header />

      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 max-w-md">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">ログイン</TabsTrigger>
              <TabsTrigger value="register">会員登録</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <div className="bg-card p-6 border rounded-sm">
                <h1 className="text-2xl font-serif mb-6">ログイン</h1>

                {error && <div className="bg-destructive/10 text-destructive p-3 rounded-sm mb-4">{error}</div>}

                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">メールアドレス</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">パスワード</Label>
                      <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                        パスワードをお忘れですか？
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "ログイン中..." : "ログイン"}
                  </Button>
                </form>
              </div>
            </TabsContent>

            <TabsContent value="register">
              <div className="bg-card p-6 border rounded-sm">
                <h1 className="text-2xl font-serif mb-6">会員登録</h1>

                {error && <div className="bg-destructive/10 text-destructive p-3 rounded-sm mb-4">{error}</div>}

                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">お名前</Label>
                    <Input
                      id="register-name"
                      required
                      value={registerData.name}
                      onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">メールアドレス</Label>
                    <Input
                      id="register-email"
                      type="email"
                      required
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">パスワード</Label>
                    <Input
                      id="register-password"
                      type="password"
                      required
                      value={registerData.password}
                      onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-address">住所</Label>
                    <Input
                      id="register-address"
                      required
                      value={registerData.address}
                      onChange={(e) => setRegisterData({ ...registerData, address: e.target.value })}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "登録中..." : "会員登録"}
                  </Button>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  )
}
