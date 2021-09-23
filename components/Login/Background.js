import React from "react";
import styled, { keyframes } from "styled-components";
import { wh, bg } from "~/styles/mixin";

const BgLineAnimate = keyframes`
  0% {
    transform: scale(1);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
`;

const BgLightAnimate = keyframes`
  90% {
    opacity: 0.9;
  }

  0%, 100% {
    opacity: 1;
  }
`;

const BackgroundArea = styled.div`
  ${wh("100%", "100%")}
  background-color: #012e5b;
`;

const BgLine = styled.div`
  ${wh("100%", "100%")}
  ${bg("/login/bg_line.svg", "center center", "cover")}
  position: absolute;
  animation: ${BgLineAnimate} 4s infinite ease-in;
  animation-delay: ${(props) => props.delay || 0}s;
`;

const BgLight = styled.div`
  ${wh("100%", "100%")}
  ${bg("/login/bg_light.svg", "center center", "cover")}
  position: absolute;
  animation: ${BgLightAnimate} 2s infinite;
`;

const Background = () => {
  return (
    <BackgroundArea>
      <BgLine />
      <BgLine delay={-1.45} />
      <BgLight />
    </BackgroundArea>
  );
};

export default Background;
