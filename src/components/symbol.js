import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { number, object } from 'prop-types';

const Symbol = (props) => {
  return (
    <tr>
      <th scope="row">{props.index}</th>
      { _.values(props.symbolObj).map((value, index) => (<td key={index} > {value} </td>) ) }
      <td>
        <Link to={"/currencies/" +  props.symbolObj.pair}>
          <Button color="success"> Detail </Button>
        </Link>
      </td>
    </tr>
  );
};

Symbol.propTypes = {
  index: number.isRequired,
  symbolObj: object.isRequired,
}

export default Symbol;
