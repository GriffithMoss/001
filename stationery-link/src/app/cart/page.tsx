'use client';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">ショッピングカート</h1>
      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500">カートに商品がありません。</p>
          <Link href="/" className="mt-6 inline-block bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700">お買い物を続ける</Link>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <div className="flex items-center gap-4">
                <Image src={item.imageUrl} alt={item.name} width={80} height={80} className="object-cover rounded-md" />
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-500">¥{item.price.toLocaleString('ja-JP')}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <input type="number" min="1" value={item.quantity} onChange={(e) => updateQuantity(item.id, Number(e.target.value))} className="w-16 p-2 border rounded-md text-center" />
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">削除</button>
              </div>
            </div>
          ))}
          <div className="mt-8 text-right">
            <h2 className="text-2xl font-bold">合計: ¥{total.toLocaleString('ja-JP')}</h2>
            <Link href="#" className="inline-block mt-4 bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-indigo-700">レジに進む</Link>
          </div>
        </div>
      )}
    </div>
  );
}