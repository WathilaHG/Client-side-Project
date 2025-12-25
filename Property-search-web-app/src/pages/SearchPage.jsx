import {useState} from 'react';
import data from '../data/properties.json';
import { SearchForm } from '../components/SearchForm.jsx';
import {PropertyList} from "../components/PropertyList.jsx";
import { FavouritesPanel } from '../components/FavouritesPanel.jsx';

export function SearchPage(){
    const [properties] = useState(data.properties);
    const [filtered, setFiltered] = useState([]);
    const [favourites, setFavourites] = useState([])

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

    const propertiesToDisplay = filtered.length? filtered : properties;

    const addFavourite = (id) => {
        setFavourites((prev) => {
            return prev.includes(id) ? prev :[...prev, id]
        });
    };

    const removeFavourite = (id) => {
        return setFavourites((prev) => prev.filter((fid) => {return fid !== id}))
    };

    const clearFavourites = () => {
        setFavourites([]);
    }

    const favouriteProperties = properties.filter((p) => {return favourites.includes(p.id)});


    return(
        <div className='search-layout'>
            <div className='search-main'>
                <h1>Property search</h1>
                <SearchForm onSearch={manageSearch}/>
                <PropertyList 
                    properties={propertiesToDisplay} 
                    onFavourite={addFavourite}
                />
            </div>

            <FavouritesPanel
                favourites={favouriteProperties}
                onRemove={removeFavourite}
                onClear={clearFavourites}
                onDropId={addFavourite}
            />
        </div>
    );
}