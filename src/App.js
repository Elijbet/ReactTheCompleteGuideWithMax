import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person'

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
  	const style = {
  		backgroundColor: 'green',
  		color: 'white', 
  		font: 'inherit',
  		border: '1px solid blue',
  		padding: '8px',
  		cursor: 'pointer',
  		':hover': {
  			backgroundColor: 'lightgreen',
  			color: 'black'
  		}
  	};
  	let persons = null;
  	if(this.state.showPersons){
  		persons = (
	  		<div>
	  			{this.state.persons.map((person, index) => {
	  				// If you put the tag on the next line after return you'll get the following error:
	  				// Expected an assignment or function call and instead saw an expression  no-unused-expressions.
	  				return <Person 
	  				click={() => this.deletePersonHandler(index)}
	        	name={person.name} 
	        	profession={person.profession}
	        	key={person.id}
	        	changed={(event) => this.nameChangedHandler(event, person.id)}> My hobbies: Pinterest Cooking, Instagram Exhibition.
	        </Person>
	  			})}
	      </div>
      );

	  	style.backgroundColor = 'red';
	  	style[':hover'] =  {
  			backgroundColor: 'salmon',
  			color: 'black'
  		}
  	}

  	const classes = [];
  	if(this.state.persons.length <=2){
  		classes.push('red');
  	}
  	if(this.state.persons.length <=1){
  		classes.push('bold');
  	}

    return (
    	<StyleRoot>
	      <div className="App">
	        <h1>Hello this is my first React setup.</h1>
	        <p className={classes.join(' ')}>This is really working!</p>
	        <button 
	        	style={style}
	        	onClick={this.togglePersonsHandler}>
	        	Toggle Persons
	        </button>
	        {persons}
	      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
