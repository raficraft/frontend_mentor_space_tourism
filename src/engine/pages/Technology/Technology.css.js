import { S } from "../../styled/function";
import styled from "styled-components";

export const TechContainer = styled.section`
  flex: 1;

  .pages_header {
    margin-bottom: 26px;
  }

  .tech {
    ${S.flex("column", "flex-start", "flex-start")}
    flex: 1;

    &_content {
      ${S.flex("row", "space-between", "flex-start")}
      flex: 1;
      @media screen and (max-width: 1000px) {
        ${S.flex("column-reverse", "flex-start", "center")}
        margin: 60px 0 0 0;
      }
      @media screen and (max-width: 700px) {
        margin: 1rem 0 0 0;
      }

      &--left {
        ${S.flex("row", "space-between", "flex-start")}
        margin: 126px 0 0 165px;

        @media screen and (max-width: 1000px) {
          ${S.flex("column", "space-between", "flex-start")}
          margin : 56px auto;
        }
        @media screen and (max-width: 700px) {
          margin: 34px auto;
        }

        aside {
          ${S.flex("column", "space-between", "flex-start", "wrap")}
          align-self: stretch;
          max-width: 80px;
          height: 100%;
          @media screen and (max-width: 1000px) {
            ${S.flex("row", "center", "flex-start", "wrap")}
            max-width: 100%;
          }

          nav {
            ${S.flex("column", "space-between", "flex-start", "wrap")}
            height: 304px;
            @media screen and (max-width: 1000px) {
              ${S.flex("row", "space-between", "flex-start")}
              height: auto;
              gap: 1rem;
            }
          }
          button {
            ${S.size("80px", "80px")}
            padding: 0;
            border-radius: 50%;
            font-family: "Bellefair", serif;
            font-size: 2rem;
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.4);
            background-color: transparent;
            transition: 0.5s;
            cursor: pointer;
            @media screen and (max-width: 1000px) {
              ${S.size("58px", "58px")}
              font-size: 24px;
            }

            @media screen and (max-width: 1000px) {
              ${S.size("40px")}
              font-size: 1rem;
            }

            &:hover {
              border: 1px solid rgba(255, 255, 255, 1);
              transition: 0.5s;
            }

            &[data-active="true"] {
              color: rgba(11, 13, 23, 1);
              background-color: white;
              transition: 0.5s;
            }
          }
        }
        article {
          ${S.size("500px", "271px")}
          margin : 0 0 0 80px;

          .subHeading_2 {
            margin: 0 0 1rem 0;
          }

          @media screen and (max-width: 1000px) {
            margin: 44px auto;
            text-align: center;
          }

          @media screen and (max-width: 700px) {
            ${S.size("85%", "271px")}
            line-height:25px;
            font-size: 15px;
            margin-top: 26px;
          }

          .text {
            margin: 0 0 1rem 0;
            line-height: 32px;
          }

          h3 {
            margin: 0 0 1.5rem 0;
            @media screen and (max-width: 1000px) {
              margin: 1rem 0 2rem 0;
            }
            @media screen and (max-width: 700px) {
              margin: 1rem 0 1rem 0;
            }
          }
        }
      }

      &--right {
        @media screen and (max-width: 1000px) {
          figure {
            ${S.responsiveContainer("100%")}
            img {
              ${S.responsiveContainer("100%")}
              aspect-ratio : 384/155
            }
            @media screen and (max-width: 1000px) {
              /* height: 170px; */
            }
          }
        }
      }
    }
  }
`;
