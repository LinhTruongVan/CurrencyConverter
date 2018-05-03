import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import CurrencyConverter from './CurrencyConverter';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const props = {
        currencies: {
            USD: 1,
            EUR: 2,
            JPY: 3
        }
    };
    console.log(1);
    const enzymeWrapper = mount(<CurrencyConverter {...props} />);
    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('CurrencyConverter', () => {
        it('should render self', () => {
            const { enzymeWrapper, props } = setup();

            expect(enzymeWrapper.find('input').exists()).toBeTruthy()
            expect(enzymeWrapper.find('select').exists()).toBeTruthy()
            expect(enzymeWrapper.find('select option').length).toBe(Object.keys(props.currencies).length)
        })

        it('should update amount after user typing amount', () => {
            const { enzymeWrapper } = setup();

            const expectedValue = '7';
            const input = enzymeWrapper.find('input').first();
            input.simulate('change', { target: { value: expectedValue } });

            expect(input.instance().value).toEqual(expectedValue);
        })
    })
})