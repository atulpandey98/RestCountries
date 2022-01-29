import React, { Component } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import CardList from './components/CardList/CardList';
import './App.css';
import FlagDetails from './components/FlagDetails/FlagDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      countriesMap: new Map(),
      searchField: '',
      filterRegion: 'none',
      url: 'https://restcountries.com/v2/all',
      isFlagClicked: false,
      flag: {}
    }
  }

  searchFlags = event => {
    this.setState({
      searchField: event.target.value
    });
  }

  filteredFlags = event => {
    this.setState({
      filterRegion: event.target.value
    });
  }

  toggleFlagClicked = (toggle) => {
    if (toggle) {
      this.setState({
        isFlagClicked: true
      })
    }
    else {
      this.setState({
        isFlagClicked: false,
        searchField: '',
        filterRegion: 'none'
      })
    }
  }

  cardClicked = (country, isCardClicked) => {
    if(isCardClicked) {
      this.toggleFlagClicked(true);
    }    
    this.setState({
      flag: country
    })
  }

  componentDidMount() {
    fetch(this.state.url)
      .then(response => {
        return response.json();
      })
      .then(values => {
        this.setState({
          countries: values          
        })
        values.forEach(element => {
          this.state.countriesMap.set(element.alpha3Code, element);
        });
      });
  }

  render() {
    const { countries, searchField, filterRegion, isFlagClicked, flag, countriesMap } = this.state;
    const filteredFlags = countries.filter(country => {
      if (filterRegion !== 'none') {
        return (country.name.toLowerCase().includes(searchField.toLowerCase())) &&
          (country.region.toLowerCase() === filterRegion)
      }
      return country.name.toLowerCase().includes(searchField.toLowerCase())
    });
    if (!isFlagClicked) {
      return (
        <div>
          <Header></Header>
          <SearchBar searchField={this.searchFlags} filterRegion={this.filteredFlags}></SearchBar>
          <CardList countries={filteredFlags} cardClicked={this.cardClicked}></CardList>
        </div>
      );
    }
    else {
      return (
        <div>
          <Header></Header>
          <FlagDetails backClicked={this.toggleFlagClicked} country={flag} cardClicked={this.cardClicked} countriesMap={countriesMap}/>
        </div>
      )
    }


  }

}

export default App;
