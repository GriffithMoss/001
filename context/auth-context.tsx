"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  email: string
  name: string
  password?: string // зөвхөн localStorage-д хадгалах mock-д
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, name: string) => Promise<void>
  logout: () => void
  isLoading: boolean
  error: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

function getUsersFromStorage(): User[] {
  if (typeof window === "undefined") return []
  const users = localStorage.getItem("users")
  return users ? JSON.parse(users) : []
}

function saveUsersToStorage(users: User[]) {
  if (typeof window === "undefined") return
  localStorage.setItem("users", JSON.stringify(users))
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // App ачаалах үед хэрэглэгчийг localStorage-оос унших
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("currentUser")
      if (stored) {
        setUser(JSON.parse(stored))
      }
    }
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    setError(null)
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      const users = getUsersFromStorage()
      const found = users.find(
        (u) => u.email === email && u.password === password
      )
      if (found) {
        setUser({ id: found.id, email: found.email, name: found.name })
        localStorage.setItem(
          "currentUser",
          JSON.stringify({ id: found.id, email: found.email, name: found.name })
        )
      } else {
        throw new Error("メールアドレスまたはパスワードが正しくありません")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "ログインに失敗しました")
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (email: string, password: string, name: string) => {
    setIsLoading(true)
    setError(null)
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      let users = getUsersFromStorage()
      if (users.some((u) => u.email === email)) {
        throw new Error("このメールアドレスは既に登録されています")
      }
      const newUser: User = {
        id: Date.now().toString(),
        email,
        name,
        password,
      }
      users.push(newUser)
      saveUsersToStorage(users)
      setUser({ id: newUser.id, email, name })
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ id: newUser.id, email, name })
      )
    } catch (err) {
      setError(err instanceof Error ? err.message : "登録に失敗しました")
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("currentUser")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isLoading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

// import { useAuth } from "@/context/auth-context"

// const { user } = useAuth()
// // user байхгүй бол login page рүү redirect хийх логик байгаа бол, useEffect дотор зөв шалгаарай
