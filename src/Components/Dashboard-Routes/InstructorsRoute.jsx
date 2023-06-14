import React from 'react';
import { NavLink } from 'react-router-dom';

const InstructorsRoute = () => {
    return (
        <div className='my-5 mx-10'>
            <NavLink className={({ isActive }) =>
                  isActive
                    ? " font-bold text-orange-600 border-b border-orange-700"
                    : ""
                }  to='/dashboard/addclass'><li className='mb-5 text-lg cursor-pointer'>Add Class</li></NavLink>
            <NavLink className={({ isActive }) =>
                  isActive
                    ? " font-bold text-orange-600 border-b border-orange-700"
                    : ""
                }  to='/dashboard/myclasses'><li className='mb-5 text-lg cursor-pointer'>My Classes</li></NavLink>
        </div>
    );
};

export default InstructorsRoute;