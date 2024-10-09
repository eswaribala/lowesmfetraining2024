import React from 'react';
import {useLocation} from "react-router-dom";


function BranchLocator(){
    const location = useLocation(); // Get the current location
    const searchParams = new URLSearchParams(location.search); // Parse the query string

    // Extract the query parameters
    const location1 = searchParams.get('location1'); // Get the first location
    const location2 = searchParams.get('location2'); // Get the second location

    return (
        <div>
            <h2>Branch Locator</h2>
            <p>Location 1: {location1}</p> {/* Display the first location */}
            <p>Location 2: {location2}</p> {/* Display the second location */}
        </div>
    );
}

export default BranchLocator;
