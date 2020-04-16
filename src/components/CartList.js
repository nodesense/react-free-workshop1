// CartList.js

import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import CartItem from "./CartItem";

 //TODO: PureComponent implements shouldComponentUpdate

 class CartList extends PureComponent {
    constructor(props) {
        super(props);
    }
     
    //TODO: shouldComponentUpdate
    
    render() {
        console.log("CartList Render");

        let {items, 
            updateItem,
            removeItem } = this.props;

        return (
            <div> 
            <h2>Cart List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* TODO props items map with CartItem
                        key is react word
                        for helping react diff function
                        based on unique key

                        react uses key before step into deep comparison
                    */ }
                    {
                        items.map (item => (
                            <CartItem key={item.id} 
                                      item = {item}
                                       removeItem={removeItem}
                                       updateItem={updateItem}
                            />
                        ))
                    }
                </tbody>
            </table>
            </div>
        )
    }
} 

CartList.defaultProps = {
    
}

CartList.propTypes = {
    
}

export default CartList;