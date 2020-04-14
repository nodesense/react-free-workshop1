// src/components/Home.js
import React from 'react';

// JSX - JavaScript + XML
// It is not full JavaScript
// not full XML 
// Inside JSX - {} - expression, any valid javascript expression 
// <!-- comment --> this will not work inside JSX

//es6
const add = (a, b) => a + b 

// In JSX- true/false
// We cannot write statements inside JSX
// Statement? if..else, for, while
// JSX allows only expression
// how to write if condition
function Home() {
    return (
        <div>
            {/* Comment in JSX  */}
            <p>Welcome to product store</p>
            <p>number: {10}</p>
            <p> number exp : {10 + 5} </p>
            <p> func call : { add(10, 30)} </p>
            <p>Boolean True {true.toString()} </p>
            <p>Boolean False {false.toString()} </p>
            <p> { "Hello" + "world" }</p>

            {
                /* if condition */
                (10 % 2  == 0) && <p>Even Number</p>
            }

            {
                /* if else ternary ? */ 
                (9 % 2 == 0) ? <p>Even</p>: <p>Odd</p>
            }

        </div>
    )
}

export default Home;