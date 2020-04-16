//src/App.js
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Counter from './components/Counter';
import Calc from './components/Calc';

import Cart from './components/Cart';

// called by react
// create v.dom and return v.dom
// Application is a component

// Composition
// App component contains Header component
// We can put Class/functional component into class/functinal component
// if App component destroyed, Header/Children comp destroyed
// Relationship: App is parent component
//               Header, Footer are children component of App
class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          startValue: 0
      }
  }

  // define function in the parent component
  // pass the function as a callback through props to child component
  reset = () => {
      console.log('reset called by child');

     this.setState({
         startValue: 0
     })
  }

  submit = (value) => {
      console.log('called by child ', value)
    this.setState({
        startValue: value
    })
  }

  render() {
    console.log('App render');
    return (
        <div>
           <Header />

           <Cart />

            <p>App startValue {this.state.startValue}</p> 
{/* 
            <Counter startValue={this.state.startValue} 
                     reset={this.reset}
                     submit={this.submit}           
            />

            <Calc />            
            <Home /> */}
           <Footer year={ 2020 }
                    
                   isOpen
                   branches= { ['IN', 'UK', 'USA']  }

                   address = { {city: 'Bangalore', state: 'KA', pincode: 560062}  }

                   addresses = {
                           {
                               headOffice: {city: 'Bangalore', state: 'KA'},
                               branchOffice: {city: 'Chennai', state: 'TN'},
                           }
                   }
                   />
        </div>
    )
}
}

export default App;