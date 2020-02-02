import React from 'react';
import PropTypes from 'prop-types';
import styles from './Position.css';

const Position = ({ i, level, onClick }) => {
  return (
    <li onClick={() => onClick(i)}><div className={styles['level' + level]} /></li>
  );
};

Position.propTypes = {
  i: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Position;


