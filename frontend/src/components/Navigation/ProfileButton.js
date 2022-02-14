import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import {NavLink, useHistory} from 'react-router-dom'

// import LoginFormModal from "../LoginFormModal";
// import SignUpFormModal from "../SignupFormModal";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);


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
    history.push('/')
  };



  return (
    <div className="profileContainer">
      <button className="profileButton" onClick={openMenu}>
        <i className="fas fa-solid fa-bars" />
        {/* <i class="fa-brands fa-airbnb"></i> */}
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
             <div className='loggedInUserNav'>
                <li className="profileItem" >{user.username}</li>
                <li className="profileItem">{user.email}</li>
                <li className="profileItem">
                  <button className="hostButton">

                <NavLink to={"/spots/new"}>Host a spot!</NavLink>
                  </button>
                </li>
                <li className="profileItem">
                  <button className="logoutButton" onClick={logout}>Log Out</button>
                </li>
        {/* <ProfileButton user={sessionUser} /> */}
           </div>
          {/* {sessionLinks} */}
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
