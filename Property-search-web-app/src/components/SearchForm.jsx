import {useState} from 'react';
import {TextField, MenuItem, Button, Box} from "@mui/material";
import "./SearchForm.css"

export function SearchForm({onSearch}){
    const [type, setType] = useState("any");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [minBeds, setMinBeds] = useState("");
    const [maxBeds, setMaxBeds] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [postCode, setPostCode] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        onSearch({
            type,
            minPrice,
            maxPrice,
            minBeds,
            maxBeds,
            fromDate,
            toDate,
            postCode,
        });
    }
    

    return(
        <Box component="form" onSubmit={handleSubmit} className='search-form'>

            <TextField select label="Type" value={type} size="small" onChange={(e) => setType(e.target.value)} >
                <MenuItem value="any">Any</MenuItem>
                <MenuItem value="House">House</MenuItem>
                <MenuItem value="Flat">Flat</MenuItem>
            </TextField>

            <TextField 
                label="Min price"
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                size="small"
            />

            <TextField 
                label="Max price"
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                size="small"
            />

            <TextField
                label="Min bedrooms"
                type="number"
                value={minBeds}
                onChange={(e) => setMinBeds(e.target.value)}
                size="small"
            />

            <TextField
                label="Max bedrooms"
                type="number"
                value={maxBeds}
                onChange={(e) => setMaxBeds(e.target.value)}
                size="small"
            />

            <TextField
                label="From date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                size="small"
            />

            <TextField
                label="To date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                size="small"
            />

            <TextField
                label="Postcode area (e.g. BR5)"
                value={postCode}
                onChange={(e) => setPostCode(e.target.value)}
                size="small"
            />

            <Button type="submit" variant="contained" className='search-button' size="small">
                Search
            </Button>

        </Box>
    );
}