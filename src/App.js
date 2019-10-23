import React from 'react';
import HomePage from './pages/homepage'
import './App.css';
import Header from './components/header/header'
import {
  Route, Link, Switch
} from "react-router-dom";



function App() {
  return (
    <div>
    <Header />
    <Switch>
    
      <Route exact path='/' component={HomePage} />
      {/* <Route path='/sneakers' component={TopicDetailsPage} />
      <Route exact path='/mens' component={TopicsPage} />
      <Route path='/womens' component={TopicsListPage} /> */}
    </Switch></div>
  ); 
}

export default App;

const TopicDetailsPage = (props) => {
  // console.log(props);
  return (<div> <h1>sneakers Page: {props.match.params.topicId}</h1></div>)
}
const TopicsPage = (props) => {
  // console.log(props);
  return (<div><Link to='/womens' >
    Chicks
      </Link><h1>Mens</h1></div>)
}
const TopicsListPage = (props) => {
  // console.log(props);
  return (
    <div>
      
      <h1>Womens</h1>
    </div>)
}

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>

      <h1>Hats Page</h1>
    </div>)
}
