import React from "react";

import sliderShoe from "../img/sliderShoe.jpg";

function Slide() {
  return (
    <section className="flex flex-col sm:flex-row p-12 md:p-0 sm:mt-20 justify-between sm:justify-around min-h-[65vh] container mx-auto">
      <div className="max-w-md">
        <span className="text-[#9B6F47] text-xl md:text-2xl italic">
          کفش امیر
        </span>
        <h2 className="font-bold text-3xl md:text-4xl leading-normal md:leading-relaxed mb-5">
          لورم ایپسوم متن ساختگی با تولید سادگی
        </h2>
        <button className="focus:ring-2 ring-[#320307] ring-offset-2 bg-[#320307] rounded-full py-2 px-14 text-white text-lg">
          نمایش
        </button>
      </div>
      <div>
        <img src={sliderShoe} alt="" className="md:max-w-md" />
      </div>
    </section>
  );
}

export default Slide;
