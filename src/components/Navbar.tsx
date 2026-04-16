"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { PHONE_TEL } from "@/constants/contact";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Our Story', href: '/#story' },
    { name: 'Signature Dishes', href: '/#dishes' },
    { name: 'Menu', href: '/menu' },
    { name: 'Order', href: '/#order' },
    { name: 'Location', href: '/#location' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled || isMenuOpen || location.pathname !== '/' ? "bg-black/95 backdrop-blur-md py-3 shadow-lg" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group z-50">
            <img
              src="/ACCRA-R-INC-LOGO.png"
              alt=""
              width={96}
              height={96}
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain shrink-0 group-hover:opacity-90 transition-opacity"
            />
            <div className="flex flex-col leading-none gap-0.5">
              <span className="text-2xl font-black tracking-tighter text-white">ACCRA</span>
              <div className="flex flex-nowrap items-baseline gap-x-2">
                <span className="text-[10px] tracking-[0.3em] text-white/70 font-medium">RESTAURANT</span>
                <span className="text-[9px] tracking-[0.2em] text-white/60 font-medium shrink-0">
                  (HALAL CUISINE)
                </span>
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-6 z-50">
            <Button asChild className="hidden sm:flex bg-[#006B3F] hover:bg-[#006B3F]/90 text-white rounded-none px-6">
              <a href={PHONE_TEL} className="inline-flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Call to Order
              </a>
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

      <div className={cn(
        "fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none invisible"
      )}>
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
              onClick={(e) => handleLinkClick(e, link.href)}
              className={cn(
                "text-4xl md:text-6xl font-black text-white hover:text-[#FCD116] transition-all duration-300 transform hover:scale-110",
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
              style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
            >
              {link.name}
            </a>
          ))}
          
          <div className={cn(
            "mt-8 transition-all duration-500 delay-300",
            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <Button asChild className="bg-[#006B3F] hover:bg-[#006B3F]/90 text-white rounded-none px-12 py-8 text-xl font-bold">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-6 h-6 mr-3" />
                Call to Order
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;