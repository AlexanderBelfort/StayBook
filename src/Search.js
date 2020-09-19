import React, { useState } from 'react';
import './Search.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from "react-date-range";

// DATE PICKER

function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }; 

    // this function will manage the
    // selection of start to end date
    // thanks to ranges
    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="search">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            
        </div>
    )
}

export default Search
