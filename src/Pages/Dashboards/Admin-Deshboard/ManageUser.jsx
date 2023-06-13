import React from "react";
import DashboardContainer from "../../../Components/Shared/DashboardContainer";
import { useQuery } from "react-query";
import { FaUser, FaUserTie } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { data } from "autoprefixer";
import Swal from "sweetalert2";

const ManageUser = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:3000/students");
    return res.json();
  });


  const handelMakeAdmin = user =>{
    fetch(`http://localhost:3000/students/admin/${user._id}`,{
        method: 'PATCH'
    })
    .then(res => res.json())
    .then( data =>{
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin Now`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }
  return (
    <DashboardContainer>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <>
                <tr className="text-center">
                  <th>
                    <p>{index + 1}</p>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="w-12 h-12 rounded-full">
                          <img src={user.image} alt="user image " />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-50">{user.email}</div>
                      </div>
                    </div>
                  </td>
                 <th>
                 {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button className="mt-3">
                      <FaUser className="h-8 w-8" />
                    </button>
                  )}
                 </th>
                  <th>
                    <button className="ml-3 btn btn-ghost text-white bg-red-500 btn-sm">Make Instructor</button>
                    <button onClick={() =>handelMakeAdmin(user)}  className={`${user.role === 'admin' ? "ml-2 btn btn-sm btn-disabled" : "ml-2 btn btn-ghost text-white bg-red-500 btn-sm"}`}>Make Admin</button>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardContainer>
  );
};

export default ManageUser;
