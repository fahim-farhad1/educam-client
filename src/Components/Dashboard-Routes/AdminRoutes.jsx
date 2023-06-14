import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminRoutes = () => {
    return (
        <div className='my-5 mx-10'>
            <NavLink className={({ isActive }) =>
                  isActive
                    ? " font-bold text-orange-600 border-b border-orange-700"
                    : ""
                }  to='/dashboard/manageClasses'><li className='mb-5 text-lg cursor-pointer'>Manage Classes</li></NavLink>
            <NavLink className={({ isActive }) =>
                  isActive
                    ? " font-bold text-orange-600 border-b border-orange-700"
                    : ""
                }  to='/dashboard/manageUsers'><li className='mb-5 text-lg cursor-pointer'>Manage User</li></NavLink>
        </div>
    );
};

export default AdminRoutes;