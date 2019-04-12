import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
	state = {
		persons: [
			{name: 'Andy', profession: 'Aspiring Cook'},
			{name: 'Alex', profession: 'Psychologist'},
			{name: 'Anne', profession: 'Web Developer'}
		]
	}
  render() {
    return (
      <div className="App">
        <h1>Hello this is my first React setup.</h1>
        <Person name="Max" profession="Interior Designer"/>
        <Person name={this.state.persons[0].name} profession={this.state.persons[0].profession}>My hobbies: Pinterest Cooking, Instagram Exhibition.</Person>
        <Person name={this.state.persons[1].name} profession={this.state.persons[1].profession}/>
        <Person name={this.state.persons[2].name} profession={this.state.persons[2].profession}/>
      </div>
    );
  }
}

export default App;
