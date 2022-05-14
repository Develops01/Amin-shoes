import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toInteger } from "lodash";
import Layout from "../Layout";
import Counter from "./../common/Counter";
import {
  loadProductById,
  selectSingleProduct,
} from "./../../store/entities/products";

import image from "../../img/anotherCafsh.jpg";

function SingleProduct() {
  const dispatch = useDispatch();
  const params = useParams();
  const product = useSelector((state) => selectSingleProduct(state));
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => setCounter(counter + 1);
  const handleDecrement = () => setCounter(counter - 1);
  const handleCounterChange = (value) => setCounter(toInteger(value));

  useEffect(() => {
    dispatch(loadProductById(params.slug));
  }, []);

  return (
    <Layout>
      <article className="flex flex-col items-center sm:flex-row py-7 px-9">
        <img src={image} alt="" className="w-full sm:w-96" />
        <div>
          <h3 className="text-2xl font-extrabold">{product.name}</h3>
          <span className="text-[#9B6F47]">{product.sale_product} تومان</span>

          <Counter
            value={counter}
            onIncrement={() => handleIncrement()}
            onDecrement={() => handleDecrement()}
            onChange={(v) => handleCounterChange(v)}
          />

          <button className="py-2 px-9 text-white bg-[#9B6F47] rounded-2xl">
            خرید از فروشگاه
          </button>
        </div>
      </article>
    </Layout>
  );
}

export default SingleProduct;
