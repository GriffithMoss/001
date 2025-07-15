import type { Product } from "@/context/cart-context"

export const products: Product[] = [
  {
    id: "1",
    name: "和紙テープ 桜柄",
    description: "伝統的な桜の模様が美しい和紙テープ。手帳やギフトラッピングに最適です。",
    price: 580,
    image: "/placeholder.svg?height=300&width=300",
    category: "和紙テープ",
  },
  {
    id: "2",
    name: "万年筆 竹モデル",
    description: "竹をモチーフにした高級万年筆。滑らかな書き心地と美しい外観を兼ね備えています。",
    price: 12800,
    image: "/placeholder.svg?height=300&width=300",
    category: "ペン",
  },
  {
    id: "3",
    name: "手漉き和紙ノート A5",
    description: "職人が一枚一枚丁寧に漉いた和紙を使用したノート。温かみのある質感が特徴です。",
    price: 1800,
    image: "/placeholder.svg?height=300&width=300",
    category: "ノート",
  },
  {
    id: "4",
    name: "墨汁 黒龍",
    description: "伝統的な製法で作られた高品質な墨汁。深みのある黒色が特徴です。",
    price: 1200,
    image: "/placeholder.svg?height=300&width=300",
    category: "インク",
  },
  {
    id: "5",
    name: "和紙テープ 波模様",
    description: "日本の伝統的な波模様をあしらった和紙テープ。幅15mm、長さ7m。",
    price: 620,
    image: "/placeholder.svg?height=300&width=300",
    category: "和紙テープ",
  },
  {
    id: "6",
    name: "筆ペン 極細",
    description: "繊細な線が描ける極細筆ペン。書道からイラストまで幅広く使用できます。",
    price: 850,
    image: "/placeholder.svg?height=300&width=300",
    category: "ペン",
  },
  {
    id: "7",
    name: "和綴じノート B6",
    description: "伝統的な和綴じ製本で作られたノート。丈夫で開きやすく、使いやすさが特徴です。",
    price: 2400,
    image: "/placeholder.svg?height=300&width=300",
    category: "ノート",
  },
  {
    id: "8",
    name: "印鑑ケース 桜木製",
    description: "桜の木で作られた高級印鑑ケース。天然木の風合いが美しく、大切な印鑑を守ります。",
    price: 3600,
    image: "/placeholder.svg?height=300&width=300",
    category: "アクセサリー",
  },
  {
    id: "9",
    name: "和紙レターセット 四季",
    description: "四季の風景を描いた和紙のレターセット。封筒10枚、便箋20枚入り。",
    price: 1500,
    image: "/placeholder.svg?height=300&width=300",
    category: "紙製品",
  },
  {
    id: "10",
    name: "硯 黒石",
    description: "墨をする際に使用する伝統的な硯。滑らかな表面が特徴で、墨の濃淡を自在に調整できます。",
    price: 8500,
    image: "/placeholder.svg?height=300&width=300",
    category: "書道用品",
  },
  {
    id: "11",
    name: "和紙テープ 金箔",
    description: "金箔をあしらった高級感のある和紙テープ。特別なギフトラッピングに最適です。",
    price: 980,
    image: "/placeholder.svg?height=300&width=300",
    category: "和紙テープ",
  },
  {
    id: "12",
    name: "木製ペントレイ",
    description: "天然木で作られたペントレイ。デスク上の文房具を美しく整理できます。",
    price: 3200,
    image: "/placeholder.svg?height=300&width=300",
    category: "アクセサリー",
  },
]

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id)
}

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category)
}

export const getCategories = (): string[] => {
  const categories = new Set(products.map((product) => product.category))
  return Array.from(categories)
}

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 4)
}
