import { React, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Wrapper from './components/Wrapper';
import Index from './components/pages/Index';

function App() {
  return (
    <Fragment>

      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>

    </Fragment>
  );
}

export default App;
