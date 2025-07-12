import React, { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { MENU_API } from "../../utils/constant";
import { useParams } from "react-router";
import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantPage = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    FetchMenu();
  }, []);

  const FetchMenu = async () => {
    const Data = await fetch(
      MENU_API + resId + "&query=Roll&source=collection"
    );
    const json = await Data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <ShimmerUI />;
  }

  //  Collect all itemCards from REGULAR menu
  const menuSections =
    resInfo?.cards?.find((card) => card.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards || [];

  const itemCards = menuSections
    .flatMap((section) => section.card?.card?.itemCards || [])
    .filter(Boolean);

  return (
    <div style={{ fontFamily: "gilroy, arial, Helvetica Neue, sans-serif" }}>
      <h1 className="ms-4 mt-2 mb-4 fw-bold">
        {resInfo.cards[2]?.card?.card?.info.name}
      </h1>
      {/* card */}

      <RestaurantMenuCard />

      {/* Deals For you */}
      {/* search bar for dishes */}
      {/* three filter button veg button non veg button Bestseller Button */}
      {/* Want to repeat section */}
      {/* {top picks section} */}
      {/* {recommended section } */}
      {/* Flash Sale Pizzas */}
      {/* All-New Juicylicious Pizzas & More! section AND its sub sections */}
      {/* Veg Pizza (14) */}
      {/* Buy 1 Pizza Get 2 Sides, 1 Pepsi Free(4) */}
      {/* Non Veg Pizza (11) */}
      {/* Pasta (10) */}
      {/* Drinks & Desserts */}

      <h2
        className="ms-4 mt-2 mb-4 fw-bold"
        style={{ fontFamily: "gilroy, arial, Helvetica Neue, sans-serif" }}
      >
        Menu
      </h2>
      <ul
        className="ms-4 mt-2 mb-4 fw-bold"
        style={{ fontFamily: "gilroy, arial, Helvetica Neue, sans-serif" }}
      >
        {itemCards.map((item, index) => (
          <li key={item.card.info.id + "-" + index}>
            {item.card.info.name} ₹
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantPage;
