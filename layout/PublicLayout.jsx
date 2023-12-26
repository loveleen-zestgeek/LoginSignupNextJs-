import Navbar from "@/components/Navbar";
import React from "react";

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
