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

    // State, Lifecycle - tomorrow

    //react keyword
    // called by react framework
    // create and return v.doms
    // mandatory
    render() {
        // how the class component instance will receive props?
        // this.props is keyword
        console.log('Counter render ', this.props);
        return (
            <div>
                <h2>Counter</h2>
                <p>Start Counter : {this.props.startValue}</p>
            </div>
        )
    }
}

// ES5 way,similar to functional component
//Counter.propTypes = {}
// Counter.defaultValues  = {}


export default Counter;