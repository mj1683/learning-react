import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import restaurantsInfo from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const fetchSwiggyData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants1 =
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const restaurants2 =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    const restaurants = restaurants1 ? restaurants1 : restaurants2;

    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  // if there is no dependency array provided => then useEffect will be called on every rendering
  // if there is empty dependency array present => then  useEffect will only be called after initial rendering
  // if there is non empty array present => then useEffect will be called only after any array element getting changed.
  useEffect(() => {
    fetchSwiggyData();
  }, []);

  // conditional rendering
  //   if (listOfRestaurants.length === 0) {
  //     return <Shimmer />;
  //   }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-button">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value); // upon every entry inside input, it sets searchText
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              const newList = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(newList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const updatedListOfRestaurants = listOfRestaurants.filter(
              (restaurant) => {
                return restaurant.info.avgRating >= 4.5;
              }
            );
            console.log(updatedListOfRestaurants);
            setFilteredRestaurants(updatedListOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map((restaurant) => (
          // using key inside map is a good practice, it optimizes the rendering, using indexes is not recommended
          <Link key={restaurant.info.id} to="restaurants/123">
            <RestaurantCard
              imageId={restaurant.info.cloudinaryImageId}
              resName={restaurant.info.name}
              cuisines={restaurant.info.cuisines}
              cost={restaurant.info.costForTwo}
              rating={restaurant.info.avgRatingString}
              time={restaurant.info.sla.slaString}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body; // this is known as default export
