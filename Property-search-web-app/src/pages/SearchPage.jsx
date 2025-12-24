import {useState} from 'react';
import data from '../data/properties.json';

export function SearchPage(){
    const [properties] = useState(data.properties)

    return(
        <div>
            <h1>Property Search</h1>
            <p>Total properties: {properties.length}</p>
        </div>
    )
}