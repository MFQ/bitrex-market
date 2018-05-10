import axios from 'axios';
import { getUrl } from '../utils/api';
export function fetchCurrencyDetail(currencyId) {
  return (dispatch) => {
    dispatch( { type: 'FETCH_CURRENCY_BEGAIN' } )
    return axios.get( getUrl(`pubticker/${currencyId}`) )
    .then((res) => dispatch( { type: 'FETCH_CURRENCY_FULLFILLED', payload: { currency: res.data } } ) )
    .catch( (err) => dispatch ({ type: 'FETCH_CURRENCY_REJECT', payload: { error: err } }) );
  }
}

export function fetchCurrencyBook(currencyId) {
  return (dispatch) => {
    dispatch( { type: 'FETCH_CURRENCY_BOOK_BEGAIN' } )
    return axios.get( getUrl(`book/${currencyId}`) )
    .then((res) => dispatch( { type: 'FETCH_CURRENCY_BOOK_FULLFILLED', payload: { book: res.data } } ) )
    .catch( (err) => dispatch ({ type: 'FETCH_CURRENCY_BOOK_REJECT', payload: { error: err } }) );
  }
}
