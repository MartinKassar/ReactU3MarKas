import React, { Component } from "react";
import CardComponent from "../components/CardComponent";
//This is the login screen
export class LoginScreen extends Component {
  //This click event will push dashboard into history, meaning, it will route us to dashboardScreen
  redirectToDash = () => {
    this.props.history.push("/dashboard");
  };
  render() {
    return (
      <div>
        <CardComponent myVar={"info"} myInfo={"this is info"}>
          <input />
          <button onClick={this.redirectToDash}>Login</button>
        </CardComponent>
      </div>
    );
  }
}

export default LoginScreen;
