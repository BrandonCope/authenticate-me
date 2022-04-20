import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createBooking } from "../../store/bookingReducer";
import { useHistory } from 'react-router-dom'

import moment from "moment";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './BookingForm.css'
import { DateRangePicker } from "react-dates";

const Booking = ({spot, user}) => {
    const tomorrow = moment().add(1,'days')
    const defaultEnd = moment(tomorrow).add(2, 'days')

    const [startDate, setStartDate] = useState(tomorrow)
    const [endDate, setEndDate] = useState(defaultEnd)
    const [focusedInput, setFocusedInput] = useState(null)
    const [errors, setErrors] = useState([]);

    const history = useHistory()
    const dispatch = useDispatch()

    const rangeDate = ({ startDate, endDate }) => {
        setStartDate(moment(!startDate ? tomorrow : startDate));
        setEndDate(moment(endDate))
    }

    useEffect(() => {
        const validate = []
        if (startDate._d === "Invalid Date") validate.push('Please select a start date.')
        if (endDate._d === "Invalid Date") validate.push('Please select an end date.')

        setErrors(validate)

    }, [startDate, endDate])


    const rangeFocus = (focusedInput) => {
        setFocusedInput(focusedInput)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        if (errors.length === 0) {
            const buildBooking = {
                spotId: spot?.id,
                userId: user?.id,
                startDate: startDate,
                endDate: endDate
            }
            return dispatch(createBooking(buildBooking))
                .then(() => {
                    window.prompt("Booking Succesful! :)")
                    history.push(`/profiles/${user?.id}/reservations`)

                }).catch(
                async (res) => {
                    const data = await res.json();
                    if (data && data.errors) {
                        setErrors(data.errors)
                    }})

            }
        }

    return (
        <form onSubmit={handleSubmit}>
            <div className="booking-date-picker">
             {errors.length > 0 && errors.map((error, idx) => (
          <li className="booking-error" key={idx}>{error}</li>
        ))}
                <div className="booking-body-container">
                <div className="booking-label">
                    <h3>Start Date:</h3>
                    <h3>End Date:</h3>
                </div>
            <DateRangePicker
                startDate={startDate ? startDate : startDate = tomorrow } // momentPropTypes.momentObj or null,
                startDateId="qwerasdfzxcv" // PropTypes.string.isRequired,
                endDate={endDate} // momentPropTypes.momentObj or null,
                endDateId="xzcvasdfqwer" // PropTypes.string.isRequired,
                onDatesChange={rangeDate} // PropTypes.func.isRequired,
                focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={rangeFocus} // PropTypes.func.isRequired,
                />
            </div>
            <div className="booking-button">
                <button className="createReviewButton">Book</button>
            </div>
                </div>
        </form>
    )
}


export default Booking;
