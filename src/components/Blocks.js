import React from 'react';
import Cryptocurrency from './Cryptocurrency';
import axios from 'axios';
import '../styles/Blocks.css';

class Blocks extends React.Component {
  constructor(props){
    super(props);
    this.fetchData = this.fetchData.bind(this);
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
        },
        {
          id: "mixin",
          name: "Mixin",
          symbol: "XIN",
          price_usd: "4",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        },
        {
          id: "bitcoin-cash",
          name: "Bitcoin Cash",
          symbol: "BCH",
          price_usd: "4",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        },
        {
          id: "eos",
          name: "EOS",
          symbol: "EOS",
          price_usd: "5",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        },
        {
          id: "stellar",
          name: "Stellar",
          symbol: "XLM",
          price_usd: "6",
          percent_change_1h: "0",
          percent_change_24h: "0",
          percent_change_7d: "0"
        },
        {

        }
      ],
      isLoading: false
    };
  }

  componentDidMount(){
    this.setState({ isLoading: true });
    this.fetchData();
    setInterval(() => this.fetchData(), 10*1000);
  }

  fetchData = () => {
    axios.get("https://api.coinmarketcap.com/v1/ticker/")
    .then((response) => {
      const wanted = ["bitcoin", "ethereum", "ripple", "litecoin", "mixin", "bitcoin-cash", "eos", "stellar"];
      const result = response.data.filter((currency) => wanted.includes(currency.id));
      this.setState({ data: result, isLoading: false });
    })
    .catch((err) => console.log(err))
  }
    render(){
      const { isLoading } = this.state;

      if(isLoading){
        return <p>Loading.....</p>
      }

      const blocks = this.state.data.map((currency) =>
        <Cryptocurrency data={currency} key={currency.id} />
      );
      return (
        <div className="blocks-container">
          <ul className="blocks">{blocks}</ul>
        </div>
      );
    }
  }


export default Blocks;
