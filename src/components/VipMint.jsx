import React, { useState } from 'react';

function VipMint() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [minted, setMinted] = useState(false);

  const connectWallet = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then(() => {
        setWalletConnected(true);
      });
    } else {
      alert('MetaMask not found');
    }
  };

  const handleMint = () => {
    // Gerçek mint işlemi değil, simülasyon
    setTimeout(() => {
      setMinted(true);
    }, 1000);
  };

  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold">VIP NFT Mint</h2>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="mx-auto w-64 h-64 object-cover rounded-xl shadow-lg"
          />
          <source src="/CSG_NFT_Animated.mp4" type="video/mp4" />
          
        {!walletConnected ? (
          <button
            onClick={connectWallet}
            className="bg-indigo-600 px-6 py-2 rounded hover:bg-indigo-700"
          >
            Connect Wallet
          </button>
        ) : !minted ? (
          <button
            onClick={handleMint}
            className="bg-green-600 px-6 py-2 rounded hover:bg-green-700"
          >
            Mint NFT
          </button>
        ) : (
          <div className="text-green-400 font-semibold text-xl">
            ✅ NFT Minted! Access Granted.
          </div>
        )}
      </div>
    </section>
  );
}

export default VipMint;
