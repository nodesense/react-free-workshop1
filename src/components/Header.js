//src/components/Header.js
// mandatory whenever JSX is used
import React from 'react';

// babel convert your code into React.createElement

// navigation/title
// Name should start with Caps, 
// if not, JSX issue/convention
function Header() {
    console.log('Header render called');
    return (
        <div>
            <h2>React App</h2>
            <hr />
        </div>
    )
}

export default Header;