import React from 'react';
import { Table, Container, Row, Alert } from 'reactstrap';
import Symbol from './symbol';
import _ from 'lodash';
import { string, array } from 'prop-types';

const Market = (props) => {

  return (
    <div>
      <Alert color="secondary">
        <Row> {props.currency} Markets. </Row>
      </Alert>
      <Container>
        <Row>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                {_.keys(props.symbols[0]).map( (key, index) => <th key={index} > {key.split('_').join(" ").toUpperCase()} </th> )}
                <th> Action </th>
              </tr>
            </thead>
            <tbody>
              {props.symbols.map( (sy, index) => <Symbol key={index + props.currency} index={index + 1 } symbolObj= {sy}/> )}
            </tbody>
          </Table>
        </Row>
        <Row> </Row>
      </Container>

    </div>
  )
}

Market.propTypes = {
  currency: string.isRequired,
  symbols: array.isRequired
}

export default Market;
