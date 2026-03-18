"use client";

import { useState } from 'react';
import { Zap, Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Work', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-fit max-w-2xl">
      <div className="dynamic-island flex items-center justify-between gap-2 p-1.5 rounded-full">
        <Link href="/" className="flex items-center gap-3 pl-4 pr-3 group cursor-pointer shrink-0">
          <div className="w-8 h-8 bg-[#0fb861] rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Zap size={18} className="text-[#09090B] fill-current font-black" />
          </div>
          <span className="font-bold tracking-tight text-sm">Draft</span>
        </Link>
        
        <div className="h-6 w-[1px] bg-white/10 mx-1 hidden md:block"></div>
        
        <div className="items-center gap-1 px-1 hidden md:flex">
          {links.map((link) => (
            <Link 
              key={link.path}
              href={link.path} 
              className={`px-4 py-2 text-sm font-medium transition-colors nav-link ${pathname === link.path ? 'text-white' : 'text-slate-400 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="h-6 w-[1px] bg-white/10 mx-1 hidden md:block"></div>
        
        <div className="hidden md:block pr-1.5">
          <Link href="/contact" className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-[#0fb861] hover:text-[#09090B] text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all group">
            Let&apos;s Talk
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-400 hover:text-white pr-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 p-4 dynamic-island rounded-3xl flex flex-col gap-2 md:hidden">
          {links.map((link) => (
            <Link 
              key={link.path}
              href={link.path} 
              onClick={() => setIsOpen(false)}
              className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors ${pathname === link.path ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 px-4 py-3 bg-[#0fb861] text-[#09090B] text-sm font-bold uppercase tracking-widest rounded-xl transition-all"
          >
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </nav>
  );
}
