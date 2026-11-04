import React, { useState, useEffect } from 'react';
import { siteData } from '../data/siteData.ts';
import { FadeIn } from './FadeIn.tsx';

export const Testimonial: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <section className="relative w-full min-h-[620px] md:min-h-[720px] bg-[#EFEAE2] flex items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Full-bleed background image */}
      <img
        src={siteData.testimonial.bgImage}
        alt="Brass thali with Indian celebratory food and marigold petals"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-85"
        referrerPolicy="no-referrer"
      />

      {/* Subtle overlay for depth and contrast */}
      <div className="absolute inset-0 bg-[#EFEAE2]/30 z-10" />

      {/* Centred Solid Maroon Rectangular Card (~550×420px) with static 3D tilt on desktop */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-5 md:px-9 flex justify-center items-center">
        <FadeIn>
          <div
            className="w-full max-w-[550px] min-h-[380px] md:min-h-[420px] bg-[#6E0B17] text-white p-8 sm:p-12 md:p-14 rounded-none shadow-none flex flex-col justify-between"
            style={{
              transform: isMobile
                ? 'none'
                : 'perspective(1200px) rotateY(-6deg) rotateZ(-3deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Quote in white serif ~34px */}
            <blockquote className="font-serif text-white text-[24px] sm:text-[28px] md:text-[34px] leading-[1.25] font-normal tracking-tight">
              &ldquo;{siteData.testimonial.quote}&rdquo;
            </blockquote>

            {/* Small white label at bottom-left */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <span className="font-sans text-white/90 text-[16px] md:text-[18px] font-normal tracking-wide block">
                {siteData.testimonial.author}
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
