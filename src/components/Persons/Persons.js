import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
	  				// If you put the tag on the next line after return you'll get the following error:
	  				// Expected an assignment or function call and instead saw an expression  no-unused-expressions.
	  			return <Person 
	  				click={() => props.clicked(index)}
	        	name={person.name} 
	        	profession={person.profession}
	        	key={person.id}
	        	changed={(event) => props.changed(event, person.id)}> My hobbies: Pinterest Cooking, Instagram Exhibition.
	        </Person>
	  			});
export default persons;