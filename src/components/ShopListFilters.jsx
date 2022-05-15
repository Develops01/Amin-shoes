import React from "react";

import listStyleIcon from "../img/listStyle.svg";
import cardStyleIcon from "../img/cardStyle.svg";

function ShopListFilters({ handleSearch, setListStyle }) {
  return (
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
          placeholder="جستجو"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default ShopListFilters;
