// @flow
import React, { Component } from 'react';

import './CurrencyConverter.css';

type Props = {
  currencies: { [key: string]: number },
  test: boolean
};

type State = {
  amount: number,
  selectedCurrency: string
}

class CurrencyConverter extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { amount: 0, selectedCurrency: Object.keys(this.props.currencies)[0] };
    (this: any).onAmountChange = this.onAmountChange.bind(this);
    (this: any).onCurrencyChange = this.onCurrencyChange.bind(this);
  }

  onAmountChange(e: SyntheticInputEvent<HTMLInputElement>) {
    let amount = parseFloat(e.target.value);
    if (isNaN(amount)) amount = 0;
    this.setState({ amount: amount });
  }

  convertCurrency() {
    return (this.state.amount * this.props.currencies[this.state.selectedCurrency]).toFixed(2);
  }

  renderCurrenySelector() {
    return (
      <select className="currency__selector" onChange={this.onCurrencyChange}>
        {
          Object.keys(this.props.currencies)
            .map(currency => <option key={currency} value={currency}>{currency}</option>)
        }
      </select>
    );
  }

  onCurrencyChange(e: SyntheticInputEvent<HTMLSelectElement>) {
    this.setState({ selectedCurrency: e.target.value });
  }

  render() {
    return (
      <div>
        <div className="currency__title">{this.state.selectedCurrency}</div>
        <div className="currency__converting-result">{this.convertCurrency()}</div>

        <div className="input-group currency__input-group">
          <input type="number" className="currency__amount-input" value={this.state.amount} onChange={this.onAmountChange} />
          {this.renderCurrenySelector()}
        </div>

      </div>
    );
  }
}

export default CurrencyConverter;
