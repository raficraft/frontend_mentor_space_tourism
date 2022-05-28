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

      @media screen and (max-width: 1000px) {
        ${S.flex("column", "flex-start", "center")}
      }

      &--left {
        ${S.flex("column", "space-between", "flex-start")}
        margin: 164px 0 0 165px;
        ${S.responsiveContainer("620px")}
        max-height:406px;
        height: 100%;

        @media screen and (max-width: 1000px) {
          ${S.flex("column", "flex-start", "center")}
          margin : 60px auto 0 auto;
          text-align: center;
        }
        h4 {
          color: rgba(255, 255, 255, 0.4);
          margin: 0 0 1.5rem 0;
          display: block;
        }
        h3 {
          margin: 0 0 2rem 0;
          @media screen and (max-width: 1000px) {
            font-size: 40px;
          }
        }
        .text {
          ${S.responsiveContainer("518px")}
          line-height:2rem;
          @media screen and (max-width: 1000px) {
            margin: auto;
            line-height: 28px;
            font-weight: 300;
            letter-spacing: 0;
          }
        }
        footer {
          margin: 0 0 0 0;

          @media screen and (max-width: 1000px) {
            margin: 40px auto 0 auto;
          }

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

              &:last-child {
                margin: 0;
              }
            }
          }
        }
      }
      &--right {
        margin: 0 163px 0 0;
        align-self: flex-end;
        @media screen and (max-width: 1000px) {
          margin: auto;
          img {
            ${S.responsiveContainer("456px")}
          }
        }
      }
    }
  }
`;
