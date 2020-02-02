import React from 'react';
import PropTypes from 'prop-types';
import './Position.css';
import styles from '../common.css';

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


