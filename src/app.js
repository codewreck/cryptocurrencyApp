import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Blocks from './components/Blocks';
import './styles/App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <h2>CryptocurrencyApp</h2>
        </div>
        <Blocks />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
