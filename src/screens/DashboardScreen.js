import React, { Component } from 'react'
import DashboardComponent from '../components/DashboardComponent'

// Here is the screen for my dashboard, I render my dashboard Component here in this screen.
export class DashboardScreen extends Component {
  render() {
    return (
      <div>
        <DashboardComponent />
      </div>
    )
  }
}

export default DashboardScreen
