import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:3000/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Sign up successfull");

          localStorage.setItem("User", JSON.stringify(res.data.users));
          window.location.href = "/";
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
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white border-spacing-0.5 rounded-2xl p-10 shadow-2xl relative w-full max-w-md">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-2xl hover:text-gray-800 font-bold"
            >
              <Link to={"/"}>✕</Link>
            </button>

            <h1 className="font-bold text-2xl mb-4">Sign Up</h1>

            {/* Signup form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label htmlFor="fullname" className="block mb-1">
                  Name:
                </label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Enter your Full name"
                  className="block w-full border rounded px-3 py-2 outline-none"
                  {...register("fullname", { required: "Name is required" })}
                />
                {errors.fullname && (
                  <p className="text-red-500 text-sm">
                    {errors.fullname.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full border rounded px-3 py-2 outline-none"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="pass" className="block mb-1">
                  Password:
                </label>
                <input
                  type="password"
                  id="pass"
                  placeholder="Enter your password"
                  className="block w-full border rounded px-3 py-2 outline-none"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex justify-between items-center mt-5 space-x-6">
                <button
                  type="submit"
                  className="my-2 text-lg sm:text-xl cursor-pointer text-[#F09C20] border-2 border-[#2F4E50] font-bold rounded-2xl px-8"
                >
                  Sign Up
                </button>
                <p>
                  Have Account?{" "}
                  <Link
                    to={"/"}
                    className="underline cursor-pointer text-blue-500"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
