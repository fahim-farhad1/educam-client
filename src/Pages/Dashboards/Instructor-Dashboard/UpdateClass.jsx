import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateClass = () => {
  const clsses = useLoaderData();
  const navigate = useNavigate();
  console.log(clsses._id)

  const {
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {
      course_image,
      course_name,
      course_instructor,
      course_description,
      course_price,
      available_seats,
      instructor_email,
    } = data;
    const updateClass = {
      course_image,
      course_name,
      course_instructor,
      course_description,
      course_price,
      available_seats,
      instructor_email,
    };
    fetch(`https://educam-server.vercel.app/classess/${clsses._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateClass),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
            reset()
            navigate('/dashboard/myclasses')
            // alert
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class Update Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        console.log("Data updated successfully:", result);
        // Handle any UI updates or display a success message to the user
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        // Handle any error and display an error message to the user
      });
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-56 my-10">
      <div className="card shadow-md p-5 mx-auto">
        <img className="h-96" src={clsses.course_image} alt="" />
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Class Image
          </label>
          <input
            type="file"
            accept="image/*"
            // {...register("course_image", { required: "image is required" })}
          />
          {errors.image && (
            <p className="text-sm text-red-500 mt-2" role="alert">
              {errors.image?.message}
            </p>
          )}
        </div>
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
            // placeholder=
            placeholder={clsses.course_name}
            // {...register("course_name", { required: true })}
          />
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
            // {...register("course_instructor", { required: true })}
            value={clsses.course_instructor}
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
            // {...register("instructor_email", { required: true })}
            value={clsses.instructor_email}
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
            placeholder={clsses.course_description}
            // {...register("course_description", { required: true })}
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
            placeholder={clsses.available_seats}
            // {...register("available_seats", { required: true })}
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
            placeholder={clsses.course_price}
            // {...register("course_price", { required: true })}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdateClass;
