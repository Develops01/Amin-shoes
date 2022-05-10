import React from "react";
import Nav from "./Nav";

import bgOverlay from "../img/headerBgOverlay.jpg";

function Header({title, description, imgOverlay = bgOverlay}) {
  return (
    <div className="sm:pt-20 pb-20 relative">
      <Nav />

      <div className="mt-28 sm:mt-16 md:mt-12 lg:mt-0 p-5 container mx-auto">
        <h2 className="font-extrabold text-2xl md:text-3xl lg:text-4xl leading-normal md:leading-relaxed mb-5">
          {title}
        </h2>
        <span className="font-light">{description}</span>
      </div>

      <img src={imgOverlay} alt="" className="top-0 left-0 w-full h-full absolute object-cover -z-50"/>
    </div>
  );
}

export default Header;
