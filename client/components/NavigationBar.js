import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return(
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Kanbanello</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><Link to='/'>Home</Link></li>
          <li><Link to='/roster'>Roster</Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
         <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
         <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
       </ul>
      </div>
    </nav>
  );
}
