import React from 'react';
import './SearchPage.css'
import { Button } from "@material-ui/core";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                {/* this should be dynamic
                but will keep it hardcoded 
                as in for now */}
                <p>25 stays ~ 15 October to 30 October ~ 7 guests</p>
                <h1>Stays Nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
        </div>
    )
}

export default SearchPage
