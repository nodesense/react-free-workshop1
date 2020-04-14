//src/components/Footer.js
import React from 'react';

// functional component shall recive props as function arg
// notably first argument, props
// <Footer year={2020} company="NodeSense" />
// props is an object {year: 2020, company: 'NodeSense'}
function Footer(props) {
    console.log('Footer props', props);

    return (
        <div>
            <hr />
            <p>Copyrights {props.company}, @ {props.year}</p>
            {props.isOpen ? <p>Open</p>: <p>Closed</p>}

            {/* no for loop */}
            {
                props.branches.map ( name => (
                                        <span>{name}&nbsp;</span>
                                    ))
            }
        </div>
    )
}

export default Footer;