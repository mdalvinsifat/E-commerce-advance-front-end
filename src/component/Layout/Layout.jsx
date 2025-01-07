import React from "react";
import Footer from "../Fotter/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
