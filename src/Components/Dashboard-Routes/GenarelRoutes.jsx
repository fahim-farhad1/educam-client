import React from "react";
import { Link } from "react-router-dom";

const GenarelRoutes = () => {
  return (
    <div >
      <div className="divider"></div>
      <div className='my-5 mx-10'>
        <Link to="/">
          <li className='mb-5 text-lg cursor-pointer'>Home</li>
        </Link>
        <Link to="/classes">
          <li className='mb-5 text-lg cursor-pointer'>Classes</li>
        </Link>
        <Link to="/instructors">
          <li className='mb-5 text-lg cursor-pointer'>Instructors</li>
        </Link>
      </div>
    </div>
  );
};

export default GenarelRoutes;
