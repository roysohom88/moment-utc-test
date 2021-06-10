import moment from 'moment';
console.clear();
console.log('Monthly');

console.log('Half Yearly');
console.log(
  `purchase_date_ms ==>> `,
  moment(1623309540000)
    .utc()
    .format('YYYY-MM-DD HH:mm:ss')
);
console.log(
  `expires_date_ms ==>> `,
  moment(1623311340000)
    .utc()
    .format('YYYY-MM-DD HH:mm:ss')
);

console.log('Yearly');
console.log(
  `purchase_date_ms ==>> `,
  moment(1623309990000)
    .utc()
    .format('YYYY-MM-DD HH:mm:ss')
);
console.log(
  `expires_date_ms ==>> `,
  moment(1623313590000)
    .utc()
    .format('YYYY-MM-DD HH:mm:ss')
);
