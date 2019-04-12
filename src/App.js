import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
	state = {
		persons: [
			{name: 'Andy', profession: 'Aspiring Cook'},
			{name: 'Alex', profession: 'Psychologist'},
			{name: 'Anne', profession: 'Web Developer'}
		],
		vampires: 'Some other form of persons.'
	}
	switchNameHandler = (newName) => {
		// console.log("I was clicked")
		this.setState ({
			persons: [
				{name: newName, profession: 'Aspiring Cook'},
				{name: 'Alex', profession: 'Psychologist'},
				{name: 'Anne', profession: 'Web Developer'}
			]
		})
	}
	nameChangedHandler = (event) => {
		this.setState ({
			persons: [
				{name: 'Andy', profession: 'Aspiring Cook'},
				{name: event.target.value, profession: 'Psychologist'},
				{name: 'Anne', profession: 'Web Developer'}
			]
		})
	}
  render() {
    return (
      <div className="App">
        <h1>Hello this is my first React setup.</h1>
        <Person 
        	name="Max" 
        	profession="Interior Designer"/>
        <Person 
        	name={this.state.persons[0].name} 
        	profession={this.state.persons[0].profession}>My hobbies: Pinterest Cooking, Instagram Exhibition.
        </Person>
        <Person 
        	name={this.state.persons[1].name} 
        	profession={this.state.persons[1].profession}
        	click={() => this.switchNameHandler('Maximilian!!')}
        	changed={this.nameChangedHandler}/>
        <Person 
        	name={this.state.persons[2].name} 
        	profession={this.state.persons[2].profession}/>
        <button 
        	onClick={this.switchNameHandler.bind(this, 'Max!')}>
        	SwitchName
        </button>
      </div>
    );
  }
}

export default App;
