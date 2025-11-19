import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Belanja</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Mac</a></li>
              <li><a href="#" className="hover:text-blue-600">iPad</a></li>
              <li><a href="#" className="hover:text-blue-600">iPhone</a></li>
              <li><a href="#" className="hover:text-blue-600">Watch</a></li>
              <li><a href="#" className="hover:text-blue-600">Music</a></li>
              <li><a href="#" className="hover:text-blue-600">Aksesori</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Layanan</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Layanan pelanggan</a></li>
              <li><a href="#" className="hover:text-blue-600">Bisnis</a></li>
              <li><a href="#" className="hover:text-blue-600">Financing</a></li>
              <li><a href="#" className="hover:text-blue-600">Trade-In</a></li>
              <li><a href="#" className="hover:text-blue-600">In-Store Classes</a></li>
              <li><a href="#" className="hover:text-blue-600">AppleCare</a></li>
              <li><a href="#" className="hover:text-blue-600">iProtect</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Tentang Pesona Gadget</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Tentang Pesona Gadget</a></li>
              <li><a href="#" className="hover:text-blue-600">Hubungi kami</a></li>
              <li><a href="#" className="hover:text-blue-600">Yang sering ditanyakan</a></li>
              <li><a href="#" className="hover:text-blue-600">Cari toko</a></li>
              <li><a href="#" className="hover:text-blue-600">Informasi Keamanan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Kebijakan</h4>
            <ul className="space-y-4 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Kebijakan pengiriman</a></li>
              <li><a href="#" className="hover:text-blue-600">Kebijakan sistem pembayaran</a></li>
              <li><a href="#" className="hover:text-blue-600">Kebijakan privasi</a></li>
              <li><a href="#" className="hover:text-blue-600">Akun saya</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-bold text-slate-900 mb-6">Apple Premium Partner</h4>
            <div className="border border-black rounded-md p-4 inline-flex items-center gap-2 mb-8">
              <FaApple size={24} />
              <div className="flex flex-col leading-tight">
                <span className="font-bold">Premium</span>
                <span className="font-bold">Partner</span>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p>Authorized<br/>Service Provider</p>
              <p>Premium<br/>Business Partner</p>
              <p>Premium<br/>Education Partner</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-8">
          <div className="space-y-4">
             <p className="text-gray-600 flex items-center gap-2">
               <span className="w-4 inline-block">🕒</span> Jam 09:00 - 18:00 WIB
             </p>
             <p className="text-gray-600 flex items-center gap-2">
               <span className="w-4 inline-block">✉️</span> Email : customercare@erajaya.com
             </p>
             <p className="text-gray-600 flex items-center gap-2">
               <span className="w-4 inline-block">🎧</span> Contact Center : <span className="text-blue-600">1500372</span>
             </p>
             <p className="text-gray-600 flex items-center gap-2">
               <span className="w-4 inline-block"><FaWhatsapp /></span> WhatsApp : <span className="text-blue-600">0812 9077 7722</span>
             </p>

             <div className="pt-4">
               <h5 className="font-bold mb-2">Layanan Pengaduan Konsumen</h5>
               <p className="text-gray-600">Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga</p>
               <p className="text-gray-600">Kementerian Perdagangan Republik Indonesia</p>
               <p className="text-gray-600 mt-2">WhatsApp Ditjen PKTN:</p>
             </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-6">
             <div className="flex gap-4 text-gray-600">
               <a href="#" className="hover:text-blue-600"><FaFacebookF size={20} /></a>
               <a href="#" className="hover:text-blue-600"><FaInstagram size={20} /></a>
               <a href="#" className="hover:text-blue-600"><FaYoutube size={20} /></a>
               <a href="#" className="hover:text-blue-600"><FaTiktok size={20} /></a>
               <a href="#" className="hover:text-blue-600"><FaWhatsapp size={20} /></a>
             </div>

             <div className="text-right">
               <h5 className="font-bold mb-4">Metode Pembayaran</h5>
               <div className="flex flex-wrap justify-end gap-2 max-w-md">
                  {/* Placeholder for payment logos - using text for simplicity or generic divs */}
                  <span className="px-2 py-1 border rounded text-xs font-bold text-blue-600">BCA</span>
                  <span className="px-2 py-1 border rounded text-xs font-bold text-orange-600">BNI</span>
                  <span className="px-2 py-1 border rounded text-xs font-bold text-red-600">CIMB</span>
                  <span className="px-2 py-1 border rounded text-xs font-bold text-blue-500">Mandiri</span>
                  <span className="px-2 py-1 border rounded text-xs font-bold text-green-600">Gopay</span>
                  <span className="px-2 py-1 border rounded text-xs font-bold text-purple-600">OVO</span>
                  <span className="px-2 py-1 border rounded text-xs font-bold text-blue-400">Visa</span>
                  <span className="px-2 py-1 border rounded text-xs font-bold text-red-500">Mastercard</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
