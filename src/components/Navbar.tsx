"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Signature Dishes', href: '#dishes' },
    { name: 'Menu', href: '#menu' },
    { name: 'Order', href: '#order' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled || isMenuOpen ? "bg-black/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group z-50">
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

          <div className="flex items-center gap-6 z-50">
            <Button className="hidden sm:flex bg-[#006B3F] hover:bg-[#006B3F]/90 text-white rounded-none px-6">
              <Phone className="w-4 h-4 mr-2" />
              Call to Order
            </Button>
            
            <button 
              className="text-white hover:text-[#FCD116] transition-colors p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <div className={cn(
        "fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#CE1126] rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FCD116] rounded-full blur-[120px]" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#006B3F] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "text-4xl md:text-6xl font-black text-white hover:text-[#FCD116] transition-all duration-300 transform hover:scale-110",
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          
          <div className={cn(
            "mt-8 transition-all duration-500 delay-500",
            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <Button className="bg-[#006B3F] hover:bg-[#006B3F]/90 text-white rounded-none px-12 py-8 text-xl font-bold">
              <Phone className="w-6 h-6 mr-3" />
              Call to Order
            </Button>
          </div>
        </div>

        {/* Social Links in Menu */}
        <div className={cn(
          "absolute bottom-12 left-0 right-0 flex justify-center gap-8 transition-all duration-500 delay-700",
          isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <span className="text-white/40 text-xs uppercase tracking-[0.5em]">Follow the flavor</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;