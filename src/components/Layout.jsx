import React from "react";

import TopHeader from "./TopHeader";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  return (
    <div className="w-screen max-w-full min-h-screen overflow-x-hidden flex flex-col">
      <TopHeader />
      <Header title={props.title} description={props.description} />

      {props.children}

      <Footer />
    </div>
  );
}

export default Layout;
