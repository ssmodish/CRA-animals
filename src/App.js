import React, { Component } from 'react';

import animals from './animalsData';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: animals
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Animals</h1>
        </header>
        <div>
          {this.state.animals.map(animal => (
            <div key='animal.id'>
              Name: {animal.name} - Species: {animal.species}
            </div>
          ))};
        </div>
      </div>
    );
  }
}

export default App;
