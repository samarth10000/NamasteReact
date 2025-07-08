import { CDN_URL } from "../../utils/constant";

const RestaurantCard = (props) => {
  const { resdata } = props;

  const {
    name,
    cuisines,
    avgRating,

    costForTwo,
    cloudinaryImageId,
  } = resdata.info;

  return (
    <div className="res-card">
      <img className="res-image" src={CDN_URL + cloudinaryImageId} alt={name} />
      <div className="res-details">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating} stars</p>

        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
