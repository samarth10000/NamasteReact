import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantmenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      MENU_API + resId + "&query=Roll&source=collection"
    );
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantmenu;
