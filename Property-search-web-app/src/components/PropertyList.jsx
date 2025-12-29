// Component that displays a grid of property cards
import { PropertyCard } from "./PropertyCard.jsx";
import "./PropertyList.css"

export function PropertyList({properties, onFavourite}){
    // Show message if no properties match search
    if(!properties.length){
        return <p>No properties match your search</p>
    }

    return(
        <div className="property-list">
            {/* Map through properties and render cards */}
            {properties.map((p) => (
                <PropertyCard
                    key={p.id}
                    property={p}
                    onFavourite={onFavourite}
                />
            ))}
        </div>
    );
}