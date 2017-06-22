import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return(
    <nav className="w3-bar w3-light-grey">
         <span className="w3-bar-item">Kanbanello</span>
         <Link className="w3-bar-item w3-button" to='/'><i className="fa fa-home"></i>Home</Link>
         <Link className="w3-bar-item w3-button" to='/roster'>Roster</Link>
         <a href="#" className="w3-bar-item w3-button w3-right"><span className="glyphicon glyphicon-user"></span> Sign Up</a>
         <a href="#" className="w3-bar-item w3-button w3-right"><i className="fa fa-sign-in"></i> Login</a>
    </nav>
  );
}
