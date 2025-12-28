import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import data from "../data/properties.json";
import "./PropertyPage.css";

export function PropertyPage(){
    const {id} = useParams();
    const properties = data.properties;
    const property = properties.find((p) => p.id === id);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState("description");

    if(!property) {
        return(
            <div className="property-page">
                <p>Property not found</p>
                <Link to="/">Back to search</Link>
            </div>
        );
    }

    const imageUrls= property.images;
    

    return(
        <div className="property-page">
            <h1>
                £{property.price.toLocaleString()} - {property.bedrooms} bed{" "}
                {property.type}
            </h1>
            <p>{property.location}</p>

            
            <div className="gallery">
                <img
                    src={property.picture}
                    alt="Property"
                    className="gallery-main"
                />
                <div className="gallery-thumbs">
                    {imageUrls.map((src, index) => (
                        <img
                            key={src}
                            src={src}
                            alt={"Thumbnail"+(index+1)}
                            className={
                                index === currentImageIndex? "thumb thumb-active": "thumb"
                            }
                            onClick={() => setCurrentImageIndex(index)}
                        />
                    ))}
                </div>
            </div>

            <div className="tabs">
                <button
                    type="button"
                    className={activeTab === "description" ? "tab-active" : "tab"}
                    onClick={() => setActiveTab("description")}
                >
                    Description
                </button>

                <button
                    type="button"
                    className={activeTab === "floor" ? "tab-active" : "tab"}
                    onClick={() => setActiveTab("floor")}
                >
                    Floor plan
                </button>

                <button
                    type="button"
                    className={activeTab === "map" ? "tab-active" : "tab"}
                    onClick={() => setActiveTab("map")}
                >
                    Map
                </button>
            </div>

            <div className="tab-content">
                {activeTab === "description" && (
                    <p className="info-container">{property.description}</p>
                )}

                {activeTab === "floor" && (
                    <img
                        src={property.floorPlan}
                        alt="Floor plan"
                        className="floorplan-image"
                    />
                )}

                {activeTab === "map" && (
                    <iframe
                        src={property.map}
                        className="map-iframe"
                    />
                )}
            </div>
        </div>
    )

}