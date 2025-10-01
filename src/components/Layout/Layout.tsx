// src/components/Layout/CommonLayout.tsx
import React, { ReactNode } from "react";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";

type Props = {
  children: ReactNode;
};

const CommonLayout = ({ children }: Props) => {
  return (
    <div className="common-layout">
      <Header />
      <main className="layout-main">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
