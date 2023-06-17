import React, { useContext, useEffect, useState } from "react";
import Container from "../../Components/Shared/Container";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Classes = () => {
  const [Classes, setClasses] = useState([]);
  const [role, setRole] = useState(['']);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // const total =  (Classes.available_seats) - (Classes.enrolled_students);

  useEffect(() => {
    fetch("https://educam-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  console.log(Classes);

  useEffect(() => {
    fetch(`https://educam-server.vercel.app/role/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setRole(data.role));
  }, []);

  console.log(role);
  const handelSelect = (classes) => {
    const { _id, course_name, course_image, course_instructor, course_price } =
      classes;
    if (user && user.email) {
      const addClass = {
        classId:_id,
        course_name,
        course_image,
        course_price,
        course_instructor,
        email: user.email,
      };
      fetch('https://educam-server.vercel.app/addtoclass', {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.insertedId) {
            // alert
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Course added on your Dashboard😍",
              showConfirmButton: false,
              timer: 1500,
            });
            console.log(classes);
          }
          else{
            Swal.fire({
              icon: 'error',
              title: 'Sorry!',
              text: 'Class already added',
            })
          }
        });
        
    } else {
      // alert
      Swal.fire({
        title: "Only login user can select Classes!",
        text: "Please login to select classes",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <Container>
      <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {Classes.map((classes) => (
            <>
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <img src={classes.course_image} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{classes.course_name}</h2>
                  <p>{classes.course_description}</p>
                  <p>Available seats: {classes.available_seats}</p>
                  <p>
                    <span>Price: </span>${classes.course_price}
                  </p>
                  <div className="card-actions justify-end">
                    <button></button>
                    <button
                      onClick={() => handelSelect(classes)}
                      className={`${classes.available_seats !== 0 && role !== 'admin'  && 'instructor'  ? "btn btn-sm bg-blue-400 w-full hover:bg-blue-700" : "btn btn-sm w-full btn-disabled"}`}
                    >
                      Select
                    </button>
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
