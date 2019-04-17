import React from 'react';
import Radium from 'radium';
import './Person.css'

const person = (props) => {
	const style = {
		'@media (min-width: 500px)': {
				width: '450px'
		}
	}
	return (
		<div className="Person" style={style}>
			<p onClick={props.click}>I am { props.name }, I am {Math.floor(Math.random() * 30)} years old, and I am { props.profession }! </p>
			<p>{ props.children }</p>
			<input type="text" onChange={props.changed} value={props.name}/>
		</div>
		)
	}

export default Radium(person);