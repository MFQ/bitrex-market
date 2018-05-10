import React, { Component } from 'react';
import Market from "./market";
import { connect } from "react-redux";
import { fetchMarkets } from '../actions/market';
import _ from 'lodash';

const mapStateToProps = (store) => ({
  markets: store.marketReducer.markets,
  fetching: store.marketReducer.fetching,
  fetched: store.marketReducer.fetched
});

const mapDispatchToProps = (dispatch) => ({
  fetchMarkets: () => dispatch(fetchMarkets())
});

class Home extends Component {

  componentDidMount(){
    this.props.fetchMarkets();
  }

  showMarkets(){
    return this.props.markets.map( (market, index) =>
      <Market key={index} currency={_.findKey(market)} symbols={_.get(market, _.findKey(market))} /> );
  }

  render(){
    if(this.props.fetching){
      return "Loading..."
    }
    return (
      <div> {this.showMarkets()} </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Home)
