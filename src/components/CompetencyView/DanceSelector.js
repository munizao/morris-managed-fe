import React from 'react';
import PropTypes from 'prop-types';
import DanceOption from './DanceOption';

const DanceSelector = ({ dances, onDanceChange }) => {
  return (
    <select onChange={onDanceChange}>
      {dances.map((dance, i) => <DanceOption key={dance._id} i={i} dance={dance} />)}
    </select>
  );
};

DanceSelector.propTypes = {
  dances: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDanceChange: PropTypes.func.isRequired,
  // selected: PropTypes.object
};

export default DanceSelector;

