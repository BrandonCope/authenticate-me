import React from "react"
import ProfileBookings from "../ProfileBookings"
import './Profile.css'
const { NavLink, useParams, Switch, Route } = require("react-router-dom")

const ProfileNav = ({user}) => {
    const {id} = useParams()
    return (
        <div>
            <div>
                <nav className="profile-nav-links">
                    <NavLink to={`/profiles/${id}/reservations`}>Reservations</NavLink>
                    <NavLink to={`/profiles/${id}/listings`}>My Estates</NavLink>
                </nav>
            </div>
        </div>
    )
}


export default ProfileNav
