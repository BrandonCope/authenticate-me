import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignupFormModal';
import './Navigation.css';
import logo from '../assets/logo.png'
// import SpotHostForm from '../SpotsHostForm';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div className='loggedOutUserNav'>

        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignUpFormModal />
      </>
    );
  }

  return (

    <ul className='navBar'>
        <NavLink exact to="/">
          {/* <a href='' className='logo'> */}
            <img className='logo' src={logo} />
          {/* </a> */}
        </NavLink>
        <h1 spellCheck="false">Heir B&B</h1>
        <div className='sessionLinks'>
        {isLoaded && sessionLinks}
        </div>

    </ul>
  );
}

export default Navigation;
