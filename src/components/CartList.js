import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { removeItem } from "../utils/cartSlice";

const CartList = (props) => {
    const dispatch = useDispatch();
    const handleRemoveItem = () => {
        const itemId = props?.card?.info?.id;
        if (itemId) {
            dispatch(removeItem(itemId));
        }
    }
    const cartItems = props.item;
    console.log(cartItems);
    let name, price, description, imageId, defaultPrice;
    const cardInfo = cartItems?.card?.info;

    if (cardInfo) {
        name = cardInfo.name;
        price = cardInfo.price;
        description = cardInfo.description;
        imageId = cardInfo.imageId;
        defaultPrice = cardInfo.defaultPrice;
    }
    return (
        <div className="flex flex-col gap-4">

            <div className="flex items-center bg-gray-100 p-4 rounded shadow-md">
                <div className="relative">
                    <img src={CDN_URL + imageId} alt={description} className="w-16 h-16 object-cover rounded" />
                    <button className="absolute top-0 right-0 p-1 bg-white rounded-full" onClick={handleRemoveItem}>
                        <span className="text-gray-600">-</span>
                    </button>
                </div>
                <div className="ml-4 flex-grow">
                    <p className="text-lg font-semibold">{description}</p>
                    <p className="text-gray-700">₹{price == null ? (defaultPrice / 100) : (price / 100)}</p>
                </div>
            </div>

        </div>
    );
};

export default CartList;