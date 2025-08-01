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
  const [listofrestraunts, setlistofrestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestraunt] = useState([]);

  const [searchtext, setsearchtext] = useState("");
  const PromotedlabelCard = Withpromotedlabel(RestrauntCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=27.875684523971504&lng=78.06875076144934&carousel=true&third_party_vendor=1"
    );
    const json = await data.json();

    const restaurantCard = json?.data?.cards.find(
      (card) => card.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];
    setlistofrestraunt(restaurants);
    setFilteredRestraunt(restaurants);
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <OfflineMessage />;
  }
  return listofrestraunts.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="p-4">
          <input
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Search Your Food Here"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition"
            onClick={() => {
              const filtered = listofrestraunts.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setFilteredRestraunt(filtered); // ✅ Correct
            }}
          >
            Search
          </button>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 ml-2 transition rounded-lg"
            onClick={() => {
              const filteredList = listofrestraunts.filter(
                (res) => res?.info?.avgRating > 4
              );
              setFilteredRestraunt(filteredList);
            }}
          >
            Top Rated Restraunt
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={/restaurants/ + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant?.info?.availability?.opened ? (
              <PromotedlabelCard
                key={restaurant.info.id}
                resdata={restaurant}
              />
            ) : (
              <RestrauntCard key={restaurant.info.id} resdata={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
