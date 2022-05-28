import { S } from "../../../../styled/function";
import styled from "styled-components";

export const BurgerContainer = styled.aside`
  position: absolute;
  height: 100vh;
  top: 0;
  right: 0;
  ${S.responsiveContainer("68%")}
  backdrop-filter: blur(81.55px);
  z-index: 500;
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
