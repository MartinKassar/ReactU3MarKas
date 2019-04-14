import React, { Component } from "react";
import { CardComponent } from "../components/CardComponent";

//This is my UserScreen component, I render specific information about a clicked user.
export class UserScreen extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: "", //The API details about the user will store here
      toggleInfo: false //Boolean state that changes on toggle to toggle more user info.
    };
  }
  componentDidMount() {
    const userStatus = this.props.match.params.id; //catching the params which signifies the clicked user's ID
    if (userStatus) {
      // Defining an if statement if userStatus contains something (a param)
      fetch(`http://api.softhouse.rocks/users/${userStatus}`) //I gather data from my api matching my userStatus(ID)
        .then(res => res.json())
        .then(data => {
          this.setState({ userDetails: data }); // I then set it as state
        })
        .catch(error => console.error(error));
    }
  }
  //This works as a toggle function to expand and minimize info, it affects the state boolean.
  toggleInfo = () => {
    this.setState({ toggleInfo: !this.state.toggleInfo });
  };

  render() {
    return (
      <div>
        <CardComponent>
          <img src="https://placekitten.com/100/200" alt="cat" />
          <br />
          {this.state.userDetails.username} <br />
          {this.state.userDetails.name} <br />
          {this.state.userDetails.email} <br />
          {this.state.userDetails.address && this.state.toggleInfo && (
            <div>
              {this.state.userDetails.address.city} <br />
              {this.state.userDetails.address.street} <br />
              {this.state.userDetails.address.suite} <br />
            </div>
          )}
          <button onClick={this.toggleInfo}>Toggle</button>
        </CardComponent>
      </div>
    );
  }
}

export default UserScreen;
