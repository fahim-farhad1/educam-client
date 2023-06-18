import React, { useContext, useEffect, useState } from "react";
import Container from "../../../Components/Shared/Container";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
// import useStudent from "../../../Hooks/Students";

const PopularClasses = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(['']);
  const [popularClasses, setPopularClasses] = useState([]);
  useEffect(() => {
    fetch("https://educam-server.vercel.app/popular")
      .then((res) => res.json())
      .then((data) => setPopularClasses(data.slice(0, 6)));
  }, []);
  console.log(popularClasses);
  useEffect(() => {
    fetch(`https://educam-server.vercel.app/role/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setRole(data.role));
  }, []);
  //   const { image, course_Name, course_Description, price } = popularClasses;
  // const [data, refetch] = useStudent;
  return (
   <Container> <div className="mt-10">
   <h1 className="text-3xl text-center text-blue-500 py-5">Popular Classes</h1>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
     {popularClasses.map((classes) => (
       <>
         <div className="card w-full bg-base-100 shadow-xl">
           <figure>
             <img src={classes.
course_image} alt="Shoes" />
           </figure>
           <div className="card-body">
             <h2 className="card-title">{classes.course_name}</h2>
             <p>{classes.course_description}</p>
             <p><span className="text-orange-400">Price: </span> ${classes.course_price}</p>
             <div className="card-actions justify-end">
                    <button
                      className={`${classes.available_seats !== 0 && role !== 'admin'  && 'instructor'  ? "btn btn-sm bg-blue-400 w-full hover:bg-blue-700" : "btn btn-sm w-full btn-disabled"}`}
                    >
                     <Link to='/classes'> Select</Link>
                    </button>
                  </div>
           </div>
         </div>
       </>
     ))}
   </div>
 </div></Container>
  );
};

export default PopularClasses;
