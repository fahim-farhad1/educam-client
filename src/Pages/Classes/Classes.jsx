import React, { useContext, useEffect, useState } from "react";
import Container from "../../Components/Shared/Container";
import { AuthContext } from "../../Provider/AuthProvider";
import {useLocation, useNavigate } from "react-router-dom";

const Classes = () => {
  const [Classes, setClasses] = useState([]);
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:3000/classes",)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  console.log(Classes);


  const handelSelect = (classes) =>{
    const {_id, course_name, course_image, course_price} = classes ;
    if(user && user.email){
      const addClass = {classId: _id, course_name, course_image, course_price, email: user.email}
      fetch('http://localhost:3000/addtoclass',{
        method: "POST",
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(addClass)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          alert('item added!');
        }
      })
    }
    else{
      navigate('/login', {state: {from: location}});
    }
    console.log(classes);
  }
  return (
    <Container>
      <div>
        <h1 className="text-5xl text-center text-orange-500">
          Popular Classes
        </h1>
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
                  <p><span>Price: </span>${classes.course_price}</p>
                  <div className="card-actions justify-end">
                    <button onClick={() => handelSelect(classes)} className="btn btn-sm w-full">Select</button>
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
