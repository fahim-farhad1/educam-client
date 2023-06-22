import React, { useEffect, useState } from "react";
import Container from "../../Components/Shared/Container";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("https://educam-server.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  console.log(instructors);
  return (
    <Container>
      <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {instructors.map((instructor) => (
            <div key={instructor._id}>
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <img src={instructor.image} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{instructor.name}</h2>
                  <p><span className="text-red-400">email:</span> {instructor.email}</p>
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Instructors;
