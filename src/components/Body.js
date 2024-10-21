import React from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "./util/Data";
const Body = () => {
    return (
      <div className="body">
        <div className="search">Search Box</div>
        <div className="res-container">
          {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
export default Body;