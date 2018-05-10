export default function reducer(state={
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
  }, action) {
  switch (action.type) {
    case "FETCH_CURRENCY_BEGAIN": {
      return Object.assign({}, state, {
        currency: {
          fetching: true
        }
      });
    }
    case "FETCH_CURRENCY_FULLFILLED":
      return Object.assign({}, state, {
        currency: Object.assign({
          fetched: true,
          fetching: false,
          data: Object.assign({}, state.currency.data, action.payload.currency)
        })
      });
    case "FETCH_CURRENCY_REJECT":
      return {
        ...state,
        error: action.payload };

    case "FETCH_CURRENCY_BOOK_BEGAIN": {
      return Object.assign({}, state, {
        book: {
          fetching: true,
          data: Object.assign({}, state.book.data)
        }
      });
    }
    case "FETCH_CURRENCY_BOOK_FULLFILLED":
      return Object.assign({}, state, {
        book: {
          fetched: true,
          fetching: false,
          data: Object.assign({}, state.book.data, action.payload.book)
        }
      });
    case "FETCH_CURRENCY_BOOK_REJECT":
      return {
        ...state,
        error: action.payload };

    default:
  }

  return state;
}
