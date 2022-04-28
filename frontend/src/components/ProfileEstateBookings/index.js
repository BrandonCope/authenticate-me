import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import moment from "moment"
import { getBookings } from "../../store/bookingReducer"
const ProfileEstateBookings = ({user}) => {
    const {id} = useParams()
    const bookings = useSelector((state) => state.bookingState)
    const bookingsArr = Object.values(bookings)
    const filterBookingArr = bookingsArr.filter(booking => booking?.Spot.userId === +id)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBookings())
    },[dispatch])
    return (
        <div>
            <div>
            <h1>My Estates Bookings</h1>
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
                            <div>Guest:</div>
                            <div>{booking.User?.username}</div>
                            </div>
                            <div>
                            <div>Start Date:</div>
                            <div>{moment(booking?.startDate).format("MMM Do YY")}</div>
                            </div>
                            <div>
                            <div>End Date:</div>
                            <div>{moment(booking?.endDate).format("MMM Do YY")}</div>
                            </div>
                            {/* <div><EditDeleteFormModal booking={booking} /></div> */}

                        </div>
                    ))}
                </> : <><div>
                        <h3>Your estates have not been booked at the moment.</h3>
                    </div></>}
            </div>
        </div>
    )
}


export default ProfileEstateBookings
