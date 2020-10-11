import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

const CardList = ({ countries, cardClicked }) => {
    const cardList = countries.map((country, index) => {
        return <Card key={index} country={country} cardClicked={cardClicked} />
    });
    return (
        <div className="card-list">{cardList}</div>
    );
};

export default CardList;