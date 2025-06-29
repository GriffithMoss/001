
const Header = () => (
  <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold text-gray-800">
            <PenToolIcon className="h-6 w-6 text-indigo-600" />
            ステーショナリーリンク
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-8">
          <a href="#" className="font-medium text-gray-600 hover:text-indigo-600 transition-colors">商品一覧</a>
          <a href="#" className="font-medium text-gray-600 hover:text-indigo-600 transition-colors">新着商品</a>
          <a href="#" className="font-medium text-gray-600 hover:text-indigo-600 transition-colors">ブランド</a>
          <a href="#" className="font-medium text-gray-600 hover:text-indigo-600 transition-colors">私たちについて</a>
        </nav>
        
        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="text-gray-500 hover:text-indigo-600">
            <SearchIcon className="h-6 w-6" />
          </button>
          <button className="relative text-gray-500 hover:text-indigo-600">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-xs font-medium text-white">3</span>
          </button>
          <button className="hidden md:block text-gray-500 hover:text-indigo-600">
            <UserIcon className="h-6 w-6" />
          </button>
          <button className="md:hidden text-gray-500 hover:text-indigo-600">
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  </header>
);