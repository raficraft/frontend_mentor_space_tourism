import styled, { keyframes } from "styled-components";

export const anim = {
  fadeIn: keyframes`
  0% {
    transform: translateY(105%);
  }
  100% {
    transform: translateY(0);
  }
`,
  fadeOut: keyframes`
  0% {
      transform: translateY(0);
      opacity: 1
    }
    100% {
      transform: translateY(-105%);
      opacity:0 ;
  }`,

  goToZ: keyframes`
  0% {
    transform: translateZ(-1200px);
  }
  100% {
    transform: translateZ(0);
  }`,

  loader: keyframes`
  
  0% {
    transform : scale(0)
  }
  10%{
    transform : scale(1)

  }
  80%, 100%{
    transform : scale(0)
  }
`,
  rotating: keyframes`
  
  0% {
    transform : rotate(10deg)
  }

  100%{
    transform : rotate(370deg)
  }
`,
};
