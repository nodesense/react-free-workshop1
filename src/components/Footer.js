//src/components/Footer.js
import React from 'react';
// as dependencies to react already
import PropTypes from 'prop-types';
import Address from './Address';

// functional component shall recive props as function arg
// notably first argument, props
// <Footer year={2020} company="NodeSense" />
// props is an object {year: 2020, company: 'NodeSense'}
function Footer(props) {
    console.log('Footer props', props);

    // RULE 1
    // props are immutable
    // BAD, the data comes from props are owned by parent component
    // syntactical error
    // props.year = 2021; // Writing to read only property
    // props.branches = ['AUS']; // synctactical error with setter

    // WORST practice
      // props.branches is not immutable
      //props.branches.push ('AUS') ; // it WORKS/ WORST

    // changes to props should be done by parent component
    

    return (
        <div>
            <hr />
            <p>Copyrights {props.company.toUpperCase()}, @ {props.year}</p>

            {props.children}

            {props.isOpen ? <p>Open</p>: <p>Closed</p>}

            {/* no for loop */}
            {
                props.branches.map ( name => (
                                        <span>{name}&nbsp;</span>
                                    ))
            }

            <Address address={props.addresses.headOffice} />
            <Address address={props.addresses.branchOffice} />
            <Address address={props.address} />


        </div>
    )
}

// ES5 synctic, static/functional 
// react keyword propTypes
Footer.propTypes = {
    // enforce the datatypes correct 
    // enforce the mandatory/optioanl props
    year: PropTypes.number.isRequired, // mandatory
    company: PropTypes.string, // optional
    branches: PropTypes.array.isRequired,
    address: PropTypes.shape({
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        pincode: PropTypes.number
    }).isRequired
}

// default, what if parent component doens't pass the data
// default/place holder values to avoid crash/blank ui
// keyword
// used when parent doens't pass the props
Footer.defaultProps = {
    company: 'NodeSense'
}

export default Footer;