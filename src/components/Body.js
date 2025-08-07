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
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setListOfRestraunt(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
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

              const filteredRestaurant = listOfRestaurants.filter((res) =>
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
              const filteredList = listOfRestaurants.filter(
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
              <PromotedlabelCard
                // key={restaurant.info.id}
                resdata={restaurant?.info}
              />
            ) : (
              <RestrauntCard resdata={restaurant?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
