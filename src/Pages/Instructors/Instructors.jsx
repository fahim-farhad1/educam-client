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
                  <img src={instructor.instructor_image} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{instructor.instructor_name}</h2>
                  <p>{instructor.instructor_email}</p>
                <p className="font-bold text-orange-400">Courses:</p>
                <p>
                  {instructor.instructor_courses.map((course, index) => (
                    <ol>
                      <li>{index +1 }. {course}</li>
                    </ol>
                  ))}
                </p>
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
