import React from 'react';
import { Table, Container, Row, Col } from 'reactstrap';
import _ from 'lodash';
import { object } from 'prop-types';

const CurrencyBookView = (props) => {

  const getTrs = (bids) => {
    return bids.map( (bid) => {
      return ( <tr> {_.values(bid).map( (v) => ( <td>{v}</td> ) )} </tr>)
    })
  }

  const getThs = (ths) => ths.map( (th, index) => ( <th key={index}> {th} </th> ) )

  const getTable = (title, bids) => {
    return (
      <div>
        <h1> {title} </h1>
        <Table>
          <thead>
            <tr>{getThs(["Amount", "Price", "Timestamp"])}</tr>
          </thead>
          <tbody>{getTrs(bids)}</tbody>
        </Table>
      </div>
    );
  }


  if(props.fetching) {
    return (<Container>
      <Row>Loading book information...</Row>
    </Container>)
  }

  return (
    <Container>
      <Row>
        <Col>{getTable("Bids", props.data.bids)}</Col>
        <Col>{getTable("Asks", props.data.asks)}</Col>
      </Row>
    </Container>
  )
}

CurrencyBookView.propTypes = {
  data: object.isRequired
}

export default CurrencyBookView;
