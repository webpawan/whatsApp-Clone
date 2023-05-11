import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const SignIn = () => {
  const navigate = useNavigate();
  const [component, setComponent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState(false);
  const postDetails = (pics) => {
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
    const PicStatus = fetch(
      `${
        import.meta.env.VITE_REACT_CLOUDINARY_API
      }/v1_1/dheexewsk/image/upload`,
      {
        method: "post",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setPic(data.url.toString());
      })
      .catch((e) => {
        console.log(e);
      });

    toast.promise(PicStatus, {
      pending: "image is uploading",
      success: "image is uploaded 👌",
      error:
        "something is wrong please try again or the problem is from server 🤯",
    });
  };

  const SignUpHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return toast.error("Fill the all fields", {
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,

        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setLoading(true);
    try {
      const { data } = await toast.promise(
        axios.post(`/api/user/register`, {
          name,
          email,
          password,
          pic,
        }),
        {
          pending: "registration in process",
          success: "registration is completed",
          error: "something is wrong try again ",
        }
      );
      if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);
        navigate("/chat");

        return;
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      return alert(
        "something is wrong please try again or the problem with also from server"
      );
    }
  };

  const LoginHandler = async (e) => {
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
      const { data } = await toast.promise(
        axios.post(`/api/user/login`, {
          email,
          password,
        }),
        {
          pending: "login in process",
          success: "login is completed",
          error: "something is wrong try agai or the problem is",
        }
      );

      if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/chat");
        setLoading(false);
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

  if (component) {
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
                  <span className="font-medium"> signUp</span>
                </li>
                <li className="list-decimal font-[350] mb-5">
                  if you already signIn please{" "}
                  <span className="font-medium"> login</span>
                </li>
              </ul>
              <div className="flex">
                <NavLink
                  onClick={() => setComponent(false)}
                  className="text-[#00a884] border-2 border-[#00a884] mt-5 px-5 py-2 rounded-full   active:bg-[#00a884] hover:bg-[#00a884] hover:text-white transition-all
              shadow-md mr-3 text-sm active:shadow"
                >
                  Sign Up
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
                  onClick={LoginHandler}
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {loading && (
        <div className="p-5 bg-slate-900 absolute top-0 left-0 z-50 h-full w-full flex items-center justify-center flex-col">
          <img src={logo} className="w-20 animate-pulse" alt="" srcset="" />
        </div>
      )}
      <ToastContainer />
      <div className="w-5">
        <ToastContainer />
      </div>
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
                <span className="font-medium "> signUp</span>
              </li>
              <li className="list-decimal font-[350] mb-5">
                if you already signIn please{" "}
                <span className="font-medium"> login</span>
              </li>
            </ul>
            <div className="flex">
              <NavLink
                onClick={() => setComponent(true)}
                className="text-[#00a884] border-2 border-[#00a884] mt-5 px-5 py-2 rounded-full  active:bg-[#00a884] hover:bg-[#00a884] hover:text-white transition-all
              shadow-md mr-3 text-sm active:shadow "
              >
                Log In
              </NavLink>
            </div>
          </div>
          {/* signin  */}
          <div className="  flex flex-col items-center basis-1/2 bg-slate-100">
            <h2 className="font-light text-2xl p-2 border-b-2 ">Sign In</h2>
            <div className="flex flex-col items-center  ">
              <input
                type="text"
                placeholder=" Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className=" px-2 py-1 mt-3 my-2 border-b-2 border-[#00a884a0]  focus:outline-none focus:border-[#00a884] text-[#00a884] focus:text-teal-600 transition ease-in-out bg-transparent"
                required
              />
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" px-2 py-1 my-2 border-b-2 border-[#00a884a0]  focus:outline-none focus:border-[#00a884] text-[#00a884] focus:text-teal-600 transition ease-in-out bg-transparent"
                required
              />
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className=" px-2 py-1 my-2 border-b-2 border-[#00a884a0]  focus:outline-none focus:border-[#00a884] text-[#00a884] focus:text-teal-600 transition ease-in-out bg-transparent"
                required
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => postDetails(e.target.files[0])}
                placeholder="select image"
                className="my-5 pb-1 block  text-xs text-[#00a884]  cursor-pointer  file:bg-transparent file:border-none border-b-2 border-[#00a884a0]  focus:outline-none focus:border-[#00a884] transition ease-in-out bg-transparent "
              />
            </div>
            <button
              className=" bg-[#00a88499] mt-5 px-5 py-2 rounded-full text-white shadow-xl  hover:shadow-md focus:shadow transition-shadow hover:-translate-y-[.5px] focus:bg-[#00a884] active:bg-[#00a884] text-sm active:cursor-progress "
              onClick={SignUpHandler}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
