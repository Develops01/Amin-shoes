import { React, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Index from "./components/pages/Index";
import Shop from "./components/pages/Shop";
import SingleProduct from "./components/pages/SingleProduct";
import "react-toastify/dist/ReactToastify.css";
import ModalConductor from "./components/ModalConductor";
import { setCourentModal } from "./store/entities/modal";
import { useStore } from 'react-redux';

function App() {
  const store = useStore();
  store.dispatch(setCourentModal('LOGIN'));
  return (
    <Fragment>
      <ToastContainer />

      <Routes>
        <Route path="/">
          <Route index element={<Index />} />
          <Route path="shop">
            <Route index element={<Shop />} />
            <Route path=":id" element={<SingleProduct />} />
          </Route>
        </Route>
      </Routes>

      <ModalConductor />
    </Fragment>
  );
}

export default App;
