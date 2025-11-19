'use client';

import Image from 'next/image';

const categories = [
  { 
    name: 'Mac', 
    img: '/images/categories/mac.webp'
  },
  { 
    name: 'iPhone', 
    img: '/images/categories/iPhone.webp'
  },
  { 
    name: 'iPad', 
    img: '/images/categories/iPad.webp'
  },
  { 
    name: 'Watch', 
    img: '/images/categories/watch.png'
  },
  { 
    name: 'Music', 
    img: '/images/categories/music.webp'
  },
  { 
    name: 'Aksesori', 
    img: '/images/categories/aksesori.webp'
  },
  { 
    name: 'AirTag', 
    img: '/images/categories/airtag.png'
  },
];

export default function CategoryIcons() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-slate-900 text-center">
          Berbagai produk Apple.
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {categories.map((cat) => (
            <div key={cat.name} className="flex flex-col items-center gap-4 group cursor-pointer min-w-[80px]">
              <div className="w-24 h-24 md:w-32 md:h-32 relative flex items-center justify-center transition-transform group-hover:-translate-y-2 duration-300">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  className="object-contain drop-shadow-md"
                  sizes="(max-width: 768px) 96px, 128px"
                />
              </div>
              <span className="text-sm md:text-base font-medium text-gray-900 group-hover:text-blue-600 group-hover:underline underline-offset-4 decoration-2">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
