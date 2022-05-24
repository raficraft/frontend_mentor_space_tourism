import { S } from "../../styled/function";
import styled from "styled-components";

export const Wrapper = styled.section`
  ${S.flex("column", "flex-start", "center")};
  min-height: 100%;
  height: 100%;
  max-width: 1440px;
  width: 100%;

  main {
    ${S.flex("column", "flex-start", "center")};
    flex: 1;
  }
`;
