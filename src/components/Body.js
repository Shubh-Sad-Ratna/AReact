import React,{useState,useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import { resListData } from "./util/Data";

const Body = () => {
    const [resList,setReslist]=useState(resListData)
    const [filresList,setFilReslist]=useState(resListData)
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const response = await fetch(
          'https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
        );
        const data = await response.json();
        console.log(data);
      };
      if(resList.length===0){
        return <h1>Loading......</h1>
      }
    return (
      <div className="body">
        <div className="filter">
            <button onClick={()=>{
            const filteredList=resList.filter((res)=>res.data.avgRating>4)
            setFilReslist(filteredList)
        }}>Top Rated Restaurants</button>
        </div>
        <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
            const filteredSearch = resList.filter((res) =>
                res.data.name.toLowerCase().includes(e.target.value.toLowerCase())
              );
              setFilReslist(filteredSearch);
            }
            }
          placeholder="Search Restaurants"
        />
      </div>

        <div className="res-container">
          {filresList.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
export default Body;