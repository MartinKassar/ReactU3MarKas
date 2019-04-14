import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import './App.css';
import NavBarComponent from './components/NavBarComponent'
import DashboardScreen from './screens/DashboardScreen'
import LoginScreen from './screens/LoginScreen'
import UserScreen from './screens/UserScreen'


// Here are my routes and I render NavBarComponent as I want it to stick everywhere.
class App extends Component {
  // Redirect to login when clicked on user
  Redirect = () => {
    return <Redirect to ='/login'/>
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBarComponent />
          <Route path="/" exact component={LoginScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/dashboard" component={DashboardScreen} />
          <Route path="/user" exact component={this.Redirect} />
          <Route path="/user/:id" exact component={UserScreen} />

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
