import React from 'react';
import PropTypes from 'prop-types';
import './DanceView.css';

import Position from './Position';

const DanceView = ({ positions, onPositionClick }) => {
  return (<ul>
    {positions.map((position, i) => <Position key={i} i={i} onClick={onPositionClick} level={position}/>)}
  </ul>);
};

DanceView.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.number),
  onPositionClick: PropTypes.func.isRequired
};

export default DanceView;
