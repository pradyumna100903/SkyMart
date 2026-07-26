import React from "react";
import { Route, Routes } from "react-router";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ProtectedRoute from "./Protectedroute";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import ProductDetail from "../pages/ProductDetail";

import Layout from "../components/Common/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ================= AUTH ROUTES ================= */}

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      {/* ================= PROTECTED ROUTES ================= */}

      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<ProductDetail />} />

        <Route path="/product/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
