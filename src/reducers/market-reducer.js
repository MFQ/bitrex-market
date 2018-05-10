import _ from 'lodash';

export default function reducer(state={
    markets: [],
    fetching: false,
    fetched: false,
    error: null
  }, action) {
  switch (action.type) {
    case "FETCH_MARKETS_BEGAIN": {
      return Object.assign({}, state, {
        fetching: true,
      });
    }
    case "FETCH_MARKETS_FULLFILLED":
      const markets = _.chain(action.payload.symbols).map((s) => s.pair.substr(3))
        .uniq().map((market) => Object.assign({
          [market]: _.filter(action.payload.symbols, (s) => s.pair.substr(3) === market)
        })).value();
      return Object.assign({}, state, {
        fetched: true,
        fetching: false,
        markets: [].concat( state.markets, markets )
      });
    case "FETCH_MARKETS_REJECT":
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload };

    default:
  }

  return state;
}
