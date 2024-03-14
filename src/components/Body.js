import RestaurantCard from "./RestaurantCard";
import restaurantsInfo from "../utils/mockData";
import { useState } from "react";
import restaurantsInfo from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantsInfo);
  // restaurantsInfo would be the default value for local state variable listOfRestaurants

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const updatedListOfRestaurants = listOfRestaurants.filter(
              (restaurant) => {
                return restaurant.info.avgRating >= 4.5;
              }
            );
            console.log(updatedListOfRestaurants);
            setListOfRestaurants(updatedListOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id} // using key inside map is a good practice, it optimizes the rendering, uisng indexes is not recommended
            imageId={restaurant.info.cloudinaryImageId}
            restaurantName={restaurant.info.name}
            cuisines={restaurant.info.cuisines}
            cost={restaurant.info.costForTwo}
            rating={restaurant.info.avgRatingString}
            time={restaurant.info.sla.slaString}
          />
        ))}
      </div>
    </div>
  );
};

export default Body; // this is known as default export
