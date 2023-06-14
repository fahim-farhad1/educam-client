import React from 'react';
import { NavLink } from 'react-router-dom';

const StudentsRoutes = () => {
    return (
        <div className='my-5 mx-10'>
             <NavLink className={({ isActive }) =>
                  isActive
                    ? " font-bold text-orange-600 border-b border-orange-700"
                    : ""
                }  to='/dashboard/enrolledClasses'><li className='mb-5 text-lg cursor-pointer'>My Enrolled Classes</li></NavLink>
            <NavLink className={({ isActive }) =>
                  isActive
                    ? " font-bold text-orange-600 border-b border-orange-700"
                    : ""
                }  to='/dashboard/selectedClasses'><li className='mb-5 text-lg cursor-pointer'>My Selected Class</li></NavLink>
            <NavLink className={({ isActive }) =>
                  isActive
                    ? " font-bold text-orange-600 border-b border-orange-700"
                    : ""
                }  to='/dashboard/mypayments'><li className='mb-5 text-lg cursor-pointer'>Payment's History</li></NavLink>
        </div>
    );
};

export default StudentsRoutes;