import React, { useEffect, useState } from "react";
import DashboardContainer from "../../../Components/Shared/DashboardContainer";
import Swal from "sweetalert2";
import useAdminAction from "../../../Hooks/useAdminAction";

const ManageClass = () => {
  const [adminActions, refetch] = useAdminAction();
// Approved Class 
  const hendeApproved = classess =>{
    fetch(`https://educam-server.vercel.app/classes/approved/${classess._id}`,{
        method: 'PATCH'
    })
    .then(res => res.json())
    .then( data =>{
        if(data.modifiedCount){
          refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${classess.course_name} is Approved`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }

  // hendel Deny 
  const hendelDeny = classess =>{
    fetch(`https://educam-server.vercel.app/classes/deny/${classess._id}`,{
        method: 'PATCH'
    })
    .then(res => res.json())
    .then( data =>{
        if(data.modifiedCount){
          refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${classess.course_name} is Deny`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }

  // hendel Feedback
  const hendelSendFeedBack = classess =>{
    fetch(`https://educam-server.vercel.app/classes/approved/${classess._id}`,{
        method: 'PATCH'
    })
    .then(res => res.json())
    .then( data =>{
        if(data.modifiedCount){
          refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${classess.course_name} is Approved`,
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
            <th>Class Name</th>
            <th>Instructor's</th>
            <th>Instructor's Email</th>
            <th>Available seats</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {adminActions.map((classess, index) => (
            <>
              <tr className="text-center">
                <th>
                  <p>{index + 1}</p>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-12 h-12 rounded-full">
                        <img src={classess.course_image} alt="class image " />
                      </div>
                    </div>
                      <div className="font-bold">{classess.course_name}</div>
                  </div>
                </td>
               <th>
               <div>
                      <div className="font-bold">{classess.course_instructor}</div>
                      <div className="text-sm opacity-50">{classess.instructor_email}</div>
                    </div>
               </th>
                <th>
                  {classess.available_seats}
                </th>
                <th>
                  ${classess.course_price}
                </th>
                <th>
                  {classess.status}
                </th>
                <th className="space-y-3">
                 <button onClick={() => hendeApproved(classess)} className={`${classess.status === 'approved' ? "ml-2 btn btn-sm btn-disabled" : "ml-2 btn btn-ghost text-white bg-orange-500 btn-sm"}`}>Approved</button>
                 <button onClick={() => hendelDeny(classess)} className={`${classess.status === 'deny' ? "ml-2 btn btn-sm btn-disabled" : "ml-2 btn btn-ghost text-white bg-red-500 btn-sm"}`}>Deny</button>
                 <button onClick={() => hendelSendFeedBack(classess)} className="ml-2 btn btn-ghost text-white bg-blue-500 btn-sm">feedback</button>
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

export default ManageClass;
