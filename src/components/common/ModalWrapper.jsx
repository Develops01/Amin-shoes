import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "./../../store/entities/modal";

function Modal({ children, id, onClose, ...props }) {
  const dispatch = useDispatch();

  const handleClose = () => {
    // General
    dispatch(closeModal());

    // Specific
    if (onClose) onClose();
  };

  return (
    <div
      className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-[100]"
      onClick={handleClose}
    >
      <article
        className="max-w-md bg-white rounded-3xl shadow-md py-9 px-7"
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {children}
      </article>
    </div>
  );
}

export default Modal;
