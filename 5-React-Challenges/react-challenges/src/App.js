import React, { Component } from 'react';
import './App.css';
// import FC1 from './components/FC1'
// import Mood from './components/Mood'
import CarContainer from './components/CarContainer';
import Car from './components/Car';
import List from './components/List'

class App extends Component {
  render() {
    return (
      <div>
        {/* <FC1 />
        <Mood /> */}
        {/* <CarContainer /> */}
        <List />
      </div>
    );
  }
}

export default App;
