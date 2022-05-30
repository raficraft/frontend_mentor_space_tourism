import { S } from "../../styled/function";
import styled from "styled-components";

export const DestinationContainer = styled.section`
  flex: 1;

  .destination {
    ${S.flex("column", "flex-start", "flex-start")}
    flex: 1;

    @media screen and (max-width: 1000px) {
      ${S.flex("column", "flex-start", "center")}
      padding-top :0px;
    }

    &_content {
      ${S.flex("row", "space-between", "flex-start")}

      @media screen and (max-width: 1000px) {
        ${S.flex("column", "center", "center")}
        margin : 0;
      }

      &--left {
        margin: 3rem 0 0 165px;

        @media screen and (max-width: 1000px) {
          margin: 32px auto 26px auto;
          img {
            ${S.size("300px")}
          }
        }

        @media screen and (max-width: 700px) {
          img {
            ${S.size("170px")}
          }
        }
      }
      &--right {
        ${S.responsiveContainer("445px")}
        padding : 0 193px 0 0;

        @media screen and (max-width: 1000px) {
          ${S.flex("column", "center", "flex-start")}
          margin: auto;
          padding: 0;
          ${S.responsiveContainer("573px")}
        }

        nav {
          margin: 0 0 2rem 0;
          ${S.flex("row", "flex-start", "flex-start")}

          @media screen and (max-width: 1000px) {
            margin: 2rem auto;
          }

          a {
            display: block;
            margin-right: 2rem;
            padding-bottom: 1.25rem;
            border-bottom: 3px solid rgba(255, 255, 255, 0);
            transition: 0.5s;

            @media screen and (max-width: 700px) {
              margin-right: 26px;
            }

            &:hover {
              transition: 0.5s;
              border-bottom: 3px solid rgba(255, 255, 255, 0.5);
            }

            &[data-active="true"] {
              border-bottom: 3px solid rgba(255, 255, 255, 1);
              color: white;
            }

            &:last-child {
              margin-right: 0;
            }
          }
        }
        header {
          margin-bottom: 2rem;

          @media screen and (max-width: 1000px) {
            h2 {
              text-align: center;
            }
          }
        }

        .text {
          margin: 0 0 54px 0;

          @media screen and (max-width: 1000px) {
            text-align: center;
          }

          @media screen and (max-width: 700px) {
            ${S.responsiveContainer("90%")}
            margin : auto;
          }
        }

        footer {
          ${S.flex("row", "flex-start", "flex-start")}
          border-top: 1px solid #383B4B;
          padding-top: 28px;
          @media screen and (max-width: 1000px) {
            text-align: center;
          }

          @media screen and (max-width: 700px) {
            ${S.flex("column", "flex-start", "flex-start")}
            ${S.responsiveContainer("90%")}
            margin : 32px auto;
            padding: 32px 0;
          }
          div {
            flex: 1;
            .subHeading_2 {
              margin: 0 0 1rem 0;
            }
            h4 {
              text-transform: uppercase;
            }

            @media screen and (max-width: 700px) {
              margin-bottom: 32px;
            }
          }
        }
      }
    }
  }
`;
