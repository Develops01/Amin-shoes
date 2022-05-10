import React from "react";

import shosePic from "../img/shose.png";

function Nav() {
  return (
    <nav>
      <ul className="nav-clamp flex flex-col sm:flex-row gap-5 items-center justify-center bg-[#320307] text-white py-5 sm:rounded-full">
        <li>
          <a href="">مردانه</a>
        </li>
        <li>
          <a href="">مردانه</a>
        </li>
        <li>
          <a href="">مردانه</a>
        </li>

        <div className="relative w-56 hidden sm:block">
          <div className="border-2 border-[#9B6F47] bg-white w-56 absolute sm:-translate-y-1/2 flex flex-col items-center justify-center p-4">
            <img src={shosePic} alt="" className="mb-3" />
            <span className="text-[#3E1304] text-3xl font-extrabold">کفش امیر</span>
          </div>
        </div>

        <li>
          <a href="">مردانه</a>
        </li>
        <li>
          <a href="">مردانه</a>
        </li>
        <li>
          <a href="">مردانه</a>
        </li>

        <div className="relative w-56 sm:hidden">
          <div className="border-2 border-[#9B6F47] bg-white w-56 absolute sm:-translate-y-1/2 flex flex-col items-center justify-center p-4">
            <img src={shosePic} alt="" className="mb-3" />
            <span className="text-black text-3xl font-extrabold">کفش امیر</span>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
