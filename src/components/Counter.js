// src/components/Counter.js
import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Class component
// Class vs Func ==> Tomorrow

//class Counter extends Component
// if the component class, react will create instance for the class automatically
// component is a component class instance 
class Counter extends React.Component {
    // ES.NEXT, safe to use
    // ES Stage 2
    // possible only in class component
    static propTypes = {
        startValue: PropTypes.number //optional
    }

    //default value
    static defaultProps = {
        startValue: 0
    }

    // react pass the props to the constructor 
    constructor(props) {
        // ES6, if you extend a base class, you call base class constructor
        super(props); // passing props assing this.props = props
        console.log('counter props in cons', this.props);
        // this.myfunc();

        //state: component internal data
        //        mutate - the data can be changed/updated
        //        components own data
        //        attached component instance, this.state, should be object type {}
        // state is keyword
        this.state = {
            counter: this.props.startValue, // mutate , initialize state from props, first time
            name: 'React Course Registration',
            flag: true
        }; // many life cycle event, when the state should be updated

        // component should should go into state, not like below
        //this.name = 'Krish'; // BAD
        //this.course = 'React'; // BAD
    }

    myfunc() {
        console.log('myfunc props', this.props)
    }

    //es5 bind
    //es6 with arrow func render
    // JS, what is this, this in context -- self study

    //es6 next/stage 2
    // this in context
    // safer for event
    // WARNING: Contains bad practices
    increment = () => {
        console.log('increment called before', this.state.counter);
        //BAD/WORST
        // REACT V.DOMs are stateless, no data binding
        // REACT doesn't track the data/data changes
        // REACT IS VIEW
        // NOT Model or Controller
        this.state.counter++; // Mutating State directly

        // my model data got changed
        // tell react framework that we have updated UI

        // to tell react to call render function
        // async call
        // react has internals, event loop, 
        // react eventually will render for sure
        // should not be used
        // should be used in limited use cases
        // BAD practice
        this.forceUpdate();  // keyword, will not go thourhg shouldComponentUpdate()
        console.log('increment called after', this.state.counter);

       // this.render(); // NO USE we get v.dom?
    }


    //GOOD practices to manage state
    decrement = () => {
        console.log('decrement called before', this.state.counter);
        
        //setState keyword
        // update the state
        // async
        // eventually it will update the state, not immediately
        // will set the state, tell react to call render function
        // setState will take new state, merge with current state, eventulally become new state
        // queue it for batch update
        // 
        // GOOD
        this.setState({
            //key/value
            // update existing one
            counter: this.state.counter - 1,
            //set new state attribute OK
            isProgress: true
        })

        console.log('decrement called after', this.state.counter);
    }



    // State, Lifecycle - tomorrow

    //react keyword
    // called by react framework
    // create and return v.doms
    // mandatory
    // whenever render called, we are creating v.dom, return v.doms
    // for real, it patches only what is changed
    render() {
        // how the class component instance will receive props?
        // this.props is keyword
        console.log('Counter render props ', this.props);

        console.log('Counter render state ', this.state);

        return (
            <div>
                <h2>Counter</h2>
                <p>Start Counter Value Props : {this.props.startValue}</p>
                <p>Counter State {this.state.counter}</p>

                {/* onClick is react event, 
                    event loop 
                    render is associated with event loop
                    */
                }

                <button onClick={this.increment}>Incr</button>
                <button onClick={this.decrement}>Decr</button>
            </div>
        )
    }
}

// ES5 way,similar to functional component
//Counter.propTypes = {}
// Counter.defaultValues  = {}


export default Counter;