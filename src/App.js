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
		vampires: 'Some other form of persons.',
		showPersons: false
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

	deletePersonHandler = (personIndex) => {
		const persons = this.state.persons;
		persons.splice(personIndex, 1);
		this.setState({persons: persons})
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}
  render() {
  	const style = {
  		backgroundColor: 'white', 
  		font: 'inherit',
  		border: '1px solid blue',
  		padding: '8px',
  		cursor: 'pointer'
  	};
  	let persons = null;
  	if(this.state.showPersons){
  		persons = (
	  		<div>
	  			{this.state.persons.map((person, index) => {
	  				return <Person 
	  				click={() => this.deletePersonHandler(index)}
	        	name={person.name} 
	        	profession={person.profession}> My hobbies: Pinterest Cooking, Instagram Exhibition.
	        </Person>
	  			})}
	      </div>
      )
  	}
    return (
      <div className="App">
        <h1>Hello this is my first React setup.</h1>
        {persons}
        <button 
        	style={style}
        	onClick={this.togglePersonsHandler}>
        	Toggle Persons
        </button>
      </div>
    );
  }
}

export default App;
