'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useCart, Product } from '@/context/CartContext';

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  let tagColor = '';
  if (product.tag === '新入荷') tagColor = 'bg-green-500';
  else if (product.tag === 'ベストセラー') tagColor = 'bg-yellow-500';
  else if (product.tag === 'セール') tagColor = 'bg-red-500';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
    >
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <Image 
            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            src={product.imageUrl || 'https://placehold.co/400x400/E2E8F0/4A5568?text=Image'} 
            alt={product.name}
            width={400}
            height={400}
          />
          {product.tag && (
            <span className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full ${tagColor}`}>
              {product.tag}
            </span>
          )}
        </div>
      </Link>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-semibold text-lg text-gray-800 truncate flex-grow">{product.name}</h3>
        <p className="text-gray-500 mt-1">¥{product.price.toLocaleString('ja-JP')}</p>
        <button 
          onClick={() => addToCart(product)}
          className="w-full mt-4 bg-indigo-50 text-indigo-700 font-semibold py-2 px-4 rounded-lg hover:bg-indigo-100 transition-colors"
        >
          カートに入れる
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;