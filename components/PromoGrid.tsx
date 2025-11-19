'use client';

import Image from 'next/image';

export default function PromoGrid() {
  return (
    <section className="py-8 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Large Card - iPhone 17 Pro */}
          <div className="bg-white rounded-2xl p-8 md:p-12 flex flex-col items-center text-center shadow-sm h-full">
             <div className="!mt-20">
             <span className="text-orange-500 text-xs font-bold tracking-wider mb-2">NEW</span>
             <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">iPhone 17 Pro</h3>
             <p className="text-slate-600 font-medium mb-2">Pro luar dalam.</p>
             <p className="text-slate-900 text-sm mb-6">Mulai Rp23.749.000</p>
             <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors mb-8">
               Beli sekarang
             </button>
             </div>
             <div className="relative w-full h-72 md:h-[550px]">
                <Image 
                  src="/images/promo/iphone_17_pro.webp"
                  alt="iPhone 17 Pro"
                  fill
                  className="object-contain"
                />
             </div>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="flex flex-col gap-6">
            {/* Top Card - Apple Watch */}
            <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-sm flex-1">
               <span className="text-orange-500 text-xs font-bold tracking-wider mb-2">NEW</span>
               <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 max-w-xs leading-tight">Apple Watch Series 11</h3>
               <p className="text-slate-600 font-medium text-sm mb-2">Tepat untuk memantau kesehatan Anda.</p>
               <p className="text-slate-900 text-sm mb-4">Mulai Rp7.299.000</p>
               <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium text-sm hover:bg-blue-700 transition-colors mb-6">
                 Beli sekarang
               </button>
               <div className="relative w-full h-40">
                  <Image 
                    src="/images/promo/Apple_Watch_Series_11.webp"
                    alt="Apple Watch"
                    fill
                    className="object-contain"
                  />
               </div>
            </div>

            {/* Bottom Card - AirPods */}
            <div className="bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-sm flex-1">
               <span className="text-orange-500 text-xs font-bold tracking-wider mb-2">NEW</span>
               <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">AirPods Pro 3</h3>
               <p className="text-slate-600 font-medium text-sm mb-2 max-w-md">Peredam Kebisingan Aktif dalam telinga, terbaik di dunia.</p>
               <p className="text-slate-900 text-sm mb-4">Mulai Rp4.499.000</p>
               <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium text-sm hover:bg-blue-700 transition-colors mb-6">
                 Beli sekarang
               </button>
               <div className="relative w-full h-40">
                  <Image 
                    src="/images/promo/IMG-18063697_m_jpeg_1_550x_1_.webp"
                    alt="AirPods"
                    fill
                    className="object-contain"
                  />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
