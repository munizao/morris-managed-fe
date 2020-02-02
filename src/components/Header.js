import React from 'react';
import PropTypes from 'prop-types';

const Header = () => {
  return (
    <header>
      <h1>Morris Managed</h1>
      <input placeholder="email" value="email" />
      <input placeholder="password" value="password" />
    </header>
  );
};

export default Header;
