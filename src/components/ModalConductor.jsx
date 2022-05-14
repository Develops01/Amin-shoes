import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentModal } from "../store/entities/modal";
import Login from "./Login";
import Signup from './Signup';

const ModalConductor = () => {
  const currentModal = useSelector((state) => selectCurrentModal(state));
  if (!currentModal) return null;

  switch (currentModal) {
    case "LOGIN":
      return <Login />;

    case "SIGNUP":
      return <Signup />;

    default:
      return null;
  }
};

export default ModalConductor;
