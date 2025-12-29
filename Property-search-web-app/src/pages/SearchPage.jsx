// Main search page with property filtering and favourites management
import {useState} from 'react';
import data from '../data/properties.json';
import { SearchForm } from '../components/SearchForm.jsx';
import {PropertyList} from "../components/PropertyList.jsx";
import { FavouritesPanel } from '../components/FavouritesPanel.jsx';
import "./SearchPage.css"

export function SearchPage(){
    const [properties] = useState(data.properties);
    const [filtered, setFiltered] = useState([]);
    const [favourites, setFavourites] = useState([])

    // Filter properties based on search criteria
    const manageSearch = (criteria) => {
        const results = properties.filter((p) => {
            //type
            if(criteria.type !== 'any' && p.type.toLowerCase() !== criteria.type.toLowerCase()){return false;}

            //price
            if(criteria.minPrice && p.price < Number(criteria.minPrice)){return false;}
            if(criteria.maxPrice && p.price > Number(criteria.maxPrice)){return false;}

            //bedrooms
            if(criteria.minBeds && p.bedrooms < Number(criteria.minBeds)){return false;}
            if(criteria.maxBeds && p.bedrooms > Number(criteria.maxBeds)){return false;}

            //postcode
            if(criteria.postCode){
                const code = p.location.split(" ").slice(-1)[0];
                if(!code.startsWith(criteria.postCode)){return false;}
            }

            //Date added
            const added = new Date(`${p.added.day} ${p.added.month} ${p.added.year}`);

            if(criteria.fromDate){
                const from = new Date(criteria.fromDate);
                if(added<from){return false;}
            }

            if(criteria.toDate){
                const to = new Date(criteria.toDate);
                if(added>to){return false;}
            }

            return true;
        });
        setFiltered(results);
    };

    // Display filtered results or all properties
    const propertiesToDisplay = filtered.length? filtered : properties;

    // Add property to favourites (prevent duplicates)
    const addFavourite = (id) => {
        setFavourites((prev) => {
            return prev.includes(id) ? prev :[...prev, id]
        });
    };

    // Remove property from favourites
    const removeFavourite = (id) => {
        setFavourites((prev) => prev.filter((fid) => fid !== id));
    };

    // Clear all favourites
    const clearFavourites = () => {
        setFavourites([]);
    }

    // Get full property objects for favourites
    const favouriteProperties = properties.filter((p) => favourites.includes(p.id));


    return(
        <div className='search-layout'>
            <h1>Property search</h1>

            {/* Search form */}
            <SearchForm onSearch={manageSearch}/>
            <div className='property-section'>
                {/* Property listing grid */}
                <PropertyList 
                    properties={propertiesToDisplay} 
                    onFavourite={addFavourite}
                />

                {/* Favourites sidebar */}
                <FavouritesPanel
                    favourites={favouriteProperties}
                    onRemove={removeFavourite}
                    onClear={clearFavourites}
                    onDropId={addFavourite}
                    className="fav-section"
                />
                
            </div>
        </div>
    );
}