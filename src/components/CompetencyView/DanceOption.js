import React from 'react';
import PropTypes from 'prop-types';

const DanceOption = ({ i, dance }) => {
  return (
    <option value={i}>{dance.name}</option>
  );
};

DanceOption.propTypes = {
  i: PropTypes.number.isRequired,
  dance: PropTypes.object
};

export default DanceOption;
