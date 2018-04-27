import React from 'react';
import Cryptocurrency from './Cryptocurrency';
import axios from 'axios';

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

  componentDidMount(){
    axios.get("https://api.coinmarketcap.com/v1/ticker/")
    .then((response) => {
      const wanted = ["bitcoin", "ethereum", "ripple", "litecoin"];
      const result = response.data.filter((currency) => wanted.includes(currency.id));
      this.setState({ data: result });
    })
    .catch((err) => console.log(err))
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
