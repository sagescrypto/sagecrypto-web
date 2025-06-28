import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="absolute top-4 right-4 z-50 flex space-x-2">
      <button onClick={() => i18n.changeLanguage('en')} className="bg-blue-600 px-3 py-1 rounded">EN</button>
      <button onClick={() => i18n.changeLanguage('tr')} className="bg-green-600 px-3 py-1 rounded">TR</button>
    </div>
  );
}

export default LanguageSwitcher;
