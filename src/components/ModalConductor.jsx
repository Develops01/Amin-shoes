import React from "react";
import Login from "./Login";
import { useSelector } from "react-redux";
import { selectCurrentModal } from "../store/entities/modal";

const ModalConductor = () => {
  const currentModal = useSelector((state) => selectCurrentModal(state));
  if (!currentModal) return null;

  switch (currentModal) {
    case "LOGIN":
      return <Login />;

    default:
      return null;
  }
};

export default ModalConductor;
