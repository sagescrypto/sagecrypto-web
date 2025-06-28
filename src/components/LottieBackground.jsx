import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const LottieBackground = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
      <Player
        autoplay
        loop
        src="/CSG_NFT_Animation_Lottie.json"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LottieBackground;
