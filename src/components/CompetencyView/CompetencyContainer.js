import React, { useEffect, useState } from 'react';
import DanceView from './DanceView';
import DanceSelector from './DanceSelector';
import { getAllDances } from '../../services/mm';
import Legend from './Legend';

const CompetencyContainer = () => {
  const [dances, setDances] = useState([]);
  const [selectedDance, setSelectedDance] = useState(0);

  const fetchDances = () => {
    getAllDances()
      .then((fetchedDances) => {
        setDances(fetchedDances);
        setDance(selectedDance);
      });
  };

  useEffect(fetchDances, []);

  const setDance = (n) => {
    //TODO: get levels from competency endpoint instead of all 0
    setDances(prevDances => {
      const newDances = prevDances.slice();
      if(!newDances[n].levels) {
        newDances[n].levels = Array(newDances[n].dancerQuantity).fill(0);
      }
      return newDances;
    });
    setSelectedDance(n);
  };

  const handleDanceChange = ({ target }) => {
    setDance(target.value);
  };

  const handlePositionClick = (i) => {
    const newDances = dances.slice();
    const levels = newDances[selectedDance].levels.slice();
    levels[i] = (levels[i] + 1) % 3;
    newDances[selectedDance].levels = levels;
    setDances(newDances);
  };

  let positions = [];
  if(dances.length > 0 && dances[selectedDance].levels) {
    positions = dances[selectedDance].levels;
  }
  return (
    <>
      <DanceSelector dances={dances} onDanceChange={handleDanceChange}/>
      <DanceView positions={positions} onPositionClick={handlePositionClick} />
      <Legend />
    </>
  );
};

export default CompetencyContainer;
