import React, { useEffect, useState } from "react";
import Container from "../../../Components/Shared/Container";
// import useStudent from "../../../Hooks/Students";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/popular")
      .then((res) => res.json())
      .then((data) => setPopularClasses(data.slice(0, 6)));
  }, []);
  console.log(popularClasses);
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
