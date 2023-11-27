import { CDN_URL } from '../utils/constants';
import './RestrauntMenuCard.css';

const RestrauntMenuCard = (props) => {
    const { resMenuData } = props;
    let name, price, description, imageId, defaultPrice;
    if (Array.isArray(resMenuData) && resMenuData.length > 0) {
        const cardInfo = resMenuData[0]?.card?.info;

        if (cardInfo) {
            name = cardInfo.name;
            price = cardInfo.price;
            description = cardInfo.description;
            imageId = cardInfo.imageId;
            defaultPrice = cardInfo.defaultPrice;
        }
    }
    return (
        <div className="item-card-container">
            <div className="item-card">
                <div className="item-card-content">
                    <div className="item-card-left">
                        <div className="item-card-header">
                            <h6 className="item-card-name">{name}</h6>
                            <p className="item-card-price">₹{price == null ? (defaultPrice / 100) : (price / 100)}</p>
                        </div>
                        <div className="item-card-body">
                            <p className="item-card-description">
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className="item-card-right">
                        <img src={CDN_URL + imageId} alt="Item Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestrauntMenuCard;
