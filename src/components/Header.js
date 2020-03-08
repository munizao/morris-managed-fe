import React, { useState, useContext } from 'react';
import './Header.css';
import UserContext from './UserContext';
import { login, logout } from '../services/mm';


const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const [authInputs, setAuthInputs] = useState({ email: '', password: '' });
  const authSubmit = (event) => {
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

  const inputChange = ({ target }) => {
    setAuthInputs({ ...authInputs, [target.name]: target.value });
  };

  const logoutClick = () => {
    logout()
      .then(() => {
        setUser({ isSignedIn: false });
      });
  };
  return (
    <header>
      <h1>Morris Managed</h1>
      {user.isSignedIn ? 
        <div>Welcome, {user.name} <button onClick={logoutClick}>Sign out</button></div> : 
        <form onSubmit={authSubmit}>
          <input type="text" name="email" placeholder="email" value={authInputs.email} onChange={inputChange} />
          <input type="password" name="password" placeholder="password" value={authInputs.password} onChange={inputChange} />
          <button>Sign in</button>
        </form>
      }
    </header>
  );
};

export default Header;
