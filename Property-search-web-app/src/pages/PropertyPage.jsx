import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import data from "../data/properties.json";

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

    const imageUrls= [
            property.picture.replace("small","1"),
            "/images/prop1pic1small.jpg",
            "/images/prop2pic1small.jpg",
            "/images/prop3pic1small.jpg",
            "/images/prop4pic1small.jpg",
            "/images/prop5pic1small.jpg",
            "/images/prop6pic1small.jpg",
            "/images/prop7pic1small.jpg"
    ];

    return(
        <div className="property-page">
            <Link to="/"> Back to search</Link>
            <h1>
                £{property.price.toLocaleString()} - {property.bedrooms} bed{" "}
                {property.type}
            </h1>
            <p>{property.location}</p>

            
            <div className="gallery">
                <img
                    src={imageUrls[currentImageIndex]}
                    alt="Property"
                    className="galery-main"
                />
                <div className="gallery-thumbs">
                    {imageUrls.map((src, index) => (
                        <img
                            key={src}
                            src={src}
                            alt={"Thumbnail"+(index+1)}
                            className={
                                index === currentImageIndex? "thumb thumb-active": "thump"
                            }
                            onClick={() => setCurrentImageIndex(index)}
                        />
                    ))}
                </div>
            </div>

            <div className="tabs">
                <button
                    type="button"
                    className={activeTab === "description" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("description")}
                >
                    Description
                </button>

                <button
                    type="button"
                    className={activeTab === "floor" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("floor")}
                >
                    Floor plan
                </button>

                <button
                    type="button"
                    className={activeTab === "map" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("map")}
                >
                    Map
                </button>
            </div>

            <div className="tab-content">
                {activeTab === "description" && (
                    <p>{property.description}</p>
                )}

                {activeTab === "floor" && (
                    <img
                        src="/images/floorplan-placeHolder.png"
                        alt="Floor plan"
                        className="floorplan-image"
                    />
                )}

                {activeTab === "map" && (
                    <img
                        src="/images/map-placeHoler.png"
                        alt="Map"
                        className="map-image"
                    />
                )}
            </div>
        </div>
    )

}