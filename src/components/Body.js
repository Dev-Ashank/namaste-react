import RestrauntCard from "./RestrauntCard";
import SearchBar from "./SearchBar";
import './Body.css';
import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestraunts, setListOfRestraunts] = useState([]);
    const [filterOn, setFilterOn] = useState(false);
    const [searchText, setSearchText] = useState("");
    useEffect(() => {
        fetchData();
    }, [])

    function findRestaurantsIndex(data) {
        const stack = [{ node: data, path: [] }];

        while (stack.length > 0) {
            const { node, path } = stack.pop();

            for (const key in node) {
                if (node[key] && typeof node[key] === 'object') {
                    if (node[key].hasOwnProperty("restaurants")) {
                        return path.concat(key);
                    }
                    stack.push({ node: node[key], path: path.concat(key) });
                }
            }
        }

        return null;
    }


    const fetchData = async () => {
        const data = await fetch(SWIGGY_API_URL);
        const json = await data.json();

        const cards = json.data.cards;
        const pathToRestaurants = findRestaurantsIndex(cards);
        let listOfRestaurantsFromWeb = [];

        if (pathToRestaurants !== null) {
            const restaurantsIndex = pathToRestaurants[0];
            listOfRestaurantsFromWeb = cards[restaurantsIndex]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        }
        setListOfRestraunts(listOfRestaurantsFromWeb);
    }

    const handleToggle = () => {
        setFilterOn(!filterOn);
    };

    // Filter function based on rating condition
    const filterByRating = (restaurant) => {
        return restaurant.info.avgRating >= 4.0;
    };

    // Filter function based on name condition
    const filterByName = (restaurant) => {
        const restaurantName = restaurant.info.name.toLowerCase();
        const searchTextLowerCase = searchText.toLowerCase();
        return restaurantName.includes(searchTextLowerCase);
    };

    // Apply filters based on the toggle
    const applyFilters = (restaurant) => {
        if (filterOn) {
            return filterByRating(restaurant) && filterByName(restaurant);
        }
        return filterByName(restaurant);
    };

    // Filter the list of restaurants based on the combined filter criteria
    const filteredList = listOfRestraunts.filter(applyFilters);

    return listOfRestraunts.length === 0 ? <Shimmer /> : (
        <div className="body-container">
            {/* <div className="search-container">
                <SearchBar />
            </div> */}
            <div className="search">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search Restraunts"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button className="search-button" onClick={filterByName}>Search</button>
            </div>
            <div className="filter">

                <label className="switch">
                    <input type="checkbox" id="toggle-switch"
                        checked={filterOn}
                        onChange={handleToggle}
                    />
                    <span className="slider"></span>
                </label>
                <p>
                    Top Rated Restaurants
                </p>
            </div>

            <div className="res-container">
                {

                    filteredList.map((restraunt) => <Link to={"/restraunt/" + restraunt.info.id} key={restraunt.info.id}>
                        <RestrauntCard resData={restraunt} />
                    </Link>
                    )
                }
            </div>
        </div>
    )
};
export default Body;