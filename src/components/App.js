import React from 'react';
import CompetencyContainer from './CompetencyView/CompetencyContainer';
import Header from './Header';
import { login, signedIn } from '../services/mm';


export default class App extends React.Component {
  state = {
    dancerId: '',
    name: '',
    email: '',
    password: ''
  }

  componentDidMount() {
    signedIn()
      .then((res) => {
        console.log(res);
        if(res.status) {
          return;
        }
        this.setState({ dancerId: res.dancer._id, name: res.dancer.name });
      });
  }

  handleAuthSubmit = (event) => {
    event.preventDefault();
    login(this.state.email, this.state.password)
      .then((res) => {
        if(res.status) {
          console.log(res); //TODO: handle case of invalid login
        }
        else {
          this.setState({ name: res.dancer.name, dancerId: res.dancer._id });
        }
      });
  }

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <>
        <Header authSubmit={this.handleAuthSubmit} inputChange={this.handleInputChange}  />
        <main>
          <CompetencyContainer />
        </main>
      </>
    );
  }
}
