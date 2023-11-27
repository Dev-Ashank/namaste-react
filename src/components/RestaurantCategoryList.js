import { CDN_URL } from "../utils/constants"
const RestaurantCategoryList = ({ items }) => {
    return (
        <div>
            {
                items.map((item) => (
                    <div className="border-b-2 p-1 flex justify-between h-50" key={item.card.info.id}>
                        <div className="flex flex-col p-1 text-left">
                            <span className="text-sm">{item.card.info.name}</span>
                            <span className="text-sm font-light">₹{item.card.info.price ? (item.card.info.price) / 100 : (item.card.info.defaultPrice) / 100}</span>
                            <div className="w-96">
                                <p className="text-xs py-2">
                                    {item.card.info.description}
                                </p>
                            </div>
                        </div>
                        <div className="w-3/12 p-1 ">

                            <div className="absolute">
                                <button className="relative shadow-md p-2 rounded-lg mx-14 my-20 text-sm font-semibold text-green-600 bg-white w-20">ADD
                                    <span className="absolute top-0 right-0 mt-0 mr-0.5 text-green-600 font-semibold text-sm">+</span>
                                </button>

                            </div>
                            <img
                                src={CDN_URL + item.card.info.imageId}
                                className="object-contain p-2 w-full h-full"
                                alt="Image"
                            />


                        </div>

                    </div>
                ))
            }
        </div>
    )
}
export default RestaurantCategoryList;