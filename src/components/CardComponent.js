import React, { Component } from 'react'
import styles from './wrapper.module.css'
import PropTypes from 'prop-types';

//This is my Card Component, this works as a container for the children I pass is, it works like a card interface.

export class CardComponent extends Component {

  // here is define the state to false, meaning that the info on click wont show at beginning.
  constructor() {
    super();
    this.state = {
      showInfo: false
    };
  }

  //this is a toggle to show info on click and also hide it on click by toggling the state.
  toggleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo })
  
  }

  //Setting up my if statement based on booleans to show the info and change text on btn
  render() {
    const myVar = this.props.myVar
    if (myVar === 'info' && this.state.showInfo === false) {
      this.btn = <button onClick={this.toggleInfo}>show info</button>
    } else if (myVar === 'info' && this.state.showInfo === true) {
      this.btn = <button onClick={this.toggleInfo}>hide info</button>
    }
    return (
      <div className={styles.box}>

        {this.props.children}
        <br />
        {this.state.showInfo && this.props.myInfo}
        <br />
        {this.btn}

      </div>
    );
  }
}
//Here I define my proptypes
// These are the props from LoginScreen myVar={'info'} myInfo={'this is info'}
CardComponent.propTypes = {
  myVar: PropTypes.string,
  myInfo: PropTypes.string
}

export default CardComponent