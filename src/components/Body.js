import { useEffect, useState } from "react";
import RestrauntCard from "./RestrauntCard";
import resobj from "../../utils/mockData";

const Body = () => {
  //we can see this state as a array destructuring , this syntax and second one works the same , here just showing what is shappening inside it
  const arr = useState(resobj);

  const listofrestraunts = arr[0];
  const setlistofrestraunt = arr[1];

  const [searchtext, setsearchtext] = useState("");
  // whenever state variables update , react triggers a reconciliation cycle(re-renders the component)
  console.log("Body rendered");

  // super powerful state local state variable
  // const [listofrestraunts, setlistofrestraunt] = useState(resobj);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    // setlistofrestraunt(json.data.cards[4].card.card.brands);
  };
  return (
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
              const filteredRestraunt = listofrestraunts.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setlistofrestraunt(filteredRestraunt);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn "
          onClick={() => {
            const filteredList = listofrestraunts.filter(
              (res) => res.info.avgRating > 4
            );
            setlistofrestraunt(filteredList);
          }}
        >
          Top Rated Restraunt
        </button>
      </div>
      <div className="restraunt-container">
        {listofrestraunts.map((restraunt) => (
          <RestrauntCard key={restraunt.info.id} resdata={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
