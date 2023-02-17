import React from "react";

const Chat = () => {
  return (
    <>
      <div className="flex h-screen  ">
        <div className="bg-slate-800 basis-4/12 pt-3 border-r">
          <div className="flex items-center justify-between bg-slate-700 h-12 px-4">
            <div className="user h-9 w-9 bg-slate-500 rounded-full"></div>
            <div className="menu text-white">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
          <form className="flex m-2 w-4/5 bg-slate-200 mx-auto">
            <label htmlFor="" className="p-1 px-5 bg-slate-700 text-gray-400">
              <i class="fa-solid fa-magnifying-glass"></i>
            </label>
            <input
              type="text"
              placeholder="search"
              className="w-full px-2 focus:outline-none"
            />
          </form>
          {/* users  */}
          <div className="flex flex-col w-full mx-auto overflow-auto  h-4/5">
            <div className="mt-5 mb-2 p-1 px-5 bg-slate-700 text-gray-400 flex items-center h-16">
              <div className="user h-10 w-10 bg-slate-500 rounded-full"></div>
              <div className="flex flex-col ml-5">
                <p className="text-base font-sans">Pawan</p>
                <p className="text-sm font-extralight">
                  <span className="font-bold mr-3">from :</span>welcome boddy
                </p>
              </div>
            </div>
            <div className="mt-2 mb-2 p-1 px-5 bg-slate-700 text-gray-400 flex items-center h-16">
              <div className="user h-10 w-10 bg-slate-500 rounded-full"></div>
              <div className="flex flex-col ml-5">
                <p className="text-base font-sans">Pawan</p>
                <p className="text-sm font-extralight">
                  <span className="font-bold mr-3">from :</span>welcome boddy
                </p>
              </div>
            </div>
            <div className="mt-2 mb-2 p-1 px-5 bg-slate-700 text-gray-400 flex items-center h-16">
              <div className="user h-10 w-10 bg-slate-500 rounded-full"></div>
              <div className="flex flex-col ml-5">
                <p className="text-base font-sans">Pawan</p>
                <p className="text-sm font-extralight">
                  <span className="font-bold mr-3">from :</span>welcome boddy
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* chat section */}
        <div className="bg-slate-900 basis-8/12 pt-3 px-2">
          <div className=" bg-slate-700 h-12">
            <div className="flex items-center justify-between bg-slate-700 h-12 px-4">
              <div className="flex items-center ">
                {" "}
                <div className="user h-9 w-9 bg-slate-500 rounded-full mr-2"></div>{" "}
                <p className="text-base font-sans">Pawan</p>
              </div>
              <div className="menu text-white">
                <i class="fa-solid fa-magnifying-glass"></i>

                <i class="fa-solid fa-bell mx-4"></i>
              </div>
            </div>
          </div>

          <div className=" h-4/5 bg-slate-900 p-2">
            <div className="flex  text-white ">
              {/* chat left  */}
              <div className="basis-1/3 mx-auto text-sm flex flex-col">
                <p className="chat border inline-block px-5 py-1 my-2 rounded-lg mr-2">
                  hy hgy Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Earum aspernatur quod officia culpa omnis nemo dicta
                  reprehenderit eaque architecto illo! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ipsa fuga dolorum eligendi
                  pariatur, atque voluptatibus consectetur alias. Eos, sint
                  incidunt.
                </p>
                <p className="chat border inline-block px-5 py-1 rounded-lg mr-2">
                  hy hgy Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Earum aspernatur quod officia culpa omnis nemo dicta
                  reprehenderit eaque architecto illo! Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ipsa fuga dolorum eligendi
                  pariatur, atque voluptatibus consectetur alias. Eos, sint
                  incidunt.
                </p>
              </div>

              {/* chat right */}

              <div className="basis-1/3 mx-auto text-sm my-2">
                <p className="chat text-right border inline-block px-5 py-1 rounded-lg ml-2">
                  hy hgy Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Earum aspernatur quod officia culpa omnis nemo dicta
                  reprehenderit eaque architecto illo!
                </p>
              </div>
            </div>
          </div>
          <div className="bg-slate-200 w-5/6 mx-auto my-2">
            <form className="flex items-center m-2 w-full bg-slate-700 mx-auto ">
              <label htmlFor="" className=" px-5  ">
                <i class="fa-solid fa-magnifying-glass"></i>
              </label>
              <input
                type="text"
                placeholder="search"
                className="w-full p-2 focus:outline-none"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
