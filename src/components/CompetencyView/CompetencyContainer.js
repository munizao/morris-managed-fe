import React from 'react';
import DanceView from './DanceView';
import DanceSelector from './DanceSelector';
import { allDances } from '../../services/mm';
import Legend from './Legend';

export default class CompetencyContainer extends React.Component {
  state = {
    dances: [],
    levels: [],
    selectedDance: 0,
  }

  componentDidMount() {
    this.fetchDances();
  }

  fetchDances() {
    return allDances()
      .then((dances) => {
        this.setState({ dances: dances });
        this.setDance(0);
      });
  }

  setDance(n) {
    //TODO: get levels from competency endpoint instead of all 0
    this.setState({ selectedDance: n, levels: Array(this.state.dances[n].dancerQuantity).fill(0) });
  }

  handleDanceChange = ({ target }) => {
    this.setDance(target.value);
    //this.setState({ selectedDance: target.value, levels: this.state.dances[target.value].levels });
  };

  handlePositionClick = (i) => {
    this.setState((state) => {
      const levels = state.levels.slice();
      levels[i] = (levels[i] + 1) % 3;
      return { ...state, levels };
    });
  };

  render() {
    return (
      <>
        <DanceSelector dances={this.state.dances} onDanceChange={this.handleDanceChange}/>
        <DanceView positions={this.state.levels} onPositionClick={this.handlePositionClick} />
        <Legend />
      </>
    );
  }
}
