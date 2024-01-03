import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    //subscribing to the store using this selector.
    const cartItems = useSelector((store) => store.cart.items);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>{onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">🛒 {cartItems.length}</Link></li>
                    <button className="btn-login" onClick={() => { btnName === "Login" ? setBtnName("Logout") : setBtnName("Login") }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    )
};
export default Header;