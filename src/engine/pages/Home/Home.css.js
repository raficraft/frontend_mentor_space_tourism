import { S } from "../../styled/function";
import styled from "styled-components";

export const Home_Container = styled.section`
  ${S.flex("row", "space-between", "flex-start")}
  padding-top: 251px;
  flex: 1;
  background-color: rgba(120, 50, 12, 0.4);

  @media screen and (max-width: 800px) {
    ${S.flex("column", "flex-start", "center")}
    padding-top :106px;
  }
  @media screen and (max-width: 600px) {
    ${S.flex("column", "flex-start", "center")}
    padding-top :58px;
  }
  .home_content {
    &--left {
      max-width: 450px;
      max-height: 450px;
      margin-left: 167px;
      h1 {
        margin: 3rem 0 2rem 0;
      }
      h5 {
        margin-bottom: 2rem;
      }
      .text {
        margin: 1rem 0;
      }
      @media screen and (max-width: 800px) {
        margin: 0 auto 116px auto;
        h1 {
          margin: 1.5rem 0;
          font-size: 80px;
          text-align: center;
        }
        h5 {
          margin: 0;
          font-size: 1.5rem;
        }
        h5,
        .text {
          text-align: center;
        }
        .text {
          font-weight: 300;
          font-size: 16px;
        }
      }
      @media screen and (max-width: 600px) {
        margin: 0 auto 0;
        h1 {
          margin: 1.5rem 0;
        }
        h5 {
          margin: 0;
          font-size: 1rem;
        }
        h5,
        .text {
          text-align: center;
        }
        .text {
          font-size: 15px;
          font-weight: 300;
          padding: 0 1.5rem 5rem 0;
          line-height: 25px;
        }
      }
    }
    &--right {
      max-width: 450px;
      margin-right: 77px;
      @media screen and (max-width: 800px) {
        margin: 0 auto;
      }
    }
  }
`;
