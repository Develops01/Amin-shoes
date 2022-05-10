import React from "react";
import Card from "./common/Card";

import womenShPic from "../img/womenSh.jpg";
import menShPic from "../img/menSh.jpg";
import setEdaryPic from "../img/setEdary.jpg";

function CollectionGrid(props) {
  return (
    <section className="grid gap-2 sm:grid-cols-2 sm:gap-4 md:grid-cols-4">
      <article className="bg-[#320307] h-60 flex flex-col justify-center text-white p-8 text-center relative">
        <h5 className="text-[28px] font-extrabold mb-3">پیشنهاد ویژه</h5>
        <p className="text-sm font-thin">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
        </p>
      </article>
      <Card title="کفش زنانه" image={womenShPic} />
      <Card
        title="کفش مردانه"
        description="کالکشن"
        image={menShPic}
        titleColor="#f8f8f8"
      />
      <Card title="ست اداری" description="تنوع بالا" image={setEdaryPic} />
    </section>
  );
}

export default CollectionGrid;
