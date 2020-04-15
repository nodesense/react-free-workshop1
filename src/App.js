//src/App.js
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Counter from './components/Counter';

// called by react
// create v.dom and return v.dom
// Application is a component

// Composition
// App component contains Header component
// We can put Class/functional component into class/functinal component
// if App component destroyed, Header/Children comp destroyed
// Relationship: App is parent component
//               Header, Footer are children component of App
function App() {
    console.log('App render');
    return (
        <div>
           <Header />

            <Counter startValue={100} />
            

            <Home />
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

export default App;