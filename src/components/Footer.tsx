import React from 'react';
import { siteData } from '../data/siteData.ts';
import { FadeIn } from './FadeIn.tsx';

export const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#6E0B17] text-white">
      {/* Top: Thin full-width image strip (~150px tall) of marigold flower garlands */}
      <div className="w-full h-[120px] sm:h-[150px] overflow-hidden">
        <img
          src={siteData.footer.stripImage}
          alt="Close-up of fresh festive Indian marigold flower garlands"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Main Maroon Block */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-9 pt-16 md:pt-28 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          {/* Left Column: Big Heading "Let's Celebrate Together" */}
          <div className="md:col-span-5">
            <FadeIn>
              <h2 className="font-serif text-white text-[48px] sm:text-[72px] md:text-[90px] lg:text-[110px] leading-[0.98] font-normal tracking-tight">
                Let&apos;s <span className="italic font-normal">Celebrate</span> Together
              </h2>
            </FadeIn>
          </div>

          {/* Middle Column: Links (Inter 20px, Home underlined, NO hover) */}
          <div className="md:col-span-3 md:pl-6">
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-6">
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="font-sans text-[20px] text-white underline underline-offset-8 decoration-1 decoration-white/70 font-normal leading-none cursor-pointer"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="font-sans text-[20px] text-white no-underline font-normal leading-none cursor-pointer"
                >
                  About
                </a>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="font-sans text-[20px] text-white no-underline font-normal leading-none cursor-pointer"
                >
                  Our Services
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="font-sans text-[20px] text-white no-underline font-normal leading-none cursor-pointer"
                >
                  Contact Us
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Contact details + Social Icons */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <FadeIn delay={0.2}>
              <div className="flex flex-col gap-3 font-sans text-[17px] md:text-[18px] text-white/95 leading-relaxed">
                <a
                  href={`tel:${siteData.footer.phone.replace(/\s+/g, '')}`}
                  className="text-white font-normal no-underline cursor-pointer"
                >
                  {siteData.footer.phone}
                </a>

                <a
                  href={`mailto:${siteData.footer.email}`}
                  className="text-white font-normal no-underline cursor-pointer"
                >
                  {siteData.footer.email}
                </a>

                <p className="text-white/85 max-w-sm mt-1">
                  {siteData.footer.address}
                </p>
              </div>

              {/* White circle icons (~44px, maroon glyphs): Facebook, Instagram, WhatsApp */}
              <div className="flex items-center gap-4 mt-6">
                {/* Facebook */}
                <a
                  href={siteData.footer.facebook}
                  aria-label="Facebook"
                  className="w-[44px] h-[44px] rounded-full bg-white flex items-center justify-center text-[#6E0B17] cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={siteData.footer.instagram}
                  aria-label="Instagram"
                  className="w-[44px] h-[44px] rounded-full bg-white flex items-center justify-center text-[#6E0B17] cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${siteData.footer.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-[44px] h-[44px] rounded-full bg-white flex items-center justify-center text-[#6E0B17] cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.101-.476-.15-.677.15-.201.3-.777.978-.953 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.3-.019-.462.132-.612.136-.135.301-.35.452-.525.15-.176.201-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.63-.928-2.235-.245-.589-.494-.509-.677-.518-.176-.008-.376-.01-.577-.01s-.527.075-.803.376c-.276.3-1.054 1.03-1.054 2.512 0 1.482 1.079 2.914 1.23 3.114.15.2 2.124 3.243 5.145 4.549.718.311 1.279.497 1.716.636.722.23 1.378.197 1.898.12.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.075-.125-.276-.201-.577-.351zM12.02 21.656h-.002c-1.733 0-3.432-.466-4.92-1.348l-.353-.21-3.655.958.975-3.564-.23-.367a9.789 9.789 0 0 1-1.503-5.234c0-5.419 4.409-9.829 9.833-9.829 2.625.001 5.093 1.024 6.949 2.88 1.856 1.857 2.878 4.325 2.877 6.95-.001 5.421-4.411 9.831-9.969 9.831l.002-.007zM12.02 0C5.391 0 0 5.392 0 12.02c0 2.118.553 4.187 1.604 6.009L0 24l6.169-1.618a12.006 12.006 0 0 0 5.849 1.511h.005c6.627 0 12.018-5.391 12.02-12.02 0-3.21-1.25-6.228-3.52-8.499C18.252 1.25 15.232 0 12.02 0z" />
                  </svg>
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Intentional empty maroon space (as requested in spec) */}
        <div className="h-16 md:h-24" />

        {/* Small line at the very bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs md:text-sm text-white/60 font-sans">
          <p>© 2026 Shubh Utsav Events. All rights reserved.</p>
          <p>Pune, Maharashtra · Handcrafted with care</p>
        </div>
      </div>
    </footer>
  );
};
