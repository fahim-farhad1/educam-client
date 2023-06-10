import React, { useEffect, useState } from "react";
import Container from "../../Components/Shared/Container";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  console.log(instructors);
  return (
    <Container>
      <div>
        <p className="text-5xl text-red-500 text-center">Popular Instructors</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {instructors.map((instructor) => (
            <>
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <img src={instructor.instructor_image} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{instructor.instructor_name}</h2>
                  <p>{instructor.instructor_email}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
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

export default Instructors;
