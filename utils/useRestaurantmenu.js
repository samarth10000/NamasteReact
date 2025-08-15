import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantmenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(MENU_API + resId + "&submitAction=ENTER");
    const json = await data.json();
    console.log(json.data.cards);
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantmenu;
