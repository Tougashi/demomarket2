'use client';

import Link from 'next/link';
import { FiSearch, FiUser, FiShoppingBag, FiChevronRight, FiMenu, FiX } from 'react-icons/fi';
import { FaApple } from 'react-icons/fa';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      {/* Top Notification Bar */}
      <div className="bg-blue-600 text-white text-xs md:text-sm py-2 text-center px-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-between items-center md:justify-center">
          <p className="truncate flex-1 md:flex-none">
            Waspada terhadap upaya penipuan yang mengatasnamakan Radja iPhone. Info selengkapnya, <span className="font-bold cursor-pointer hover:underline">klik di sini</span>
          </p>
          <FiChevronRight className="md:hidden shrink-0 ml-2" />
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-3 md:py-4 flex items-center justify-between gap-3 md:gap-6 lg:gap-8">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl text-gray-700 shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 md:gap-2 shrink-0">
            <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter">Radja iPhone</span>
            <div className="border border-gray-300 rounded px-1 py-0.5 flex items-center gap-1">
              <FaApple size={10} className="md:w-3 md:h-3" />
              <div className="flex flex-col leading-none">
                <span className="text-[7px] md:text-[8px] font-bold uppercase">Premium</span>
                <span className="text-[7px] md:text-[8px] font-bold uppercase">Partner</span>
              </div>
            </div>
          </Link>

          {/* Search Bar - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex flex-1 max-w-xl lg:max-w-2xl relative mx-4 lg:mx-8">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FiSearch size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Cari produk" 
              className="w-full bg-gray-100 border-none rounded-lg py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3 md:gap-4 lg:gap-6 shrink-0">
            <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer hover:text-blue-600 transition-colors">
              <span>Pilih toko</span>
            </div>
            <div className="w-px h-6 bg-gray-300 hidden lg:block"></div>
            <button className="text-gray-700 hover:text-blue-600 transition-colors" aria-label="User account">
              <FiUser size={22} className="md:w-6 md:h-6" />
            </button>
            <button className="text-gray-700 hover:text-blue-600 transition-colors" aria-label="Shopping bag">
              <FiShoppingBag size={22} className="md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className={`
        md:block border-b border-gray-100 bg-white
        ${isMenuOpen ? 'block absolute top-full left-0 w-full shadow-lg z-40' : 'hidden'}
      `}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between text-sm">
            <nav className="flex flex-col md:flex-row gap-0 md:gap-6 lg:gap-8 py-2 md:py-3">
              {['Mac', 'iPad', 'iPhone', 'Watch', 'Music', 'Aksesori', 'Layanan', 'Event & Promo'].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  className="py-2 md:py-0 px-4 md:px-0 hover:text-blue-600 font-medium text-gray-700 border-b md:border-none border-gray-50 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-4 lg:gap-6 border-l border-gray-200 pl-4 lg:pl-6 py-3">
              {['Toko', 'Bisnis', 'Edukasi'].map((item) => (
                <Link key={item} href="#" className="hover:text-blue-600 font-medium text-gray-700 transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
