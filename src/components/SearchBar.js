const SearchBar = () => {
    return (
        <div className="search">
            <input
                type="text"
                className="search-input"
                placeholder="Search Restraunts"
            />
            <button className="search-button">Search</button>
        </div>
    );
};
export default SearchBar;