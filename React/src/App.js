import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom';
import './App.css';
import RegisterPage from './authPages/RegisterPages/RegisterPage';
import LoginPage from './authPages/LoginPage/LoginPage';
import Dashboard from './Dashboard/Dashboard';


function App() {
  return (
  <>
  <Router>
  <Switch>
    <Route exact path='/login'>
      <LoginPage />
    </Route>
    <Route exact path ='/register'>
      <RegisterPage />
    </Route>
    <Route exact path ='/dashboard'>
      <Dashboard />
    </Route>
    <Route path ='/'>
      <Redirect to='/dashboard'/>
    </Route>
  </Switch>
  </Router>
  </>
  );
}

export default App;
