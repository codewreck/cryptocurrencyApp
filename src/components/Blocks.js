import React from 'react';
import Cryptocurrency from './Cryptocurrency';

class Blocks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          id: "bitcoin",
          name: "Bitcoin",
          symbol: "BTC",
          price_usd: "1",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        },
        {
          id: "ethereum",
          name: "Ethereum",
          symbol: "ETH",
          price_usd: "2",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        },
        {
          id: "ripple",
          name: "Ripple",
          symbol: "XRP",
          price_usd: "3",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        },
        {
          id: "litecoin",
          name: "Litecoin",
          symbol: "ETH",
          price_usd: "2",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        }
      ]
    };
  }
    render(){
      const blocks = this.state.data.map((currency) =>
        <Cryptocurrency data={currency} key={currency.id} />
      );
      return (
        <div>
          <span>{blocks}</span>
        </div>
      );
    }
  }


export default Blocks;
