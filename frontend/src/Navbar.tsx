// This is the navbar component that is used in the App.tsx file and other files.

import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link className="navbar-link" to="./Banner">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="./Podcasts">
            Baconsale Podcast
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="./Movies">
            Movie Collection
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
