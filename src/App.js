import React from 'react';
import HomePage from './pages/homepage'
import Shop from './pages/shop/shop'
import './App.css';
import Header from './components/header/header'
import {
  Route, Link, Switch
} from "react-router-dom";
import LoginPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth } from './components/firebase/utils';


class App extends React.Component {
  
  state = {
    currentUser:null
  } 

  unSubscribeFromAuth = null;
  
  componentWillUnmount() {
    this.unSubscribeFromAuth() 
  }
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      console.log('-user- ', user)

      this.setState({currentUser:user})
    })
  }
  
  render() {
    return (
    <div>
    <Header currentUser= {this.state.currentUser} />
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
       <Route path='/signin' component={LoginPage} />
    </Switch></div>
  ); }
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
