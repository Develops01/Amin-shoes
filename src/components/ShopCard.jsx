import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../store/entities/products";

import shopPic from "../img/shop.svg";

function ShopCard({ title, image, price, link, id }) {
  const dispatch = useDispatch();

  return (
    <article className="relative">
      <button className="absolute top-0 left-0 m-2 p-2 rounded-full hover:bg-gray-100" onClick={()=>dispatch(addProductToCart(id))}>
        <img src={shopPic} alt="" />
      </button>
      <Link to={link} className="flex flex-col p-4 border-2 text-center">
        <img src={image} alt="" className="mb-4 max-w-xs" />
        <h3 className="text-sm font-extrabold">{title}</h3>
        <span className="text-[#9B6F47]">{price} تومان</span>
      </Link>
    </article>
  );
}

export default ShopCard;
