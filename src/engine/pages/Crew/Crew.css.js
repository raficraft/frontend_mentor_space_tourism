import { S } from "../../styled/function";
import styled from "styled-components";

export const Crew_Container = styled.section`
  flex: 1;
  height: 100%;

  .crew {
    ${S.flex("column", "flex-start", "flex-start")}
    flex: 1;
    height: 100%;

    &_content {
      ${S.flex("row", "space-between", "flex-start")}
      flex: 1;

      &--left {
        ${S.flex("column", "space-between", "flex-start")}
        margin: 164px 0 0 165px;
        ${S.responsiveContainer("620px")}
        max-height:406px;
        height: 100%;
        h4 {
          color: rgba(255, 255, 255, 0.4);
          margin: 0 0 1.5rem 0;
          display: block;
        }
        h3 {
          margin: 0 0 2rem 0;
        }
        .text {
          ${S.responsiveContainer("450px")}
          line-height:2rem;
        }
        footer {
          margin: 0 0 0 0;

          .nav_dotted {
            button {
              ${S.size("15px", "15px")}
              border-radius: 50%;
              margin: 0 20px 0 0;
              padding: 0;
              background-color: rgba(97, 97, 97, 1);
              cursor: pointer;
              border: none;

              &:hover {
                background-color: rgba(97, 97, 97, 0.5);
              }

              &[data-active="true"] {
                background-color: rgba(255, 255, 255, 1);
              }
            }
          }
        }
      }
      &--right {
        margin: 0 163px 0 0;
        align-self: flex-end;
      }
    }
  }
`;
