import React from 'react';

const person = (props) => {
	return <p>I am { props.name }, I am {Math.floor(Math.random() * 30)} years old, and I am { props.profession }! </p>
	}

export default person;