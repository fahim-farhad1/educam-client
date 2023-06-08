import React from "react";
import Navbar from "../Components/Shared/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-20">
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
