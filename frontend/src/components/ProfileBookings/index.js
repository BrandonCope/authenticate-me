import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import moment from "moment"
import "./ProfileBooking.css"
import EditDeleteFormModal, { useEditDeleteModal } from "../EditDeleteModal"
import { getBookings } from "../../store/bookingReducer"
const ProfileBookings = ({user}) => {
    const {id} = useParams()
    const bookings = useSelector((state) => state.bookingState)
    const bookingsArr = Object.values(bookings)
    const filterBookingArr = bookingsArr.filter(booking => booking?.userId === +id)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBookings())
    },[dispatch])
    return (
        <div>
            <div>
            <h1>My Reservations</h1>
            </div>
            <div className="res-container">
                {filterBookingArr.length ? <>
                    {filterBookingArr.map(booking => (
                        <div key={booking?.id} className="book-res-container">
                            <div>
                            <div>Estate:</div>
                            <div>{booking.Spot?.name}</div>
                            </div>
                            <div>
                            <div>Start Date:</div>
                            <div>{moment(booking?.startDate).format("MMM Do YY")}</div>
                            </div>
                            <div>
                            <div>End Date:</div>
                            <div>{moment(booking?.endDate).format("MMM Do YY")}</div>
                            </div>
                            <div><EditDeleteFormModal booking={booking} /></div>

                        </div>
                    ))}
                </> : <><div>
                        <h3>You do not have any reservations at the moment.</h3>
                    </div></>}
            </div>
        </div>
    )
}


export default ProfileBookings
