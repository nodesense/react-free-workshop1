// Cart.js

import React, {Component} from "react";
import PropTypes from "prop-types";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

// pure function, easy to test
// not using props
const recalculate = (prevState, props) => {
    let count = 0, 
        amount = 0;

    for (let item of prevState.items) {
        amount += item.price * item.qty;
        count += item.qty;
    }
    // new state
    return {
        count,
        amount
    }
}

const empty = (prevState) => {
    // TRY NOT use this here
    return {
        items: [] // immutable
    }
}

class Cart extends Component {
    static defaultProps = {
    
    }

    static propTypes = {
    
    }
    constructor(props) {
        super(props);

        // hold original state, 
        // pass this data to child component as props
        this.state = {
            items: [ 
            			{id: 1, name: 'Product1', price: 100, qty: 10}
            	   ],
            amount: 0, // sum of all items price * qty
            count: 0, // sum of all items qty
            flag: true // dummy, to force render call via setState
        }

        // use constructor only for initialization

        // BAD: write, invoke business logic/computation here
    }


    //LEGACY
    // creation life cycle
    // before first render/creation time render
    // can be replaced using getDerivedStateFromProps - new life cycle method
    UNSAFE_componentWillMount() {
        // business logic/invoke business logic sync
        // UNSAFE due async code async call, we don't when async shall return
        // it may return before event loop batch update
        // functional setState
        this.setState(recalculate); 
    }
    
    addItem = () => {
        let id = Math.ceil(Math.random() * 10000);
        let item = {
            id,
            name: `Product ${id}`,
            price: Math.ceil(Math.random() * 100),
            qty: 1
        }

        this.setState( (prevState) => {
            return {
                items: [...prevState.items, item]
            }
        })

        this.setState(recalculate); // amount/count
 
    }
    
    removeItem = (id) => {
        //TODO
        console.log('RemoveItem called', id);
        this.setState( (prevState) => {
            return {
                items: prevState.items.filter(item => item.id !== id)
            }
        });

        this.setState(recalculate);
    }

    updateItem = (id, qty) => {
        //TODO
        console.log('updateItem called', id, qty);

        this.setState ( prevState => {
            return {
                items: prevState.items.map (item => {
                                                if (item.id === id) {
                                                    return {...item, qty}
                                                };

                                                return item;
                                            })
            }
        })

        this.setState(recalculate);
    }

    empty = () => {
        this.setState(empty)
        this.setState(recalculate)
    }

    //dummy
    refresh = () => {
        // has state for some other component, search component, other others
        // this shall not impact cartlist, cart item, cart summary 
        this.setState({
            flag: true
        })
    }

    // derived data from state
    // functional setState
   

    //TODO:
    //componentWillMount
    
    
    render() {
        // should not write any business/invoke business logic
        console.log("Cart render")
        return (
            <div> 
            <h2>Cart</h2>

            <button onClick={this.addItem}>
                Add Item
            </button>


            <button onClick={this.empty}>
                Empty
            </button>

            <button onClick={this.refresh}>
                Refresh
            </button>
            

            <CartList  items={this.state.items}  
                       removeItem={ this.removeItem }
                       updateItem={this.updateItem}
            />

            <CartSummary amount={this.state.amount}
                         count = {this.state.count}
            />

            </div>
        )
    }
} 




export default Cart;