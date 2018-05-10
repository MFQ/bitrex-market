import reducer from '../../reducers/currency-reducer'

describe('Currency reducer', () => {

  it('should return fetch book fullfilled state', () => {
    expect(reducer(undefined,
      {
        type: 'FETCH_CURRENCY_BOOK_FULLFILLED',
        payload: {
          book: { asks: [1], bids: [1] }
        }
      })).toEqual({
      currency: {
        fetching: false,
        fetched: false,
        data: { }
      },
      book:{
        fetching: false,
        fetched: true,
        data: {
          asks: [1],
          bids: [1]
        }
      },
      error: null
    })
  });


  it('should return fetch currency fullfilled state', () => {
    expect(reducer(undefined,
      {
        type: 'FETCH_CURRENCY_FULLFILLED',
        payload: {
          currency: { name: 'btc' }
        }
      })).toEqual({
      currency: {
        fetching: false,
        fetched: true,
        data: { name: 'btc' }
      },
      book:{
        fetching: false,
        fetched: false,
        data: {
          asks: [],
          bids: []
        }
      },
      error: null
    })
  });


  it('should return fetch book begain state', () => {
    expect(reducer(undefined,
      {
        type: 'FETCH_CURRENCY_BOOK_BEGAIN'
      })).toEqual({
      currency: {
        fetching: false,
        fetched: false,
        data: {}
      },
      book:{
        fetching: true,
        fetched: false,
        data: {
          asks: [],
          bids: []
        }
      },
      error: null
    })
  });


  it('should return fetch currency begain state', () => {
    expect(reducer(undefined,
      {
        type: 'FETCH_CURRENCY_BEGAIN'
      })).toEqual({
      currency: {
        fetching: true,
        fetched: false,
        data: {}
      },
      book:{
        fetching: false,
        fetched: false,
        data: {
          asks: [],
          bids: []
        }
      },
      error: null
    })
  });


  it('should return fetch book reject state', () => {
    expect(reducer(undefined, { type: 'FETCH_CURRENCY_BOOK_REJECT', payload: 1})).toEqual({
      currency: {
        fetching: false,
        fetched: false,
        data: {}
      },
      book:{
        fetching: false,
        fetched: false,
        data: {
          asks: [],
          bids: []
        }
      },
      error: 1
    })
  });

  it('should return fetch currency reject state', () => {
    expect(reducer(undefined, { type: 'FETCH_CURRENCY_REJECT', payload: 1})).toEqual({
      currency: {
        fetching: false,
        fetched: false,
        data: {}
      },
      book:{
        fetching: false,
        fetched: false,
        data: {
          asks: [],
          bids: []
        }
      },
      error: 1
    })
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      currency: {
        fetching: false,
        fetched: false,
        data: {}
      },
      book:{
        fetching: false,
        fetched: false,
        data: {
          asks: [],
          bids: []
        }
      },
      error: null
    })
  });


})
