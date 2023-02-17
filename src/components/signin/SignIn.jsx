import React from "react";
import logo from "../../assets/images/logo.png";

const SignIn = () => {
  return (
    <>
      <div className="LogIn min-w-full h-screen bg-gradient-to-t from-green-500 to-green-50 ">
        <div className="flex justify-between item-center w-11/12 pt-2 mx-auto ">
          <div className="logo w-10">
            <img src={logo} alt="logo" />
          </div>
          <div className="signIn text-green-900 border-b-2 border-b-green-700 p-2 cursor-pointer">
            create new user
          </div>
        </div>
        {/* sign in navbar*/}

        <div className="h-5/6 flex flex-col items-center justify-center      ">
          <form
            action=""
            className=" bg-white/30 px-10 py-4 shadow-md shadow-green-700 rounded border border-green-50"
          >
            <h2 className="block mx-auto text-center text-3xl text-green-700 ">
              Sign In
            </h2>
            <label className="block mt-2 mb-1 text-green-900">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className=" px-2 py-1 shadow appearance-none border-2 border-green-200 rounded focus:outline-none focus:border-green-400 text-teal-700 focus:text-teal-600 "
            />{" "}
            <label className="block mt-2 mb-1 text-green-900">Last Name</label>
            <input
              type="Last Name"
              placeholder="text"
              className=" px-2 py-1 shadow appearance-none border-2 border-green-200 rounded focus:outline-none focus:border-green-400  text-teal-700 focus:text-teal-600"
            />
            <label className="block mt-2 mb-1 text-green-900">Email</label>
            <input
              type="text"
              placeholder="email"
              className=" px-2 py-1 shadow appearance-none border-2 border-green-200 rounded focus:outline-none focus:border-green-400  text-teal-700 focus:text-teal-600"
            />
            <label className="block mt-5 mb-1 text-green-900">password</label>
            <input
              type="email"
              placeholder="password"
              className="px-2 py-1 shadow appearance-none border-2 border-green-200 rounded focus:outline-none focus:border-green-400  text-teal-700 focus:text-teal-600"
            />
            <button className="shadow  block mx-auto mt-4 border-2 px-2 py-1 border-teal-600  transition duration-150 ease-in-out  hover:bg-teal-600 hover:text-green-300 shadow-lg hover:shadow-inner shadow-green-300 focus:shadow-sm focus:shadow-green-600 text-green-700 focus:text-green-900">
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
