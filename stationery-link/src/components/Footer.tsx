import Link from 'next/link';

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold">ステーショナリーリンク</h3>
          <p className="mt-4 text-gray-400">喜びと創造性を刺激する、高品質で美しい文房具が揃うワンストップショップ。</p>
        </div>
        
        {/* Links Section */}
        <div className="grid grid-cols-2 md:col-span-2 gap-8">
            <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-400">ショップ</h3>
                <ul className="mt-4 space-y-2">
                    <li><Link href="#" className="hover:text-indigo-400 transition-colors">すべての商品</Link></li>
                    <li><Link href="#" className="hover:text-indigo-400 transition-colors">ペン＆鉛筆</Link></li>
                    <li><Link href="#" className="hover:text-indigo-400 transition-colors">ノート</Link></li>
                    <li><Link href="#" className="hover:text-indigo-400 transition-colors">デスクアクセサリー</Link></li>
                </ul>
            </div>
            <div>
                <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-400">サポート</h3>
                <ul className="mt-4 space-y-2">
                    <li><Link href="#" className="hover:text-indigo-400 transition-colors">お問い合わせ</Link></li>
                    <li><Link href="#" className="hover:text-indigo-400 transition-colors">よくある質問</Link></li>
                    <li><Link href="#" className="hover:text-indigo-400 transition-colors">配送について</Link></li>
                    <li><Link href="#" className="hover:text-indigo-400 transition-colors">返品について</Link></li>
                </ul>
            </div>
        </div>

        {/* Newsletter Section */}
        <div className="md:col-span-1">
             <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-400">最新情報を受け取る</h3>
             <p className="mt-4 text-gray-400">ニュースレターに登録して、初回のご注文が10%オフに。</p>
             <form className="mt-4 flex">
                 <input type="email" placeholder="メールアドレスを入力" className="w-full px-4 py-2 text-gray-900 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                 <button className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors">登録</button>
             </form>
        </div>

      </div>
      <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Stationery Link. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <Link href="#" className="text-gray-400 hover:text-white">Twitter</Link>
          <Link href="#" className="text-gray-400 hover:text-white">Instagram</Link>
          <Link href="#" className="text-gray-400 hover:text-white">Pinterest</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;