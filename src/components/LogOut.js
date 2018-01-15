import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom'

export default class LogOut extends Component {

  constructor(props) {
    super(props);
  }

  killSession() {
    sessionStorage.setItem('id', 'null');
    this.props.logOutClicked();
  }

  render() {
    return <NavLink className={this.props.className} to="/" exact activeClassName="active" onClick={this.killSession}>Logout</NavLink>
  }
}
