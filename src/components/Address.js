//src/components/Address.js

// props = { address: {city, state}}
function Address(props) {
    return (
        <div>
            <p>Address</p>
            <p>city: {props.address.city} </p>
            <p>state: {props.address.state} </p>
        </div>
    )
}

export default Address;