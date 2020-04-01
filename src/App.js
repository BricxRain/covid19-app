import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/layouts/Header';
import GlobalCase from './components/GlobalCase';
import CountryCases from './components/CountryCases';
import Footer from './components/layouts/Footer';

class App extends Component {

  componentDidMount() {
    console.log("Hello");
  }

  // getCovidCaseSummary = () => {
  //   axios.get(`https://covid-rest.herokuapp.com/summary`)
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }

  // getCovidCaseAll = () => {
  //   axios.get(`https://covid-rest.herokuapp.com/`)
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }

  // getCovidCasePerCountry = (e) => {
  //   e.preventDefault();
  //   const country = e.target.elements.country.value;
  //   axios.get(`https://covid-rest.herokuapp.com/${country}`)
  //     .then((res) => {
  //       console.log(res);
  //     });
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <GlobalCase />
        <CountryCases />
        <Footer />
      </div>
    );
  }

}

export default App;