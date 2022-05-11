import { React, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./components/pages/Index";
import Shop from "./components/pages/Shop";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/">
          <Route index element={<Index />} />
          <Route path="shop">
            <Route index element={<Shop />} />
          </Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
