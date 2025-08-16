import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShimmerUI from "./ShimmerUI";
// import useRestaurantmenu from "../../utils/useRestaurantmenu";
import { MENU_API } from "../../utils/constant";

const ResMenuCard = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    const fetchRestaurantmenu = async () => {
      try {
        const response = await fetch(MENU_API);
        const json = await response.json();

        const menuData = json?.data?.cards
          .find((obj) => obj?.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((obj) =>
            obj?.card?.card["@type"]?.includes("ItemCategory")
          );

        console.log(menuData);

        const organisedMenuData = menuData?.map((item) => {
          const type = item?.card?.card["@type"];
          const title = item?.card?.card?.title;
          const itemCards = item?.card?.card?.itemCards || [];

          if (type?.includes("ItemCategory")) {
            return {
              title,
              type: item,
              itemCards,
            };
          }
        });
        console.log(organisedMenuData);

        setResInfo(
          json?.data?.cards.find((obj) =>
            obj?.card?.card["@type"]?.includes("food.v2.Restaurant")
          )?.card?.card?.info || []
        );
        setResMenu(organisedMenuData);
      } catch (err) {
        console.log("So SORRY Data is Not Present ❌");
      }
    };

    fetchRestaurantmenu();
  }, [resId]);

  if (resInfo === null) {
    return <ShimmerUI />;
  }

  //destructuring ---------------
  const { name, cuisines, costForTwoMessage } = resInfo;

  return (
    <div>
      <div className="text-center">
        <h2>Menu</h2>
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="text-sm font-bold">
          {cuisines} - {costForTwoMessage}
        </p>
      </div>
      {resMenu?.map((obj) =>
        obj?.type?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ? (
          <ItemCategory key={obj.title} data={obj} />
        ) : (
          []
        )
      )}
    </div>
  );
};

const ItemCategory = (props) => {
  console.log(props);
  const { title, itemCards } = props?.data;

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {itemCards.map((item) => {
          <Menuitem menuInfo={item?.card?.info} />;
        })}
        <li></li>
      </ul>
    </div>
  );
};

const Menuitem = (props) => {
  console.log(props);
  return <div></div>;
};
export default ResMenuCard;
