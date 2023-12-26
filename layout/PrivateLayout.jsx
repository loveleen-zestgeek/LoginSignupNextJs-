import handleAuthentication from "@/auth";
import Navbar from "@/components/Navbar";
import React from "react";

export default function PrivateLayout({ children }) {
  const isAuthenticated = handleAuthentication();

  return (
    <section>
      <Navbar />

      {isAuthenticated ? children : null}
    </section>
  );
}
