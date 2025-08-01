import React, { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { CDN_URL } from "../../utils/constant";
import { useParams } from "react-router";
import RestaurantMenuCard from "./RestaurantMenuCard";
import SearchBarMenu from "./SearchBarMenu";
import useRestaurantmenu from "../../utils/useRestaurantmenu";

const RestaurantPage = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantmenu(resId);

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
      {" "}
      <img
        className="restaurantMenu-image"
        src={CDN_URL + resInfo.cards[2]?.card?.card?.info?.cloudinaryImageId}
        alt={resInfo.cards[2]?.card?.card?.info?.name}
      />
      <h1 className="ms-4 mt-2 mb-4 fw-bold">
        {resInfo.cards[2]?.card?.card?.info.name}
      </h1>
      {/* card */}
      <RestaurantMenuCard />
      {/* search bar for dishes */}
      <SearchBarMenu />
    </div>
  );
};

export default RestaurantPage;
