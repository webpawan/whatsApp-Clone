import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email || !password) {
      return alert("fill all the fields");
    }
    try {

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      if (data) {
        setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));
navigate('/chat')
        return alert("login successfull");
      }

    } catch (error) {
      return alert("invalid creadintial");
    }
  };
  return (
    <>
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
              <li className="list-decimal font-[350] mb-5">
                if you don't want to signin{" "}
                <span className="font-medium"> please use guest user</span>
              </li>
            </ul>
            <div className="flex">
              <NavLink
                to="/signin"
                className="text-[#00a884] border-2 border-[#00a884] mt-5 px-5 py-2 rounded-full hover:text-white s active:bg-[#00a884] hover:bg-[#00a884] hover:text-white transition-all
              shadow-md mr-3 text-sm active:shadow"
                // onClick={submitHandler}
              >
                Sign In
              </NavLink>
              <button
                className="text-[#00a884] border-2 border-[#00a884] mt-5 px-5 py-2 rounded-full hover:text-white  active:bg-[#00a884] hover:bg-[#00a884] hover:text-white transition-all
              shadow-md text-sm active:shadow"
                // onClick={submitHandler}
              >
                guest User
              </button>
            </div>
          </div>
          {/* signin  */}
          <div className=" h-2/3 flex flex-col items-center basis-1/2 bg-slate-100">
            <h2 className="font-light text-2xl p-2 border-b-2 ">Log In</h2>
            <form action="" className="flex flex-col items-center  ">
              <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                className=" px-2 py-1 mt-2 my-5 border-b-2 border-[#00a884a0]  focus:outline-none focus:border-[#00a884] text-[#00a884] focus:text-teal-600 transition ease-in-out bg-transparent"
              />
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                className=" px-2 py-1  border-b-2 border-[#00a884a0]  focus:outline-none focus:border-[#00a884] text-[#00a884] focus:text-teal-600 transition ease-in-out bg-transparent"
              />

              <button
                className=" bg-[#00a88499] my-5 px-5 py-2 rounded-full text-white shadow-xl  hover:shadow-md focus:shadow transition-shadow hover:-translate-y-[.5px] focus:bg-[#00a884] active:bg-[#00a884] text-sm"
                onClick={submitHandler}
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
