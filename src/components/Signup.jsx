import React, { useState } from "react";
import ModalWrapper from "./common/ModalWrapper";
import { useDispatch } from "react-redux";
import { login } from "./../store/entities/user";
import { toast } from "react-toastify";
import { closeModal } from './../store/entities/modal';

function Signup(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(
      login({
        email,
        password,
        onSuccess,
        onError,
        isLoginEndpoint: false
      })
    );

    function onError() {
      toast.error("خطایی رخ داده است");
    }
    function onSuccess() {
      toast.info("ورود موفقیت آمیز بود");
      dispatch(closeModal());
    }
  }

  return (
    <ModalWrapper>
      <div className="text-center w-56">
        <h1 className="text-2xl font-bold mb-4">ثبت نام</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="ایمیل"
          className="py-2 px-4 outline-0 border-2 border-gray-300 rounded-lg my-1"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="رمز"
          className="py-2 px-4 outline-0 border-2 border-gray-300 rounded-lg my-1"
        />
        <button
          className="py-2 px-4 outline-0 bg-orange-500 text-white rounded-lg my-1 cursor-pointer"
          onClick={handleSubmit}
        >
          ثبت نام
        </button>
      </div>
    </ModalWrapper>
  );
}

export default Signup;
