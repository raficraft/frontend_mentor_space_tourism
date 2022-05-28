import { S } from "../../styled/function";
import styled from "styled-components";

export const Tech_Container = styled.section`
  background-color: rgba(25, 65, 80, 0.4);
  flex: 1;

  .pages_header {
    margin-bottom: 26px;
  }

  .tech {
    ${S.flex("column", "flex-start", "flex-start")}
    flex: 1;
    height: 100%;

    &_content {
      ${S.flex("row", "space-between", "flex-start")}
      flex: 1;

      &--left {
        margin: 126px 0 0 165px;
        ${S.flex("row", "space-between", "flex-start")}

        aside {
          ${S.flex("column", "space-between", "flex-start", "wrap")}
          height: 100%;
          max-width: 80px;
          align-self: stretch;
          nav {
            ${S.flex("column", "space-between", "flex-start", "wrap")}

            height: 304px;
          }
          button {
            ${S.size("80px", "80px")}
            border-radius: 50%;
            padding: 0;
            font-family: "Bellefair", serif;
            font-size: 2rem;
            cursor: pointer;
            border: 1px solid rgba(255, 255, 255, 0.4);
            background-color: transparent;
            color: white;
            transition: 0.5s;

            &:hover {
              transition: 0.5s;
              border: 1px solid rgba(255, 255, 255, 1);
            }

            &[data-active="true"] {
              transition: 0.5s;
              background-color: white;
              color: rgba(11, 13, 23, 1);
            }
          }
        }
        article {
          ${S.size("480px", "271px")}
          margin : 0 0 0 80px;

          p {
            margin: 0 0 1rem 0;
          }

          h3 {
            margin: 0 0 1.5rem 0;
          }
        }
      }
      &--right {
      }
    }
  }
`;
