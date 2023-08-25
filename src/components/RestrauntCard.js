import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
    const { resData } = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla: { deliveryTime }
    } = resData?.info;
    return (
        <div className="restraunt-card">
            <div className="card-content">
                <img className="card-image" alt="card-image" src={CDN_URL + cloudinaryImageId} />
                <div className="card-details">
                    <h3>{name}</h3>
                    <p>{cuisines.join(", ")}</p>
                    <p>{costForTwo}</p>
                    <div className="card-content-items">
                        <p>{avgRating}⭐️</p>
                        <p>{deliveryTime} Minutes</p>
                    </div>
                </div>

            </div>
        </div>
    )
};
export default RestrauntCard;