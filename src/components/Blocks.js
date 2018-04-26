import React from 'react';

class Blocks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          id: "bitcoin",
          price: "0"
        },
        {
          id: "ethereum",
          price: "1"
        },
        {
          id: "ripple",
          price: "2"
        },
        {
          id: "litecoin",
          price: "3"
        }
      ]
    };
  }
    render(){
      const blocks = this.state.data.map((currency) =>
        <span key={currency.id}>
          <h3>{currency.id}</h3>
          <h4>{currency.price}</h4>
        </span>
      );
      return (
        <div>
          <span>{blocks}</span>
        </div>
      );
    }
  }


export default Blocks;
