import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {

  

    return (
       
          <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className="navbar-brand">REACT CRUD</Link>
          <div>
          <ul className="navbar-nav mr-auto">
              <li>
               <Link to={'/'} className="navbar-link">Home </Link>
               <Link to={'/insert'} className="navbar-link">Insert </Link>
               <Link to={'/view'} className="navbar-link">View </Link>
             </li>
          </ul>
          </div>
         </nav>
        </div>
    
        
    )
};

export default Header;