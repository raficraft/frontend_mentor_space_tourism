import { S } from "../../styled/function";
import styled from "styled-components";

export const Wrapper = styled.section`
  ${S.flex("column", "flex-start", "center")};
  min-height: 100%;
  height: 100%;
  width: 100%;
  max-width: 100%;
  overflow-y: hidden;

  main {
    ${S.flex("column", "flex-start", "center")};
    flex: 1;
  }
`;
