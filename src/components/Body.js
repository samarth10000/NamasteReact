import { useEffect, useState } from "react";
import RestrauntCard from "../components/RestrauntCard";
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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants =
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

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
        <div className="Search">
          <input
            type="text"
            className="Search-Box"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filtered = listofrestraunts.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setFilteredRestraunt(filtered); // ✅ Correct
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn "
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
      <div className="restaurant-container">
        {filteredRestaurant.map((restraunt) => (
          <Link to={/restaurants/ + restraunt.info.id} key={restraunt.info.id}>
            {" "}
            <RestrauntCard key={restraunt.info.id} resdata={restraunt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
