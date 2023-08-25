import RestrauntCard from "./RestrauntCard";
import SearchBar from "./SearchBar";
import './Body.css';
import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../utils/constants";

const Body = () => {
    const [listOfRestraunts, setListOfRestraunts] = useState([]);
    const [filterOn, setFilterOn] = useState(false);
    useEffect(() => {
        fetchData();
    }, [])

    function findRestaurantsIndex(data, path = []) {
        for (const key in data) {
            if (data[key] && typeof data[key] === 'object') {
                if (data[key].hasOwnProperty("restaurants")) {
                    return path.concat(key);
                }
                const foundPath = findRestaurantsIndex(data[key], path.concat(key));
                if (foundPath !== null) {
                    return foundPath;
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

        console.log(pathToRestaurants);
        let listOfRestaurantsFromWeb = [];

        if (pathToRestaurants !== null) {
            const restaurantsIndex = pathToRestaurants[0];
            listOfRestaurantsFromWeb = cards[restaurantsIndex].card.card.gridElements.infoWithStyle.restaurants;
            console.log(restaurantsIndex);
        }
        setListOfRestraunts(listOfRestaurantsFromWeb);
    }

    const handleToggle = () => {
        setFilterOn(!filterOn);
    };

    const filteredList = filterOn
        ? listOfRestraunts.filter((item) => item.info.avgRating >= 3.9)
        : listOfRestraunts;

    return (
        <div className="body-container">
            <div className="search-container">
                <SearchBar />
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
                    filteredList.map(restraunt => <RestrauntCard key={restraunt.info.id} resData={restraunt} />)
                }
            </div>
        </div>
    )
};
export default Body;