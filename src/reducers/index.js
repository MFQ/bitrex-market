import { combineReducers } from "redux";
import marketReducer from './market-reducer';
import currencyReducer from './currency-reducer';

export default combineReducers({
  marketReducer,
  currencyReducer
});
