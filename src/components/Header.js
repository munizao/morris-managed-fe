import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ authSubmit, inputChange }) => {
  return (
    <header>
      <h1>Morris Managed</h1>
      <form onSubmit={authSubmit}>
        <input type="text" name="email" placeholder="email" onChange={inputChange} />
        <input type="password" name="password" placeholder="password" onChange={inputChange} />
        <button>Sign in</button>
      </form>
    </header>
  );
};

Header.propTypes = {
  authSubmit: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired
};

export default Header;
