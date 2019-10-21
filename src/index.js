import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";

const hatsPage =()=>(<div><h1>HATS Page</h1></div>)

ReactDOM.render(<Router>
   <App />
</Router>,
   document.getElementById('root'));


