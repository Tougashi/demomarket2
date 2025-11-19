'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const newArrivals = [
  {
    id: 1,
    tag: 'NEW',
    name: 'iPhone 17 Pro',
    desc: 'Pro luar dalam.',
    price: 'Rp23.749.000',
    image: '/images/new_arrivals/iPhone17_Pro.jpg', 
  },
  {
    id: 2,
    tag: 'NEW',
    name: 'Apple Watch Series 11',
    desc: 'Tepat untuk memantau kesehatan Anda.',
    price: 'Rp7.299.000',
    image: '/images/new_arrivals/Apple_Watch_Series_11.webp',
  },
  {
    id: 3,
    tag: 'NEW',
    name: 'AirPods Pro 3',
    desc: 'Peredam Kebisingan Aktif dalam telinga, terbaik di dunia.',
    price: 'Rp4.499.000',
    image: '/images/new_arrivals/Air_Pods_Pro_3.webp',
  },
  {
    id: 4,
    tag: 'NEW',
    name: 'iPhone Air',
    desc: 'iPhone paling tipis yang pernah ada.',
    price: 'Rp21.249.000',
    image: '/images/new_arrivals/iPhone_Air.jpg',
  },
  {
    id: 5,
    tag: 'NEW',
    name: 'Apple Watch SE 3',
    desc: 'Layar besar, fitur canggih, harga bersahabat.',
    price: 'Rp4.999.000',
    image: '/images/new_arrivals/Apple_Watch_SE_3.webp',
  },
  {
    id: 6,
    tag: 'NEW',
    name: 'Apple Watch Ultra 3',
    desc: 'Petualangan menanti.',
    price: 'Rp14.999.000',
    image: '/images/new_arrivals/Apple_Watch_Ultra_3.webp',
  },
  {
    id: 7,
    tag: 'NEW',
    name: 'Aksesori iPhone',
    desc: 'Lengkapi iPhone barumu.',
    price: 'Rp799.000',
    image: '/images/new_arrivals/Aksesori_iPhone.webp',
  },
  {
    id: 8,
    tag: 'NEW',
    name: 'iPhone 17',
    desc: 'Kamera canggih. Chip A17.',
    price: 'Rp16.499.000',
    image: '/images/new_arrivals/iPhone_17.webp',
  }
];

export default function NewArrivals() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Update items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const totalPages = Math.ceil(newArrivals.length / itemsPerPage);

  const nextPage = () => {
    setActiveIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleProducts = newArrivals.slice(
    activeIndex * itemsPerPage, 
    (activeIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-8 text-slate-900">
          Cek yang terbaru.
        </h2>

        <div className="relative group">
          {/* Navigation Buttons */}
          <button 
             onClick={prevPage}
             className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur text-slate-900 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all disabled:opacity-50"
             disabled={totalPages <= 1}
           >
             <FiChevronLeft size={24} />
           </button>
           <button 
             onClick={nextPage}
             className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur text-slate-900 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all disabled:opacity-50"
             disabled={totalPages <= 1}
           >
             <FiChevronRight size={24} />
           </button>

          <div className="overflow-hidden px-1 py-4">
            <AnimatePresence mode='wait'>
              <motion.div 
                key={`${activeIndex}-${itemsPerPage}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center gap-6"
              >
                {visibleProducts.map((item) => (
                  <motion.div 
                    key={item.id}
                    whileHover={{ y: -5 }}
                    className={`bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col h-[460px] cursor-pointer group/card overflow-hidden ${
                      itemsPerPage === 1 ? 'w-full max-w-xs mx-auto' : 
                      itemsPerPage === 2 ? 'w-[calc(45%-12px)]' : 
                      'w-[calc(22%-18px)]'
                    }`}
                  >
                    <div className="relative h-56 mb-6 flex items-center justify-center rounded-xl">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-4 group-hover/card:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="mt-auto">
                      <span className="text-orange-500 text-xs font-bold tracking-wider mb-2 block">
                        {item.tag}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-slate-600 text-sm font-medium mb-4 line-clamp-2">
                        {item.desc}
                      </p>
                      <p className="text-slate-900 text-sm mt-auto">
                        Mulai {item.price}.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

           {/* Dots Indicator */}
           {totalPages > 1 && (
             <div className="flex justify-center gap-2 mt-8">
              {[...Array(totalPages)].map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === activeIndex ? 'bg-slate-900 w-6' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
             </div>
           )}
        </div>
      </div>
    </section>
  );
}
