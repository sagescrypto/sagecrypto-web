import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-800 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">{t('aboutTitle')}</h2>
        <p className="text-lg leading-relaxed">{t('aboutText')}</p>
      </div>
    </section>
  );
}

export default About;
