import reducer from '../../reducers/market-reducer'

describe('Market reducer', () => {

  it('should return fetch market reject state', () => {
    expect(reducer(undefined, { type: 'FETCH_MARKETS_REJECT', payload: 1})).toEqual({
      markets: [],
      fetching: false,
      fetched: false,
      error: 1
    })
  });


  it('should return fetch market fullfiled state', () => {
    expect(reducer(undefined, { type: 'FETCH_MARKETS_FULLFILLED', payload: {
      symbols: [
        {
          expiration: "NA",
          initial_margin: "30.0",
          margin: true,
          maximum_order_size: "2000.0",
          minimum_margin: "15.0",
          minimum_order_size: "0.002",
          pair: "btcusd",
          price_precision: 5
        }
      ]
    } })).toEqual({
      markets: [
        {
          usd: [
            {
              expiration: "NA",
              initial_margin: "30.0",
              margin: true,
              maximum_order_size: "2000.0",
              minimum_margin: "15.0",
              minimum_order_size: "0.002",
              pair: "btcusd",
              price_precision: 5
            }
          ]
        }
      ],
      fetching: false,
      fetched: true,
      error: null
    })
  });

  it('should return fetch market begain state', () => {
    expect(reducer(undefined, { type: 'FETCH_MARKETS_BEGAIN' })).toEqual({
      markets: [],
      fetching: true,
      fetched: false,
      error: null
    })
  });


  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      markets: [],
      fetching: false,
      fetched: false,
      error: null
    })
  })

})
