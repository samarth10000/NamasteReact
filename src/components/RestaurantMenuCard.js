import React, { useState } from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { MENU_API } from "../../utils/constant";
import ShimmerUI from "./ShimmerUI";
import useRestaurantmenu from "../../utils/useRestaurantmenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantmenu(resId);

  const info = resInfo?.cards?.[0]?.card?.card?.info;
  if (!info) return <ShimmerUI />;

  const {
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    areaName,
    slugs,
  } = info;

  const { itemCards } =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card || {};

  console.log(itemCards);

  return (
    <div
      className="mx-auto my-5 px-5 py-3 shadow"
      style={{ maxWidth: "calc(100% - 200px)", borderRadius: "30px" }}
    >
      <div
        className="card-header"
        style={{ display: "flex", alignItems: "flex-start" }}
      >
        <div className="logosvg">
          <img
            src="https://logodix.com/logo/710626.png"
            alt=""
            style={{ marginTop: "8px", width: "25px", height: "25px" }}
          />
        </div>
        <div className="rating m-2 fw-bold">
          {avgRatingString || "Loading..."} +{" "}
          {totalRatingsString || "Loading..."}
        </div>
        <div className="costfortwo m-2 fw-bold">
          {costForTwoMessage || "Loading..."}
        </div>
      </div>

      <div
        className="address-time"
        style={{ display: "flex", alignItems: "center", gap: "12px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "gray",
              borderRadius: "50%",
            }}
          ></div>
          <div
            style={{ width: "2px", height: "25px", backgroundColor: "gray" }}
          ></div>
          <div
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "gray",
              borderRadius: "50%",
            }}
          ></div>
        </div>

        <div className="card-body">
          <h5
            className="card-header-text fw-bold"
            style={{ color: "darkorange" }}
          >
            {cuisines?.join(", ") || "Loading cuisines..."}
          </h5>
          <p className="card-text">Outlet - {areaName}</p>
        </div>
      </div>

      <div
        className="Restaurant-cardBottomText t fw-bold"
        style={{ color: "black" }}
      >
        {slugs?.restaurant}
      </div>
    </div>
  );
};

export default RestaurantMenu;
