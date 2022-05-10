import React from "react";

import TopHeader from "./TopHeader";
import Footer from "./Footer";
import Header from "./Header";

function Wrapper(props) {
  return (
    <div className="w-screen max-w-full min-h-screen overflow-x-hidden flex flex-col">
      <TopHeader />
      <Header title="انواع کفش مردانه" description="خانه - مردانه" />

      {props.children}

      <Footer />
    </div>
  );
}

export default Wrapper;
