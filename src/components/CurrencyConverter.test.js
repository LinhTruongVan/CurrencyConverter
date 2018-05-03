import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import CurrencyConverter from './CurrencyConverter';

it('renders CurrencyConverter component correctly', () => {
    const currencies = {
        USD: 1,
        EUR: 2,
        JPY: 3
    }
    const component = renderer.create(
        <CurrencyConverter currencies={currencies} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
