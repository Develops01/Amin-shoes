import React from "react";
import { useState } from "react";
import ShopCard from "./ShopCard";

import cafshPic from "../img/anotherCafsh.jpg";
import { useEffect } from "react";
import { paginate } from "./../utils/paginate";
import Pagination from "./common/pagination";

function ShopList(props) {
  const [productList, setProductList] = useState([]);
  const [pageSize] = useState(9);
  const [currentPage, setcurrentPage] = useState(1);

  const getProducts = () => {
    let products = [];
    for (let i = 0; i < 20; i++) {
      products[i] = {
        title: "اسم محصول",
        image: cafshPic,
        price: 800,
        link: '/shop/1'
      };
    }

    setProductList(products);
  };

  useEffect(() => getProducts(), []);

  const filteredProducts = paginate(productList, currentPage, pageSize);

  const handlePageChange = page => setcurrentPage(page);

  return (
    <section>
      <div className="flex flex-wrap gap-4 justify-center items-center container mx-auto my-14 max-w-5xl">
        {filteredProducts.map(({ title, image, price, link }, i) => (
          <ShopCard title={title} image={image} price={price} link={link} key={i} />
        ))}
      </div>

      <Pagination itemsCount={productList.length} pageSize={pageSize} currentPage={currentPage} onPageChange={handlePageChange} />
    </section>
  );
}

export default ShopList;
