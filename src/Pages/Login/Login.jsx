import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import GoogleLogin from "../../Components/Shared/Social-Login/GoogleLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
         // Login alert 
         Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login Successfully!😃',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(from, {replace: true});
        console.log(loggedUser);
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
  };
  // const handelGoogleSignIn = () => {
  //   signInWithGoogle()
  //     .then((result) => {
  //       const loggedUser = result.user;
  //       // Login alert 
  //       Swal.fire({
  //         position: 'top-end',
  //         icon: 'success',
  //         title: 'Login Successfully!😃',
  //         showConfirmButton: false,
  //         timer: 1500
  //       })
  //       navigate(from, {replace: true});
  //       console.log(loggedUser);
  //     })
  //     .catch((error) => {
  //       const message = error.message;
  //       console.log(message);
  //     });
  // };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="card w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                aria-invalid={errors.email ? "true" : "false"}
                className="input input-bordered"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-2" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password", {
                  required: true,
                })}
                aria-invalid={errors.password ? "true" : "false"}
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-sm text-red-500 mt-2" role="alert">
                  password is required
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            {/* <button
              onClick={handelGoogleSignIn}
              type="button"
              className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
              </svg>
              Sign in with Google
            </button> */}
            <GoogleLogin></GoogleLogin>
            <p className="text-sm">
              Don't have an Account?
              <Link to="/signup">
                <button className="btn btn-link">please Sign up</button>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
