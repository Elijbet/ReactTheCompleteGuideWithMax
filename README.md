## Course Notes:

* React folder structure.
* JSX is actually JS and not html. JSX is syntactic sugar. If we didn't use JSX, we'd have to use React.createElement for each tag. Gets out of hand easily.
* JSX vs HTML. React uses JSX – a declarative JavaScript XML which allows developers to write components leveraging the power of JavaScript, while Vue.js uses HTML templates to create views [1].
* There’s a Babel plugin to use JSX with Vue, getting us back to a syntax that’s closer to templates.

 #### Components & JSX Cheat Sheet
___
Components are the core building block of React apps. Actually, React really is just a library for creating components in its core.

A typical React app therefore could be depicted as a component tree - having one root component ("App") and then an potentially infinite amount of nested child components.

Each component needs to return/ render some JSX code - it defines which HTML code React should render to the real DOM in the end.

JSX is NOT HTML but it looks a lot like it. Differences can be seen when looking closely though (for example className in JSX vs class in "normal HTML"). JSX is just syntactic sugar for JavaScript, allowing you to write HTMLish code instead of nested React.createElement(...) calls.

When creating components, you have the choice between two different ways:

Functional components (also referred to as "presentational", "dumb" or "stateless" components - more about this later in the course) => const cmp = () => { return <div>some JSX</div> } (using ES6 arrow functions as shown here is recommended but optional)

class-based components (also referred to as "containers", "smart" or "stateful" components) => class Cmp extends Component { render () { return <div>some JSX</div> } } 

We'll of course dive into the difference throughout this course, you can already note that you should use 1) as often as possible though. It's the best-practice. [2]

___

* If you use curly braces within tags you can execute one line expressions.
* Passing props as an attribute. 
* Passing children through props.
* Creating and accessing state property in the App class.
* Methods and onClick handler.
* How to update state: the states merge preserving the data that hasn't been overwriten.
* Using functional components vs classes: useState() Hook for state manipulation. With hooks the state is not merged, but replaced.
* Stateless/Presentational/Dumb vs Stateful/Containers/Smart components. Use a lot of the first and a lot less of the second.
* Passing method references between components. Use bind instead of function syntax, since the latter executes to often and is inefficient.
* Adding two way binding. 
* Adding styleing with stylesheets.
* Rendering content conditionally. React is purely JS, so we don't use HTML directives to conditionally display something, but JS logic. In this case a ternary operator. 
* Handling dynamic content "The JavaScript Way".
* Outputting lists.
* Lists and state.
* Updating state immutably, without mutating the original state. With the help of creating copy of the state array with a spread operator. 
* For react to update lists efficiently, instead of rerendering the whole list, the elements need to have a key that is a unique ID. This cannot be an index, since index changes as we add and remove items. 
* Flexible lists: how to make components have individual input fields, independent of each other. 
* Setting styles dynamically (Javascript style).
* Setting class names dynamically.
* Adding and using Radium. Radium is a set of tools to manage inline styles on React elements. It gives you powerful styling capabilities without CSS [3]. Allows use of pseudo selectors and media queries.
* Enabling CSS modules. CSS files in which all class names and animation names are scoped locally by default.

>This is what is meant by styles being scoped. They are scoped to particular templates. If we have a buttons.css file we would import it only into a buttons.js template and a .btn class within would be inaccessible to some other template (e.g. forms.js), unless we imported it specifically there too.[4]

* Adding pseudo selectors.
* Working with media queries. 
* Debugging. Logical errors that give no error message. How to navigate source maps (code you originallywrote that is not the one running in the browser) in that case using stop and step by step chrome debugger.
* React Developer Tools. Elements in chrome show the DOM elements, while React Dev Tools show the components, as well as props, and state.
* Error Boundaries to show custom error message instead of having whole application fail; the app will still run, only the problem components will be replaced by the error message. Works only in production. Don't wrap everything in it, just the parts that are likely to fail. 
* Reworking app for a better project structure: splitting into more components.
* Stateful components used to be the class based components, but functional components as of late can also manage state through state hooks. Presentational component is a functional component that does not manage state; these should be the majority of your components. By seperating stateful into containers you keep your app manageable. 

>Essentially, a class is a way of grouping functions (as methods) and data (as properties) into a logical unit revolving around a certain kind of thing. If you don't need that grouping, there's no need to make a class. [5]

* [Hooks section]

* Using the Effect Hook. Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.If you’re familiar with React class lifecycle methods, you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.[6]

* Why it doesn't make sense to wrap every component in shouldComponentUpdate and React.memo. If your component depends on data passed from parent and needs to update when the parent updates in most of your components and you run checks all them, you're running unnecesary code all the time that will slow down your app.
* If the reference to functions might also change, you should include nextProps.changed or nextProps.clicked checks in shouldComponentUpdate as well.
* So if you need to check for all the props instead then don't use shoudComponentUpdate and use PureComonent which automatically checks for update on any props.
	import React, {PureComponent} from 'react';
	class Persons extends PureComponent {
	}
* render() does not render directly to the DOM, it's a suggestion on what HTML should look like on the DOM. 
* [rewatch]
* React has 2 versions of the virtual DOM, it compares the future one to the real one and only rerenders if differences are found. 
* Instead of wrapping everything in one div, you can put it in an array, seperate tags with commas, and add a key to each tag. This will have a use case later, when we don't have to redundantly add an extra div around just because React forces us to.
* HOC (higher order component) and Aux.js. Use <Aux> (and empty component) to wrap all the elements. Use props.children to output the contents within. React 16.2 has a built in Aux component called <React.Fragment>. Or import React, {Component, Fragment} from 'react'; and just use <Fragment>
* WithClass component is an HOC component that will have a passed in class property. General concept that you have a component that wraps other components, that adds something to it.
* Another form of HOC can be a function with passed in component and a class, and it can return a function. In this case import it with lower case name, because it's not a component anymore it's a function that returns a component function. So wrap your tags in Aux instead but use this:
	export default withClass(App, classes.App);\
This form should be used if there is added logic, the other one when changes are made to JSX. But this is ultimately a semantical thing and is up to you.
* <WrappedComponent {...props}> is how you pass props to your HOC component.
* If you have a counter and you depend on the old state to update the state you shouldn't call this.state.counter + 1 in the setState, reason being this is not guaranteed to work. Use special syntax in this case:
 this.setState((prevState, props) => {
		return {
			persons: persons,
			changeCounter: prevState.counter + 1
		}
	})
* prop-types plugin is helpful if you distribute your app as a component library to the team. Specifying the props and their types will give an error if they accidentally pass in the wrong data.
* Using Refs
* Using Refs with React Hooks
* Understanding Prop Chain problems
* Using Context API to pass data from very top to very bottom, without having to pass it through intermediate layers. Wrap all components that need access to this info in AuthContext created. This still allows you to use state, which you need because the component will only update when the state updates.
* contextType for class based components and useContext() for functional
* Useful Resources & Links on all that was covered here


[1] [React vs Vue.js Comparison of Popular Frameworks](https://dzone.com/articles/reactjs-vs-vuejs-comparison-of-popular-frameworks)    
[2] [React Course with Maximilian on Udemy](https://www.udemy.com/react-the-complete-guide-incl-redux/)  
[3] [Radium](https://github.com/FormidableLabs/radium)  
[4] [What are CSS Modules and why do we need them?](https://css-tricks.com/css-modules-part-1-need/)  
[5] [Classes vs. Functions](https://stackoverflow.com/questions/18202818/classes-vs-functions)  
[6] [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html)