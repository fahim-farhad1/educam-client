import React from "react";
import DashboardContainer from "../../../Components/Shared/DashboardContainer";
import { useQuery } from "react-query";
import { FaUser, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/students");
    return res.data;
  });


  const handelMakeAdmin = user =>{
    fetch(`https://educam-server.vercel.app/students/admin/${user.email}`,{
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
  const handelMakeInstructors = user =>{
    fetch(`https://educam-server.vercel.app/students/instructor/${user.email}`,{
        method: 'PATCH'
    })
    .then(res => res.json())
    .then( data =>{
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is Instructor Now`,
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
                 {user.role === "admin" || user.role === "instructor" ? (
                    user.role
                  ) : 'Student'}
                 </th>
                  <th>
                    <button onClick={() =>handelMakeInstructors(user)}  className={`${user.role === 'instructor' ? "ml-2 btn btn-sm btn-disabled" : " mb-1 btn btn-ghost text-white bg-red-500 btn-sm hover:bg-red-800"}`}>Make Instructor</button>
                    <button onClick={() =>handelMakeAdmin(user)}  className={`${user.role === 'admin' ? "ml-2 btn btn-sm btn-disabled" : "mt-2 btn btn-ghost text-white bg-red-500 btn-sm  hover:bg-red-800"}`}>Make Admin</button>
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
