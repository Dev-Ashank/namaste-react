import resList from "../utils/mockData";
import RestrauntCard from "./RestrauntCard";
import SearchBar from "./SearchBar";
import './Body.css';
import { useState } from "react";

const Body = () => {
    const [listOfRestraunts, setListOfRestraunts] = useState(resList);

    return (
        <div className="body-container">
            <div className="search-container">
                <SearchBar />
            </div>
            <div className="filter">
                <label className="switch">
                    <input type="checkbox" id="toggle-switch" onClick={() => {
                        filteredList = resList.filter((item) => item.data.data.avgRating >= 3.9);
                        console.log(resList);
                        setListOfRestraunts(filteredList);
                    }} />
                    <span className="slider"></span>
                </label>
                <p>
                    Top Rated Restaurants
                </p>
            </div>

            <div className="res-container">
                {
                    listOfRestraunts.map(restraunt => <RestrauntCard key={restraunt.data.data.id} resData={restraunt} />)
                }
            </div>
        </div>
    )
};
export default Body;