import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { closeModal } from "./../../store/entities/modal";

function ModalWrapper({ children, onClose, ...props }) {
  const dispatch = useDispatch();

  const handleClose = () => {
    // General
    dispatch(closeModal());

    // Specific
    if (onClose) onClose();
  };

  return (
    <div
      className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-[100] cursor-pointer"
      onClick={handleClose}
    >
      <article
        className="max-w-md bg-white rounded-3xl shadow-md py-9 px-7 relative cursor-auto"
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        <button className="absolute top-0 right-0 m-4 font-bold" onClick={handleClose}>⛌</button>
        {children}
      </article>
    </div>
  );
}

ModalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
};

export default ModalWrapper;
