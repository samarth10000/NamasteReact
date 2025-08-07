import { CDN_URL } from "../../utils/constant";

const RestaurantCard = (props) => {
  const { resdata } = props;

  if (!resdata || !resdata.info) return null; // or show a loading/error component

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resdata?.info;

  return (
    <div className="w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        className="w-full h-[180px] object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <div className="p-4 space-y-1">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 line-clamp-1">
          {cuisines.join(", ")}
        </p>
        <div className="flex items-center justify-between text-sm text-gray-700">
          <span className="font-medium">{avgRating}⭐</span>
          <span>{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export const Withpromotedlabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Open ! Order Something{" "}
        </label>
        <RestaurantCard {...props} resdata={props.resdata} />
      </div>
    );
  };
};

export default RestaurantCard;
