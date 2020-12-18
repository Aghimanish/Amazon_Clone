import React, {useEffect} from 'react';
import "./App.css";
import Header from './Header';
import Home from "./Home";
<<<<<<< HEAD
import Login from "./Login"
import Checkout from "./Checkout";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {auth} from "./firebase";
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads....
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>>>>>>>", authUser);
      if(authUser){
        // the user just logged in / the user was logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        }) 
      }else{
        // the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [])
  return (
    <Router >
      <div className="app">
        <Switch>
          <Route path="/login">
              <Login />
          </Route>
        <Route path="/checkout">
          <Header />
            <Checkout />
          </Route>
          <Route path="/">
           <Header />
=======
import Checkout from "./Checkout";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {

  return (
    <Router >
      <div className="app">
       <Header />
        <Switch>
        <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
>>>>>>> b435964569b0a8456552fcda9a54e4b85f2078f3
            <Home />
          </Route>
          
        </Switch>
             
      </div>
    </Router>
    
  );
}

export default App;
