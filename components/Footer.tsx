import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaWhatsapp, FaApple } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white pt-12 pb-8 border-t border-gray-100 text-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-10 md:mb-12">
          <div>
            <h4 className="font-bold text-slate-900 mb-4 md:mb-6 text-sm">Belanja</h4>
            <ul className="space-y-3 md:space-y-4 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Mac</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">iPad</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">iPhone</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Watch</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Music</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Aksesori</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4 md:mb-6 text-sm">Layanan</h4>
            <ul className="space-y-3 md:space-y-4 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Layanan pelanggan</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Bisnis</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Financing</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Trade-In</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">In-Store Classes</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">AppleCare</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">iProtect</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 md:mb-6 text-sm">Tentang Pesona Gadget</h4>
            <ul className="space-y-3 md:space-y-4 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Tentang Pesona Gadget</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Hubungi kami</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Yang sering ditanyakan</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Cari toko</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Informasi Keamanan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 md:mb-6 text-sm">Kebijakan</h4>
            <ul className="space-y-3 md:space-y-4 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Kebijakan pengiriman</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Kebijakan sistem pembayaran</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Kebijakan privasi</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Akun saya</a></li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1 mt-4 md:mt-0">
            <h4 className="font-bold text-slate-900 mb-4 md:mb-6 text-sm">Apple Premium Partner</h4>
            <div className="border border-black rounded-md p-3 md:p-4 inline-flex items-center gap-2 mb-6 md:mb-8">
              <FaApple size={24} />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-sm">Premium</span>
                <span className="font-bold text-sm">Partner</span>
              </div>
            </div>
            
            <div className="text-xs text-gray-600 space-y-2">
              <p>Authorized<br/>Service Provider</p>
              <p>Premium<br/>Business Partner</p>
              <p>Premium<br/>Education Partner</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 border-t border-gray-100 pt-6 md:pt-8">
          <div className="space-y-3 md:space-y-4">
             <p className="text-gray-600 flex items-center gap-2 text-sm">
               <span className="w-4 inline-block">🕒</span> Jam 09:00 - 18:00 WIB
             </p>
             <p className="text-gray-600 flex items-center gap-2 text-sm">
               <span className="w-4 inline-block">✉️</span> Email : customercare@erajaya.com
             </p>
             <p className="text-gray-600 flex items-center gap-2 text-sm">
               <span className="w-4 inline-block">🎧</span> Contact Center : <span className="text-blue-600">1500372</span>
             </p>
             <p className="text-gray-600 flex items-center gap-2 text-sm">
               <span className="w-4 inline-block"><FaWhatsapp /></span> WhatsApp : <span className="text-blue-600">0812 9077 7722</span>
             </p>

             <div className="pt-3 md:pt-4">
               <h5 className="font-bold mb-2 text-sm">Layanan Pengaduan Konsumen</h5>
               <p className="text-gray-600 text-sm">Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga</p>
               <p className="text-gray-600 text-sm">Kementerian Perdagangan Republik Indonesia</p>
               <p className="text-gray-600 mt-2 text-sm">WhatsApp Ditjen PKTN:</p>
             </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4 md:gap-6">
             <div className="flex gap-4 text-gray-600">
               <a href="#" className="hover:text-blue-600 transition-colors"><FaFacebookF size={20} /></a>
               <a href="#" className="hover:text-blue-600 transition-colors"><FaInstagram size={20} /></a>
               <a href="#" className="hover:text-blue-600 transition-colors"><FaYoutube size={20} /></a>
               <a href="#" className="hover:text-blue-600 transition-colors"><FaTiktok size={20} /></a>
               <a href="#" className="hover:text-blue-600 transition-colors"><FaWhatsapp size={20} /></a>
             </div>

             <div className="w-full md:w-auto md:text-right">
               <h5 className="font-bold mb-3 md:mb-4 text-sm">Metode Pembayaran</h5>
               <div className="flex flex-wrap gap-2 md:justify-end">
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
