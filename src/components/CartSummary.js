// CartSummary.js
import React, {Component} from "react";
import PropTypes from "prop-types";

//TODO: PropTypes

// assume, this is expensive function, time/space complexity
const recalculate = (prevState, props) => {
    console.log('starting expensive computation engine ..')
    let discount = 0;

    if (props.count >= 10) {
        discount = 20;
    } else if (props.count >= 5) {
        discount = 10;
    }

    let grandTotal = props.amount - (props.amount * discount / 100);

    return {
        discount, 
        grandTotal
    }
}

// TODO: PureComponent
 class CartSummary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            discount: 0,
            grandTotal: 0
        }
    }
 
    // // Mounting/ creation life cycle
    // UNSAFE_componentWillMount() {
    //     this.setState(recalculate);
    // }
    // //TODO: componentWillMount

    // // called on update life cycle
    // // called whenever parent render called
    // // use case: when parent props got changed, this component need to recompute 
    // // its own state.
    // // can be replaced by using getDerivedStateFromProps
    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     console.log('CartSummary UNSAFE_componentWillReceiveProps current props', this.props);
    //     console.log('next props', nextProps);
    //     // derived new state out of it.
    //     // memoizez / cache
    //     // redux - reselect
    //     this.setState(recalculate);
    // }


    //TODO: componentWillReceiveProps, recalculate 
 
    //TODO: shouldComponentUpdate


    // called on update state
    // doesn't call on creation state
    // stop the render functionalities based on  return output
    // sync method
    // called whenever parent render called
    // whenever this.setState called
    // doesn't called on forceUpdate
    // returns true --> react calls render function on update cycle
    // returns false -> react doesn't call render function
    // if render is not called,
                // v.dom not created
                // diff not needed
                // nothing to patch

    // if render called unnessarily, no change in data
                // v.dom are created
                // deep diff performed
                // GC, memory
                // nothing to patch
    shouldComponentUpdate(nextProps, nextState) {
        console.log('CartSummary shouldComponentUpdate');
        console.log('this.props', this.props, 'nextProps', nextProps);
        console.log('this.state', this.state, 'nextState', nextState);
        
        // you could improve with visitor patterns or by using PureComponent
        // not scalable
        // immutable, data with Clone
        // a with b
        // a with a -- always true
        return  nextProps.count !== this.props.count || 
                nextProps.amount !== this.props.amount || 
                nextState.grandTotal !== this.state.grandTotal || 
                nextState.discount !== this.state.discount;
    }

    // called during creation,
    // called during update cycle
    // static function, no access to this
    // functional/pure function
    // not possible to any asyn, including  api calls, it should be sync
    static getDerivedStateFromProps(props, state) {
        return recalculate(state, props)
    }

    applyLuckyCoupon = () => {
        // no change in current state
        // trigger render/ waste
        this.setState({lucky: false});
        // this.forceUpdate(); // this will not shouldComponentUpdate
    }
     

    // render should either state or props, context but new context apis
    // no globals
    render() {
        console.log("CartSummary Render");
        return (
            <div> 
            <h2>Cart Summary</h2>
            <p> Amount : {this.props.amount} </p>
            <p> Count : {this.props.count} </p>

            <p> Discount: {this.state.discount} %</p>
            <p> Grand Total: {this.state.grandTotal} </p>

            <button onClick={this.applyLuckyCoupon}>No Luck</button>
            </div>
        )
    }
} 


CartSummary.defaultProps = {
    
}

CartSummary.propTypes = {
    
}

export default CartSummary;