import React from "react";
import DashboardContainer from "../../../Components/Shared/DashboardContainer";
import useInstructorClass from "../../../Hooks/useInstructorClass";
import { Link } from "react-router-dom";

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
              <th>Status</th>
              <th>
                <th></th>
              </th>
              <th className="text-center">Student's</th>
              <th></th>
              <th className="text-center">Admin Feedback</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {instructorClass.map((classes) => (
              <>
                <tr >
                  <th>
                    <div className={`${classes.status === 'pending' && 'denied' ? "badge badge-outline bg-red-500 text-white p-3" : "badge badge-outline bg-blue-500 text-white p-3" }`}>{classes.status}</div>
                    {/* <div className="badge badge-outline bg-red-500 text-white">p{classes.status}</div> */}
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
                  <td className="text-center">
                    {classes.enrolled_Students ? classes.enrolled_Students : 0}
                  </td>
                  <td></td>

                  <td >
                 <p >{classes.feedback}</p>
                  </td>
                  <th>
                    <Link to={`/dashboard/updateclass/${classes._id}`}>
                      <button className="btn  btn-xs">Update</button>
                    </Link>
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
