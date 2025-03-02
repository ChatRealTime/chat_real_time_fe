import React from "react";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className="mt-4 py-4">{children}</div>
    </>
  );
}
