import { useEffect, useState } from "react"
import { SWIGGY_MENU_API_URL } from "./constants";

const useRestrauntMenu = (resId) => {
    const [resMenu, setResMenu] = useState(null);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const url = `https://corsproxy.org/?${encodeURIComponent(SWIGGY_MENU_API_URL)}${resId}`;
        const data = await fetch(url);
        const json = await data.json();
        setResMenu(json.data)
    }
    return resMenu;
}
export default useRestrauntMenu;