import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    const cartItems = useSelector((store) => store.cart.items)
    return (
        <div className="text-center m-4 p-2 ">
            <h1 className="text-2xl font-bold first-letter:capitalize">Cart</h1>
            <button className="p-2 m-2 bg-black text-white rounded-md" onClick={handleClearCart}>Clear Cart 🗑️</button>
            {cartItems.length == 0 && <h1>Cravings! Add your fav.</h1>}
            {cartItems.map((item, index) => (
                <CartList key={index} item={item} />
            ))}
        </div>
    )

}
export default Cart;