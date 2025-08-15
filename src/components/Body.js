import { useEffect, useState } from "react";
import RestrauntCard, { Withpromotedlabel } from "../components/RestrauntCard";
import { Link } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import useOnlineStatus from "../../utils/useOnlineStatus";
import OfflineMessage from "../components/OfflineMessage";

const Body = () => {
  //we can see this state as a array destructuring , this syntax and second one works the same , here just showing what is shappening inside it

  // const arr = useState(resobj);

  // const listofrestraunts = arr[0];
  // const setlistofrestraunt = arr[1];

  // whenever state variables update , react triggers a reconciliation cycle(re-renders the component)

  // super powerful state local state variable
  const [listofrestraunts, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setsearchtext] = useState("");
  const PromotedlabelCard = Withpromotedlabel(RestrauntCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=27.9135016&lng=78.0781901&carousel=true&third_party_vendor=1"
    );

    const json = await data.json();
    console.log("API Response:", json);

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    console.log("Extracted restaurants:", restaurants); // ✅ ADD THIS

    setListOfRestraunt(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <OfflineMessage />;
  }
  return listofrestraunts.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listofrestraunts.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listofrestraunts.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            {restaurant?.info?.availability?.opened ? (
              <PromotedlabelCard resdata={restaurant} />
            ) : (
              <RestrauntCard resdata={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
