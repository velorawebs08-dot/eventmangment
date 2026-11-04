import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteData } from '../data/siteData.ts';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on escape key or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Our Services', href: '#services', id: 'services' },
    { label: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full h-[90px] bg-white border-b border-[#EFEAE2]">
      <div className="max-w-[1440px] h-full mx-auto px-5 md:px-9 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-[#6E0B17] font-serif italic text-[30px] md:text-[34px] tracking-normal leading-none select-none cursor-pointer"
        >
          {siteData.brand.logo}
        </a>

        {/* Centre: Desktop Navigation Links (Inter, 18px, Active underlined, strictly NO hover) */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-sans text-[18px] text-[#1A1A1A] leading-none transition-none cursor-pointer ${
                  isActive
                    ? 'underline underline-offset-[10px] decoration-1 decoration-[#6E0B17] font-medium'
                    : 'no-underline font-normal'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Contact Us Button (Solid maroon, square, padding 20px 44px, strictly NO hover) */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-block bg-[#7A0F1B] text-white font-sans text-[16px] font-medium py-[20px] px-[44px] rounded-none leading-none select-none transition-none cursor-pointer"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 text-[#1A1A1A] bg-transparent border-none rounded-none cursor-pointer"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Full-screen Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[90px] z-50 bg-white flex flex-col justify-between p-8 md:hidden">
          <div className="flex flex-col gap-8 pt-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-sans text-[24px] text-[#1A1A1A] transition-none cursor-pointer ${
                    isActive
                      ? 'underline underline-offset-8 decoration-1 decoration-[#6E0B17] font-medium'
                      : 'no-underline font-normal'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pb-12">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block w-full text-center bg-[#7A0F1B] text-white font-sans text-[18px] font-medium py-5 px-8 rounded-none transition-none cursor-pointer"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
