import { S } from "../styled/function";
import { anim } from "../styled/animation";
import styled from "styled-components";
import { Rocket } from "../data/svg/Rocket";

export const LoaderContainer = styled.div`
  position: relative;
  ${S.size("200px")};
  content: " ";
  margin: auto auto;

  span {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(calc(18deg * var(--i)));

    &::before {
      ${S.emptyAbsolute()}
      top : 0;
      left: 0;
      ${S.size("25px")}
      border-radius: 50%;
      background-color: white;
      animation: ${anim.loader} 1s linear infinite;
      animation-delay: calc(0.05s * var(--i));
      transform: scale(0);
    }
  }
`;
