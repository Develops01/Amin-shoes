import React, { Fragment } from "react";
import { useState } from "react";
import profilePic from "../img/profile.svg";
import shopPic from "../img/shop.svg";
import shoePic from "../img/shoes.png";

const itemCreator = ({ icon, title }, index) => {
  return (
    <div className="flex items-center text-xs" key={index}>
      <img src={icon} alt="" className="ml-2 w-4 h-[19px]" />
      <span>{title}</span>
    </div>
  );
};

function TopHeader() {
  const [items] = useState([
    { icon: profilePic, title: "حساب کاربری" },
    { icon: shopPic, title: "پروفایل" },
  ]);

  return (
    <Fragment>
      <div className="py-4 px-5 flex gap-4">
        {items.map((item, i) => itemCreator(item, i))}

        <div className="flex items-center text-xs mr-auto sm:hidden">
          <img src={shoePic} alt="" className="ml-2 h-[19px]" />
        </div>
      </div>
    </Fragment>
  );
}

export default TopHeader;
