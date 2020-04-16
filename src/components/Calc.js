// src/components/Calc.js

import React, {Component} from 'react';

class Calc extends Component {
    constructor(props) {
        super(props);
        // State
        this.state = {
            a: 0,
            b: 0,
            result: 0
        }
    }

    // dependent setState issues/solutions
    // solve using setState callback
    // cons: calls render again from callback
    // Problem: render called twice
    incrementA = () => {
        // with in same event execution/callstack, you can setState as many times
        // render called only one

        console.log('incrememtA before', this.state);
        // change the value a, then do something to update result in second step
        // solution 1: use the setState callback, not to use much in the project
        console.log('setState incrementA')
        this.setState({
            a: this.state.a + 1,
            // result: this.state.b + this.state.a + 1, // second setState to update
        },  () => {
            // callback, called after the state attributes merged, 
            // updated current state,
            // called after render
            // we can see updated state
            console.log('incrememtA setState Callback ', this.state);
            console.log('increment A result setState')
            // Work, for the dependent setState
            // Cons/drawback: calls the render function again
            // callback, is invoked on separate callstack
            this.setState({
                result: this.state.a + this.state.b
            })
        })
        // change the result

        // BUG, will not work, because this.state.a is not yet updated, due to async
        // this.setState({
        //    result: this.state.b + this.state.a
        // })
        console.log('incrememtA after', this.state);
        console.log('incrementA END..');
    }

    // solve the dependent setState
    // using React FUNCTIONAL setState - GOOD
    // 
    incrementB = () => {
        console.log('incrememtB before', this.state);

        // setState will take a function as first arg, instead of setState({})
        // NOT BE Confused with previous one
        // the function shall be called by react
        // prevState is passed as input, first parameter
        // returns a new state
        // async, means, the new state eventually merged with current state, later
        // the function provided is not invoked in the same event cycle
        // invoked before render function call, at the end of the event loop

        // first function setstate shall receive current state as input
        // return new state
        this.setState((prevState, props) => {
            console.log('functional setState prevState ', prevState);
            return {
                b: prevState.b + 1
            }
        })

        // new state returned by prev func setState is passed as input
        // result of prev function is passed as input here
        // end result shall be merged with currentState
        this.setState( (prevState) => {
            console.log('Second function update result setstate ', prevState);
            return {
                result: prevState.a + prevState.b
            }
        })

        console.log('incrememtB after', this.state);
    }

    // the first argument is an event object
    // preventDefault, stopProbagation // stop event bubble up
    // synthetic event, event pool, react is reusing the event object
    reset = (event) => {
        console.log('Reset ', event);
        this.setState({
            a: 0,
            b: 0,
            result: 0
        })

        //print callstack
        console.trace() ; // not to be used across cross browser
    }

    divClick = (event) => {
        console.log('divClick ', event);
        console.trace(); //// not to be used across cross browser

        // this.setState({
        //     flag: true
        // })
        this.forceUpdate();
    }

    bubble  = (event) => {
        event.stopPropagation();
        //preventDefault()
        console.log('bubble button click');
        this.forceUpdate();

    }

    render() {
        console.log('Calc render state ', this.state);

        return (
            <div>
                <h2>Calc</h2>

                <p>A : {this.state.a}</p>
                <p>B : {this.state.b}</p>
                <p>Result: {this.state.result}</p>

                <button onClick={this.incrementA}>Incr A</button>
                <button onClick={this.incrementB}>Incr B</button>

                
                    <button onClick={this.reset}>Reset</button>

                <div onClick={this.divClick}>
                <button onClick={this.bubble}>Bubble</button>

                </div>

            </div>
        )
    }
}

export default Calc;