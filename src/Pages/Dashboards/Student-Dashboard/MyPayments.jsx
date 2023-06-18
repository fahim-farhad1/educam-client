import React, { useEffect, useState } from "react";
import DashboardContainer from "../../../Components/Shared/DashboardContainer";
import useAuth from "../../../Hooks/useAuth";

const MyPayments = () => {
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
        <p className="text-blue-500 my-5 text-xl text-center">Payments Page</p>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th> Price</th>
                <th className="text-center">Transaction Id</th>
                <th>Date</th>
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
                          <div className="text-sm opacity-50">
                            {payment.classInstructor}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{payment.classPrice}</td>
                    <td>{payment.transactionId}</td>
                    <td>{payment.date}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default MyPayments;
