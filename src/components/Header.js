//src/components/Header.js
// mandatory whenever JSX is used
import React from 'react';

import {Link, 
        NavLink} from 'react-router-dom';

// babel convert your code into React.createElement

// navigation/title
// Name should start with Caps, 
// if not, JSX issue/convention
function Header() {
    console.log('Header render called');
    return (
        <div>
            <h2>React App</h2>

            {/* NavLink follows startWith patten
                should not use <a href="/" since by defalut browser leave the page
            */} 
            <NavLink to="/" exact className='button' activeClassName='warning'> Home </NavLink>
            <NavLink to="/calc" className='button' activeClassName='warning' > Calc </NavLink>
            <NavLink to="/counter" className='button' activeClassName='warning'> Counter </NavLink>
            <NavLink to="/cart" className='button' activeClassName='warning'> Cart </NavLink>
            <NavLink to="/products" className='button' activeClassName='warning'> Products </NavLink>
            <NavLink to="/checkout" className='button' activeClassName='warning'> Checkout </NavLink>

            <hr />
        </div>
    )
}

export default Header;