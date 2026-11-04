import React, { useState } from 'react';
import { siteData } from '../data/siteData.ts';
import { FadeIn } from './FadeIn.tsx';

export const Hero: React.FC = () => {
  const [portraitFailed, setPortraitFailed] = useState(false);

  return (
    <section
      id="home"
      className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-16 md:pt-24 pb-0 bg-[#1A0307]"
    >
      {/* Full-bleed background image */}
      <img
        src={siteData.hero.bgImage}
        alt="Grand Indian wedding reception table setting"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        loading="eager"
        referrerPolicy="no-referrer"
      />

      {/* Dark overlay: rgba(30, 5, 8, 0.50) as specified */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: 'rgba(30, 5, 8, 0.50)' }}
      />

      {/* Centred Text Content */}
      <div className="relative z-20 max-w-[1440px] w-full mx-auto px-5 md:px-9 flex flex-col items-center text-center my-auto">
        <FadeIn className="flex flex-col items-center max-w-5xl">
          {/* Giant Heading: ~110px desktop, clamp for mobile */}
          <h1 className="font-serif text-white text-[42px] sm:text-[68px] md:text-[90px] lg:text-[110px] leading-[1.02] tracking-tight text-balance">
            <span className="italic font-normal">{siteData.hero.titleItalic}</span>{' '}
            <span className="font-normal">{siteData.hero.titleRegular}</span>
          </h1>

          {/* Subtitle: Inter, white, ~22px */}
          <p className="mt-5 md:mt-7 font-sans text-white text-[16px] sm:text-[19px] md:text-[22px] font-normal leading-relaxed max-w-3xl text-balance">
            {siteData.hero.subtitle}
          </p>

          {/* Small line below: Devanagari, white, ~24px */}
          <p className="mt-4 md:mt-5 font-devanagari text-white/90 text-[20px] md:text-[24px] tracking-wide select-none">
            {siteData.hero.devanagari}
          </p>
        </FadeIn>
      </div>

      {/* Portrait image overlapping the bottom edge into About section */}
      <div className="relative z-20 w-full flex justify-center -mb-[120px] sm:-mb-[160px] md:-mb-[200px] px-5">
        <FadeIn delay={0.2}>
          <div className="w-[260px] sm:w-[310px] md:w-[360px] h-[346px] sm:h-[413px] md:h-[480px] bg-[#6E0B17] border border-white rounded-none overflow-hidden">
            {!portraitFailed ? (
              <img
                src={siteData.hero.portraitImage}
                alt="Indian bride and groom hands with intricate mehendi"
                className="w-full h-full object-cover object-center rounded-none"
                onError={() => setPortraitFailed(true)}
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-white bg-[#6E0B17]">
                <span className="font-serif italic text-2xl">Shubh Utsav</span>
                <span className="text-xs uppercase tracking-widest mt-2 text-[#C9A24B]">Celebrations</span>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
