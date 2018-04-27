import React from 'react';

const Cryptocurrency = (props) => {
  const {
    id,
    name,
    symbol,
    price_usd,
    percent_change_1h,
    percent_change_24h,
    percent_change_7d
   } = props.data;
  return (
    <li>
      <h2>{name} ({symbol})</h2>
      <h3>${ (+price_usd) }</h3>
      <p>{percent_change_1h}% 1hr</p>
      <p>{percent_change_24h}% 24hrs</p>
      <p>{percent_change_7d}% 7days</p>
    </li>
  );
}

export default Cryptocurrency;
