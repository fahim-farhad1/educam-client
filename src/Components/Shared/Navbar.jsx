import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Logo from "../../assets/Logo/logo.png";
import Container from "./Container";

const Navbar = () => {
  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </>
  );
  return (
    <div className=" fixed w-full bg-white z-10 shadow-sm py-2">
      <Container>
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
          <div>
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost sm:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItem}
              </ul>
            </div>
            <div>
              <Link>
                <img
                  className="h-8 w-32 -mt-7 hidden sm:block"
                  src={Logo}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-2 font-bold text-black text-lg">
                {navItem}
              </ul>
            </div>
          </div>
          <div>
            <div className="flex items-center">
              <div className="mr-5">
                <Link to="/login"><button className="btn ">Login</button> </Link>
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div>
                    <FaUserCircle className="h-12 w-12 rounded-full" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to='#'>Profile</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign up</Link>
                  </li>
                  <li>
                    <button className="btn-sm">Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
