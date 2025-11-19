'use client';

import Image from 'next/image';
import { FiUsers, FiCreditCard, FiTruck } from 'react-icons/fi';

export default function ServiceInfo() {
  return (
    <section className="bg-white pt-8 pb-16">
      <div className="container mx-auto px-4">
        {/* Icons Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 text-center">
          <div className="flex flex-col items-center">
            <div className="text-blue-600 mb-4">
              <FiUsers size={40} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-lg mb-2">Dapatkan servis dan<br/>bantuan profesional.</h3>
            <p className="text-sm text-gray-600 max-w-xs mx-auto">
              Mulai dari pengaturan device terbaru-mu hingga servis, dapatkan pengalaman terbaiknya.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-blue-600 mb-4">
              <FiCreditCard size={40} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-lg mb-2">Simulasi kredit dan<br/>cicilan</h3>
            <p className="text-sm text-gray-600 max-w-xs mx-auto">
              Berbagai pilihan pembayaran kredit dan cicilan. Semua pilihanmu.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="text-blue-600 mb-4">
              <FiTruck size={40} strokeWidth={1.5} />
            </div>
            <h3 className="font-bold text-lg mb-2">Beli online, ambil di<br/>toko.</h3>
            <p className="text-sm text-gray-600 max-w-xs mx-auto">
              Belanja online dan bebas biaya kirim.
            </p>
          </div>
        </div>

        {/* Banners Section */}
        <div className="space-y-8">
          {/* Help Banner */}
          <div className="bg-gray-50 rounded-2xl overflow-hidden flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 h-64 md:h-80 relative">
              <Image
                src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1000&auto=format&fit=crop"
                alt="Pesona Gadget Staff"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-12 text-center md:text-left flex flex-col items-center md:items-start justify-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Butuh bantuan?</h2>
              <p className="text-slate-600 mb-8">Dapatkan bantuan yang kamu butuhkan.</p>
              <button className="px-8 py-2 border border-blue-600 text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors">
                Hubungi kami
              </button>
            </div>
          </div>

          {/* Store Locations & Classes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Store Locations */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden flex flex-col-reverse md:flex-row">
              <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Toko terdekat</h3>
                <p className="text-sm text-slate-600 mb-6">Temukan Pesona Gadget di dekatmu.</p>
                <button className="px-8 py-2 border border-blue-600 text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors text-sm">
                  Cari toko
                </button>
              </div>
              <div className="w-full md:w-1/2 h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800&auto=format&fit=crop"
                  alt="Store Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Classes */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden flex flex-col-reverse md:flex-row">
               <div className="w-full md:w-1/2 h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
                  alt="Training Class"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-center md:items-end text-center md:text-right">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ikuti kelas</h3>
                <p className="text-sm text-slate-600 mb-6">Temukan berbagai kelas di Pesona Gadget</p>
                <button className="px-8 py-2 border border-blue-600 text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors text-sm">
                  Jadwalkan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

