import React from 'react'
import './RestrauntMenuHeaderCard.css'
export const RestrauntMenuHeaderCard = (props) => {
    const { resProps } = props;
    const { name, cuisines, areaName, sla: { lastMileTravel }, avgRating, totalRatings } = resProps;
    return (
        <div className="restaurant-card">
            <div className="restaurant-card-content">
                <div className="restaurant-info">
                    <h6 className="restaurant-name">{name}</h6>
                    <div className="details">
                        <p className="cuisine">{cuisines.join(", ")}</p>
                        <div className="location">
                            <p className="address">{areaName}, </p>
                            <p className="distance">{lastMileTravel} km</p>
                        </div>
                    </div>
                </div>
                <div className="rating">
                    <p className="stars">{avgRating} ⭐️</p>
                    <p className="review-count">Total Ratings {totalRatings}</p>
                </div>
            </div>
        </div>



    )
}
