import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import {NavLink} from 'react-router-dom'
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignupFormModal";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  // const dispatch = useDispatch();
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

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  if (user) {
    sessionLinks = (
      <div className='loggedOutUserNav'>
        <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <NavLink to={"/spots/new"}>Host a spot!</NavLink>
            </li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        {/* <ProfileButton user={sessionUser} /> */}
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
    <>
      <button onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          {sessionLinks}
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
