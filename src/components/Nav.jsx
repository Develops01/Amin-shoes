import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentModal } from "../store/entities/modal";
import { selectCurrentUser } from "../store/entities/user";

import shoesPic from "../img/shoes.png";

function Nav() {
  return (
    <nav>
      <ul className="container mx-auto flex flex-col sm:flex-row gap-5 items-center justify-center bg-[#320307] text-white py-5 sm:rounded-full">
        <li>
          <Link to="/">خانه</Link>
        </li>
        <li>
          <Link to="/shop">فروشگاه</Link>
        </li>
        <li>
          <Link to="">مردانه</Link>
        </li>

        <div className="relative w-56 hidden sm:block">
          <div className="border-2 border-[#9B6F47] bg-white w-56 absolute sm:-translate-y-1/2 flex flex-col items-center justify-center p-4">
            <img src={shoesPic} alt="" className="mb-3" />
            <span className="text-[#3E1304] text-3xl font-extrabold">
              کفش امیر
            </span>
          </div>
        </div>

        <li>
          <Link to="">مردانه</Link>
        </li>
        <li>
          <Link to="">مردانه</Link>
        </li>
        <li>
          <Link to="">مردانه</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
