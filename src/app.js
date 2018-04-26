import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

class App extends React.Component {
  render(){
    return (
      <div>
        <h2>CryptocurrencyApp</h2>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
