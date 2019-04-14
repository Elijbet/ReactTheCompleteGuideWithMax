## Course Notes:

* React folder structure.
* JSX is actually JS and not html. JSX is syntactic sugar. If we didn't use JSX, we'd have to use React.createElement for each tag. Gets out of hand easily.
* JSX vs HTML. React uses JSX – a declarative JavaScript XML which allows developers to write components leveraging the power of JavaScript, while Vue.js uses HTML templates to create views [1].
* There’s a Babel plugin to use JSX with Vue, getting us back to a syntax that’s closer to templates.

 ### Components & JSX Cheat Sheet
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

[1] [React vs Vue.js Comparison](https://dzone.com/articles/reactjs-vs-vuejs-comparison-of-popular-frameworks)  
[2] [React Course with Maximilian on Udemy](https://www.udemy.com/react-the-complete-guide-incl-redux/)