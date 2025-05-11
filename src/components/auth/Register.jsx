import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="max-w-3xl mx-auto m-20 ">
      <form className="border-2 p-4 md:p-20 space-y-8  rounded-2xl  border-gray-600 mx-4">
        <h1 className=" text-2xl md:text-4xl text-gray-600 font-bold mb-12 text-center ">
          You Are Register Pages
        </h1>
        <div>
          <h2 className="text-xl font-bold mb-2 text-gray-600">Name</h2>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Your Name"
            className="w-full py-2 pl-5 rounded-md border-2 outline-none border-gray-400 text-xl font-semibold"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2 text-gray-600">Email</h2>
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            className="w-full py-2 pl-5 rounded-md border-2 outline-none border-gray-400 text-xl font-semibold"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2 text-gray-600">Password</h2>
          <input
            type="password"
            name="password"
            id=""
            placeholder="Your Password"
            className="w-full py-2 pl-5 rounded-md border-2 outline-none border-gray-400 text-xl font-semibold"
          />
        </div>
        <div className="text-center">
          <button className="py-2 px-16 border-2 rounded-md border-gray-400 hover:border-gray-800 cursor-pointer text-xl font-bold text-gray-700 hover:text-white hover:bg-gray-800 ">
            Register
          </button>
        </div>
        <p className="text-center text-sm md:text-xl">
          Your Account Already Existed ?
          <Link className="text-red-400 pl-1" to={"/login"}>
            Please Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
