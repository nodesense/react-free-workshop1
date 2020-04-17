import React from 'react';

import Input from './Input';

class Checkout  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Gopalakrishnan',
            email: '',
            phone: ''
        }
    }


    handleChange = (e) => {
        const {target} = e;
        const {name, value} = target; // target is input REAL dom element
        console.log(name, value)

        // take the input value and update the setState
        this.setState({
            [name]: value
        })
    }

    onLeaveFocus = (e) => {
        console.log('lost focus');
    }

    render() {
        console.log('Checkout render', this.state)
        return (
            <div>
                <h2>Checkout</h2>
                <form>
                    Name 
                    <Input name="firstName" type="text" 
                           value={this.state.firstName} 
                           onChange={this.handleChange}
                            />

                    Email
                    <input name="email" type="text" 
                            value={this.state.email} 
                            onChange={this.handleChange}
                            />

                    Phone
                    <input name="phone" type="text" 
                            value={this.state.phone} 
                            onChange={this.handleChange}
                            />

                    <pre>
                        {JSON.stringify(this.state, null, 4)}

                    </pre>
                </form>
            </div>
        )
    }
}

export default Checkout;