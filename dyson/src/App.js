import './App.css';
import React from 'react';
import Header from './Header.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import Checkout from "./Checkout";
// import Login from './Login.js';
import { auth } from "./firebase.js";
import { useStateValue } from "./StateProvider.js";

function App() {

  
  useEffect(() => {
    //will only run once when the app component loads... if the input is left blank
    // effect
    // return () => {
    //   cleanup
    // }
    auth.onAuthStateChanged(authUser => {
      console.log("The User is >>>", authUser);
    
      if(authUser){
        //the user just/was logged in

        dispatch({
          type:'SET_USER',
          user: authUser
        })

      } else {
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })  
  }, [])


  return (
    <Router>
      <div className="app"> 
        {/*/app not App according to BEM naming convention.*/}

        {/*HEADER*/}
        <Header />

        <Switch>

          <Route path="/login">
            {/* LOGIN PAGE */}
            {/* <Login/> */}
          </Route>
             
          <Route path="/checkout">
            {/* CHECKOUT PAGE */}
            <Checkout/>
          </Route>

          <Route path="/">
            {/* HOME */}
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
