import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaWhatsapp, FaApple } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
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
            <h4 className="font-bold text-slate-900 mb-4 md:mb-6 text-sm">Tentang Radja iPhone</h4>
            <ul className="space-y-3 md:space-y-4 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Tentang Radja iPhone</a></li>
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

        <div className="border-t border-gray-100 pt-6 md:pt-8">
          <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left text-gray-600">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-slate-900">
                <span className="text-xl md:text-2xl font-bold tracking-tight">Radja iPhone</span>
                <div className="border border-gray-300 rounded px-2 py-0.5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-gray-600">
                  <FaApple size={12} />
                  <span>Premium Partner</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-500 text-lg">
                <a href="#" className="hover:text-blue-600 transition-colors" aria-label="Facebook"><FaFacebookF /></a>
                <a href="#" className="hover:text-blue-600 transition-colors" aria-label="Instagram"><FaInstagram /></a>
                <a href="#" className="hover:text-blue-600 transition-colors" aria-label="YouTube"><FaYoutube /></a>
                <a href="#" className="hover:text-blue-600 transition-colors" aria-label="TikTok"><FaTiktok /></a>
                <a href="#" className="hover:text-blue-600 transition-colors" aria-label="WhatsApp"><FaWhatsapp /></a>
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-500">
              © {currentYear} Radja iPhone. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
