import React from "react";

import mapPic from "../img/map.jpg";
import phonePic from "../img/phone.svg";
import emailPic from "../img/email.svg";
import mapIconPic from "../img/mapIcon.svg";
import samandehiPic from "../img/samandehi.jpg";
import enemadPic from "../img/enamad.jpg";

function Footer() {
  return (
    <footer className="mt-auto">
      <section className="py-9 px-7 flex flex-col sm:flex-row flex-wrap justify-center gap-8">
        <article className="w-full md:w-2/5 lg:w-[24%]">
          <img src={mapPic} alt="" className="w-full" />
        </article>
        <article className="sm:w-1/2 md:w-2/5 lg:w-1/5">
          <h6 className="text-2xl font-medium mb-8 text-gray-700">
            اطلاعات مغازه
          </h6>
          <ul className="text-sm text-gray-700">
            <li className="flex gap-4 my-5">
              <img src={phonePic} alt="" />
              <span className="">09190488012</span>
            </li>
            <li className="flex gap-4 my-5">
              <img src={emailPic} alt="" />
              <span className="">mamyrbas@gmail.com</span>
            </li>
            <li className="flex gap-4 my-5">
              <img src={mapIconPic} alt="" />
              <span className="leading-normal">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
              </span>
            </li>
          </ul>
        </article>
        <article className="sm:w-1/3 lg:w-1/6">
          <h6 className="text-2xl font-medium mb-8 text-gray-700">
            اطلاعات مغازه
          </h6>
          <ul className="text-sm text-gray-700">
            <li className="my-5">
              <a>لورم ایپسوم متن</a>
            </li>
            <li className="my-5">
              <a>لورم متن</a>
            </li>
            <li className="my-5">
              <a>لورم ایپسوم</a>
            </li>
          </ul>
        </article>
        <article className="">
          <div className="flex justify-around">
            <img src={samandehiPic} alt="" />
            <img src={enemadPic} alt="" />
          </div>
        </article>
      </section>
      <section className="bg-[#A67A52] text-white py-5 px-14 text-center text-sm">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        @2022
      </section>
    </footer>
  );
}

export default Footer;
