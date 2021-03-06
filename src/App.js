//src/App.js
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Counter from './components/Counter';
import Calc from './components/Calc';
import ProductList from './components/ProductList';

import Loadable from 'react-loadable';

// import Cart from './components/Cart';


import {BrowserRouter as Router,  // alias
        Route,
        Link,
        NavLink,
        Redirect,
        Switch } from 'react-router-dom';
import Checkout from './components/Checkout';


// dynamic import/lazy/code spliting
const LoadableCart = Loadable({
    // does code split automatically, it will separate bundle
    loader: () => import('./components/Cart'),
    loading: () => (<h2>Loading....</h2>)
})

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
        <Router >
          <div>
           <Header />

            {/* routes works based on pattern matching
                startsWith subpath default behaviour

                exact props - exact equal '/' === '/'
                    default, nested navigation
                    exact is safe to give
            */}

        {/* switch pick the first match, 
        your routing should order 
        */}
        <Switch >
           <Route path="/" component={Home} exact />
 
           <Route path="/cart" >
               <LoadableCart />
           </Route>   

           <Route path="/products" >
               <ProductList />
           </Route> 

           <Route path="/counter"  >
                {/* pass content children props */ }
                <Counter startValue={this.state.startValue} 
                     reset={this.reset}
                     submit={this.submit}           
                />
           </Route> 

           <Route path="/calc"
                  render = { (props) => <Calc {...props} /> }   />

            {/* wild card, should be at the end, 
                matches all the routes */}

            <Route path="/checkout">
                <Checkout />
            </Route>
                   
            <Route path='*'>
                <h2>Page not found</h2>
            </Route>
           
            </Switch>


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
            >
             {/* content children 
                 react ignore at first
                 passes the content children to props as props.children
             */}
             <p>Operating Hours: 9:00 to 5:00 PM</p>
             <p>Sat, Sun Holiday</p>

            </Footer>



        </div>
        </Router >
    )
}
}

export default App;