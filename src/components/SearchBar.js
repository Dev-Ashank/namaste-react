
const SearchBar = () => {
    return (
        <div className="search">
            <input
                type="text"
                className="search-input"
                placeholder="Search Restraunts"
            />
            <button className="search-button" /*onClick={() => {
                filtereList = resList.filter(
                    (item) => item.data.data.name === searchItem
                )
                
            }}*/>Search</button>
        </div>
    );
};
export default SearchBar;