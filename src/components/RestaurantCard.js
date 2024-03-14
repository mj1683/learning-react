import { CDN_URL } from "../utils//constants"; // import named export, we use curly braces.

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resName, cuisines, imageId, cost, rating, time } = props;
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src={CDN_URL + imageId}></img>
      <h3>{resName}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{rating} stars</h4>
      <h4>{cost}</h4>
      <h4>{time}</h4>
    </div>
  );
};

export default RestaurantCard;
