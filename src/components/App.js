import React, { useState, useEffect } from 'react';
import CompetencyContainer from './CompetencyView/CompetencyContainer';
import Header from './Header';
import { login, signedIn, logout } from '../services/mm';
import './App.css';


export default () => {
  const [user, setUser] = useState({
    isSignedIn: false,
    dancerId: '',
    name: '',
  });

  const [authInputs, setAuthInputs] = useState({ email: '', password: '' });

  useEffect(() => {
    signedIn()
      .then((res) => {
        console.log(res);
        if(res.status) {
          setUser({ isSignedIn: false });
        }
        else {
          setUser({ isSignedIn: true, dancerId: res.dancer._id, name: res.dancer.name });
        }
      });
  }, []);

  const handleAuthSubmit = (event) => {
    event.preventDefault();
    login(authInputs.email, authInputs.password)
      .then((res) => {
        if(res.status) {
          console.log(res); //TODO: handle case of invalid login
        }
        else {
          setUser({ isSignedIn: true, name: res.dancer.name, dancerId: res.dancer._id });
        }
      });
  };

  const handleInputChange = ({ target }) => {
    setAuthInputs({ [target.name]: target.value });
  };

  const handleLogoutClick = () => {
    logout()
      .then(() => {
        setUser({ isSignedIn: false });
      });
  };

  return (
    <>
      <Header isSignedIn={user.isSignedIn} 
        dancerName={user.name} 
        authSubmit={handleAuthSubmit} 
        inputChange={handleInputChange} 
        logoutClick={handleLogoutClick} />
      <main>
        <CompetencyContainer />
      </main>
    </>
  );
};

