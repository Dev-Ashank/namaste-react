import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RestrauntMenuHeaderCard } from "./RestrauntMenuHeaderCard";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestrauntMenu = () => {

    const [showIndex, setShowIndex] = useState(0);
    const { resId } = useParams();
    const resMenu = useRestrauntMenu(resId);
    const categories = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);
    if (resMenu === null) return <Shimmer />

    const resDetails = resMenu?.cards[0]?.card?.card?.info;
    const regularCards = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    let allItemCards = [];
    // const { itemCards } = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    if (Array.isArray(regularCards)) {
        const allItemCardsSet = new Set(); // Create a Set to store unique itemCards

        for (let i = 1; i < regularCards.length; i++) {
            const itemCard = regularCards[i]?.card?.card?.itemCards;

            if (itemCard && Array.isArray(itemCard) && itemCard.some(item => item.card?.info?.id)) {
                // Convert the itemCard array to a JSON string and add it to the Set
                allItemCardsSet.add(JSON.stringify(itemCard));
            }
        }
        allItemCards = Array.from(allItemCardsSet).map(item => JSON.parse(item));
    }
    if (allItemCards === null) return <Shimmer />;
    return (
        <div>
            <RestrauntMenuHeaderCard key={resDetails.id} resProps={resDetails} />
            {/* categories accordion */}
            {/* {allItemCards.map((item, index) => (
                <RestrauntMenuCard
                    resMenuData={item}
                    key={item?.card?.info?.id ?? index} // Use 'index' as a fallback key
                />
            ))} */}
            {categories.map((category, index) => (
                < RestaurantCategory data={category?.card?.card}
                    key={category?.card?.card?.title ?? index}
                    showItems={index == showIndex ? true : false}

                    setShowIndex={() => {
                        if (showIndex == index) {
                            setShowIndex(-1);
                        }
                        else {
                            setShowIndex(index);
                        }
                    }
                    } />
            ))}
        </div>

    )

}
export default RestrauntMenu;