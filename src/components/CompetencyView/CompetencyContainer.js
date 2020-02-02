import React from 'react';
import DanceView from './DanceView';
import DanceSelector from './DanceSelector';

const dances = [
  {
    name: 'Oak and Ash and Thorn',
    tradition: 'Moulton',
    dancerQuantity: 6,
    _id: 1,
    levels: [0, 0,
      1, 1,
      0, 0
    ]
  },
  {
    name: 'South Australia',
    tradition: 'Adderbury',
    dancerQuantity: 8,
    _id: 2,
    levels: [0, 0,
      1, 1,
      0, 0,
      2, 2
    ]
  },
  {
    name: 'Simon\'s Fancy',
    tradition: 'Bampton',
    dancerQuantity: 4,
    _id: 3,
    levels: [0, 0,
      2, 2
    ]
  }
];


export default class CompetencyContainer extends React.Component {
  state = {
    levels: dances[0].levels,
    selectedDance: 0, // levels should be field of dance
  }

  handleDanceChange = ({ target }) => {
    this.setState({ selectedDance: target.value, levels:dances[target.value].levels });
  };

  handlePositionClick = (i) => {
    console.log(i);
    this.setState((state) => {
      const levels = state.levels.slice();
      levels[i] = (levels[i] + 1) % 3;
      return { ...state, levels };
    });
  };

  render() {
    return (
      <>
        <DanceSelector dances={dances} onDanceChange={this.handleDanceChange}/>
        <DanceView positions={this.state.levels} onPositionClick={this.handlePositionClick} />
      </>
    );
  }
}
