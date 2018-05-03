import React, { Component } from 'react';

import './App.css';
import CurrencyConverter from './components/CurrencyConverter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
      .then(
        res => res.json().then(
          data => this.setState({ currencies: data })
        )
      )
      .catch(error => console.log(error))
  }

  render() {
    if (!this.state.currencies) return <h1>Loading...</h1>;
    return (
      <div className="App">
        <CurrencyConverter currencies={this.state.currencies} />
      </div>
    );
  }
}

export default App;
