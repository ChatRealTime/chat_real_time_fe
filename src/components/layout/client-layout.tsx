import React from "react";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="mt-4">{children}</div>
      <Footer />
    </>
  );
}
