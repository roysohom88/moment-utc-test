import moment from 'moment';
console.clear();
console.log('Original Purchase Date UTC');
console.log(
  `orininal_purchase_date_ms ==>> `,
  moment(1607975423000)
    .utc()
    .format('YYYY-MM-DD HH:mm:ss')
);
console.log('Monthly');
console.log(
  `purchase_date_ms ==>> `,
  moment(1623392072000)
    .utc()
    .format('YYYY-MM-DD HH:mm:ss')
);
console.log(
  `expires_date_ms ==>> `,
  moment(1623392372000)
    .utc()
    .format('YYYY-MM-DD HH:mm:ss')
);
console.log('Monthly');
console.log(
  `purchase_date_ms ==>> `,
  moment(1623392372000)
    .utc()
    .format('YYYY-MM-DD HH:mm:ss')
);
console.log(
  `expires_date_ms ==>> `,
  moment(1623392672000)
    .utc()
    .format('YYYY-MM-DD HH:mm:ss')
);
console.log('Half Yearly');
console.log(
  `purchase_date_ms ==>> `,
  moment(1623418919000)
    .utc()
    .format('YYYY-MM-DD HH:mm:ss')
);
console.log(
  `expires_date_ms ==>> `,
  moment(1623420719000)
    .utc()
    .format('YYYY-MM-DD HH:mm:ss')
);

console.log('Yearly');
console.log(
  `purchase_date_ms ==>> `,
  moment(1623392795000)
    .utc()
    .format('YYYY-MM-DD HH:mm:ss')
);
console.log(
  `expires_date_ms ==>> `,
  moment(1623396395000)
    .utc()
    .format('YYYY-MM-DD HH:mm:ss')
);
