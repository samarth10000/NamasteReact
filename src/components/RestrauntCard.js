import { CDN_URL } from "../../utils/constant";

const RestrauntCard = (props) => {
  const { resdata } = props;

  // Object destructuring is a syntax in JavaScript that allows you to extract properties from objects and assign them to variables in a shorter and cleaner way.
  // resdata?.info;
  // If resdata exists, then access .info. Otherwise, return undefined and don’t throw an error.”

  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = resdata?.info;
  // const { resName, cusine } = props;
  // another way of passing props by destructuring method
  return (
    <div className="res-card">
      <img
        className="res-image"
        src={CDN_URL + cloudinaryImageId}
        alt="res-image"
      />
      <h3>{name}</h3>
      {/* <h3>{props.resName}</h3> without destructuring */}
      <h4>{cuisines.join(" , ")} </h4>
      <h4>{avgRating} </h4>
      <h4>{costForTwo}</h4>
      <h4>deliverytime {deliveryTime} minutes</h4>
    </div>
  );
};

export default RestrauntCard;
