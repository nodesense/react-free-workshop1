// first file to be loaded into browser

import ReactDOM from 'react-dom';
import React from 'react';

//webpack, extract text, css, post
import "./index.css";
// no curly brace, default import
import App from './App';

console.log('starting react');

// bootstrap react into browser
ReactDOM.render(<App />, 
                document.getElementById('root') );