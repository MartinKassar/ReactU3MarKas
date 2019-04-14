import React, { Component } from 'react'
import { CardComponent } from '../components/CardComponent';

//This is my UserScreen component, I render specific information about a clicked user.
export class UserScreen extends Component {
  constructor() {
    super()
    this.state = {
      userDetails: '',
      toggleInfo: false
    }
  }
componentDidMount() {
  const userStatus = this.props.match.params.id //catching the params which sigifies the clicked user
  if (userStatus) { // Defining an if statements to either show the user or display that no user has been clicked.
    fetch(`http://api.softhouse.rocks/users/${userStatus}`)
    .then((res) => res.json())
    .then((data) => {
      
      console.log('userStatus', userStatus)
      console.log('data', data)
      this.setState({userDetails: data})
      console.log('state', this.state.userDetails)
    })
    .catch(error => console.error(error));
    // this.user = userStatus
  } else if (userStatus === undefined || userStatus === '' || userStatus === false) {
    this.userError = 'No selected user.'
  }
}

toggleInfo = () => {
  this.setState({ toggleInfo: !this.state.toggleInfo })
  

}

  render() {
  
    return (
      <div>
        <CardComponent>
        {this.userError}

        <div className={this.state.userDetails ? "" : "hidden"}><img src="https://placekitten.com/100/200" alt="cat" /></div> 
        
        <br />
          {this.state.userDetails.username} <br />
          {this.state.userDetails.name} <br />
          {this.state.userDetails.email} <br />

          {this.state.userDetails.address && this.state.toggleInfo &&
          <div>
            {this.state.userDetails.address.city} <br />
            {this.state.userDetails.address.street} <br />
            {this.state.userDetails.address.suite} <br />
          </div>}
            <button onClick={this.toggleInfo}>Toggle</button>
          
          
         
        </CardComponent>
      </div>
    )
  }
}

export default UserScreen
