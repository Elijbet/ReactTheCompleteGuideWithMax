import React from 'react';

const person = (props) => {
	return (
		<div>
			<p onClick={props.click}>I am { props.name }, I am {Math.floor(Math.random() * 30)} years old, and I am { props.profession }! </p>
			<p>{ props.children }</p>
		</div>
		)
	}

export default person;