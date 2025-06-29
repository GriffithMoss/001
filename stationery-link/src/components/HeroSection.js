const HeroSection = () => (
  <section className="bg-gradient-to-br from-indigo-50 via-rose-50 to-amber-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
        毎日を、ワンランク上に
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
        創造性と整理整頓を刺激する、厳選された文房具やオフィス用品をご覧ください。
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a href="#" className="inline-block bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105">
          すべての商品を見る
        </a>
        <a href="#" className="inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-transform transform hover:scale-105">
          コレクションを見る
        </a>
      </div>
    </div>
  </section>
);