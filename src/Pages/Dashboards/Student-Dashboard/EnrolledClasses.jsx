import React, { useEffect, useState } from "react";
import DashboardContainer from "../../../Components/Shared/DashboardContainer";
import useAuth from "../../../Hooks/useAuth";
import Classess from "./Classess";

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
        <p>Your  Enrolled Classes</p>
        {payments.map(payment => <Classess
        key={payment._id}
        payment={payment}
        ></Classess>)}
      </div>
    </DashboardContainer>
  );
};

export default EnrolledClasses;
