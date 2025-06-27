import { useState } from "react";
import RestrauntCard from "./RestrauntCard";
// import resobj from "../../utils/mockData";

const Body = () => {
  const [listofrestraunts, setlistofrestraunt] = useState([
    {
      info: {
        id: "248400",
        name: "Cafe Knight Riders",
        cloudinaryImageId: "bzkakkmq4sysnss5hfdg",
        locality: "Dodhpur",
        areaName: "Abad Market",
        costForTwo: "₹400 for two",
        cuisines: ["American", "Fast Food", "Pizzas", "Burgers"],
        avgRating: 4,
        parentId: "14948",
        avgRatingString: "4.0",
        totalRatingsString: "2.6K+",
        deliveryTime: 47,
      },
    },
    {
      info: {
        id: "248401",
        name: "Sai Dhaba",
        cloudinaryImageId: "bzkakkmq4sysnss5hfdg",
        locality: "Dodhpur",
        areaName: "Abad Market",
        costForTwo: "₹400 for two",
        cuisines: ["Indian", "Thali", "Roti Sabzi"],
        avgRating: 4.5,
        parentId: "14949",
        avgRatingString: "4.5",
        totalRatingsString: "3.1K+",
        deliveryTime: 32,
      },
    },
  ]);

  return (
    <div className="body">
      <div className="filter">
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
