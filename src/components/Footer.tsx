"use client";

import React from 'react';
import { ShieldCheck, Instagram } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
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
    }
  };

  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <Link to="/" className="inline-block group">
              <img
                src="/ACCRA-R-INC-LOGO.png"
                alt="Accra Restaurant Inc."
                width={208}
                height={208}
                className="h-40 w-40 sm:h-44 sm:w-44 md:h-52 md:w-52 object-contain shrink-0 group-hover:opacity-90 transition-opacity"
              />
            </Link>
            <div className="space-y-4">
              <p className="text-white/50 max-w-sm leading-relaxed">
                Bringing the authentic flavors and warm hospitality of Ghana to Toronto. Experience tradition, taste heritage.
              </p>
              <div className="flex items-center gap-2 text-[#006B3F] font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span className="uppercase tracking-widest">100% Halal Cuisine</span>
              </div>
              <p className="text-white/50 text-sm">
                3300 Dufferin St, Unit G, Toronto, ON M6A 2T5
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/accra_restaurant/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Accra Restaurant on Instagram"
              >
                <Instagram className="w-5 h-5" aria-hidden />
              </a>
              <a
                href="https://www.tiktok.com/@accra.restaurant2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                aria-label="Accra Restaurant on TikTok"
              >
                <TikTokIcon size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-sm text-[#FCD116]">Quick Links</h4>
            <ul className="space-y-4 text-white/50">
              <li><a href="/#story" onClick={(e) => handleLinkClick(e, '/#story')} className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="/#dishes" onClick={(e) => handleLinkClick(e, '/#dishes')} className="hover:text-white transition-colors">Signature Dishes</a></li>
              <li><Link to="/menu" className="hover:text-white transition-colors">Full Menu</Link></li>
              <li><a href="/#order" onClick={(e) => handleLinkClick(e, '/#order')} className="hover:text-white transition-colors">Order Online</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 text-white/30 text-xs uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Accra Restaurant. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
