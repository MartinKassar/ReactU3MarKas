import React, { Component } from "react";
import styles from "./wrapper.module.css";
import { UserComponent } from "./UserComponent";
import { CardComponent } from "./CardComponent";
import { Link } from "react-router-dom";

// This class works as a dashboard that renders all components
class DashboardComponent extends Component {
  constructor() {
    super();
    this.state = {
      userList: [], // my array that will render in userComp
      value: "" // this is the value of the text inside the input
    };
  }

  //Sets state value to the value input
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  //This function adds user to the state userList
  //Since its immutable, we have to create a new array first and copy values of the state.userList
  //Then we have to push the state value (from input) to the useArray
  //Then we set the state userList to the new array, that is userArray.

  addUser = () => {
    let userArray = [...this.state.userList];
    userArray.push(this.state.value);
    this.setState({ userList: userArray });
  };

  // Here we assing userArray to the state userList
  // Then we pop a user from our new array, that is userArray.
  //Then we set state UserList to our new array, that is userArray.
  removeUser = () => {
    let userArray = [...this.state.userList];
    userArray.pop();
    this.setState({ userList: userArray });
  };

  //My toggle color for the user list, I'll send this as a state "textColor" as a props to UserComponent
  changeColor = () => {
    let letters = "0123456789ABCDEF"; //Collection of hexa colors
    let color = "#"; // The hexa color combination

    color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({ textColor: color });
  };

  // Here i fetch my api and then set the data from the api obj as state
  // Also have a catch in case of error
  componentDidMount() {
    fetch("http://api.softhouse.rocks/users")
      .then(res => res.json())
      .then(data => {
        this.setState({ userList: data });
      })
      .catch(error => console.error(error));
  }

  render() {
    // I create a new const to assing a map method through the state userList, we send this const as a props to UserComponent
    //I also define a link to a route on every user.

    const nameList = this.state.userList.map((users, i) => (
      <Link key={i} to={`/user/${users.id}`}>
        <li key={i}>{users.name}</li>
      </Link>
    ));

    return (
      <div className={styles.parentBox}>
        <CardComponent>
          <ul />
          <UserComponent myList={nameList} userColor={this.state.textColor} />
          <button onClick={this.changeColor}>toggle</button>
        </CardComponent>

        <CardComponent>
          <div>
            <input value={this.state.value} onChange={this.handleChange} />
            <br />
            <button onClick={this.addUser}>add</button>
            <button onClick={this.removeUser}>remove</button>
          </div>
        </CardComponent>
      </div>
    );
  }
}

export default DashboardComponent;
