import { S } from "../../../styled/function";
import styled from "styled-components";

export const Big_button = styled.div`
  @media screen and (min-width: 1024px) {
    --btnSize: 274px;
    --containerSize: 450px;
    --font-size: 2rem;
  }
  @media screen and (max-width: 1023px) {
    --btnSize: 250px;
    --containerSize: 250px;
    --font-size: 2rem;
  }
  @media screen and (max-width: 400px) {
    --btnSize: 150px;
    --containerSize: 150px;
    --font-size: 1.25rem;
  }

  .button_big {
    ${S.size("var(--containerSize)", "var(--containerSize)")};
    ${S.flexCenter()}
    position: relative;
    z-index: 50;

    &--item,
    &--link {
      ${S.size("var(--btnSize)", "var(--btnSize)")};
      border-radius: 50%;
    }

    &--item {
      ${S.flexCenter()}
      background-color: #fff;
      background-color: rgba(255, 255, 255, 0.2);
      transition: 0.5s;
      transform-style: preserve-3d;
    }

    &--link {
      ${S.flexCenter()}
      top: ${S.centerAbsolute("var(--btnSize)")};
      left: ${S.centerAbsolute("var(--btnSize)")};
      background-color: rgba(255, 255, 255, 0.85);
      position: absolute;
      z-index: 100;
    }

    &--text {
      font-size: var(--font-size);
      text-transform: uppercase;
      letter-spacing: 2px;
      transition: 1s;
      transform: scale(1);
      @media screen and (max-width: 400px) {
        letter-spacing: 1.25px;
      }
    }

    .button_big--link:hover ~ .button_big--item {
      transition: 1s;
      transform: scale(1.65);
    }
    .button_big--link:hover .button_big--text {
      transition: 1s;
      transform: scale(1.15);
      letter-spacing: 6px;
    }
  }
`;
