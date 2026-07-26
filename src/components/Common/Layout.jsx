import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cart from "../../pages/Cart";

const Layout = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Cart />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
