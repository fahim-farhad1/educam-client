import React, { useEffect, useState } from "react";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  const { image, course_Name, course_Description, price } = popularClasses;
  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((res) => res.json())
      .then((data) => setPopularClasses(data));
  }, []);
  console.log(popularClasses);
  return (
    <div>
      <h1 className="text-5xl text-center text-orange-500">Popular Classes</h1>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course_Name}</h2>
          <p>{course_Description}</p>
          <p>${price}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
