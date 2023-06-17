import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminFeedback = () => {
  const navigate = useNavigate();
  const recived = useLoaderData();
  console.log(recived._id);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    console.log(data.feedback);
    const feedback = data.feedback
    fetch(`https://educam-server.vercel.app/adminfeedback/${recived._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({feedback: feedback}),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          reset()
          navigate('/dashboard/manageClasses')
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "feedback send Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
      <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-56 my-10">
    <div className="mb-4">
      <label
        htmlFor="instructorEmail"
        className="block text-gray-700 font-bold mb-2"
        >
        Your Feedback
      </label>
      <input
        id="courseDescription"
        type="text"
        className="w-full p-2 border rounded-md"
        placeholder="type your feedback"
        {...register("feedback", { required: true })}
        />
    </div>

    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
      Update
    </button>
  </form>
);

};
export default AdminFeedback;
