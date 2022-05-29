import { S } from "../../styled/function";
import styled from "styled-components";

export const Crew_Container = styled.section`
  flex: 1;

  .crew {
    ${S.flex("column", "flex-start", "flex-start")}
    flex: 1;

    &_content {
      ${S.flex("row", "space-between", "flex-start")}
      flex: 1;

      @media screen and (max-width: 1000px) {
        ${S.flex("column", "flex-start", "center")}
      }

      @media screen and (max-width: 700px) {
        ${S.flex("column-reverse", "flex-start", "center")}
      }

      &--left {
        ${S.flex("column", "space-between", "flex-start")}
        margin: 164px 0 0 165px;
        ${S.responsiveContainer("620px")}
        max-height:406px;

        @media screen and (max-width: 1000px) {
          ${S.flex("column", "flex-start", "center")}
          margin : 60px auto 0 auto;
          text-align: center;
        }

        @media screen and (max-width: 700px) {
          ${S.flex("column-reverse", "flex-start", "center")}
          margin : 0 auto;
          border-top: 1px solid #979797;
          ${S.responsiveContainer("90%")}
          padding-bottom : 4rem;
        }
        h4 {
          color: rgba(255, 255, 255, 0.4);
          margin: 0 0 1.5rem 0;
          display: block;
          @media screen and (max-width: 700px) {
            margin: 0 0 1rem 0;
          }
        }
        h3 {
          margin: 0 0 2rem 0;

          @media screen and (max-width: 700px) {
            margin: 0 0 1rem 0;
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
          @media screen and (max-width: 700px) {
            margin: 2rem auto;
          }

          .nav_dotted {
            button {
              ${S.size("15px", "15px")}
              margin: 0 20px 0 0;
              padding: 0;
              border: none;
              border-radius: 50%;
              background-color: rgba(97, 97, 97, 1);
              transition: 0.5s;
              cursor: pointer;

              @media screen and (max-width: 700px) {
                ${S.size("10px", "10px")}
              }

              &:hover {
                transition: 0.5s;
                background-color: rgba(97, 97, 97, 0.5);
              }

              &[data-active="true"] {
                transition: 0.5s;
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
        .img_container {
          ${S.flexCenter()}
        }
        @media screen and (max-width: 1000px) {
          img {
            ${S.responsiveContainer("456px")}
          }

          @media screen and (max-width: 700px) {
            margin: 32px auto 0 auto;
            img {
              ${S.responsiveContainer("50%")}
            }
          }
        }
      }
    }
  }
`;
