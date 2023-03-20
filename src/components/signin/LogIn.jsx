import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo.png";
import { toast, ToastContainer } from "react-toastify";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
     return toast.error("Fill the all fields", {
       position: "top-center",
       autoClose: 3000,
       closeOnClick: true,
       pauseOnHover: false,
     
       progress: undefined,
       theme: "dark",
     });
    }
setLoading(true);

    try {
      const { data } = await axios.post("/api/user/login", {
        email,
        password,
      });

      if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/chat");
        setLoading(false)
        return alert("login successfull");

      }
    } catch (error) {
      setLoading(false);
       return toast.error("invalid creadintial", {
         position: "top-center",
         autoClose: 1500,
         closeOnClick: true,
         pauseOnHover: false,

         progress: undefined,
         theme: "dark",
       });
    }
  };
  return (
    <>
      {loading && (
        <div className="p-5 bg-slate-900 absolute top-0 left-0 z-50 h-full w-full flex items-center justify-center flex-col">
          <img src={logo} className="w-20 animate-pulse" />
        </div>
      )}

      <ToastContainer />
      <div className="h-screen relative bg-black">
        <div className="h-[222px] w-full bg-[#00a884]  absolute top-0">
          <div className="h-10  w-[880px] mx-auto mt-5 flex items-center">
            <div className="logo w-9">
              <img src={logo} alt="logo" />
            </div>
            <p className="ml-5 text-xs text-white ">WHATSAPP WEB</p>
          </div>
        </div>
        <div className="h-5/6 p-[62px] absolute inset-x-0 shadow-xl bg-white w-[880px] mx-auto bottom-0 flex  justify-between">
          <div>
            <h1 className="text-2xl font-thin">
              Use WhatsApp on your computer
            </h1>
            <ul className=" p-5 mt-10">
              <li className="list-decimal font-[350] mb-5">
                Open WhatsApp on your phone
              </li>
              <li className="list-decimal font-[350] mb-5">
                if you are new please{" "}
                <span className="font-medium"> signIn</span>
              </li>
              <li className="list-decimal font-[350] mb-5">
                if you already signIn please{" "}
                <span className="font-medium"> login</span>
              </li>
            </ul>
            <div className="flex">
              <NavLink
                to="/"
                className="text-[#00a884] border-2 border-[#00a884] mt-5 px-5 py-2 rounded-full   active:bg-[#00a884] hover:bg-[#00a884] hover:text-white transition-all
              shadow-md mr-3 text-sm active:shadow"
              >
                Sign In
              </NavLink>
            </div>
          </div>

          <div className=" h-2/3 flex flex-col items-center basis-1/2 bg-slate-100">
            <h2 className="font-light text-2xl p-2 border-b-2 ">Log In</h2>
            <div action="" className="flex flex-col items-center  ">
              <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className=" px-2 py-1 mt-2 my-5 border-b-2 border-[#00a884a0]  focus:outline-none focus:border-[#00a884] text-[#00a884] focus:text-teal-600 transition ease-in-out bg-transparent"
              />
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className=" px-2 py-1  border-b-2 border-[#00a884a0]  focus:outline-none focus:border-[#00a884] text-[#00a884] focus:text-teal-600 transition ease-in-out bg-transparent"
              />

              <button
                className=" bg-[#00a88499] my-5 px-5 py-2 rounded-full text-white shadow-xl  hover:shadow-md focus:shadow transition-shadow hover:-translate-y-[.5px] focus:bg-[#00a884] active:bg-[#00a884] text-sm active:cursor-progress "
                onClick={submitHandler}
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
