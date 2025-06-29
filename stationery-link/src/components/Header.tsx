'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
// You'll create this icons file next
import { PenToolIcon, SearchIcon, ShoppingCartIcon, UserIcon, MenuIcon } from './icons'; 

const Header = () => {
  const { cart } = useCart();
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-gray-800">
            <PenToolIcon className="h-6 w-6 text-indigo-600" />
            ステーショナリーリンク
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="font-medium text-gray-600 hover:text-indigo-600 transition-colors">ホーム</Link>
            <Link href="#" className="font-medium text-gray-600 hover:text-indigo-600 transition-colors">新着商品</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-gray-500 hover:text-indigo-600"><SearchIcon className="h-6 w-6" /></button>
            <Link href="/cart" className="relative text-gray-500 hover:text-indigo-600">
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs font-medium text-white">{cartItemCount}</span>
              )}
            </Link>
            <button className="hidden md:block text-gray-500 hover:text-indigo-600"><UserIcon className="h-6 w-6" /></button>
            <button className="md:hidden text-gray-500 hover:text-indigo-600"><MenuIcon className="h-6 w-6" /></button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;