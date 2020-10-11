import React from 'react';
import './SearchBar.css'

const searchBar = ({searchField, filterRegion}) => {
    return (
        <div className="search-bar">
            <input onChange={searchField} placeholder="Search for a country..."></input>            
            <select onChange={filterRegion} name="">
                <option value="none">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    );
};

export default searchBar;