import React from "react";
import useAddedClass from "../../Hooks/useAddedClass";
import DashboardContainer from "../../Components/Shared/DashboardContainer";
import { TiDeleteOutline } from "react-icons/ti";
import Swal from "sweetalert2";

const SelectedClasses = () => {
  const [addedClass, refetch] = useAddedClass();
  console.log(addedClass);
  const handelDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/addedclass/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                refetch()
              Swal.fire("Deleted!", "Your added Course has been delete.", "success");
            }
          });
      }
    });
  };
  return (
    <DashboardContainer>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-center">
            <tr>
              <th>Action</th>
              <th>Instructor</th>
              <th>Course</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {addedClass.map((classes) => (
              <>
                <tr>
                  <td>
                    <button
                      onClick={() => handelDelete(classes._id)}
                      className="btn btn-ghost"
                    >
                      <TiDeleteOutline className="h-8 w-8">
                        <TiDeleteOutline />
                      </TiDeleteOutline>
                    </button>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={classes.course_image} alt="Class Img" />
                        </div>
                      </div>
                      <div className="font-bold">
                        {classes.course_instructor}
                      </div>
                    </div>
                  </td>
                  <td>{classes.course_name}</td>
                  <td>${classes.course_price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Pay Now</button>
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

export default SelectedClasses;
