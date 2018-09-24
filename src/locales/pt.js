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