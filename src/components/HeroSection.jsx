import React from 'react';
import { useTranslation } from 'react-i18next';

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen overflow-hidden text-white">
      {/* Arka plan videosu */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
      >
        <source src="/CSG_NFT_Preview.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* İçerik */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div>
          <h1 className="text-5xl font-bold mb-4">{t('welcome')}</h1>
          <p className="text-xl">{t('heroDescription')}</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
