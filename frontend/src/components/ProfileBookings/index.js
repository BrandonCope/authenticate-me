import React from "react"
const { NavLink, useParams } = require("react-router-dom")

const ProfileBookings = ({user}) => {
    const {id} = useParams()
    return (
        <div>
            <h1>Hello, there!</h1>
        </div>
    )
}


export default ProfileBookings
