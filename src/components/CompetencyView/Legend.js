import React from 'react';
// import PropTypes from 'prop-types';
import legendStyles from './Legend.css';
import commonStyles from '../common.css';

const Legend = () => {
  return (
    <div className={legendStyles.Legend}>Click positions to set your proficiency. Key: Novice: <span className={commonStyles.level0} /> Intermediate: <span className={commonStyles.level1} /> Proficient: <span className={commonStyles.level2} /> </div>
  );
};

export default Legend;