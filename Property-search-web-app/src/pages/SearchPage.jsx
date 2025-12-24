import {useState} from 'react';
import data from '../data/properties.json';
import { SearchForm } from '../components/SearchForm.jsx';
import PropertyList from "../components/PropertyList.jsx"

export function SearchPage(){
    const [properties] = useState(data.properties);
    const [filtered, setFiltered] = useState([]);

    const manageSearch = (criteria) => {
        const results = properties.filter((p) => {
            //type
            if(criteria.type !== 'any' && p.type !== criteria.type){return false;}

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



    return(
        <div className='search-page'>
            <SearchForm onSearch={manageSearch}/>
            <PropertyList properties={propertiesToDisplay}/>
        </div>
    )
}