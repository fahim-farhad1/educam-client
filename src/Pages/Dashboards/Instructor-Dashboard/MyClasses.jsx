import React from "react";
import DashboardContainer from "../../../Components/Shared/DashboardContainer";
import useInstructorClass from "../../../Hooks/useInstructorClass";

const MyClasses = () => {
  const [instructorClass, refetch] = useInstructorClass();
  console.log(instructorClass);
  return (
    <DashboardContainer>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-center">Name</th>
              <th className="text-center">Price</th>
              <th className="text-center">Student's</th>
              <th className="text-center">Available Seats</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {instructorClass.map((classes) => (
                // course_image,
                // course_name,
                // course_instructor,
                // instructor_email,
                // course_description,
                // course_price: parseFloat(course_price),
                // available_seats: parseInt(available_seats),
                // status: "pending"

              <>
                <tr>
                  <th>
                    <label></label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={classes.course_image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{classes.course_name}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>${classes.course_price}</p>
                  </td>
                  <td className="text-center">{classes.enrolled_Students ? classes.enrolled_Students : 0}</td>
                  <td className="text-center">{classes.available_seats}</td>
                  <td><p className="text-red-500">{classes.status}</p></td>
                  <th>
                    <button className="btn  btn-xs">Update</button>
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

export default MyClasses;
