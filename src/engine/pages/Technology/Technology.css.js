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

      &--left {
        margin: 126px 0 0 165px;
        ${S.flex("row", "space-between", "flex-start")}

        @media screen and (max-width: 1000px) {
          ${S.flex("column", "space-between", "flex-start")}
          margin : 56px auto;
        }

        aside {
          ${S.flex("column", "space-between", "flex-start", "wrap")}
          height: 100%;
          max-width: 80px;
          align-self: stretch;
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
            border-radius: 50%;
            padding: 0;
            font-family: "Bellefair", serif;
            font-size: 2rem;
            cursor: pointer;
            border: 1px solid rgba(255, 255, 255, 0.4);
            background-color: transparent;
            color: white;
            transition: 0.5s;
            @media screen and (max-width: 1000px) {
              ${S.size("58px", "58px")}
              font-size: 24px;
            }

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
          ${S.size("500px", "271px")}
          margin : 0 0 0 80px;

          @media screen and (max-width: 1000px) {
            margin: 44px auto;
            text-align: center;
          }

          p {
            margin: 0 0 1rem 0;
          }

          h3 {
            margin: 0 0 1.5rem 0;
            @media screen and (max-width: 1000px) {
              margin: 1rem 0 2rem 0;
            }
          }

          .text {
            font-weight: 300;
          }
        }
      }

      &--right {
        @media screen and (max-width: 1024px) {
          figure {
            ${S.responsiveContainer("100%")}
            img {
              ${S.responsiveContainer("100%")}
            }
          }
        }
      }
    }
  }
`;
