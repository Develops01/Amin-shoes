import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./../store/entities/modal";
import {
  selectCart,
  removeProductFromCart,
} from "./../store/entities/products";

function ShopCart(props) {
  const dispatch = useDispatch();
  const items = useSelector((state) => selectCart(state));

  const imgBaseUrl = process.env.REACT_APP_BASE_IMAGE_URL;

  const handleClose = () => {
    // General
    dispatch(closeModal());
  };

  return (
    <div
      className="fixed top-0 right-0 left-0 bottom-0 cursor-pointer"
      onClick={handleClose}
    >
      <article
        className="fixed top-0 right-0 bottom-0 w-80 flex flex-col py-12 px-7 bg-white shadow-lg cursor-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-0 left-0 m-4 font-bold"
          onClick={handleClose}
        >
          ⛌
        </button>
        <h1 className="text-2xl mb-5">سبد خرید</h1>
        <div className="flex flex-col">
          {items.map((item, i) => createItem(item, i))}
        </div>
      </article>
    </div>
  );

  function createItem(item, i) {
    return (
      <div className="flex items-center justify-between" key={i}>
        <div className="flex">
          <img
            src={imgBaseUrl + item.photos[0].original}
            alt=""
            className="w-20"
          />
          <div>
            <h4 className="font-bold">{item.name}</h4>
            <span className="text-sm">
              تومان {item.price} {item.quantity}x
            </span>
          </div>
        </div>
        <button onClick={() => dispatch(removeProductFromCart(item._id))}>
          ⛌
        </button>
      </div>
    );
  }
}

export default ShopCart;
