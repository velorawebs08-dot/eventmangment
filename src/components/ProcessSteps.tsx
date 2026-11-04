import React, { useState } from 'react';
import { siteData } from '../data/siteData.ts';
import { FadeIn } from './FadeIn.tsx';

export const ProcessSteps: React.FC = () => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const steps = siteData.process;

  return (
    <section
      id="services"
      className="w-full bg-[#FBF6EE] py-[80px] md:py-[140px] border-t border-[#EFEAE2]"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-9">
        {/* Section Header / Label */}
        <div className="mb-12 md:mb-20">
          <FadeIn>
            <span className="font-sans text-[18px] text-[#1A1A1A] font-normal tracking-wide block">
              Our Services
            </span>
          </FadeIn>
        </div>

        {/* Desktop Zig-Zag Staggered Layout & Mobile Single Column */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-24">
          {/* Step 1: Meeting — Left, Top */}
          <div className="md:col-span-5 md:col-start-1">
            <FadeIn>
              <div className="max-w-[430px] flex flex-col">
                {/* Number & Title */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-serif italic text-[#C9A24B] text-[32px] md:text-[38px] leading-none">
                    ({steps[0].number})
                  </span>
                  <h3 className="font-serif text-[#1A1A1A] text-[40px] md:text-[64px] font-normal leading-[1.05]">
                    {steps[0].title}
                  </h3>
                </div>

                {/* Portrait Image (~430×564px) */}
                <div className="w-full aspect-[430/564] bg-[#EFEAE2] rounded-none overflow-hidden mb-6">
                  {!failedImages['01'] ? (
                    <img
                      src={steps[0].image}
                      alt={steps[0].title}
                      className="w-full h-full object-cover rounded-none"
                      onError={() => handleImageError('01')}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#6E0B17] font-serif text-xl">
                      {steps[0].title}
                    </div>
                  )}
                </div>

                {/* Short text below */}
                <p className="font-sans text-[#1A1A1A] text-[18px] leading-relaxed">
                  {steps[0].text}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Step 2: Planning — Right, pushed lower (~500px offset on desktop) */}
          <div className="md:col-span-5 md:col-start-8 md:mt-[380px] lg:mt-[480px]">
            <FadeIn delay={0.15}>
              <div className="max-w-[430px] flex flex-col">
                {/* Number & Title */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-serif italic text-[#C9A24B] text-[32px] md:text-[38px] leading-none">
                    ({steps[1].number})
                  </span>
                  <h3 className="font-serif text-[#1A1A1A] text-[40px] md:text-[64px] font-normal leading-[1.05]">
                    {steps[1].title}
                  </h3>
                </div>

                {/* Portrait Image (~430×564px) */}
                <div className="w-full aspect-[430/564] bg-[#EFEAE2] rounded-none overflow-hidden mb-6">
                  {!failedImages['02'] ? (
                    <img
                      src={steps[1].image}
                      alt={steps[1].title}
                      className="w-full h-full object-cover rounded-none"
                      onError={() => handleImageError('02')}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#6E0B17] font-serif text-xl">
                      {steps[1].title}
                    </div>
                  )}
                </div>

                {/* Short text below */}
                <p className="font-sans text-[#1A1A1A] text-[18px] leading-relaxed">
                  {steps[1].text}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Step 3: Celebration — Centre-Left, pushed lower again */}
          <div className="md:col-span-5 md:col-start-2 md:mt-[-40px] lg:mt-[-80px]">
            <FadeIn delay={0.2}>
              <div className="max-w-[430px] flex flex-col">
                {/* Number & Title */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-serif italic text-[#C9A24B] text-[32px] md:text-[38px] leading-none">
                    ({steps[2].number})
                  </span>
                  <h3 className="font-serif text-[#1A1A1A] text-[40px] md:text-[64px] font-normal leading-[1.05]">
                    {steps[2].title}
                  </h3>
                </div>

                {/* Portrait Image (~430×564px) */}
                <div className="w-full aspect-[430/564] bg-[#EFEAE2] rounded-none overflow-hidden mb-6">
                  {!failedImages['03'] ? (
                    <img
                      src={steps[2].image}
                      alt={steps[2].title}
                      className="w-full h-full object-cover rounded-none"
                      onError={() => handleImageError('03')}
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#6E0B17] font-serif text-xl">
                      {steps[2].title}
                    </div>
                  )}
                </div>

                {/* Short text below */}
                <p className="font-sans text-[#1A1A1A] text-[18px] leading-relaxed">
                  {steps[2].text}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
