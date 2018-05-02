import React, { Component } from 'react';

import './CurrencyConverter.css';

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: 0 };

    this.handleAmountChanged = this.handleAmountChanged.bind(this);
    this.convertCurrency = this.convertCurrency.bind(this);
  }

  componentDidMount() {
    fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
      .then(
        res => res.json().then(
          data => {
            this.setState({ currencies: data });
            this.convertCurrency();
          }
        )
      )
      .catch(error => console.log(error))
  }

  handleAmountChanged(e) {
    let newAmount = parseFloat(e.target.value);
    if (isNaN(newAmount)) newAmount = 0;
    this.setState({ amount: newAmount });
  }

  convertCurrency() {
    const convertingResult = (this.state.amount * this.state.currencies['USD']).toFixed(2);
    this.setState({ convertingResult: convertingResult });
  }

  render() {
    return (
      <div>
        <div className="currency__title">USD</div>
        <div className="currency__converting-result">{this.state.convertingResult}</div>

        <div className="input-group currency__input-group">
          <input type="number" className="currency__amount-input" value={this.state.amount} onChange={this.handleAmountChanged} />
          <select className="currency__selector" defaultValue="USD">
            <option value="usd">USD</option>
          </select>
        </div>

        <button type="button" className="btn currency__convert-btn" onClick={this.convertCurrency}>
          Convert
        </button>

      </div>
    );
  }
}

export default CurrencyConverter;
