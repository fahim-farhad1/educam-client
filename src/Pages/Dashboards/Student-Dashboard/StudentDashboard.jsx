import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { data } from "autoprefixer";

const StudentDashboard = () => {
  const [addedClasses, setAddedClasses] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:3000/addedclass?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAddedClasses(data));
  }, [user]);
  console.log(addedClasses);
  return (
    <div>
      <p className="text-center text-yellow-700 text-3xl">
        ami student! <br /> amar lav loss nay amar jibontay bedona..
      </p>
    </div>
  );
};

export default StudentDashboard;
