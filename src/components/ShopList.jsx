import React, { Component, useEffect } from "react";
import { useState } from "react";
import ShopCard from "./ShopCard";
import { paginate } from "./../utils/paginate";
import Pagination from "./common/pagination";
import ShopCardTwo from "./ShopCardTwo";

import cafshPic from "../img/anotherCafsh.jpg";
import listStyleIcon from "../img/listStyle.svg";
import cardStyleIcon from "../img/cardStyle.svg";

import cafshPic from "../img/anotherCafsh.jpg";
import listStyleIcon from "../img/listStyle.svg";
import cardStyleIcon from "../img/cardStyle.svg";
import ShopCardTwo from "./ShopCardTwo";

function ShopList(props) {
  const [productList, setProductList] = useState([]);
  const [pageSize] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);
  const [listStyle, setListStyle] = useState("list");
  const [searchQuery, setSearchQuery] = useState("");

  const getProducts = () => {
    let products = [];
    for (let i = 0; i < 20; i++) {
      products[i] = {
        title: "اسم محصول " + i,
        image: cafshPic,
        price: 800,
        link: "/shop/1",
      };
    }

    setProductList(products);
  };

  useEffect(() => getProducts(), []);

  const handlePageChange = (page) => setCurrentPage(page);

  const handleSearch = (query) => {
    setCurrentPage(1);
    setSearchQuery(query);
  };

  let filtered = productList;

  if (searchQuery)
    filtered = productList.filter((p) =>
      p.title.includes(searchQuery)
    );

  filtered = paginate(filtered, currentPage, pageSize);

  return (
    <section className="container mx-auto my-14">
      <div className="px-8 py-4 bg-[#9B6F47] flex justify-between">
        <div className="flex gap-4">
          <img
            src={cardStyleIcon}
            alt=""
            className="w-6 cursor-pointer"
            onClick={() => setListStyle("card")}
          />
          <img
            src={listStyleIcon}
            alt=""
            className="w-6 cursor-pointer"
            onClick={() => setListStyle("list")}
          />
        </div>
        <div>
          <input className="py-1 px-3 text-base" type="text" placeholder="جستوجو" onChange={(e) => handleSearch(e.target.value)} />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center items-center my-14 max-w-5xl">
        {filtered.map(({ title, image, price, link }, i) =>
          listStyle === "card" ? (
            <ShopCard
              title={title}
              image={image}
              price={price}
              link={link}
              key={i}
            />
          ) : (
            <ShopCardTwo
              title={title}
              image={image}
              price={price}
              link={link}
              key={i}
            />
          )
        )}
      </div>

      <Pagination
        itemsCount={productList.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
}

export default ShopList;
