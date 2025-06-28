import React from 'react';
import { useTranslation } from 'react-i18next';

function Tokenomics() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">{t('tokenomicsTitle')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">{t('totalSupply')}</h3>
            <p>{t('totalSupplyDesc')}</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">{t('airdrop')}</h3>
            <p>{t('airdropDesc')}</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">{t('staking')}</h3>
            <p>{t('stakingDesc')}</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-2">{t('utility')}</h3>
            <p>{t('utilityDesc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
