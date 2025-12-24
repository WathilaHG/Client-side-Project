import {useState} from 'react';
import {TextField, MenuItem, Button, Box, Typography} from "@mui/material";

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
        <Box component="form" onSubmit={handleSubmit} sx={{display: "grid", gap: 2}}>
            <Typography variant="h6">Search criteria</Typography>

            <TextField select label="Type" value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value="any">Any</MenuItem>
                <MenuItem value="house">House</MenuItem>
                <MenuItem value="flat">Flat</MenuItem>
            </TextField>

            <TextField 
                label="Min price"
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
            />

            <TextField 
                label="Max price"
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
            />

            <TextField
                label="Min bedrooms"
                type="number"
                value={minBeds}
                onChange={(e) => setMinBeds(e.target.value)}
            />

            <TextField
                label="Max bedrooms"
                type="number"
                value={maxBeds}
                onChange={(e) => setMaxBeds(e.target.value)}
            />

            <TextField
                label="From date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
            />

            <TextField
                label="To date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
            />

            <TextField
                label="Postcode area (e.g. BR5)"
                value={postCode}
                onChange={(e) => setPostCode(e.target.value)}
            />

            <Button type="submit" variant="contained">
                Search
            </Button>

        </Box>
    );
}