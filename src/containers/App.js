import React, { Component } from 'react';
import classes from './App.css';
import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
	state = {
		persons: [
			{id: 'efdf2d', name: 'Andy', profession: 'Aspiring Cook'},
			{id: 'efdf3d', name: 'Alex', profession: 'Psychologist'},
			{id: 'efdf4d', name: 'Anne', profession: 'Web Developer'}
		],
		vampires: 'Some other form of persons.',
		showPersons: false
	}

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		});

		//this is a more modern approach to reassigning objects than the one below.
		const person = {
			...this.state.persons[personIndex]
		};
		//alternative approach
		//const person = Object.assign({}, this.state.persons[personIndex])

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState ({persons: persons})
	}

	deletePersonHandler = (personIndex) => {
		//make a copy of the array, instead of direcly modifying the original state.
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({persons: persons})
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}
  render() {
  	let persons = null;

  	if(this.state.showPersons){
  		persons = <Persons
	  				persons={this.state.persons}
	  				clicked={this.deletePersonHandler}
	  				changed={this.nameChangedHandler}/>;
  	}

    return (
    	<StyleRoot>
	      <div className={classes.App}>
	      	<Cockpit
	      		title={this.props.appTitle}
	      		showPersons={this.state.showPersons}
	      		persons={this.state.persons}
	      		clicked={this.togglePersonsHandler}/>
	        {persons}
	      </div>
      </StyleRoot>
    );
  }
}

export default App;
