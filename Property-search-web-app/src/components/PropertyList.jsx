import { PropertyCard } from "./PropertyCard.jsx";
import "./PropertyList.css"

export function PropertyList({properties, onFavourite}){
    if(!properties.length){
        return <p>No properties match your search</p>
    }

    return(
        <div className="property-list">
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