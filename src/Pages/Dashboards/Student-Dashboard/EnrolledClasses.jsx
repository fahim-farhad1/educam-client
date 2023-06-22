import React, { useEffect, useState } from "react";
import DashboardContainer from "../../../Components/Shared/DashboardContainer";
import useAuth from "../../../Hooks/useAuth";

const EnrolledClasses = () => {
  const { user } = useAuth();
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    fetch(`https://educam-server.vercel.app/getpayments/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPayments(data));
  }, []);
  return (
    <DashboardContainer>
      <div>
        <div>
        <p className="text-blue-500 my-5 text-xl text-center">Your  Enrolled Classes</p>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th></th>
                <th>Class  </th>
                <th>Instructor Name </th>
                <th className="text-center">Price</th>
                <th>Purchase Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {payments.map((payment, index) => (
                <>
                  <tr>
                    <th>
                      {index + 1}
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className=" w-12 h-12 rounded-full">
                            <img
                              src={payment.classImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{payment.className}</div>
                        </div>
                      </div>
                    </td>
                    <td>{payment.classInstructor}</td>
                    <td>{payment.classPrice}</td>
                    <td>{payment.date}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </DashboardContainer>
  );
};

export default EnrolledClasses;
