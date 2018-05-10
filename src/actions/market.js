import axios from 'axios';
import { getUrl } from '../utils/api';

export function fetchMarkets() {
  return (dispatch) => {
    dispatch( { type: 'FETCH_MARKETS_BEGAIN' } )
    axios.get( getUrl('symbols_details') )
    .then((res) => dispatch( { type: 'FETCH_MARKETS_FULLFILLED', payload: { symbols: res.data } } ) )
    .catch( (err) => dispatch ({ type: 'FETCH_MARKETS_REJECT', payload: { error: err } }) );
  }
}
