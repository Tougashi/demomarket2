'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const slides = [
  {
    id: 1,
    tag: 'WATCH',
    subTag: 'SE',
    title: 'Gerak. Pantau. Sukaaa.',
    desc: 'Kini tersedia. Mulai dari 191.625 /bulan*.',
    image: '/images/new_arrivals/Apple_Watch_SE_3.webp',
  },
  {
    id: 2,
    tag: 'iPhone',
    subTag: '17 Pro',
    title: 'Titanium. Tangguh.',
    desc: 'Chip A17 Pro. Kamera 48 MP. USB-C.',
    image: '/images/new_arrivals/iPhone17_Pro.jpg',
  },
  {
    id: 3,
    tag: 'iPhone',
    subTag: '17',
    title: 'Kamera canggih.',
    desc: 'Chip A17. Lompatan besar untuk foto.',
    image: '/images/new_arrivals/iPhone_17.webp',
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[450px] md:h-[450px] overflow-hidden bg-white mt-10 md:mt-0">
      
      <div className="absolute inset-0 w-full max-w-6xl mx-auto px-4 flex items-center justify-center h-full">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center md:items-center justify-start w-full gap-4 md:gap-6"
          >
             {/* Text Section */}
             <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:max-w-xl text-slate-900">
                <div className="flex items-center gap-2 mb-2 justify-center md:justify-start w-full">
                   <span className="text-2xl md:text-3xl font-bold"> {slides[currentSlide].tag}</span>
                   <span className="text-xs font-bold border rounded px-1 border-black">
                     {slides[currentSlide].subTag}
                   </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                
                <p className="mb-6 text-base md:text-lg font-medium opacity-80">
                  {slides[currentSlide].desc}
                </p>
                
                <div className="flex gap-4">
                   <button className="px-8 py-2.5 border border-black rounded-full font-medium transition-all hover:bg-black hover:text-white">
                     Beli sekarang
                   </button>
                </div>
             </div>

             {/* Image Section */}
             <div className="w-full md:max-w-md h-[220px] md:h-[360px] relative md:ml-6">
                <Image 
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  fill
                  className="object-contain"
                  priority
                />
             </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-100/50 hover:bg-gray-200/80 backdrop-blur-sm transition-colors hidden md:block"
      >
        <FiChevronLeft size={24} className="text-slate-900" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-100/50 hover:bg-gray-200/80 backdrop-blur-sm transition-colors hidden md:block"
      >
        <FiChevronRight size={24} className="text-slate-900" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 md:bottom-8 left-0 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === currentSlide 
                ? 'bg-black w-8' 
                : 'bg-black/20 hover:bg-black/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
