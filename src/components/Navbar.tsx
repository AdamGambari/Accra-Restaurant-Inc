"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Signature Dishes', href: '#dishes' },
    { name: 'Menu', href: '#menu' },
    { name: 'Order', href: '#order' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black tracking-tighter text-white">ACCRA</span>
            <span className="text-[10px] tracking-[0.3em] text-white/70 font-medium">RESTAURANT</span>
          </div>
          <div className="flex gap-0.5 ml-1">
            <div className="w-1 h-6 bg-[#CE1126]" />
            <div className="w-1 h-6 bg-[#FCD116]" />
            <div className="w-1 h-6 bg-[#006B3F]" />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FCD116] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Button className="bg-[#006B3F] hover:bg-[#006B3F]/90 text-white rounded-none px-6">
            <Phone className="w-4 h-4 mr-2" />
            Call to Order
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-bold text-white hover:text-[#FCD116]"
          >
            {link.name}
          </a>
        ))}
        <Button className="bg-[#006B3F] hover:bg-[#006B3F]/90 text-white rounded-none px-8 py-6 text-lg">
          Call to Order
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;