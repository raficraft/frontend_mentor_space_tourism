import { S } from "../../styled/function";
import styled from "styled-components";

const refSize = 1440;

export const WrapperHeader = styled.header`
  ${S.flex("row", "space-between", "center")};
  margin-top: ${S.spacing(8)};
  position: relative;

  @media screen and (max-width: 1024px) {
    margin: 0;
  }
  svg {
    margin: auto 0 auto ${S.spacing(11)};
    padding-right: 3rem;
    @media screen and (max-width: 769px) {
      margin: 24px 0 auto ${S.spacing(8)};
    }
  }

  .line {
    position: relative;
    display: flex;
    flex: 1;
    height: 50px;
    height: 100%;
    content: " ";

    &_item {
      position: absolute;
      top: calc(50% - 1px / 2);
      left: 2rem;
      z-index: 10;
      width: 100%;
      height: 1px;
      background-color: white;
      content: " ";
    }

    @media screen and (max-width: 769px) {
      display: none;
    }
  }

  nav {
    padding: 0 165px 0 123px;
    ${S.flex("row", "flex-start", "flex-start")};
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.55px);

    @media screen and (max-width: 769px) {
      padding: 0 48px 0 46px;
    }

    @media screen and (max-width: 1280px) {
      padding: 0 125px 0 83px;
    }

    @media screen and (max-width: 1024px) {
      padding: 0 100px 0 60px;
    }

    a {
      display: flex;
      align-items: stretch;
      margin: 0 14px;
      padding: ${S.spacing(8)} 0;
      border-bottom: 3px solid rgba(255, 255, 255, 0);
      cursor: pointer;
      &.active {
        border-bottom: 3px solid rgba(255, 255, 255, 1);
      }
      &:hover {
        border-bottom: 3px solid rgba(255, 255, 255, 0.5);
      }
      span {
        margin: 0 11px 0 0;
        font-weight: bold;
        @media screen and (max-width: 1024px) {
          display: none;
        }
      }
    }
  }
`;

export const BurgerContainer = styled.aside`
  position: absolute;
  height: 100vh;
  top: 0;
  right: 0;
  ${S.responsiveContainer("68%")}
  backdrop-filter: blur(81.55px);
  z-index: 10;
  transform: translateX(100%);
  transition: 0.8s;

  &[data-isOpen="true"] {
    transition: 0.8s;
    transform: translateX(0);
  }
`;
export const BurgerIcon = styled.span`
  ${S.flex("column", "space-between", "flex-start")};
  position: absolute;
  ${S.size("24px", "21px")}
  content : "";
  right: 1.5rem;
  top: 2rem;
  z-index: 100;
  cursor: pointer;

  .burger_item {
    display: flex;
    content: " ";
    height: 3px;
    width: 100%;
    background-color: white;
    transition: 0.8s;
    transform: translateY(0);
    &--middle {
      transition: 0.8s;
      transform: translateX(0);
    }
  }

  &[data-isopen="true"] {
    .burger_item {
      transition: 0.8s;
      transform: translateY(0);

      &--middle {
        transition: 0.8s;
        transform: translateX(500%);
      }

      &--top {
        transition: 0.8s;
        transform: translateY(9px) rotate(45deg);
      }
      &--bottom {
        transition: 0.8s;
        transform: translateY(-9px) rotate(-45deg);
      }
    }
  }
`;
