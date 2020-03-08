import React, { useState, useEffect } from 'react';
import CompetencyContainer from './CompetencyView/CompetencyContainer';
import Header from './Header';
import { signedIn } from '../services/mm';
import UserContext from './UserContext';
import './App.css';


export default () => {
  const [user, setUser] = useState({
    isSignedIn: false,
    dancerId: '',
    name: '',
  });

  useEffect(() => {
    signedIn()
      .then((res) => {
        if(res.status) {
          setUser({ isSignedIn: false });
        }
        else {
          setUser({ isSignedIn: true, dancerId: res.dancer._id, name: res.dancer.name });
        }
      });
  }, []);



  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      <main>
        <CompetencyContainer />
      </main>
    </UserContext.Provider>
  );
};

