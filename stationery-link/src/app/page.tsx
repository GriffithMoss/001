// pages/index.js
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import CategoriesSection from '../components/CategoriesSection';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <CategoriesSection />
      </main>
      <Footer />
    </div>
  );
}