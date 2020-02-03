import React from 'react';
import DanceView from './DanceView';
import DanceSelector from './DanceSelector';
import { allDances } from '../../services/mm';
import Legend from './Legend';

export default class CompetencyContainer extends React.Component {
  state = {
    dances: [],
    // levels: [],
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
    this.setState((state) => {
      const dances = state.dances.slice();
      if(!this.state.dances[n].levels) {
        dances[n].levels = Array(this.state.dances[n].dancerQuantity).fill(0);
      }
      return { ...state, selectedDance: n, dances };
    });
  }

  handleDanceChange = ({ target }) => {
    this.setDance(target.value);
  };

  handlePositionClick = (i) => {
    this.setState((state) => {
      const dances = state.dances.slice();
      const levels = dances[state.selectedDance].levels.slice();
      levels[i] = (levels[i] + 1) % 3;
      dances[state.selectedDance].levels = levels;
      return { ...state, dances };
    });
  };

  render() {
    let positions = [];
    if(this.state.dances.length > 0 && this.state.dances[this.state.selectedDance].levels) {
      positions = this.state.dances[this.state.selectedDance].levels;
    }
    return (
      <>
        <DanceSelector dances={this.state.dances} onDanceChange={this.handleDanceChange}/>
        <DanceView positions={positions} onPositionClick={this.handlePositionClick} />
        <Legend />
      </>
    );
  }
}
