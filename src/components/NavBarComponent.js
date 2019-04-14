import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

//This is my navbar component where I define the different NavLinks, the routes are defined in App.js.
export class NavBarComponent extends Component {
  render() {
    return (
      <div className="navBar">
      <ul>
        <li><NavLink to ='/login' activeClassName='selected'>login</NavLink></li>
        <li><NavLink to ='/dashboard' activeClassName='selected'>Dashboard</NavLink></li>
        <li><NavLink to ='/user' activeClassName='selected'>User</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default NavBarComponent
