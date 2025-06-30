// src/components/ProductCard.tsx

import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group block overflow-hidden border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 sm:h-56">
        <Image
          src={product.image_url || '/placeholder.png'} // Use a placeholder if no image
          alt={`Picture of ${product.name}`}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4 bg-white">
        <h3 className="text-base font-semibold text-gray-800 truncate" title={product.name}>
          {product.name}
        </h3>

        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm text-gray-500">{product.category}</p>
          <p className="text-lg font-bold text-gray-900">
            ¥{product.price.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}