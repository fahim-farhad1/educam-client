import React, { useContext } from "react";

import avatar from "../assets/avatar/placeholder.jpg";
import { AuthContext } from "../Provider/AuthProvider";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/Logo/logo.png";
import useAdmin from "../Hooks/useAdmin";
import GenarelRoutes from "../Components/Dashboard-Routes/GenarelRoutes";
import AdminRoutes from "../Components/Dashboard-Routes/AdminRoutes";
import InstructorsRoute from "../Components/Dashboard-Routes/InstructorsRoute";
import StudentsRoutes from "../Components/Dashboard-Routes/StudentsRoutes";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  // to do admin
  const isAdmin = true;
  // const [isAdmin] = useAdmin();
  console.log(isAdmin);
  const isInstructors = true;
  const inStudents = true;
  const menuItem = (
    <div>
      {isAdmin && (
        <div>
          <AdminRoutes></AdminRoutes>
        </div>
      )}
      {isInstructors && (
        <InstructorsRoute></InstructorsRoute>
      )}
      {inStudents && (
        <StudentsRoutes></StudentsRoutes>
      )}
    </div>
  );
  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none md:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div>
                  {user ? (
                    <>
                      {" "}
                      <img
                        className=" rounded-full"
                        src={user.photoURL}
                        alt="profile"
                      />
                    </>
                  ) : (
                    <>
                      {" "}
                      <img
                        className=" rounded-full"
                        src={avatar}
                        alt="profile"
                      />
                    </>
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {user ? (
                  <>
                    <li>
                      <NavLink to="#">Profile</NavLink>
                    </li>
                    <li>
                      <button onClick={handelLogOut} className="btn-sm">
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink to="/login"> Login</NavLink>
                    </li>
                    <li>
                      <NavLink to="/signup">Sign up</NavLink>{" "}
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex">
          <ul className="menu p-4 w-72 h-screen hidden md:block bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {menuItem}
            <GenarelRoutes></GenarelRoutes>
          </ul>
          <Outlet></Outlet>
        </div>
        {/* Page content here */}
      </div>
      <div className="drawer-side mt-[67px]">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* hidden Sidebar content here */}
          {menuItem}
          <GenarelRoutes></GenarelRoutes>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
