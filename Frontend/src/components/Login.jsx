import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:3000/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("login successfull");

          localStorage.setItem("User", JSON.stringify(res.data.user));
          setTimeout(() => {
            window.location.href = "/";
          }, 500);
        }
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error " + error.response.data.message);
        }
        console.log("Error" + error);
      });
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          {/* Close button */}
          <form method="dialog" className="flex justify-end">
            <button
              className="text-xl py-1.5
          px-4 text-black"
            >
              X
            </button>
          </form>

          <h1 className="font-bold text-2xl">Login</h1>

          {/* Actual login form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <div className="mb-4">
              <label htmlFor="email" className="block">
                Email:
              </label>
              <input
                className="block outline-none border p-2 rounded w-full"
                type="text"
                id="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /@/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="pass" className="block">
                Password:
              </label>
              <input
                className="block outline-none border p-2 rounded w-full"
                type="password"
                id="pass"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-between items-center mt-5">
              <button
                type="submit"
                className="my-2 text-xl cursor-pointer text-[#F09C20] border-2 border-[#2F4E50] font-bold rounded-2xl px-8"
              >
                Login
              </button>
              <p>
                Not Registered?{" "}
                <Link
                  to="/signup"
                  className="underline cursor-pointer text-blue-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
