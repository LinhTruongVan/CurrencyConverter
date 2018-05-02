import React, { Component } from 'react';

import './App.css';
import CurrencyConverter from './components/CurrencyConverter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CurrencyConverter className="AppContent" />
      </div>
    );
  }
}

export default App;
