'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useCart, Product } from '@/context/CartContext';
import { motion } from 'framer-motion';

const ProductDetails = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-lg overflow-hidden">
          <Image src={product.imageUrl} alt={product.name} width={600} height={600} priority className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-2xl text-gray-700 mt-4">¥{product.price.toLocaleString('ja-JP')}</p>
          <div className="mt-6 text-gray-600 space-y-4" dangerouslySetInnerHTML={{ __html: product.description || '' }} />
          <div className="mt-8 flex items-center gap-4">
            <label htmlFor="quantity" className="font-semibold text-gray-700">数量:</label>
            <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} min="1" className="w-20 p-2 border rounded-md" />
          </div>
          <button onClick={() => { for (let i = 0; i < quantity; i++) addToCart(product); }} className="w-full mt-8 bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors shadow-md">カートに入れる</button>
        </motion.div>
      </div>
    </div>
  );
};
export default ProductDetails;