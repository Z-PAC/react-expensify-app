import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// load euro locale
numeral.register('locale', 'pt', {
  delimiters: {
    thousands: ' ',
    decimal: ','
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  currency: {
    symbol: '€'
  }
});

numeral.locale('pt');

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount/100).format('$0,0.00')} 
      - 
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;