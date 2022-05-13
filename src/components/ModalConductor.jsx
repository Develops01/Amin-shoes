import React from "react";
import Login from "./Login";
import { useSelector } from "react-redux";
import { selectCourentModal } from "../store/entities/modal";

const ModalConductor = () => {
  const currentModal = useSelector((state) => selectCourentModal(state));
  if (!currentModal) return null;

  switch (currentModal) {
    case "LOGIN":
      return <Login />;

    default:
      return null;
  }
};

export default ModalConductor;
