import React from 'react';
import { Link } from 'react-router-dom';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <nav className="w3-bar w3-light-grey">
           <span className="w3-bar-item">Kanbanello</span>
           <Link className="w3-bar-item w3-button" to='/'>
           <i className="fa fa-home" />Home</Link>
           <Link className="w3-bar-item w3-button" to='/iojson'>
           Import & Export JSON File</Link>
           <a href="#" className="w3-bar-item w3-button w3-right">
           <i className="fa fa-user-o" /> Sign Up</a>
           <a href="#" className="w3-bar-item w3-button w3-right">
           <i className="fa fa-sign-in" /> Login</a>
      </nav>
    );
  }
}
