"use client";

import Lottie from "lottie-react";

interface AnimationLottieProps {
    animationPath: any;
}
    

const AnimationLottie = ({
    animationPath,
}:AnimationLottieProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: "95%",
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
