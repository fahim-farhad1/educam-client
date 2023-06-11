import React, { useContext } from "react";
import avatar from "../assets/avatar/placeholder.jpg";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

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
          <div className="flex-1 px-2 mx-2">Navbar Title</div>
          <div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div>
                  <img className=" rounded-full" src={avatar} alt="profile" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {user ? (
                  <>
                    <li>
                      <Link to="#">Profile</Link>
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
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/signup">Sign up</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        <ul className="menu p-4 w-72 h-screen hidden md:block bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
        {/* Page content here */}
      </div>
      <div className="drawer-side mt-[67px]">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
