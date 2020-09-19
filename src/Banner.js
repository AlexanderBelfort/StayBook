import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";

function Banner() {
    const [showSearch, setShowSearch] = useState(false);


    return (
        <div className="banner">

            <div className='banner__search'>
                {showSearch && <h1>SHOW DATE PICKER</h1>}
                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>Search Dates</Button>
            </div>
            <div className='banner__info'>
                <h1> Get out and have fun</h1>
                <h5>Plan your travels using the services of StayBook</h5>
                <Button variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
