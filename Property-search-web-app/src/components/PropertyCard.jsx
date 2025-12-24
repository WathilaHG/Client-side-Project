import {Link} from "react-router-dom";

export function PropertyCard({ property, onFavourite }){
    const handleDragStart = (e) => {
        e.dataTransfer.setData("text/plain", property.id);
    };

    return(
        <div 
            className="property-card"
            draggable
            onDragStart={handleDragStart}
        >
            <img
                src={property.picture} 
                alt={property.type}
                className="Property-card-image"
            />
            <h3>£{property.price.toLocaleString()}</h3>
            <p>{property.bedrooms} bed {property.type}</p>
            <p>{property.location}</p>

            <div className="property-card-actions">
                <Link to={"/properties/" + property.id}>
                    View details
                </Link>

                <button type="button" onClick={() => onFavourite(property.id)}>
                    Favourite
                </button>

            </div>
        </div>
    )
}