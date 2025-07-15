import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Product } from "@/context/cart-context"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-card rounded-sm overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 vintage-paper">
      <Link href={`/products/${product.id}`} className="block aspect-square overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="p-4">
        <h3 className="font-serif text-lg mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="font-medium">
            ¥{product.price.toLocaleString()} <span className="text-xs text-muted-foreground">（税込）</span>
          </p>
          <Link href={`/products/${product.id}`}>
            <Button variant="outline" size="sm">
              詳細を見る
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
