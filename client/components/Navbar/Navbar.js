import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../store';
import './NavbarStyle.css';

const Navbar = ({ handleClick, isLoggedIn }) => {
  return (
    <div id="main">
      <h1>Apollo-tv</h1>
      <nav>
        {isLoggedIn ? (
          <div id="links">
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to="/shows">Shows</Link>
            <Link to="/songs">Songs</Link>
            <Link to="/playlists">Playlists</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
          <div id="links">
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
