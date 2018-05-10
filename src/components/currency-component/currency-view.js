import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import _ from 'lodash';
import * as Icon from 'react-cryptocoins';
import { string, object } from 'prop-types';

const CurrencyView = (props) => {
  const showIcon = () => {
    try {
      const currency = props.symbol.substr(0, 1).toUpperCase() + props.symbol.substr(1, 2);
      return Icon[currency]({color: 'grey', size: 200});
    }
    catch(err) {
      return "Missing Icon";
    }
  }
  const showDetail = () => {
    return _.keys(props.data).map( (key, index) => (
      <Row key={index}>
        <Col>
          <Row><strong>{key.toUpperCase()}</strong></Row>
        </Col>
        <Col>
          <Row>{props.data[key]}</Row>
        </Col>
      </Row>
    ));
  }

  if(props.fetching){
    return (<Container>
      <Row>Loading details...</Row>
    </Container>)
  }

  return (
    <Container>
      <Row>
        <Col>{showIcon()}</Col>
        <Col>{showDetail()}</Col>
      </Row>
    </Container>
  )
}

CurrencyView.propTypes = {
  data: object.isRequired,
  symbol: string.isRequired
}

export default CurrencyView;
