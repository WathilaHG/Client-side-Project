// Individual property card component with drag-and-drop support
import {Link} from "react-router-dom";
import "./PropertyCard.css";

export function PropertyCard({ property, onFavourite }){
    // Enable drag-and-drop to add to favourites
    const handleDragStart = (e) => {
        e.dataTransfer.setData("text/plain", property.id);
    };

    return(
        <div 
            className="property-card"
            draggable
            onDragStart={handleDragStart}
        >
            {/* Property image with lazy loading */}
            <img
                src={property.picture} 
                alt={property.type}
                className="Property-card-image"
                loading="lazy"
            />

            {/* Property details */}
            <h3>£{property.price.toLocaleString()}</h3>
            <p>{property.bedrooms} bed {property.type}</p>
            <p>{property.location}</p>

            <div className="property-card-actions">
                {/* Link to detailed property page */}
                <Link to={"/property/" + property.id} className="property-info-list">
                    View details
                </Link>

                {/* Add to favourites button */}
                <button type="button" onClick={() => onFavourite(property.id)} className="fav-button">
                    Favourite
                </button>

            </div>
        </div>
    )
}