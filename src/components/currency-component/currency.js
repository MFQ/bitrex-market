import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCurrencyDetail, fetchCurrencyBook } from "../../actions/currency"
import CurrencyView from './currency-view';
import CurrencyBookView from './currency-book-view';

const mapStateToProps = (store) => ({
    currency: store.currencyReducer.currency,
    fetching: store.currencyReducer.fetching,
    fetched: store.currencyReducer.fetched,
    book: store.currencyReducer.book
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrency: (currencyId) => dispatch(fetchCurrencyDetail(currencyId)),
  fetchCurrencyBook: (currencyId) => dispatch(fetchCurrencyBook(currencyId))
});


class Currency extends Component {

  getCurrencyId(){
    return this.props.match.params.currencyId;
  }

  componentDidMount(){
    this.props.fetchCurrency(this.getCurrencyId());
    this.props.fetchCurrencyBook(this.getCurrencyId());
  }

  render(){
    return (
      <div>
        <CurrencyView symbol={this.getCurrencyId()} {...this.props.currency} />
        <CurrencyBookView {...this.props.book}  />
      </div>

    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Currency)
