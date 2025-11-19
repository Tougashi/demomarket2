import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryIcons from '@/components/CategoryIcons';
import NewArrivals from '@/components/NewArrivals';
import PromoGrid from '@/components/PromoGrid';
import TradeInSlider from '@/components/TradeInSlider';
import ServiceInfo from '@/components/ServiceInfo';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CategoryIcons />
      <NewArrivals />
      <PromoGrid />
      <TradeInSlider />
      <ServiceInfo />
      <Footer />
    </main>
  );
}
