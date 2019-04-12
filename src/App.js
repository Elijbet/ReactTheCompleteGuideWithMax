import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello this is my first React setup.</h1>
        <Person name="Andy" profession="Interior Designer"/>
        <Person name="Alex" profession="Psychologist"/>
        <Person name="Anne" profession="Web Developer"/>
      </div>
    );
  }
}

export default App;
