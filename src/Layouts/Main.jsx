import React from "react";
import Navbar from "../Components/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-20">
      <Outlet></Outlet>
      <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
