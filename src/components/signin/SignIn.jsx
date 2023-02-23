import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loadin, setLoadin] = useState(false);
  const [pic, setPic] = useState();

  const postDetails = (pics) => {
    setLoadin(true);
    if (pics === undefined) {
      alert("something is wrong Try again");
      return;
    }

    if (!pics.type === "image/jpeg" || !pics.type === "image/png") {
      alert("please select image");
      return;
    }

    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "chatApp");
    data.append("cloud_name", "dheexewsk");
    fetch("https://api.cloudinary.com/v1_1/dheexewsk/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPic(data.url.toString());
        setLoadin(false);
      })
      .catch((e) => {
        console.log(e);
        setLoadin(false);
      });
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
              <NavLink to="/login"
                className="text-[#00a884] border-2 border-[#00a884] mt-5 px-5 py-2 rounded-full text-white s active:bg-[#00a884] hover:bg-[#00a884] hover:text-white transition-all
              shadow-md mr-3 text-sm active:shadow"
                // onClick={submitHandler}
              >
                Log In
              </NavLink>
              <button
                className="text-[#00a884] border-2 border-[#00a884] mt-5 px-5 py-2 rounded-full text-white  active:bg-[#00a884] hover:bg-[#00a884] hover:text-white transition-all
              shadow-md text-sm active:shadow"
                // onClick={submitHandler}
              >
                guest User
              </button>
            </div>
          </div>
          {/* signin  */}
          <div className="  flex flex-col items-center basis-1/2 bg-slate-100">
            <h2 className="font-light text-2xl p-2 border-b-2 ">Sign In</h2>
            <form action="" className="flex flex-col items-center  ">
              <input
                type="text"
                placeholder="First Name"
                onChange={(e) => setName(e.target.value)}
                className=" px-2 py-1 mt-3 my-2 border-b-2 border-[#00a884a0]  focus:outline-none focus:border-[#00a884] text-[#00a884] focus:text-teal-600 transition ease-in-out bg-transparent"
              />
              <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                className=" px-2 py-1 my-2 border-b-2 border-[#00a884a0]  focus:outline-none focus:border-[#00a884] text-[#00a884] focus:text-teal-600 transition ease-in-out bg-transparent"
              />
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                className=" px-2 py-1 my-2 border-b-2 border-[#00a884a0]  focus:outline-none focus:border-[#00a884] text-[#00a884] focus:text-teal-600 transition ease-in-out bg-transparent"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => postDetails(e.target.files[0])}
                placeholder="select image"
                class="my-5 pb-1 block  text-xs text-[#00a884]  cursor-pointer  focus:outline-none file:bg-transparent file:border-none border-b-2 border-[#00a884a0]  focus:outline-none focus:border-[#00a884] transition ease-in-out bg-transparent "
              />
              <button
                className=" bg-[#00a88499] mt-5 px-5 py-2 rounded-full text-white shadow-xl  hover:shadow-md focus:shadow transition-shadow hover:-translate-y-[.5px] focus:bg-[#00a884] active:bg-[#00a884] text-sm"
                // onClick={submitHandler}
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

export default SignIn;
