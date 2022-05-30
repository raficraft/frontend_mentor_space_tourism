import { S } from "../../styled/function";
import styled from "styled-components";

export const CrewContainer = styled.section`
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
        ${S.responsiveContainer("620px")}
        max-height:406px;
        margin: 164px 0 0 165px;

        @media screen and (max-width: 1000px) {
          ${S.flex("column", "flex-start", "center")}
          margin : 60px auto 0 auto;
          text-align: center;
        }

        @media screen and (max-width: 700px) {
          ${S.flex("column-reverse", "flex-start", "center")}
          ${S.responsiveContainer("90%")}
          margin : 0 auto;
          padding-bottom: 4rem;
          border-top: 1px solid #979797;
        }
        h4 {
          display: block;
          margin: 0 0 1.5rem 0;
          color: rgba(255, 255, 255, 0.4);
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
            font-weight: 300;
            letter-spacing: 0;
            line-height: 28px;
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
                background-color: rgba(97, 97, 97, 0.5);
                transition: 0.5s;
              }

              &[data-active="true"] {
                background-color: rgba(255, 255, 255, 1);
                transition: 0.5s;
              }

              &:last-child {
                margin: 0;
              }
            }
          }
        }
      }
      &--right {
        align-self: flex-end;
        margin: 0 163px 0 0;
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
              height: 223px;
            }
          }
        }
      }
    }
  }
`;
