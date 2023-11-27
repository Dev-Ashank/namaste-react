import { useState } from "react";
import RestaurantCategoryList from "./RestaurantCategoryList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {


    const handleClick = () => {
        setShowIndex();
    }
    return (
        <div>
            <div className="w-7/12 mx-auto my-2 shadow-lg p-2 rounded-md ">
                <div className="flex cursor-pointer justify-between" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    {showItems ? <span>⬆️</span> : <span>⬇️</span>}
                </div>

                <div>
                    {showItems && <RestaurantCategoryList key={data.title} items={data.itemCards} />}
                </div>
            </div>

        </div>
    )
}
export default RestaurantCategory;