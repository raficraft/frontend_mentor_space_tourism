import { S } from "../../styled/function";
import styled from "styled-components";

export const Destination_Container = styled.section`
  flex: 1;

  .destination {
    ${S.flex("column", "flex-start", "flex-start")}

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
          margin: 60px auto;
          img {
            ${S.size("300px")}
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
            color: white;
            font-size: 1rem;
            text-transform: uppercase;
            margin-right: 2rem;
            letter-spacing: 2.7px;
            padding-bottom: 1.25rem;
            line-height: 1;
            border-bottom: 3px solid rgba(255, 255, 255, 0);
            transition: 0.5s;

            &:hover {
              transition: 0.5s;
              border-bottom: 3px solid rgba(255, 255, 255, 0.5);
            }

            &[data-active="true"] {
              border-bottom: 3px solid rgba(255, 255, 255, 1);
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
        }

        footer {
          ${S.flex("row", "flex-start", "flex-start")}
          border-top: 1px solid #383B4B;
          padding-top: 28px;
          @media screen and (max-width: 1000px) {
            text-align: center;
          }
          div {
            flex: 1;
            p {
              margin: 0 0 1rem 0;
            }
            h4 {
              text-transform: uppercase;
            }
          }
        }
      }
    }
  }
`;
