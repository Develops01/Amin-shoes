import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "./../store/entities/modal";

function ShopCart(props) {
  const dispatch = useDispatch();

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
        className="fixed top-0 right-0 bottom-0 w-72 flex flex-col py-12 px-7 bg-white shadow-lg cursor-auto"
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
          <div className="flex items-center justify-between">
            <img src="https://amirbackend.ryt-service.ir/uploads/products/H1HYipGJ9-20_9a8f0fa0-39ff-4fe2-b3cb-12517a928e10_370x370.png" alt="" className="w-20" />
            <div>
              <h4 className="font-bold">محصول 1</h4>
              <span className="text-sm">تومان 800  1x</span>
            </div>
            <button>⛌</button>
          </div>
          <div className="flex items-center justify-between">
            <img src="https://amirbackend.ryt-service.ir/uploads/products/H1HYipGJ9-20_9a8f0fa0-39ff-4fe2-b3cb-12517a928e10_370x370.png" alt="" className="w-20" />
            <div>
              <h4 className="font-bold">محصول 1</h4>
              <span className="text-sm">تومان 800  1x</span>
            </div>
            <button>⛌</button>
          </div>
          <div className="flex items-center justify-between">
            <img src="https://amirbackend.ryt-service.ir/uploads/products/H1HYipGJ9-20_9a8f0fa0-39ff-4fe2-b3cb-12517a928e10_370x370.png" alt="" className="w-20" />
            <div>
              <h4 className="font-bold">محصول 1</h4>
              <span className="text-sm">تومان 800  1x</span>
            </div>
            <button>⛌</button>
          </div>
          <div className="flex items-center justify-between">
            <img src="https://amirbackend.ryt-service.ir/uploads/products/H1HYipGJ9-20_9a8f0fa0-39ff-4fe2-b3cb-12517a928e10_370x370.png" alt="" className="w-20" />
            <div>
              <h4 className="font-bold">محصول 1</h4>
              <span className="text-sm">تومان 800  1x</span>
            </div>
            <button>⛌</button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ShopCart;
