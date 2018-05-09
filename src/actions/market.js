import axios from 'axios';

export function fetchMarkets() {
  return (dispatch) => {
    dispatch( { type: 'FETCH_MARKETS_BEGAIN' } )
    axios.get("https://cors-anywhere.herokuapp.com/https://api.bitfinex.com/v1/symbols_details")
    .then((res) => dispatch( { type: 'FETCH_MARKETS_FULLFILLED', payload: { symbols: res.data } } ) )
    .catch( (err) => dispatch ({ type: 'FETCH_MARKETS_REJECT', payload: { error: err } }) );
  }
}
