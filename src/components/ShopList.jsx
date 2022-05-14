import React, { useEffect, useState } from "react";
import { useSelector, useStore } from "react-redux";
import { selectProducts, loadProducts, selectProductsLoading } from "./../store/entities/products";
import ShopCard from "./ShopCard";
import ShopCardTwo from "./ShopCardTwo";
import Loading from "./common/Loading";

import listStyleIcon from "../img/listStyle.svg";
import cardStyleIcon from "../img/cardStyle.svg";

function ShopList({baseProductLinkUrl = ""}) {
  const [filtered, setFiltered] = useState([]);
  const [listStyle, setListStyle] = useState("card");
  const [searchQuery, setSearchQuery] = useState("");

  const productList = useSelector((state) => selectProducts(state));
  const loading = useSelector((state) => selectProductsLoading(state));
  const store = useStore();

  const imgBaseUrl = "https://amirbackend.ryt-service.ir";

  useEffect(() => {
    store.dispatch(loadProducts());
  }, []);

  // Filters
  useEffect(() => {
    setFiltered(productList);
  }, [productList]);

  useEffect(() => {
    setFiltered(productList.filter((p) => p.name.includes(searchQuery)));
  }, [productList, searchQuery]);

  if (loading)
    return (
      <div className="w-full h-80 flex justify-center items-center">
        <Loading />
      </div>
    );

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

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
          <input
            className="py-1 px-3 text-base"
            type="text"
            placeholder="جستوجو"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center items-center my-14 max-w-5xl">
        {filtered.map(({ name, photos, sale_product, slug }, i) =>
          listStyle === "card" ? (
            <ShopCard
              title={name}
              image={imgBaseUrl + photos[0].original}
              price={sale_product}
              link={baseProductLinkUrl + slug}
              key={i}
            />
          ) : (
            <ShopCardTwo
              title={name}
              image={imgBaseUrl + photos[0].original}
              price={sale_product}
              link={baseProductLinkUrl + slug}
              key={i}
            />
          )
        )}
      </div>
    </section>
  );
}

export default ShopList;
