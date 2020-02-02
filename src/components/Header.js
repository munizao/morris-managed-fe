import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ isSignedIn, dancerName, authSubmit, inputChange, logoutClick }) => {
  return (
    <header>
      <h1>Morris Managed</h1>
      {isSignedIn ? 
        <div>Welcome, {dancerName} <button onClick={logoutClick}>Sign out</button></div> : 
        <form onSubmit={authSubmit}>
          <input type="text" name="email" placeholder="email" onChange={inputChange} />
          <input type="password" name="password" placeholder="password" onChange={inputChange} />
          <button>Sign in</button>
        </form>
      }
    </header>
  );
};

Header.propTypes = {
  isSignedIn: PropTypes.bool.isRequired,
  dancerName: PropTypes.string,
  authSubmit: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
  logoutClick: PropTypes.func.isRequired
};

export default Header;
