import { S } from "../../styled/function";
import styled from "styled-components";

const refSize = 1440;

export const WrapperHeader = styled.header`
  ${S.flex("row", "space-between", "center")};
  margin-top: ${S.spacing(8)};

  @media screen and (max-width: 1024px) {
    margin: 0;
  }
  svg {
    margin: auto 0 auto ${S.spacing(11)};
    padding-right: 3rem;
    @media screen and (max-width: 769px) {
      margin: auto 0 auto ${S.spacing(8)};
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
