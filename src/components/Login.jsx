import React, { useState } from "react";
import ModalWrapper from "./common/ModalWrapper";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <ModalWrapper>
      <div className="text-center w-56">
        <h1 className="text-2xl font-bold mb-4">ورود</h1>
        <input
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="ایمیل"
          className="py-2 px-4 outline-0 border-2 border-gray-300 rounded-lg my-1"
        />
        <input
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="رمز"
          className="py-2 px-4 outline-0 border-2 border-gray-300 rounded-lg my-1"
        />
        <button
          className="py-2 px-4 outline-0 bg-orange-500 text-white rounded-lg my-1 cursor-pointer"
          onClick={handleSubmit}
        >
           ورود
        </button>
      </div>
    </ModalWrapper>
  );
}

export default Login;
