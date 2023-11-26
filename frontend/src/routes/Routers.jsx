import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "../pages/Blog";
import Contacto from "../pages/Contact";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Portfolio from "../pages/Portfolio";
import Signup from "../pages/Signup";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contacto />} />
      <Route path="/login" element={<Login />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default Routers;
