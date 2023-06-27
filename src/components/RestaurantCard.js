import { RES_IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  //Destructuring on the Fly

  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    deliveryTime,
  } = resData?.data;
  // const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={RES_IMAGE_URL + cloudinaryImageId}
      />
        <h3>{name}</h3>
   
      <h4>Rs.{costForTwo / 100} FOR TWO.</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} ⭐</h5>
      <h5>{deliveryTime} Minutes</h5>
    </div>
  );
};

export default RestaurantCard;
