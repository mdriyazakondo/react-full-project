import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const handlerSubmitLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { email, password };
    console.log(newUser);
  };

  return (
    <div className="bg-green-950">
      <div className="max-w-2xl md:max-w-3xl mx-auto p-6 md:p-20">
        <div className="border-2 p-4 md:p-8  rounded-2xl  border-gray-600 mx-4  bg-white">
          <form onSubmit={handlerSubmitLogin} className=" space-y-8">
            <h1 className=" text-2xl md:text-4xl text-gray-600 font-bold mb-12 text-center">
              You Are Login Pages
            </h1>
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

            <p className="text-right hover:text-green-600 cursor-pointer text-xl hover:underline">
              Forget Password
            </p>

            <div className="text-center">
              <button className="py-2 w-full border-2 rounded-md border-gray-400 hover:border-gray-800 cursor-pointer text-xl font-bold text-gray-700 hover:text-white hover:bg-gray-800 ">
                Login
              </button>
            </div>
          </form>
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-700"></div>
            <span className="mx-4 text-gray-500 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-700"></div>
          </div>

          <div className="mt-8 text-center grid grid-cols-1 md:grid-cols-2">
            <button className="cursor-pointer text-xl font-semibold  border-2  py-3 rounded-md text-red-600 border-red-600 hover:text-white hover:bg-red-600 flex items-center justify-center gap-2">
              <FaGoogle /> <span>Login With Google</span>
            </button>
            <button className="cursor-pointer text-xl font-semibold hover:text-white hover:bg-gray-800  border-2  py-3 rounded-md ml-0 md:ml-4 mt-4 md:mt-0 flex items-center justify-center gap-2">
              <FaGithub /> <span>Login With Github</span>
            </button>
          </div>

          <p className="text-center text-sm md:text-xl mt-8">
            Please Create A ?{" "}
            <Link className="text-red-400" to={"/register"}>
              New Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
