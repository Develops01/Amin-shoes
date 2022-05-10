import React from "react";
import { useState } from "react";
import profilePic from "../img/profile.svg";
import shopPic from "../img/shop.svg";

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
    <div className="py-4 px-5 flex gap-4">
      {items.map((item, i) => itemCreator(item, i))}
    </div>
  );
}

export default TopHeader;
