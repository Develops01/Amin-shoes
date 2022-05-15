import React, { useEffect, useState } from "react";
import { useSelector, useStore } from "react-redux";
import {
  selectProducts,
  loadProducts,
  selectProductsLoading,
  selectTotalPages,
} from "./../store/entities/products";
import ShopCard from "./ShopCard";
import ShopCardTwo from "./ShopCardTwo";
import Loading from "./common/Loading";
import Pagination from "./common/pagination";
import ShopListFilters from "./ShopListFilters";

function ShopList({ baseProductLinkUrl = "" }) {
  const [filtered, setFiltered] = useState([]);
  const [listStyle, setListStyle] = useState("card");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pagesCount = useSelector((state) => selectTotalPages(state));

  const productList = useSelector((state) => selectProducts(state));
  const loading = useSelector((state) => selectProductsLoading(state));
  const store = useStore();

  const imgBaseUrl = process.env.REACT_APP_BASE_IMAGE_URL;

  useEffect(() => {
    store.dispatch(loadProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //      ==== FILTERS ====
  useEffect(() => {
    setFiltered(productList);
  }, [productList]);

  // Paginate
  useEffect(() => {
    store.dispatch(loadProducts({ page: currentPage }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  // Search
  useEffect(() => {
    setFiltered(productList.filter((p) => p.name.includes(searchQuery)));
  }, [productList, searchQuery]);

  return (
    <section className="container mx-auto my-14">
      <ShopListFilters
        handleSearch={handleSearch}
        setListStyle={setListStyle}
      />

      <div className="flex flex-wrap gap-4 justify-center items-center my-14 max-w-5xl min-h-[50vh]">
        {loading ? (
          <Loading />
        ) : (
          filtered.map(({ name, photos, sale_product, slug, _id }, i) =>
            listStyle === "card" ? (
              <ShopCard
                title={name}
                image={imgBaseUrl + photos[0].original}
                price={sale_product}
                link={baseProductLinkUrl + slug}
                key={i}
                id={_id}
              />
            ) : (
              <ShopCardTwo
                title={name}
                image={imgBaseUrl + photos[0].original}
                price={sale_product}
                link={baseProductLinkUrl + slug}
                key={i}
                id={_id}
              />
            )
          )
        )}
      </div>

      <Pagination
        pagesCount={pagesCount}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function handleSearch(query) {
    setSearchQuery(query);
  }
}

export default ShopList;
