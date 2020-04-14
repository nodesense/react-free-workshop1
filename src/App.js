//src/App.js
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

// called by react
// create v.dom and return v.dom
// Application is a component

// Composition
//   App component contains Header component
// if App component destroyed, Header/Children comp destroyed
// Relationship: App is parent component
//               Header, Footer are children component of App
function App() {
    console.log('App render');
    return (
        <div>
           <Header />
            <Home />
           <Footer year={2020}
                   company="NodeSense" 
                   isOpen
                   branches= { ['IN', 'UK', 'USA']  }

                   address = { {city: 'Bangalore', state: 'KA'}  }
                   />
        </div>
    )
}

export default App;