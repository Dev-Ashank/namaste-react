import { useState } from "react";

const SearchBar = () => {
    const [searchText, setSearchText] = useState("")
    return (
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
            <button className="search-button" onClick={() => {
                console.log(searchText);
            }}>Search</button>
        </div>
    );
};
export default SearchBar;