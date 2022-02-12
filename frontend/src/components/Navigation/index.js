import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session";
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignupFormModal';
import './Navigation.css';
import logo from '../assets/logo.png'
// import SpotHostForm from '../SpotsHostForm';

function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector(state => state.session.user);



  const handleClick = (e) => {
    e.preventDefault();

    const demoLogin = {
      credential: "demo@user.com",
      password: "password"
    }

    setErrors([]);
    return dispatch(sessionActions.login(demoLogin)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  }

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
        <button className='loginModalButton' onClick={handleClick} >Demo</button>
      </>
    );
  }



  return (

    <ul className='navBar'>
        <NavLink exact to="/">
            <img alt='logo' className='logo' src={logo} />
        </NavLink>
        <h2 spellCheck="false">Heir B&B</h2>
        <div className='sessionLinks'>
        {isLoaded && sessionLinks}
        </div>

    </ul>
  );
}

export default Navigation;
