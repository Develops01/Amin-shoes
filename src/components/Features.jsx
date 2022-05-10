import React, { useState } from "react";
import Feature from './Feature';

import zemanatIcon from "../img/zemanat.svg";

const Features = () => {
    const [items] = useState([
        {
          title: "ضمانت اصالت",
          description: "اصالت برند محصول",
          icon: zemanatIcon,
        },
        {
          title: "ضمانت اصالت",
          description: "اصالت برند محصول",
          icon: zemanatIcon,
        },
        {
          title: "ضمانت اصالت",
          description: "اصالت برند محصول",
          icon: zemanatIcon,
        },
        {
          title: "ضمانت اصالت",
          description: "اصالت برند محصول",
          icon: zemanatIcon,
        },
        {
          title: "ضمانت اصالت",
          description: "اصالت برند محصول",
          icon: zemanatIcon,
        },
      ]);

  return (
    <section className="flex flex-col flex-wrap sm:flex-row justify-center mb-16 text-gray-700">
      {items.map(({ title, description, icon }, index) => (
        <Feature title={title} description={description} icon={icon} key={index} />
      ))}
    </section>
  );
};

export default Features;
