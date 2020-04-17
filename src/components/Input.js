import React, {Component} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    // static getDerivedStateFromProps(prevState, props) {
    //     return {

    //     }
    // }

    handleChange = (e) => {
        const {target} = e;
        const {name, value} = target; // target is input REAL dom element
        console.log(name, value)

        // take the input value and update the setState
        this.setState({
            value: value
        })
    }

    onLeaveFocus = (e) => {
        console.log('lost focus');
        // custom props
        const event = {
            target: {
                name: this.props.name,
                value: this.state.value
            }
        }

        // parent onChange, calls the original on change
        this.props.onChange(event)
    }

    render() {
        // rest of props without value attribute
        // not using handleChange comes from parent here
        const {value, onChange, ...props} = this.props;
        return (
            <input onChange={this.handleChange} 
                     {...props}
                     value={this.state.value}   
                     onBlur={this.onLeaveFocus}
                    />
        )
    }

}

export default Input;