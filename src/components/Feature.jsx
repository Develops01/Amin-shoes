import React from "react";

const feature = ({title, description, icon}) => {
  return (
    <div
      className="flex flex-col justify-center items-center p-6 last:border-b-0 sm:last:border-l-0 border-b-2 sm:border-l-2 sm:border-b-0 sm:px-16"
    >
      <img src={icon} alt="" className="w-10 mb-3" />
      <h6 className="font-semibold text-lg">{title}</h6>
      <p className="text-sm font-light">{description}</p>
    </div>
  );
};

export default feature;
