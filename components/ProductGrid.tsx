import Image from 'next/image';
import { FiChevronRight } from 'react-icons/fi';

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 'Rp 19.999.000',
    image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=1000&auto=format&fit=crop',
    tag: 'Baru'
  },
  {
    id: 2,
    name: 'MacBook Air 15"',
    price: 'Rp 22.499.000',
    image: 'https://images.unsplash.com/photo-1611186871348-d18c59735001?q=80&w=1000&auto=format&fit=crop',
    tag: 'Promo'
  },
  {
    id: 3,
    name: 'Apple Watch Series 9',
    price: 'Rp 7.499.000',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1000&auto=format&fit=crop',
    tag: null
  },
  {
    id: 4,
    name: 'AirPods Pro',
    price: 'Rp 3.999.000',
    image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?q=80&w=1000&auto=format&fit=crop',
    tag: null
  }
];

export default function ProductGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Produk Terbaru</h2>
          <a href="#" className="text-blue-600 flex items-center gap-1 hover:underline font-medium">
            Lihat Semua <FiChevronRight />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

