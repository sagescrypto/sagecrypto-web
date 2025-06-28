import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          welcome: "Welcome",
          heroDescription: "Crypto VIP access starts now",
          aboutTitle: "About",
          aboutText: "Crypto VIP platform offers deep blockchain education, exclusive analysis and NFT-based access.",
tokenomicsTitle: "Tokenomics",
totalSupply: "Total Supply",
totalSupplyDesc: "1,000,000,000 tokens will be minted. Supply is fixed.",
airdrop: "Airdrop",
airdropDesc: "30% of total supply will be distributed in Q3-Q4 2026 and Q1 2027.",
staking: "Staking & Rewards",
stakingDesc: "VIP NFTs can be staked to earn rewards and governance power.",
utility: "Utility",
utilityDesc: "Used for VIP access, DAO voting, and future platform features.",
educationTitle: "Crypto Education",
totalPoints: "Total Points",
nftEarned: "Congratulations! You earned NFT minting rights!",
nftHint: "Complete at least 2 modules to earn an NFT.",

        }
      },
      tr: {
        translation: {
          welcome: "Hoş Geldiniz",
          heroDescription: "Crypto VIP erişimi şimdi başlıyor",
          aboutTitle: "Hakkında",
          aboutText: "Crypto VIP platformu, kapsamlı blokzincir eğitimi, özel analizler ve NFT tabanlı erişim sunar.",
tokenomicsTitle: "Token Ekonomisi",
totalSupply: "Toplam Arz",
totalSupplyDesc: "1.000.000.000 token üretilecek. Arz sabittir.",
airdrop: "Airdrop",
airdropDesc: "Toplam arzın %30'u 2026 Q3-Q4 ve 2027 Q1'de dağıtılacaktır.",
staking: "Staking ve Ödüller",
stakingDesc: "VIP NFT’ler stake edilerek ödül ve yönetişim gücü kazanılabilir.",
utility: "Kullanım Alanı",
utilityDesc: "VIP erişim, DAO oylamaları ve platform özellikleri için kullanılır.",

        }
      }
    }
  });

export default i18n;