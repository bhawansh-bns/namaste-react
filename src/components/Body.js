import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTURANT_URL } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [updatedList, setUpdatedList] = useState(listOfRestaurants);

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTURANT_URL);
    const json = await data.json();
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

              setUpdatedList(
                listOfRestaurants.filter((res) =>
                  res.data.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              setUpdatedList(
                listOfRestaurants.filter((res) =>
                  res.data.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
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
          <Link key={res.data.id} to={"/restaurants/" + res.data.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
