//src/components/Address.js
import React from 'react';

// props = { address: {city, state}}
function Address(props) {
    console.log('Address props', props)
    return (
        <div>
            <p>Address</p>
    {props.address && props.address.city && <p>city: {props.address.city} </p> }
            <p>state: {props.address.state} </p>
        </div>
    )
}

export default Address;