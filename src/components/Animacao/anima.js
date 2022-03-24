import React from 'react';
import Lottie from 'lottie-react-native';
import animationData from '../../assets/lotties/89601-solar-system.json';


export const LottieAnima = () => {

  const defaultOptions = {

    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
    preserveAspectRatio: '89601-solar-system'

    }
    
  };
    return (
    <div>
        <Lottie options={defaultOptions} height={800} width={800}/>
    </div>
    );
  
};
