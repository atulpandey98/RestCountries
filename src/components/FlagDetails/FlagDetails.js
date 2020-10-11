import React from 'react';
import './FlagDetails.css';

const FlagDetails = ({ backClicked, country, countriesMap, cardClicked }) => {
    return (
        <div className="flag-detail-section">
            <button className="back-button" onClick={() => backClicked(false)} >                
                <i className="back-arrow"><ion-icon name="arrow-back-outline"></ion-icon></i>Back
            </button>
            <div className="flag-detail">
                <img className="flag-img" src={country.flag}></img>
                <div className="flag-text">
                    <h1>{country.name}</h1>
                    <div className="flag-sub-text">
                        <div className="left-text">
                            <p><b>Native Name:</b> {country.nativeName}</p>
                            <p><b>Population:</b> {country.population}</p>
                            <p><b>Region:</b> {country.region}</p>
                            <p><b>Sub Region:</b> {country.subregion}</p>
                            <p><b>Capital:</b> {country.capital}</p>
                        </div>
                        <div className="right-text">
                            <p><b>Top Level Domain:</b> {country.topLevelDomain[0]}</p>
                            <p><b>Currencies:</b> {country.currencies[0].code}</p>
                            <p><b>Languages:</b> {
                                country.languages.map(lan => {
                                    return lan.name;
                                }).join(', ')
                            }</p>
                        </div>
                    </div>
                    <div className="border-countries">
                        <div><b>Border Countries : </b></div>
                        <div className="border-countries-div">
                            {
                                country.borders.map((value, i) => {

                                    return <span className="border-countries-card" onClick={() => cardClicked(countriesMap.get(value), false)} key={i.toString()}>{countriesMap.get(value).name}</span>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlagDetails;