import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShimmerUI from "./ShimmerUI";
// import useRestaurantmenu from "../../utils/useRestaurantmenu";
import { MENU_API } from "../../utils/constant";

const ResMenuCard = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    const fetchRestaurantmenu = async () => {
      try {
        const response = await fetch(`${MENU_API}${resId}`);
        const json = await response.json();

        // const MenuData
        console.log(
          json?.data?.cards
            .find((obj) => obj?.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((obj) =>
              obj?.card?.card["@type"]?.includes("ItemCategory")
            )
        );

        const restaurantCard = json?.data?.cards.find((item) =>
          item?.card?.card["@type"]?.includes("food.v2.Restaurant")
        );

        setResInfo(restaurantCard?.card?.card?.info);
      } catch (err) {
        console.log("So SORRY Data is Not Present ❌");
      }
    };

    fetchRestaurantmenu();
  }, [resId]);

  if (resInfo === null) {
    return <ShimmerUI />;
  }

  const { name, cuisines, costForTwoMessage, locality, avgRating } = resInfo;
  return (
    <div className="menu">
      <h2>Menu</h2>
      <h1>{name}</h1>
      <p>
        {cuisines} - {costForTwoMessage}
      </p>
      <p>locality : {locality}</p>
      <p>AvgRating : {avgRating}</p>

      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ResMenuCard;
