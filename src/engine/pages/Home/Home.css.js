import { S } from "../../styled/function";
import styled, { keyframes } from "styled-components";

const btnSize = "274px";

export const Home_Container = styled.section`
  ${S.flex("row", "space-between", "flex-start")}
  margin-top: 251px;
  .home_content {
    &--left {
      max-width: 450px;
      margin-left: 163px;
    }
    &--right {
      max-width: 450px;
      margin-right: 77px;
    }
    h1 {
      margin: 1.5rem 0;
    }
    h5 {
      line-height: auto;
      margin-bottom: 1rem;
    }
    .text {
      margin: 1rem 0;
    }
  }

  .button_big {
    ${S.size("450px", "450px")};
    ${S.flexCenter()}
    position: relative;
    z-index: 50;

    &--item {
      ${S.flexCenter()}
      ${S.size("274px", "274px")};
      background-color: #fff;
      font-size: 2rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      position: relative;
      z-index: 50;
      transition: 0.5s;
      transform-style: preserve-3d;
    }

    &--link {
      ${S.flexCenter()}
      ${S.size("274px", "274px")};
      top: ${S.centerAbsolute(btnSize)};
      left: ${S.centerAbsolute(btnSize)};
      background-color: #fff;
      font-size: 2rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      background-color: #fff;
      border-radius: 50%;
      position: absolute;
      z-index: 100;
    }

    &--text {
      transition: 1s;
      transform: scale(1);
    }

    .button_big--link:hover ~ .button_big--item {
      transition: 1s;
      transform: scale(1.65);
    }
    .button_big--link:hover .button_big--text {
      transition: 1s;
      transform: scale(1.2);
    }
  }
`;

const enLargeButton = keyframes`

0%{ 
    transform: scale(1) ;
}
100%{
    transform: scale(1.5) ;
}

`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
