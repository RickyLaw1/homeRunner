import React, { Component } from 'react';
import './App.css';

import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios.get("http://proxy.hackeryou.com", {
      params: {
        reqUrl: "https://runsignup.com/rest/races",
        xmlToJSON: true,
      }
    }).then( ({ data }) => {
      console.log(data.races.race);
      
    }).catch( error => {
      console.log('error', error);
      
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Home Runner</h1>
      </div>
    );
  }
}

export default App;
