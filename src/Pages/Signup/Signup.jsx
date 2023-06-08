import React from "react";
import { useForm } from "react-hook-form";

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="card w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                {...register("name",{ required:  "Name is required" })} aria-invalid={errors.name ? "true" : "false"}
                className="input input-bordered"
              />
               {errors.name && <p className="text-sm text-red-500 mt-2" role="alert">{errors.name?.message}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", { required:  "Email Address is required" })} aria-invalid={errors.email ? "true" : "false"} 
                className="input input-bordered"
                />
                {errors.email && <p className="text-sm text-red-500 mt-2" role="alert">{errors.email?.message}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                {...register("password", { required:  "Password is required" })} aria-invalid={errors.password ? "true" : "false"}
                className="input input-bordered"
              />
              {errors.password && <p className="text-sm text-red-500 mt-2" role="alert">{errors.password?.message}</p>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
