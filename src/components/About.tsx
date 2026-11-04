import React, { useState } from 'react';
import { siteData } from '../data/siteData.ts';
import { FadeIn } from './FadeIn.tsx';

export const About: React.FC = () => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section
      id="about"
      className="w-full bg-[#FBF6EE] pt-[160px] sm:pt-[210px] md:pt-[270px] pb-[100px] md:pb-[160px]"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-9">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column: small label "About" (Inter, 18px) */}
          <div className="md:col-span-3">
            <FadeIn>
              <span className="font-sans text-[18px] text-[#1A1A1A] font-normal tracking-wide block">
                {siteData.about.label}
              </span>
            </FadeIn>
          </div>

          {/* Right Column: Big paragraph in Cormorant Garamond, ~60px, line-height 1.1 */}
          <div className="md:col-span-9 flex flex-col">
            <FadeIn delay={0.1}>
              <p className="font-serif text-[#1A1A1A] text-[32px] sm:text-[44px] md:text-[54px] lg:text-[60px] leading-[1.1] font-normal tracking-tight">
                {siteData.about.text}
              </p>
            </FadeIn>

            {/* Small square image (~295×295px), left-aligned with the paragraph */}
            <div className="mt-12 md:mt-16">
              <FadeIn delay={0.2}>
                <div className="w-[240px] sm:w-[270px] md:w-[295px] h-[240px] sm:h-[270px] md:h-[295px] bg-[#EFEAE2] rounded-none overflow-hidden">
                  {!imageFailed ? (
                    <img
                      src={siteData.about.image}
                      alt="Joyful Indian family celebration at sangeet night"
                      className="w-full h-full object-cover rounded-none"
                      onError={() => setImageFailed(true)}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#EFEAE2] text-[#6E0B17] font-serif text-lg">
                      Sangeet Night
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
