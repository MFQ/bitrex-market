import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Symbol from './../components/symbol';
import Market from './../components/market';
import Header from './../components/header';

import CurrencyView from './../components/currency-component/currency-view';
import CurrencyBookView from './../components/currency-component/currency-book-view';

configure({ adapter: new Adapter() });

describe('Symbol', () => {
  it('should render correctly', () => {
    const mockData = {
      bids: [],
      asks: []
    }
    const output = shallow(
      <CurrencyBookView data={ mockData } />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

describe('CurrencyView', () => {
  it('should render correctly', () => {
    const BTCDATA = {
      "mid": "9336.55",
      "bid": "9336.5",
      "ask": "9336.6",
      "last_price": "9336.6",
      "low": "9228.0",
      "high": "9393.9",
      "volume": "16146.421390230002",
      "timestamp": "1525963063.0559313"
    }
    const output = shallow(
      <CurrencyView symbol="btcusd" data={BTCDATA} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});


describe('Symbol', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Symbol index="1" symbolObj={{ name: 'name'}} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

describe('Market', () => {
  it('should render correctly', () => {
    const output = shallow( <Market currency="btc" symbols={[]} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});


describe('Header', () => {
  it('should render correctly', () => {
    const output = shallow( <Header/> );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
