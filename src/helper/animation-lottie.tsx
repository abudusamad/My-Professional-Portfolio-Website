"use client";

import Lottie from "lottie-react";
import { CSSProperties } from "react";

interface AnimationLottieProps {
  animationPath: object; // You can adjust the type here based on the structure of the animation data if known
}

const AnimationLottie = ({ animationPath }: AnimationLottieProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: "95%",
    } as CSSProperties, // Ensures TypeScript knows this is valid CSS
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
