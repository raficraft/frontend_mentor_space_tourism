import React from "react";
import Header from "../Header/Header";
import { Wrapper } from "./Layout_css";

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Header></Header>
      <main> {children}</main>
    </Wrapper>
  );
}
