import React from 'react';
import HomePage from './pages/homepage'
import './App.css';

import {
  Route, Link 
} from "react-router-dom";



function App() {
  return (
    // <HomePage />
    <div>
      <Route exact path='/' component={HomePage} />
      <Route  exact path='/hats' component={HatsPage} />
    </div>
  ); 
}

export default App;

const TopicDetailsPage = (props) => {
  console.log(props); return (<div> <h1>Topic Details Page: {props.match.params.topicId}</h1></div>)}
const TopicsPage = (props) => {
  console.log(props); return (<div><Link to='/topics' >
    Details
      </Link><h1>Topics Page</h1></div>)
}
const TopicsListPage = (props) => {
  console.log(props);
  return (
    <div>
      
      <h1>Topics List Page</h1>
    </div>)
}

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>

      <h1>Hats Page</h1>
    </div>)
}
