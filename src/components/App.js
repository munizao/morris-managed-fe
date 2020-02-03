import React from 'react';
import CompetencyContainer from './CompetencyView/CompetencyContainer';
import Header from './Header';
import { login, signedIn, logout } from '../services/mm';
import './App.css';


export default class App extends React.Component {
  state = {
    isSignedIn: false,
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
          this.setState({ isSignedIn: false });
        }
        else {
          this.setState({ isSignedIn: true, dancerId: res.dancer._id, name: res.dancer.name });
        }
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
          this.setState({ isSignedIn: true, name: res.dancer.name, dancerId: res.dancer._id });
        }
      });
  }

  handleInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleLogoutClick = () => {
    logout()
      .then(() => {
        this.setState({ isSignedIn: false });
      });
  }

  render() {
    return (
      <>
        <Header isSignedIn={this.state.isSignedIn} 
          dancerName={this.state.name} 
          authSubmit={this.handleAuthSubmit} 
          inputChange={this.handleInputChange} 
          logoutClick={this.handleLogoutClick} />
        <main>
          <CompetencyContainer />
        </main>
      </>
    );
  }
}
