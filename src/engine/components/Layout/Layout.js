import React from "react";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
}
