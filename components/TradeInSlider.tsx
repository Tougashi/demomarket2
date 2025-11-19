'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const tradeInProducts = [
  {
    id: 1,
    name: 'Apple Watch Series 10 with Sport Loop',
    originalPrice: 'Rp 7.299.000',
    promoPrice: 'Rp 6.299.000',
    discount: '14%',
    image: '/images/new_arrivals/Apple_Watch_Series_11.webp', 
  },
  {
    id: 2,
    name: '14-inch MacBook Pro M4 Pro',
    originalPrice: 'Rp 34.999.000',
    promoPrice: 'Rp 34.499.000',
    discount: '1%',
    image: '/images/promo/iphone_17_pro.webp', 
  },
  {
    id: 3,
    name: 'iPhone 16 Pro',
    originalPrice: 'Rp 21.999.000',
    promoPrice: 'Rp 17.999.000',
    discount: '18%',
    image: '/images/new_arrivals/iPhone17_Pro.jpg',
  },
  {
    id: 4,
    name: 'iPad Air M2',
    originalPrice: 'Rp 12.999.000',
    promoPrice: 'Rp 11.499.000',
    discount: '11%',
    image: '/images/new_arrivals/iPhone_Air.jpg', 
  },
  {
    id: 5,
    name: 'AirPods Max',
    originalPrice: 'Rp 8.499.000',
    promoPrice: 'Rp 7.999.000',
    discount: '5%',
    image: '/images/new_arrivals/Air_Pods_Pro_3.webp', 
  },
  {
    id: 6,
    name: 'Apple Watch SE 3',
    originalPrice: 'Rp 5.999.000',
    promoPrice: 'Rp 4.999.000',
    discount: '9%',
    image: '/images/new_arrivals/Apple_Watch_SE_3.webp',
  },
];

export default function TradeInSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Update items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(tradeInProducts.length / itemsPerPage);

  const nextPage = () => {
    setActiveIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleProducts = tradeInProducts.slice(
    activeIndex * itemsPerPage, 
    (activeIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Trade-in produkmu dengan produk terbaru.
        </h2>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevPage}
            className="absolute left-2 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
          >
            <FiChevronLeft size={20} />
          </button>
          <button 
            onClick={nextPage}
            className="absolute right-2 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
          >
            <FiChevronRight size={20} />
          </button>

           {/* Content Area */}
           <div className="overflow-hidden">
             <motion.div 
               key={`${activeIndex}-${itemsPerPage}`}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.3 }}
               className={`grid gap-6 md:gap-8 px-4 ${
                 itemsPerPage === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-3'
               }`}
             >
              {visibleProducts.map((product) => (
                <div key={product.id} className="flex flex-col items-center text-center group w-full md:w-[75%] lg:w-full mx-auto">
                  <div className="bg-white border border-gray-200 rounded-lg p-8 mb-6 w-full aspect-[3/4] flex items-center justify-center hover:shadow-lg transition-shadow duration-300">
                     <div className="relative w-full h-full">
                       <Image
                         src={product.image}
                         alt={product.name}
                         fill
                         className="object-contain"
                       />
                     </div>
                   </div>
                   
                   <h3 className="font-semibold text-slate-900 mb-4 px-4 h-12 flex items-center justify-center text-sm md:text-base">
                     {product.name}
                   </h3>
                   
                   <div className="mb-1">
                     <span className="text-gray-400 text-sm line-through decoration-red-500 decoration-1">
                       {product.originalPrice}
                     </span>
                   </div>
                   
                   <div className="flex items-center gap-2 mb-4">
                     <span className="font-bold text-slate-900">{product.promoPrice}</span>
                     <span className="text-xs font-bold text-red-500">{product.discount}</span>
                   </div>
                   
                   <button className="px-8 py-2 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 transition-colors w-40">
                     Beli Sekarang
                   </button>
                 </div>
               ))}
             </motion.div>
           </div>
           
           {/* Dots */}
           <div className="flex justify-center gap-2 mt-12">
            {[...Array(totalPages)].map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === activeIndex ? 'bg-gray-800 w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
           </div>
        </div>
      </div>
    </section>
  );
}
