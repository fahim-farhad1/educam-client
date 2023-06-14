import { list } from "postcss";
import React, { useEffect, useState } from "react";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data.slice(0, 6)));
  }, []);
  console.log(instructors);
  return (
    <div className="mt-10">
      <p className="text-3xl text-blue-500 text-center py-5">Popular Instructors</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {instructors.map((instructor) => (
          <>
            <div className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img
                  src={instructor.instructor_image}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{instructor.instructor_name}</h2>
                <p>
                  {instructor.instructor_courses.map((course, index) => (
                    <ol>
                      <li>{index +1 }. {course}</li>
                    </ol>
                  ))}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
