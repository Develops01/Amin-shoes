import React from "react";
import { Link } from "react-router-dom";

function ShopCardTwo({ title, image, price, link }) {
  return (
    <article>
      <Link to={link} className="flex flex-row py-7 px-9">
        <img src={image} alt="" className="ml-4"/>
        <div>
          <h3 className="text-sm font-extrabold">{title}</h3>
          <span className="text-[#9B6F47]">{price} تومان</span>
        </div>
      </Link>
    </article>
  );
}

export default ShopCardTwo;
