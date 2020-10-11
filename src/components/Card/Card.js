import React from 'react';
import './Card.css';
const card = (props) => {
    const { country, cardClicked } = props;
    return (
        <div className="card" onClick={() => cardClicked(country, true)}>
            <img className="flag" src={country.flag} alt="flag" />
            <div className="flag-details">
                <h2>{country.name}</h2>
                <p><b>Population:</b> {country.population}</p>
                <p><b>Region:</b> {country.region}</p>
                <p><b>Capital:</b> {country.capital}</p>

            </div>
        </div>
    );
};

export default card;