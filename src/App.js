import React from 'react';
import HomePage from './pages/homepage'
import Shop from './pages/shop/shop'
import './App.css';
import Header from './components/header/header'
import {
  Route, Link, Switch
} from "react-router-dom";
import LoginPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './components/firebase/utils';


class App extends React.Component {
  
  state = {
    currentUser:null
  } 

  unSubscribeFromAuth = null;
  
  componentWillUnmount() { 
    this.unSubscribeFromAuth() 
  }
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

       if(userAuth){ const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snap => {
            this.setState({ 
              currentUser: {
                id: snap.id,
                ...snap.data()
              }
            }, ()=>console.log('setstate Final', this.state))
          })
       }
      this.setState({currentUser:userAuth})
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
