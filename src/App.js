import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleLineChart from './component/SimpleLineChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleLineChart />
      </div>
    );
  }
}

export default App;
