import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [updatedList, setUpdatedList] = useState(listOfRestaurants);

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0310074&lng=77.5629738&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setUpdatedList(json?.data?.cards[2]?.data?.data?.cards);
  };

  // Conditional Rendering

  return updatedList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);

              setUpdatedList(listOfRestaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())));

            }}
          />
          <button
            className="search-button"
            onClick={() => {
              setUpdatedList(listOfRestaurants.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())));
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.data.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurants.
        </button>
      </div>
      <div className="restaurant-container">
        {updatedList.map((res) => (
          <RestaurantCard key={res.data.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
