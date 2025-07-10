import React, { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { MENU_API } from "../../utils/constant";
import { useParams } from "react-router";

const RestaurantPage = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    FetchMenu();
  }, []);

  const FetchMenu = async () => {
    const Data = await fetch(MENU_API + resId);
    const json = await Data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <ShimmerUI />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo.cards[2]?.card?.card?.info || {};

  //  Collect all itemCards from REGULAR menu
  const menuSections =
    resInfo?.cards?.find((card) => card.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards || [];

  const itemCards = menuSections
    .flatMap((section) => section.card?.card?.itemCards || [])
    .filter(Boolean);

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item, index) => (
          <li key={item.card.info.id + "-" + index}>
            {item.card.info.name} - ₹
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantPage;
