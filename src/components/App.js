import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogListContainer from '../containers/HogListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          <HogListContainer />

      </div>
    )
  }
}

export default App;
