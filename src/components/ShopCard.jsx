import React from "react";
import { Link } from "react-router-dom";

function ShopCard({ title, image, price, link }) {
  return (
    <article>
      <Link to={link} className="flex flex-col p-4 border-2 text-center">
        <img src={image} alt="" />
        <h3 className="text-sm font-extrabold">{title}</h3>
        <span className="text-[#9B6F47]">{price} تومان</span>
      </Link>
    </article>
  );
}

export default ShopCard;
