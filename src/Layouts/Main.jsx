import React from "react";
import Navbar from "../Components/Shared/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Shared/Footer";

const Main = () => {
  const location = useLocation();

  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup');

  return (
    <div>
     { noHeaderFooter ||  <Navbar></Navbar>}
      <div className={`${noHeaderFooter ? "pt-0" : "pt-20"}`} >
      <Outlet></Outlet>
     {noHeaderFooter ||  <Footer></Footer>}
      </div>
    </div>
  );
};

export default Main;
