import React from 'react';
import classes from './Person.css'

const person = (props) => {
	
	return (
		<div className={ classes.Person }>
			<p onClick={props.click}>I am { props.name }, I am {Math.floor(Math.random() * 30)} years old, and I am { props.profession }! </p>
			<p>{ props.children }</p>
			<input type="text" onChange={props.changed} value={props.name}/>
		</div>
		)
	}

export default person;