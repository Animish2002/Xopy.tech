import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./LandingPage";

const Layout = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="pt-20 pb-6 mt-14 mb-20 overflow-x-auto">
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
