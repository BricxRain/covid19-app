import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/layouts/Header';
import GlobalCase from './components/GlobalCase';
import CountryCases from './components/CountryCases';
import Footer from './components/layouts/Footer';
import { Spinner, Accordion } from "react-bootstrap";

class App extends Component {

  state = {
    isLoadedSummary: false,
    isLoadedAll: false,
    summary: [],
    all: [],
  }

  componentDidMount() {
    // axios.get(`https://workbook-web.herokuapp.com/api/covid-case/summary`)
    //   .then((res) => {
    //     const summary = res.data.data;
    //     this.setState({summary});
    //     this.setState({isLoadedSummary: true})
    //   });

    // axios.get(`https://workbook-web.herokuapp.com/api/covid-case/`)
    //   .then((res) => {
    //     const all = res.data;
    //     this.setState({all});
    //     this.setState({isLoadedAll: true})
    //   });

    axios.get(`https://workbook-web.herokuapp.com/api/covid-case/summary`)
      .then((res) => {
        const summary = res.data.data;
        this.setState({summary});
        this.setState({isLoadedSummary: true})
      });

    axios.get(`https://workbook-web.herokuapp.com/api/covid-case`)
      .then((res) => {
        const all = res.data;
        this.setState({all});
        this.setState({isLoadedAll: true})
      });
      
  }

  // getCovidCasePerCountry = (e) => {
  //   e.preventDefault();
  //   const country = e.target.elements.country.value;
  //   axios.get(`https://workbook-web.herokuapp.com/api/covid-case/${country}`)
  //     .then((res) => {
  //       return res.data.data;
  //     });
  // }

  render() {
    return (
      <div className="App">
        <Header />
        { this.state.isLoadedSummary ? <GlobalCase summary={this.state.summary}></GlobalCase> : <Spinner style={{ marginTop: '50px' }} animation="grow" />}
        { 
          this.state.isLoadedAll ? 
          
          <Accordion style={{ margin:'30px 10px 20px 10px', display:'block' }}> 
            {this.state.all.map((item, key) =>
              <CountryCases case={item} id={key} key={key} />
            )}
          </Accordion> 
          
          : <Spinner style={{ marginTop: '50px' }} animation="grow" />
        }
        <Footer />
      </div>
    );
  }

}

export default App;