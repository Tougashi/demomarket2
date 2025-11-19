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
        <div className="container mx-auto flex justify-between items-center md:justify-center">
          <p className="truncate">
            Waspada terhadap upaya penipuan yang mengatasnamakan Pesona Gadget. Info selengkapnya, <span className="font-bold cursor-pointer hover:underline">klik di sini</span>
          </p>
          <FiChevronRight className="md:hidden" />
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4 md:gap-8">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-3xl font-bold tracking-tighter">Pesona Gadget</span>
            <div className="border border-gray-300 rounded px-1 py-0.5 flex items-center gap-1">
              <FaApple size={12} />
              <div className="flex flex-col leading-none">
                <span className="text-[8px] font-bold uppercase">Premium</span>
                <span className="text-[8px] font-bold uppercase">Partner</span>
              </div>
            </div>
          </Link>

          {/* Search Bar - Hidden on mobile, visible on desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FiSearch size={18} />
            </div>
            <input 
              type="text" 
              placeholder="Cari produk" 
              className="w-full bg-gray-100 border-none rounded-lg py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 md:gap-6 shrink-0">
            <div className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-700 cursor-pointer hover:text-blue-600">
              <span>Pilih toko</span>
            </div>
            <div className="w-px h-6 bg-gray-300 hidden md:block"></div>
            <button className="text-gray-700 hover:text-blue-600">
              <FiUser size={24} />
            </button>
            <button className="text-gray-700 hover:text-blue-600">
              <FiShoppingBag size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className={`
        md:block border-b border-gray-100 bg-white
        ${isMenuOpen ? 'block absolute top-full left-0 w-full shadow-lg' : 'hidden'}
      `}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between text-sm">
            <nav className="flex flex-col md:flex-row gap-0 md:gap-8 py-2 md:py-3">
              {['Mac', 'iPad', 'iPhone', 'Watch', 'Music', 'Aksesori', 'Layanan', 'Event & Promo'].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  className="py-2 md:py-0 px-4 md:px-0 hover:text-blue-600 font-medium text-gray-700 border-b md:border-none border-gray-50"
                >
                  {item}
                </Link>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-6 border-l border-gray-200 pl-6 py-3">
              {['Toko', 'Bisnis', 'Edukasi'].map((item) => (
                <Link key={item} href="#" className="hover:text-blue-600 font-medium text-gray-700">
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
