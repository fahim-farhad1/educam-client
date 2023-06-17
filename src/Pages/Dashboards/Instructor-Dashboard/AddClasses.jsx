import React from "react";
import { useForm } from "react-hook-form";
import useInstructorAddClass from "../../../Hooks/useInstructorAddClass";
import Swal from "sweetalert2";

const AddClasses = () => {
  const [addclass] = useInstructorAddClass();

// console.log(name, email);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {
      course_image,
      course_name,
      name: course_instructor,
      course_description,
      course_price,
      available_seats,
      email: instructor_email,
    } = data;
    const courseData = {
      course_image,
      course_name,
      course_instructor,
      instructor_email,
      course_description,
      course_price: parseFloat(course_price),
      available_seats: parseInt(available_seats),
      status: "pending",
    };
    fetch("https://educam-server.vercel.app/uploadclass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(courseData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          reset();
          // alert
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Course added om your Dashboard😍",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-20 my-10">
      <div className="card shadow-md p-5 mx-auto">
        <div className="mb-4">
          <label
            htmlFor="className"
            className="block text-gray-700 font-bold mb-2"
          >
            Class name
          </label>
          <input
            id="name"
            type="text"
            className="w-full p-2 border rounded-md"
            {...register("course_name", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Class Image
          </label>
          <input
            type="file"
            accept="image/*"
            {...register("course_image", { required: "image is required" })}
          />
          {errors.image && (
            <p className="text-sm text-red-500 mt-2" role="alert">
              {errors.image?.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="instructorName"
            className="block text-gray-700 font-bold mb-2"
          >
            Instructor name
          </label>
          <input
            id="instructorName"
            type="text"
            className="w-full p-2 border rounded-md"
            {...register("course_instructor", { required: true })}
            defaultValue={addclass?.[0]?.name }
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="instructorEmail"
            className="block text-gray-700 font-bold mb-2"
          >
            Instructor email
          </label>
          <input
            id="instructorEmail"
            type="email"
            className="w-full p-2 border rounded-md"
            {...register("instructor_email", { required: true })}
            defaultValue={addclass?.[0]?.email}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="instructorEmail"
            className="block text-gray-700 font-bold mb-2"
          >
            course Description
          </label>
          <input
            id="courseDescription"
            type="text"
            className="w-full p-2 border rounded-md"
            {...register("course_description", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="availableSeats"
            className="block text-gray-700 font-bold mb-2"
          >
            Available seats
          </label>
          <input
            id="availableSeats"
            type="number"
            className="w-full p-2 border rounded-md"
            {...register("available_seats", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            id="price"
            type="number"
            className="w-full p-2 border rounded-md"
            {...register("course_price", { required: true })}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddClasses;
