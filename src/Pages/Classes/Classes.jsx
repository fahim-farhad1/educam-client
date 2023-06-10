import React, { useEffect, useState } from "react";
import Container from "../../Components/Shared/Container";

const Classes = () => {
  const [popularClasses, setPopularClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/popular")
      .then((res) => res.json())
      .then((data) => setPopularClasses(data));
  }, []);
  console.log(popularClasses);
  return (
    <Container>
      {" "}
      <div>
        <h1 className="text-5xl text-center text-orange-500">
          Popular Classes
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {popularClasses.map((classes) => (
            <>
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <img src={classes.course_image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{classes.course_name}</h2>
                  <p>{classes.course_description}</p>
                  <p>Available seats: {classes.available_seats}</p>
                  <p><span>Price: </span>${classes.course_price}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Select Button</div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Classes;
